'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');
console.log(tabItem)

tabItem.forEach(function(element){
    element.addEventListener('click', open);
})

function open(evt) {
    const tabTarget =evt.currentTarget;
    
    const button = tabTarget.dataset.button;
    console.log(button);
    

    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn-item--active');
    })

    tabContent.forEach(function(item) {
        item.classList.remove('tabs__content-item--active')
    })

    tabTarget.classList.add('tabs__btn-item--active');
    console.log(`#${button}`);
    document.querySelectorAll(`#${button}`).forEach(function(element) {
        element.classList.add('tabs__content-item--active');
      });
}