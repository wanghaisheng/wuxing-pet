const state = {
  health: 100,
  hunger: 100,
  happiness: 100,
  energy: 100,
};

const healthBar = document.getElementById('health-bar');
const hungerBar = document.getElementById('hunger-bar');
const happinessBar = document.getElementById('happiness-bar');
const energyBar = document.getElementById('energy-bar');
const petImage = document.getElementById('pet-image');
const feedBtn = document.getElementById('feed-btn');
const playBtn = document.getElementById('play-btn');
const sleepBtn = document.getElementById('sleep-btn');
const loveBtn = document.getElementById('love-btn');

const updatePetImage = (statePet) => {
  switch (statePet) {
    case 'normal':
      petImage.src = './images/normal.png';
      break;
    case 'sad':
      petImage.src = './images/sad.png';
      break;
    case 'food':
      petImage.src = './images/food.png';
      break;
    case 'play':
      petImage.src = './images/play.png';
      break;
    case 'sleep':
      petImage.src = './images/sleep.png';
      break;
    case 'love':
      petImage.src = './images/love.png';
      break;
    default:
      petImage.src = './images/normal.png';
  }
};

const checkMood = () => {
  if (state.health < 20 || state.hunger < 20 || state.happiness < 20 || state.energy < 20) {
    updatePetImage('sad');
  } else {
    updatePetImage('normal');
  }
};

const updateStats = () => {
  healthBar.value = state.health;
  hungerBar.value = state.hunger;
  happinessBar.value = state.happiness;
  energyBar.value = state.energy;

  checkMood();
};

const degradeStats = () => {
  state.hunger = Math.max(0, state.hunger - 5);
  state.happiness = Math.max(0, state.happiness - 3);
  state.energy = Math.max(0, state.energy - 2);

  if (state.hunger <= 20 || state.happiness <= 20 || state.energy <= 20) {
    state.health = Math.max(0, state.health - 5);
  }

  updateStats();
};

setInterval(degradeStats, 5000);

const feedPet = () => {
  if (state.hunger < 100) {
    state.hunger = Math.min(100, state.hunger + 20);
    state.health = Math.min(100, state.health + 5);

    updatePetImage('food');

    setTimeout(() => {
      updatePetImage('normal');
      updateStats();
    }, 1000);
  }
};

const playPet = () => {
  if (state.happiness < 100) {
    state.happiness = Math.min(100, state.happiness + 15);
    state.energy = Math.max(0, state.energy - 5);
    state.health = Math.min(100, state.health + 5);

    updatePetImage('play');

    setTimeout(() => {
      updatePetImage('normal');
      updateStats();
    }, 1000);
  }
};

const petToSleep = () => {
  if (state.energy < 100) {
    state.energy = Math.min(100, state.energy + 20);
    state.health = Math.min(100, state.health + 5);

    updatePetImage('sleep');

    setTimeout(() => {
      updatePetImage('normal');
      updateStats();
    }, 1000);
  }
};

const lovePet = () => {
  if (state.happiness < 100) {
    state.happiness = Math.min(100, state.happiness + 15);
    state.health = Math.min(100, state.health + 5);

    updatePetImage('love');

    setTimeout(() => {
      updatePetImage('normal');
      updateStats();
    }, 1000);
  }
};

const generateStars = (count) => {
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    star.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(star);
  }
};

feedBtn.addEventListener('click', feedPet);
playBtn.addEventListener('click', playPet);
sleepBtn.addEventListener('click', petToSleep);
loveBtn.addEventListener('click', lovePet);

generateStars(50);
updateStats();
