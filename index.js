const express = require('express');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const generatUUID = function () {
    return uuidv4();
};

const generateJWT = function () {
    return jwt.sign({ foo: 'bar' }, 'secret_key_or_private_key'); // , { algorithm: 'RS256'}
};

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/token', (req, res) => {
    const uuid = generatUUID();
    const token = generateJWT();
    res.json({uuid, token});
});

app.get('/token-redirect-success', (req, res) => {
    console.log('Success: ', req.headers);
    const uuid = req.headers['uuid'];
    const token = req.headers['token'];
    res.set('uuid', uuid);
    res.set('token', token);
    res.send({success: true, uuid, token});
});

app.get('/token-redirect', (req, res) => {
    const uuid = generatUUID();
    const token = generateJWT();
    res.set('uuid', uuid);
    res.set('token', token);
    res.redirect(302, '/token-redirect-success');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})