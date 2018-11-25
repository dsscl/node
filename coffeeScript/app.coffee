# coffeeScript概述
# 语法和Python及Ruby相似
# coffeeScript之于javaScript，就像sass之于css，jade模板引擎之于html，需要编译才能生成js
# 是更简洁的语法糖，但不是必需品，有一定的学习成本，团队协作中是一道关卡
# javaScript创建者Brendan Eich说，“CoffeeScript做的不错，要比JS更方便，只要你对Python式的有意义的空格和从另外一个源语言生成JS带来的开销买账”
# 总之，CoffeeScript要比JavaScript更方便，但其代价就是要学习一种新语法并且需要额外的编译步骤
# 为了将JavaScript编写应用程序时更为困难的一些部分抽象化，对于没有高级JavaScript经验的人，CoffeeScript是一种解放，它让他们可以进入只有专家级程序员才能理解的JavaScript的混沌部位
# 如果你喜欢CoffeeScript，就会用它来做一切事，如果作为玩具和可能挑战多年学习成果的东西，那么你就会恨它

# 运行.coffee文件
# 1）安装coffee-script  >coffee xxx.coffee  // 直接运行.coffee文件
# 2）>coffee -c xxx.coffee >node xxx.js  // 先将.coffee文件编译为.js文件，再运行.js文件

# helloWorld
http = require 'http'
http.createServer (req, res) -> 
    res.writeHead 200, 'Content-Type': 'text/plain'
    res.end 'Hello, World!\n'
.listen 3000, '127.0.0.1'
console.log 'Server running at http://127.0.0.1:3000/'

# 最小语法
cube = (x) -> x * x * x
console.log cube 3

# 条件和比较
happy = null
console.log "I am happy!" if happy?
# is => ===
# isnt => !==
# not => !
# and => &&
# or => ||
# true,yes,on => true
# false,no,off => false
# @,this => this
# of => in
# in => 无JavaScript等同运算符

# 循环
console.log food for food in ['bread', 'cookie', 'apple']

# 字符串
beer = "Greene King IPA"
order = "I would like a #{beer}"
console.log(order)

# 对象
kids = 
    brother:
        name: "Max"
        age: 11
    sister:
        name: "Ida"
        age: 9
console.log kids
console.log JSON.stringify(kids)

# 类
class Car
    constructor: (@name) ->
    mileage: 81000
car = new Car("Audi")
console.log "The #{car.name} has mileage of #{car.mileage}"

# 继承
class Human
    constructor: (@legs = 2) ->
    growLeg: ->
        @legs++

class Horse extends Human

horse = new Horse
horse.growLeg()
horse.growLeg()
console.log "A horse has #{horse.legs} legs" 

# super
# 关键字，它使得函数可以在子类中修改的同时也可以使用超类中的实现
class Robot
    makeTea: ->
        console.log 'Making tea.'

class Marvin extends Robot
    makeTea: ->
        console.log 'I have a brain the size of a planet'
        super

marvin = new Marvin
marvin.makeTea()

# 调试
# coffeeScript难以调试，编译生成的javaScript又晦涩难懂