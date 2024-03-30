
const form = document.querySelector(".form_fale_conosco")
const mascara = document.querySelector(".mascara_formulario")
      
    function mostrarForm(){
        form.style.left = "50%"
        form.style.transform = "translateX(-50%)"
        mascara.style.visibility = "visible"
    }

    function esconderForm(){
        form.style.left = "-300px"
        form.style.transform = "translateX(0)"
        mascara.style.visibility = "hidden"
    }
