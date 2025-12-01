package main

import (
	"fmt"
)

type Stack []interface{}

type Ball struct {
	color string
}

func (stack *Stack) Push(x interface{}) {
	*stack = append(*stack, x)
}

func (ball *Ball) setColor(color string) {
	ball.color = color
}

func main() {
	t := Stack{"john"}
	t.Push("james")
	fmt.Println(t)

	b := Ball{
		color: "blue",
	}
	fmt.Println(b.color)
	b.setColor("white")
	fmt.Println(b.color)
}
