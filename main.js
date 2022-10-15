

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

// Generate Card

let generateCard = (data) => {
  // Grab necessary data and assign it to variables

  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  // Set themeColor based on pokemon type
  const themeColor = typeColor[data.types[0].type.name];
  console.log(themeColor);

  card.innerHTML = `
  <p class="hp">
    <span>HP</span>
    ${hp}
  </p>
  <img src=${imgSrc} />
  <h2 class="poke-name">${pokeName}</h2>
  <div class="types">
  </div>
  <div class="stats">
    <div>
        <h3>${statAttack}</h3>
        <p>Attack</p>
    </div>
    <div>
      <h3>${statDefense}</h3>
      <p>Defense</p>
  </div>
  <div>
    <h3>${statSpeed}</h3>
    <p>Speed</p>
  </div>
  </div>
</div>
`;


  // Append Pokemon Type to the card
  appendTypes(data.types);
  styleCard(themeColor);
};