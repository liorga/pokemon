fetch('/api/getAll').then(res => {
    res.json().then(data => {
        console.log(data);
        appendData(data);
    });
});

function appendData(data) {

    //var scrolBar = document.createElement()
    var mainContainer = document.getElementById("pokeList");
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