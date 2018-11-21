const itemsLogos = ['javascript', 'html', 'css', 'github', 'react', 'angular', 'gulp', 'sass', 'vue', 'javascript', 'html', 'css', 'github', 'react', 'angular', 'gulp', 'sass', 'vue'];

let items = [...document.querySelectorAll('.item')];

const startTime = new Date().getTime();

let activeItem = '';
const activeItems = [];

const gamePairs = itemsLogos.length/2;
let gameResult = 0;

function clicked() {
    
    activeItem = this;
    if(activeItem == activeItems[0]) //if someone clicks on clicked item end 'clicked' function to prevent double click on the same item
        return;
    
    activeItem.classList.remove('hidden');
    
    if(activeItems.length === 0) { //to check if it's a first click
        activeItems[0] = activeItem;
        return;
    }
    
    else {                         //second click
        items.forEach(item => {
            item.removeEventListener('click', clicked)  // remove 'clicked' function if it's a second click
        })
        activeItems[1] = activeItem;
        
        setTimeout(function() {                       //to show clicked item for a while before executing next step
            
               if(activeItems[0].className === activeItems[1].className) { //to check if clicked items are the same
                    activeItems.forEach(item => {
                    item.classList.add('completed'); 
                    })   
                    gameResult++;
                   
                    /*console.log(items);
                    items = items.filter(item => {
                       1;
                    });
                   
                   console.log(items);*/
                    if(gameResult == gamePairs) {                       //to check if game is over
                        const endTime = new Date().getTime();
                        const gameTime = (endTime - startTime)/1000;
                        alert(`Wygrana! Czas gry: ${gameTime} sekund`)
                        location.reload();                              //start new game after game over
                    }
                   
                } else {
                    activeItems.forEach(item => {
                        item.classList.add('hidden');
                    })
                }
            
                activeItem = '';                                      //reset active items after one mini game
                activeItems.length=0;

                items.forEach(item => {   
                    item.addEventListener('click', clicked);
                })    

                }, 500)
     
    }
}

function start() {
    items.forEach(item => {                                          //create new items position
        const logoIndex = Math.floor(Math.random()*itemsLogos.length);
        item.classList.add(itemsLogos[logoIndex]);
        itemsLogos.splice(logoIndex, 1);
    })
    
    setTimeout(function() {                                          //show all items for a while before game will started
        items.forEach(item => {
            item.classList.add('hidden')
            item.addEventListener('click', clicked)
        })
    }, 1000)
};

start();