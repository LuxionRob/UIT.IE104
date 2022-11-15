import React, { useState } from 'react'

const App = () => {
  const [isContentDisplay, setIsContentDisplay] = useState(false)

  const handleDisplay = () => {
    setIsContentDisplay(!isContentDisplay)
  }

  return (
    <div>
      <button onClick={handleDisplay}>Toggle</button>
    </div>
  )
}
export default App
