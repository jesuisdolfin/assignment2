function fetchData(){
    console.log("Begin fetch");
    fetch('./category.json')
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    appendData(data);
    })
    .catch(function (err) {
    console.log('error:' + err);
    });
    console.log("End fetch");
    }
    
function appendDataCategory(data) {
    let mainContainer = document.getElementById("myData1");
    let div = document.createElement("div");
    div.innerHTML = `<br>
    <h1> Superhero : </h1>
    "article : ${data.firstName} <br>
     description : ${data.lastName} <br>
     image1 : ${data.job} <br>
     image2 : ${data.roll} <br>
     image3 : ${data.image3} <br>
     gender : ${data.gender} <br>
    <img src=${data.logo} alt="superhero" width="100" />`;
    inContainer.appendChild(div);
}

fetch('./person')
.then()
.then()
.catch();