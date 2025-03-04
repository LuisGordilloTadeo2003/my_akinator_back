# my_akinator_back

# author: [Luis Gordillo Tadeo]

# initial date: 19/02/2025

# ESTRUCTURA DE LA APLICACION #

my_akinator_back/
│
├── config/
│   └── db.js                 # Configuración de la conexión a MongoDB
│
├── controllers/
│   └── gameController.js     # Lógica para manejar las interacciones del juego
│
├── middlewares/              # Middlewares para validaciones o autenticación
│   └── errorHandler.js       # Middleware para manejar errores de manera centralizada
│
├── models/
│   └── decisionNode.js       # Modelo de los nodos de decisión
│
├── routes/
│   └── gameRoutes.js         # Rutas para las interacciones del juego
│
├── services/
│   └── gameService.js        # Lógica de negocio que interactúa con la base de datos
│
├── utils/
│   └── logger.js             # Funciones para loguear información
│
├── server.js                 # Archivo principal de configuración de Express
├── .env                      # Variables de entorno
└── package.json              # Dependencias y scripts del backend
