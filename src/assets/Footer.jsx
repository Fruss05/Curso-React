import React from "react";
import twitter from "./images/twitter.png";
import telegram from "./images/telegram.png";

const Footer = () =>{
    return (
        <div className=" container">
           <hr />
           <div className="row text-white">
             <div className="col-md-6">
                <p>TM © Raper Clothes | Todos los derechos reservados.</p>
             </div>
             <div className="col-md-6">
                <img src={twitter} width="24" alt="twitter" />
                <img src={telegram} width="24" alt="telegram" />
             </div>
            </div>
        
        </div>
    )
}

export default Footer;