// import { deck, Cardable } from './data.js';
var welcomeSign = document.querySelector('h1');
var str = 'Black Jack';
var counter = 0;
var quit = false;
var dealtNumbers = [];
var playersDeck = [];
var croupiersDeck = [];
var balance = 2500;
var playerPoints = 0;
var croupierPoints = 0;
var bet;
var betValue;
var gameOver = false;
var initial = true;
var betRegex = /^\d+$/;
var body = document.querySelector('body');
var playerField = document.querySelector('.player-field');
var croupierField = document.querySelector('.croupier-field');
var balanceText = document.querySelector('h3');
function sayHi() {
  if (initial) {
    document.documentElement.requestFullscreen();
    document.querySelector('button').classList.add('hidden');
    var myVar_1 = setInterval(function () {
      welcomeSign.textContent += str[counter];
      counter++;
      if (counter === str.length) {
        clearInterval(myVar_1);
        welcomeSign.classList.add('welcome-disappear');
      }
    }, 200);
  }
  // setTimeout(function showButtons() {
  //   bet = prompt('how much do you want to bet? (available balance: ' + balance) as string;
  //   if (initial) {
  //     body.removeChild(welcomeSign);
  //   }
  //   console.log(bet);
  //   while (!isBetCorrect(bet)) {
  //     bet = prompt(
  //       'how much do you want to bet? (available balance: ' + balance
  //     ) as string;
  //   }
  //   bet = +bet;
  //   balance -= bet;
  //   balanceText.textContent = 'balance: ' + balance + '$';
  //   document!.querySelector('.hit-button')!.classList.remove('hidden');
  //   document!.querySelector('.stand-button')!.classList.remove('hidden');
  //   document.querySelectorAll('img')[0].classList.remove('hidden');
  //   document.querySelectorAll('img')[1].classList.remove('hidden');
  //   document.querySelectorAll('img')[2].classList.remove('hidden');
  //   document.querySelectorAll('img')[3].classList.remove('hidden');
  //   document!.querySelector('h2')!.classList.remove('hidden');
  //   document!.querySelector('.deal-button')!.classList.remove('hidden');
  //   document.querySelectorAll('h2')[1].classList.remove('hidden');
  // }, 100);
  setTimeout(showButtons, 5000);
}
function isBetCorrect(input) {
  if (input === null) return false;
  if (typeof input === 'string') {
    if (!(betRegex.test(input))) return false;
    if(input === '0') return false;
  }
  return true;
}
function dealCards(whosePoints, who, quantity, whoseDeck) {
  console.log(whosePoints);
  if (gameOver === false) {
    var counter_1 = 0;
    var randomCard = void 0;
    console.log(who);
    for (var i = 0; i < quantity; i++) {
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
    for (var _i = 0, whoseDeck_1 = whoseDeck; _i < whoseDeck_1.length; _i++) {
      var card = whoseDeck_1[_i];
      console.log(card);
    }
    if (who === 'player' && playerPoints >= 21 && counter_1 < 1) {
      displayDeck();
      stand();
      counter_1++;
      return;
    }
  }
}
function takeBet() {
  return 2;
}
function showButtons() {
  bet = prompt('how much do you want to bet? (available balance: ' + balance);
  if (initial) {
    body.removeChild(welcomeSign);
  }
  console.log(bet);
  while (!isBetCorrect(bet)) {
    bet = prompt('how much do you want to bet? (available balance: ' + balance);
  }
  console.log(bet);
  betValue = +bet;
  balance -= betValue;
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
}
var deckCounter = 0;
function displayDeck() {
  var el;
  for (var i = deckCounter; i < playersDeck.length; i++) {
    el = playersDeck[i];
    var img = document.createElement('img');
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
  document.querySelector('h2').textContent = 'total points: '.concat(
    playerPoints
  );
}
var deckCounterCroupier = 0;
function displayCroupiersDeck() {
  var el;
  for (var i = deckCounterCroupier; i < croupiersDeck.length; i++) {
    el = croupiersDeck[i];
    console.log('DISPLAYYY CROUPIERS DECK HERE', el);
    var img = document.createElement('img');
    img.src = el.image;
    img.classList.add('croupier-card');
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
    document.querySelectorAll('h2')[1].textContent =
      "croupier's points: ".concat(croupierPoints);
  }
}
function hit(whosePoints, who, quantity, whoseDeck) {
  if (whosePoints === void 0) {
    whosePoints = croupierPoints;
  }
  if (who === void 0) {
    who = 'croupier';
  }
  if (quantity === void 0) {
    quantity = 1;
  }
  if (whoseDeck === void 0) {
    whoseDeck = croupiersDeck;
  }
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
      alert('player wins, you won: ' + 2 * betValue + '$');
      balance += 2 * betValue;
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
    croupierField.innerHTML = '<h2>croupier points:</h2>';
    playerField.innerHTML = '<h2></h2>';
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
document.querySelector('.hit-button').addEventListener(
    'click',
    hit.bind(null, playerPoints, 'player', 1, playersDeck)
  );
document.querySelector('.stand-button').addEventListener('click', stand);
document.querySelector('.deal-button').addEventListener('click', redeal);
startGame();
