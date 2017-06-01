/**
 * Created by sun on 2017/6/1.
 */
define(function () {
    var Person               = function (name) {
        this.name        = name;
        this.instance    = null;
    };
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