/**
 * Created by sun on 2017/2/3.
 * @description:匹配单个字符，包括返回单个结果和多个结果的多种实现方式
 */
define([],function(){
    /**
     * 方式一  用match方法并配以/g全局搜索
     */
    function multipleFind1() {
        var text = "Hello,my name is Ben.Please visit my website";
        var p1 = /hello/;
        var p2 = /Hello/;
        var p3 = /my/;
        var p4 = /my/g;
        console.info(text.match(p1));
        console.info(text.match(p2));
        console.info(text.match(p3));
        console.info(text.match(p4));
    }
    /**
     * 方式二  用exec
     */
    function multipleFind2(){
        var myRe = /ab*/g;
        var str = 'abbcdefabh';
        var myArray;
        while ((myArray = myRe.exec(str)) !== null) {
            var msg = 'Found ' + myArray[0] + '. ';
            msg += 'Next match starts at ' + myRe.lastIndex;
            console.log(msg);
        }
//        结合 RegExp 字面量使用 exec() 捕获组
        var matches = /(hello \S+)/.exec('This is a hello world!');
        console.log(matches[1]);
    }
    return {
        "multipleFind1":multipleFind1,
        "multipleFind2":multipleFind2

    }
});
