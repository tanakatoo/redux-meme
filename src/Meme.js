import React from "react"
import { useDispatch } from "react-redux"

const Meme = ({ meme }) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        let currentElement = e.target

        if (currentElement.classList.contains("removable")) {
            //find the top most element and remove it
            // while (currentElement.classList.contains("removable")) {
            //     currentElement = currentElement.parentElement
            // }
            console.log(e.target.id)
            dispatch({ type: "removeMeme", memeid: e.target.id })
        }
    }

    return (
        <div className="output-container__output ">
            <div className="output-container__outputOverlay removable">
                <span className="output-container__outputOverlay__text removable" id={meme.id} onClick={handleClick} >X</span>
            </div>
            <img className="meme-img" src={meme.image} />
            <span className="output-container__output__text output-container__output__text-top">{meme.top}</span>
            <span className="output-container__output__text output-container__output__text-bottom">{meme.bottom}</span>
        </div>
    )
}

export default Meme