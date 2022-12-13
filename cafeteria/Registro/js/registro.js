var bRegistro = document.getElementById("regis");
            bRegistro.addEventListener ("click", function () {
                
                let usuario = document.getElementById("usuario").value;
                let password = document.getElementById("password").value;
                let nombre = document.getElementById("nombre").value;
                let correo = document.getElementById("correo").value;
                axios.post("https://cafesus-despliegue-production-1e7c.up.railway.app/registro", {
                usuario : usuario,
                password : password,
                nombre : nombre,
                correo : correo
                })
                .then (function (response) {
                    swal("Bienvenido!", "", "");
                    window.open("../log/index-log.html", "_self")
                })
                .catch(function (error) {
                    console.log(error)
                })
            })
