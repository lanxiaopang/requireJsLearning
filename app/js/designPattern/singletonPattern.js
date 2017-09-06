/**
 * Created by sun on 2017/6/1.
 */
define(function () {
    /**
     * Person构造函数
     * @param name
     * @constructor
     */
    var Person               = function (name) {
        this.name        = name;
        this.instance    = null;
    };
    /**
     * 获得实例的方法
     * @param name
     * @return {null|Person}
     */
    Person.getInstance = function(name) {
        if (!this.instance) {
            this.instance = new Person(name);
        }
        return this.instance;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return {
        getInstance: Person.getInstance
    };
});