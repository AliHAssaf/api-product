var content = document.querySelector(".content");


var url = "https://fakestoreapi.com/products";
fetch(url).then(Response => {return Response.json()}).then(data =>{
    for(let i=0; i <= data.length; i++){
        content.innerHTML += `<div>
            <img src=${data[i].image}>
            <h1>${data[i].title}</h1>
            <h5>${data[i].price}</h5>
            <p>${data[i].description}</p>
            <button class= "info">Add to Caret</button>
        </div>`;
        var buttons = document.querySelectorAll("button");
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].addEventListener("click",() =>{
                console.log(data[j]);
            }); 
        }
    }
    })
.catch(error =>{

    console.log(error +" "+ typeof(error));
})