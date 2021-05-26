import 'reflect-metadata';
import '@shared/typeorm'
import app from "./server";





app.listen(process.env.PORT || 7777  , ()=>{
    console.log('Running on 7777');
});