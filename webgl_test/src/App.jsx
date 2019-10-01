import React, {useState, useRef, useEffect} from 'react';

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const context = canvasRef.current.getContext("3d")
  })

  return (
    <canvas ref={canvasRef}/>
  );
}

export default App;
