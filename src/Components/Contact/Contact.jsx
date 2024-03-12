import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "06f5225b-eadd-4b4c-b34f-02e44de81681");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Mande uma menssagem <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ab, accusantium
             odio id dolorum distinctio natus neque dolor 
             asperiores placeat suscipit vel. Ex fugiat atque dolorem saepe? Omnis, doloremque ad.</p>
             <ul>
                <li><img src={mail_icon} alt="" />Contato@Pedrobrabao.dev</li>
                <li><img src={phone_icon} alt="" />+55 11 93776-3473</li>
                <li><img src={location_icon} alt="" />777 Pedrobrabos av, seilapoha <br />MA 0239, Brazil</li>
             </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Seu nome</label>
            <input type="text" name='name' placeholder='Coloque seu nome' required />
            <label>Numero de telefone</label>
            <input type="tel" name='phone' placeholder='Coloque seu numero de telefone' required />
            <label>Escreva suas mensagens aqui</label>
            <textarea name="message" rows="10" placeholder='Coloque sua mensagem' required></textarea>
            <button type='submite' className='btn dark-btn'>Mande agora <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
