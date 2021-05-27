const RegisterItems = [
    {
        label: 'Name',
        name_id: "name",
        type: 'text',
        value: "{this.state.input.name}",
        cName: 'form-control',
        placeholder:"Enter Your Name",
        error: "{this.state.errors.name}"
    },
    {
        label: 'E-mail',
        name_id: "email",
        type: 'email',
        value: "{this.state.input.email}",
        cName: 'form-control',
        placeholder:"Enter Your E-mail",
        error: "{this.state.errors.email}"
    },
    {
        label: 'Password',
        name_id:"password",
        type: 'password',
        value: "{this.state.input.password}",
        cName: 'form-control',
        placeholder:"Enter Password",
        error: "{this.state.errors.password}"
    },
    {
        label: 'Confirm Password',
        name_id:"confirm_password",
        type: 'password',
        "value": "this.state.input.confirm_password",
        cName: 'form-control',
        placeholder:"Confirm Password",
        error: "{this.state.errors.confirm_password}"
    },

    {
        label: 'Select Your Gender',
        name_id:"age",
        type: 'select',
        cName: 'form-select',
        id:"select",
        name:"Gender",
        value_1:'1',
        name_1:"Female",
        value_2:'2',
        name_2:"Male",
    },
    {
        label: 'Age',
        name_id:"age",
        type: 'number',
        cName: 'form-control',
        placeholder:"Enter Your Age",
    },
]
export default RegisterItems;
