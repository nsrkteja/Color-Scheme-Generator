const color = document.getElementById("color")
const scheme = document.getElementById("scheme")
const form = document.getElementById("form")

document.body.addEventListener("load",function(e){
    const apiurl = `https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome&count=5`
    renderColor(apiurl)
})

form.addEventListener("submit",function(e){
    e.preventDefault()
    const apiurl = `https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${scheme.value}&count=5`
    renderColor(apiurl)
})


function renderColor(apiUrl){
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const colorsArr = data.colors.map(color =>{
                return `
                    <div class="inBox">
                        <div class="col" style="background-color:${color.hex.value}"></div>
                        <p>${color.hex.value}</p>
                    </div>
                `
            })
            document.getElementById("box").innerHTML = colorsArr.join("")     
        } )
}
