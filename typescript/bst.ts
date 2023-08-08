/**
 *                  8
 *               /     \
 *             6        25
 *           /   \    /    \
 *          4    8   15    30
 *           \
 *            5
 *
 */

export class TreeNode {
  public left: TreeNode | null = null;
  public right: TreeNode | null = null;

  constructor(public value: number) {}
}

export class BinarySearchTree {
  public root: null = null;

  public add(value: number): void {}

  public search(value: number): boolean {
    return true;
  }

  public delete(value: number): void {}

  public indorder(): [number] {
    return [0];
  }

  public preorder(): [number] {
    return [0];
  }

  public postorder(): [number] {
    return [0];
  }

  public isBalanced(): boolean {
    return true;
  }

  public kth(k: number): number {
    return 0;
  }

  public sum(low: number, high: number): number {
    return 0;
  }
}
