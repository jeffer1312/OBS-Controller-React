import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Flex,
  Button,
  Text,
  Box,
  Grid,
  GridItem,
  Input,
} from '@chakra-ui/react';
//import { FadeOutUp } from 'animate-css-styled-components';
import apiobs from './api/apiobs';
/************FIM DAS IMPORTAÇOES ********************/

export default function Obs() {
  const router = useRouter();
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
    const res = await apiobs.post('/start', { start: on });
    if (res.data.message === 'Transmissao iniciada') {
      setTransmissaoOn(true);
    } else {
      setTransmissaoOn(false);
    }
    statusStreaming();
  }
  async function keySettings() {
    await apiobs.post('/settings', { key: keyStream });
  }
  async function GetkeySettings() {
    const res = await apiobs.get('/settings');
    setSettings(res.data.data.settings);
  }
  async function loadData() {
    try {
      const res = await apiobs.get(`/obs`);
      const { scenes, currentScene } = res.data;
      setCurrentScene(currentScene);

      setScenes(scenes);
    } catch (error) {
      console.log(error);
    }
  }

  async function switchScenes(scene) {
    await apiobs.put('/obs', { sceneName: scene.name });
    setCurrentScene(scene.name);

    if (scene.sources > []) {
      const sceneJson = JSON.stringify(scene.sources);
      const sceneName = JSON.stringify(scene.name);

      localStorage.setItem('scene', sceneJson);
      localStorage.setItem('sceneName', sceneName);
      router.push('/sources');
    } else {
      console.log('sources vazio');
    }
  }
  async function statusStreaming() {
    const res = await apiobs.get('/status');
    const { streaming } = res.data.data;

    setStreaming(streaming);
  }
  async function TimeStreaming() {
    const res = await apiobs.get('/status');
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
      return <span>{timeStream}</span>;
    } else {
      return <span>Parado</span>;
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
      <Flex gridArea='titleCena' flexDir='column'>
        <Flex justifyContent='center' width='100%' duration='0.8s' delay='0.4s'>
          <Text> Cenas </Text>
        </Flex>
        <Flex
          flexWrap='wrap'
          justifyContent='center'
          width='100%'
          gridArea='buttonCenas'
        >
          {scenes.map(scene => (
            <Button
              height='200px'
              width='200px'
              borderRadius='100px'
              margin='2%'
              // active={currentScene === scene.name}
              key={scene.name}
              onClick={() => {
                switchScenes(scene);
              }}
            >
              {scene.name}
            </Button>
          ))}
        </Flex>
      </Flex>
      <Flex flexDir='column' justifyContent='center' gridArea='footer'>
        <Flex justifyContent='center'>
          <Button borderRadius='10px' onClick={handleKeyPost}>
            Trocar Chave de Stream
          </Button>
          <Input
            marginLeft='1%'
            type='text'
            width='50%'
            placeholder={settings.key}
            onChange={handleChange}
          />
        </Flex>

        <Flex justifyContent='center'>
          <Flex>
            <Button
              margin='2%'
              onClick={() => startStreaming(true)}
              //trasmission={streaming === true}
            >
              Iniciar Trasmissao
            </Button>
            <Button
              margin='2%'
              onClick={() => startStreaming(false)}
              // trasmission={streaming === true}
            >
              Parar Transmissao
            </Button>
          </Flex>
          {TimeClock()}
        </Flex>
      </Flex>
    </>
  );
}
