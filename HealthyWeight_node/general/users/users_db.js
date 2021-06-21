var express = require('express');
var generalDb = require('../../General_DB.js');


// insert details to users database
module.exports.InsertData = (user)=>{
    let Sql= "INSERT INTO users (`id`,`name` , `email` , `gender`, `age` , `height` , "+
                " `weight` , `password`) VALUES ( Null , '"+user.name+ "',"+
                " '" +user.email+ "', '"+user.platform+" ' ,'" +user.age+ "', '" +user.height+ "', '" +user.weight+ "',"+
                " '" +user.password+ "');";
    let DbResult=  generalDb.DbQuery(Sql);
    return  DbResult;
}

//update details to users database
module.exports.UpdateData = (user)=>{
    let Sql= "UPDATE INTO users SET `name` ='"+user.name+"', `email` = '"+user.email+"',"+
              "`age` = '"+user.age+"' , `height` = '"+user.height+"' , `weight` = '"+user.weight+"',"+
              "`password` ='"+user.password+"', `confirm_password` = '"+user.confirm_password+"',"+
              "WHERE `email` like '" + user.email+"'";
    let DbResult= generalDb.DbQuery(Sql)
      return DbResult;
 }

module.exports.GetUserData =  (field, value)=>{
    let Sql= "SELECT name, email , age , height , weight , password "+
             " FROM users WHERE "+field+" LIKE '"+value+"';";
    let DbResult= generalDb.DbQuery(Sql)
    return  DbResult;
}


module.exports.GetUserDataByEmail = (email) =>{
    let Sql =   "SELECT * FROM `users` WHERE `email` like '"+ email +"';";
    let DbResult= generalDb.DbQuery(Sql)
    return  DbResult;
}

