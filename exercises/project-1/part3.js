import "@tensorflow/tfjs";
// import "@mediapipe/face_detection"
import * as faceDetection from "@tensorflow-models/face-detection";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-core";

import { drawFaceBox, startWebcam, takePicture } from "./utils";

const webcamButton = document.getElementById("webcam");
const captureButton = document.getElementById("pause");
const video = document.querySelector("video");

let model, detector;

const init = async () => {
  model = faceDetection.SupportedModels.MediaPipeFaceDetector;
  detector = await faceDetection.createDetector(model, { runtime: "tfjs" });
};

webcamButton.onclick = () => startWebcam(video);
captureButton.onclick = () => takePicture(video, predict);

const predict = async (img) => {
  console.log("do the work");
  const predictions = await detector.estimateFaces(img, {
    flipHorizontal: false,
  });
  drawFaceBox(img, predictions);
};

init();
