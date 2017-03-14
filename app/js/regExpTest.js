/**
 * Created by Administrator on 2017/2/3.
 *
 */
define(function () {
    /**
     * @description 这是一个验证数组中每一项是否符合正则的例子
     * @param {Array} arr
     * @param {RegExp} pattern
     * @return {Array} result
     */
    function arrMatch(arr, pattern) {
        var result = [];

        for (var prop in arr) {
            if (arr[prop].match(pattern)) {
                result = result.concat(arr[prop]);
            }
        }
        return result;
    }

    /**
     * @description 这是一个验证字符串多返回的例子
     * @param pattern
     * @param item
     */
    function multipleReturnPlace(pattern, item) {
        var ret;
        while ((ret = pattern.exec(item)) != null) {
            console.info('"' + ret[0]
                + '" was found at:'
                + ret.index
                + ' for pattern "'
                + pattern + '"');
        }
    }

    /**
     * @description 适配数字，大写字母，以及英文符号
     * @param {string} item
     */
    function checkNumCapsCharactor(item) {
        //var pattern = new RegExp("^[\s `~!@#$%^&*()_+-={}[\\]:;\"'<>?,./|]+$");
        var pattern = new RegExp("^[0-9A-Z\]+$");
        if(pattern.test(item)){
            console.info("Matched!");
        }else{
            console.info("Not Matched!");
        }

    }

    return {
        "arrMatch": arrMatch,
        "multipleReturnPlace": multipleReturnPlace,
        "checkNumCapsCharactor": checkNumCapsCharactor
    };
});
