import React from "react";

const Banner = () => {
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* banner background */}
      <div>
        {/* svg */}
        <svg
          width="100%"
          viewBox="0 0 1280 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1280 0H0V270H115.101C283.683 231.394 459.21 211 639.5 211C819.79 211 995.317 231.394 1163.9 270H1280V0Z"
            fill="#CD3434"
          />
        </svg>
      </div>
     {/* Text */}
     <div >
     <h1 className="heading-text">The Great 1Gig Giveaway !</h1>
     {/*round and description text  */}
     <div className="circle-text">
     
     <p className="para-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
     <div className="circle-container">
      $100 gift card giveaway
    </div>

     </p>
     </div>
     </div>
     {/* heaing */}
   
    </div>
  );
};

export default Banner;
