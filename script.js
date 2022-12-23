let scoreArray = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

let totalScore = 0;

function resetScoreArray(){
    for (let i = 0; i < scoreArray.length; i++)
    {
        for (let j = 0; j < scoreArray[i].length; j++)
        {
            scoreArray[i][j] = 0;
        }
    }
}

function tallyScore(){
    totalScore = 0;
    for (let i = 0; i < scoreArray.length; i++)
    {
        for (let j = 0; j < scoreArray[i].length; j++)
        {
            totalScore += scoreArray[i][j];
        }
    }
}
tallyScore();

const scores = {
    coins: 16,
    score: totalScore,
};

const stats =`
    <h1>Statistics</h1>
    <div id="stats">
        <p>Coins Left: `+scores.coins+`</p>
        <p>Points Earned: `+scores.score+`</p>
    </div>
`

const buildings = `
    <h1>Building Options</h1>
    <div>
        <div>
            <p>Residential (R)</p>
            <div class="notclicked" id="residential" onmouseover="highlight(this)" onmouseout="stopHighlight(this)" onclick="buildingSelect(this)">R</div>
        </div>
        <div>
            <p>Industry (I)</p>
            <div class="notclicked" id="industry" onmouseover="highlight(this)" onmouseout="stopHighlight(this)" onclick="buildingSelect(this)">I</div>
        </div>
        <div>
            <p>Commercial (C)</p>
            <div class="notclicked" id="commercial" onmouseover="highlight(this)" onmouseout="stopHighlight(this)" onclick="buildingSelect(this)">C</div>
        </div>
        <div>
            <p>Park (O)</p>
            <div class="notclicked" id="park" onmouseover="highlight(this)" onmouseout="stopHighlight(this)" onclick="buildingSelect(this)">O</div>
        </div>
        <div>
            <p>Road (*)</p>
            <div class="notclicked" id="road" onmouseover="highlight(this)" onmouseout="stopHighlight(this)" onclick="buildingSelect(this)">*</div>
        </div>
    </div>
`

const legend = `
    <h1>Legend</h1>
    <div>
        <div>
            <p>Residential (R)</p>
            <div class="residential">R</div>
        </div>
        <div>
            <p>Industry (I)</p>
            <div class="industry">I</div>
        </div>
        <div>
            <p>Commercial (C)</p>
            <div class="commercial">C</div>
        </div>
        <div>
            <p>Park (O)</p>
            <div class="park">O</div>
        </div>
        <div>
            <p>Road (*)</p>
            <div class="road">*</div>
        </div>
    </div>
`

let newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", newGame);

let newDiv = null;

let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];

let firstBuilding = true;

function newGame(){
    document.querySelector(".flexcontainer").remove();
    newDiv = document.createElement("div"); // base for page
    newDiv.setAttribute("class", "flexcontainer");
    document.querySelector("body").append(newDiv);
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "leftSideOfPage");
    document.querySelector(".flexcontainer").append(newDiv);
    newDiv = document.createElement("div"); // for point system and coin system
    newDiv.innerHTML = stats;
    newDiv.setAttribute("class", "stats");
    document.querySelector(".flexcontainer .leftSideOfPage").append(newDiv);
    newDiv = document.createElement("div"); // for choosing the different type of buildings
    newDiv.innerHTML = buildings;
    newDiv.setAttribute("class", "buildingOptions");
    document.querySelector(".flexcontainer .leftSideOfPage").append(newDiv);
    newDiv = document.createElement("div"); // legend for the game (e.g. which color represents which building)
    newDiv.innerHTML = legend;
    newDiv.setAttribute("class", "legend");
    document.querySelector(".flexcontainer .leftSideOfPage").append(newDiv);
    newDiv = document.createElement("div"); // game board
    newDiv.setAttribute("class", "board");
    document.querySelector(".flexcontainer").append(newDiv);
    for (let a = 0; a < 20; a++){ // building each row and column of game board
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", array[a]);
        document.querySelector(".board").append(newDiv);
        for (let b = 0; b < 20; b++){
            newDiv = document.createElement("div");
            newDiv.setAttribute("onmouseover", "highlight(this)");
            newDiv.setAttribute("onmouseout", "stopHighlight(this)");
            newDiv.setAttribute("onclick", "choose(this)");
            newDiv.setAttribute("id", array[b] + (a + 1));
            newDiv.classList.add("notclicked");
            document.querySelector(".board ." + array[a]).append(newDiv);
        }
    }
    document.querySelector("#residential").classList.add("building");
    document.querySelector("#industry").classList.add("building");
    document.querySelector("#commercial").classList.add("building");
    document.querySelector("#park").classList.add("building");
    document.querySelector("#road").classList.add("building");
    generateRandom();
}

function exitGame() // function to close current tab
{
    window.close();
}

function highlight(x){ // function for highlighting box that user is hovering over
    let condition1 = document.querySelector("#residential").classList.contains("clicked");
    let condition2 = document.querySelector("#industry").classList.contains("clicked");
    let condition3 = document.querySelector("#commercial").classList.contains("clicked");
    let condition4 = document.querySelector("#park").classList.contains("clicked");
    let condition5 = document.querySelector("#road").classList.contains("clicked");

    if (firstBuilding){
        if (x.classList.contains("notclicked") && (condition1 || condition2 || condition3 || condition4 || condition5)){
            x.style.backgroundColor = "lightblue";
            x.style.borderColor = "lightskyblue";
        }
        if (x.classList.contains("building") && x.classList.contains("notclicked")){
            x.style.backgroundColor = "lightblue";
            x.style.borderColor = "lightskyblue";
        }
    }
    else{
        if (x.classList.contains("clickable")){
            x.style.backgroundColor = "lightblue";
            x.style.borderColor = "lightskyblue";
        }
        if (x.classList.contains("building") && x.classList.contains("notclicked")){
            x.style.backgroundColor = "lightblue";
            x.style.borderColor = "lightskyblue";
        }
    }
}

function stopHighlight(y){ // function to stop highlighting box once user is no longer hovering over it
    if (firstBuilding){
        if (y.classList.contains("notclicked")){
            y.style.backgroundColor = "#55DD33";
            y.style.borderColor = "darkgreen";
        }
    }
    else{
        if (y.classList.contains("clickable")){
            y.style.backgroundColor = "#55DD33";
            y.style.borderColor = "darkgreen";
        }
        if (y.classList.contains("notclicked") && y.classList.contains("building")){
            y.style.backgroundColor = "#55DD33";
            y.style.borderColor = "darkgreen";
        }
    }
}

function buildingSelect(a){
    checkClicked();

    if (a.classList.contains("notclicked")){
        if (a.getAttribute("id") == "residential"){
            a.style.borderColor = "red";
            a.style.backgroundColor = "darkred";
            a.classList.replace("notclicked", "clicked");
        }
        else if (a.getAttribute("id") == "industry"){
            a.style.borderColor = "darkgray";
            a.style.backgroundColor = "gray";
            a.classList.replace("notclicked", "clicked");
        }
        else if (a.getAttribute("id") == "commercial"){
            a.style.borderColor = "blue";
            a.style.backgroundColor = "darkblue";
            a.classList.replace("notclicked", "clicked");
        }
        else if (a.getAttribute("id") == "park"){
            a.style.borderColor = "#55DD33";
            a.style.backgroundColor = "darkgreen";
            a.classList.replace("notclicked", "clicked");
        }
        else{
            a.style.borderColor = "#343434";
            a.style.backgroundColor = "black";
            a.classList.replace("notclicked", "clicked");
        }
    }
}

function choose(z){ // function to change color of box when user clicks it
    let condition1 = document.querySelector("#residential").classList.contains("clicked");
    let condition2 = document.querySelector("#industry").classList.contains("clicked");
    let condition3 = document.querySelector("#commercial").classList.contains("clicked");
    let condition4 = document.querySelector("#park").classList.contains("clicked");
    let condition5 = document.querySelector("#road").classList.contains("clicked");


    if (firstBuilding && (condition1 || condition2 || condition3 || condition4 || condition5)){
        let id = z.getAttribute("id");
        if (condition1){
            z.classList.add("residential");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "R";
            z.style.borderColor = "red";
            z.style.backgroundColor = "darkred";
        }
        else if (condition2){
            z.classList.add("industry");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "I";
            z.style.borderColor = "darkgray";
            z.style.backgroundColor = "gray";
        }
        else if (condition3){
            z.classList.add("commercial");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "C";
            z.style.borderColor = "blue";
            z.style.backgroundColor = "darkblue";
        }
        else if (condition4){
            z.classList.add("park");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "O";
            z.style.borderColor = "#55DD33";
            z.style.backgroundColor = "darkgreen";
        }
        else{
            z.classList.add("road");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "*";
            z.style.borderColor = "#343434";
            z.style.backgroundColor = "black";
        }
        firstBuilding = false;
        generateRandom();
        scores.coins -= 1;
        const refreshStats = `
            <p>Coins Left: `+scores.coins+`</p>
            <p>Points Earned: `+scores.score+`</p>
        `
        document.getElementById("stats").remove();
        let newStats = document.createElement("div");
        newStats.setAttribute("id", "stats");
        newStats.innerHTML = refreshStats;
        document.querySelector(".flexcontainer .leftSideOfPage div").append(newStats);
        check(id);
        keepScore(z);
    }
    else if (z.classList.contains("clickable") && (condition1 || condition2 || condition3 || condition4 || condition5)){
        let id = z.getAttribute("id");
        if (condition1){
            z.classList.add("residential");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "R";
            z.style.borderColor = "red";
            z.style.backgroundColor = "darkred";
        }
        else if (condition2){
            z.classList.add("industry");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "I";
            z.style.borderColor = "darkgray";
            z.style.backgroundColor = "gray";
        }
        else if (condition3){
            z.classList.add("commercial");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "C";
            z.style.borderColor = "blue";
            z.style.backgroundColor = "darkblue";
        }
        else if (condition4){
            z.classList.add("park");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "O";
            z.style.borderColor = "#55DD33";
            z.style.backgroundColor = "darkgreen";
        }
        else{
            z.classList.add("road");
            z.classList.replace("notclicked", "clicked");
            z.innerHTML = "*";
            z.style.borderColor = "#343434";
            z.style.backgroundColor = "black";
        }
        z.classList.remove("clickable");
        generateRandom();
        scores.coins -= 1;
        const refreshStats = `
            <p>Coins Left: `+scores.coins+`</p>
            <p>Points Earned: `+scores.score+`</p>
        `
        document.getElementById("stats").remove();
        let newStats = document.createElement("div");
        newStats.setAttribute("id", "stats");
        newStats.innerHTML = refreshStats;
        document.querySelector(".flexcontainer .leftSideOfPage div").append(newStats);
        check(id);
        keepScore(z);
    }
}

function check(id){ // checking adjacent buildings
    for (let a = 0; a < 20; a++){ // variable a is row
        for (let b = 0; b < 20; b++){ // variable b is column
            if (id == array[b] + (a + 1)){ // top right bottom left is the order im coding in
                if (array[b] == "a"){
                    if ((a + 1) == 1){ //checking top left
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b + 1] + (a + 1)).classList.add("clickable"); // right
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + (a + 2)).classList.add("clickable"); // bottom
                        }
                    }
                    else if ((a + 1) == 20){ //checking bottom left
                        if (document.querySelector("#" + array[b] + a).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + a).classList.add("clickable"); // top
                        }
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b + 1] + (a + 1)).classList.add("clickable"); // right
                        }
                    }
                    else{ //checking between top and bottom left
                        if (document.querySelector("#" + array[b] + a).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + a).classList.add("clickable"); // top
                        }
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b + 1] + (a + 1)).classList.add("clickable"); // right
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + (a + 2)).classList.add("clickable"); // bottom
                        }
                    }
                }
                else if (array[b] == "s"){ 
                    if ((a + 1) == 1){ //checking top right
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + (a + 2)).classList.add("clickable"); // bottom
                        }
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b - 1] + (a + 1)).classList.add("clickable"); // left
                        }
                    }
                    else if ((a + 1) == 20){ //checking bottom right
                        if (document.querySelector("#" + array[b] + a).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + a).classList.add("clickable"); // top
                        }
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b - 1] + (a + 1)).classList.add("clickable"); // left
                        }
                    }
                    else{ //checking between top and bottom right
                        if (document.querySelector("#" + array[b] + a).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + a).classList.add("clickable"); // top
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + (a + 2)).classList.add("clickable"); // bottom
                        }
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b - 1] + (a + 1)).classList.add("clickable"); // left
                        }
                    }
                }
                else{
                    if ((a + 1) == 1){ //checking top row thats not corners
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b + 1] + (a + 1)).classList.add("clickable"); // right
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + (a + 2)).classList.add("clickable"); // bottom
                        }
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b - 1] + (a + 1)).classList.add("clickable"); // left
                        }
                    }
                    else if ((a + 1) == 20){ //checking bottom row thats not corners
                        if (document.querySelector("#" + array[b] + a).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + a).classList.add("clickable"); // top
                        }
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b + 1] + (a + 1)).classList.add("clickable"); // right
                        }
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b - 1] + (a + 1)).classList.add("clickable"); // left
                        }
                    }
                    else{ //checking the rest
                        if (document.querySelector("#" + array[b] + a).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + a).classList.add("clickable"); // top
                        }
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b + 1] + (a + 1)).classList.add("clickable"); // right
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b] + (a + 2)).classList.add("clickable"); // bottom
                        }
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("notclicked")){
                            document.querySelector("#" + array[b - 1] + (a + 1)).classList.add("clickable"); // left
                        }
                    }
                }
            }
        }
    }
}

function generateRandom(){
    checkClicked();

    $("#residential").hide();
    $("#industry").hide();
    $("#commercial").hide();
    $("#park").hide();
    $("#road").hide();
    let random1 = 0;
    let random2 = 0;

    while (random1 == random2){
        random1 = Math.floor(Math.random() * 5);
        random2 = Math.floor(Math.random() * 5);
    }

    //if (random1 == 0 || random2 == 0){
        $("#residential").show();
    //}
    //if (random1 == 1 || random2 == 1){
        $("#industry").show();
    //}
    //if (random1 == 2 || random2 == 2){
        $("#commercial").show();
    //}
    //if (random1 == 3 || random2 == 3){
        $("#park").show();
    //}
    //if (random1 == 4 || random2 == 4){
        $("#road").show();
    //}
}

function checkClicked(){
    let condition1 = document.querySelector("#residential").classList.contains("clicked");
    let condition2 = document.querySelector("#industry").classList.contains("clicked");
    let condition3 = document.querySelector("#commercial").classList.contains("clicked");
    let condition4 = document.querySelector("#park").classList.contains("clicked");
    let condition5 = document.querySelector("#road").classList.contains("clicked");

    if (condition1){
        document.querySelector("#residential").classList.replace("clicked", "notclicked");
        document.querySelector("#residential").style.borderColor = "darkgreen";
        document.querySelector("#residential").style.backgroundColor = "#55DD33";
    }
    if (condition2){
        document.querySelector("#industry").classList.replace("clicked", "notclicked");
        document.querySelector("#industry").style.borderColor = "darkgreen";
        document.querySelector("#industry").style.backgroundColor = "#55DD33";
    }
    if (condition3){
        document.querySelector("#commercial").classList.replace("clicked", "notclicked");
        document.querySelector("#commercial").style.borderColor = "darkgreen";
        document.querySelector("#commercial").style.backgroundColor = "#55DD33";
    }
    if (condition4){
        document.querySelector("#park").classList.replace("clicked", "notclicked");
        document.querySelector("#park").style.borderColor = "darkgreen";
        document.querySelector("#park").style.backgroundColor = "#55DD33";
    }
    if (condition5){
        document.querySelector("#road").classList.replace("clicked", "notclicked");
        document.querySelector("#road").style.borderColor = "darkgreen";
        document.querySelector("#road").style.backgroundColor = "#55DD33";
    }
}

function keepScore()
{        
    resetScoreArray();
    for (let a = 0; a < 20; a++){
        for (let b = 0; b < 20; b++){
            if (array[b] == "a"){ //checking left side
                if ((a + 1) == 1){ //checking top left
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
                        scoreArray[a][b] += 1;
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }

                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }

                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }

                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("road")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                }
                else if ((a + 1) == 20){ //checking bottom left
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
                        scoreArray[a][b] += 1;
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }

                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }

                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }

                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("road")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                }
                else if ((a + 1) > 1 && (a + 1) < 20){ //checking between top and bottom left
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                else if (document.querySelector("#" + array[b] + (a)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;    
                                }
                            }
                        }

                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
                        scoreArray[a][b] += 1;
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
                        if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
                            if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("road")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                }             
            }
            else if (array[b] == "s"){ // checking right side
                if ((a + 1) == 1){ //checking top right
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
                        scoreArray[a][b] += 1;
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("road")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                }
                else if ((a + 1) == 20){ //checking bottom right
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
                        scoreArray[a][b] += 1;
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("road")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                }
                else if ((a + 1) > 1 && (a + 1) < 20){ //checking between top and bottom right
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                else if (document.querySelector("#" + array[b] + (a)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;    
                                }
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry"))
                            {
                                scoreArray[a][b] = 1;
                                break;
                            }
                            else
                            {
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("residential"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial"))
                                {
                                    scoreArray[a][b] += 1;
                                }
                                if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park"))
                                {
                                    scoreArray[a][b] += 2;
                                }
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
                        scoreArray[a][b] += 1;
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
                            if (document.querySelector("#" + array[b] + (a)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                        if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
                            if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                    if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
                        if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
                            if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("road")){
                                scoreArray[a][b] += 1;
                            }
                        }
                    }
                }
            }
            // else if (array[b] == "b" || array[b] == "c"|| array[b] == "d"|| array[b] == "e"|| array[b] == "f"|| array[b] == "g"|| array[b] == "h"|| array[b] == "i"|| array[b] == "j"|| array[b] == "k"|| array[b] == "l"|| array[b] == "m"|| array[b] == "n"|| array[b] == "o"|| array[b] == "p"|| array[b] == "q"|| array[b] == "r"){ // everything else
            //     if ((a + 1) == 1){ //checking top no corners
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry"))
            //                 {
            //                     scoreArray[a][b] = 1;
            //                     break;
            //                 }
            //                 else
            //                 {
            //                     if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("residential"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park"))
            //                     {
            //                         scoreArray[a][b] += 2;
            //                     }
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
            //                 if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry"))
            //                 {
            //                     scoreArray[a][b] = 1;
            //                     break;
            //                 }
            //                 else
            //                 {
            //                     if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("residential"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park"))
            //                     {
            //                         scoreArray[a][b] += 2;
            //                     }
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 2)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 2)).classList.contains("industry"))
            //                 {
            //                     scoreArray[a][b] = 1;
            //                     break;
            //                 }
            //                 else
            //                 {
            //                     if (document.querySelector("#" + array[b - 1] + (a + 2)).classList.contains("residential"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b - 1] + (a + 2)).classList.contains("commercial"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b - 1] + (a + 2)).classList.contains("park"))
            //                     {
            //                         scoreArray[a][b] += 2;
            //                     }
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
            //             scoreArray[a][b] += 1;
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
            //                 if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("industry")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
            //                 if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("commercial")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("clicked")){ // below
            //                 if (document.querySelector("#" + array[b] + (a + 2)).classList.contains("park")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b -b1] + (a + 1)).classList.contains("park")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("road")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("road")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //     }
            //     else if ((a + 1) == 20){ //checking bottom no corners
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("residential")){
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry"))
            //                 {
            //                     scoreArray[a][b] = 1;
            //                     break;
            //                 }
            //                 else
            //                 {
            //                     if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("residential"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park"))
            //                     {
            //                         scoreArray[a][b] += 2;
            //                     }
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
            //                 if (document.querySelector("#" + array[b] + (a)).classList.contains("industry"))
            //                 {
            //                     scoreArray[a][b] = 1;
            //                     break;
            //                 }
            //                 else
            //                 {
            //                     if (document.querySelector("#" + array[b] + (a)).classList.contains("residential"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b] + (a)).classList.contains("park"))
            //                     {
            //                         scoreArray[a][b] += 2;
            //                     }
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry"))
            //                 {
            //                     scoreArray[a][b] = 1;
            //                     break;
            //                 }
            //                 else
            //                 {
            //                     if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("residential"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial"))
            //                     {
            //                         scoreArray[a][b] += 1;
            //                     }
            //                     if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park"))
            //                     {
            //                         scoreArray[a][b] += 2;
            //                     }
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("industry")){
            //             scoreArray[a][b] += 1;
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("industry")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
            //                 if (document.querySelector("#" + array[b] + (a)).classList.contains("industry")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("industry")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("commercial")){
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("commercial")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
            //                 if (document.querySelector("#" + array[b] + (a)).classList.contains("commercial")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("commercial")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("park")){
            //             if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("clicked")){ // right
            //                 if (document.querySelector("#" + array[b + 1] + (a + 1)).classList.contains("park")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b] + (a)).classList.contains("clicked")){ // above
            //                 if (document.querySelector("#" + array[b] + (a)).classList.contains("park")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("park")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //         if (document.querySelector("#" + array[b] + (a + 1)).classList.contains("road")){
            //             if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("clicked")){ // left
            //                 if (document.querySelector("#" + array[b - 1] + (a + 1)).classList.contains("road")){
            //                     scoreArray[a][b] += 1;
            //                 }
            //             }
            //         }
            //     }
            // }
        }
    }
    tallyScore();
    scores.score = totalScore;
    const refreshStats = `
        <p>Coins Left: `+scores.coins+`</p>
        <p>Points Earned: `+scores.score+`</p>
    `
    document.getElementById("stats").remove();
    let newStats = document.createElement("div");
    newStats.setAttribute("id", "stats");
    newStats.innerHTML = refreshStats;
    document.querySelector(".flexcontainer .leftSideOfPage div").append(newStats);
}


// function main(){
//     window.requestAnimationFrame(main);
//     if (document.querySelector(".flexcontainer .board") != null){
//         let boxes = document.querySelectorAll(".board div div");
//         for (let i = 0; i < boxes.length; i++){
//             if (boxes.item(i).classList.contains("clicked")){
//                 console.log(boxes.item(i).getAttribute("id"));
//             }
//         }
//     }
// }

// window.requestAnimationFrame(main);