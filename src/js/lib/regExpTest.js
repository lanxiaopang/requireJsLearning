/**
 * Created by sun on 2017/2/2.
 */
define(['jquery'], function () {
    var pattern  = /.at/,
        pattern1 = /.at/g,
        arr      = ["cct", "bat", "sat", "cat"],
        text     = "cct,bat,sat,cat",
        str      = "cctbatsatcat";
    var result, matches;

    /**
     * RegExp实例方法exec
     */
    function regExpExec() {
        result = pattern.exec(str);
        console.info(result);
    }

    /**
     * RegExp实例方法test
     * 用于判断
     */
    function regExpTest() {
        result = pattern.test(str);
        console.info(result);
    }

    /**
     *
     * @param [RegExp] pattern  to test
     * @param [Array] arr   a array to be tested
     * @return {string} result a string include result
     */
    function arrTest(pattern,arr) {
        result = [];
        for (var prop in arr) {
            if (pattern.test(arr[prop])) {
                result = result.concat(arr[prop]);
            }
        }
        return result.join(" ");
    }

    /**
     * 字符串的正则用法 search replace match split
     */
    function stringSearch() {
        console.info(text.search(pattern));
    }

    /**
     * 字符串的正则用法 replace
     */
    function stringReplace() {
        console.info("hello world".replace(/world/, "my friend!"));
    }

    /**
     * 字符串的正则用法 match
     */
    function stringMatch() {
        //一定要用全局搜索/g
        matches = text.match(pattern1);

        for (var name in matches) {
            console.info(matches[name]);
        }

        /*for(var i = 0;i<matches.length;i++){
         console.info(matches[i]);
         }*/

    }


    return {
        "regExpExec": regExpExec,
        "regExpTest": regExpTest,
        "arrTest": arrTest,

        "stringSearch": stringSearch,
        "stringReplace": stringReplace,
        "stringMatch": stringMatch
    };
});
