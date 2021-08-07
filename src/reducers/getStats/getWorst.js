import { createSlice } from "@reduxjs/toolkit"

export const getWorstSlice = createSlice({
	name: "getWorst",
	initialState: "0.00",
	reducers: {
		getWorst: (_state, action) => {
			const solves = action.payload
			if (solves.includes("DNF")) {
				return "DNF"
			} else {
				return Math.max(...solves).toFixed(2)
			}
		},
	},
})
export const { getWorst } = getWorstSlice.actions
export default getWorstSlice.reducer
