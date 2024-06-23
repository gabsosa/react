import { Flex } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()

    console.log(error)

    return (
        <Flex justify='center' align='center'>
            <h3>ERROR 404</h3>
            <p>{error.message}</p>
        </Flex>
    )
} 

export default ErrorPage