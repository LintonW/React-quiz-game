import React from 'react'

//GameOver component with destructured props
const GameOver = ({ pts, passed }) => {

    //refreshing the page
    const refreshPage = () => window.location.reload();

    //rendering the component. Used props, ternary operator and an event.
    return (
        <div className="landing">
            <h1>Game Over!</h1>
            <h2>You got {pts} out of 5</h2>
            <h2>{passed ? 'You passed!' : 'You Failed!'}</h2>
            <button onClick={refreshPage}>Try Again</button>
            
        </div>
    )
}

export default GameOver
