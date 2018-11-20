const itemsLogos = ['javascript', 'html', 'css', 'github', 'react', 'angular', 'gulp', 'sass', 'vue', 'javascript', 'html', 'css', 'github', 'react', 'angular', 'gulp', 'sass', 'vue'];

let items = [...document.querySelectorAll('.item')];

function clicked() {
    console.log('hura');
}

function start() {
    items.forEach(function(item){
        const logoIndex = Math.floor(Math.random()*itemsLogos.length);
        item.classList.add(itemsLogos[logoIndex]);
        itemsLogos.splice(logoIndex, 1);
    })
    
    setTimeout(function() {
        items.forEach(function(item) {
            item.classList.add('hidden')
            item.addEventListener('click', clicked)
        })
    }, 2000)
};

start();