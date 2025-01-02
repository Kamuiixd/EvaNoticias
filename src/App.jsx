import { useState } from 'react'
import './App.css'
import Header from './Components/layout/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsPage from './Components/pages/News/NewsPage';
import Footer from './Components/layout/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
      
      <div>
        <NewsPage/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
