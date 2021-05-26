async function top3() {
    const data = await fetch('/api/top3').then(res => res.json());
    console.log(data);
    // var strId1 = `${data[0].id}`.padStart(3, '0');
    // var urlId1 = '/pokemons/' + `${strId1}`;
    // var strId2 = `${data[1].id}`.padStart(3, '0');
    // var urlId2 = '/pokemons/' + `${strId2}`;
    // var strId3 = `${data[2].id}`.padStart(3, '0');
    // var urlId3 = '/pokemons/' + `${strId3}`;
    // document.getElementById('top_pokemon1').innerHTML = data[0].name;
    // document.getElementById('no1').src = data[0].img;
    // document.getElementById('top_pokemon2').innerHTML = data[1].name;
    // document.getElementById('no2').src = data[1].img;
    // document.getElementById('top_pokemon3').innerHTML = data[2].name;
    // document.getElementById('no3').src = data[2].img;
    var mainContainer = document.getElementById("three");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        var pic = document.createElement("img");
        var ref = document.createElement("a");
        var strId = `${data[i].id}`.padStart(3, '0');
        var urlId = '/pokemons/' + `${strId}`;
        ref.setAttribute("href", urlId);
        pic.setAttribute('src', `${data[i].img}`);
        ref.appendChild(pic);
        div.innerHTML = `ID: ${data[i].id}` + ` Name: ${data[i].name} \n` + `Type: ${data[i].type}` + "     ";
        div.appendChild(ref);
        mainContainer.appendChild(div);
    }
}
const button = document.getElementById('viewButton');
button.onclick = function () {
    location.href = '/viewAll';
}
top3();