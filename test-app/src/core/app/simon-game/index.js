import React, {useState} from 'react';
import SimonItem from './simon-item'
import firebase from 'firebase/app'
import './simon.css'

const getRandomRoute = () => {
    const randomRouteLetter = String.fromCharCode(Math.round(Math.random() * (66 - 65) + 65))
    const randomRouteNumber = Math.round(Math.random() * (2 - 1) + 1)

    return randomRouteLetter + randomRouteNumber
}


const sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"); 
const sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"); 
const sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"); 
const sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"); 



const SimonApp = () => {
    const [puntuation, setPuntuation] = useState(0)
    const [endedGame, setEndedGame] = useState(false)
    const [clickNumber, setClickNumber] = useState(0)
    const [simonRoute, setSimonRoute] = useState([])
    const [lightUp, setLightUp] = useState("")
    const [input, setInput] = useState("")

    const sendData = (e) => {
        e.preventDefault()
        const db = firebase.firestore()

        db.collection("users").add({
            name: input,
            puntuation: puntuation
        })
    }

    const playSequence = (sequence) =>{
        let i = 0;   
        const interval = setInterval( () =>{
        setLightUp(sequence[i])
        i++;
          if(i >= sequence.length){
            setSimonRoute([...sequence])
            clearInterval(interval);     
          }
        }, 1200)
    };  

    const startGame = () => {
        setEndedGame(false)
        setPuntuation(0)
        setClickNumber(0)
        const routeRandom = getRandomRoute()
        setSimonRoute([
            routeRandom
        ])
        setTimeout(() => {
            setLightUp(routeRandom)
        },800)

    }

    const endGame = () => {
        setEndedGame(true)
        setSimonRoute([])
        setLightUp("")
    }

    const itemHandleClick = (itemId) => {
        console.log(simonRoute)
        if(simonRoute[clickNumber] === itemId) {
            const clickNumberSum = clickNumber + 1
            setPuntuation(puntuation + 1)
            setClickNumber(clickNumberSum)

            if(simonRoute.length === clickNumberSum) {
                playSequence([...simonRoute, getRandomRoute()])
                setClickNumber(0)
            }
        }else {
            endGame()
        }
    }


    return (
        <>
        <div className="container">
            <div className="background">
                <div className="simon-container">
                    <div className="btn-container">
                        <div className="start-game-btn" onClick={startGame}>Start Game</div>
                    </div>

                    {endedGame ? (
                        <>
                            <h1 className="puntuation">
                            Your puntuation: {puntuation}, save your puntuation below
                            </h1>
                        <div className="input-container">
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={input}
                            onChange={({target: {value}}) => setInput(value)}
                            onClick={sendData}
                            style={{
                                width: '200px',
                                height: '25px'
                            }}
                            />
                            <button type="submit" onClick={sendData}>Submit</button>
                        </div>
                        </>
                    ) : (
                    <div className="simon-game">
                        <div className="items-container">
                            <SimonItem itemId="A1" lightUp={lightUp} audio={sound1}  clickHandler={itemHandleClick} />
                            <SimonItem itemId="A2" lightUp={lightUp} audio={sound2} clickHandler={itemHandleClick} />
                            <SimonItem itemId="B1" lightUp={lightUp} audio={sound3} clickHandler={itemHandleClick} />
                            <SimonItem itemId="B2" lightUp={lightUp} audio={sound4}  clickHandler={itemHandleClick} />
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
     </>
    );
};

export default SimonApp;