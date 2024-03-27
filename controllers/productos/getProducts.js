
const getProducts = async(req,res)=>{
    try {
        const pagination={
            page:1,
            start:0,
            limit:5,
        }
        
        if (req.query.page) {
            pagination.page=req.query.page
        }
        if (pagination.page>1) {
            pagination.start=(pagination.page-1)*pagination.limit
        }
        
        const productos = req.body.data
        const paginatedProducts=productos.slice(pagination.start,(pagination.start+pagination.limit))
        
        
        return res.status(200).json({
            paginatedProducts,
            success:true,
            message: 'Todos los productos'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}

export default getProducts