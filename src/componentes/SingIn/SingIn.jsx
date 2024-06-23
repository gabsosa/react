import "./SingIn.css";
import {
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
} from "@chakra-ui/react";
import { FaFacebookF, FaAmazon, FaGoogle, FaUser, FaKey } from "react-icons/fa";
import { useState } from 'react'

const SingIn = () => {
  const [user, setUser] = useState({
    usuario: "",
    contraseña: "",
  });

  const handleClick = () => {
    console.log(user);
  };

  return (
    <>
      <Flex width={"100%"} height={"40px"} bg={"#DAD2BC"} align={"center"}>
        <h3 style={{ marginLeft: "30px", fontSize: "24px" }}>ClothingStore</h3>
      </Flex>
      <Flex align={"center"} justify={"center"} className="containerLogIn">
        <Stack
          direction={"column"}
          borderRadius={"5px"}
          border={"1px solid black"}
          p={"10px"}
        >
          <Button bg="#235CED" _hover={{ filter: "brightness(1.5)" }}>
            <FaFacebookF className="iconLogIn" />
            Sign in with Facebook
          </Button>
          <Button bg="#5469D9" _hover={{ filter: "brightness(1.5)" }}>
            <FaGoogle className="iconLogIn" />
            Sign in with Google
          </Button>
          <Button bg="black" _hover={{ filter: "brightness(1.5)" }}>
            <FaAmazon className="iconLogIn" />
            Sign in with Amazon
          </Button>
          <Divider mt={"10px"} />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaUser />
            </InputLeftElement>
            <Input
              width="250px"
              fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
              type="text"
              placeholder="Crea tu usuario"
              value={user.usuario}
              onChange={(event) => setUser({...user, usuario: event.target.value})}
            ></Input>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaKey />
            </InputLeftElement>
            <Input
              width="250px"
              fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
              type="password"
              placeholder="Crea tu contraseña"
              value={user.usuario}
              onChange={(event) => setUser({...user, usuario: event.target.value})}
            ></Input>
          </InputGroup>
          <button
          onClick={handleClick}
            style={{
              color: "black",
              backgroundColor: "#A99985",
              justifyContent: "center",
            }}
            className="buttonLogIn"
          >
            Log In
          </button>
        </Stack>
      </Flex>
    </>
  );
};

const Button = ({ bg, children }) => {
    return (
      <button style={{ backgroundColor: bg }} className="buttonLogIn">
        {children}
      </button>
    );
  };

export default SingIn;
