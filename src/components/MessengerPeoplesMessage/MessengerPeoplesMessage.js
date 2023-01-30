import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({name,active,img}) {
  return (
	 <div className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src='https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw=' alt=''/>
		</div>
		<div className='Message-info'>
			<p>Chat Bot</p>
			{/* <p>{active}</p> */}
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
