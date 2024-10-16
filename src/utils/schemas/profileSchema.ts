export const profileSchema = {
    type: "object",
    properties: {
        fullName: { type: "string", minLength: 1 },
        email: {
            type: "string",
            pattern: "^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\\.[a-zA-Z]{2,}$",
        },
        dob1: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
        gender: { type: "string", enum: ["male", "female", "other"] },
        mobileNumber: { type: "string", pattern: "^[0-9]{10}$" },
    },
    required: ["fullName", "email", "dob1", "gender", "mobileNumber"],
    additionalProperties: false,
};
