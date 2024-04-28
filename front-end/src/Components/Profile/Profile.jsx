import './Profile.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});
  const [appointments, setAppointments] = useState([]);

  // Fonction pour formater la date et le nom du barbier
  const formatDateAndBarber = (appointment) => {
    console.log(appointment);
    const [date, barberName] = appointment.appointment.split(':'); // Using array destructuring
    console.log(date, barberName)
    return { date, barberName };
};


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/profile', { withCredentials: true });
        const userData = response.data.result;
        setUserData(userData);
        console.log(userData);
        setAppointments(userData.map(appointment => formatDateAndBarber(appointment)));
        setLoading(false); // Mettre à jour loading à false après avoir reçu les données
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Mettre à jour error en cas d'erreur
        setLoading(false); // Mettre à jour loading à false en cas d'erreur
      }
      

    };
  
    fetchData("");
  }, []);
  
  // Affichage de Loading si les données sont en cours de chargement
  if (loading) {
    return <div>Loading...</div>;
  }

  // Affichage d'une erreur si la récupération des données a échoué
  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(userData)
  


  return (
    <div className='profile'>
      <div className="info container">
        <h3>Votre profil</h3>
        <p>Prénom: <b>{userData[0]?.user_name}</b></p>
        <p>Nom: <b>{userData[0]?.user_surname}</b></p>
        <p>Tél.: <b>{userData[0]?.user_phone_num}</b></p>
        <p>Email: <b>{userData[0]?.user_email}</b></p>
      </div>
      <div className="bookings">
        <h3>Tes rendez-vous</h3>
        <div>
          {appointments?.map((appointment, index) => (
            <p key={index}>Date: {appointment?.date}, Coiffeur: {appointment?.barberName}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
