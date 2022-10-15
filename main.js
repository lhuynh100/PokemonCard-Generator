

// fetch API
const url="https://pokeapi.co/api/v2/pokemon/";
const card =document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  // Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;

  // Comebine the pokeapi url with pokemon id
  const finalUrl = url + id;

  // Fetch generated URL
  fetch(finalUrl)
  .then((response)=> response.json())
  .then((data) => { 
    generateCard(data);
});
};