
// Create a parent class called school
class School {
  constructor(name, level,numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

// create getters to grab the properties of this class
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
// create conditional statement to return number of students, if it's a 
number, else - return an invalid input
  set numberOfStudents(value){
    if(typeof value == number){
      this._numberOfStudents = value;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a 
Number.')
    }
  }

// method to log a message of the school name, num of students, and their 
level
 quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students 
at the ${this.level} school level.`)
  }

  // random substitute teacher generator
  static pickSubstituteTeacher(substituteTeachers){
    let randomInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomInt];

  }  
}


// create a primary class 
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

// add getter for the pickup policy
get pickupPolicy(){
    return this._pickupPolicy;
  }  
}

// create a high school class 
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high school', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  // add getter for sports teams
  get sportsTeams(){
    return this._sportsTeams;
  }
}

// create a new object for primary schoool 
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 
'Students must be picked up by a parent, guardian, or a family member over 
the age of 13.');

//call the quick facts method on the lorraine instance
lorraineHansbury.quickFacts();


const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou 
Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// create a new object for high schoool 
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 
'Basketball', 'Volleyball', 'Track and Field']);

// return values of the sports team for the alSmith variable
console.log(alSmith.sportsTeams);

