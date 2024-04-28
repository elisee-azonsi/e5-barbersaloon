import useAuth from "../util/useAuth";

const Home = () => {
    
    const isLoggedIn = useAuth();

    if (!isLoggedIn) {
      // If user is not logged in, redirect to login page
      return null; // or render a loading spinner or some other component
    }
    
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
