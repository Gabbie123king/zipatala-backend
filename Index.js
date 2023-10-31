const express = require('express');
const app = express();
const facilities = require('./facilities/routes');
const { addDistrict } = require('./facilities/queries');
const port = 5000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/v1/facilities", facilities);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
