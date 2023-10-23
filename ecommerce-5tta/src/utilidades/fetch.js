const productos = [
    {
        id: 1,
        producto: "mouse",
        precio: 1000,
        categoria: "mouse",
        imagen: "../../../public/img/mouse.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur"
    },
    {
        id: 2,
        producto: "mouse",
        precio: 1500,
        categoria: "mouse",
        imagen: "../../../public/img/mouse.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 3,
        producto: "parlante",
        precio: 2000,
        categoria: "parlantes",
        imagen: "../../../public/img/parlante.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 4,
        producto: "parlante",
        precio: 2500,
        categoria: "parlantes",
        imagen: "../../../public/img/parlante.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 5,
        producto: "fuente",
        precio: 5000,
        categoria: "fuentes",
        imagen: "../../../public/img/fuente.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 6,
        producto: "fuente",
        precio: 5500,
        categoria: "fuentes",
        imagen: "../../../public/img/fuente.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 7,
        producto: "gabinete",
        precio: 6000,
        categoria: "gabinetes",
        imagen: "../../../public/img/gabinete.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 8,
        producto: "memorias",
        precio: 7000,
        imagen: "../../../public/img/memorias.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 9,
        producto: "placa de video",
        precio: 8000,
        imagen: "../../../public/img/placa.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    },
    {
        id: 10,
        producto: "monitor",
        precio: 9000,
        imagen: "../../../public/img/monitor.png",
        stock: 20,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro odit, necessitatibus maiores consectetur beatae pariatur natus architecto velit animi tempora earum asperiores, autem sit, quam quia ratione optio tenetur."
    }
]

const fetch = () => new Promise((res, rej) => {
    const condition = true
    if (condition) {
        setTimeout(() => {
            res(productos)
        }, 1000)
    } else {
        rej("error en la carga")
    }
})

export default fetch