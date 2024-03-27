import fs from 'fs'
const jsonFilePath = '././db/carrito.json';

const addProduct=async(req,res)=>{

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
                console.log('Datos agregados correctamente al archivo JSON.');
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
            if (cart.id==req.params.id && cart.state!='Terminado') {
                return cart
            }
        })

        

        if (findedCart!=undefined) {
            findedCart.products.push(req.body);
           
            saveJSONFile(jsonFilePath, jsonData);
            
            return res.status(200).json({
                success:true,
                message:'Product added'
            })
        }else{
            return res.status(201).json({
                success:true,
                message:'Not Found'
            })
        }
       
        // Guardar el objeto JSON actualizado en el archivo

    
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status:false,
            message:error
        })
    }
}
export default addProduct