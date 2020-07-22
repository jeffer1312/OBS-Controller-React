const express = require("express");
const OBSWebSocket = require("obs-websocket-js");
const cors = require("cors");
const obs = new OBSWebSocket();
const app = express();
app.use(cors());
app.use(express.json());

const turnOn = obs.connect({
  address: "localhost:4444",
  password: "1312911415",
});

const Dados = {
  async index(req, res) {
    await turnOn
      .then(() => {
        obs.send("GetSceneList").then((data) => {
          return res.json(data);
        });
      })
      .catch(() => {
        console.log("promisse rejected");
      });
  },
  async update(req, res) {
    obs.sendCallback("GetSceneList", {}, (err, data) => {
      const { sceneName } = req.body;
      if (sceneName !== data["current-scene"]) {
        obs.send(
          "SetCurrentScene",
          {
            "scene-name": sceneName,
          },
          res.json(sceneName)
        );
      } else {
        return res.json({ Cena: "cena Ja e a Atual" });
      }
    });
  },
  async render(req, res) {
    let { visible, sourceName } = req.body;
    console.log(visible);

    turnOn.then(() => {
      obs.send(
        "SetSceneItemProperties",
        {
          item: sourceName,
          visible: visible,
        },
        res.json({ visible, sourceName })
      );
    });
  },
  async start(req, res) {
    const { start } = req.body;
    if (start === true) {
      obs.sendCallback("StartStreaming", (error) => {
        if (!error) {
          return res.json({ message: "Transmissao iniciada" });
        } else {
          return res.json(error);
        }
      });
    } else {
      obs.sendCallback("StopStreaming", (error) => {
        return res.json({ message: "Transmissao encerada" });
      });
    }
  },
  async status(req, res) {
    obs.sendCallback("GetStreamingStatus", {}, (error, data) => {
      return res.json({ data });
    });
  },
  async GetStreamSettings(req, res) {
    obs.sendCallback("GetStreamSettings", {}, (error, data) => {
      return res.json({ data });
    });
  },
  async SetStreamSettings(req, res) {
    const key = req.body;
    obs.sendCallback("SetStreamSettings", { settings: key }, (error, data) => {
      return res.json(key);
    });
  },
};

app.get("/obs", Dados.index);
app.put("/obs", Dados.update);
app.put("/render", Dados.render);
app.post("/start", Dados.start);
app.get("/status", Dados.status);
app.post("/settings", Dados.SetStreamSettings);
app.get("/settings", Dados.GetStreamSettings);

app.listen(3333);
