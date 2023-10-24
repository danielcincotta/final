
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