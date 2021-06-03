fetch("https://randomuser.me/api/?results=5")
  .then((response) => response.json())
  .then((myJson) => console.log(myJson.results));
