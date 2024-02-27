import React from "react";
import Cards from "./cards";

const Devices = ({getPrice}) => {
  const device = [
    {
      imageUrl:"https://telecomtalk.info/wp-content/uploads/2021/08/airtel-xstream-box-upgrade-cost-options-features.jpg.webp",
      name:'Xtreme Box',
      price:'1500'

    },{
      imageUrl:"https://images.herzindagi.info/image/2023/Nov/Best-Full-HD-TVs.jpg",
      name:"HD-Hight Defintion",
      price:'900'

    },
    
    
    
  ]
  return (
    <div style={{ background: "#f0f0f0", display: "flex", marginTop: "10rem" }}>
     {device.map((element)=>(
         <Cards
         key={element.name}
         imageUrl={element.imageUrl}
         name={element.name}
         price={element.price}
         addToCart={getPrice} // Pass addToCart function as a prop
       />
     ))}

    </div>
  );
};

export default Devices;
