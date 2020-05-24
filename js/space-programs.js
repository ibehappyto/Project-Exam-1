const productsUrl = "http://cello-webdev.com/cmd/flower_power/wp-json/wc/store/products";

async function fetchSpaceprograms() {
    try {
        const response = await fetch(productsUrl);
        const products = await response.json();

        displaySpaceprograms(products);

    } catch (error) {
        console.log(error);
    }
}

fetchSpaceprograms();


function displaySpaceprograms(articles) {
    console.log(articles);

    const spaceprogramsContainer = document.querySelector(".spaceprograms-container");

    let html = "";

    for (let i = 0; i < articles.length; i++) {

        if (!articles[i].name) {
            continue;
        }

        html += `<div>
        <div class="image" style="background-image: url(${articles[i].images[0].src});"></div>
        <h3>${articles[i].name}</h3>                   
        <a href="article${articles[i].id}.html?name=${articles[i].name}">Read More</a>
    </div>`;

    }

    spaceprogramsContainer.innerHTML = html;


}




