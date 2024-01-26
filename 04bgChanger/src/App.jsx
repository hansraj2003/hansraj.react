import { useState } from "react"


function App() {
  const [color, setColor] = useState("#101010")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 
          shadow-lg bg-white px-3 py-2 rounded-3xl"> 
            <button
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" 
            style={{backgroundColor: "green"}}
            onClick={() => setColor("green")}>Green</button> 
            <button
            className="outline-none px-4 py-1 rounded-full text-black
            shadow-lg" 
            style={{backgroundColor: "Yellow"}}
             onClick={() => setColor("yellow")}>Yellow</button> 
            <button
            className="outline-none px-4 py-1 rounded-full text-black
            shadow-lg" 
            style={{backgroundColor: "Lavender"}}
             onClick={() => setColor("lavender")}>Lavender</button> 
            <button
            className="outline-none px-4 py-1 rounded-full text-black
            shadow-lg" 
            style={{backgroundColor: "White"}}
             onClick={() => setColor("white")}>White</button> 
            <button
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" 
            style={{backgroundColor: "Blue"}}
             onClick={() => setColor("blue")}>Blue</button> 
            <button
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" 
            style={{backgroundColor: "red"}}
             onClick={() => setColor("red")}>Red </button> 
            <button
            className="outline-none px-4 py-1 rounded-full text-black
            shadow-lg" 
            style={{backgroundColor: "Pink"}}
             onClick={() => setColor("pink")}>Pink</button> 
            <button
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" 
            style={{backgroundColor: "Gray"}}
             onClick={() => setColor("Gray")}>Gray</button> 
             <button
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" 
            style={{backgroundColor: "Purple"}}
             onClick={() => setColor("Purple")}>Purple</button> 
             <button
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" 
            style={{backgroundColor: "Black"}}
             onClick={() => setColor("Black")}>Black</button> 
             <button
            className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg" 
            style={{backgroundColor: "Olive"}}
             onClick={() => setColor("Olive")}>Olive</button> 
          
           </div>
        </div>
      </div>
    </>
  )
}

export default App
