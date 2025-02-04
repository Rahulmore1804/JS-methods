import React, { useState, useEffect } from 'react';
import './style.css';

// you can remove strict mode for two times calling useEffect
export default function App() {
  const [state1, seState1] = useState(1);
  useEffect(() => {
    window.addEventListener('mousemove', () => {
      console.log('jd');
    });

    function map() {
      console.log('intial');
    }
    map();
    return () => {
      console.log('clean up');
      window.removeEventListener('mousemove', () => {
        console.log('jd');
      });
    };
  }, [state1]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={() => seState1(state1 + 1)}>increase</button>
      {state1}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
