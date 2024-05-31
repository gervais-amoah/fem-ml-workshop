import * as cocossd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { handleFilePicker, showResult } from "./utils";

let model;

const init = async () => {
  model = await cocossd.load();

  handleFilePicker(predict);
};

const predict = async (img) => {
  console.log("ok - start");
  const predictions = await model.detect(img);
  console.log(predictions);
  showResult(predictions);
};

init();
