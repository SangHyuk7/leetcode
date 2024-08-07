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
 * @param {number} targetSum
 * @return {boolean}
 */

//DFS 사용 
//시간복잡도: O(n) 
const hasPathSum = function(root, targetSum) {
  if (root === null) {
    return false;
  }    
  
  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }
  
  targetSum -= root.val;
  
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};