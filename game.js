

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


$(document).keydown(function(event){


      test();


  });

//test();



var array = ["green", "red", "yellow", "blue"];
var userArray= [];
var randomArray= [];
var randomNumber;
var len;

function test()
 {

      //console.log("inside test");
    randomNumber= Math.floor(Math.random() * 4);

     randomArray.push(array[randomNumber]);


     $("#"+array[randomNumber]).addClass("pressed");

     setTimeout(function(){
        $("#"+array[randomNumber]).removeClass("pressed")},100);

       userArray.splice(0, userArray.length);
  }





$(".btn").click(function(){

     //userArray.splice(0, userArray.length);
    // console.log("inside click inside for");

   userArray.push(this.id);

    all();

      });






function all()
{

         var result =  arraysAreIdentical(userArray, randomArray);


         if(result === 2)
         {


           setTimeout(function() { test() } ,1000);


         }

         if(userArray.length === randomArray.length)

         {

                 if(result === 1)
                 {
                   alert("game over");
                 }

           }



}





function arraysAreIdentical(arr1, arr2){

 //console.log("inside arraysAreIdentical");
 if (arr1.length !== arr2.length) return 1;
 for (var i = 0, len = arr1.length; i < len; i++){
     if (arr1[i] !== arr2[i]){
         return 1;
     }
 }
 return 2;

}
