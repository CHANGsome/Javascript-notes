function reConstructBinaryTree(pre, vin)
{
    // write code here
    var root = null;
    if(pre.length > 1){
        var rootVal = pre[0];
        var rootPos = vin.indexOf(rootVal);
        var leftTreePre = pre.slice(1,rootPos+1);
        var leftTreeVin = vin.slice(0, rootPos);
        var rightTreePre = pre.slice(rootPos+1);
        var rightTreeVin = vin.slice(rootPos+1);
        root = {
            val: rootVal,
            left: reConstructBinaryTree(leftTreePre,leftTreeVin),
            right: reConstructBinaryTree(rightTreePre,rightTreeVin)
        }
    }else if(pre.length == 1){
        root = {
            val: pre[0],
            left: null,
            right: null
        }
    }
    return root;
}

var preArr = [1,2,4,7,3,5,6,8], vinArr = [4,7,2,1,5,3,8,6];
var binaryTree = new reConstructBinaryTree(preArr,vinArr);
console.log(binaryTree.left);