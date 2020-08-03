var price, crust_price, topping_price;
let total = 0;
function buyPizza(flavor, size, crust, topping, total) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

$(document).ready(function () {
    $("button.proceed").click(function(event) {
        let pname = $("#theflavor option:selected").val();
        let psize = $("#thesize option:selected").val();
        let pcrust = $("#thecrust option:selected").val();
        let ptopping = [];    
    $.each($("input[name='toppings']:checked"), function(){            
        ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    switch (psize) {
        case "0":
            price = 0;
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
            console.log("The price is " + price);
            break;
        case "small":
            price = 500;
            console.log(price);
        default:
            console.log("error");
    }
    switch (pcrust) {
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
    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);

    if ((psize == "0") && (pcrust == "0")) {
        console.log("nothing selected");
        $("button.proceed").show();
        $("#information").show();
        $("div.selected").hide();
        alert("Please select pizza size and crust");
    }

    else {
        $("button.proceed").hide();
        $("#information").hide();
        $("div.selected").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;


    $("#pizzaname").html($("#theflavor option:selected").val());
    $("#pizzasize").html( $("#thesize option:selected").val());
    $("#pizzacrust").html($("#thecrust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    $("button#more").click(function(){
        let pname = $("#theflavor option:selected").val();
        let psize = $("#thesize option:selected").val();
        let pcrust = $("#thecrust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "))
          switch (psize) {
            case "0":
                price = 0;
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
                console.log("The price is " + price);
                break;
            case "small":
                price = 500;
                console.log(price);
            default:
                console.log("error");
        }
        switch (pcrust) {
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

        let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        
          checkoutTotal = checkoutTotal + total;
          console.log(checkoutTotal);
        var newOrder = new buyPizza(pname, psize, pcrust,ptopping,total);

    $("#ordersplaced").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
    console.log(newOrder);
});

// Checkout button
$("button#checkout").click(function () {
    $("button#checkout").hide();
    $("button#more").hide();
    $("button#delivery").slideDown(1000);
    $("#addedprice").slideDown(1000);
    console.log("Your total bills is ksh. " + checkoutTotal);
    $("#pizzatotal").append("Your bill is ksh. " + checkoutTotal);
});



// home delivery button
$("button#delivery").click(function () {
    $(".pizzatable").hide();
    $(".selected h2").hide();
    $("#delivery").slideDown(1000);
    $("#addedprice").hide();
    $("button#delivery").hide();
    $("#pizzatotal").hide();
    let deliveryamount = checkoutTotal + 150;
    console.log("You will pay sh. " + deliveryamount + " on delivery");
    $("#totalbill").append("Your bill plus delivery fee is: " + deliveryamount);
});




// when one clicks place order button
$("button#final-order").click(function (event) {
    event.preventDefault();

    $("#pizzatotal").hide();
    $("#delivery").hide();
    $("button#final-order").hide();
    let deliveryamount = checkoutTotal + 150;
    console.log("Final Bill is: " + deliveryamount);
    let person = $("input#fname").val();
    let phone = $("input#pnumber").val();
    let location = $("input#location").val();


    if ($("input#fname").val() && $("input#pnumber").val() && $("input#location").val() != "") {
        $("#finallmessage").append(person + ", your order has been successfully place, it will be delivered in the next 1 hour to " + location + ". Kindly make sure to avail. " + deliveryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
    }
    else {
        alert("Please fill in the details!");
        $("#delivery").show();
        $("button#final-order").show();
    }
});
event.preventDefault();
});
});
