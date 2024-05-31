import * as cocossd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { showResult, startWebcam, takePicture } from "./utils";

const webcamButton = document.getElementById("webcam");
const captureButton = document.getElementById("pause");
const video = document.querySelector("video");

let model;

const init = async () => {
  model = await cocossd.load();
};

webcamButton.onclick = () => startWebcam(video);
captureButton.onclick = () => takePicture(video, predict);

const predict = async (img) => {
  const predictions = await model.detect(img);
  showResult(predictions);
};

init();
