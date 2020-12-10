import React, {useState, useEffect} from 'react';

const SimonItem = ({itemId, clickHandler, audio, lightUp}) => {
    const [brightness, setBrightness] = useState(false)

    useEffect(() => {
        if(lightUp === itemId) {
            setBrightness(true)
            setTimeout(() => {
                setBrightness(false)
            }, 500)
        }
    }, [itemId, lightUp])

    const handleClick = () => {
         audio.play() 
         clickHandler(itemId)
    }

    return (
        <div className={brightness ? "simon-item simon-item__brightness" : "simon-item"} onClick={handleClick}></div>
    );
};

export default SimonItem;