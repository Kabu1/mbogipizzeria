var price, crust_price, topping_price;
let total = 0;
function buyPizza(flavor,size,crust,topping,total){
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

$(document).ready(function(){
    $("button.process").click(function(event){
        let pflavor = $(".flavor option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = $("#topping option:selected").val();
    })





    switch(psize){
        case "0":
          price =0;
        break;
        case "extralarge":
           price = 1500;
           console.log(price);
         break;
        case "large":
           price = 1100;
           console.log(price);
         break;
         case "medium":
           price = 900;
           console.log("The price is "+price);
         break;
         case "small":
           price = 500;
           console.log(price);
         default:
           console.log("error");
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "thick":
            crust_price = 150;
          break;
          case "thin":
            crust_price = 150;
          break;
          case "stuffed":
            crust_price = 100;
          break;
          case "cheese":
            crust_price = 150;
          break;
          default:
            console.log("No price");
        }
});

