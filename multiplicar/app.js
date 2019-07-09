////
const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];


//Estos comandos pertmiten crear y listar tablas
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log("archivo: " + colors.green(archivo) + " creado!"))
            .catch(err => console.log(err));
        break;

        
    default:



        console.log('Comando no reconocido');
}