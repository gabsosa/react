import "./Navbar.css";
import { Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Flex className="container" justifyContent="space-between">
        <h3 className="title">ClothingStore</h3>
        <ButtonGroup variant="ghost" spacing="6">
          <Button _hover={{ backgroundColor: "none", color: "#F5F1ED" }}>
            <Link to={`/InicioSesion`}>
              Iniciar sesión
            </Link>          </Button>
          <Button _hover={{ backgroundColor: "none", color: "#F5F1ED" }}>
            <Link to={`/Registro`}>
              Registrarse
            </Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default NavBar;