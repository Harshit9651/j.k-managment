const express = require('express');
const app = express();
const axios = require('axios')
const bodyparser = require('body-parser');


app.listen(3000 ,()=>{
    console.log('app listen at port number 3000')
})