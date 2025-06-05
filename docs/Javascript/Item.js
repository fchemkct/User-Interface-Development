const ItemCount = document.getElementById("item-quantity");
const ButtonDecrease = document.getElementById("btn-decrease");
const ButtonAdd = document.getElementById("btn-add");
const SizeOption = document.getElementById("size-option");
const GrindOption = document.getElementById("grind-option");
const AddToCartBtn = document.getElementById("add-to-cart");
const item_Name = document.getElementById("itemName").innerHTML;
const item_Price = document.getElementById("itemPrice").innerHTML.slice(1);
const item_Img = document.getElementById("item_img").src;

var SelectedSize = SizeOption.value;
var SelectedGrind = GrindOption.value;
var count = 1;

const items = [];

// data struct used to store a product's data, used for display in other pages and popups
const item = {
  itemImage: item_Img,
  itemName: item_Name,
  itemPrice: '$' + item_Price * count,
  itemCount: count, 
  itemSize: SelectedSize, 
  itemGrind: SelectedGrind,
  inList: false
};

// decreases item count
ButtonDecrease.onclick = () => {
  if(count > 1)
  {
    count--;
  }
  ItemCount.innerHTML = count;
  UpdateItem();
  
};

// increases item count
ButtonAdd.onclick = () => {
  count++;
  ItemCount.innerHTML = count;
  UpdateItem();
  
};

// changes Size options
SizeOption.addEventListener("change", function () {
  SelectedSize = SizeOption.value;
  UpdateItem();
  
});

// changes Grind options
GrindOption.addEventListener("change", function () {
  SelectedGrind = GrindOption.value;
  UpdateItem();
});

// adds item to local storage
AddToCartBtn.addEventListener("click", function(event) {
  if (event)
  {
    UpdateItem();
    SaveItemData();
    FillItemData(item_list, itemID);
    // window.location.href = "../Pages/Payment_and_delivery/checkout.html";
  }
});

// updates cart data to its most recent version
function UpdateItem() 
{
  item.itemImage = item_Img;
  console.log("item src= " + item.itemImage)
  item.itemPrice =  '$' + item_Price * count,
  item.itemCount = count;
  item.itemSize = SelectedSize;
  item.itemGrind = SelectedGrind;
  items[itemID] = item;
}

// saves product data to local storage
function SaveItemData()
{
  localStorage.setItem(`item${itemID}`, JSON.stringify(items[itemID])); 
}

