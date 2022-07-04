let allPositons = document.getElementById("positions");
let trendPositions = document.getElementById("trends");
let trends = [];

LoadTrends()
showPositions()
showTrends()

function LoadTrends() {
    if (localStorage.getItem("StorageTrends") !== null) {
        trends = JSON.parse(localStorage.getItem("StorageTrends"));
        return;
    } else {
        localStorage.setItem("StorageTrends", JSON.stringify(trends));
        return;
    }
}

function showPositions() {
    position.forEach((pos) => {
        allPositons.innerHTML += `
    <div class="card bg-light m-3">
        <p>${pos.company}</p>
        <p>${pos.logo}</p>
        <p>${pos.newPost}</p>
        <p>${pos.position}</p>
        <p>${pos.role}</p>
        <p>${pos.level}</p>
        <p>${pos.contract}</p>
        <p>${pos.location}</p>
        <p>${pos.tools}</p>
        <p>${pos.languages}</p>
        <button onClick="trendPosition(${pos.id})" class="btn btn-outline-success">Set as trend</button>
    </div>`
    });
}

function showTrends() {
    trends.forEach((trends) => {
        trendPositions.innerHTML += `
    <div class="card bg-light m-3">
        <p>${trends.company}</p>
        <p>${trends.logo}</p>
        <p>${trends.newPost}</p>
        <p>${trends.position}</p>
        <p>${trends.role}</p>
        <p>${trends.level}</p>
        <p>${trends.contract}</p>
        <p>${trends.location}</p>
        <p>${trends.tools}</p>
        <p>${trends.languages}</p>
        <button onClick="quitAsTrend${trends.id})" class="btn btn-outline-danger">No more trend</button>
    </div>`
    });
}

function trendPosition(id) {
    let index = id - 1;
    let selectedCard = {};
    selectedCard = position[index];
    if (!trends.some(e => e.id === id)) {
        trends.push(selectedCard);
        localStorage.setItem("StorageTrends", JSON.stringify(trends));
        location.reload()
    } else {
        alert("This post is set as trend")
    }
}

function quitAsTrend(id) {
    let filtredTrend = trends.filter((el) => el.id != id);
    trends = filtredTrend;
    localStorage.setItem("StorageTrends", JSON.stringify(trends));
    console.log(filtredTrend);
    location.reload();
}