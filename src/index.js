import {config} from 'dotenv';
import {insertData,findStudentByName,updateStudentByName,deleteByname} from './crudOperations.js';

config();

//insertData("aaa",{name:"ali",lastName:"olleik"});

//console.log(await findStudentByName("aaa","olleik"));

//updateStudentByName("aaa","olleik","kasem");

deleteByname("aaa","ali")


