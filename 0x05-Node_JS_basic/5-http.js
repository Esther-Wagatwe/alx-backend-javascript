const http = require('http');
const { readFile } = require('fs');

const hostAddress = '127.0.0.1';
const hostPort = 1245;

function parseStudentData(filePath) {
  const studentData = {};
  const courseCounts = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(filePath, (err, fileContent) => {
      if (err) {
        reject(err);
      } else {
        let resultOutput = '';
        const fileLines = fileContent.toString().split('\n');
        fileLines.forEach((line) => {
          if (line) {
            totalStudents += 1;
            const studentDetails = line.toString().split(',');
            const course = studentDetails[3];

            if (studentData[course]) {
              studentData[course].push(studentDetails[0]);
            } else {
              studentData[course] = [studentDetails[0]];
            }

            if (courseCounts[course]) {
              courseCounts[course] += 1;
            } else {
              courseCounts[course] = 1;
            }
          }
        });

        const studentCount = totalStudents - 1;
        resultOutput += `Number of students: ${studentCount}\n`;
        Object.entries(courseCounts).forEach(([course, count]) => {
          if (course !== 'field') {
            resultOutput += `Number of students in ${course}: ${count}. `;
            resultOutput += `List: ${studentData[course].join(', ')}\n`;
          }
        });

        resolve(resultOutput);
      }
    });
  });
}

const serverApp = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    parseStudentData(process.argv[2].toString()).then((studentOutput) => {
      const trimmedOutput = studentOutput.slice(0, -1);
      res.end(trimmedOutput);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

serverApp.listen(hostPort, hostAddress, () => {});

module.exports = serverApp;
