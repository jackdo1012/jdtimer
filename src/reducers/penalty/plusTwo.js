import { createSlice } from "@reduxjs/toolkit"
// export const plusTwoReducer = (state = "0:00", action) => {
// 	switch (action.type) {
// 		case "PLUS_TWO": {
// 			const solves = localStorage
// 				.getItem(`times${action.session}`)
// 				.split(",")
// 			var newTime = [
// 				Number(solves[0].split(".")[0]) + 2,
// 				solves[0].split(".")[1],
// 			].join(".")
// 			solves.shift()
// 			const newList = [newTime, ...solves]
// 			localStorage.setItem(`times${action.session}`, newList)
// 			if (newTime.split(".")[0].length === 1) {
// 				return "0" + newTime
// 			}
// 			return newTime
// 		}
// 		default: {
// 			return state
// 		}
// 	}
// }

export const plusTwoSlice = createSlice({
	name: "plusTwo",
	initialState: "0.00",
	reducers: {
		getPlusTwo: (_state, action) => {
			const solves = localStorage
				.getItem(`times${action.payload}`)
				.split(",")
			var newTime = [
				Number(solves[0].split(".")[0]) + 2,
				solves[0].split(".")[1],
			].join(".")
			solves.shift()
			const newList = [newTime, ...solves]
			localStorage.setItem(`times${action.payload}`, newList)
			if (newTime.split(".")[0].length === 1) {
				return "0" + newTime
			}
			return newTime
		},
	},
})
export const { getPlusTwo } = plusTwoSlice.actions
export default plusTwoSlice.reducer
