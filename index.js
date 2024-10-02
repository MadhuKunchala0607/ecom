
var emp=[]
var sum=0
var c=0
async function ecom(){
    var api=await fetch("https://fakestoreapi.com/products")
    var apiData=await api.json()
    arr=apiData.map((product)=>{
        var cont=document.getElementById("cont")
        var card=document.createElement("div")
        var title=document.createElement("h2")
        var img=document.createElement("img")
        var price= document.createElement("h2")
        var add=document.createElement("button")
        var cart =document.getElementById("cart")
        var count=document.getElementById("count")

        
        console.log(count)

    title.innerText=product.title
    img.src=product.image
    // console.log(img)
    price.innerText="$ "+product.price
    add.innerText="add to cart"

    add.addEventListener("click",()=>{
        alert(product.title+" is added to cart")
        sum+=Number(product.price)
        c++
        count.innerText=c
        console.log(sum)
        emp.push({
            title:product.title,
            img:product.image,
            price:product.price,
            tot:sum
        })
        localStorage.setItem("ecom",JSON.stringify(emp) )
    })
    cart.addEventListener("click",()=>{
        window.open("cart.html","_self")
    })

    

   card.append(title,img,price,add)
   card.className="card"

   cont.appendChild(card)
   cont.className="cont"





    })
}
ecom()