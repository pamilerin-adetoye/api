// console.log('we are all set');

fetch('myimg.jpg')
.then(response =>{ 
    response.blob();
    console.log(response);
}) 
.then(data => {
    console.log(data);
})