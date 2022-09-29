var ocult0 = document.querySelector('.ocultar0');
var ocult1 = document.querySelector('.ocultar1');
var ocult2 = document.querySelector('.ocultar2');
var ocult3 = document.querySelector('.ocultar3');
var ocult4 = document.querySelector('.ocultar4');
var ocult5 = document.querySelector('.ocultar5');
var ocult6 = document.querySelector('.ocultar6');
var ocult7 = document.querySelector('.ocultar7');
var ocult8 = document.querySelector('.ocultar8');
var botao = document.getElementById('btproximo');
var botao2 = document.getElementById('btanterior');
ocult0.style.display= 'block';
ocult1.style.display= 'none';
ocult2.style.display= 'none';
ocult3.style.display= 'none';
ocult4.style.display= 'none';
ocult5.style.display= 'none';
ocult6.style.display= 'none';
ocult7.style.display= 'none';
ocult8.style.display= 'none';

/*botão próximo */
botao.addEventListener('click',function(){

    if(ocult0.style.display == 'block'){
        ocult0.style.display = 'none';
        ocult1.style.display ='block';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
        
    }else if(ocult1.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='block';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
        
    }else if(ocult2.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'block';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult3.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'block';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult4.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'block';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult5.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'block';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult6.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'block';
        ocult8.style.display= 'none';
    }else if(ocult7.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'block';
    }else if(ocult8.style.display=='block'){
        ocult0.style.display ='block';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else{
        ocult0.style.display ='block';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';

    }
})
/*fim botão próximo */

/*botão Anterior*/
botao2.addEventListener('click',function(){

    if(ocult8.style.display == 'block'){
        ocult0.style.display = 'none';
        ocult1.style.display ='none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'block';
        ocult8.style.display= 'none';
        
    }else if(ocult7.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'block';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
        
    }else if(ocult6.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'block';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult5.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'block';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult4.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'block';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult3.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='block';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult2.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'block';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult1.style.display=='block'){
        ocult0.style.display ='block';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';
    }else if(ocult0.style.display=='block'){
        ocult0.style.display ='none';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'block';
    }else{
        ocult0.style.display ='block';
        ocult1.style.display= 'none';
        ocult2.style.display='none';
        ocult3.style.display= 'none';
        ocult4.style.display= 'none';
        ocult5.style.display= 'none';
        ocult6.style.display= 'none';
        ocult7.style.display= 'none';
        ocult8.style.display= 'none';

    }
})
/*fim botão Anterior */

