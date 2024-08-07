/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  시간 복잡도
	1.	첫 번째 열 초기화: O(m)
	2.	첫 번째 행 초기화: O(n)
	3.	나머지 DP 테이블 채우기: O(m * n)
*/

const minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  dp[0][0] = grid[0][0];
  
  // 첫 번째 열 초기화
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  
  // 첫 번째 행 초기화
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  
  // 나머지 DP 테이블 채우기 (m * n번 연산)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};