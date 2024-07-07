import axios from 'axios'

export const getProducts = async () => {

    const uri = 'http://192.168.0.12:5000/products'

    try {
        const products = await axios.get(uri)

        return products
    } catch(error) {
        console.log("Error: ", error)
    }

}

export const getCategories = () => {
    const categorias = [
        {id: 1, name: 'Remera'},
        {id: 2, name: 'Pantalon'},
        {id: 3, name: 'Campera'},
        {id: 4, name: 'Zapatilla'},
        {id: 5, name: 'Buzo'},
        {id: 6, name: 'Calza'},
    ]
    return categorias
} 