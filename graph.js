/*
Graphs

Non-linear data structure, consists of a finite number of vertices also 
called nodes, connected by edges, there is no hierarchy.

There are two types:

1.Directed: The edges have a direction, edges are arrows.
2.Undirected: The edges are bidirectional, can be traversed in either direction

Usage

Maps
Social media

Graph representation

Adjacency matrix

2d array of size VxV where V is the number of vertices in the graph

each row and column represent a vertex

if the value of any element say, matrix [i][j] is 1, it represents that there is
an edge connecting vertex i and vertex j.

Adjacency list

Vertices are stored in a map like data structure and every vertex stores a list
of its adjacent vertices
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      addVertex(vertex1);
    }
    if (this.adjacencyList[vertex2]) {
      addVertex(vertex2);
    }
    this.adjacencyList[vertex1] = add(vertex2);
    this.adjacencyList[vertex2] = add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
