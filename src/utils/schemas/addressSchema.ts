export const addressSchema = {
    type: "object",
    properties: {
        fullName: { type: "string", minLength: 1 },
        mobileNumber: { type: "string", pattern: "^[0-9]{10}$" },
        houseNo: { type: "string", minLength: 1 },
        sector: { type: "string", minLength: 1 },
        landmark: { type: "string", minLength: 1 },
        pincode: { type: "string", pattern: "^\\d{6}$" }, // Ensures a 6-digit pincode
        city: { type: "string", minLength: 1 },
        state: { type: "string", minLength: 1 },
        addressType: { type: "string", enum: ["Home", "Office", "Other"] },
    },
    required: [
        "fullName",
        "mobileNumber",
        "houseNo",
        "sector",
        "landmark",
        "pincode",
        "city",
        "state",
        "addressType",
    ],
    additionalProperties: false,

}