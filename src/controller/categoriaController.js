const {contenido, categoria, actores, reparto, genero, generoTitulo} = require('../config/asociaciones')

const listarCategoria = async (req, res) => {
    try{
        const Categoria = await categoria.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            body: Categoria
        })
    }catch(error){
        console.error('Error al obtener la categoria', error);
        res.status(500).json({error: 'Error al obtener la categoria'})
    }
}


const listarCategoriaID = async (req, res) => {
    const {id} = req.params
    try {
        const categoriaId = await categoria.findByPk(id)

        !categoriaID ?res.status(404).json({error:'No se encontro la categoria'})
                     : res.json(categoriaId)
    }catch (error) {
        console.error('Error al obtener el Categoria', error);
        res.status(500).json({ Error: 'Error al obtener el Categoria' })
    }
}


const crearCategoria = async (req, res) => {
    const {
        nombre_categoria
    } = req.body
    try{
        const nuevaCategoria = await categoria.create({
            nombre_categoria
        })
        res.json(nuevaCategoria)
    } catch (error) {
        console.error('Error al obtener el Categoria', error);
        res.status(500).json({ error: 'Error al crear el Categoria' })
    }
}


const actualizarCategoria = async (req, res) => {
    const{id} = req.params
    const{nombre_categoria} = req.body
    try{
        const Categoria = await categoria.findByPk(id)
       
        if(!Categoria){res.status(404).json({ error: 'error ccategoria no encontrada' })
        }
        await categoria.update({
            nombre_categoria
        })
        res.json(Categoria)
    } catch (error) {
        console.error('Error al actualizar la categoria', error);
        res.status(500).json({ error: 'Error al actualizar la categoria' })
    }
}


const eliminarCategoria = async(req, res) =>{
    const {id} = req.params
    try{
        const Categoria = await categoria.findByPk(id)

        if(!Categoria)
            {res.status(404).json({error:'Categoria no encontrada'})
            return
    }
    await categoria.destroy()
    res.json({mensaje:'Categoria eliminada correctamente'})
    }catch(error){
        console.error('Error al eliminar la Categoria', error);
        res.status(500).json({error: 'Error al eliminar la Categoria'})
    }
}

module.exports = {
    listarCategoria,
    listarCategoriaID,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
}
