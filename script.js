const itemsLogos = ['javascript', 'html', 'css', 'github', 'react', 'angular', 'gulp', 'sass', 'vue', 'javascript', 'html', 'css', 'github', 'react', 'angular', 'gulp', 'sass', 'vue'];

let items = [...document.querySelectorAll('.item')];

const startTime = new Date().getTime();

let activeItem = '';
const activeItems = [];

const gamePairs = itemsLogos.length/2;
let gameResult = 0;

function clicked() {
    
    activeItem = this;
    if(activeItem == activeItems[0]) //jeśli ktoś dwa razy kliknie w to samo konczymy dzialanie funkcji
        return;
    
    activeItem.classList.remove('hidden');
    
    if(activeItems.length === 0) { //sprawdza czy jest to pierwsze kliknięcie 
        activeItems[0] = activeItem;
        return;
    }
    
    else {              //sprawdza czy to drugie kliknięcie
        items.forEach(item => {
            item.removeEventListener('click', clicked)  // usuwam możliwość kliknięcia jeśli to drugie
        })
        activeItems[1] = activeItem;
        
        setTimeout(function() {//opóżnia wyświetlenie żeby można było zobaczyć kart
            
               if(activeItems[0].className === activeItems[1].className) { //porównuje dwa kliknięte lementy czy są takie same
                    activeItems.forEach(item => {
                    item.classList.add('completed'); 
                    })   
                    gameResult++;
                   
                    /*console.log(items);
                    items = items.filter(item => {
                       1;
                    });
                   
                   console.log(items);*/
                    if(gameResult == gamePairs) { //sprawdza czy gra już jest wygrana
                        const endTime = new Date().getTime();
                        const gameTime = (endTime - startTime)/1000;
                        alert(`Wygrana! Czas gry: ${gameTime} sekund`)
                        location.reload(); //zacznij gre                     
                    }
                   
                } else {
                    activeItems.forEach(item => {
                        item.classList.add('hidden');
                    })
                }
            
                activeItem = '';  //resetuje nam aktywne katy po zakończeniu pojedynczej gry
                activeItems.length=0;

                items.forEach(item => {   //dodaje znów nasłuchiwacza 
                    item.addEventListener('click', clicked);
                })    

                }, 500)
     
    }
}

function start() {
    items.forEach(item => {
        const logoIndex = Math.floor(Math.random()*itemsLogos.length);
        item.classList.add(itemsLogos[logoIndex]);
        itemsLogos.splice(logoIndex, 1);
    })
    
    setTimeout(function() {
        items.forEach(item => {
            item.classList.add('hidden')
            item.addEventListener('click', clicked)
        })
    }, 2000)
};

start();