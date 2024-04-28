import  { useState } from 'react';
import axios from 'axios'
import { CookiesProvider, useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";
import './Signup.css'


function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [cookies, setCookie] = useCookies(['user']);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(loginData);

    try {
        const response = await axios.post('http://localhost:3000/user/login', loginData);
  
        // Assuming your API returns a token upon successful login
       const token = response.data.token;
       setCookie('uuid', token, { path: '/',sameSite:'none',secure:true })
  
        // Login successful, you may redirect user or do other actions
        console.log('Login successful');
        navigate("/profile");
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
    <div className='signup-c' style={{'height': '80vh'}}>
      <h2 style={{'textAlign':'center', 'marginBlockStart' : '0', 'paddingTop':'10px'}}>Login</h2>
      <form style={{'align-items': 'center'}} onSubmit={handleSubmit}>
        
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
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <button style={{'margin-left': '140px', 'width': 'auto'}} type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginForm;
