function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function showListHandler() {
  const newInput = this.value;
  const matchArray = findMatches(newInput, cities);
  console.log(matchArray);
  
  log.push({
    handler: "showListHandler",
    newInput,
    cities: matchArray
  });
}


