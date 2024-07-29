const os = require('node:os')

const obtenerInformacionOS = () => {
    return {
        Nombre: os.hostname(),
        Tipo: os.type(),
        Version: os.version(),
        Aquitectura: os.arch() ,
        CPUs: os.cpus().length,
        MemoriaTotal: `${(os.totalmem() / 1024 / 1024).toFixed} MB`,
        MemoriaLibre:  `${(os.freemem() / 1024 / 1024).toFixed} MB` 
    }
}
console.log(obtenerInformacionOS)