package main

type StackHeight struct {
	stacks []int
	height int
}

func DiskStacking(disks [][]int) [][]int {
	memo := make(map[int]StackHeight)
	maxStack := []int{}
	maxHeight := 0
	for i := 0; i < len(disks); i++ {
		currMaxStack, currMaxHeight := getMaxStackAt(i, disks, memo)
		if currMaxHeight > maxHeight {
			maxHeight = currMaxHeight
			maxStack = currMaxStack
		}
	}

	maxStackLists := [][]int{}
	for _, idx := range maxStack {
		maxStackLists = append(maxStackLists, disks[idx])
	}

	return maxStackLists
}

func getMaxStackAt(i int, disks [][]int, memo map[int]StackHeight) ([]int, int) {
	if _, exist := memo[i]; exist {
		return memo[i].stacks, memo[i].height
	}

	maxStack := []int{}
	maxHeight := 0
	w1, d1, h1 := disks[i][0], disks[i][1], disks[i][2]

	for j := 0; j < len(disks); j++ {
		w2, d2, h2 := disks[j][0], disks[j][1], disks[j][2]
		if w2 >= w1 || d2 >= d1 || h2 >= h1 {
			continue
		}
		currMaxStack, currMaxHeight := getMaxStackAt(j, disks, memo)
		if currMaxHeight > maxHeight {
			maxHeight = currMaxHeight
			maxStack = currMaxStack
		}
	}

	maxStack = append(maxStack, i)
	maxHeight = disks[i][2] + maxHeight
	memo[i] = StackHeight{stacks: maxStack, height: maxHeight}
	return maxStack, maxHeight
}
