const express = require('express');
const path = require('path');
const app = express();
const data = require('./pokemons.json');



for (const pokemon of data) {
    const strId = `${pokemon.id}`.padStart(3, '0');
    pokemon.img = `/images/${strId}.png`;
    pokemon.counter = 0;
}



app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/pokemons/:id', (req, res) => {
    const Id = req.params.id;
    const searchRes = data.find((obj) => obj.id == Id);
    searchRes.counter++;
    res.sendFile(path.resolve('./pages/pokemonId.html'));
})

app.get('/api/getAll', (req, res) => {
    res.send(data);
})

app.get('/viewAll', (req, res) => {
    res.sendFile(path.resolve('./pages/viewAll.html'));
});

app.get("/api/pokemons/:id", (req, res) => {

    const Id = req.params.id;
    const searchRes = data.find((obj) => obj.id == Id);
    res.send(searchRes);

})

app.get('/api/top3', (req, res) => {
    data.sort((a, b) => {
        return b.counter - a.counter;
    });
    const top3 = data.slice(0, 3);
    res.send(top3);
})

//hi

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./pages/index.html'));
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`));