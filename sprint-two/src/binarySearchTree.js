var BinarySearchTree = function(value) {
  var newBinary = {};
  newBinary.value = value;
  newBinary.left = undefined;
  newBinary.right = undefined;
  
  _.extend(newBinary, searchMethods);
  return newBinary;
};


var searchMethods = {};

searchMethods.insert = function(value) {
  // check if value is les than or greater than 
  var child = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left !== undefined) {
      this.left.insert(value);
    } else {
      this.left = child;
    }
  } else if (value > this.value) {
    if (this.right !== undefined) {
      this.right.insert(value);
    } else {
      this.right = child;
    }
  }
};

searchMethods.contains = function(target) {
  var tracker = false;
  var checkIfTrue = function(node) {
    if (node.value === target) {
      tracker = true;
    } else {
      if (target < node.value && node.left !== undefined) {
        checkIfTrue(node.left);
      } else if (target > node.value && node.right !== undefined) {
        checkIfTrue(node.right);
      }
    }
  };
  checkIfTrue(this);
  return tracker;
};


searchMethods.depthFirstLog = function(func) {
  func(this.value);
  var traverseTree = function(node) {
    if (node !== undefined) {
      if (node.left !== undefined) {
        func(node.left.value);
        traverseTree(node.left);
      } if (node.right !== undefined) {
        func(node.right.value);
        traverseTree(node.right);
      }
    }
  };
  traverseTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//'should have methods named "insert", "contains", and "depthFirstLog'