//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BinarySearchTree {
  constructor(data) {
    if (data === undefined) {
      this._root = undefined;
      return
    }
    this._root = new TreeNode(data);
  }

  get data() {
    if (this._root === undefined) {
      throw new Error("Empty Tree");
    }
    return this._root.data;
  }

  get right() {
    if (this._root === undefined) {
      throw new Error("Empty Tree");
    }
    return this._root.right;
  }

  get left() {
    if (this._root === undefined) {
      throw new Error("Empty Tree");
    }
    return this._root.left;
  }

  insert(data) {
    if (data === undefined) {
      throw new Error("nothing to insert in current tree...");
    }

    const node = new TreeNode(data);
    return this._insert(this._root, this._root, node, 'left');
  }

  each(fn) {
    return this._dfs_inf(this._root, fn);
  }

  _insert(parent, root, node, dir='left') {
    if (root === undefined) {
      if (dir === 'left') {
        parent.left = node;
      }
      else { // dir === 'right'
        parent.right = node;
      }
      return;
    }

    if (node.data < root.data) {
      return this._insert(root, root.left, node, 'left');
    }
    else if (node.data > root.data) {
      return this._insert(root, root.right, node, 'right');
    }
    else {
      this._insert(root, root.left, node, 'left');
    }
  }

  _dfs_inf(root, fn) {
    if (root === undefined) { return undefined; }
    this._dfs_inf(root.left, fn);
    fn(root.data);
    return this._dfs_inf(root.right, fn);
  }
}
