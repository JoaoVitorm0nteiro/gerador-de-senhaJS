const btn = document.querySelector("#send")
btn.addEventListener("click", function (e) {
    e.preventDefault()
    const input = document.querySelector("#valor")
    const formatedinpt = parseInt(input.value)
    //console.log(typeof formatedinpt);
    
    const passwordgenerator = (formatedinpt) =>{
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        senha = ''
        for(let i = 0; i<formatedinpt; i++){
            senha.concat(characters[random(0, characters.length-1)]) 
            senha += characters[(random(0, characters.length-1))]
        }
        const result = document.querySelector("#senha")
        result.innerText = senha
        
        

    }
    passwordgenerator(formatedinpt)
})
 
