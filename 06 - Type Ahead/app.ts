const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities: string[] = [];

const response = fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter((city) => {
    const regex = new RegExp(wordToMatch, "gi");

    return city.city.match(regex) || city.state.match(regex);
  });
}

function numbersWithCommas(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

     
}

function displayMatches(){
      const matchArray = findMatches(this.value, cities);

     const html = matchArray.map(city => {
          const regex = new RegExp(this.value, 'gi');
          const cityName = city.city.replace(regex, `<span class="hl"> ${this.value} </span>`);
          const stateName = city.city.replace(
            regex,
            `<span class="hl"> ${this.value} </span>`
          );

           return `
           <li>
           <span class="name">${cityName}, ${stateName}</span>
           <span class="population">${numbersWithCommas(city.population)}</span>
           </li>
           `;
     }).join('');

     suggestions.innerHTML = html;
}

const searchInput: HTMLInputElement = document.querySelector('.search');
const suggestions: HTMLUListElement = document.querySelector(".suggestions");

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener("keyup", displayMatches);

