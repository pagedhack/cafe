        var bConsultar = document.getElementById("consultar")

        bConsultar.addEventListener("click", function () {
            axios.get("https://cafesus-despliegue-production-1e7c.up.railway.app/reservaciones")
                .then(function (response) {
                    console.log(response);
                    tabla(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    
        function tabla(response) {
            const myObj = JSON.parse(JSON.stringify(response));
            console.log(myObj)
            let text = "<table class='table'><tbody>"
                text += "<thead><th>ID</th><th>Fecha</th><th>Hora</th><th>Personas</th><th>Nombre</th><th>Correo</th><th>Telefono</th></thead>"
            for (let x in myObj) {
                text += "<tr><td>" + myObj[x].id + "</td><td>" + myObj[x].fecha + "</td><td>" + myObj[x].hora + "</td><td>" + myObj[x].persona + "</td><td>" + myObj[x].nombre + "</td><td>" + myObj[x].correo + "</td><td>" + myObj[x].telefono + "</td></td>";
            }
            text += "</tbody></table>"    
            document.getElementById("usuarios").innerHTML = text;
        }