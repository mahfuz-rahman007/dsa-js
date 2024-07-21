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
}

let tree = new BinarySearchTree();

tree.insert(40);
tree.insert(20);
tree.insert(60);
tree.insert(25);
tree.insert(19);



console.log(tree.contain(65));