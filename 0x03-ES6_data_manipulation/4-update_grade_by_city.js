/** Create a function updateStudentGradeByCity
that returns an array of students for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String)
and newGrades (Array of “grade” objects) as parameters.
If a student doesn’t have grade in newGrades, the final grade should be N/A.* */
export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrade.find((grade) => grade.studentId === student.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...student, grade };
    });
}
