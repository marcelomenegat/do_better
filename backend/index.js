const express = require('express');


const app = express();


app.get('/', (req, res) => {
    return res.json({evento: 'Semana tri', author: 'Mene'})
})


app.listen(3333);