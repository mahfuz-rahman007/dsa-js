/**
 * Find the kth smallest element from the tree (Stack + Recursive) 
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

    kth_smallest_stack(k) {

        let stack = [];
        let node = this.root;

        while(stack.length !== 0 || node !== null) {
            
            while(node){
                stack.push(node);
                node = node.left;
            }

            node = stack.pop();
            k--;

            if(k === 0) {
                return node.value;
            }

            node = node.right;
        }

        return false;
    }

    kth_smallest_recursive(k) {
        this.kth_smallest_count = 0;
        return this.kth_smallest_recursive_helper(this.root, k); 
    }

    kth_smallest_recursive_helper(node, k) {
        if(node === null) return null;

        let left_result = this.kth_smallest_recursive_helper(node.left, k);
        if(left_result !== null) return left_result;

        this.kth_smallest_count++;
        if(this.kth_smallest_count === k) return node.value;

        let right_result = this.kth_smallest_recursive_helper(node.right, k);
        if(right_result !== null) return right_result;

        return null;
    }
}



let tree = new BinarySearchTree();

tree.insert(40);
tree.insert(20);
tree.insert(60);
tree.insert(25);
tree.insert(22);
tree.insert(26);
tree.insert(19);


console.log(tree.kth_smallest_recursive(3)); // 22
console.log(tree.kth_smallest_recursive(64)); // 40