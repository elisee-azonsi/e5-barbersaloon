import  { useState } from 'react';
import axios from 'axios'

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can perform form validation or submit login data to backend here
    console.log(loginData);

    try {
        const response = await axios.post('http://localhost:3000/user/login', loginData);
  
        // Assuming your API returns a token upon successful login
       const token = response.data.token;

  
        // You may store the token in local storage or context for further use
        localStorage.setItem('token', token);
  
        // Login successful, you may redirect user or do other actions
        console.log('Login successful');
      } catch (error) {
        console.error('Login error:', error);
      }
    // Reset form fields
    setLoginData({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
