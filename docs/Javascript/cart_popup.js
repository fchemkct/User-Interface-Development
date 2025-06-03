const CartPopupArea = document.getElementById("cart-popup");
const CartBtn = document.getElementById("openCartPopup");

const itemID_list = [1,2];

CartBtn.onclick = () => {
    openCartPopup();
}

CartPopupArea.onclick = () => {
    closeCartPopup();
}

function CheckItem()
{
    for (i = 0; i <itemID_list.length; i++)
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
    if (!CheckItem())
    {
        return false;
    }


    if (!JSON.parse(localStorage.getItem(`item${itemID_list[index]}`)))
    {
        return false;
    }
    
    var item = JSON.parse(localStorage.getItem(`item${itemID_list[index]}`));
    console.log("(popup) item name is: " + item.itemName);
    console.log("(popup) item price is: " + item.itemPrice);
    console.log("(popup) item count is: " + item.itemCount);
    console.log("(popup) size is: " + item.itemSize);
    console.log("(popup) grind is: " + item.itemGrind);
    return item;
}

function FillItemData(item_list, index) {
    if (GetItemData(index) == false)
    {
        return;
    }
    var item = GetItemData(index);
    if (item_list)
    {
        item_list.innerHTML = `<div class="cart-item" id="item">
                    <img src="Images/img-1.png" alt="Product">
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
    }
    else {
        console.log("item not foudn");
    }
}

function openCartPopup() {
    CartPopupArea.style.display = "flex";
    CartPopupArea.innerHTML = `
        <div class="cart-popup" onclick="event.stopPropagation()">
            <div class="cart-header">
            <h2>CART</h2>
            <a href="#" class="continue-link" id="close">Continue shopping</a>
            </div>

            <div class="cart-items" id="cart-items">
                
            </div>

            <div class="cart-footer">
            <button class="view-cart">View cart</button>
            <button class="checkout">Check out</button>
            </div>
        </div>`;

    const item_list = document.getElementById("cart-items");
    
    // ends the function if no items in cart
    if (!CheckItem())
    {
        return;
    }
    FillItemData(item_list, 0);
    FillItemData(item_list, 1);
}

function closeCartPopup() {
    CartPopupArea.style.display = "none";
    CartPopupArea.innerHTML = ``;
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