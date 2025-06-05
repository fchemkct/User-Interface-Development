const CartItems = document.getElementById("cart-items");
const CartTotal = document.getElementById("cart-total");

function AddCartItems (CartItems, itemIndex)
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
    if(CartItems.innerHTML === "")
    {
        CartItems.innerHTML = `<div class="cart-item">
                    <h2>${item.itemName}</h2>
                    <div class="item-details">
                        <img src="${item.itemImage}" alt="Product">
                        <div class="desc">
                            <div class="desc-text">
                                <p>Size: ${item.itemSize}</p>
                                <p>Grind: ${item.itemGrind}</p>
                            </div>
                        </div>
                        <div class="add-btn">
                            <div class="quantity-selector">
                                <button class="qty-btn">-</button>
                                <div>${item.itemCount}</div>
                                <button class="qty-btn">+</button>
                            </div>
                        </div>
                        <p class="price">${item.itemPrice}</p>
                    </div>
                </div>
                <hr>`;
            console.log("filled");
    }

    else
    {
        CartItems.insertAdjacentHTML('beforeend', `<div class="cart-item">
                    <h2>${item.itemName}</h2>
                    <div class="item-details">
                        <img src="${item.itemImage}" alt="Product">
                        <div class="desc">
                            <div class="desc-text">
                                <p>Size: ${item.itemSize}</p>
                                <p>Grind: ${item.itemGrind}</p>
                            </div>
                        </div>
                        <div class="add-btn">
                            <div class="quantity-selector">
                                <button class="qty-btn">-</button>
                                <div>${item.itemCount}</div>
                                <button class="qty-btn">+</button>
                            </div>
                        </div>
                        <p class="price">${item.itemPrice}</p>
                    </div>
                </div>
                <hr>`);
            console.log("appended");
    }

    // adds up total price
    var getPrice = parseInt(item.itemPrice.slice(1));
    console.log("price is: " + getPrice);
    var currentTotal = parseInt(CartTotal.innerHTML) || 0;
    CartTotal.innerHTML = currentTotal + getPrice;

}

window.addEventListener("DOMContentLoaded", function()
{
    AddCartItems(CartItems, itemID);
    AddCartItems(CartItems, itemID+1);
    AddCartItems(CartItems, itemID-1);
});