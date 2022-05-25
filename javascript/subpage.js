let input = document.getElementById("find");
let rice = document.getElementsByClassName("box");
input.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') {
        search()
    }
});
function search(){
    let userInput = input.value.replace(/ /g,"")
    console.log(userInput);
    
    if(userInput == ""){
        for(let i = 0; i<rice.length; i++){
            rice[i].style.display = "block"
        }
    }else{
        for(let i = 0; i<rice.length; i++){
            if(rice[i].id.includes(userInput)){
                rice[i].style.display = "block"
            }else{
                rice[i].style.display = "none"
            }
        }
    }
}
