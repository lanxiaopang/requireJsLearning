define(["underscore"],function(_){
    var app ={
        /**
         *author:800p_sunzhy
         *create:2017-11-30 22:47:38
         *modefied by:800p_sunzhy
         *modefied time:2017-11-30 22:47:43
         *description:双层for 循环遍历
         *arguments:
         *@Object obj
         *  {
                "810": {"001": "结婚", "002": "家具", "003": "买房", "004": "装修"},
                "866": {"01": "结婚花销", "02": "家具花销", "03": "买房花销", "04": "装修花销"}
            };
         *@String bkId
         *return:
         */
        wayOne:function(obj,bkId){
            var result="";
            for(x in obj){
                if(x == bkId){
                    for(k in obj[x]){
                         result +="key:"+k+"; value:"+obj[x][k];
                    }
                    break;
                }
            }
            return result;
        },
        /*
         *author:800p_sunzhy
         *create:someday
         *modefied by:800p_sunzhy
         *modefied time:2017-11-30 23:30:27
         *description: 同wayOne只不过换了个写法而已
         *arguments:
         *return:
         */
        wayTwo:function(obj,bkId){
            var result="";
            _.map(obj,function(num,key){
                if(key == bkId){
                    _.map(num,function(i,k){
                        result+= "key:"+k+"; value:"+i;
                    });

                }
            });
            return result;
        }
    };
    return app;

});