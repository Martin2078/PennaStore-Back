import fs from 'fs'
const jsonFilePath = './db/products.json';

const loadJSONFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
        return null;
    }
};

const productsData = loadJSONFile(jsonFilePath);

if (!productsData) {
    console.error('No se pudieron cargar los datos del archivo JSON. Saliendo...');
    process.exit(1);
}
const productDataConvert = async (req, res, next) => {
    try {

        req.body.data = productsData
        return next()
    } catch (error) {
        console.log(error);
    }
}
export default productDataConvert