import React, { memo, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import { resetSearchTxt, selectSearchTxt } from '../../store/slices/searchTxt/searchTxtSlice'
import Loader from '../Loader/Loader'
import Post from '../Post/Post'

function Posts() {
    const searchTxt = useSelector(selectSearchTxt)
    const dispatch = useDispatch()
    const { posts } = useSelector(selectPosts) 

    useEffect(() => {
        if(!posts.length){
            dispatch(fetchPosts())
        }
    }, [])

    useEffect(() => {
        return () => {
            dispatch(resetSearchTxt())
        }
    }, [])

    const filteredPosts = useMemo(() => {
        return [...posts.filter(post => post.name.includes(searchTxt.toLowerCase()))]
    }, [posts, searchTxt])

  return (
    <>
        {
            posts.loading === true
            ? 
            <Loader />
            :
            filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} comments={el.comments}/>)        
        }
    </>
  )
}

export default memo(Posts, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))