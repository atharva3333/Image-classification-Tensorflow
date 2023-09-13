async function app() {
    const webcamElement = document.getElementById("video"); // Use getElementById to select the video element.
    const model = await mobilenet.load();
    const webcam = await tf.data.webcam(webcamElement);
  
    const captureButton = document.getElementById("capture-button"); // Use getElementById to select the button element.
    captureButton.addEventListener("click", async () => {
      const img = await webcam.capture();
      const predictions = await model.classify(img);
      img.dispose();
      console.log(predictions); // You can do something with predictions here.
    });
  }
  
  app();
  