const ConfirmItems = document.getElementById("confirm-items-list");
const ConfirmTotal1 = document.getElementById("confirm-total1");
const ConfirmTotal2 = document.getElementById("confirm-total2");

function AddConfirmItems (ConfirmItems, itemIndex)
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
    if(ConfirmItems.innerHTML === "")
    {
        ConfirmItems.innerHTML = `
            <div class="row" id="confirm-item">
                <p>${item.itemName}</p>
                <p>${item.itemPrice}</p>
            </div>`;
            console.log("filled");
    }

    else
    {
        ConfirmItems.insertAdjacentHTML('beforeend', `
            <div class="row" id="confirm-item">
                <p>${item.itemName}</p>
                <p>${item.itemPrice}</p>
            </div>`);
            console.log("appended");
    }

    // adds up total price
    var getPrice = parseInt(item.itemPrice.slice(1));
    console.log("price is: " + getPrice);
    var currentTotal = parseInt(ConfirmTotal1.innerHTML) || 0;
    ConfirmTotal1.innerHTML = currentTotal + getPrice;
    ConfirmTotal2.innerHTML = ConfirmTotal1.innerHTML;

}

window.addEventListener("DOMContentLoaded", function()
{
    AddConfirmItems(ConfirmItems, itemID);
    AddConfirmItems(ConfirmItems, itemID+1);
    AddConfirmItems(ConfirmItems, itemID-1);
});