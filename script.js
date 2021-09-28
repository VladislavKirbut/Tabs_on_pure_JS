window.addEventListener('DOMContentLoaded',function(){
  
'use strict';
let info = document.querySelector('.info-header'),
    tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTab(a){
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTab(1);

    function showTab(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }
  
    info.addEventListener('click', function(event){
      let target = event.target;
      if(target && target.classList.contains('info-header-tab')){
        for(let i = 0; i < tab.length; i++){
            if(target == tab[i]){
            hideTab(0);
            showTab(i)
        }
        }
      }
    });








});



