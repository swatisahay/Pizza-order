function pizza(size, toppings,price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}
pizza.prototype.totalPrice=function(){
  if(this.toppings<=3){
    if(this.size==="small"){
      this.price= 5;
    }else if (this.size==="medium") {
      this.price= 8;
    }else if (this.size==="large") {
      this.price= 11;
    }
  }else if (this.toppings<=7) {
    if(this.size==="small"){
      this.price= 8;
    }else if (this.size==="medium") {
      this.price= 15;
    }else if (this.size==="large") {
      this.price= 20;
    }
  }
  return this.price;

  }








var toppings=0;
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var sauce= $("#sauce").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
     toppings += 1;
    });
    var newPizza= new pizza(size, toppings)
    newPizza.totalPrice();
    $("#price").text(newPizza.price);
  });
});
