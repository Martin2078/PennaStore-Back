import fs from 'fs'
const jsonFilePath = '././db/carrito.json';

const read = async (req, res) => {
    try {
        const loadJSONFile = (filePath) => {
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                return JSON.parse(data);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
                return null;
            }
        };

        const shoppingCartData = loadJSONFile(jsonFilePath);

        if (!shoppingCartData) {
            console.error('No se pudieron cargar los datos del archivo JSON. Saliendo...');
            process.exit(1);
        }
        const findedShoppingCart = shoppingCartData.find((shoppingCart) => {
            if (shoppingCart.id == 223 && shoppingCart.state == 'pending') {
                return shoppingCart
            }
        })


        if (findedShoppingCart != undefined) {
            return res.status(200).json({
                success: true,
                shoppingCart: findedShoppingCart,
                message: 'Carrito del usuario'
            })
        } else {
            return res.status(200).json({
                success: true,
                message: 'el usuario no tiene carrito'
            })
        }
    } catch (error) {

    }
}
export default read