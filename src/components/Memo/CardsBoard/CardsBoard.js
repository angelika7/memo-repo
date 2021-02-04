import cards from '../Cards/Cards';
import cloneDeep from 'lodash/cloneDeep';

const generateCards = (squareNum = 6) => {

  const allCards = [...cards].sort(() => .5 - Math.random());
  const myCards = allCards.slice(0,squareNum);
  const gameCardsClone = cloneDeep(myCards);
  const allGameCards = myCards.concat(gameCardsClone).sort(() => .5 - Math.random());
  console.log(allGameCards)

  return allGameCards
}   

/* const generateCards = (squareNum = 6) => {
  let randomCards = []
  const sortCards = cards.sort(() => .5 - Math.random());

  for (let i = 0; i < squareNum * 2; i++) {
    let randomCard

    do {
      randomCard = sortCards[Math.floor(Math.random() * squareNum)]
    } while (
      randomCards.filter(element => element.type === randomCard.type).length >= 2
    )

    randomCards.push(Object.assign({}, randomCard))
  }

  return randomCards
}   */

export default generateCards