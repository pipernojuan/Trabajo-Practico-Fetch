
// Ejemplo Práctico de Fetch


let url = 'https://jsonplaceholder.typicode.com/users'
fetch (url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch (error => console.log(error))

const mostrarData = (data) =>{
    console.log (data)
}