(function sliderHandler() {

let offset = 0; //переменная хранит текущее смещение слайдера от левого края
const sliderLine = document.querySelector('.slider-line-js'); // контейнер с изображениями
const buttonOne = document.querySelector('.pagination-1'); //1 кнопка пагинации
const buttonTwo = document.querySelector('.pagination-2'); //2 кнопка пагинации
const buttonThree = document.querySelector('.pagination-3'); //3 кнопка пагинации

buttonOne.addEventListener('click', function(){
    offset = 0;
    sliderLine.style.left = - (offset) + 'px';
    
    if (!buttonOne.firstElementChild.classList.contains('current')) {
        buttonOne.firstElementChild.classList.add('current');
        if (buttonTwo.firstElementChild.classList.contains('current')) {
            buttonTwo.firstElementChild.classList.remove('current');
        }
        else {
            buttonThree.firstElementChild.classList.remove('current');
        }
    }
});

buttonTwo.addEventListener('click', function(){
    offset = 475;
    sliderLine.style.left = - (offset) + 'px';

    if (!buttonTwo.firstElementChild.classList.contains('current')) {
        buttonTwo.firstElementChild.classList.add('current');
        if (buttonThree.firstElementChild.classList.contains('current')) {
            buttonThree.firstElementChild.classList.remove('current');
        }
        else {
            buttonOne.firstElementChild.classList.remove('current');
        }
    }
    
});

buttonThree.addEventListener('click', function(){
    offset = (475 * 2);
    sliderLine.style.left = - (offset) + 'px'
    
    if (!buttonThree.firstElementChild.classList.contains('current')) {
        buttonThree.firstElementChild.classList.add('current');
        if (buttonOne.firstElementChild.classList.contains('current')) {
            buttonOne.firstElementChild.classList.remove('current');
        }
        else {
            buttonTwo.firstElementChild.classList.remove('current');
        }
    }
});

}());

(function favoritesPicksHandler() {
    function showBlockFor(element) {
        const elementKeyword = element.id.split('-')[1];
        const blocksArr = document.querySelectorAll('.favorites__books');
        
        for(let item of blocksArr) {
            // console.log(item);
            if (item.id.includes(elementKeyword)) {
                selectedBlock = item;
            }
        }

        if (window.getComputedStyle(selectedBlock).display === 'none') {
            selectedBlock.style.display = 'grid';
            for(let item of blocksArr) {
               if(!item.id.includes(elementKeyword)) item.style.display = 'none';
            
            }
        }
        
    }
    
    let selectedRadio;
    let selectedBlock;
    const radioParent = document.querySelector('.form-season__inputs');

    radioParent.onclick = function(event) {
        selectedRadio = event.target;
        if (selectedRadio.tagName == 'INPUT') {
            // console.log(selectedRadio);
            showBlockFor(selectedRadio);
        }   
    };

    

})();

