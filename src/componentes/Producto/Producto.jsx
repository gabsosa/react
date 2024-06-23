import { Flex, Image, Button } from '@chakra-ui/react'
import imagenRemera from '../../assets/remera.png'
 
const Producto = ({nombre, precio, img}) => {
    return (
        <Flex flexDirection='column' align='center' mt='10px' justify='center' p='10px'>
            <Image bg='#F5F1ED' boxSize='100px' src={img} alt={nombre}></Image>
            <p style={{alignSelf: 'start'}}>{nombre}</p>
            <p style={{alignSelf: 'start'}}>$ {precio}</p>
            <Button _hover={{backgroundColor: 'none', color: '#F5F1ED'}} bg='#A99985' width='100%' mt='5px'>Agregar</Button>
        </Flex>
    )
}

export default Producto