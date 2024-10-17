window.onload = function() {
    showAbout();
}

const loadCategories = (myCategories, option) => {
    let arrayCategories = myCategories.categories;
    let sortedCategories = [];

    if (option === "m") {
        sortedCategories = arrayCategories.filter(categories => categories.gender.includes("m"));
    } else if (option === "w") {
        sortedCategories = arrayCategories.filter(categories => categories.gender.includes("w"));
    }

    let catalog = document.getElementById("col");
    catalog.classList.add("border", "rounded");
    catalog.style.backgroundColor = "hwb(223 7% 64%)";
    catalog.style.display = "flex";
    catalog.style.flexWrap = "wrap";
    catalog.innerHTML = "";

    sortedCategories.forEach(category => {
      let article = category.article;
      let description = category.description;
      let image = category.image1;
 
      let showCategories = document.createElement("div");
      showCategories.style.flex = "1 1 20%";
      showCategories.style.margin = "0px";

      showCategories.innerHTML = `
            <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 py-3" style="color:white">
                        <h2 class="display-5">${article}</h2>
                        <img src="${image}" class="border border-warning rounded" alt="${article}" height="300px" width="200px">
                        <p class="lead">${description}</p>
                    </div>
                </div>
            </div>`;

        catalog.appendChild(showCategories);
    });
};

function showMens() {
    let header = document.getElementById("header");
    header.innerHTML = `
    <div class="row">
        <div class="col text-center mx-3">
            <h1 class="display-7 mt-md-7" style="font-family:'Verdana'"><strong>Men's Clothing</strong></h1>
        </div>
    </div>`
    fetch("./data.json")
      .then((response) => response.json())
      .then((myCategories) => loadCategories(myCategories, "m"))
      .catch((err) => console.log("Error :" + err));
}
  
function showWomens() {
    let header = document.getElementById("header");
    header.innerHTML = `
    <div class="row">
        <div class="col text-center mx-3">
            <h1 class="display-7 mt-md-7" style="font-family:'Verdana'"><strong>Women's Clothing</strong></h1>
        </div>
    </div>`
    fetch("./data.json")
      .then((response) => response.json())
      .then((myCategories) => loadCategories(myCategories, "w"))
      .catch((err) => console.log("Error :" + err));
}

function showAbout() {
    let today = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('en-US', options);
    let header = document.getElementById("header");
    header.innerHTML = `        
    <div class="row">
        <div class="col text-center mx-3">
            <h1 class="display-7 mt-md-7" style="font-family:'Verdana'"><strong>Meet Today's Team - ${formattedDate}</strong></h1>
        </div>
    </div>`
    let about = document.getElementById("col");
    about.innerHTML = `
        <div class="border rounded" style="background-color: hwb(223 7% 64%);">
            <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 py-3 border border-warning rounded" style="color:white">
                        <h2 class="display-5">Charlie Dolphin</h2>
                        <p class="lead m-md-3">Charlie is dedicated to bringing comfort to the every day lives of our customers. For concerns regarding comfort and product flexibility, Charlie can be personally reached at <strong class="text-warning">cpd@iastate.edu</strong>.</p>
                    </div>
                </div>
                <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3 border border-warning rounded" style="color:white">
                        <h2 class="display-5">Maurissa Higgins</h2>
                        <p class="lead">Maurissa makes sure our customers are always dressed to impress. Concerns regarding product design can be directed to Maurissa at <strong class="text-warning">maukhigs@iastate.edu</strong>.</p>
                    </div>
                </div>
                <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 py-3 border border-warning rounded" style="color:white">
                        <h2 class="display-5">Our Sponsors</h2>
                        <p class="lead">American Cardinal is thankful to all our sponsors from <strong class="text-warning">SE/ComS3190 Construction of User Interfaces, Fall 2024</strong> and extends special acknowledgments to the inspiration of our designs, <strong class="text-warning">Dr. Abraham N. Aldaco-Gastelum</strong>.</p>
                    </div>
                </div>
            </div>
        </div>`;
}
