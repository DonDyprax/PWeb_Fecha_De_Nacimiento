
// Object Literal
var person = {
    /* property: value*/
    name: "Néstor",
    lastname: "Aldana",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1994, 0
    , 11); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5)), `000000${i}`));
}

console.table(list);

// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));

// Get average age
console.log("Average age %i", list.reduce((sum, {
    birthday
}) => {
    //Se puede reutilizar la funcion de getAge en lugar de escribir el mismo codigo dos veces
    return getAge(birthday) + sum;
}, 0) / list.length);


// More readable

function getAge(birthday) {
    //Se obtiene el timestamp (fecha en milisegundos) del tiempo transcurrido entre la fecha actual y el cumpleaños
    var ageDifMs = Date.now() - birthday;
    //Se traduce el timestamp de la diferencia de tiempo transcurrido entre la fecha actual y la fecha de cumpleaños
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    //Se obtiene la edad actual (sin validar fechas)
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    //Validando si la fecha de cumpleaños es antes o despues del dia/mes actual
    if(ageDate.getMonth > Date.now().getMonth || (ageDate.getMonth == Date.now().getMonth && ageDate.getDate > Date.now().getDate)){
        return age - 1;
    }
    return age;
}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);
