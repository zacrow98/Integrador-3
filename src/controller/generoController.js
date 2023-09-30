const {contenido, categoria, actores, reparto, genero, generoTitulo} = require('../config/asociaciones')

// Controlador para crear un genero nuevo
const crearGenero = async (req, res)=>{
    try{
        const NuevoGenero = await genero.create(req.body)
        res.json(NuevoGenero)
    } catch (error){
        console.error('Error al crear el genero', error);
        res.status(500).json({error: 'Error al crear Genero'})
    }
}

// Controlador para obtener todos los generos
const listarGenero = async (req, res) => {
    try{
        const Genero = await genero.findAll()
        res.json(Genero)
    }catch(error){
        console.error('Error al obtener los generos', error);
        res.status(500).json({error: 'Error al obtener el genero'})
    }
}

// Controlador para obtener los generos por ID
const listarGeneroID = async (req, res) => {
    const {id_genero} = req.params
    try{
        const GeneroId = await genero.findByPk(id_genero)
        
        if(!GeneroId){
            res.status(404).json({ error:'Genero no encontrado'});
            return;
        }
        res.json(GeneroId)
    }catch(error){
        console.error('Error al obtener el genero por su ID', error);
        res.status(500).json({error: 'Error al obtener el genero por ID'})
    }
}

// Contralor para actualizar un genero por ID
const actualizarGenero = async (req, res) =>{
    const {id_genero} = req.params
    const {Nombre_Genero} = req.body
    try{
        const Genero = await genero.findByPk(id_genero)
        if(!Genero){
            res.status(404).json({ error:'Genero no encontrado'});
            return;
        }

        await genero.update({Nombre_Genero})
        res.json(Genero)
    }catch (error){
        console.error('Error al actualizar el genero', error);
        res.status(500).json({error: 'Error al actualizar el genero'})
    }
}

// Controlador para elimiminar un genero por su ID
const eliminarGenero = async (req, res) =>{
    const {id_genero} = req.params
    try{
        const Genero = await genero.findByPk(id_genero)
        if(!Genero){
            res.status(404).json({ error:'Genero no encontrado'});
            return;
        }

        await genero.destroy()
        res.json({mensaje: 'Genero eliminado correctamente'})
    }catch (error){
        console.error('Error al eliminar el genero', error);
        res.status(500).json({error: 'Error al eliminar el genero'})
    }
}

module.exports = {
    crearGenero,
    listarGenero,
    listarGeneroID,
    actualizarGenero,
    eliminarGenero
}

