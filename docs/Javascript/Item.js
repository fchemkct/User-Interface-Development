const ItemCount = document.getElementById("item-quantity");
const ButtonDecrease = document.getElementById("btn-decrease");
const ButtonAdd = document.getElementById("btn-add");
const SizeOption = document.getElementById("size-option");
const GrindOption = document.getElementById("grind-option");
const AddToCartBtn = document.getElementById("add-to-cart");
const itemID = document.getElementById("itemID").innerHTML;
const item_Name = document.getElementById("itemName").innerHTML;
const item_Price = document.getElementById("itemPrice").innerHTML.slice(1);

var SelectedSize = SizeOption.value;
var SelectedGrind = GrindOption.value;
var count = 1;

const items = [];
const item = {
  itemName: item_Name,
  itemPrice: '$' + item_Price * count,
  itemCount: count, 
  itemSize: SelectedSize, 
  itemGrind: SelectedGrind
};

localStorage.clear();

ButtonDecrease.onclick = () => {
  if(count > 1)
  {
    count--;
  }
  ItemCount.innerHTML = count;
  UpdateItem();
  
};

ButtonAdd.onclick = () => {
  count++;
  ItemCount.innerHTML = count;
  UpdateItem();
  
};

SizeOption.addEventListener("change", function () {
  SelectedSize = SizeOption.value;

  UpdateItem();
  
});

GrindOption.addEventListener("change", function () {
  SelectedGrind = GrindOption.value;

  UpdateItem();
});

AddToCartBtn.addEventListener("click", function(event) {
  if (event)
  {
    UpdateItem();
    if(localStorage.getItem(`item${itemID}`))
    {
      console.log("refreshed");
      localStorage.removeItem(`item${itemID}`);
    }
    SaveItemData();
    // window.location.href = "../Pages/Payment_and_delivery/checkout.html";
  }
});

function UpdateItem() 
{
  item.itemPrice =  '$' + item_Price * count,
  item.itemCount = count;
  item.itemSize = SelectedSize;
  item.itemGrind = SelectedGrind;
  items[itemID] = item;
}

function SaveItemData()
{
  localStorage.setItem(`item${itemID}`, JSON.stringify(items[itemID])); 
  console.log("(itemjs) item name is: " + item.itemName);
  console.log("(itemjs) item price is: " + item.itemPrice);
  console.log("(itemjs) item count is: " + item.itemCount);
  console.log("(itemjs) size is: " + item.itemSize);
  console.log("(itemjs) grind is: " + item.itemGrind);
  console.log("storage saved!");
}

