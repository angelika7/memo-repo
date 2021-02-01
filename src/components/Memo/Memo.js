import React, { Component } from 'react';
import MemoItem from './MemoItem/MemoItem';
import './../Memo/CardsBoard/CardsBoard';
import MemoBuilder from './../../containers/MemoBuilder/MemoBuilder';
import GameLevel from './../Buttons/GameLevel/GameLevel'
import generateCards from './../Memo/CardsBoard/CardsBoard';
import Clock from './../Clock/Clock';
import NewGame from './../Buttons/NewGame/NewGame'

import classes from './Memo.module.css'
import watch from './../../assets/images/watch.svg'

class Memo extends Component {
    state = {
        selectedCard: null,
        selectedIndex: null,
        squareNum: 6,
        cards: generateCards(),
        isEasy: true,
        startGame: false,
        watchRunning: false,
        showLevels: true,
        newGame: false,
        endGame: false,
        selectedTabId: 1
    }

    // Change level game functions
    easyLevelHandler = () => {
        this.setState(
            {squareNum: 6,
            cards: generateCards(6),
            isEasy: true});
    }

    hardLevelHandler = () => {
        this.setState(
            {squareNum: 8,
            cards: generateCards(8),
            isEasy: false});
    } 

    //Logic Memo Game
    selectedCardHandler = (clickedCard, clickedIndex) => {
        const { selectedCard, selectedIndex, cards } = this.state

        if(selectedCard) {
            if(selectedIndex === clickedIndex) {
                return false
            }

            const flippedCards = this.flipCards(cards, [clickedIndex])

            this.setState({cards: flippedCards})

            setTimeout(() => {
                this.matchCards(clickedCard, clickedIndex)
            }, 360) 

        } else {
            cards[clickedIndex].flipped = true;

            this.setState({
                selectedCard: clickedCard,
                selectedIndex: clickedIndex,
                cards
            })
        }
    }

    matchCards(card, i){
        const { selectedCard, selectedIndex, cards } = this.state

        if(!selectedCard) return false

        if(selectedCard.type === card.type) {
            const solvedCards = cards.map(el => {
                if(el.type === card.type) {
                    el.solved = true
                }
                return el
            })

            this.setState({cards: solvedCards})
            this.resetTurn()
            if(cards.every(this.isSolved)) {
                this.setState({endGame: true})
            }
        } else {
            const cards = this.state.cards.map((element, index) => {
                if(index === selectedIndex || index === i) {
                    element.flipped = false
                }
                return element
            })
            this.setState({cards})
            this.resetTurn()
        }
    }

    resetTurn() {
        this.setState({
            selectedCard: null,
            selectedIndex: null
        })
    }

    flipCards = (cards, cardsIndexes) => {
        for(let i = 0; i < cardsIndexes.length; i++) {
            cards[cardsIndexes[i]].flipped = !cards[cardsIndexes[i]].flipped
        }
        return cards
    }

    isSolved = (element, index, array) => {
        return (element.solved)
    } 

    //Control game functions
    startGame = () => {
        this.setState({startGame: true,
        watchRunning: true,
        showLevels: false,
        newGame: false,
        endGame:false
        })
    }

    newGame = () => {
        this.setState({showLevels: true,
        watchRunning: false,
        startGame: false,
        endGame: false,
        //cards: generateCards(6),
        isEasy: true,
        selectedTabId: 1
        })
    }

    showLevels = () => {
        this.setState({showLevels: true})
    }

    //Change class active level
    isActive = (id) => {
        return this.state.selectedTabId === id;
    }

    setActiveTab = (selectedTabId) => {
        this.setState({ selectedTabId });
    }
    
    render() {
        const { cards, startGame, showLevels } = this.state;
        let levels = null;
        let readyGame = null;
        let buttons = [
            {id: 1,
            name: 'Łatwy',
            levelHandler: this.easyLevelHandler},
            {id: 2,
            name: 'Trudny',
            levelHandler: this.hardLevelHandler}
        ];
        
        
        if(!startGame || showLevels) {
            levels = (
                <div className={classes.box}>
                    <div className={[classes.goIn,classes.gameLevel].join(' ')}>
                        <div className={classes.startInfo}>
                            <p className={classes.gameLevelText}>Wybierz poziom i rozpocznij grę</p>
                        </div>
                        <p className={classes.gameLevelText}>Poziom gry:</p>
                        <div className={classes.buttons}>
                            {buttons.map((el, i) => {
                                return <GameLevel
                                key={i}
                                name={el.name}
                                isActive={this.isActive(el.id)}
                                onClick={() => {
                                    this.setActiveTab.bind(this, el.id)()
                                    el.levelHandler()
                                }}
                                />
                            })}
                        </div>
                    </div>
                </div>
            )
        } 

        if(startGame) {
            readyGame = (
                <React.Fragment>
                    <div className={[classes.clockBox, classes.showClock].join(' ')}>
                        {this.state.isEasy ? <p className={classes.gameLevelText} style={{fontSize: '18px'}}><span style={{color: 'var(--color-black-dark3)'}}>Poziom:</span> Łatwy</p> : <p className={classes.GameLevelText} style={{fontSize: '18px'}}><span style={{color: 'var(--color-black-dark3)'}}>Poziom:</span> Trudny</p>}
                        <img className={classes.clock} src={watch} alt=''/>
                        <Clock newGame={this.state.newGame} endGame={this.state.endGame} level={this.state.isEasy}/>
                    </div>
                    <div className={classes.box}>
                        <MemoBuilder isEasy={this.state.isEasy}>
                            {cards.map((card, i) => {
                                return <MemoItem
                                    key={i}
                                    item={card}
                                    index={i}
                                    onClick={this.selectedCardHandler}
                                />
                            })}
                        </MemoBuilder>
                    </div>
                </React.Fragment>
            )
        }

        return (
            <div className={classes.content}>
                {levels}
                {readyGame}
                <div className={classes.btnBox}>
                    <NewGame startGame={this.startGame} newGame={this.newGame} showLevels={this.state.showLevels} watch={this.state.watchRunning}/>
                </div>
            </div>
        )
    }
};

export default Memo
