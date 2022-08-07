package kata

func ValidParentheses(parens string) bool {
	n := 0

	for _, r := range parens {
		s := string(r)

		if s == "(" {
			n++
		} else if s == ")" {
			if n < 1 {
				return false
			}

			n--
		}
	}

	return n == 0
}
