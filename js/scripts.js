var price, crust_price, topping_price;
let total = 0;
function buyPizza(flavor,size,crust,topping,total){
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}