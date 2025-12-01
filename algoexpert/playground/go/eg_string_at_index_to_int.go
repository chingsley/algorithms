package main

import "fmt"

func main() {
	a := "321"
	num1 := a[0] - '0' // returns int 3
	num2 := a[1] - '0' // returns int 2
	num3 := a[2] - '0' // returns int 1
	fmt.Println(num1)  // 3
	fmt.Println(num2)  // 2
	fmt.Println(num3)  // 1

}
