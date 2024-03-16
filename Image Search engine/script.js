console.log("Welcome to the javaScript");

const accessKey = "c8OWIjD39zxZ15cE4bc6SAOFT5O_yMeRxA0EG2JiJ2M"

const searchForm = document.getElementById("formBox");
const searchReasult = document.getElementById("search-result");
const input = document.getElementById("inputBox");
const sarchBtn = document.getElementById("searchBtn");
const showMoreButoon = document.getElementById("showMoreButoon");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchReasult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        // imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchReasult.appendChild(imageLink);


    })
    showMoreButoon.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreButoon.addEventListener("click", () => {
    page++;
    searchImages();
})

