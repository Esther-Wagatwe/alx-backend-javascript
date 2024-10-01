const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      let responseMessage = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        responseMessage += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(responseMessage.trim());
    });
  });
}

module.exports = countStudents;
