import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Location from './Components/Dashboard/Location'



function App() {
  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    const checkLoad = ()=>{
      setTimeout(() => {
        setLoader(true);
      },2000);
      
    }
    
    window.addEventListener("load", checkLoad)

    return () => {
      window.removeEventListener('load', checkLoad);
    };
   
  },[])

  if(!loader){
  return(
    <div className='loader'>
      <img src="/assets/Landingpage/loading.gif" alt="" />
    </div>
  )
  }

  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/location' element={<Location/>}/>
    </Routes>
    </BrowserRouter>  
    
  )
}

export default App
