/* Crear una funcion que reciba dos parametros: 'user' y 'password'. Usando SWITCH mostrar en consola los siguientes mensajes, según corresponda:
1.- "Bienvenido a nuestro sitio!", (si el usuario es "admin" y la contraseña es 1234)
2.- Contraseña incorrecta
3.- Usuario incorrecto
4.- Usuario y Contraseña incorrectos
5.- Debe ingresar los datos requeridos */

function login(user, password){

    switch (true) {
        case user == null && password == null:
            return("Debe ingresar los datos requeridos");
        break
        case user =="admin" && password == 1234 :
            return("Bienvenido a nuestro sitio!");
        break
        case user == "admin" && password != 1234 :
            return("Contraseña incorrecta");
        break
        case user != "admin" && password == 1234 : 
        return("Usuario incorrecto");
        break
        case user != "admin" && password != 1234 :
            return("Usuario y Contraseña incorrectos");
        break
    }
}

console.log(login("admin",1234))
console.log(login("admin",1235))
console.log(login("administrador",1234))
console.log(login("sfnub", 43921))
console.log(login(null, null))
