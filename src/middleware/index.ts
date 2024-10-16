import { Request, Response, NextFunction } from 'express';
import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true, coerceTypes: true });

export const validateSchema = (schema: object) => {
    console.log("Validating Schema")
    const validate = ajv.compile(schema);
    console.log(validate)
    return (req: Request, res: Response, next: NextFunction): any => {
        const valid = validate(req.body);
        console.log("isValid:", valid)
        if (!valid) {
            const errors = validate.errors?.map((err) => ({
                message: err.message,
                field: err.instancePath.replace('/', ''),
            }));
            return res.status(400).json({
                message: 'Validation failed',
                errors: errors,
            });
        }
        console.log("Schema is Valid.")
        next();
    };
};
