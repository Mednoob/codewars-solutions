package kata

import (
	"strconv"
)

func HumanReadableTime(seconds int) string {
	h := seconds / 3600
	m := seconds % 3600 / 60
	s := seconds % 60

	return FixedNum(h) + ":" + FixedNum(m) + ":" + FixedNum(s)
}

func FixedNum(num int) string {
	res := strconv.Itoa(num)

	if num < 10 {
		res = "0" + res
	}

	return res
}
