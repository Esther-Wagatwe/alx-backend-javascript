interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Mary',
    lastName: 'Ann',
    age: 20,
    location: 'Nairobi'
}

const student2: Student = {
    firstName: 'John',
    lastName: 'Mark',
    age: 30,
    location: 'Kisumu'
}

const studentsList: Array<Student> = [student1, student2];

function renderTable(students: Array<Student>): void {
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';

    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const th1 = document.createElement('th');
    th1.innerText = 'First Name';
    th1.style.border= '1 px solid black';
    const th2 = document.createElement('th');
    th2.innerText = 'Location';
    th2.style.border= '1 px solid black';
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);

    students.forEach((student) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerText = student.firstName;
        cell2.innerText = student.location;

        cell1.style.border = '1px solid black';
        cell2.style.border = '1px solid black';
    });

    document.body.appendChild(table);

}
    renderTable(studentsList);