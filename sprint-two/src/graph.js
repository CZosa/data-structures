

// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
  this.identifier = 0;
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[this.identifier] = node;  //{identifier:node}
  this.identifier++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //I: value (node)
  //O: boolean
  
  //if there are nodes, check through all the nodes to see if it is the target
  for (var id in this.vertices) {
    if (this.vertices[id] !== undefined) {
      if (this.vertices[id] === node) {
        return true;
      }
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var id in this.vertices) {
    console.log(this.vertices[id]);
    if (this.vertices[id] === node) {
      delete this.vertices[id];
    }
  }
  if (this.edges.length > 0) {
    this.edges = [];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var sortedEdge = this.edges.sort();
  var checkNodes = [];
  checkNodes.push(fromNode, toNode);
  checkNodes.sort();
  if (sortedEdge[0] === checkNodes[0] && sortedEdge[1] === checkNodes[1]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push(fromNode, toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.hasEdge(fromNode, toNode)) {
    this.edges = [];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {      //_.each(list, iteratee, [context]) 
  // for (var id in this.vertices) {
  //   cb (this.vertices[id], id, this.vertices);
  // }
  // _.each(cb.call(this.vertices);
};

graph = new Graph();
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(8);
// graph.addNode(3);
graph.addEdge(5, 4);
graph.addEdge(6, 8);
graph.hasEdge(4, 5);
// graph.removeNode(5);
// graph.removeEdge(4, 5);
console.log(graph.hasEdge(4, 5));
console.log(graph.hasEdge(6, 8));

// console.log(graph.contains(1));
// graph.removeEdge(2, 3)

/*
 * Complexity: What is the time complexity of the above functions?
 */


