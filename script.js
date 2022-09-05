const passwordgenerator = (num) =>{
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    senha = ''
    for(let i = 0; i<num; i++){
        /* senha.concat(characters[random(0, characters.length-1)]) */
        senha += characters[(random(0, characters.length-1))]
    }
    console.log(senha);
}
