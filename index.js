

$(".red").click(function(){
   $(".red").addClass("pressed");
   setTimeout(function(){
      $(".red").removeClass("pressed")},100);

});


$(".blue").click(function(){
   $(".blue").addClass("pressed");
   setTimeout(function(){
      $(".blue").removeClass("pressed")},100);

});


$(".green").click(function(){
   $(".green").addClass("pressed");
   setTimeout(function(){
      $(".green").removeClass("pressed")},100);

});


$(".yellow").click(function(){
   $(".yellow").addClass("pressed");
   setTimeout(function(){
      $(".yellow").removeClass("pressed")},100);

});



  $(".start").click(function(){


        test();
        $(".start").hide();
        $("#game-rule").hide();

        });






var array = ["green", "red", "yellow", "blue"];
var userArray= [];
var randomArray= [];
var randomNumber;
var memoryArray = [] ;
var len;
var levelCounter = 0;

function test()
 {

      
    randomNumber= Math.floor(Math.random() * 4);

     randomArray.push(array[randomNumber]);

    memoryArray.push(array[randomNumber]);
    


     $("#"+array[randomNumber]).addClass("pressed");

     setTimeout(function(){
        $("#"+array[randomNumber]).removeClass("pressed")},100);

        soundPlay(array[randomNumber]);

       userArray.splice(0, userArray.length);

       levelCounter++;

       $("#level-title").text("LEVEL " +levelCounter);

  }





$(".btn").click( function(){

    

   userArray.push(this.id);


   soundPlay(this.id);

   nextLevel(this.id);

      });





 function  nextLevel(id)
{

        

      let checkArrayEquality; 


     if(userArray.indexOf(id) === randomArray.indexOf(id) )
      {
         if (userArray.length === randomArray.length) {
         if (userArray.toString() === randomArray.toString()) {
             
              
              checkArrayEquality = "equal"

             } 
        else {
               
              
              checkArrayEquality = "Not-equal"
             }

        }

    }

  else
  {
    
    checkArrayEquality = "Not-equal"
  }

        

          let newAr  = memoryArray.slice(0,-1) ;

         if(checkArrayEquality === "equal")
         {

           
           

             if(newAr.length > 0)
             {

               setTimeout(() => {

                Promise.all(memoryArray.map((element, i) => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      $("#" + element).addClass("pressed");
                      setTimeout(() => {
                        $("#" + element).removeClass("pressed");
                      }, 100);
                      soundPlay(element);
                      resolve();
                    }, i * 1000);
                  });
                })).then(() => {
                   setTimeout(function() { test() } ,1100);
                 
                });

               },1000)
              


             }


             else{
               setTimeout(function() { test() } ,1000);
             }
             

               
                
                


           


         }

       

          if(checkArrayEquality === "Not-equal")

                 {
                   

                   soundPlay("wrong");

                   $("body").addClass("game-over");
                   setTimeout(function(){
                      $("body").removeClass("game-over")},200);


                   levelCounter =0;

                   $("#level-title").text("Game Over, press start to play again");

                   $(".start").show();
                   $("#game-rule").show();

                   

                    randomArray.splice(0, randomArray.length);
                    userArray.splice(0, userArray.length);
                    memoryArray.splice(0, memoryArray.length);
                    
                 }

                





}






function soundPlay(clickedButton)
{

  if(clickedButton === "blue")
  {
 var audio = new Audio('sounds/blue.mp3');


  }

  if(clickedButton === "red")
  {
 var audio = new Audio('sounds/red.mp3');

  }

  if(clickedButton === "green")
  {
 var audio = new Audio('sounds/green.mp3');

  }

  if(clickedButton === "yellow")
  {
 var audio = new Audio('sounds/yellow.mp3');

  }

  if(clickedButton === "wrong")
  {
 var audio = new Audio('sounds/wrong.mp3');

  }





audio.play();

}
