// business Logic for Order
//var price , crust_price, topping_price ;
//let total = 0;
//var price , crust_price, topping_price ;
//let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

  $("button.proceed").click(function(event){
   var  pname = $(".name option:selected").val();
   var psize = $("#size option:selected").val();
   var pcrust = $("#crust option:selected").val();
   var ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
       event.preventDefault();
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 850;
       console.log("The price is "+price);
     break;
     case "small":
       price = 600;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Add pizza button
    $("button.addPizza").click(function(){
      event.preventDefault();
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
          event.preventDefault();
              });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 200;
          break;
          case "Stuffed":
            crust_price = 150;
          break;
          case "Gluten-free":
            crust_price = 180;
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
      // constractor function
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Checkout button
    $("button#checkout").click(function(){ 
      event.preventDefault();
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    $("button.deliver").click(function(){ 
      event.preventDefault();
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    });

    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
$("button.pickup").click(function(event){
  alert("Pickup your delivery in 45 min AT DONS PIZZERIA")
});
