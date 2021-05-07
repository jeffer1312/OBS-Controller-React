/************IMPORTAÇOES ********************/
import React, { useState, useEffect } from 'react';
import { link } from 'next/link';
import {
  Container,
  Footer,
  Button,
  Title,
  Scenes,
  Controls,
  ButtonControls,
  TimeStream,
  KeyButton,
  InputKey,
  ContainerStream,
} from './styles';
import { FadeOutUp } from 'animate-css-styled-components';
import api from '../../services/api.js';
/************FIM DAS IMPORTAÇOES ********************/

export default function Obs() {
  //const router = useRouter();
  /*************** VARIAVEIS DE ESTADO **********************/

  const [scenes, setScenes] = useState([]);
  const [streaming, setStreaming] = useState({});
  const [streamTimeCode, setStreamTimeCode] = useState('');
  const [keyStream, setKeyStream] = useState();
  const [settings, setSettings] = useState({});

  const [currentScene, setCurrentScene] = useState([]);
  const [transmissaoOn, setTransmissaoOn] = useState();

  /*************** FUNÇOES DA API**********************/

  async function startStreaming(on) {
    const res = await api.post('/start', { start: on });
    if (res.data.message === 'Transmissao iniciada') {
      setTransmissaoOn(true);
    } else {
      setTransmissaoOn(false);
    }
    statusStreaming();
  }
  async function keySettings() {
    await api.post('/settings', { key: keyStream });
  }
  async function GetkeySettings() {
    const res = await api.get('/settings');
    setSettings(res.data.data.settings);
  }
  async function loadData() {
    try {
      const res = await api.get(`/obs`);
      const { scenes, currentScene } = res.data;
      setCurrentScene(currentScene);

      setScenes(scenes);
    } catch (error) {
      console.log(error);
    }
  }

  async function switchScenes(scene) {
    await api.put('/obs', { sceneName: scene.name });
    setCurrentScene(scene.name);

    if (scene.sources > []) {
      const sceneJson = JSON.stringify(scene.sources);
      const sceneName = JSON.stringify(scene.name);

      localStorage.setItem('scene', sceneJson);
      localStorage.setItem('sceneName', sceneName);
      // router.push('/sources');
    } else {
      console.log('sources vazio');
    }
  }
  async function statusStreaming() {
    const res = await api.get('/status');
    const { streaming } = res.data.data;

    setStreaming(streaming);
  }
  async function TimeStreaming() {
    const res = await api.get('/status');
    const { streamTimecode } = res.data.data;

    setStreamTimeCode(streamTimecode);
  }
  /*************** FUNÇÕES DA APLICAÇÃO **********************/

  async function handleKeyPost(e) {
    keySettings();
  }
  async function handleChange(e) {
    const { value } = e.target;

    setKeyStream(value);
  }
  function TimeClock() {
    TimeStreaming();
    setInterval(function () {
      TimeStreaming();
    }, 60000);
    if (streamTimeCode !== undefined) {
      const timeStream = streamTimeCode.substring(0, streamTimeCode.length - 4);
      return <TimeStream>{timeStream}</TimeStream>;
    } else {
      return <TimeStream>Parado</TimeStream>;
    }
  }
  /***************  HOOKS **********************/

  useEffect(() => {
    loadData();
    statusStreaming();
    GetkeySettings();
  }, []);

  useEffect(() => {
    loadData();
    statusStreaming();
    GetkeySettings();
  }, [currentScene]);

  useEffect(() => {
    loadData();
    statusStreaming();
  }, [transmissaoOn]);

  /***************  HOOKS **********************/

  return (
    <>
      <Container>
        <FadeOutUp duration='0.8s' delay='0.4s'>
          <Title> Cenas </Title>
        </FadeOutUp>
        <Scenes>
          {scenes.map(scene => (
            <Button
              active={currentScene === scene.name}
              key={scene.name}
              onClick={() => {
                switchScenes(scene);
              }}
            >
              {scene.name}
            </Button>
          ))}
        </Scenes>
      </Container>
      <ContainerStream>
        <KeyButton onClick={handleKeyPost}>Trocar Chave de Stream</KeyButton>
        <InputKey
          type='text'
          placeholder={settings.key}
          onChange={handleChange}
        />
      </ContainerStream>

      <Footer>
        <Controls>
          <ButtonControls
            onClick={() => startStreaming(true)}
            trasmission={streaming === true}
          >
            Iniciar Trasmissao
          </ButtonControls>
          <ButtonControls
            onClick={() => startStreaming(false)}
            trasmission={streaming === true}
          >
            Parar Transmissao
          </ButtonControls>
        </Controls>
        {TimeClock()}
      </Footer>
    </>
  );
}
