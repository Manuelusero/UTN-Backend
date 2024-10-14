CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE NOT

INSERT INTO usuarios (`username`,`email`,`password_hash`) VALUES ('pepe', 'pepe@gmail.com', 'pepe123')

INSERT INTO `usuarios`( `username`, `email`, `password_hash` ) 
VALUES ('jose', 'jose@gmail.com','jose123'),
('maria', 'maria@gmail.com', 'maria123')