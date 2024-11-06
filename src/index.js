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

const updateStats = () => {
  healthBar.value = state.health;
  hungerBar.value = state.hunger;
  happinessBar.value = state.happiness;
  energyBar.value = state.energy;
};

const degradeStats = () => {
  state.hunger = Math.max(0, state.hunger - 5);
  state.happiness = Math.max(0, state.happiness - 3);
  state.energy = Math.max(0, state.energy - 2);

  if (state.energy === 20) {
    state.health = Math.max(0, state.health - 30);
  }

  if (state.hunger === 20) {
    state.health = Math.max(0, state.health - 30);
  }

  if (state.happiness === 20) {
    state.health = Math.max(0, state.health - 30);
  }

  updateStats();
};

setInterval(degradeStats, 5000);

const feedPet = () => {
  if (state.hunger < 100) {
    state.hunger = Math.min(100, state.hunger + 20);
    state.health = Math.min(100, state.health + 5);
    petImage.textContent = '🍣';
    setTimeout(() => { petImage.textContent = '🐱'; }, 1000);
    updateStats();
  }
};

const playPet = () => {
  if (state.happiness < 100) {
    state.happiness = Math.min(100, state.happiness + 15);
    state.energy = Math.max(0, state.energy - 5);
    state.health = Math.min(100, state.health + 5);
    petImage.textContent = '🧶';
    setTimeout(() => { petImage.textContent = '🐱'; }, 1000);
    updateStats();
  }
};

const petToSleep = () => {
  if (state.energy < 100) {
    state.energy = Math.min(100, state.energy + 20);
    state.health = Math.min(100, state.health + 5);
    petImage.textContent = '🛏️';
    setTimeout(() => { petImage.textContent = '🐱'; }, 1000);
    updateStats();
  }
};

const lovePet = () => {
  if (state.happiness < 100) {
    state.happiness = Math.min(100, state.happiness + 10);
    state.health = Math.min(100, state.health + 2);
    petImage.textContent = '💖';
    setTimeout(() => {
      petImage.textContent = '😻';
    }, 1000);
    setTimeout(() => {
      petImage.textContent = '🐱';
    }, 2000);
  }
  updateStats();
};

feedBtn.addEventListener('click', feedPet);
playBtn.addEventListener('click', playPet);
sleepBtn.addEventListener('click', petToSleep);
loveBtn.addEventListener('click', lovePet);

updateStats();
