/**
 * Created by Administrator on 2017/2/6.
 */
define(["lodash"],function (_) {
    var use ={
        /**
         *
         * @desciption before是只能点三下
         */
        beforeUse :function(){
            var n = 0;
            var func = _.before(3,function(){
                alert(++n);
            });
            $("#add").on("click",func);
        },
        /**
         *
         * @desciption after是点三下之后才执行
         */
        afterUse :function(){
            var n = 0;
            var func = _.after(3,function(){
                alert(++n);
            });
            $("#add").on("click",func);
        },
    };
    return use;
});


