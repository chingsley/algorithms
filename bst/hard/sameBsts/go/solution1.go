package main

// O(n^2) time | O(n^2) space
func SameBsts(arrayOne, arrayTwo []int) bool {
	if len(arrayOne) == 0 && len(arrayTwo) == 0 {
		return true
	}

	if len(arrayOne) != len(arrayTwo) {
		return false
	}
	if arrayOne[0] != arrayTwo[0] {
		return false
	}

	a1Left, a1Right := []int{}, []int{}
	a2Left, a2Right := []int{}, []int{}
	for i := 1; i < len(arrayOne); i++ {
		if arrayOne[i] < arrayOne[0] {
			a1Left = append(a1Left, arrayOne[i])
		} else {
			a1Right = append(a1Right, arrayOne[i])
		}
		if arrayTwo[i] < arrayTwo[0] {
			a2Left = append(a2Left, arrayTwo[i])
		} else {
			a2Right = append(a2Right, arrayTwo[i])
		}
	}

	return SameBsts(a1Left, a2Left) && SameBsts(a1Right, a2Right)
}
