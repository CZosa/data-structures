var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    //create a variable that will create a new Node. var newNode
      //check if list.tail if it doesn't exist, 
        //create new node
          //newNode will equal the list.tail: {value = list.tail}
      
    var newNode = new Node(value);
    // console.log(list.tail);
    if (list.tail === null) {
      list.tail = newNode;  // {}
      list.head = newNode;
      
      // value = value;  //{newNode.value : }
      //valu
    } else {
      // value = list.tail   // {value: list.tail }
      // this.next = list.tail;
      list.tail.next = newNode;  //this.next = newNode;
      list.tail = newNode;
    }
    
    
  };

  list.removeHead = function() {
    // var deleteHead = list.head;
    // delete list.head; //head value is being removed from previous node
    // list.head = this.next; //previous head value to equal the new head node value
    // return deleteHead;  // new head value is set to next node
    var deleteHead = list.head.value;               
    list.head = list.head.next; 
    return deleteHead;  
  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
      
    }
    return false;
    
    // while(list.head.value) {
    //   if(this.value === target) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

  };

  return list;
};

var Node = function(value) {
  var node = {};   // { node.value : node.next }

  node.value = value;
  node.next = null;

  return node;
};

var linkedList = LinkedList();
var addedFour = linkedList.addToTail(4);
// console.log(addedFour);
var addedFive = linkedList.addToTail(5);
linkedList.removeHead();
linkedList.contains();

/*
 * Complexity: What is the time complexity of the above functions?
 */
