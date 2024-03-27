import fs from 'fs'
const jsonFilePath = '././db/carrito.json';

const deleteProduct=async(req,res)=>{
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
        
        const saveJSONFile = (filePath, data) => {
            try {
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log('Datos eliminados correctamente del archivo JSON.');
            } catch (error) {
                console.error('Error al guardar el archivo JSON:', error);
            }
        };
        
        let jsonData = loadJSONFile(jsonFilePath);
        
        if (!jsonData) {
            console.error('No se pudieron cargar los datos del archivo JSON. Saliendo...');
            process.exit(1);
        }
        
        const findedCart=jsonData.find((cart)=>{
            if (cart.id==req.params.shoppingid && cart.state!='Terminado') {
                return cart
            }
        })

        
        findedCart.products=findedCart.products.filter((product)=>{          
            if (product.id!=req.params.productId) {
                return product  
            }
            
        })
        if (findedCart.products.length===0) {
            findedCart.state='Terminado'
        }
        saveJSONFile(jsonFilePath, jsonData)

        return res.status(200).json({
            success:true,
            message:'product eliminated'
        })
    } catch (error) {
        
    }
}
export default deleteProduct