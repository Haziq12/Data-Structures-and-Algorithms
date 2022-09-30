/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0
    let dfs = (root) => {
        if(root === null) return 
        if(root.left) {
            let node = root.left
            if(!node.left && !node.right) {
                sum = sum + node.val
            }
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return sum 
};