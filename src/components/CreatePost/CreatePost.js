import React, { useEffect, useRef } from 'react';
import IMAGES from '../../images';
import './CreatePost.css'
import { useDispatch, useSelector } from 'react-redux'
import { addPost as addPostUsers, selectUsers } from '../../store/slices/users/usersSlice';
import { useNavigate } from 'react-router-dom'
import { addPost as addPostPosts } from '../../store/slices/posts/postsSlice';

const CreatePost = () => {
    const dispatch = useDispatch()
   const formRef = useRef(null)
   const {currentUser} = useSelector(selectUsers)
   const navigate = useNavigate()

   useEffect(() => {
     if(!currentUser){
        navigate('/login')
     }
   }, [currentUser])
   
   const handleSubmit = (e) => {
    e.preventDefault()
    const { img: {value: img}, desc: {value: desc}} = formRef.current
    // console.log(img, desc);
    const post = {
        id: new Date().getTime().toString(),
        name: currentUser.username.toLowerCase(),
        likesCount: Math.round(Math.random() * 500 + 500),
        timeAgo: Math.round(Math.random() * 8 + 2) + 'Minutes Ago',
        postText: desc,
        img: img,
        comments: []
    }
    dispatch(addPostUsers(post))
    dispatch(addPostPosts(post))
    navigate('/')
   } 

    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            
            <div className='formDiv'>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <input name='desc' className='addPostInput' type='text' placeholder='Description' />
                  <input name='img' className='addPostInput' type='text' placeholder='Image' />
                  <button className='buttonAddpost'>ADD</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;
