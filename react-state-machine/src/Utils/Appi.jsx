export const fetchCountries = () =>{
  fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json()); 
  }