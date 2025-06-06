const CheckoutItems = document.getElementById("checkout-items");
const CloseSummary = document.getElementById("closeSummary");

let closed = false;

// if on mobile, clicking on arrow will open or close summary dropdown
CloseSummary.addEventListener("click", function() {
    if (!closed) {
        CheckoutItems.style.display = "none";
        closed = true;
    } 
    
    else {
        CheckoutItems.style.display = "flex"; // or "block", depending on your layout
        closed = false;
    }
});

// adds item data from cart to checkout page
function AddCheckoutItems (CheckoutItems, itemIndex)
{
    if (GetItemData(itemIndex) == false)
    {
        return;
    }

    var item = GetItemData(itemIndex);
    
    // if empty, adds first item
    if(CheckoutItems.innerHTML === "")
    {
        CheckoutItems.innerHTML = `<div class="summary-item">
                        <img src="${item.itemImage}" alt="Product">
                        <div>
                            <p class="product-name">${item.itemName}</p>
                            <p class="product-info">Size: ${item.itemSize}<br>Grind: ${item.itemGrind}</p>
                        </div>
                        <p>${item.itemPrice}</p>
                    </div>`;
    }

    // else appends item
    else
    {
        CheckoutItems.insertAdjacentHTML('beforeend', `<div class="summary-item">
                        <img src="${item.itemImage}" alt="Product">
                        <div>
                            <p class="product-name">${item.itemName}</p>
                            <p class="product-info">Size: ${item.itemSize}<br>Grind: ${item.itemGrind}</p>
                        </div>
                        <p>${item.itemPrice}</p>
                    </div>`);
    }
}

// adds item data on opening page
window.addEventListener("DOMContentLoaded", function()
{
    AddCheckoutItems(CheckoutItems, itemID);
    AddCheckoutItems(CheckoutItems, itemID+1);
    AddCheckoutItems(CheckoutItems, itemID-1);
});