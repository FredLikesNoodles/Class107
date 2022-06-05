function start() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  modell = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/_rlrurSbT/model.json",
    modelReady
  );
  modell.classify(gotResults);
}
