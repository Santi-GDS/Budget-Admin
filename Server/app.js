const express = require('express');
const cors = require('cors');

//Create server
const app = express();

//App port
const PORT = process.env.PORT || 4000;

//Express.json
app.use(express.json({ extended: true}));

//Cors
app.use(cors());

// Start app
app.listen(PORT,() => {
	console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

app.use('/api', require('./routes/apiRouter'));


