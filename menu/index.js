const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Delicia Mediterránea",
    category: "Dinner",
    price: 35.99,
    img: "./images/item-10.jpeg",
    desc: `Disfruta de una exquisita cena inspirada en los sabores mediterráneos. Este menú incluye una entrada de ensalada griega fresca con pepino, tomate, aceitunas y queso feta, aderezada con aceite de oliva y hierbas aromáticas.`,
  },
  {
    id: 11,
    title: "Chocolate Decadence",
    category: "dessert",
    price: 8.99,
    img: "./images/item-11.jpg",
    desc: `Indulge in the ultimate chocolate experience with our "Chocolate Decadence" dessert. This rich and luxurious creation features layers of velvety dark chocolate mousse and moist chocolate cake, all enrobed in a smooth and glossy chocolate ganache. `,
  }
];


const SectionCenter = document.querySelector(".section-center")
const btnContainers = document.querySelector(".btn-container")

window.addEventListener('DOMContentLoaded',()=>{
  dibujaItemsMenu(menu)
  dibujaMenuBtns()
  
})

function dibujaItemsMenu(menuItems){
  let dibujaItems = menuItems.map(function(items){
    
    return `<article class="menu-item">
    <img src="${items.img}" class="photo" alt="${items.title}">
    <div class="item-info">
        <header>
            <h4>${items.title}</h4>
            <h4 class="price">${items.price}</h4>

        </header>
        <p class="item-text" >${items.desc}</p>
    </div>
</article>`
  })
  dibujaItems = dibujaItems.join("")
  SectionCenter.innerHTML = dibujaItems
}

function dibujaMenuBtns(){
  const categories = menu.reduce(function(values, item){
    
    if (!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  },
  ['all']
  )
  const categoryBtns = categories.map(function(category){
    return `
    <button class="filter-btn" type="button" data-id=${category}>${category}</button>
    `
  }).join("")
  btnContainers.innerHTML = categoryBtns
  const filterBtns    = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      const category      = e.currentTarget.dataset.id 
      const menuCategory  = menu.filter(function(menuItem){
        if (menuItem.category === category)
          {
            return menuItem
          }
      })
      if(category==='all'){
        dibujaItemsMenu(menu)
      }else{
        dibujaItemsMenu(menuCategory)
      }
    })
  })
}