function pizza(size, toppings,price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}
pizza.prototype.totalPrice=function(){

  if(this.toppings<=4){
    if(this.size==="small"){
      this.price+= 5;

    }else if (this.size==="medium") {
      this.price+= 8;

    }else if (this.size==="large") {
      this.price+= 11;

    }
  }else if (this.toppings>=4) {
    if(this.size==="small"){
      this.price+= 8;

    }else if (this.size==="medium") {
      this.price+= 15;

    }else if (this.size==="large") {
      this.price+= 20;

    }
  }




  }



var totalPrice=0


$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var sauce= $("#sauce").val();
    var listOfToppings=[];
    var toppings=0;
    $("input:checkbox[name=toppings]:checked").each(function(){
     toppings += 1;
     listOfToppings.push($(this).val());
    });
    var newPizza= new pizza(size, toppings)
    newPizza.totalPrice();
    totalPrice+=newPizza.price;
      // $(".size").text(newPizza.size);
     $(".totalPrice").text(totalPrice);

    $("ul#price").append("<li>"+"You have ordered a"+ " "+ newPizza.size +" "+ "size " + " with "+"toppings "+ " "+ listOfToppings + " "+"pizza and your price is $" +" "+ newPizza.price+ "</li>");
    listOfToppings=[];

  $("#pizza-order").trigger("reset");


  });
});
