import { createSlice } from '@reduxjs/toolkit'

export const Authentication = createSlice({
  name: 'Authentication',
  initialState: {
    email: '',
    type: 'Consumer',
    password: '',
    date_of_birth: '',
    full_name: '',
    phone_number: '',
    phone_country_code: '',
    gender: '',
    bio: '',
  },
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changePassword: (state, action) => {
      state.password = action.payload
    },
    changeDate: (state, action) => {
      state.date_of_birth = action.payload
    },
    changeFullName: (state, action) => {
      state.full_name = action.payload
    },
    changePhoneNumber: (state, action) => {
      state.phone_number = action.payload
    },
    changePhoneCountryCode: (state, action) => {
      state.phone_country_code = action.payload
    },
    changeGender: (state, action) => {
      state.gender = action.payload
    },
    changeBio: (state, action) => {
      state.bio = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeEmail, changePassword, changeDate, changeFullName, changePhoneNumber, changePhoneCountryCode, changeGender, changeBio } = Authentication.actions

export default Authentication.reducer