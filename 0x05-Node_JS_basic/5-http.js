const http = require('http');
const countStudents = require('./3-read_file_async');

const serverHost = '127.0.0.1';
const serverPort = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let studentInfo = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((msg) => {
        studentInfo += msg;
        res.end(studentInfo);
      })
      .catch((err) => {
        studentInfo += err.message;
        res.end(studentInfo);
      });
  }
});

app.listen(serverPort, serverHost, () => {
  console.log(`Server running at http://${serverHost}:${serverPort}`);
});

module.exserverPorts = app;
