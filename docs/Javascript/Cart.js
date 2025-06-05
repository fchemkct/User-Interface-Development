const CartItems = document.getElementById("cart-items");
const CartTotal = document.getElementById("cart-total");

// displays item to the cart page
function AddCartItems (CartItems, itemIndex)
{
    if (GetItemData(itemIndex) == false)
    {
        return;
    }

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

    // else appends item
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

// loads data on page being loaded
window.addEventListener("DOMContentLoaded", function()
{
    AddCartItems(CartItems, itemID);
    AddCartItems(CartItems, itemID+1);
    AddCartItems(CartItems, itemID-1);
});