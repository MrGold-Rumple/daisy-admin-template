import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RightDrawerState } from '../../types'

export const rightDrawerSlice = createSlice({
    name: 'rightDrawer',
    initialState: {
        header: "",  // current  title state management
        isOpen : false,   // right drawer state management for opening closing
        bodyType : "",   // right drawer content management
        extraObject : {},   
    } as RightDrawerState,
    reducers: {

        openRightDrawer: (state, action: PayloadAction<{header: string; bodyType: string; extraObject?: Record<string, unknown>}>) => {
            const {header, bodyType, extraObject} = action.payload
            state.isOpen = true
            state.bodyType = bodyType
            state.header = header
            state.extraObject = extraObject || {}
        },

        closeRightDrawer: (state) => {
            state.isOpen = false
            state.bodyType = ""
            state.header = ""
            state.extraObject = {}
        },

    }
})

export const { openRightDrawer, closeRightDrawer } = rightDrawerSlice.actions

export default rightDrawerSlice.reducer
