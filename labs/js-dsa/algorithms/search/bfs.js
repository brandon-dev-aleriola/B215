const Queue = require('../../data-structures/queues/queue2.js');

/**
 * Breadth-first search for binary trees
 */
const bfs = (root, callback) => {
  const q = new Queue();
  q.push(root);
  let node;
  while (!q.isEmpty()) {
    node = q.pop();
    callback(node.value);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
};

module.exports = bfs;