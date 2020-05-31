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

//   .then(() => {
//     return obs.send("GetSceneList");
//   });

//const obsConect = async () => {};
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
    //   await obsConect()
    //     .then(() => {
    //       return obs.send("GetSceneList");
    //     })
    //     .then((data) => {
    //       return res.json(data);
    //     });
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
    // obs.on("SwitchScenes", (data) => {
    //   res.json(data);
    // });
    // await turnOn

    //   .then(() => {
    //     obs
    //       .on("SwitchScenes")
    //       .then((data) => {

    //       })
    //       .catch((err) => {
    //         console.log(`promisse rejected 1 ${err}`);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(`promisse rejected 2 ${err}`);
    //   });
    //   await obsConect()
    //     .then(() => {
    //       return obs.send("GetSceneList");
    //     })
    //     .then((data) => {
    //       const { sceneName } = req.body;
    //       data.scenes.forEach((scene) => {
    //         if (scene.name !== data["current-scene"]) {
    //           obs.send(
    //             "SetCurrentScene",
    //             {
    //               "scene-name": sceneName,
    //             },
    //             res.json(sceneName)
    //           );
    //         }
    //       });
    //     });
  },
  async render(req, res) {
    let { visible, sourceName } = req.body;

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
        return res.json({ message: "Transmissao iniciada" });
      });
    } else {
      obs.sendCallback("StopStreaming", (error) => {
        return res.json({ message: "Transmissao encerada" });
      });
    }
  },
};

app.get("/obs", Dados.index);
app.put("/obs", Dados.update);
app.put("/render", Dados.render);
app.post("/start", Dados.start);

app.listen(3333);
