package kata

import (
  	"math"
  	"strings"
  	"strconv"
)

func RGB(r, g, b int) string {
  	return Hex(float64(r)) + Hex(float64(g)) + Hex(float64(b))
}

func Hex(num float64) string {
    first := math.Max(0, num)
    first = math.Min(first/16, 15.9375)
    second := math.Mod(first, 1) * 16

    return strings.ToUpper(strconv.FormatInt(int64(math.Floor(first)), 16) + strconv.FormatInt(int64(second), 16))
}