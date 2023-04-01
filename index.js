let container = document.querySelector('.section2')

let Myntraitems = [{ name: 'Casual Shirt', img: 'images/1.jpg' },
{ name: `Men's Polo`, img: 'images/2.jpg' },
{ name: 'Suit', img: 'images/3.jpg' },
{ name: 'Office Suit', img: 'images/4.jpg' },
{ name: `Men's Watch`, img: 'images/5.jpg' },
{ name: `Men's Boot`, img: 'images/6.jpg' },
{ name: 'Combo Deal', img: 'images/7.jpg' },
{ name: 'Combo Deal', img: 'images/7.jpg' }
]

let generateshopitems = () => {
    container.innerHTML = Myntraitems.map((x) => {
        let {name,img}=x
        return `<div>
        <img src=${img}>
        <p>${name}</p>

    </div>`


    }).join('')
}
generateshopitems();


