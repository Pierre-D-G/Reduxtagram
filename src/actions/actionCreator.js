// Increment number of likes on photo

export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// Add a comment to a photo

export function addComment(postId, comment, author) {
    return {
        type: 'ADD_COMMENT',
        postId,
        comment,
        author
    }
}

export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index
    }
}