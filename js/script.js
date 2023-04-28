

/* ----- MENU-SECTION ----- */

const card = document.getElementById("menuCard")

const productos = [
    {
        img:"./assets/img/sushi.png",
        titulo:"FURIKAKE",
        descripcion:"The furikake is the most juicy sushi roll",
        precio:" $15.00"
    },

    {
        img:"./assets/img/california.png",
        titulo:"CALIFORNIA",
        descripcion:"California is the most juicy sushi roll",
        precio:"$ 20.00",
    }, 

    {
        img:"./assets/img/sushi4.png",
        titulo:"NIGURI",
        descripcion:"The Niguri is the most juicy sushi roll",
        precio:" $45.00",
    },

    {
        img:"./assets/img/sake.png",
        titulo:"SAKE",
        descripcion:"The sake is the most juicy sushi roll",
        precio:" $55.00",
    }, 

    {
        img:"./assets/img/sushi3.png",
        titulo:"SASHIMI",
        descripcion:"The Sashimi is the most juicy sushi roll",
        precio:" $60.00",
    },
    {
        img:"./assets/img/sushi3.png",
        titulo:"SASHIMI",
        descripcion:"The Sashimi is the most juicy sushi roll",
        precio:" $60.00",
    },
    {
        img:"./assets/img/sushi3.png",
        titulo:"SASHIMI",
        descripcion:"The Sashimi is the most juicy sushi roll",
        precio:" $60.00",
    },
    {
        img:"./assets/img/sushi3.png",
        titulo:"SASHIMI",
        descripcion:"The Sashimi is the most juicy sushi roll",
        precio:" $60.00",
    },
]

for(const producto of productos){
    card.innerHTML += `
    <div class="card">                
             <img src="${producto.img}" alt="imagen de producto">
             <h3>${producto.titulo}</h3>
             <p>${producto.descripcion}</p>
             <h4>${producto.precio}</h4>
    </div>   
    `
}

/* -----RESERVATION-FORM----- */

/* const $formulario = document.querySelector("#reservationForm")

$formulario.addEventListener("submit", handleSubmit)

function handleSubmit(event){

    event.preventDefault()
    const form = new FormData(this.)
} */


//obtener datos del formulario, guardarlos y mostrarlos por html

const reservas = []

const formulario = document.getElementById("reservationForm")
const reservationCardConteiner = document.getElementById("reservationCardConteiner")

const renderizarReservas = () => {
    reservationCardConteiner.innerHTML = ""  //resetea el contenedor para que no se muestre lo anterior TODO**
    
    for(const reserva of reservas){
        
        reservationCardConteiner.innerHTML +=  `

        
        <p>Your reservation for ${reserva.cant} people has been successfully registered. 
        <p>the waiter will call him by the name yu have been gave to us: ${reserva.name} </p>
        <p>If we have any questions we will contact you at ${reserva.mail}. </p>
        <p> <span class="spanText"> See you on  ${reserva.date}. </span></p>
      
        `
        
    }
    
}




formulario.addEventListener("submit", (event) => {
    event.preventDefault()
     
   /*  console.log(formulario.name.value)
    console.log(formulario.mail.value)
    console.log(formulario.date.value)
    console.log(formulario.cant.value) 
     */
    
    reservas.push({
        name: formulario.name.value,
        mail:formulario.mail.value,
        date: formulario.date.value,
        cant:formulario.cant.value
    })
    formulario.reset()
    
    renderizarReservas(reservas[reservas.length -1])
    
    
})


