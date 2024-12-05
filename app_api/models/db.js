var mongoose=require('mongoose');
var dbURI = 'mongodb+srv://toprakyvz:toprak123@mekanbul.aafab.mongodb.net/?retryWrites=true&w=majority&appName=mekanbul';


mongoose.connection.on("connected", function(){
    console.log(dbURI + "adresindeki veritabanına bağlandı");
});

mongoose.connection.on("disconnected", function(){
    console.log("adresindeki veritabanı bağlantısı koptu");
});

process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Bağlantı kesildi");
    process.exit(0);
});
require('./venue');