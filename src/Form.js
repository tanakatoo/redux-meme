import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import "./App.css"

const Form = () => {
    const dispatch = useDispatch()


    const [data, setData] = useState({ top: '', bottom: '', image: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: "addMeme",
            meme: {
                id: uuid(),
                top: data.top,
                bottom: data.bottom,
                image: data.image
            }
        })

    }
    return (
        <>
            <section className="input-section">
                <div className="header">
                    <h1 className="header__primary">
                        <span className="header__primary-main">Meme Generator</span>
                        <span className="header__primary-sub">Make your original meme!</span>
                    </h1>
                </div>
                <div className="error">
                    <span className="error__message"></span>
                </div>
                <div className="form-div">
                    <form id="input-form" onSubmit={handleSubmit}>
                        <div className="input__block">
                            <label className="input__block-label" htmlFor="image">Image URL</label>
                            <input className="input__block-text" type="url" name="image" id="image" value={data.image} onChange={handleChange} />
                        </div>
                        <div className="input__block">
                            <label className="input__block-label" htmlFor="top">Top text</label>
                            <input className="input__block-text" type="text" name="top" id="top" value={data.top} onChange={handleChange} />
                        </div>
                        <div className="input__block">
                            <label className="input__block-label" htmlFor="bottom">Bottom text</label>
                            <input className="input__block-text" type="text" name="bottom" id="bottom" value={data.bottom} onChange={handleChange} />
                        </div>
                        <div className="btn-div">
                            <button type="submit" className="btn">Generate!</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Form