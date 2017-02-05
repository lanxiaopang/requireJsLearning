# what dose it for?
## this project is to excercise requireJs and  how to build a project from start to end!
## so I hope it will be made successfully!
### 以下只需做一次
1. 首先从官网下载node.js安装
2. 打开cmd输入
###### 
```
npm install --global grunt-cli
```
3. 然后查看grunt版本
######
```
grunt --version
```
### 以下针对本项目
#### 当然先建立各个目录结构了，随意不赘述，然后
4. 新建package.json 内容：
```
{}
```
######也可以用命令行：
```
npm init
```
###### 或者
```
echo {} > package.json
```
5. 新建Gruntfile.js 内容：
######
```
module.exports = function(grunt) {
    grunt.registerTask('default', []);
};
```
6. 安装各种依赖
####
```
npm install --save-dev grunt gruntify-eslint
```
##### 然后cmd会报
npm WARN requireJsLearning No repository field.
npm WARN requireJsLearning No license field
##### 只需在package.json里面做如下配置即可:
```
{
    ...
    "private": true,
    ...
}
```
## 最重要的来了，我们需要安装requireJs。竟然是通过bower安装的？？？？
##### 那好吧，先安装bower
```
npm install -g bower
bower install jquery
```
##### 不爽，竟然安装在 'bower_components'文件夹下面，不爽
##### 解决办法：新增一个.bowerrc文件内容：
```
{
  "directory": "/vendor"
}
```
## 坑爹的部分来了，竟然不能直接新建没有名字的文件！！！
##### 解决办法：通过命令行新建文件
```
echo {"directory": "./vendor"} > .bowerrc
```
##### 最终命令行：
```
bower install --save requirejs
bower install --save jquery
```
##### 终于装完了依赖
	
		