class Teacher {
    public readonly firstName: string;
    public readonly lastName: string;
    public fullTimeEmployee: boolean;
    public yearsOfExperience?: number;
    public location: string;
    [key: string]: any;

    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        yearsOfExperience?: number,
        location: string
    ) {
        this.firstName = firstName;
        this.lastName =lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.yearsOfExperience = yearsOfExperience;
        this.location = location;
    }
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName:string): string
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}
interface Student {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return `${this.firstName}`;
    }
}


const teacher3: Directors = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    numberOfReports: 17,
  };
console.log(teacher3);