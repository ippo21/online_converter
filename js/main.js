document.getElementById("fromInput").addEventListener("input", function(e) {
  let fromInput = e.target.value;
  console.log(fromInput);

  document.getElementById("gramsOutput").innerHTML = fromInput * 453.5921;
  document.getElementById("kgOutput").innerHTML = fromInput * 0.453592;
  document.getElementById("ozOutput").innerHTML = fromInput * 15.99998694864;
});
