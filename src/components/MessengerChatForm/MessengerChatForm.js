import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { addNewmessage } from '../../store/slices/users/usersSlice'


function MessengerChatForm() {
  const dispatch = useDispatch()
  const formRef = useRef(null)

  const handleSubmit = (e) => {
	e.preventDefault()
	const message = formRef.current[0].value
     dispatch(addNewmessage(message))
	formRef.current.reset()
  }

  return (
		<form ref={formRef} onSubmit={handleSubmit} className='Chat-input'>
		    <input type='text' placeholder='Message...'/>
			<label>
               <input type='submit' style={{display:'none'}}/>
		       <img src={IMAGES.like} alt=''/>
			</label>
		</form>
  )
}

export default MessengerChatForm
