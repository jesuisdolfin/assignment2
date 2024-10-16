function loadCategories(myCategories, option) {
    // Make the Object to Array
    let arrayCategories = [];
    for (let i = 0; i < myCategories.categories.length; i++) {
        arrayCategories.push(myCategories.categories[i]);
    }
  
    // sort Array
    let sortedCategories = [];
    if (option === "m") {
        sortedCategories = arrayCategories.filter(categories => categories.gender.includes("m"));
    } 
    else if (option === "w") {
        sortedCategories = arrayCategories.filter(categories => categories.gender.includes("w"));
    }
  
    // find the id col for Bootstrap Card
    var CardMovie = document.getElementById("col");
  
    // Clear previous movie data
    CardMovie.innerHTML = ""; // This will clear the previous movie data and image
  
    sortedCategories.forEach(category => {
      let article = category[i].article;
      let description = category[i].description;
      let image = category[i].image1;
 
      let AddCardMovie = document.createElement("div");
      AddCardMovie.classList.add("border", "rounded");
      AddCardMovie.style.backgroundColor = "hwb(223 7% 64%)";

        AddCardMovie.innerHTML = `
            <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 py-3" style="color:white">
                        <h2 class="display-5">${article}</h2>
                        <p class="lead">${description}</p>
                    </div>
                    <img src="${image}" class="border border-warning rounded" alt="${article}" height="300px">
                </div>
            </div>`
            
        CardMovie.appendChild(AddCardMovie);
    }); // end of for
}

function showMens() {
    fetch("./category.json")
      .then((response) => response.json())
      .then((myCategories) => loadCategories(myCategories, "m"))
      .catch((err) => console.log("Error :" + err));
}
  
function showWomens() {
    fetch("./category.json")
      .then((response) => response.json())
      .then((myCategories) => loadCategories(myCategories, "w"))
      .catch((err) => console.log("Error :" + err));
}
  
