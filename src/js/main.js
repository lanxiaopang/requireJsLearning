/**
 * Created by sun on 2017/2/2.
 */
define(['lib/regExpTest', 'reg/multipleResult'], function (regExpTest, multipleResult) {
    var pattern = /.at/,
        arr     = ["cct", "bat", "sat", "cat"];

    /**
     * 循环一下比较好，分有参数没参数两种
     */
    /*for (var prop in regExpTest) {
        if (typeof (regExpTest [prop]) == "function") {
            if (regExpTest[prop].length) {
                console.info(regExpTest[prop](pattern, arr));
            } else {
                regExpTest[prop]();
            }
        }
        console.info("\n");
    }*/

    /**
     * 写一堆感觉好low
     */
    /*regExpTest.regExpExec();
     console.info("\n");
     regExpTest.regExpTest();
     console.info("\n");
     console.info("***********");
     console.info(regExpTest.arrTest(pattern,arr));
     console.info("***********");

     regExpTest.stringSearch();
     console.info("\n");
     regExpTest.stringMatch();
     console.info("\n");
     regExpTest.stringReplace();
     console.info("\n");*/

    multipleResult.multipleFind1();
    multipleResult.multipleFind2();

});