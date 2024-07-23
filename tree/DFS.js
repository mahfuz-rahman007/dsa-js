/**
 * Depth First Search (Pre Order, Post Order, In Order)
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

    DFS_PRE_ORDER() {
        if(this.root == null) return [];

        let results = [];

        function traversal(current_node) {
            results.push(current_node.value);

            if(current_node.left !== null) {
                traversal(current_node.left);
            }

            if(current_node.right !== null) {
                traversal(current_node.right);
            } 
        }

        traversal(this.root);

        return results;
    }

    DFS_POST_ORDER() {
        if(this.root == null) return [];

        let results = [];

        function traversal(current_node) {
            
            if(current_node.left !== null) {
                traversal(current_node.left);
            }
            
            if(current_node.right !== null) {
                traversal(current_node.right);
            } 

            results.push(current_node.value);
        }

        traversal(this.root);

        return results;
    }

    DFS_IN_ORDER() {
        if(this.root == null) return [];

        let results = [];

        function traversal(current_node) {
            
            if(current_node.left !== null) {
                traversal(current_node.left);
            }

            results.push(current_node.value);
            
            if(current_node.right !== null) {
                traversal(current_node.right);
            } 

        }

        traversal(this.root);

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

// console.log(tree.DFS_PRE_ORDER()); // [40,20,19,25,60,51,72]
// console.log(tree.DFS_POST_ORDER()); // [19,25,20,51,72,60,40]
console.log(tree.DFS_IN_ORDER()); // [19,20,25,40,51,60,72]

