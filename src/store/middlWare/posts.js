export const ignoreEmptyComment = () => (next) => (action) => {
    if ((action.type === 'posts/addNewComment' && action.payload.text.replaceAll(' ', '')) || action.type !== 'posts/addNewComment'){
        next(action)
    }
}

export const ignoreEmptyPost = () => (next) => (action) => {
    if((action.type === 'posts/addPost' && action.payload.postText.replaceAll(' ', '')) || action.type !== 'posts/addPost'){
        next(action)
    }
}

export const ignoreEmptyPostUser = () => (next) => (action) => {
    if((action.type === 'users/addPost' && action.payload.postText.replaceAll(' ', '')) || action.type !== 'users/addPost'){
        next(action)
    }
}