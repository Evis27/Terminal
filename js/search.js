const search = () =>{
    const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
    console.print('test')
    const storeitems = document.getElementById("town")
    const towns = document.querySelectorAll("row featurette")
    const tname = document.getElementsByTagName("h2")

    for(var i=0; i < tname.length;i++){
        let match = towns[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                towns[i].style.display = "";
            }else{
                towns[i].style.display = "none";
            }
            
        }

    }
}