import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/sign-up" element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App