const welcomeSign = document.querySelector('h1');

let str = 'Black Jack';
let counter = 0;
let quit = false;
const dealtNumbers = [];
const playersDeck = [];
const croupiersDeck = [];
let balance = 2500;
let playerPoints = 0;
let bet;
let croupierPoints = 0;
const body = document.querySelector('body');
let balanceText = document.querySelector('h3');
let gameOver = false;
let initial = true;
const playerField = document.querySelector('.player-field');
const croupierField = document.querySelector('.croupier-field');

function sayHi() {
  if (initial) {
    document.documentElement.requestFullscreen();
    document.querySelector('button').classList.add('hidden');
    let myVar = setInterval(function () {
      // document.documentElement.requestFullscreen();
      // console.log(str[counter]);
      welcomeSign.textContent += str[counter];
      counter++;
      if (counter === str.length) {
        clearInterval(myVar);
        welcomeSign.classList.add('welcome-disappear');
      }
    }, 200);
  }
  setTimeout(function showButtons() {
    bet = parseInt(
      prompt('how much do you want to bet? (available balance: ' + balance)
    );

    if (initial) {
      body.removeChild(welcomeSign);
    }
    console.log(bet);
    while (
      isNaN(bet) ||
      typeof bet !== 'number' ||
      (bet > balance) | (bet <= 0)
    ) {
      bet = parseInt(
        prompt('how much do you want to bet? (available balance: ' + balance)
      );
    }
    balance -= bet;
    balanceText.textContent = 'balance: ' + balance + '$';
    document.querySelector('.hit-button').classList.remove('hidden');
    document.querySelector('.stand-button').classList.remove('hidden');
    document.querySelectorAll('img')[0].classList.remove('hidden');
    document.querySelectorAll('img')[1].classList.remove('hidden');
    document.querySelectorAll('img')[2].classList.remove('hidden');
    document.querySelectorAll('img')[3].classList.remove('hidden');
    document.querySelector('h2').classList.remove('hidden');
    document.querySelector('.deal-button').classList.remove('hidden');
    document.querySelectorAll('h2')[1].classList.remove('hidden');
  }, 100);
}

function isBetCorrect() {

}

function dealCards(whosePoints, who, quantity, whoseDeck) {
  console.log(whosePoints);
  if (gameOver === false) {
    let counter = 0;
    let randomCard;
    console.log(who);
    for (let i = 0; i < quantity; i++) {
      randomCard = Math.trunc(Math.random() * deck.length);
      while (dealtNumbers.includes(randomCard)) {
        randomCard = Math.trunc(Math.random() * deck.length);
      }
      dealtNumbers.push(randomCard);
      whoseDeck.push(deck[randomCard]);
      whosePoints += deck[randomCard].cardValue;
    }
    if (who === 'player') {
      playerPoints += whosePoints;
    } else {
      croupierPoints = whosePoints;
    }
    console.log(who);
    for (const card of whoseDeck) {
      console.log(card);
    }
    if (who === 'player' && playerPoints >= 21 && counter < 1) {
      displayDeck();
      stand();
      counter++;
      return;
    }
  }
}

function showButtons() {
  bet = parseInt(
    prompt('how much do you want to bet? (available balance: ' + balance)
  );

  if (initial) {
    body.removeChild(welcomeSign);
  }
  console.log(bet);
  while (
    isNaN(bet) ||
    typeof bet !== 'number' ||
    (bet > balance) | (bet <= 0)
  ) {
    bet = parseInt(
      prompt('how much do you want to bet? (available balance: ' + balance)
    );
  }
  bet = Math.abs(bet);
  balance -= bet;
  balanceText.textContent = 'balance: ' + balance + '$';
  document.querySelector('.hit-button').classList.remove('hidden');
  document.querySelector('.stand-button').classList.remove('hidden');
  for (img of croupierField.children) {
    img.classList.remove('hidden');
  }
  for (img of playerField.children) {
    img.classList.remove('hidden');
  }
  // document.querySelectorAll('img')[0].classList.remove('hidden');
  // document.querySelectorAll('img')[1].classList.remove('hidden');
  // document.querySelectorAll('img')[2].classList.remove('hidden');
  // document.querySelectorAll('img')[3].classList.remove('hidden');
  // document.querySelector('h2').classList.remove('hidden');
  document.querySelector('.deal-button').classList.remove('hidden');
  // document.querySelectorAll('h2')[1].classList.remove('hidden');
}

let deckCounter = 0;
function displayDeck() {
  let el;
  for (let i = deckCounter; i < playersDeck.length; i++) {
    el = playersDeck[i];
    let img = document.createElement('img');
    img.src = el.image;
    img.classList.add('card');
    // if(deckCounter <= 2) {
    //     img.classList.add('row1');
    // }
    // else if(deckCounter > 2) {
    //     img.classList.add('row2');
    // }
    // else if(deckCounter > 5) {
    //     img.classList.add('row3');
    // }
    img.alt = 'card';
    playerField.appendChild(img);
    if (deckCounter === 0 || deckCounter === 1) {
      img.classList.add('hidden');
      document.querySelector('h2').classList.add('hidden');
    }
  }
  deckCounter++;
  if (deckCounter === 1) {
    deckCounter++;
  }
  // for(const el of playersDeck) {
  //     let img = document.createElement('img');
  //     img.src = el.image;
  //     img.classList.add('card');
  //     img.alt = 'card';
  //     body.appendChild(img);
  // }
  document.querySelector('h2').textContent = `total points: ${playerPoints}`;
}

let deckCounterCroupier = 0;
function displayCroupiersDeck() {
  let el;
  for (let i = deckCounterCroupier; i < croupiersDeck.length; i++) {
    el = croupiersDeck[i];
    console.log('DISPLAYYY CROUPIERS DECK HERE', el);
    let img = document.createElement('img');
    img.src = el.image;
    img.classList.add('croupier-card');
    // if(deckCounterCroupier <= 2) {
    //     img.classList.add('row1');
    // }
    // else if(deckCounterCroupier > 2) {
    //     img.classList.add('row2');
    // }
    // else if(deckCounterCroupier > 5) {
    //     img.classList.add('row3');
    // }
    img.alt = 'card';
    croupierField.appendChild(img);
    if (deckCounterCroupier === 0 || deckCounterCroupier === 1) {
      img.classList.add('hidden');
      document.querySelectorAll('h2')[1].classList.add('hidden');
    }
    // if(deckCounterCroupier >= 2) {
    //     el.style.left = '-400px';
    // }
    deckCounterCroupier++;
    document.querySelectorAll(
      'h2'
    )[1].textContent = `croupier's points: ${croupierPoints}`;
  }
}

function hit(
  whosePoints = croupierPoints,
  who = 'croupier',
  quantity = 1,
  whoseDeck = croupiersDeck
) {
  dealCards(whosePoints, who, quantity, whoseDeck);
  if (who === 'player') {
    displayDeck();
  } else {
    displayCroupiersDeck();
  }
}

function croupierDecide() {
  while (croupierPoints < playerPoints && playerPoints <= 21) {
    hit();
  }
  // if(playerPoints === croupierPoints) {
  //     console.log('draw, doing nothing');
  // }
  // // else if(playerPoints > croupierPoints) {
  // //     console.log('drawing a card');
  // //     hit();
  // // }
  // else if(croupierPoints > playerPoints && croupierPoints <= 21) {
  //     console.log('winning - doing nothing');
  // }
  // else {
  //     console.log('player wins')
  // }
}

function stand() {
  if (!gameOver) {
    croupierDecide();
    if (playerPoints === croupierPoints) {
      alert('draw');
    } else if (
      (croupierPoints > playerPoints && croupierPoints <= 21) ||
      playerPoints > 21
    ) {
      alert('croupier wins, you lost: ' + bet + '$');
    } else if (
      (playerPoints <= 21 && playerPoints > croupierPoints) ||
      croupierPoints > 21
    ) {
      alert('player wins, you won: ' + 2 * bet + '$');
      balance += 2 * bet;
      balanceText.textContent = 'balance: ' + balance + '$';
    } else {
      alert('else');
    }
    gameOver = true;
  }
}

function startGame() {
  dealCards(playerPoints, 'player', 2, playersDeck);
  dealCards(croupierPoints, 'croupier', 2, croupiersDeck);
  displayCroupiersDeck();
  displayDeck();
}
function redeal() {
  if (gameOver) {
    counter = 0;
    deckCounter = 0;
    deckCounterCroupier = 0;
    playerPoints = 0;
    croupierPoints = 0;
    croupiersDeck.length = 0;
    playersDeck.length = 0;
    croupierField.innerHTML = `<h2>croupier points:</h2>`;
    playerField.innerHTML = `<h2></h2>`;
    quit = false;
    gameOver = false;
    // playerField.appendChild(balanceText);
    // balanceText = document.querySelector('h3');
    // for(card of playerField) {

    // }
    initial = false;
    startGame();
    showButtons();
  }
}

document.querySelector('button').addEventListener('click', sayHi);
document
  .querySelector('.hit-button')
  .addEventListener(
    'click',
    hit.bind(null, playerPoints, 'player', 1, playersDeck)
  );
document.querySelector('.stand-button').addEventListener('click', stand);
document.querySelector('.deal-button').addEventListener('click', redeal);
startGame();
