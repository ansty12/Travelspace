document.querySelector("button").addEventListener("click", function () {

  const inputs = document.querySelectorAll(".input");

  const depart = inputs[0].value.trim();
  const arrivee = inputs[1].value.trim();
  const date = inputs[2].value;

  if (!depart || !arrivee || !date) {
    alert("Veuillez remplir le départ, l'arrivée et la date.");
    return;
  }

  localStorage.setItem("depart", depart);
  localStorage.setItem("arrivee", arrivee);
  localStorage.setItem("date", date);

  window.location.href = "results.html";
});
