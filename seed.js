/**
 * Created by Administrator on 2017/2/3.
 */
requirejs.config({
    paths: {
        /*第三方库路径配置*/
        "jquery":           "vendor/jquery/dist/jquery",
        "underscore":       "vendor/underscore/underscore",
        "lodash":           "vendor/lodash/lodash",
        /*自己类库路径配置*/
        "js":               "app/js",
        "lib":              "app/js/lib",
        "grammer":          "app/js/grammer",
        "underscore-use":   "app/js/underscore",
        "lodash-use":       "app/js/lodash"
    }
});
require(["js/main","js/config"], function () {
});