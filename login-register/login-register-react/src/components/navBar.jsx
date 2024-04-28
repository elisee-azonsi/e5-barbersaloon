import { Link,Outlet } from 'react-router-dom'; // If you're using React Router

function Navbar() {
  return (
    <div>
    <nav className="navbar">
    
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
         
        </p>
        <p>
          <Link to="/register">Register</Link>
         
        </p>
    
    </nav>
    <Outlet/>
    </div>
  );
}

export default Navbar;
