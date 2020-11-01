//Creando servidor con express
const express=require('express');
const app= express();

//Entendiendo el package json
app.use(express.json())

//settings
app.set('appName','Tutorial')


//funcion de express 
/*app.all('/user',(req,res,next)=>{
    console.log('Por aqui paso');
    next();
})*/

//Ruta
app.get('/user',(req,res)=>{
    res.json({
        username:'Mirna',
        lastname:'Espinoza'
    });
});

app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params)
    res.send('POST REQUEST RECIVED');
});

app.put('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId',(req,res)=>{
    res.send(`User ${req.params.userId} delete`);
});

app.listen(3000,()=>{
    console.log(app.get('appName'))
    console.log('Server on port 3000');
});

app.use(express.static('probando'));//archivos 