console.log('Hola mundo desde NODE.js')

const saludar = () => {
    console.trace('Hola')
}

saludar()

console.error ('Error')
console.info ('Cuidado esto es Backend')
console.warn('pepe')

/*
## Crear packageJson

npm init -y

## Abrir Node.JS en terminal

node index.js

## Instalar nodemon 

npm i -D nodemon (para que se instale en cada proyecto)
npm i -g nodemon (para que se instale de manera global)

## Node_modules 

Es donde se encuentra el codigo puro  de las dependencias.

## Agregar scirpts al package.json

"scripts": {
    "dev": "index.js",
}
  "type": "module" - Para importar y exportar
},
*/
