

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

let appendTypes = (types) => {
  types.forEach(item => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span)
  });
};

 // Set themeColor based on pokemon type
 let styleCard = color => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types span")
  .forEach((typeColor) => {typeColor
  .style.backgroundColor = color;
    });
  };

  btn.addEventListener("click", getPokeData);
  window.addEventListener("load", getPokeData);

  // toggle button for dark and light with background
toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.background = '#E7E7E6';
      body.style.color = 'black';
      body.style.transition = '2s';
    
  }else{
      body.style.background = '#152028';
      body.style.color = '#ffffff';
      body.style.transition = '2s';
  }
});