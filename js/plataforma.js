

window.onload = function() {
    mostrarVideo('https://www.youtube.com/embed/T4t00Hd3qZc?si=ZPylBShuEI-O3bGS');
    check2.disabled=true;
    check3.disabled=true;
    document.getElementById("video1").classList.add("video");
};

function mostrarVideo(url, style) {
    event.preventDefault();
    document.getElementById('videoFrame').src = url;
    
    if(style == '1'){
        document.getElementById("video1").classList.add("video");
        document.getElementById("video2").a
    }else{
        document.getElementById("video1").classList.remove("video");
    }
    if(style == '2'){
        document.getElementById("video2").classList.add("video");
    }else{
        document.getElementById("video2").classList.remove("video");
    }
    if(style == '3'){
        document.getElementById("video3").classList.add("video");
    }else{
        document.getElementById("video3").classList.remove("video");
    }
}


let check1 = document.getElementById("check1"),
    check2 = document.getElementById("check2"),
    check3 = document.getElementById("check3"),
    progressBar = document.getElementById("progressBar");


    function actualizarProgreso() {
        let progreso = 0;
    
        if (check1.checked) {
            progreso += 1 / 3;
    
            if (check2.checked) {
                progreso += 1 / 3;
                check1.disabled = true;
            } else {
                check1.disabled = false;
            }
    
            if (check3.checked) {
                progreso += 1 / 3;
                check1.disabled = true;
                check2.disabled = true;
                // Swal.fire({
                //     position: 'center',
                //     title: 'Felicitaciones!',
                //     text:' Has completado satisfactoriamente el modulo Online del Curso de Desarrollo Web. Nos vemos en la 2da clase!',
                //     icon:'sucess',
                //     showConfirmButton: true,
                //     customClass: {
                //         popup: 'swal2-noanimation', // Evita que SweetAlert añada espacio en blanco
                //         content: 'swal2-noanimation' // Evita que SweetAlert añada espacio en blanco
                //     }
                // });
                alert("Felicitaciones! Has completado satisfactoriamente el modulo Online del Curso de Desarrollo Web. Nos vemos en la 2da clase!")
            } else {
                check2.disabled = !check1.checked; // Asegura que check2 no esté marcado si check1 no lo está
            }
        } else {
            check2.disabled = true;
            check3.disabled = true;
        }
    
        progressBar.style.width = `calc(${progreso * 100}%)`;
    }
    
    check1.addEventListener("change", () => {
        check2.disabled = !check1.checked;
        check3.disabled = !check1.checked;
        if(check1.checked){
            check3.disabled = !check2.checked;
        }
        actualizarProgreso();
    });
    
    check2.addEventListener("change", () => {
        check3.disabled =!check2.checked;
        actualizarProgreso();
    });
    
    check3.addEventListener("change", () => {
        actualizarProgreso();
    });

    /* sweet alert */

    