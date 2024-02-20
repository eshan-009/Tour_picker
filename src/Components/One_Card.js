
import React, { useState } from "react";


function One_Card ({id,name,info,image,price,RemoveTour}){

    const[readmore,setreadmore] =useState(false);
    const desc = readmore ? info : `${info.substring(0,200)}...`;
    function readmoreHandler(){
            setreadmore(!readmore);
    }
    return(
       
        <div className="Card-container-small">
            <div>
            <img className="card-image" src={image}></img>
            </div>

            <div>
            <p className="price">₹ {price}</p>
            </div>

            <div>
            <p className="name">{name}</p>
            </div>

            <div>
            <p className="desc">{desc} <span className="span-tag" onClick={readmoreHandler}>{readmore ?'Show Less' : 'Read More'}</span></p>
            </div>

            <div>
                <button className="button-remove" onClick={()=>{RemoveTour(id)}}>Not Interested</button>
            </div>
        </div>
        
    );

}
export default One_Card;