import './BookingData.css'
import axios from 'axios';

const BookingData = (user) => {

console.log(user);

const emailData = {
    to:'chriazo018@gmail.com',
    subject:'BOOKING CONFIRMED',
    message:`Hi ${user.user.barbername}, ${user.user.name} has confirmed an appointment with you for ${user.user.services}`
}

const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const response = await axios.post('http://localhost:3000/form/send-email', emailData);
      console.log('Email sent successfully:', response.data);
      // Handle success, display a success message, or reset the form
      } catch (error) {
      console.error('Error sending email:', error.response.data);
      // Handle error, display an error message, or inform the user
}
};

let price = (user.user.services == "Haircut") ? "30€" : 
            (user.user.services =="HShampoo") ? "45€" : 
              (user.user.services =="HShampooBarber") ? "55€": "Add the value"

return (
  <div className='booking-container'>
    <h1>CONFIRM YOUR BOOKING</h1>
        <h5>BOOKING DETAILS</h5>
            <div className='inner-container'>
            <div>
            <p>Nom:</p>
            <p>Service:</p>
            <p>Prix:</p>
            <p>Coiffeur:</p>
            <p>Date - Heure:</p>
            </div>
            <div>
            <p>{user.user.name}</p>
            <p>{user.user.services}</p>
            <p>{price}</p>
            <p>{user.user.barbername}</p>
            <p>{user.user.date},{user.user.time}</p>
            </div>
            </div>
            <h5>CONTACT</h5>
            <div className='inner-container'>
            <div>
            <p>Tel:</p>
            <p>Email:</p>
            <p>Message:</p>
            </div>
            <div>
            <p>{user.user.phone}</p>
            <p>{user.user.email}</p>
            <p>{user.user.text}</p>
            </div>
            </div>
        <button onClick={handleSubmit}>Confirmer</button>
        </div>
)
}

export default BookingData