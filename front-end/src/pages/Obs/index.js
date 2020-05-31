import React, { useState, useEffect, Component } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api.js";
//import Modal from "./modal";
import "./styles.css";

export default function Obs() {
  const [scenes, setScenes] = useState([]);
  const [currentScene, setCurrentScene] = useState([]);
  const [transmissaoOn, setTransmissaoOn] = useState(false);

  const history = useHistory();
  async function startStreaming(on) {
    const res = await api.post("/start", { start: on });
    if (res.data.message === "Transmissao iniciada") {
      setTransmissaoOn(true);
    } else {
      setTransmissaoOn(false);
    }
  }
  async function loadData() {
    try {
      const res = await api.get(`/obs`);
      const { scenes, currentScene } = res.data;
      setCurrentScene(currentScene);
      console.log(currentScene);
      setScenes(await res.data.scenes);
    } catch (error) {
      console.log(error);
    }
  }

  async function switchScenes(scene) {
    await api.put("/obs", { sceneName: scene.name });
    setCurrentScene(scene.name);

    if (scene.sources > []) {
      const sceneJson = JSON.stringify(scene.sources);
      localStorage.setItem("scene", sceneJson);
      history.push("/sources");
    } else {
      console.log("sources vazio");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [currentScene]);

  return (
    <div className="container">
      <h1> Cenas </h1>
      <div className="scenes">
        {scenes.map((scene) => (
          <button
            className="btn-scenes"
            key={scene.name}
            onClick={() => {
              switchScenes(scene);
            }}
          >
            {scene.name}
          </button>
        ))}
      </div>

      <div className="transmissao">
        <button className="btn-streaming" onClick={() => startStreaming(true)}>
          Iniciar Trasmissao
        </button>
        <button className="btn-streaming" onClick={() => startStreaming(false)}>
          Parar Trasmissao
        </button>
      </div>
    </div>
  );
}
