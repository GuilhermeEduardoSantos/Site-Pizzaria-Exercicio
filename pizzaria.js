
   
var elementos = document.querySelectorAll('.menu-lista div ');
var sabor= "";




for(var i = 0;i<elementos.length;i++){
    elementos[i].addEventListener('click',(t)=>{
    sabor =  t.target.getAttribute('opt');

        if(sabor!="carne"){
            pcarnes.classList.remove('show')
           pcarnes.classList.add('hide')



        }


    }
    
    
    )}