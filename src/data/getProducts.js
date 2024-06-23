import axios from 'axios'

const getProducts = async () => {

    const uri = 'http://192.168.0.12:3000/products'

    try {
        const products = await axios.get(uri)

        return products
    } catch(error) {
        console.log("Error: ", error)
    }

}

export default getProducts