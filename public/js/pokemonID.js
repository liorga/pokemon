const path = window.location.pathname;
async function pokemonId() {
    const data = await fetch('/api' + path).then(res => res.json());
    let Base = Object.values(data.base);
    console.log(Base);
    document.getElementById('pokeBaseAttack').innerText = 'Attack:' + " " + `${Base[0]}`;
    document.getElementById('pokeBaseDefense').innerText = 'Defense:' + " " + `${Base[1]}`;
    document.getElementById('pokeBaseHp').innerText = 'HP:' + " " + `${Base[2]}`;
    document.getElementById('pokeBaseSpAttack').innerText = 'Sp.Attack:' + " " + `${Base[3]}`;
    document.getElementById('pokeBaseSpDefense').innerText = 'Sp.Defense:' + " " + `${Base[4]}`;
    document.getElementById('pokeBaseSpeed').innerText = 'Speed:' + " " + `${Base[5]}`;
    document.getElementById('pokName').innerText = 'Name: ' + `${data.name}`;
    document.getElementById('pokType').innerHTML = 'Type: ' + `${data.type}`;
    document.getElementById('pokeImg').src = data.img;
}
pokemonId();