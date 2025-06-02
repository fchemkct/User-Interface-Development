const ItemCount = document.getElementById("item-quantity");
const ButtonDecrease = document.getElementById("btn-decrease");
const ButtonAdd = document.getElementById("btn-add");
const SizeOption = document.getElementById("size-option");
var GrindOption = document.getElementById("grind-option");
var SelectedSize = SizeOption.value;
var SelectedGrind = GrindOption.value;
var count = 1;

var item = [count, SelectedSize, SelectedGrind];

ButtonDecrease.onclick = () => {
  if(count > 1)
  {
    count--;
  }
  ItemCount.innerHTML = count;
  UpdateItem();
  SaveItemData();
};

ButtonAdd.onclick = () => {
  count++;
  ItemCount.innerHTML = count;
  UpdateItem();
  SaveItemData();
};

SizeOption.addEventListener("change", function () {
  SelectedSize = SizeOption.value;

  UpdateItem();
  SaveItemData();
});

GrindOption.addEventListener("change", function () {
  SelectedGrind = GrindOption.value;

  UpdateItem();
  SaveItemData();
});

function UpdateItem() 
{
  item[0] = count;
  item[1] = SelectedSize;
  item[2] = SelectedGrind;
}

function SaveItemData()
{
  localStorage.setItem("item", item);
  console.log("item count is: " + item[0]);
  console.log("size is: " + item[1]);
  console.log("grind count is: " + item[2]);
}

