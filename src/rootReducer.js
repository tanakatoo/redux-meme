const INITIAL_STATE = {
    memes: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "addMeme":
            return { ...state, memes: [...state.memes, action.meme] }
        case "removeMeme":
            const idx = state.memes.findIndex(m => m.id === action.memeid)
            const theRest = state.memes.filter((ele, i) => i !== idx)
            return { ...state, memes: theRest }
        default:
            return state
    }
}

export default rootReducer