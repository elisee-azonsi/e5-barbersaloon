import React from 'react'
import './Contact.css'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc44aa01-7d37-440f-a15c-ea2199476d34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Votre message à été envoyé! Nous reviendrons vers vous au plus vite!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contactC'>
      <div className="CC container">
        <h2>Contactez-nous</h2>
       <div className='contact-page'>
        <div className="where">
            <h2>Contact</h2>
        <p> 32, Rue de la Victoire <br />
                    59000, Lille, France</p>
                    <p>
                        Lundi - Vendredi<br /> 
                        10h - 21h<br />
                        Samedi<br /> 
                        10h - 20h <br />
                        Dimanche<br /> 
                        Fermé <br />
                    </p>      
        </div>

        <div className="contact-form">
        <form onSubmit={onSubmit} accessKey='bc44aa01-7d37-440f-a15c-ea2199476d34'>
                    <div className="name-row">
                        <label> Prénom 
                            <input type="text" name='nom' placeholder=' Insérer votre prénom ' required/></label>
                        <label> Nom 
                        <input type="text" name='prenom' placeholder=' Insérer votre prénom ' /></label>
                    </div>
                    <div className="email">
                        <label> Email 
                        <input type="email" name='email' placeholder=' Votre adresse email ' required /></label>
                    </div>
                    <div className="text">
                        <label> Message </label>
                        <textarea type="text-area" name='message' placeholder=' Laissez votre message ' />
                    </div>
                    <div>
                        <button>Envoyer</button>
                    </div>
        </form>
                <span>{result}</span>
        </div>
       
    </div>
    <center>
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639828.1010145335!2d1.626945340730947!3d49.749250416037206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a516c974c53%3A0x940f9643050908ad!2s32%20Rue%20de%20la%20Victoire%2C%2059520%20Marquette-lez-Lille%2C%20France!5e0!3m2!1sfr!2slu!4v1710090090328!5m2!1sfr!2slu" 
        width="800" 
        height="450" 
        style={{border:0,}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

    </iframe>
 
    </center>
    </div>
    </div>
    

  )
}

export default Contact
