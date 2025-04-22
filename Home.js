// // src/pages/Home.js
// import React, { useState } from 'react';

// function Home() {
//   const [number, setNumber] = useState(null);

//   const generateRandom = () => {
//     setNumber(Math.floor(Math.random() * 1000));
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Random Number Generator</h2>
//       <button onClick={generateRandom}>Generate</button>
//       {number !== null && <p>Your number: {number}</p>}
//     </div>
//   );
// }

// export default Home;
// src/pages/Home.js
import React, { useState } from 'react';

function Home() {
  const [number, setNumber] = useState(null);

  const generateRandom = () => {
    setNumber(Math.floor(Math.random() * 1000));
  };

  return (
    <div className="container">
      <h2>Random Number Generator</h2>
      <button onClick={generateRandom}>Generate</button>
      {number !== null && <p>Your number: {number}</p>}
    </div>
  );
}

export default Home;

