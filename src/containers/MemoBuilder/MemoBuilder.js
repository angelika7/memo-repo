import React from 'react';

import classes from './MemoBuilder.module.css';

const memoBuilder = ({ children, isEasy }) => {
    return (
        isEasy ? <div className={[classes.boardEasy, classes.showMemo].join(' ')}>
            {children}
        </div> : <div className={[classes.boardHard, classes.showMemo].join(' ')}>
            {children}
        </div>
         
    )
    
}

export default memoBuilder