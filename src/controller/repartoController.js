const {
    contenido,
    categoria,
    actores,
    reparto,
    genero,
    Reparto,
  } = require("../config/asociaciones");

  const listarReparto = async (req, res) =>{
    try{
        const Repartos = await reparto.findAll()
        res.status(200).json({
            ok:true,
            status: 200,
            body: Repartos,
        })
  }catch(error){
    console.error('Error al obtener los repartos', error);
    res.status(500).json({error: 'Error al obtener los repartos'})
  }
}

const listarRepartoID = async (req, res) =>{
    const {id} = req.params
    try{
        const Reparto = await reparto.findByPk(id)
        
        !Reparto ? res.status(404).json({ error: 'No se encontro el reparto' })
                     : res.json(Reparto)

  }catch(error){
    console.error('Error al obtener los repartos', error);
    res.status(500).json({error: 'Error al obtener los repartos'})
  }
}

const crearReparto = async (req, res) => {
    try{
        const Reparto = new reparto({
            idTitulo: req.body.idTitulo,
            idActores: req.body.idActores,
        })
        await reparto.save()
        res.status(201).json(Reparto)
    }catch(error){
        console.error('Error al crear la relacion actor-titulo')
        res.status(500).json({error: 'Error al crear la relacion actor-titulo'})
    }
}

const actualizarReparto = async (req, res) => {
    const {id} = req.params
    try{ 
        const Reparto = await reparto.findById(id)

        reparto.idGenero = req.body.idGenero
        reparto.idTitulo = req.body.idTitulo
    
        // Guardar los cambios
        await reparto.save()
    
        // Enviar la respuesta
        res.status(200).json(Reparto)
    }catch(error){
        console.error("Error al actualizar relacion entre actor y titulo", error);
        res.status(500).json({ error: "Error al actualizar una relacion entre actor y titulo" })
    }
}

const eliminarReparto = async(req, res) =>{
    const {id} = req.params
    try{
        const Reparto = await reparto.findById(id)
        
        if(!Reparto)
        {res.status(404).json({error:'Relacion actor y titulo no encontrado'})
        return
    }
        await reparto.destroy()
        res.json({mensaje:'Relacion eliminada correctamente'})
    }catch(error){
        console.error('Error al eliminar la relacion actor y titulo', error);
        res.status(500).json({error: 'Error al eliminar la relacion actor y titulo'})
    }
    
}

module.exports = {
    listarReparto,
    listarRepartoID,
    crearReparto,
    actualizarReparto,
    eliminarReparto
}