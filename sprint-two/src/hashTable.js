

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._bucket = [];
};

HashTable.prototype.insert = function(k, v) { // k = key, a string. v = value, a string
  var index = getIndexBelowMaxForKey(k, this._limit); //getIndex... is our hash function
 //pointer for Limited Array table  [index: tuple] 
 
  var tuple = [k, v];
  // console.log('key: ', k, ' index: ', index, 'tuple: ', tuple);
  var bucket = this._storage.get(index) || [];
  
  this._storage.set(index, bucket);
  if (bucket.length === 0) {
    bucket.push(tuple);
  } 
  for(var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) {
      bucket[i][1] = v;
    } else {
      bucket.push(tuple);
    }
  }
  
  
  // if(bucket === undefined) {
  //   for(var i = 0; i < bucket.length; i++) {
  //     if(bucket[i][0] === k) {
  //       bucket[i][1] = v;
  //     }
  //   }
  // }
  
  console.log('bucket: ', bucket, 'index: ', index);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // given a key string, 
  if(bucket !== undefined) {
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        return bucket[i][1];
      } 
    }
  }
  
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if(bucket !== undefined) {
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket[i][1] = undefined;
      } 
    }
  }
  
};

// var hashTable;
// hashTable = new HashTable();
// hashTable.insert('Steven', 'Seagal');
// hashTable.insert('Steven', 'Francisco');
// hashTable.retrieve('Steven'); //.to.equal('Seagal')


/*
 * Complexity: What is the time complexity of the above functions?
 */


