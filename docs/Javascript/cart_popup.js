const CartPopupArea = document.getElementById("cart-popup");
const CartBtn = document.getElementById("openCartPopup");
var PrevItemIndex;
const itemID = +document.getElementById("itemID").textContent.trim();

const itemID_list = [];
writeCart();

const item_list = document.getElementById("popup-cart-items");
const ContShop = document.getElementById("close");

// opens cart
CartBtn.onclick = () => {
    openCart();
}

// closes cart
CartPopupArea.onclick = () => {
    closeCartPopup();
}

// closes cart
ContShop.addEventListener("click", function() {
    closeCartPopup()
    window.location.href = "../Products_list/shop.html";
});

function PopDecreaseItem(index)
{
    var item = GetItemData(index);
    var count = item.itemCount
    console.log("item count was: " + item.itemCount)
    count--;
    if(count < 1)
    {
        localStorage.removeItem(`item${index}`); 
        location.reload();
        return;
    }
    item.itemCount = count;
    localStorage.setItem(`item${index}`, JSON.stringify(item)); 
    document.getElementsByClassName("item-count")[index-1].innerHTML = item.itemCount;
    console.log("popup item decreased, count is: " + count);
}

function PopIncreaseItem(index)
{
    console.log("index is: " + index);
    var item = GetItemData(index);
    var count = item.itemCount
    count++;
    item.itemCount = count;
    localStorage.setItem(`item${index}`, JSON.stringify(item)); 
    document.getElementsByClassName("item-count")[index-1].innerHTML = item.itemCount;
    console.log("popup item increased, count is: " + count);
}

// gets item data from local storage
function GetItemData(index) {
    if (!JSON.parse(localStorage.getItem(`item${index}`)))
    {
        return false;
    }
    
    var item = JSON.parse(localStorage.getItem(`item${index}`));
    return item;
}

// check if duplicates of the same item exists
function CheckDuplicate(item)
{
    const titles = document.getElementsByClassName("product-title")
    Array.from(titles).forEach((title) => {
        if (title.innerHTML === item.itemName)
        {
            return true;
        }
    });

    return false;
}

// fills cart with items that has been added to cart
function FillItemData(item_list, index) {
    if (GetItemData(index) == false)
    {
        return;
    }
    var item = GetItemData(index);
    if (item_list && !itemID_list.includes(index) && item.itemCount >= 1)
    {
        if (item_list.innerHTML == "")
        {
            itemID_list[index] = index;
            item_list.innerHTML = `<div class="cart-item" id="item">
                    <img src="${item.itemImage}" alt="Product">
                    <div class="item-popup-details">
                        <div class="item">
                            <p class="product-title">${item.itemName}</p>
                            <p class="product-option">Size: ${item.itemSize}</p>
                            <p class="product-option">Grind: ${item.itemGrind}</p>
                        </div>
                        <div class="popup-selector">
                            <button class="qty-btn" onclick="PopDecreaseItem(${itemID%index+1})" id="popup-btn-decrease">-</button>
                            <div class="item-count" id = "popup-item-quantity">${item.itemCount}</div>
                            <button class="qty-btn" onclick="PopIncreaseItem(${itemID%index+1})" id="pop-up-btn-add">+</button>
                        </div>
                    </div>
                    <div class="price">${item.itemPrice}</div>
                </div>
                <hr>
                `;
        }

        else
        {
            itemID_list[index] = index;
            item_list.insertAdjacentHTML('beforeend', `<div class="cart-item" id="item">
                    <img src="${item.itemImage}" alt="Product">
                    <div class="item-popup-details">
                            <div class="item">
                                <p class="product-title">${item.itemName}</p>
                                <p class="product-option">Size: ${item.itemSize}</p>
                                <p class="product-option">Grind: ${item.itemGrind}</p>
                            </div>
                            <div class="popup-selector">
                                <button class="qty-btn" onclick="PopDecreaseItem(${index})" id="popup-btn-decrease">-</button>
                                <div class="item-count" id = "popup-item-quantity">${item.itemCount}</div>
                                <button class="qty-btn" onclick="PopIncreaseItem(${index})" id="pop-up-btn-add">+</button>
                            </div>
                    </div>
                    <div class="price">${item.itemPrice}</div>
                </div>
                <hr>
                `);
           
        }
    }
}

// writes the cart into the html page, opening it
function writeCart()
{
    CartPopupArea.innerHTML = `<div class="cart-popup" onclick="event.stopPropagation()">
            <div class="cart-header">
                <h2>CART</h2>
                <a href="#" class="continue-link" id="close">Continue shopping</a>
            </div>

            <div class="popup-cart-items" id="popup-cart-items">
                
            </div>

            <div class="cart-footer">
                <button class="view-cart"><a href="../Cart/Cart.html">View cart</a></button>
                <button class="checkout"><a href="../Payment_and_delivery/checkout.html">Check out</a></button>
            </div>
        </div>`;
}


// opens cart on click
function openCart()
{
    CartPopupArea.style.display = "flex";
    FillItemData(item_list, 1);
    FillItemData(item_list, 2);
}

// closes cart
function closeCartPopup() {
    CartPopupArea.style.display = "none";
}