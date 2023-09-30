const {contenido, categoria, actores, reparto, genero, generoTitulo} = require('../config/asociaciones')

// Controlador para crear un Actor nuevo
const crearActor = async (req, res)=>{
  try{
      const NuevoActor = await actores.create(req.body)
      res.json(NuevoActor)
  } catch (error){
      console.error('Error al crear el Actor', error);
      res.status(500).json({error: 'Error al crear Actor'})
  }
}

// Controlador para obtener todos los Actors
const listarActor = async (req, res) => {
  try{
      const Actor = await actores.findAll()
      res.json(Actor)
  }catch(error){
      console.error('Error al obtener los Actores', error);
      res.status(500).json({error: 'Error al obtener el Actor'})
  }
}

// Controlador para obtener los Actors por id
const listarActorID = async (req, res) => {
  const {id_actor} = req.params
  try{
      const ActorID = await actores.findByPk(id_actor)
      
      if(!ActorID){
          res.status(404).json({ error:'Actor no encontrado'});
          return;
      }
      res.json(ActorID)
  }catch(error){
      console.error('Error al obtener el Actor por su id', error);
      res.status(500).json({error: 'Error al obtener el Actor por id'})
  }
}

// Contralor para actualizar un Actor por id
const actualizarActor = async (req, res) =>{
  const {id_actor} = req.params
  const {Nombre_Actor} = req.body
  try{
      const Actor = await actores.findByPk(id_actor)
      if(!Actor){
          res.status(404).json({ error:'Actor no encontrado'});
          return;
      }

      await actores.update({Nombre_Actor})
      res.json(Actor)
  }catch (error){
      console.error('Error al actualizar el Actor', error);
      res.status(500).json({error: 'Error al actualizar el Actor'})
  }
}

// Controlador para elimiminar un Actor por su id
const eliminarActor = async (req, res) =>{
  const {id_actor} = req.params
  try{
      const Actor = await actores.findByPk(id_actor)
      if(!Actor){
          res.status(404).json({ error:'Actor no encontrado'});
          return;
      }

      await actores.destroy()
      res.json({mensaje: 'Actor eliminado correctamente'})
  }catch (error){
      console.error('Error al eliminar el Actor', error);
      res.status(500).json({error: 'Error al eliminar el Actor'})
  }
}

module.exports = {
  crearActor,
  listarActor,
  listarActorID,
  actualizarActor,
  eliminarActor

}

