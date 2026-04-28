function show(car) {
  let text = "";

  if (car === "Clio") {
    text = "Clio: petite voiture économique.";
  } else if (car === "Megane") {
    text = "Megane: confortable et moderne.";
  } else if (car === "Captur") {
    text = "Captur: SUV urbain.";
  }

  document.getElementById("info").innerText = text;
}
