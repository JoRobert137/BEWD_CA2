const express = require('express');
const app = express();

app.use(express.json());
PORT = 8000;

const userData = [];

app.post('/create-user', (req, res) => {
    const {username, email, password, dob} = req.body;

    if(!username){
        return res.status(400).send({message:"Username cannot be empty"});
    }
    if(!password){
        return res.status(400).send({message:"Password cannot be empty"});
    }
    if(!dob){
        return res.status(400).send({message:"date of birth cannot be empty"});
    }
    if(!(email.includes(".") && email.includes("@"))){
        return res.status(400).send({message:"Invalid email"});
    }
    if(password.length <= 8 || password.length >= 16){
        return res.status(400).send({message:"Password length should be greater than 8 or less than or equal to 16"});   
    }

    userData.push({
        username: username,
        email: email,
        password: password,
        dob: dob
    })

    return res.status(201).send({message:"User created Successfully", userData});
});

app.get('/', (req, res) => {
    return res.status({message:"hello"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})