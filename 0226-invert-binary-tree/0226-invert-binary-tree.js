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
 * @return {TreeNode}
 */
 // 사용한 자료 구조 dfs
 // 시간 복잡도: O(n)

const invertTree = function(root) {
  if (!root) {
    return null;
  }
    
  let temp = root.left;

  root.left = root.right;  
  root.right = temp;
    
  invertTree(root.left);
  invertTree(root.right);
    
  return root;
};