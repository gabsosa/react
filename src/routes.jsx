import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import InicioDeSesion from  './pages/InicioDeSesion'
import Registro from './pages/Registro'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: '/InicioSesion',
        element: <InicioDeSesion />
    },
    {
        path: '/Registro',
        element: <Registro />
    }
])

export default routes