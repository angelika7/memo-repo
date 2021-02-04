import React from 'react';

import classes from './MemoItem.module.css';
const MemoItem = ({ item, index, onClick }) => (

    <div className={classes.scene}>
        {item && (
            <div
                className={`${classes.card} ${item.flipped ? classes.isFlipped : ''}`}
                onClick={() => {if(!item.solved) {onClick(item, index)}}}>

                <div className={[classes.cardStyle, classes.cardStyleFront].join(' ')} />
                <div
                    className={[classes.cardStyle, classes.cardStyleBack].join(' ')}
                    style={{
                        background: `url(${item.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
        
                </div>
            </div>
        )}
    </div> 
)


export default MemoItem
