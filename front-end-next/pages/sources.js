import { useState, useEffect } from 'react';
import Link from 'next/link';
import UseRouter, { useRouter } from 'next/router';
import apiobs from './api/apiobs.js';
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
import axios from 'axios';

export default function Sources(props) {
  const UseRouter = useRouter();
  console.log(localStorage);
  // if (!localStorage.getItem('scene')) {
  //   UseRouter.push('/');
  // }
  const sourcesJson = localStorage.getItem('scene');
  const sceneNameJson = localStorage.getItem('sceneName');

  const sources = JSON.parse(sourcesJson);
  const sourceNames = JSON.parse(sceneNameJson);
  const [scenes, setScenes] = useState([]);

  // const [currentSource, setCurrentSource] = useState();
  // const [type, setType] = useState("");
  //const mapSource2 = sources.map((source) => source);
  const mapSource = sources.map(source =>
    source.render === true ? source.name : ''
  );

  const [visibleSources, setVisibleSources] = useState(mapSource);
  //console.log(sourceRender);
  async function loadData() {
    try {
      const res = await apiobs.get(`/obs`);
      const { scenes } = res.data;
      const filteredScenes = scenes.filter(item => item.name === sourceNames);
      const sources = filteredScenes[0].sources;
      setScenes(sources);
    } catch (error) {
      console.log(error);
    }
  }
  //ativar ou desativar a fonte
  async function res(source) {
    await apiobs.put('/render', {
      sourceName: source.name,
      visible: !source.render,
    });

    handleVisibleSource(source);
  }
  function handleVisibleSource(source) {
    const alredySelected = visibleSources.findIndex(
      item => item === source.name
    );

    if (alredySelected >= 0) {
      const filteredSources = visibleSources.filter(
        item => item !== source.name
      );
      setVisibleSources(filteredSources);
    } else {
      setVisibleSources([...visibleSources, source.name]);
    }
  }
  // useEffect(() => {
  //   loadData();

  // }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function loadData() {
      try {
        const res = await apiobs.get(`/obs`, { cancelToken: source.token });
        const { scenes } = res.data;
        const filteredScenes = scenes.filter(item => item.name === sourceNames);
        const sources = filteredScenes[0].sources;
        setScenes(sources);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('canceled');
        } else {
          throw error;
        }
      }
    }
    loadData();
    return () => {
      source.cancel();
    };
    //console.log(`sourcerjson${mapSource}`);
  }, [visibleSources, sourceNames]);

  // let valor = sourceRender.toString();
  //   console.log(`valor :${valor}`);
  return (
    <Flex>
      <Button>
        {scenes.map(source => (
          <Button
            visible={visibleSources.includes(source.name)}
            key={source.name}
            onClick={() => res(source)}
          >
            {source.name}
          </Button>
        ))}
      </Button>
      <Link href='/'>Voltar</Link>
    </Flex>
  );
}
