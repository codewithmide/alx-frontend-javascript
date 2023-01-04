// Create two students
var studentOne = {
    firstName: 'Olumide',
    lastName: 'Micheal',
    age: 23,
    location: 'Lagos'
};
var studentTwo = {
    firstName: 'Tolulope',
    lastName: 'Micheal',
    age: 25,
    location: 'Canada'
};
// create an array named studentsList containing the two variables
var studentsList = [studentOne, studentTwo];
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
table.style.width = '100%';
table.style.background = '#34ebeb';
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCol = document.createElement('td');
    var locationCol = document.createElement('td');
    // Each row should contain the first name of the student and the location
    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;
    row.appendChild(nameCol); // append the cell to the row
    row.appendChild(locationCol); // append the cell to the row
    tableBody.appendChild(row); // append the row to the tbody
});
table.appendChild(tableBody); // append the tbody to the table
document.body.appendChild(table); // append the table to the body
