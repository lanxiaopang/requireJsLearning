/**
 * Created by sun on 2017/2/2.
 */
require.config({
    paths: {
        'jquery': '../vendor/jquery/dist/jquery',
        'lib': 'js/lib',
        'reg':'js/modual/RegExp'
    }
});
require(['js/main'], function () {});
/**
 * for test modual shortcart
 */
/*require(['js/main','m1/modual'], function () {});*/

