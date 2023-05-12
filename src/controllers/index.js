module.exports =  (_req, res) => {
    const page = require('fs').readFile('./src/pages/index.html', (err, data) => {
        res.write(data);
        res.end();
    });
}