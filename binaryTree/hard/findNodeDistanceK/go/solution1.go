package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left *BinaryTree

	Right *BinaryTree
}

type QueueItem struct {
	Distance int
	Node     *BinaryTree
}

func FindNodesDistanceK(tree *BinaryTree, target int, k int) []int {
	parents := make(map[int]*BinaryTree)
	buildParentsMap(tree, nil, parents)

	targetNode := getTargetNode(tree, parents, target)
	queue := []QueueItem{{Distance: 0, Node: targetNode}}
	set := make(map[int]bool)
	result := []int{}
	for len(queue) > 0 {
		// fmt.Println(len(queue), queue)
		var item QueueItem
		item, queue = queue[0], queue[1:]
		// fmt.Println(">>>>>>", len(queue), queue)
		set[item.Node.Value] = true

		if item.Distance == k {
			result = append(result, item.Node.Value)
		} else {
			parent := parents[item.Node.Value]
			left := item.Node.Left
			right := item.Node.Right

			if parent != nil {
				if _, visited := set[parent.Value]; !visited {
					queue = append(queue, QueueItem{
						Distance: item.Distance + 1,
						Node:     parent,
					})
				}
			}
			if left != nil {
				if _, visited := set[left.Value]; !visited {
					queue = append(queue, QueueItem{
						Distance: item.Distance + 1,
						Node:     left,
					})
				}
			}
			if right != nil {
				if _, visited := set[right.Value]; !visited {
					queue = append(queue, QueueItem{
						Distance: item.Distance + 1,
						Node:     right,
					})
				}
			}
		}
	}

	return result
}

func buildParentsMap(node, parent *BinaryTree, parents map[int]*BinaryTree) {
	if node == nil {
		return
	}

	parents[node.Value] = parent
	buildParentsMap(node.Left, node, parents)
	buildParentsMap(node.Right, node, parents)
}

func getTargetNode(root *BinaryTree, parents map[int]*BinaryTree, target int) (targetNode *BinaryTree) {
	parent := parents[target]
	if parent == nil {
		return root
	}

	targetNode = parent.Left
	if targetNode == nil || targetNode.Value != target {
		targetNode = parent.Right
	}

	return targetNode
}
