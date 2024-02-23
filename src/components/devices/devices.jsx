import React from "react";
import Cards from "./cards";

const Devices = () => {
  return (
    <div style={{ background: "#f0f0f0", display: "flex", marginTop: "10rem" }}>
      <Cards
        imageUrl="https://telecomtalk.info/wp-content/uploads/2021/08/airtel-xstream-box-upgrade-cost-options-features.jpg.webp"
        name="Xtreme Box"
        price="1500"
      />
       <Cards
        imageUrl="https://images.herzindagi.info/image/2023/Nov/Best-Full-HD-TVs.jpg"
        name="HD-Hight Defintion"
        price="900"
      />
    </div>
  );
};

export default Devices;
