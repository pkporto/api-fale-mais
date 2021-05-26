import 'reflect-metadata';
import '@shared/typeorm'
import app from "./server";





app.listen(7777 || process.env.PORT , ()=>{
    console.log('Running on 7777');
});