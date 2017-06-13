
var http = require("http"); // Tạo server 
var url = require("url"); // Lấy data url
var fs = require("fs"); // đọc, ghi, tạo file


/*------------------------------------------------------------\
|       yargs
\------------------------------------------------------------*/
var yargs = require("yargs"); // Truyền dữ liệu qua các file js
// VD: node index.js a b c d --ten Baoloc
console.log(yargs.argv); // return all
console.log(yargs.argv._); // return [a,b,c,d]
console.log(yargs.argv.$0); //return index.js

// Modun yargs options
var get_yargs = yargs.command("get",  "get list", function(yargs){
    return yargs.option({
        username : {
        demand: true
    },
    pass : {
        demand : true
    }
    })

}).argv

/*------------------------------------------------------------\
|       node-persist
\------------------------------------------------------------*/
var storage = require("node-persist") // tạo bộ nhớ lưu trữ cục bộ session
//Khởi tạo
storage.initSync({"dir" : "path/save", "ttl" : false});
//tạo khóa
storage.setItemSync("keyname", "value");
// xem
storage.getItemSync("keyname");
// xóa
storage.removeItemSync("keyname");
// xóa all
storage.clear();