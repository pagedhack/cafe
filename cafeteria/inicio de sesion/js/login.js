var bLogin = document.getElementById("log");
            bLogin.addEventListener ("click", function () {
                
                let usuario = document.getElementById("usuario").value;
                let password = document.getElementById("password").value;
                axios.post("https://cafesus-despliegue-production-1e7c.up.railway.app/login", {
                usuario : usuario,
                password : password,
                })
                .then (
                function (response) {
                    if (response.data.status == true) {
                        swal("Ingresando . . .","Cambiara a la Pagina Principal","success");
                        window.open("../log/index-log.html", "_self");
                    }
                    else{
                        swal("Error!","No se Encuentra el Usuario","error");
                        document.getElementById("usuario").value="";
                        document.getElementById("password").value="";
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
            })