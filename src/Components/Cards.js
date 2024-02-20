import React from "react";
import One_Card from "./One_Card";

function Cards({data,RemoveTour}){
  console.log(data);
    return(
        <div>
            <h2 className="heading"> Plan Your Travel</h2>
            <div className="Card-container-big">
               {
                data.map((data) => {
                    return(<One_Card key={data.id} {...data} RemoveTour={RemoveTour} ></One_Card>);
                })
               }
                
            </div>

        </div>
    );
}

export default Cards;