


// import search_input from "../Javascript/search_popup" 

document.addEventListener("DOMContentLoaded", () => {
    const search_input = localStorage.getItem("search_input");
    console.log("search input is: " + search_input);

    const products = document.querySelectorAll("div.database-item");
    console.log("product list is: " + products);

    if (!search_input)
    {
        console.log("no search input, returning");
        return;
    }

    const lowerQuery = search_input.toLowerCase();
    console.log("filtered input is: " + lowerQuery);

    products.forEach(product => 
    {
        const text = product.querySelector("a").textContent.toLowerCase();
        if (text.includes(lowerQuery)) {
            product.style.display = "block"; // show matching product
            console.log("showing item: " + text);
        } else {
            product.style.display = "none"; // hide non-matching
            console.log("hiding item: " + text);
        }
    });
});