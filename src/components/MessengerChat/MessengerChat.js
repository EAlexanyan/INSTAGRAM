import './MessengerChat.css'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerChat() {
   const { currentUser: {messages}, currentUser } = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
		   {
        messages.map(el => (
          <>
            <h2><span style={{color:'blue'}} >{currentUser?.username}:</span> {el.question}</h2>
            <h2><span style={{color:'red'}} >Bot:</span> {el.answer}</h2>                  
            <br/>
          </>
        ))
       }
	 </div>
  )
}

export default MessengerChat
