class Person {
    constructor(firstName, lastName, age, gender,dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.dob=dob;
    }
    // combining fisrtname and lastname
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getDetails() {
      return   `Person - Name: ${this.getFullName()},
         Age: ${this.age},
         Gender: ${this.gender}
         Date of Birth :${this.dob}`;
    }
  }
  
  // Creating an object of Person
  const person1 = new Person('Brindha', 'selavaraj', 20, 'female','25-03-2003');
  
  // Displaying details
  console.log(person1.getDetails());
  