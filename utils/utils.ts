export const Rand = (from: number = 0, to: number = 1, float: boolean = false) => {
	const rand = (Math.random() * (to - from)) + from
	return float ? rand : rand | 0
}

export const GoldenRatio: number = (1 + Math.sqrt(5)) / 2