const express = require('express');

const app = express();

app.get('/',(Request,Response) => {
    // return Response.send('Alo KATIUSHA')
    return Response.json({
         evento:'Estudo',
         aluno:'Harodo'
        });     
});
app.listen(3333);

