import About from "./assets/components/About"
import Catalog from "./assets/components/Catalog"
import Footer from "./assets/components/Footer"
import Home from "./assets/components/Home"
import Nav from "./assets/components/Nav"
import Product from "./assets/components/Product"


const App = () => {
  return (
    <div className=''>
      <Nav />
      <Home />
      <Product />
      <About />
      <Catalog />
      <Footer />
    </div>
  )
}

export default App