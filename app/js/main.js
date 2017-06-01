/**
 * Created by Administrator on 2017/2/3.
 */
//
define(function (require) {
    var $          = require("jquery");
    var regExpTest = require("js/regExpTest");
    var u          = require("underscore-use/underscoreUse");
    var singleton  = require("designPattern/singletonPattern");
    // var s = require("grammer/switchCase");
    // var l = require("lodash-use/lodashUse");
    // var _ = require("lodash");
    /**
     * 测试页面初始化是否可行
     */
    
    function initTest() {
        $(document).ready(function () {
            alert("Congratulations!jquery loaded successfully!");
        });
    }
    
    /**
     * 测试正则表达式
     */
    function reguarExpressionTest() {
        var arr         = ['cct', 'bat', 'cat', 'sat'],
            str         = "aatbatcattat",
            addressText = "Send personal email to "
                + "ben@forta.com or ben.forta@forta.com.For questions about a book "
                + "use supprot@forta.com. If your message is urgent try ben@urgent.forta.com. Feel"
                + "free to send unsolicited email to spam@forta.com (wouldn't it be nice if spam@forta.com "
                + "(wouldn't it be nice if it were that simple,huh?)",
            pattern     = /.at/g,
            pattern1    = /at./g,
            pattern2    = /[\w.]+\@[\w.]+\.[\w.]+/g,
            pattern3    = /[\w.]+\@[\w.]+\.\w+/g,
            out;
        
        
        out = regExpTest.arrMatch(arr, pattern);
        console.info(out);
        
        regExpTest.multipleReturnPlace(pattern1, str);
        
        
        console.info(pattern3.exec(addressText));
        console.info(pattern3.test("supprot@forta.com."));
        regExpTest.multipleReturnPlace(pattern2, addressText);
        regExpTest.multipleReturnPlace(pattern3, addressText);
        regExpTest.multipleReturnPlace(/a+/g, "caaaaaad");
        console.info(pattern2.exec(addressText));
    }
    
    /**
     * switchcase 渗透测试
     */
    function swithcaseTest() {
        // s();
    }
    
    /**
     * underscore用法测试
     */
    function underscoreUseTest() {
        var obj = {
            name: "sun",
            age: 29,
            hobbies: ["play", "code"],
            experience: {
                study: ["senior", "college", "self"],
                work: ["loose", "hard", "harder"]
            }
        };
        u.propertyUse(obj, "study");
    }
    
    function regExpUseTest() {
        var str = "123\123";
        regExpTest.checkNumCapsCharactor(str);
    }
    
    
    /**
     * 入口方法
     */
    (function () {
        //swithcaseTest();
        //underscoreUseTest();
        //u.reduceUse();
        var person1 = singleton.getInstance("Wang");
        var person2 = singleton.getInstance("Sun");
        console.info(person1 === person2);
    })();
});
