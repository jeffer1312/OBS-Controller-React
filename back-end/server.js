const express = require("express");
const OBSWebSocket = require("obs-websocket-js");
const cors = require("cors");
const obs = new OBSWebSocket();
const app = express();

obs
    .connect({
        address: "localhost:4444",
        password: "1312911415"
    })
    .then(() => {
        return obs.send("GetSceneList");
    });

app.use(cors());
app.use(express.json());

const obsConect = async() => {};
const Dados = {
    async index(req, res) {
        await obsConect()
            .then(() => {
                return obs.send("GetSceneList");
            })
            .then(data => {
                return res.json(data);
            });
    },
    async update(req, res) {
        await obsConect()
            .then(() => {
                return obs.send("GetSceneList");
            })
            .then(data => {
                const { sceneName } = req.body;
                data.scenes.forEach(scene => {
                    if (scene.name !== data["current-scene"]) {
                        obs.send(
                            "SetCurrentScene", {
                                "scene-name": sceneName
                            },
                            res.json(sceneName)
                        );
                    }
                });
            });
    },
    async render(req, res) {
        let { visible, sourceName } = req.body;
        // if (visible !== ) {
        //     let visible = false;
        //     console.log(visible);
        // } else {
        //     let visible = true;
        //     console.log(visible);
        // }
        obs.send(
            "SetSceneItemProperties", {
                item: sourceName,
                visible: visible
            },
            res.json({ visible, sourceName })
        );
    }
};

app.get("/obs", Dados.index);
app.put("/obs", Dados.update);
app.post("/obs", Dados.render);

app.listen(3333);