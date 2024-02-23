import React from "react";

const Banners = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#c92424",
        paddingBottom: "2rem",
      }}
    >
      {/* Triangle at the left extreme */}
      <div className="triangle"></div>
      {/* main heading */}
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "4rem",
          color: "white",
          margin: "0",
        }}
      >
        The Great 1Gig Giveaway!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* left:100$button right:para,timer,button */}
        <div
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          {/* 100$ button */}
          <div style={{ display: "flex", padding: "2rem" }}>
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                background: "#180846",
                color: "#ffffff",
                border: "none",
              }}
            >
              {" "}
              <span style={{ fontSize: "3rem" }}>$100</span>
              <div
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>gift card</span>
                <span>giveaway</span>
              </div>
            </button>
          </div>
          {/* description,timer and offer button */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
            }}
          >
            {/* description */}
            <p
              style={{
                width: "70%",
                color: "white",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {/* timer */}
              <button
                style={{
                  display: "flex",
                  width: "50%",
                  height: "3rem",
                  background: "#c7c75c",
                  border: "none",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {/* timer text left */}
                <div style={{ fontSize: "1rem" }}>offers</div>
                {/* timer right */}
                <div>
                  <div style={{ fontSize: "1rem" }}>days hrs mins sec</div>
                  <div>00 : 00 : 00 : 00</div>
                </div>
              </button>
              {/* offer button */}
              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "fit-content",
                  borderRadius: "1rem",
                  padding: "0.4rem 0.8rem",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                See offers
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Pseudo-element for creating the arc */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "20px",
          backgroundColor: "#c92424",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1000px",
            height: "50px",
            background: "white",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            marginTop: "5rem",
            justifyContent: "space-around",
          }}
        >
          <h3 style={{ display: "flex", }}>
            <span style={{color:'#c92424', fontWeight:'800'}}>shop by deal</span>&nbsp; for new and existing customers
          </h3>
          {/* navigation buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              zIndex:'10'
            }}
          >
            {/* left button */}
            <button
              type="button"
              style={{
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
                background: "#ffffff",
              }}
            >
              &larr;
            </button>
            {/* right button  */}
            <button
              type="button"
              style={{
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
                background: "#ffffff",
              }}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
