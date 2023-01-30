import React, { memo, useRef, useState } from 'react'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addNewComment } from '../../store/slices/posts/postsSlice'
import Picker from 'emoji-picker-react'
import { selectUsers } from '../../store/slices/users/usersSlice'

function CommentForm({ id, setIsShow }) {
   const dispatch = useDispatch()
   const formRef = useRef(null)
   const [inputStr, setInputStr] = useState('');
   const [showPicker, setShowPicker] = useState(false)
   const { currentUser } = useSelector(selectUsers)

   const onEmojiClick = (e, emojiOgj) => {
    setInputStr(prevInput => prevInput + emojiOgj.emoji)
    setShowPicker(false)
   }

    const handleSubmit = (e) => {
     e.preventDefault()
     const text = formRef.current[0].value 

     dispatch(addNewComment({id, inputStr, text, username: currentUser?.username}))
     formRef.current.reset()
    }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <div className="comment-wrapper">
            <img onClick={() => setShowPicker(!showPicker)} src={IMAGES.smile} className="icon" alt=""/>
            <input onFocus={() => setIsShow(true)}  type="text" className="comment-box" placeholder="Add a comment"/>
            <button className="comment-btn">post</button>
        </div>
        {
          showPicker && <Picker
           pickerStyle={{width: '200px'}}
           onEmojiClick={onEmojiClick}
          />
        }
    </form> 
  )
}

export default memo(CommentForm, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))