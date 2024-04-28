import{ useState } from 'react'
import './Rdvf.css'
import axios from 'axios'
import BookingData from '../BookingData/BookinData'
import Swal from 'sweetalert2'

const Rdvf = () => {

    const [user, setUser] = useState(
        {
            surname: '', name: ' ', date: '', time: '', phone:'', email:'', text:'', barbername:'', services:''
        }
    );
    const [slip, setSlip] = useState(false);
    let name, value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
        console.log(user)
    }

    const getdata = async(e) => {
        e.preventDefault();    
        try {
            const response = await axios.post('http://localhost:3000/form/rdv', user, {withCredentials: true});
    
            console.log('Registration successful:', response.data);
            Swal.fire({
                title:"Succès!",
                text: 'Votre réservation à été validée',
                icon:'success',
                confirmButtonText: 'Fermer'
              });
          } catch (error) {
            console.error('Registration error:', error);
            Swal.fire({
                title:"Erreur",
                text: 'Il y a eu un problème à la soumission',
                icon:'error',
                confirmButtonText: 'OK'
              });
          }
        console.log(user);
        // Reset form fields
        // setUser({
        //     name: '', 
        //     surname: ' ', 
        //     date: '', 
        //     time: '', 
        //     phone:'', 
        //     email:'', 
        //     text:'', 
        //     barbername:'', 
        //     services:''
        // });
        setSlip(true);
      };

  return (
    <div className='form container'>
        <aside>
            <form method='POST'>
                <h2>PRENEZ ICI VOS RDV!</h2>
                <label className='label'>Nom
                <input type="text" name="name" placeholder='Nom' value={user.name} autoComplete='off' required onChange={data}></input></label>
                <label className='label'>Prénom
                <input type="text" name='surname' placeholder='Prenom' value={user.surname} autoComplete='off' required onChange={data}></input></label>
                <label className="barber-name"> Coiffeur
                    <select name="barbername" value={user.barbername} required onChange={data}>
                        <option value="empty">Choisissez un coiffeur</option>
                        <option value="Jackson">Jackson</option>
                        <option value="Tyler">Tyler</option>
                    </select>
                </label>
                <label  className="service"> Préstation
                    <select name="services" value={user.services} required onChange={data}>
                        <option value="empty">Choisissez une préstation</option>
                        <option value="Haircut">Coup Simple </option>
                        <option value="HShampoo">Coupe + Shampoo </option>
                        <option value="HShampooBarber"> Haircut + Shampoo + Barbe</option>
                    </select>
                </label>
                <label className='label'>Date
                <input type='date' name='date' value={user.date} autoComplete='off' required onChange={data}></input></label>
                <label className='label'>Heure
                <input name="time" type='time' value={user.time} autoComplete='off' required onChange={data} ></input></label>
                <label className="telephone">Tél
                <input type="text" name='phone' value={user.phone} autoComplete='off' required onChange={data}/></label>
                <label className="email">Email
                <input type="email" name='email' value={user.email} autoComplete='off' required onChange={data} /></label>
                <label className="Message" onChange={data}> Message
                    <textarea name="text" type="text-area" value={user.text} />
                </label>
                <button onClick={getdata}>Envoyer</button>
            </form>
        </aside>
        <div>
            {slip && <BookingData user={user} />}   
        </div>
    </div>
  )
}

export default Rdvf
