import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { logOut, selectUsers } from '../../store/slices/users/usersSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Main() {
  const { currentUser } = useSelector(selectUsers)
  const navigate = useNavigate()
  const dispatch = useDispatch()

    useEffect(() => {
       if(!currentUser){
        navigate('/login')
       }
    }, [currentUser])

  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <span to='/profile' className="profile-card">
                    <div className="profile-pic">
                        <img src={'https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png'} alt=""/>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button onClick={() => dispatch(logOut())} className="action-btn">switch</button>
                </span>
                <p className="suggestion-text">Suggestions for you</p>
            </div>
        </div>
    </section>
  )
}

export default Main