class Graph {
    constructor() {
        this.graph = {};
    }

    print_graph() {
        for (let vertex in this.graph) {
            console.log(vertex , " : " , this.graph[vertex]);
        }
    }

    add_vertex(vertex) {
        if(this.graph[vertex]) {
            return false;
        }

        this.graph[vertex] = [];
        return true;
    }

    add_edge(vertex1, vertex2) {
        if(this.graph[vertex1] && this.graph[vertex2] && vertex1 !== vertex2) {

            for (let edge of this.graph[vertex1] ) {
                if(edge === vertex2) return false;
            }

            this.graph[vertex1].push(vertex2);
            this.graph[vertex2].push(vertex1);
            
            return true;
        }
        return false;
    }

    remove_edge(vertex1, vertex2) {  
        if(this.graph[vertex1] && this.graph[vertex2] && vertex1 !== vertex2) {

            let vertex1Edges = [];
            
            for (let edge of this.graph[vertex1] ) {
                if(edge !== vertex2) {
                    vertex1Edges.push(edge);
                }
            }

            this.graph[vertex1] = vertex1Edges;

            let vertex2Edges = [];

            for (let edge of this.graph[vertex2] ) {
                if(edge !== vertex1) {
                    vertex2Edges.push(edge);
                }
            }

            this.graph[vertex2] = vertex2Edges;
            
            return true;
        }
        return false;
    }

    remove_vertex(vertex) {
        if(!this.graph[vertex]) {
            return false;
        }

        for (let other_vertex of this.graph[vertex]) {
            let edges = [];
            for (let i = 0; i < this.graph[other_vertex].length; i++) {
                if(vertex !== this.graph[other_vertex][i]) {
                    edges.push(this.graph[other_vertex][i]);
                }
            }
            this.graph[other_vertex] = edges;
        }

        delete this.graph[vertex];

        return true;
    }
}

let graph = new Graph();

graph.add_vertex("A");
graph.add_vertex("B");
graph.add_vertex("C");
graph.add_vertex("D");

graph.add_edge("A", "B");
graph.add_edge("A", "C");
graph.add_edge("A", "D");
graph.add_edge("B", "D");
graph.add_edge("C", "D");

// graph.remove_edge("A", "B");

graph.remove_vertex("D");

graph.print_graph();