/**
 * Created by Administrator on 2017/2/6.
 */
define(function () {
    return function () {
        var a = 10;
        switch (a) {
            case 1:
            case 2:
            default:
                console.log('default');
            case 3:
                console.log('3');
                break;
            case 4:
                console.log('4');

        }
    };
});


