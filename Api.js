

let ApiLink = "https://fakestoreapi.com/products/"


fetch(ApiLink)
.then((data)=>{

    return data.json()

})

.then((objectData)=>{

    let api = document.querySelector(".api")

    objectData.forEach((a,b,c)=>{
        console.log(a);
        

        let dynamicTag = document.createElement("div")

        dynamicTag.innerHTML = `<h1>${a.title.slice(0,50)+"..."}</h1> <img src="${a.image}" alt="${a.catagory}"/> <p>${a.description.slice(0,60)+"..."}</p>`

        api.append(dynamicTag)
        

       

    })

})