let texto = document.getElementById('texto');
let caracteres = document.getElementById('caracteres');

texto.addEventListener('keyup', function(){
        caracteres.innerText = texto.value.length;
    }
)