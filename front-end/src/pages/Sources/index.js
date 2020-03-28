import React, { useState, useEffect } from "react";
import { Button, Container, SourcesDiv } from "./styles.js";
import { Link, UseHistory } from "react-router-dom";
import api from "../../services/api";
//import "./styles.css";

export default function Sources(props) {
  const sourcesJson = localStorage.getItem("scene");
  const sources = JSON.parse(sourcesJson);
  const [type, setType] = useState("");
  const mapSource = sources.map(source => source.render);
  const [sourceRender, setSourceRender] = useState(mapSource);
  //console.log(sourceRender);

  //ativar ou desativar a fonte
  async function res(source) {
    const response = await api.post("/obs", {
      sourceName: source.name,
      visible: !sourceRender
    });

    // setType(response.map(visible => visible));
    //console.log(type);
    //console.log(response.data.sourceName);
    setSourceRender(await response.data.visible);
  }
  function teste(sourcefunc) {
    const teste = sources.map(source => {
      return source.name === sourcefunc.name
        ? { ...source.name, render: !source.render }
        : source;
    });

    setSourceRender(teste);
    console.log(sourceRender);
  }

  useEffect(() => {}, [sourceRender]);

  let valor = sourceRender.toString();
  //   console.log(`valor :${valor}`);
  return (
    <Container>
      {/* <SourcesDiv> */}
      <>
        {sources.map(source => (
          <Button
            type='sources'
            className='btn-scenes'
            key={source.name}
            onClick={() => res(source)}>
            {source.name}
          </Button>
        ))}
        <Link to='/'>Voltar</Link>
      </>
      {/* </SourcesDiv> */}
    </Container>
  );
}
