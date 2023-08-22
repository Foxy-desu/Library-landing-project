
(function sliderHandlerAdaptive () {
    // находим размеры всех элементов и присваиваем новые в зависимости от ширины блока с каруселью
        const images = document.querySelectorAll('.about__slider-img');
        const slider = document.querySelector('.slider-js');
        const sliderLine = document.querySelector('.slider-line-js');
        const paginationButtonBlock = document.querySelector('.slider-pagination');
        const buttonsArray = document.querySelectorAll('.pagination-element-wrap')
        
        let width;
        let columnGap = 25;
        let itemWidth;
        let selectedButton;
        let offset = 0;
    // настраиваем перелистывание изображений
        function imagesRoll() {
            paginationButtonBlock.addEventListener('click', function(event) {
                selectedButton = event.target.closest('div');

                for (let i = 0; i < 3; i++) {
                    buttonsArray.forEach((element, index) => {
                    element.firstElementChild.classList.remove('current');
                    if (selectedButton == element) {
                        element.firstElementChild.classList.add('current');
                        offset = (itemWidth * index)
                            if (offset != 0) {
                                offset = (itemWidth * index) + (columnGap * index);
                            }
                        sliderLine.style.transform = `translate(${-offset}px)`
                    }
                    })
                }  
            });
        }
        function sliderMouseweel() {
            slider.addEventListener('wheel', function(event) {
                const line = event.deltaY;
                if (line > 0) {
                    offset = offset + itemWidth + columnGap;
                    if (offset >= ((itemWidth * 3) + (columnGap * 2))) {
                        offset = (Number(sliderLine.style.width.slice(0, -2)) - ((itemWidth * 3) + (columnGap * 2)))
                    };

                }
                else if (line < 0) {
                    offset = offset - itemWidth - columnGap;
                    if (offset < 0) offset = 0;
                }

                sliderLine.style.transform = `translate(${-offset}px)`;
    
                // console.log(`Event deltaY: ${event.deltaY}\n Offset: ${ sliderLine.style.transform}\n Item width: ${itemWidth}\n Column gap: ${columnGap}`)
                event.preventDefault();

                function buttonsColorChange() {


                    if (offset === 0) {
                        buttonsArray.forEach(element => {
                            element.firstElementChild.classList.remove('current');
                        })
                        document.querySelector('.pagination-1').firstElementChild.classList.add('current');
                    }

                    else if (offset === (itemWidth + columnGap)) {
                        buttonsArray.forEach(element => {
                            element.firstElementChild.classList.remove('current');
                        })
                        document.querySelector('.pagination-2').firstElementChild.classList.add('current');
                    }

                    else if (offset === ((itemWidth + columnGap) * 2)) {
                        buttonsArray.forEach(element => {
                            element.firstElementChild.classList.remove('current');
                        })
                        document.querySelector('.pagination-3').firstElementChild.classList.add('current');
                    }
                };

                buttonsColorChange();
            });
        };
        function init() {
            console.log('resize');
            width = slider.offsetWidth;
            console.log(width);
            columnGap = Math.round(width * 0.018);
            itemWidth = ((width - (columnGap * 2)) / 3) // у нас 3 видимых элемента в блоке
            
            images.forEach(item => {
                item.style.width = `${itemWidth}px`
                item.style.height = 'auto';
            }) 
            
            sliderLine.style.width = `${(itemWidth * images.length) + (columnGap * 4)}px`; // у нас в блоке определенное кол-во изображений шириной, зависящей от ширины блока карусели ОТСТУПЫ НЕ ВХОДЯТ ВАУ
            sliderLine.style.gap = `${columnGap}px`;
        };

        window.addEventListener('resize', init);
        init();
        imagesRoll();
        sliderMouseweel();


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

    

}());

