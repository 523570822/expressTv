const mysql = require('mysql')
var num=0;

/*  let connection = mysql.createConnection({
    host: '59.110.18.65',
    user: 'rxm_db',
    password: '2x1CpGT2C5URxfSE',
    database: 'test',
    port: '3306'
  });*/

    var pool  = mysql.createPool({
        connectionLimit : 10,
        host            : '59.110.18.65',
        user            : 'rxm_db',
        password    : '2x1CpGT2C5URxfSE',
        database: 'test',
        port: '3306'
    });
   /* var pool  = mysql.createPool({
        connectionLimit : 10,
        host            : '192.168.1.222',
        user            : 'root',loginbyemail
        password    : 'root',
        database: 'test',
        port: '3306'
    });*/
    // 连接公用方法
    var query=function(sql,options,callback){
        pool.getConnection(function(err,conn){
            if(err){
                callback(err,null,null);
            }else{
                conn.query(sql,options,function(err,results,fields){
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    callback(err,results,fields);
                });
            }
        });
    };
    var selectAll=function (sql,callback) {
        pool.getConnection(function(err,conn){
            if(err){
                callback(err,null,null);
            }else{
                conn.query(sql,function(err,results,fields){
                    //释放连接

                    conn.release();
                    //事件驱动回调
                    callback(err,results,fields);
                });
            }
        });
    };
    var insertData=function (table,options,callback) {
        pool.getConnection(function(err,conn){
            if(err){
                callback(err,null,null);
            }else{
                var fields = '';
                var values = '';
                for(var k in options) {

                    fields += k + ',';
                    values = values + "'" + options[k] + "',"
                }
                fields = fields.slice(0, -1);
                values = values.slice(0, -1);
                console.log(fields, values);
                var sql = "INSERT INTO " + table + '(' + fields + ') VALUES(' + values + ')';
                conn.query(sql,function(err,results,fields){
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    callback(err,results,fields);
                });
            }
        });
    };
var updateData=function (table, sets, where, callback) {
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            var _SETS = '';
            var _WHERE = '';
            var keys = '';
            var values = '';
            for(var k in sets) {
                _SETS += k + "='" + sets[k] + "',";
            }
            _SETS = _SETS.slice(0, -1);
            for(var k2 in where) {
                //  _WHERE+=k2+"='"+where[k2]+"' AND ";
                _WHERE += k2 + "=" + where[k2];
            }
            // UPDATE user SET Password='321' WHERE UserId=12
            //update table set username='admin2',age='55'   where id="5";
            var sql = "UPDATE " + table + ' SET ' + _SETS + ' WHERE ' + _WHERE;
            console.log(sql);
            conn.query(sql,function(err,results,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,results,fields);
            });
        }
    });
};
var deleteData=function (table,where,callback) {
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            var _WHERE = '';
            for(var k2 in where) {
                //多个筛选条件使用  _WHERE+=k2+"='"+where[k2]+"' AND ";
                _WHERE += k2 + "=" + where[k2];
            }
            // DELETE  FROM user WHERE UserId=12  注意UserId的数据类型要和数据库一致
            var sql = "DELETE  FROM " + table + ' WHERE ' + _WHERE;
            conn.query(sql,function(err,results,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,results,fields);
            });
        }
    });
};
let jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        console.info("==================");
        console.info(ret);
        res.json(ret);
    }
};
function handleError (err) {
    if (err) {
      console.info("=============错误了======");
      console.info(err.code);
      console.info(err);
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
}

//module.exports = pool;
exports.jsonWrite = jsonWrite;
exports.pool = pool;
exports.selectAll = selectAll;
exports.query = query;
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.updateData = updateData;
