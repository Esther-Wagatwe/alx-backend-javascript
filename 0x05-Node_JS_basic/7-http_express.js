const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.send('This is the list of our students\n');
    return;
  }

  const filePath = path.resolve(database);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.send('This is the list of our students\nCannot load the database');
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

    let response = 'This is the list of our students\n';
    response += `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(response.trim());
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
