import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Error from './pages/Error.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/sobre' element={<Sobre />} />
        <Route  path='*' element={<Error />} />

       { /*path=ruta      element=Página que se mostrara*/}

      </Routes>
    </Router>
  );
}

export default App;
