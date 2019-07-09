const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion tarera por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completadp o pendiente la tarea'
};

const argv = require('yargs')
            .command('crear','Crear por hacer',{
                descripcion
            })
            .command('actualizar','Actualiza tarea completado', {
                descripcion,
              completado
            })
            .command('borrar','Borra una tarea', {
                descripcion
            })
            .help()
            .argv;

            module.exports = {
                argv
            }