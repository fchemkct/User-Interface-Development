const ConfirmItems = document.getElementById("confirm-items-list");
const ConfirmTotal1 = document.getElementById("confirm-total1");
const ConfirmTotal2 = document.getElementById("confirm-total2");

// displays purchased products in payment confirmation page 
function AddConfirmItems (ConfirmItems, itemIndex)
{
    if (GetItemData(itemIndex) == false)
    {
        return;
    }

    var item = GetItemData(itemIndex);
    
    // if empty, adds first item
    if(ConfirmItems.innerHTML === "")
    {
        ConfirmItems.innerHTML = `
            <div class="row" id="confirm-item">
                <p>${item.itemName}</p>
                <p>${item.itemPrice}</p>
            </div>`;
    }

    // else appends item 
    else
    {
        ConfirmItems.insertAdjacentHTML('beforeend', `
            <div class="row" id="confirm-item">
                <p>${item.itemName}</p>
                <p>${item.itemPrice}</p>
            </div>`);
    }

    // adds up total price
    var getPrice = parseInt(item.itemPrice.slice(1));
    var currentTotal = parseInt(ConfirmTotal1.innerHTML) || 0;
    ConfirmTotal1.innerHTML = currentTotal + getPrice;
    ConfirmTotal2.innerHTML = ConfirmTotal1.innerHTML;

}

// loads data on page loaded
window.addEventListener("DOMContentLoaded", function()
{
    AddConfirmItems(ConfirmItems, itemID);
    AddConfirmItems(ConfirmItems, itemID+1);
    AddConfirmItems(ConfirmItems, itemID-1);
});