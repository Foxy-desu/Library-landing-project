
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

(function burgerHandler(){
    const burgerButton = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header-menu');
    const burgerClsoseButton = document.querySelector('.header__nav-close');
    const burgerMenuArray = document.querySelectorAll('.header-menu__option');

    // open burger menu
    burgerButton.addEventListener('click', ()=> {
        burgerMenu.classList.add('header-menu-active');
    })

    // close burger menu by clicking on close button
    burgerClsoseButton.addEventListener('click', ()=> {
        burgerMenu.classList.remove('header-menu-active');
    })

    // close burger menu after clicking menu option
    burgerMenuArray.forEach(element => {
        element.addEventListener('click', ()=> {
            burgerMenu.classList.remove('header-menu-active');
        })
    })

    // close burger menu by clicking anywhere but the menu block
    window.addEventListener ('click', (event)=> {
        if(burgerMenu.classList.contains('header-menu-active') && 
        event.target !== burgerButton &&
        event.target !== burgerMenu) {
            burgerMenu.classList.remove('header-menu-active');
        }
    }, true)
})();

(function profileButtonHandler() {
    // popup blocks
    const semiTransparentScreen = document.querySelector('.popup');
    const logInPopup = document.querySelector('.popup__log-in-card');
    const registerPopup = document.querySelector('.popup__register-card');
    const userProfilePopup = document.querySelector('.popup__profile-card');
    const buyCardPopup = document.querySelector('.popup__buy-card');

    const popupCloseButtons = document.querySelectorAll('.close-button');

    // blocks hich depend on authorisation



    const findYourLibraryCard = document.getElementById('non-authorized');
    const yourLibraryCard = document.getElementById('authorized');

    // profile dropdown menu
    const openNonAuthMenu = document.querySelector('.header-profile__caption');
    const nonAuthProfile = document.querySelector('.header-profile__dropdown-menu');
    const logInButton = document.querySelector('.dropdown-menu__option.log-in-option');
    const logInFormButton = document.querySelector('.log-in-form__button')
    const registerButton = document.querySelector('.dropdown-menu__option.register-option');
    const registerFromLogIn = document.querySelector('.log-in-form__wrap .register-option__link')
    const logInFromRegister = document.querySelector('.register-form__wrap .log-in-option')
    const registerFormButton = document.querySelector('.register-form__button');
    const libraryCardSignUp = document.querySelector('.library-cards__account-button.sign-up-button');
    const libraryCardLogIn = document.querySelector('.library-cards__account-button.log-in-button');

    const openAuthMenu = document.querySelector('.header-profile__caption_auth');
    const authProfile = document.querySelector('.header-profile__dropdown-menu_auth');
    const myProfileButton = document.querySelector('.my-profile-option');
    const logOutButton = document.querySelector('.log-out-option');
    const libraryCardProfButton = document.querySelector('.library-cards__account-button.profile-button')

    const bookBuyButton = document.querySelectorAll('.book-info__buy-button');

    // actions handler

    function favBooksBuyCheck() {
        if (openAuthMenu.style.display === 'block') {
            bookBuyButton.forEach((element) => {
                if (element.hasAttribute('data-isown')) {
                    element.setAttribute('data-isown', 'true')
                    element.textContent = 'Own';
                }
            })
        }

        else { bookBuyButton.forEach((element) => {
            if (element.hasAttribute('data-isown')) {
                element.setAttribute('data-isown', 'false');
                element.textContent = 'Buy';
            }
        })

        }
    };

    favBooksBuyCheck();
    window.addEventListener('click', favBooksBuyCheck);
    

    popupCloseButtons.forEach(element => {
        element.addEventListener('click', ()=> {
            element.parentElement.style.display = 'none';
            semiTransparentScreen.style.display = 'none';    
        });
    });

    openAuthMenu.addEventListener ('click', ()=> {
        if (semiTransparentScreen.style.display === 'none') {
            authProfile.style.display = 'block';
        }
    });

    myProfileButton.addEventListener('click', () => {
        semiTransparentScreen.style.display = 'flex';
        userProfilePopup.style.display = 'flex';
        authProfile.style.display = 'none';
    });

    libraryCardProfButton.addEventListener('click', () => {
        semiTransparentScreen.style.display = 'flex';
        userProfilePopup.style.display = 'flex';
        authProfile.style.display = 'none';
        registerPopup.style.display = 'none';
    });

    libraryCardSignUp.addEventListener('click', () => {
        semiTransparentScreen.style.display = 'flex';
        registerPopup.style.display = 'flex';
        nonAuthProfile.style.display = 'none';
    });

    libraryCardLogIn.addEventListener('click', () => {
        semiTransparentScreen.style.display = 'flex';
        logInPopup.style.display = 'flex';
        nonAuthProfile.style.display = 'none';
    });

    logOutButton.addEventListener('click', () => {
        openAuthMenu.style.display = 'none';
        openNonAuthMenu.style.display = 'block';
        yourLibraryCard.style.display = 'none';
        findYourLibraryCard.style.display = 'flex';
    });

    openNonAuthMenu.addEventListener ('click', ()=> {
        if (semiTransparentScreen.style.display === 'none') {
            nonAuthProfile.style.display = 'block';
        }
    });

    logInButton.addEventListener('click', () => {
        semiTransparentScreen.style.display = 'flex';
        logInPopup.style.display = 'flex';
        nonAuthProfile.style.display = 'none';
    });

    logInFormButton.addEventListener('click', () => {
        openNonAuthMenu.style.display = 'none';
        openAuthMenu.style.display = 'block';
        findYourLibraryCard.style.display = 'none';
        yourLibraryCard.style.display = 'flex';
        semiTransparentScreen.style.display = 'none';
        logInPopup.style.display = 'none';

    });

    registerFromLogIn.addEventListener('click', () => {
        // semiTransparentScreen.style.display = 'flex';
        logInPopup.style.display = 'none';
        registerPopup.style.display = 'flex';

    });

    registerButton.addEventListener('click', () => {
        semiTransparentScreen.style.display = 'flex';
        registerPopup.style.display = 'flex';
        nonAuthProfile.style.display = 'none';
    });

    registerFormButton.addEventListener('click', () => {
        openNonAuthMenu.style.display = 'none';
        openAuthMenu.style.display = 'block';
        findYourLibraryCard.style.display = 'none';
        yourLibraryCard.style.display = 'flex';
        semiTransparentScreen.style.display = 'none';
        logInPopup.style.display = 'none';

    });

    logInFromRegister.addEventListener('click', () => {
        // semiTransparentScreen.style.display = 'flex';
        registerPopup.style.display = 'none';
        logInPopup.style.display = 'flex';

    });

    




        



})();

(function copyCardNumber(){
    const cardNumberOutput = document.querySelector('#user-card-number');
    const copyButton = document.querySelector('.copy-ico__button');

    // copyButton.addEventListener('click', ()=> {
    //     const range = document.createRange();
    //     range.selectNode(cardNumberOutput);
    //     window.getSelection().removeAllRanges();
    //     window.getSelection().addRange(range);
    //     document.execCommand("copy");
    //     window.getSelection().removeAllRanges();
    // });
    

    Navigator.clipboard.writeText(cardNumberOutput.innerText).then(function() {
            console.log('Text copied to clipboard');
        }).catch(function(error) {
            console.error('Error:', error);
        });
    
    
    
        
} 
)(); 