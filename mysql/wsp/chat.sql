CREATE TABLE chat (
    chat_id INT PRIMARY KEY AUTO_INCREMENT,
    enviado_por INT NOT NULL UNIQUE,
    recibido_por INT NOT NULL UNIQUE,
    mensaje TEXT NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE NOT,
	FOREIGN KEY(enviado_por)REFERENCES usuarios(usuario_id) ON DELETE CASCADE,
    FOREIGN KEY(recibido_por)REFERENCES usuarios(usuario_id) ON DELETE CASCADE

)