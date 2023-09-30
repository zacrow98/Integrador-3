const {
  contenido,
  categoria,
  actores,
  reparto,
  genero,
  generoTitulo,
} = require("../config/asociaciones");

const listarGeneroTitulo = async (req, res) => {
  try {
    const GeneroTitulos = await generoTitulo.findAll();
    res.status(200).json({
      ok: true,
      status: 200,
      body: GeneroTitulos,
    });
  } catch (error) {
    console.error("Error al obtener los titulos del genero", error);
    res.status(500).json({ error: "Error al obtener los titulos del genero" });
  }
};

const crearGeneroTitulo = async (req, res) => {
    try {
        const GeneroTitulo = new generoTitulo({
            idGenero: req.body.idGenero,
            idTitulo: req.body.idTitulo,
        })

        await generoTitulo.save()

        res.status(201).json(GeneroTitulo)
  } catch (error) {
    console.error("Error al crear una relacion entre titulo y genero", error);
    res.status(500).json({ error: "Error al crear una relacion entre titulo y genero" });
  }
};

const actualizarGeneroTitulo = async(req, res) => {
    const {id} = req.params
    try{ 
        const GeneroTitulo = await generoTitulo.findById(id)

        generoTitulo.idGenero = req.body.idGenero
        generoTitulo.idTitulo = req.body.idTitulo
    
        // Guardar los cambios
        await generoTitulo.save()
    
        // Enviar la respuesta
        res.status(200).json(GeneroTitulo)
    }catch(error){
        console.error("Error al actualizar relacion entre titulo y genero", error);
        res.status(500).json({ error: "Error al actualizar una relacion entre titulo y genero" })
    }
}
const eliminarGeneroTitulo = async(req, res) =>{
    const {id} = req.params
    try{
        const GeneroTitulo = await generoTitulo.findById(id)
        
        if(!GeneroTitulo)
        {res.status(404).json({error:'Relacion genero-titulo no encontrado'})
        return
    }
        await generoTitulo.destroy()
        res.json({mensaje:'Relacion eliminada correctamente'})
    }catch(error){
        console.error('Error al eliminar la relacion genero-titulo', error);
        res.status(500).json({error: 'Error al eliminar la relacion genero-titulo'})
    }
    
}

module.exports = {
    listarGeneroTitulo,
    crearGeneroTitulo,
    actualizarGeneroTitulo,
    eliminarGeneroTitulo  
}
