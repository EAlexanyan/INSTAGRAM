import React, { useEffect, useRef } from 'react'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'


function Login() {
  const dispatch = useDispatch()
  const formRef = useRef(null)
  const { currentUser, data: users } = useSelector(selectUsers)
  const navigate = useNavigate()

  useEffect(() => {
    if(currentUser){
      navigate('/')
    }
  }, [currentUser])

  useEffect(() => {
    if(!users.length){
      dispatch(fetchUsers())
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(toggleCurrentUser({
      login: formRef.current[0].value,
      password: formRef.current[1].value
    }))
  }

  return (
    <div className='all'>
       <div className='allLogin'>
         <div className='imgDiv'>
            <img src={IMAGES.logo} alt='' />
         </div>
         <div className='formDiv'>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input defaultValue={'kamren'} placeholder='email or phon number' type='text' />
                <input defaultValue={'roscoeview'} placeholder='Password' type='password' />
                <button>Log in</button>
            </form>
         </div>
       </div>
    </div>
  )
}

export default Login