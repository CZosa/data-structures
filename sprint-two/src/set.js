var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  set.value = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {  //item can be a string
  this._storage[this.value] = item; // {value: item}
  this.value++;
};

setPrototype.contains = function(item) {
  for (var id in this._storage) {
    if(this._storage[id] === item) {
      return true;
    } 
  } 
  return false;
};

setPrototype.remove = function(item) {
  for(var id in this._storage) {
    if(this._storage[id] === item) {
      delete this._storage[id];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
