const express = require('express');
const app = express();

app.use(require('./router/router'))

const port = process.env.port || 4000
app.listen(port, () => {
    console.log(`listening port ${port}`);
});

