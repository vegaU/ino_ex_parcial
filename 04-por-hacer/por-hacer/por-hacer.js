

const fs = require('fs');

let listadoPorhacer = [];

const guardarBD = () => {

    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile('db/data.json', data, (err)=> {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {
         listadoPorhacer = require('../db/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }   
  
}

const crear = (descripcion) => {
    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push( porHacer);

        guardarBD();
        return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorhacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorhacer.findIndex( tarea => tarea.descripcion === descripcion);

    if ( index >= 0 ) {
        listadoPorhacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevolistado = listadoPorhacer.filter( tarea => tarea.descripcion !== descripcion);
    if ( listadoPorhacer.length === nuevolistado.length){ 
            return false;
    }else {
        listadoPorhacer = nuevolistado;
        guardarBD;
        return true;
    }
 }
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}