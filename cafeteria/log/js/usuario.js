        var bConsultar = document.getElementById("consultar")

        bConsultar.addEventListener("click", function () {
            axios.get("https://cafesus-despliegue-production-1e7c.up.railway.app/usuario")
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
                text += "<thead><th>ID</th><th>Usuario</th><th>Password</th><th>nombre</th><th>correo</th></thead>"
            for (let x in myObj) {
                text += "<tr><td>" + myObj[x].id + "</td><td>" + myObj[x].nombre + "</td><td>" + myObj[x].password + "</td><td>" + myObj[x].nombre + "</td><td>" + myObj[x].correo + "</td></td>";
            }
            text += "</tbody></table>"    
            document.getElementById("usuarios").innerHTML = text;
        }
    
        