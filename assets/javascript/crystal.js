<script src="https://code.jquery.com/jquery-2.2.3.js" integrity="sha256-laXWtGydpwqJ8JA+X9x2miwmaiKhn8tVmOVEigRNtP4=" crossorigin="anonymous"></script>



$(document).ready(function(){


var user;
var gem = math.floor(Math.random()* 12) + 1;
var gem1; Math.floor(Math.random()* 12) + 1;
var gem2; Math.floor(Math.random()* 12) + 1;
var gem3; Math.floor(Math.random()* 12) + 1;
var gem4; Math.floor(Math.random()* 12) + 1;


var userNumber = 0;
var randomNumber = Math.floor(Math.random()* 101) + 19;


})
$(".gem1").click(function(){
   	 console.log(gem1);
   	 return gem1
});
$(".gem2").click(function(){
   	 console.log(gem)2;
		return gem2
});

$(".gem3").click(function(){
   	 console.log(gem3);
		return gem3
});
$(".gem4").click(function(){
   	 console.log(gem4);
		return gem4
});
if((gem1 + gem2 +gem3+gem4) > randomNumber) {
	(consol.log('you lose');
}else if ((gem1 + gem2 +gem3+gem4) == randomNumber) {
	console.log ('you win');
}else{
	consol.log('keep going');
}