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

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary <= 500) {
        return new Teacher();
    }
    return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));