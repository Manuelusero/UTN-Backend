// Función para validar un email
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Función para validar si un valor es un número
const validarNumero = (numero) => {
    return !isNaN(numero);
};

// Función para validar si un nombre solo contiene letras y espacios
const validarNombre = (nombre) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nombre);
};

// Exportar las funciones
module.exports = {
    validarEmail,
    validarNumero,
    validarNombre
};
