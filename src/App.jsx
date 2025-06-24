import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import './App.css'
import Login from './components/Login'
import Cart from './components/Cards/Cart'
import Pizza from './components/Pizza'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home/> */}
      <Pizza/>
      {/* <Cart /> */}
      <Footer/>
    </>
  )
}

export default App;
