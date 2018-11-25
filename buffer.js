// 缓冲区是Node.js处理原始数据的方式
var buffer = new Buffer(8)
buffer.write('hi')
buffer.write(' there', 2, 'utf8')
buffer.toString()
var buffer2 = new Buffer(8)
buffer.copy(buffer2)
buffer2.toString()

buffer.copy(buffer2, 2, 2, 8)  //hi there
buffer.copy(buffer2, 2, 3, 8)  //hitheree