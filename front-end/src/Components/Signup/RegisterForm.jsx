import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import './Signup.css'


function RegisterForm() {
  const [registerData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...registerData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/user/register', registerData);
          console.log('Registration successful:', response.data);
        Swal.fire({
          title:"Succès!",
          text: 'Votre inscription à été validée',
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
    console.log(registerData);
    setFormData({
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      phone: ''
    });
  };

  return (
    <div className='signup-c' style={{'height': '80vh'}}>
      <h2 style={{'textAlign':'center', 'marginBlockStart' : '0', 'paddingTop':'10px'}}>S&apos;inscrire</h2>
      <form style={{'align-items': 'center'}} onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={registerData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="surname">Prénom:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={registerData.surname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registerData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de Passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Téléphone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={registerData.phone}
            onChange={handleChange}
          />
        </div>
        <button style={{'margin-left': '140px', 'width':'auto'}} type="submit">Confirmer</button>
      </form>
    </div>
  );
}

export default RegisterForm;
