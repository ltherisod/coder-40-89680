const productos =[
{
    // id:'01', NO LO SUBIMOS A FIREBASE
    name:"Random 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis",
    stock:50,
    price:25000,
    category:"nuevos",
    img: "https://picsum.photos/200"

},
{
    id:'02',
    name:"Random 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis",
    stock:30,
    price:75000,
    category:"mas vendidos",
    img: "../img/darth-vader.png"

},
{
    id:'03',
    name:"Random 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis",
    stock:20,
    price:65000,
    category:"ofertas",
    img: "https://i.postimg.cc/CK30CyTZ/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp"

},
{
    id:'04',
    name:"Random 4",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis",
    stock:10,
    price:55000,
    category:"ofertas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&"

}
]

let error = false
export const getProducts = ()=> {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=>{
            if(error){
                //rechazar
                reject('Hubo un error intente mas tarde')
            }else{
                //resolver
                resolve(productos)
            }
        },2000)
    })
}

export const getOneProduct = (id)=> {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=>{
            if(error){
                //rechazar
                reject('Hubo un error intente mas tarde')
            }else{
                //resolver
                let found = productos.find((item)=> item.id === id)
                resolve(found)
            }
        },2000)
    })
}