const obtenerinformacion = require('./osModule');
const obtenerinformacionRed = require('./networkModule.js');
const infoSistema = obtenerinformacion();
const infoRed = obtenerinformacionRed();
console.log(infoSistema);
console.log(infoRed);