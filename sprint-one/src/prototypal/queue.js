var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.rear = 0;

  return someInstance
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.rear] = value;
		this.rear++;
	},
	dequeue: function() {
		if(this.rear - this.front) {
		  var value = this.storage[this.front];
		  delete this.storage[this.front];
		  this.front++;
		}
		return value;
	},
	size: function() {
		return this.rear - this.front;
	}

};