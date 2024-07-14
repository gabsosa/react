import { Image, Box, Flex, Text, Show } from "@chakra-ui/react";
import imageft from "../../assets/deporte-modelaje.webp";
import CardCategory from "../CardCategory/CardCategory";
import styles from "./Catalogo.module.css";

const Catalogo = () => {
  return (
    <div style={{ position: "relative" }} className="containerCatalogo">
      <Box>
        <Image src={imageft} alt="imagen" className={styles.image} />
        <Show below="md">
          <Text
            mb="20px"
            fontWeight="500"
            fontSize="1.5rem"
            ml="20px"
          >
            Categorias:
          </Text>
        </Show>
        <Flex
          gap="2rem"
          justify={{base: 'start', md: 'center'}}
          position={{sm: "static", md: "relative"}}
          bottom={{md: "40px", lg: "50px"}}
          width="100%"
          mb={{base: '20px', md: '0'}}
          pl={{base: '10px', md: '0'}}
          wrap={{base: 'wrap', md: 'nowrap'}}
        >
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </Flex>
      </Box>

      <Text
        fontWeight="500"
        fontSize="1.5rem"
        ml="20px"
      >
        Lo mas vendido:
      </Text>
      <Flex
        gap="2rem"
        justify="start"
        mt="20px"
        mb='20px'
        pl="10px"
        width="100%"
        wrap={{base: 'wrap', md: 'nowrap'}}
      >
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </Flex>
    </div>
  );
};

export default Catalogo;
