function BinaryTree(){
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;
    this.insert = function (key) {
        var newNode = new Node(key);
        if(root === null){
            this.root = newNode;
        }else{
            insertNode(this.root, newNode);
        }
    }
    var insertNode = function (currentNode, newNode) {
        if(newNode.key < currentNode.key) {
            if (currentNode.left === null){
                currentNode.left = newNode;
            }else{
                insertNode(currentNode.left, newNode)
            }
        }else{
            if(currentNode.right === null){
                currentNode.right = newNode;
            }else{
                insertNode(currentNode.right, newNode);
            }
        }
    }
}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach(function (key) {
    binaryTree.insert(key);
})