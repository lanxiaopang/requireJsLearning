/**
 * Created by Administrator on 2017/2/6.
 */
define(["underscore"],function (_) {
    var use ={
        /**
         *
         * @param {object} obj
         * @param {string} prop
         */
        propertyUse :function(obj,prop){
            return console.info(_.map(obj,_.property(prop)));
            //console.info(_.map({name:"sun",age:29}), _.property("name"));
        },
        reduceUse: function () {
            /**
             * @description 迭代两次，注意arguments ，从2开始迭代，因为送了第三个参数默认值100
             */
            console.info(_.reduce([ 2, 25], function (x, y) {
                console.info(x,y,arguments);
                return x / y
            },100));
            /**
             * @description 迭代两次，从2开始，第一个100不迭代，因为没送第三个参数
             */
            console.info(_.reduce([100, 2, 25], function (x, y) {
                console.info(x,y,arguments);
                return x / y
            }));
        }
    };
    return use;
});


