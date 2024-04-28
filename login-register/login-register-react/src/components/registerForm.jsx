import { useState } from 'react';
import axios from 'axios'

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
    // You can perform form validation or submit data to backend here

    try {
        const response = await axios.post('http://localhost:3000/user/register', registerData);
  
        // Registration successful, you may redirect user or do other actions
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration error:', error);
      }
    console.log(registerData);
    // Reset form fields
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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={registerData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={registerData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
