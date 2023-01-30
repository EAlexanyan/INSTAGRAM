import React, { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/postsSlice'
function CommentsForm({id, setIsShow}) {
    const dispatch = useDispatch()
    const commentRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const text = commentRef.current[0].value

        dispatch(addComment({id, text, username: 'test-user'}))

        commentRef.current.reset()
    }

  return (
    <form ref={commentRef} onSubmit={handleSubmit} >    
            <div className="comment-wrapper">    
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input onFocus={() => setIsShow(true)} type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
                </div>    
    </form>
      
  )
}

export default memo(CommentsForm)