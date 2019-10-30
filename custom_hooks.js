import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setX(e.clientX)
      setY(e.clientY)
    })
  }, [])

  return [x, y]
}

const ShowMousePosition = () => {
  const [x, y] = useMousePosition() // get x and y out of this function

  return (
    <div>
      <h3>X: {x}, Y: {y}</h3>
    </div>
  )
}


const ShowMouseColour = () => {

  const [x, y] = useMousePosition()
  
  return (
    <div>
      <h3
        style={{
          color: `rgb(${x}, ${y}, 50)`
        }}
      >AYYYY ITS YA BOI</h3>
    </div>
  )
}


const ShowMouseFontSize = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setX(e.clientX)
      setY(e.clientY)
    })
  }, [])

  return (
    <div>
      <h3
        style={{
          fontSize: `${x}px`
        }}
      >DJ NIMA</h3>
    </div>
  )
}


const App = () => {
  
  return (
    <div>
      <ShowMousePosition />
      <ShowMouseColour />
      <ShowMouseFontSize />
    </div>
  );
}

export default App;
