    let add = document.getElementById("increment");
    let remove = document.getElementById("decrement");

    let int = document.getElementById("number");
    let integer = 0;

    add.addEventListener('click', function(){
        console.log("geklikt");

        integer+= 1;

        if(integer == 11 ) {
            integer = 0
        }

        int.innerText = integer

      
    })
    
    
    