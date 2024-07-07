import { Image, Box, Flex, Text, Show } from '@chakra-ui/react'
import imageft from '../../assets/deporte-modelaje.webp'
import CardCategory from '../CardCategory/CardCategory'
import styles from './Catalogo.module.css'

const Catalogo = () => {
    return (
        <div className="containerCatalogo">
            <Image src={imageft} alt="imagen" className={styles.image}/>
            <Show breakpoint='(max-width: 600px)'>
                <Text mb='400px' position='relative' top='-20px' fontWeight='500' fontSize='1.5rem' ml='20px'>Categorias:</Text>
            </Show>
            <Flex gap='2rem' justify='center' position='relative' top='-50px' width='100%'>
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
            </Flex>
            <Text position='relative' top='-20px' fontWeight='500' fontSize='1.5rem' ml='20px'>Lo mas vendido:</Text>
            <Flex position='relative' top='-40px' gap='2rem' justify='start' mt='50px' pl='10px' width='100%'>
                <CardCategory />
                <CardCategory />
                <CardCategory />
            </Flex>
            
        </div>
    )
}

export default Catalogo