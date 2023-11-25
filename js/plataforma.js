document.addEventListener("DOMContentLoaded", function() {

    const estadoGuardado = localStorage.getItem('estadoEstudiante');

    if (estadoGuardado) {
        const estadoEstudiante = JSON.parse(estadoGuardado);
        check1.checked = estadoEstudiante.checks.check1;
        check2.checked = estadoEstudiante.checks.check2;
        check3.checked = estadoEstudiante.checks.check3;
        progressBar.style.width = `calc(${estadoEstudiante.progreso * 100}%)`;

        const videoSeleccionado = estadoEstudiante.videoSeleccionado || 'https://www.youtube.com/embed/T4t00Hd3qZc?si=ZPylBShuEI-O3bGS';
        mostrarVideo(videoSeleccionado);
    } else {
        // Si no hay estado guardado, mostrar el primer video por defecto
        mostrarVideo('https://www.youtube.com/embed/T4t00Hd3qZc?si=ZPylBShuEI-O3bGS');
        calcularProgreso();
    }

    check2.disabled = true;
    check3.disabled = true;
    document.getElementById("video1").classList.add("video");
});

function mostrarVideo(url, style) {
    event.preventDefault();
    document.getElementById('videoFrame').src = url;
    
    if(style == '1'){
        document.getElementById("video1").classList.add("video");
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
    guardarEstado({ videoSeleccionado: url });
}

function guardarEstado() {
    const estadoEstudiante = {
        checks: {
            check1: check1.checked,
            check2: check2.checked,
            check3: check3.checked,
        },
        progreso: calcularProgreso(),
        ...opciones,
    };

    localStorage.setItem('estadoEstudiante', JSON.stringify(estadoEstudiante));
}

let check1 = document.getElementById("check1"),
    check2 = document.getElementById("check2"),
    check3 = document.getElementById("check3"),
    progressBar = document.getElementById("progressBar");


    function calcularProgreso() {
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
                // Mostrar mensaje cuando se completa el curso
                Swal.fire({
                    title: 'Felicitaciones',
                    text: 'Has completado satisfactoriamente el módulo Online del Curso de Desarrollo Web. Nos vemos en la 2da clase!',
                    icon: 'success',
                    confirmButtonText: 'Entendido'
                });
            } else {
                check2.disabled = !check1.checked;
            }
        } else {
            check2.disabled = true;
            check3.disabled = true;
        }
    
        progressBar.style.width = `calc(${progreso * 100}%)`;
        return progreso;
    }
    
    check1.addEventListener("change", () => {
        check2.disabled = !check1.checked;
        check3.disabled = !check1.checked;
        if (check1.checked) {
            check3.disabled = !check2.checked;
        }
        guardarEstado();
    });
    
    check2.addEventListener("change", () => {
        check3.disabled = !check2.checked;
        guardarEstado();
    });
    
    check3.addEventListener("change", () => {
        guardarEstado();
    });

    