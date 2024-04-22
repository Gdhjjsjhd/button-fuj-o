function fuja(){
    var botaoNao = document.getElementById('nao');
    
    var largurajanela =  window.innerHeight;
    var alturajanela =  window.innerHeight;

    var maxX =    largurajanela - botaoNao.offsetWidth;
    var maxY =    alturajanela - botaoNao.offsetHeight;

    var aleatoriaX = Math.floor(Math.random () * maxX)
    var aleatoriaY = Math.floor(Math.random () * maxY)

    botaoNao.style.left = aleatoriaX + "px";
    botaoNao.style.top = aleatoriaY + "px";
}