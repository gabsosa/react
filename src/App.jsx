import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import InicioDeSesion from "./pages/InicioDeSesion";
import ErrorPage from "./pages/ErrorPage";
import Registro from './pages/Registro'
 
function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<InicioDeSesion />} />
          <Route path="/signup" element={<Registro />} />
          <Route path="/categorias/:categoriaId" element={<h3>categoria específica</h3>} />
          <Route path={`*`} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
