import { Flex, Text, Image } from "@chakra-ui/react";
import remeraFt from "../../assets/remera.png";

const CardCategory = () => {
  return (
    <Flex
      align="center"
      direction="column"
      className="card-category"
      h="180px"
      w="150px"
      border="1px solid black"
      borderRadius='5px'
      boxSizing="border-box"
      p='10px'
      bg='white'
    >
      <Text fontSize="1rem" mb="10px">
        Remeras
      </Text>
      <Image src={remeraFt} height="100%" width="78px" />
    </Flex>
  );
};

export default CardCategory;
