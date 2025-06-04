const CartPopupArea = document.getElementById("cart-popup");
const CartBtn = document.getElementById("openCartPopup");
var PrevItemIndex;

const itemID_list = [1,2];

const item_list = document.getElementById("cart-items");

CartBtn.onclick = () => {
    // writeCart();
    openCart();
}

CartPopupArea.onclick = () => {
    closeCartPopup();
}

window.addEventListener("beforeunload", function (e) {
    // Optionally save state, warn user, or log something
    console.log("User is leaving the page.");

    // If you want to show a confirmation dialog (not always allowed):
    PrevItemIndex = itemID;
    console.log("prev index is now: " + PrevItemIndex)
});

function CheckItem()
{
    for (i = 0; i < itemID_list.length; i++)
    {
        if ((JSON.parse(localStorage.getItem(`item${itemID_list[i]}`))))
        {
            console.log("storage not empty");
            return true;
        }
    }

    return false;
}


function GetItemData(index) {
    if (!JSON.parse(localStorage.getItem(`item${index}`)))
    {
        return false;
    }
    
    var item = JSON.parse(localStorage.getItem(`item${index}`));
    return item;
}

function FillItemData(item_list, index) {
    if (GetItemData(index) == false)
    {
        console.log("cant get item data at index: " + index);
        return;
    }
    var item = GetItemData(index);
    if (item_list)
    {
        if (index == itemID)
        {
            item_list.innerHTML = `<div class="cart-item" id="item">
                    <img src="Images/image-1.png" alt="Product">
                    <div class="item-details">
                            <div class="item">
                                <p class="product-title">${item.itemName}</p>
                                <p class="product-option">Size: ${item.itemSize}</p>
                                <p class="product-option">Grind: ${item.itemGrind}</p>
                            </div>
                            <div class="quantity-selector">
                                <button class="qty-btn" id="popup-btn-decrease">-</button>
                                <div class="item-count" id = "popup-item-quantity">${item.itemCount}</div>
                                <button class="qty-btn" id="pop-up-btn-add">+</button>
                            </div>
                    </div>
                    <div class="price">${item.itemPrice}</div>
                </div>
                <hr>
                `;
            console.log("item" + index + " filled")
        }

        else
        {
            item_list.insertAdjacentHTML('beforeend', `<div class="cart-item" id="item">
                    <img src="Images/image-1.png" alt="Product">
                    <div class="item-details">
                            <div class="item">
                                <p class="product-title">${item.itemName}</p>
                                <p class="product-option">Size: ${item.itemSize}</p>
                                <p class="product-option">Grind: ${item.itemGrind}</p>
                            </div>
                            <div class="quantity-selector">
                                <button class="qty-btn" id="popup-btn-decrease">-</button>
                                <div class="item-count" id = "popup-item-quantity">${item.itemCount}</div>
                                <button class="qty-btn" id="pop-up-btn-add">+</button>
                            </div>
                    </div>
                    <div class="price">${item.itemPrice}</div>
                </div>
                <hr>
                `);
            console.log("item" + index + " appended")
        }
    }
    else {
        console.log("item not found");
    }
}

function openCart()
{
    CartPopupArea.style.display = "flex";
    FillItemData(item_list, itemID);
    FillItemData(item_list, itemID+1);
    FillItemData(item_list, itemID-1);
}

function closeCartPopup() {
    CartPopupArea.style.display = "none";
}

// CloseBtn = document.getElementById("close");
// CloseBtn.onclick = () => {
//     closeCartPopup();
// }




/*
<div class="cart-popup">
            <div class="cart-header">
                <h2>CART</h2>
                <a href="#" class="continue-link">Continue shopping</a>
            </div>

            <div class="cart-items">
                <div class="cart-item">
                    <img src="Images/item.png" alt="Product">
                    <div class="item-details">
                    <p class="product-title">Little Temperance</p>
                    <p class="product-option">Size: 200G</p>
                    <p class="product-option">Grind: WHOLE BEANS</p>

                    <div class="quantity-selector">
                        <button>-</button>
                        <div>1</div>
                        <button>+</button>
                    </div>
                    </div>
                    <div class="price">$18</div>
                </div>
            <hr>
            </div>

            <div class="cart-footer">
                <button class="view-cart">View cart</button>
                <button class="checkout">Check out</button>
            </div>
        </div>

*/