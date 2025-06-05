const CheckoutItems = document.getElementById("checkout-items");
const CloseSummary = document.getElementById("closeSummary");

let closed = false;

CloseSummary.addEventListener("click", function() {
    if (!closed) {
        CheckoutItems.style.display = "none";
        closed = true;
        console.log("closed");
    } else {
        CheckoutItems.style.display = "flex"; // or "block", depending on your layout
        closed = false;
        console.log("opened");
    }
});



console.log("cart: itemID is: " + itemID)
function AddCheckoutItems (CheckoutItems, itemIndex)
{
    // console.log("cart: item id is: " + (itemID))
    // console.log("cart: item id is: " + (itemIndex))
    // itemIndex = parseInt(itemIndex);
    
    if (GetItemData(itemIndex) == false)
    {
        console.log("(cart) cant get item data at itemIndex: " + itemIndex);
        return;
    }
    console.log("(cart) item data is at itemIndex: " + itemIndex);

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
            console.log("filled");
    }

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
            console.log("appended");
    }
}

window.addEventListener("DOMContentLoaded", function()
{
    AddCheckoutItems(CheckoutItems, itemID);
    AddCheckoutItems(CheckoutItems, itemID+1);
    AddCheckoutItems(CheckoutItems, itemID-1);
});