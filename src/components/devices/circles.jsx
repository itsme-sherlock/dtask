import React from "react";
const Circle = ({ index }) => {
    return (
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <div style={{ borderRadius: '50%', width: '2rem', height: '2rem', background: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{index} </div>
        <div style={{ fontSize: '0.7rem', display: 'flex', justifyContent: 'center' }}>desc</div>
      </div>
    );
  };

  export default Circle;