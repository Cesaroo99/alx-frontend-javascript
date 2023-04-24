export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const std = listStd.filter((student) => student.location === city);
  for (const student of std) {
    student.grade = 'N/A';
  }
  const newStd = std.map((student) => {
    const single = student;
    for (const grade of newGrades) {
      if (single.id === grade.studentId) {
        single.grade = grade.grade;
      }
    }
    return single;
  });
  return newStudents;
}
