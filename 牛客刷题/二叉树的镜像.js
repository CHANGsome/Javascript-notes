function Mirror(root)
{
    if(root==null){
        return;
    }else{
        var temp = root.left;
        root.left = root.right;
        root.right = temp;
        Mirror(root.left);
        Mirror(root.right);
    }
}

function BinaryTree(){
    function TreeNode(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
    this.root = null;
    var insertNode = function (node,val) {
        if(val < node.val){
            if(node.left == null){
                node.left = new TreeNode(val);
            }else{
                insertNode(node.left,val);
            }

        }else if(val > node.val){
            if(node.right == null){
                node.right = new TreeNode(val)
            }else{
                insertNode(node.right, val);
            }
        }
    }
    this.insert = function (val) {
        if(this.root == null){
            this.root = new TreeNode(val);
        } else{
            insertNode(this.root,val);
        }
    }
}
var arr = [8,6,5,7,10,9,11];
var binTree = new BinaryTree();
arr.forEach(function (key) {
    binTree.insert(key);
});
//console.log(binTree.root);
Mirror(binTree.root);
console.log(binTree.root);