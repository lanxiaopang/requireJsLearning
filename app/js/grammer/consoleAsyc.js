/**
 * Created by sun on 2017/6/12.
 */
define(function () {
    return function(){
        //chrome和Firefox会不同么？
        var obj = {};
        console.log(obj);
        obj.foo = 'bar';
    };
})
