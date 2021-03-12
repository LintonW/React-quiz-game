import React, { useState } from 'react'

//Landing component 
const Landing = ({ props }) => {
    //useState to set state
    const [help, setHelp] = useState(false);

    //passing props
    const start = () => props(true)
    
    //rendering the component. Conditional rendering used for 'help div'
    return (
        <div className="landing">

            <h1>React Quiz.</h1>
            <button onClick={start}>Start Quiz</button>
            <button 
                onMouseEnter={() => setHelp(true)}
                onMouseLeave={() => setHelp(false)}>
                Help
            </button>

            {help && 
            <div className="help">
                <p>Step 1 : Click on the start quiz button</p>
                <p>Step 2 : Click on the answers that you think are correct</p>
                <p>Step 3 : Keep answering until you see the "Game Over" page</p>
            </div>
            }
            
            
        </div>
    )
}

export default Landing
