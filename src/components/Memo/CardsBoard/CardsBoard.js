import cards from '../Cards/Cards';

const generateCards = (squareNum = 6) => {

  const allCards = [...cards].sort(() => .5 - Math.random());
  const myCards = allCards.slice(0,squareNum);
  const myCards2 = [...myCards];
  const gameCards = myCards.concat(myCards2).sort(() => .5 - Math.random());
  console.log(gameCards)
  
  /* const sortCards = [...cards].sort(() => .5 - Math.random());

  for (let i = 0; i < squareNum * 2; i++) {
    let randomCard = null;

    do {
      randomCard = sortCards[Math.floor(Math.random() * squareNum)]
    } while (
      randomCards.filter(element => element.type === randomCard.type).length >= 2
    )

    randomCards.push(Object.assign({}, randomCard))
  } */

  return gameCards
}  

export default generateCards