function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function copyHandler() {
  const inputField = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");
  const newInput = this.children[0].innerText;
  inputField.value = newInput;
  suggestions.innerHTML = "";
  
  log.push({
    handler: "copyHandler",
    newInput
  });
}

function showListHandler() {
  const newInput = this.value;
  const matchArray = findMatches(newInput, cities);
  const suggestions = document.querySelector(".suggestions");
  const html = matchArray
    .map(place => {
      const regex = new RegExp(newInput, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${newInput}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${newInput}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
  for (let c of suggestions.children) {
    c.addEventListener("click", copyHandler);
  }

  log.push({
    handler: "showListHandler",
    newInput,
    cities: matchArray
  });
}
