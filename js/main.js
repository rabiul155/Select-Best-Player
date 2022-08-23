console.log('js added');

function getPlayer(playerNameInput) {
    const name = document.getElementById(playerNameInput);
    const playerNameOut = name.innerText;
    return playerNameOut;


}


function playerPush(childPlayerNane) {
    const player = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = childPlayerNane;
    player.appendChild(li);

}

function countChild() {
    const player = document.getElementById('player-list');
    const totalChild = player.childElementCount;
    console.log(totalChild);
    return totalChild;
}

document.getElementById('btn-messi').addEventListener('click', function () {
    const playerNane = getPlayer('messi');

    const child = countChild();

    if (child <= 4) {
        playerPush(playerNane);
        this.disabled = true;
    }
    else {
        alert('max player selected you cannot select any more')
    }


})

document.getElementById('btn-neymar').addEventListener('click', function () {
    const playerNane = getPlayer('neymar');

    const child = countChild();

    if (child <= 4) {
        playerPush(playerNane);
        this.disabled = true;
    }
    else {
        alert('max player selected you cannot select any more')
    }


})

document.getElementById('btn-kylin').addEventListener('click', function () {
    const playerNane = getPlayer('kylin');
    const child = countChild();

    if (child <= 4) {
        playerPush(playerNane);
        this.disabled = true;
    }
    else {
        alert('max player selected you cannot select any more')
    }


})

document.getElementById('btn-vitor').addEventListener('click', function () {
    const playerNane = getPlayer('vitor');
    const child = countChild();

    if (child <= 4) {
        playerPush(playerNane);
        this.disabled = true;
    }
    else {
        alert('max player selected you cannot select any more')
    }

})

document.getElementById('btn-sergio').addEventListener('click', function () {
    const playerNane = getPlayer('sergio');

    const child = countChild();

    if (child <= 4) {
        playerPush(playerNane);
        this.disabled = true;
    }
    else {
        alert('max player selected you cannot select any more')
    }


})

document.getElementById('btn-ranato').addEventListener('click', function () {
    const playerNane = getPlayer('ranato');
    const child = countChild();

    if (child <= 4) {
        playerPush(playerNane);
        this.disabled = true;
    }
    else {
        alert('max player selected you cannot select any more')
    }

})

