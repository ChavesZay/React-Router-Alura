import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Post from './pages/Post';
import Error from './pages/Error.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Categoria from './pages/Categoria'

function App() {
  
  return (
    <Router>
      <Header />
      { /*Todo  lo que se pone fuera de Routes lo comparte todos los componentes*/}
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/sobre' element={<Sobre />} />
        <Route  path='/posts/:id' element={<Post  />} />
        <Route  path='/categoria/:id/*' element={<Categoria />} />
        {/*Para anidar rutas la ruta padre, al final de llevar un '*' para saber que se le puede agregar más a la URL*/ }

        <Route  path='*' element={<Error />} />

       { /*path=ruta      element=Página que se mostrara*/}

      </Routes>
    </Router>
  );
}

export default App;
