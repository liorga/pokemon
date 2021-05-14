fetch('/api/top3').then(res => {
    res.json().then(data => {
        console.log(data);
        document.getElementById('top_pokemon1').innerHTML = data[0].name;
        document.getElementById('no1').src = data[0].img;
        document.getElementById('top_pokemon2').innerHTML = data[1].name;
        document.getElementById('no2').src = data[1].img;
        document.getElementById('top_pokemon3').innerHTML = data[2].name;
        document.getElementById('no3').src = data[2].img;
    });
});
const button = document.getElementById('viewButton');
button.onclick = function() {
        location.href = '/viewAll';
    }
    ///