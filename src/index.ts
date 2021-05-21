import 'reflect-metadata';
import '@shared/typeorm'
import app from "./server";





app.listen(7777, ()=>{
    console.log('Running on 7777');
});