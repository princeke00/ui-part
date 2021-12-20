const person = {
    firstName: "Mohammed",
    greeting: function() {
        alert('Hi! I\m ' + this.firstName + '.');
    }
};

document.write(person.firstName + " ");
console.log(person.greeting());