const {contenido, categoria, actores, reparto, genero, generoTitulo} = require('../config/asociaciones')

//Lista todo el contenido
const listarContenido = async (req, res) => {
    try {
        const Contenido = await contenido.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            body: Contenido
        })
    } catch (error) {
        console.error('Error al obtener el contenido', error);
        res.status(500).json({ error: 'Error al obtener el contenido' })
    }
}

//Lista el contenido por ID
const listarContenidoID = async (req, res) => {
    const { id } = req.params
    try {
        const ContenidoId = await contenido.findByPk(id)

        !ContenidoId ? res.status(404).json({ error: 'No se encontro el contenido' })
                     : res.json(ContenidoId)
    } catch (error) {
        console.error('Error al obtener el contenido', error);
        res.status(500).json({ Error: 'Error al obtener el contenido' })
    }
}

const crearContenido = async (req, res) => {
    const { 
        poster,
        titulo,
        categoria,
        resumen,
        trailer,
        temporadas,
        reparto,
    } = req.body;
    try {
        const nuevoContenido = await contenido.create({
            poster,
            titulo,
            categoria,
            resumen,
            trailer,
            temporadas,
            reparto
        })
        res.json(nuevoContenido)
    } catch (error) {
        console.error('Error al obtener el contenido', error);
        res.status(500).json({ error: 'Error al crear el contenido' })
    }
}

const actualizarContenido = async (req, res) => {
    const { id } = req.params
    const {
        poster,
        titulo,
        categoria,
        resumen,
        trailer,
        temporadas,
        reparto
    } = req.body
    try {
        const Contenido = await contenido.findByPk(id)

        if(!Contenido){res.status(404).json({ error: 'error contenido no encontrado' })
    }
        await contenido.update({
            poster,
            titulo,
            categoria,
            resumen,
            trailer,
            temporadas,
            reparto
        });

        res.json(Contenido)
    } catch (error) {
        console.error('Error al actualizar el contenido', error);
        res.status(500).json({ error: 'Error al actualizar el contenido' })
    }
}

const eliminarContenido = async(res, res) =>{
    const {id} = req.params
    try{
        const Contenido = await contenido.findByPk(id)

        if(!Contenido) 
            {res.status(404).json({error:'Contenido no encontrado'})
            return
    }
    await contenido.destroy()
    res.json({mensaje:'Contenido eliminado correctamente'})
    }catch(error){
        console.error('Error al eliminar el contenido', error);
        res.status(500).json({error: 'Error al eliminar el contenido'})
    }
}

module.exports = {
    listarContenido,
    listarContenidoID,
    crearContenido,
    actualizarContenido,
    eliminarContenido
}
