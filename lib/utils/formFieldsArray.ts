interface Field {
    name: "fName" | "lName" | "state" | "email" | "phone",
    type: "text" | "number",
    placeholder: string,
    label: string
}

export const formFileds: Field[] = [
    {
        name: "fName",
        type: "text",
        placeholder: "Enter first name",
        label: "First Name"
    },
    {
        name: "lName",
        type: "text",
        placeholder: "Enter last name",
        label: "Last Name"
    },
    {
        name: "state",
        type: "text",
        placeholder: "Enter state",
        label: "State"
    },
    {
        name: "email",
        type: "text",
        placeholder: "Enter email",
        label: "Email"
    },
    {
        name: "phone",
        type: "number",
        placeholder: "Enter phone number",
        label: "Phone Number"
    }
]