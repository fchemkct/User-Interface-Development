


// import search_input from "../Javascript/search_popup" 

document.addEventListener("DOMContentLoaded", () => {
    const search_input = localStorage.getItem("search_input");
    const products = document.querySelectorAll("div.product");
    const resultContainer = document.getElementById("product-grid");
    const searchCount = document.getElementById("search-count");
    var count = 0;

    resultContainer.innerHTML = "";

    let search_matches = [];

    if (!search_input)
    {
        console.log("no search input, returning");
        return;
    }

    const lowerQuery = search_input.toLowerCase();
    console.log("filtered input is: " + lowerQuery);

    // find matches with input from database
    products.forEach(product => 
    {
        const text = product.querySelector("a").textContent.toLowerCase();

        // clone matches to template grid
        if (text.includes(lowerQuery)) 
        {
            search_matches.push(product.cloneNode(true));
            count++;
        } 
    });

    // if no searches matched
    if (search_matches.length == 0)
    {
        searchCount.innerHTML = "";
        resultContainer.innerHTML = `<p style="text-align:center; font-family:Inter;">No results found for "${search_input}"</p>`;
    }
        
    // Insert results in groups of 4 per grid
    if (count == 1) 
    {
        searchCount.innerHTML = count + " result";
    }

    if (count > 1)
    {
        searchCount.innerHTML = count + " results";
    }
    for (let i = 0; i < search_matches.length; i += 4) {
        const grid = document.createElement("div");
        grid.classList.add("product-grid");

        search_matches.slice(i, i + 4).forEach(p => grid.appendChild(p));
        resultContainer.appendChild(grid);
    }
});