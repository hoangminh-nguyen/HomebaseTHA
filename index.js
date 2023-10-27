const express = require('express');
const userRoute = require('./routes/users.js');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => res.send("Home page"));
app.use('/api/users', userRoute);

// Default response for any other request
app.use((req, res) => { res.status(404).send("404 not found"); });

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}...`));