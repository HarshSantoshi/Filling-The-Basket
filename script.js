const button = $("#btn");
const basket = $("#basket");
const balls = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick' , 'crimson'];

button.click(function(){
    basket.append('<div class="ball" style="background-color: '+  balls[Math.floor(Math.random()*15)]+'"> </div>');
})



