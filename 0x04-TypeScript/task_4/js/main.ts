 /// <reference path="subjects/Teacher.ts"/>
 /// <reference path="subjects/Subject.ts"/>
 /// <reference path="subjects/Cpp.ts"/>
 /// <reference path="subjects/Java.ts"/>
 /// <reference path="subjects/React.ts"/>

 export const cpp = new Subjects.Cpp(); // Create a new Cpp object
 export const java = new Subjects.Java(); // Create a new Java object
 export const react = new Subjects.React(); // Create a new React object
 
 // Create a new C teacher object with experienceTeachingC = 10
 export const cTeacher : Subjects.Teacher = {
     firstName: "Olumide",
     lastName: "Micheal",
     experienceTeachingC: 10
 }
 
 console.log('C++');
 cpp.teacher = cTeacher; // Set the teacher of the Cpp object to the cTeacher object
 console.log(cpp.getRequirements()); // Print the list of requirements for Cpp
 console.log(cpp.getAvailableTeacher()); // Print the available teacher for Cpp
 
 console.log('Java');
 java.teacher = cTeacher; // Set the teacher of the Java object to the cTeacher object
 console.log(java.getRequirements()); // Print the list of requirements for Java
 console.log(java.getAvailableTeacher()); // Print the available teacher for Java
 
 console.log('React');
 react.teacher = cTeacher; // Set the teacher of the React object to the cTeacher object
 console.log(react.getRequirements()); // Print the list of requirements for React
 console.log(react.getAvailableTeacher()); // Print the available teacher for React