const os = require ('node:os');

function obtenerinformacion() {
    const info = {
        nombre: os.type(),
        version: os.release(),
        arquitectura: os.arch(),
        numCPU: os.cpus().length,
        memoriatotal: Math.round(os.totalmem() / (1024 * 1024)),
        memorialibre: Math.round(os.freemem() / (1024 * 1024))
    };
    return info;
}
 module.exports = obtenerinformacion;