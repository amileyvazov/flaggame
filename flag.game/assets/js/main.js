const searchBtn=document.getElementById("search-btn");
const searchInp=document.getElementById("search-flag")
const imgItem=document.getElementById("img-item")

axios.get("https://restcountries.com/v3.1/all")
.then(res =>{
    let datas= res.data
    datas.forEach(el => {
        imgItem.innerHTML+=`<div class="row">
        <img scr="${el[i].flags.png}">
        <h5 class="title">${el[i].name}<h5>
        </div>

        `
    });
})

searchBtn.addEventListener("click", ()=>{
     
   axios.get("https://restcountries.com/v3.1/all").then(res=>{
    var datas=res.data;
    let searchInp=[]
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].name.toLowerCase().includes(searchInp.value.toLowerCase())) {
            newArr.push(datas[i])
        }
        
    }
   })

})

axios.get("https://restcountries.com/v3.1/all")
.then(res =>{
    let datas= res.data
    datas.forEach(el => {
        imgItem.innerHTML+=`<div class="row">
        <img scr="${el[i].flags.png}">
        <h5 class="title">${el[i].name}<h5>
        </div>

        `
    });
})
