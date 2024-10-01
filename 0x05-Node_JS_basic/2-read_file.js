/* eslint-disable no-param-reassign */
const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8').trim().split('\n');
  const header = data.shift().split(',');
  const studentFields = header.slice(0, -1);

  const fieldGroups = data.reduce((groups, line) => {
    const student = line.split(',');
    const studentPropertyVal = student.slice(0, -1);
    const field = student[student.length - 1];
    groups[field] = groups[field] || [];
    groups[field].push(
      Object.fromEntries(studentFields.map((field, i) => [field, studentPropertyVal[i]])),
    );
    return groups;
  }, {});

  const totalStudents = Object.values(fieldGroups).reduce(
    (total, group) => total + group.length, 0,
  );
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(fieldGroups)) {
    if (group.length > 0) {
      console.log(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
    }
  }
};

module.exports = countStudents;
