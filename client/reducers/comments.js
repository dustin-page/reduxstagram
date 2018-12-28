

//Reducer composition - create a subreducer called postComments
//Handles updating an individual comment
function postComments(state = [], action) {
    switch (action.type) {

        case 'ADD_COMMENT':
            //return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];

        case 'REMOVE_COMMENT':
            //we need to return the new state without the deleted comment
            return [
                ...state.slice(0, action.i), //from the start to the one we want to delete
                ...state.slice(action.i + 1) //everything after the one we want to delete
            ]
        default:
            return state;
    }
}

function comments(state = {}, action) {
    if (typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;