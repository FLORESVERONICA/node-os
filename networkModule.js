const os = require('os');

function obtenerinformacionRed() {
    const interfaces = os.networkInterfaces();
    const resultado = {};
    for (const nombreInterfaz in interfaces){
        resultado[nombreInterfaz] = [];
    interfaces[nombreInterfaz].forEach((detalle) => {
        resultado[nombreInterfaz].push({
            familia: detalle.family,
            direccion: detalle.address,
            interno: detalle.internal,
        });
    });
}
return resultado;
}
module.exports = obtenerinformacionRed;