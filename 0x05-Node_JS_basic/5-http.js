const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    if (database) {
      const filePath = path.resolve(database);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.end(`Cannot load the database: ${err.message}`);
        } else {
          const lines = data.split('\n').filter((line) => line.trim() !== '');
          const students = lines.slice(1).map((line) => line.split(',')[0]);
          const fields = lines.slice(1).map((line) => line.split(',')[3]);
          const fieldCounts = fields.reduce((acc, field) => {
            if (field) {
              acc[field] = (acc[field] || 0) + 1;
            }
            return acc;
          }, {});
          let response = `Number of students: ${students.length}\n`;
          for (const [field, count] of Object.entries(fieldCounts)) {
            response += `Number of students in ${field}: ${count}. List: ${students.filter((_, idx) => fields[idx] === field).join(', ')}\n`;
          }
          res.end(response.trim());
        }
      });
    } else {
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
