import { BrowserRouter, Routes, Route } from "react-router-dom"
import Counter from "./Counter"
import Header from "./Header"
import NamesCounter from "./NamesCounter"
import { useState } from "react"
import { createPortal } from "react-dom"




function App() {

  const [showCounter, setShowCounter] = useState(false)
  const [showNamesCounter, setShowNamesCounter] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header
          onOpenCounter={() => setShowCounter(true)}
          onOpenNamesCounter={() => setShowNamesCounter(true)}
        />

        {
          showCounter && createPortal(
            <Counter onClose={() => setShowCounter(false)} />,
            document.body
          )
        }

        {
          showNamesCounter && createPortal(
            <NamesCounter onCloseNC={() => setShowNamesCounter(false)} />,
            document.body
          )
        }
        <Routes>
          <Route path="/" element={null} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
