interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome = () : string => 'Working from home';
    getCoffeeBreak = () : string => 'Getting a coffee break';
    workDirectorTasks = () : string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
    workFromHome = () : string => 'Cannot work from home';
    getCoffeeBreak = () : string => 'Cannot have a break';
    workTeacherTasks = () : string => 'Getting to work'
}

const createEmployee = (salary: number | string): Teacher | Director => {
    if (typeof salary === 'number' && salary <= 500) {
        return new Teacher();
    }
    return new Director();
}

const isDirector = (employee: Director | Teacher): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Teacher | Director): void => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
    console.log(employee.workTeacherTasks());
    }
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects):string => {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}

// const employee1 = createEmployee(200);
// const employee2 = createEmployee(1000);
// console.log(createEmployee('$500'));

// if (isDirector(employee1)) {
//     console.log(employee1.workDirectorTasks()); // This line won't execute
// } else {
//     console.log(employee1.workTeacherTasks()); // Getting to work
// }

// if (isDirector(employee2)) {
//     console.log(employee2.workDirectorTasks()); // Getting to director tasks
// }

// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));

// teachClass('Math');
// teachClass('History');
