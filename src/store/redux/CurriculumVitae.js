import { createSlice } from '@reduxjs/toolkit'

export const CurriculumVitae = createSlice({
  name: 'CurriculumVitae',
  initialState: {
    first_name : '',
    last_name : '',
    street_address : '',
    city : '',
    postal_code : '',
    phone_country_code : '',
    phone_number : '',
    email : '',
    website : '',
    blog : '',
    linkedin : '',
    job_applied_for : '',
    position : '',
    work_types : '',
    salary : '',
  },
  reducers: {
    changeFirstName: (state, action) => {
      state.first_name = action.payload
    },
    changeLastName: (state, action) => {
      state.last_name = action.payload
    },
    changeStreetAddress: (state, action) => {
      state.street_address = action.payload
    },
    changeCity: (state, action) => {
      state.city = action.payload
    },
    changePostalCode: (state, action) => {
        state.postal_code = action.payload
    },
    changePhoneNumber: (state, action) => {
      state.phone_number = action.payload
    },
    changePhoneCountryCode: (state, action) => {
      state.phone_country_code = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changeWebsite: (state, action) => {
      state.website = action.payload
    },
    changeBlog: (state, action) => {
      state.blog = action.payload
    },
    changeLinkedin: (state, action) => {
      state.linkedin = action.payload
    },
    changePosition: (state, action) => {
      state.position = action.payload
    },
    changeWorkTypes: (state, action) => {
      state.work_types = action.payload
    },
    changeSalary: (state, action) => {
      state.salary = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeFirstName, changeLastName, changeStreetAddress, changeCity, changePostalCode, changePhoneNumber, changePhoneCountryCode, 
                changeEmail, changeWebsite, changeBlog, changeLinkedin, changePosition, changeWorkTypes, changeSalary 
              } = CurriculumVitae.actions

export default CurriculumVitae.reducer