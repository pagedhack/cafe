var rRegistro = document.getElementById("reservar");
            rRegistro.addEventListener ("click", function () {
                
                let fecha = document.getElementById("fecha").value;
                let hora = document.getElementById("hora").value;
                let persona = document.getElementById("persona").value;
                let nombre = document.getElementById("nombre").value;
                let correo = document.getElementById("correo").value;
                let telefono = document.getElementById("telefono").value;
                axios.post("https://cafesus-despliegue-production-1e7c.up.railway.app/reservacion-log", {
                fecha : fecha,
                hora : hora,
                persona : persona,
                nombre : nombre,
                correo : correo,
                telefono : telefono
                })
                .then (function (respuesta) {
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error)
                })
            })