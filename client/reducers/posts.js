

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
        console.log("Incrementing likes!");
        const i = action.index;
        //return the updated state
        return [
            ...state.slice(0,i), //before the one we are updating
            {...state[i], likes: state[i].likes + 1}, //here we update the object with the likes that needs to be updated
            ...state.slice(i+1), //everything after the one we are updating
        ]
        default:
            return state;
    }
}

export default posts;