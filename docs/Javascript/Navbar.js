// navbar.js
console.log("hellao worekls");
let file = "nav.html"
fetch(file)
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.text();
    })
    .then(html => console.log(html))
    .catch(error => console.error('Error loading navbar:', error + " file: " + file));

