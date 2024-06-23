import { Button, Flex } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import Producto from "../Producto/Producto";
import "./Catalogo.css";
import { useEffect, useState } from "react";
import getProducts from "../../data/getProducts";

const Catalogo = () => {
  const [products, setProducts] = useState([]); // Productos del catálogo 

  // Efectos
  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products.data))
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <div className="containerCatalogo">
      <div className="menuCategorias">
        <Button
          _hover={{ backgroundColor: "none", color: "#F5F1ED" }}
          bg="#A99985"
          rightIcon={<AiFillCaretDown />}
        >
          Categorias
        </Button>
      </div>
      <Flex flexWrap="wrap">
        {products.map((product, index) => {
          return <Producto key={index} {...product} />;
        })}
      </Flex>
    </div>
  );
};

export default Catalogo;