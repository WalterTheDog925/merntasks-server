const express = require('express');
const connectDB = require('./config/db');

// Crear server 
const app = express();

// Conectar a DB 
connectDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app 
const PORT = process.env.PORT || 4000;

// Importar rutas 
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
})