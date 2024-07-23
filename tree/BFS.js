/**
 * Binary Tree Breadth First Search
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let new_node = new Node(value);
        if(this.root === null) {
            this.root = new_node;
            return true
        }

        let temp = this.root;

        while(temp) {
            if(temp.value === value) return false;

            if(value < temp.value) {

                if(temp.left === null) {
                    temp.left = new_node;
                    return true;
                }
                temp = temp.left;
            } else {

                if(temp.right === null) {
                    temp.right = new_node;
                    return true;
                }
                temp = temp.right;
            }
        }

    }

    BFS() {
        if(this.root == null) return [];
        
        let queue = [this.root];
        let results = [];

        while (queue.length !== 0) {
            let current_node = queue.shift();
            results.push(current_node.value);
            
            if(current_node.left !== null) {
                queue.push(current_node.left);
            }

            if(current_node.right !== null) {
                queue.push(current_node.right);
            }
        }

        return results;
    }
}

let tree = new BinarySearchTree();

tree.insert(40);
tree.insert(20);
tree.insert(60);
tree.insert(25);
tree.insert(19);
tree.insert(51);
tree.insert(72);

console.log(tree.BFS()); // [40,20,60,19,25,51,72]
