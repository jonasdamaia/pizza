import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'
import MeusPedidos from './components/pages/MeusPedidos'
import Contato from './components/pages/Contato'
import NovoPedido from './components/pages/NovoPedido'

import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/meuspedidos' element={<MeusPedidos />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/novopedido' element={<NovoPedido />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App