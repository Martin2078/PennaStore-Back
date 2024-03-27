import fs from 'fs'
const jsonFilePath = '././db/carrito.json';

const create= async(req,res)=>{  
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
        
        jsonData.push(req.body);
        
        // Guardar el objeto JSON actualizado en el archivo
        saveJSONFile(jsonFilePath, jsonData);

        
        return res.status(200).json({
            success:true,
            message:'created',
            shoppingCart:jsonData
        })
    } catch (error) {
        
    }
}

export default create