
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
            selectedBlock.style.display = 'flex';
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

(function sliderMobile() {
     // находим размеры всех элементов и присваиваем новые в зависимости от ширины блока с каруселью
     const images = document.querySelectorAll('.about__slider-img_mob');
     const slider = document.querySelector('.about__slider_mob');
     const sliderLine = document.querySelector('.about__slider-images_mob');
     const paginationButtonBlock = document.querySelector('.slider-pagination_mob');
     const buttonsArray = document.querySelectorAll('.pagination-element-wrap_mob');
     const leftButton = document.querySelector('.slider-button__wrapper-left');
     const rightButton = document.querySelector('.slider-button__wrapper-right');
     
     let width;
     let columnGap = 25;
     let itemWidth;
     let selectedButton;
     let offset = 0;
 // настраиваем перелистывание изображений
     function imagesRollMob() {
         paginationButtonBlock.addEventListener('click', function(event) {
             selectedButton = event.target.closest('div');

             for (let i = 0; i < 5; i++) {
                 buttonsArray.forEach((element, index) => {
                 element.firstElementChild.classList.remove('current_mob');
                 if (selectedButton == element) {
                     element.firstElementChild.classList.add('current_mob');
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
        function buttonsColorChange() {

            if (offset === 0) {
                console.log(offset);
                buttonsArray.forEach(element => {
                    element.firstElementChild.classList.remove('current_mob');
                })

                document.querySelector('.pagination-1_mob').firstElementChild.classList.add('current_mob');
            }

            else if (offset === itemWidth + columnGap) {
                console.log(offset);
                buttonsArray.forEach(element => {
                    element.firstElementChild.classList.remove('current_mob');
                })

                document.querySelector('.pagination-2_mob').firstElementChild.classList.add('current_mob');
            }

            else if (offset === (itemWidth + columnGap) * 2) {
                console.log(offset);
                buttonsArray.forEach(element => {
                    element.firstElementChild.classList.remove('current_mob');
                })

                document.querySelector('.pagination-3_mob').firstElementChild.classList.add('current_mob');
            }

            else if (offset === (itemWidth + columnGap) * 3) {
                console.log(offset);
                buttonsArray.forEach(element => {
                    element.firstElementChild.classList.remove('current_mob');
                })

                document.querySelector('.pagination-4_mob').firstElementChild.classList.add('current_mob');
            }

            else {
                console.log(offset);
                buttonsArray.forEach(element => {
                    element.firstElementChild.classList.remove('current_mob');
                })

                document.querySelector('.pagination-5_mob').firstElementChild.classList.add('current_mob');
            }
    
        };

        function scrollOnButtonTap() {
            
            leftButton.addEventListener('click', ()=> {
                offset = offset - itemWidth - columnGap;
                if (offset < 0) offset = 0;
                sliderLine.style.transform = `translate(${-offset}px)`;
                buttonsColorChange();
            });

            rightButton.addEventListener('click', ()=> {
                offset = offset + itemWidth + columnGap;
                
                if (offset >= ((itemWidth * 5) + (columnGap * 4))) {
                    offset = (Number(sliderLine.style.width.slice(0, -2)) - (itemWidth * 1));
                };

                sliderLine.style.transform = `translate(${-offset}px)`;
                buttonsColorChange();
            });




        }

        function init() {
            console.log('resize');
            width = slider.offsetWidth || 450;
            console.log(width);
            columnGap = Math.round(width * 0.018);
            itemWidth = width // у нас 1 видимыq элемент в блоке
            
            images.forEach(item => {
                item.style.width = `${itemWidth}px`
                item.style.height = 'auto';
            }) 

            imagesRollMob();
            
            sliderLine.style.width = `${(itemWidth * images.length) + (columnGap * 4)}px`; // у нас в блоке определенное кол-во изображений шириной, зависящей от ширины блока карусели ОТСТУПЫ НЕ ВХОДЯТ ВАУ
            sliderLine.style.gap = `${columnGap}px`;
        };

        window.addEventListener('resize', init);
        init();
        imagesRollMob();
        scrollOnButtonTap();

})();
