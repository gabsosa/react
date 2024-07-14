import { Flex, Text, Image } from "@chakra-ui/react";
import remeraFt from "../../assets/remera.png";

const CardCategory = () => {
  return (
    <Flex
      align="center"
      direction="column"
      h={{base: '140px', md: '160px'}}
      w={{base: "150px",sm: '150px', md: "15%"}}
      border="1px solid black"
      borderRadius='5px'
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
