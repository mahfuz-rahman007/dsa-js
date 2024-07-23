 /**
  * Check If BST is valid
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

    dst_in_order() {

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

/**
 * THis Function Check if a give tree is a valid binary search tree
 */
function is_valid_bst(tree_list) {

    for (let i = 0; i < tree_list.length-1; i++) {
        if(tree_list[i] > tree_list[i+1]) {
            return false;
        }
    }

    return true;
}

let tree = new BinarySearchTree();

tree.insert(40);
tree.insert(20);
tree.insert(60);
tree.insert(25);
tree.insert(22);
tree.insert(26);
tree.insert(19);

let tree_list = tree.dst_in_order();

console.log(is_valid_bst(tree_list));