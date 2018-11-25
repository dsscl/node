// exports.hello = function() {
//     var message = 'Hello from the ohaithere module';
//     return message;
// }
// 注意这里用了“exports”这个词。
// 这是用于将函数暴露给模块外部或则模块的公共作用域，让任何想使用模块的人都可访问它。
// 如果要将一系列的函数公开给模块的用户，就得用这一模式。
// 如果只想在模块里面使用的私有函数，那么就将它们声明为普通函数即可。

// 基于原型的风格改写以上代码
module.exports = new Ohaithere;

function Ohaithere() {}

Ohaithere.prototype.hello = function() {
    var message = 'Hello from the ohaithere module';
    return message;
}
// 使用面向对象的风格，必须使用module.exports而不是exports。
// exports实际所做的是收集属性并将他们附加到module.exports上，如果module.exports还没有任何东西附加在上面的话
// 不过，如果我们自己创建自己的对象来组织代码和代码的作用域的话，那么就应该直接附加到module.exports上
// 注意如果这样的话我们就要负责定义对象中方法的作用域