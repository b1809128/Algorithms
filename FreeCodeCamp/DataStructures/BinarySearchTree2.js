class BST {
  TreeNode  = function(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  inOrder = function (root) {
    var nodes = [];
    if (root) {
      inOrder(root.left);
      node.push(root.val);
      inOrder(root.right);
    }
    return nodes;
  };

  preOrder = function (root) {
    var nodes = [];
    if (root) {
      preOrder(root.left);
      preOrder(root.right);
      node.push(root.val);
    }
    return nodes;
  };

  isValidBST = function (root) {
    const helper = (node, min, max) => {
      if (!node) return true;
      if (node.val <= min || node.val >= max) return false;
      return (
        helper(node.left, min, node.val) && helper(node.right, node.val, max)
      );
    };
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  };

  maxDepth = function (root) {
    const calc = (node) => {
      if (!node) return 0;
      return Math.max(1 + calc(node.left), 1 + calc(node.right));
    };
    return calc(root);
  };

  lowestCommonAncestor = function (root, p, q) {
    let lca = null;
    const isCommonPath = (node) => {
      if (!node) return false;
      var isLeft = isCommonPath(node.left);
      var isRight = isCommonPath(node.right);
      var isMid = node == p || node == q;
      if ((isMid && isLeft) || (isMid && isRight) || (isLeft && isRight)) {
        lca = node;
      }
      return isLeft || isRight || isMid;
    };
    isCommonPath(root);
    return lca;
  };
}
