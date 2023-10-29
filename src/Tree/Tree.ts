interface TreeNodeInterface<T> {
  data: T;
  children: TreeNodeInterface<T>[];
  parent: TreeNodeInterface<T> | undefined;
}

export class TreeNode<T> implements TreeNodeInterface<T> {
  public data: T;
  public children: TreeNodeInterface<T>[] = [];
  public parent: TreeNodeInterface<T> | undefined = undefined;

  constructor(data: T, parent?: TreeNodeInterface<T>) {
    this.parent = parent;
    this.data = data;

    if (this.parent) {
      this.parent.children.push(this);
    }
  }
}
