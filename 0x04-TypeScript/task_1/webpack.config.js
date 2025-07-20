interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Feven",
  lastName: "Gebremichael",
  age: 21,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "rediet",
  lastName: "mamo",
  age: 999,
  location: "arbaminch",
};

const studentsList: Student[] = [student1, student2];
