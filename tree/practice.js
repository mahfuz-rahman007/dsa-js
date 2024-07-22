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

    contain(value) {
        if(this.root === null) return false;
        let temp = this.root;

        while(temp) {
            if(temp.value === value) return true;

            temp = value < temp.value ? temp.left : temp.right;
        }
        return false;
    }

    __r_contain(current_node, value) {
        if(current_node === null) return false;

        if(current_node.value === value) return true;

        return value < current_node.value ? this.__r_contain(current_node.left, value) : this.__r_contain(current_node.right, value);
    }

    r_contain(value) {
        return this.__r_contain(this.root, value);
    }

    __r_insert(current_node, value) {
        
        if(current_node === null) {
            return new Node(value);
        }

        if(value < current_node.value) {
            current_node.left = this.__r_insert(current_node.left, value);
        } else {
            current_node.right = this.__r_insert(current_node.right, value);
        }

        return current_node;
    }

    r_insert(value) {
        if(this.root === null) {
            let new_node = new Node(value);
            this.root = new_node;
            return true
        }

        return this.__r_insert(this.root , value);
    }
}

let tree = new BinarySearchTree();

tree.insert(40);
tree.insert(20);
tree.insert(60);
tree.insert(25);
tree.insert(19);


console.log(tree.r_insert(26), tree.root.left);