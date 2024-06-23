import {
  Flex,
  Stack,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaFacebookF, FaGoogle, FaAmazon, FaUser, FaKey } from "react-icons/fa";
import "./LogIn.css";
import { useState } from "react";
import axios from 'axios'

const LogIn = () => {
  const [user, setUser] = useState({
    usuario: "",
    password: "",
  });

  const handleClick = () => {
    const uri = 'http://192.168.0.12:3000/login'

    axios.post(uri, user)
    .then(response => console.log(response))
    .catch(error => console.log("Error: ", error))
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
            Log in with Facebook
          </Button>
          <Button bg="#5469D9" _hover={{ filter: "brightness(1.5)" }}>
            <FaGoogle className="iconLogIn" />
            Log in with Google
          </Button>
          <Button bg="black" _hover={{ filter: "brightness(1.5)" }}>
            <FaAmazon className="iconLogIn" />
            Log in with Amazon
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
              placeholder="Ingrese usuario"
              value={user.usuario}
              onChange={(event) => {
                setUser({ ...user, usuario: event.target.value });
              }}
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
              placeholder="Ingrese usuario"
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
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

export default LogIn;