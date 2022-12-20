import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col space-y-12 justify-center items-center h-[100vh] mt-[-3.5rem]'>
      {/* <h1 className="font-bold text-[32px]">GeoInfo</h1> */}
      <img src="./geoinfologo.png" alt="" className='w-[250px]' />
      <SearchBar />

    </div>
  )
}

export default App
