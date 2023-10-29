import { TreeNode } from "../../src/Tree/Tree";

test("TreeNode creation should initialize with root data and no parent or children", () => {
  const root = new TreeNode<string>("Root");
  const expected: TreeNode<string> = {
    data: "Root",
    children: [],
    parent: undefined,
  };
  expect(root).toEqual(expected);
});

test("Adding a child to TreeNode should update children and set the parent correctly", () => {
  const root = new TreeNode<string>("Root");
  const childOne = new TreeNode<string>("Child1", root);

  const expected: TreeNode<string> = {
    data: "Child1",
    children: [],
    parent: root,
  };

  expect(root.children).toHaveLength(1);
  expect(childOne).toEqual(expected);
});
