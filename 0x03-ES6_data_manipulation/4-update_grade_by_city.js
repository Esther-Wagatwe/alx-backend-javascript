export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id) || defaultGrade;
      return {
        ...student,
        grade: grades.grade,
      };
    });
}
