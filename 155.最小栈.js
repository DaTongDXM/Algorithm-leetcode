/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[]
    this.minNum=Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
   this.minNum=Math.min(this.minNum,x)
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

if(this.stack.pop()===this.minNum){
 this.minNum=Math.min(...this.stack)
}
 

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
return this.minNum
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */