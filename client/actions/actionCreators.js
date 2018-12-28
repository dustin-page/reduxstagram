//increment likes
export function increment (index) { //index (or postId) is the identifier for which post needs to be incremented
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comment
export function addComment (postId, author, comment) {
    console.log("Dispatching add comment");
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
export function removeComment (postId, i) { //i is the index of the comment that should be removed
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}