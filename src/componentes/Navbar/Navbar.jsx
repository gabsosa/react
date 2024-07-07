import { Flex, HStack, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <>
      <Show below="sm">
        <Flex color='white' align='center' justify='center' width='100%' height="30px" bg="#55524B">
            ClothingStore
        </Flex>
      </Show>
      <HStack gap={0} color="white" width="100%" height="45px" bg="#55524B">
        <Show above="sm">
          <Flex
            align="center"
            justify="center"
            width="20%"
            fontSize={{ sm: "0.8rem", md: "1rem" }}
            fontWeight="500"
          >
            ClothingStore
          </Flex>
        </Show>
        <SearchBar />
        <Show above="md">
          <Flex width="30%" align="center" ml="15px" justify="start">
            <Link style={{ marginRight: "20px" }} to={`/signup`}>
              Creá tu cuenta
            </Link>
            <Link to={`/signin`}>Inicia sesión</Link>
          </Flex>
        </Show>
        <Show below="md">
          <Flex _hover={{bg: '#55524B', filter: 'brightness(1.2)'}} ml='5px' height='100%' width='12%' align="center" justify="center">
            <Link to={`/signin`}>
              <FaRegUser />
            </Link>
          </Flex>
        </Show>
        <Flex align="center" cursor='pointer' _hover={{bg: '#55524B', filter: 'brightness(1.2)'}} justify="center" width='12%' height='100%'>
          <Link to={`/cart`}>
            <BsCart4 color="white" />
          </Link>
        </Flex>
      </HStack>
    </>
  );
};

export default NavBar;
