import z from "zod";

const envSchema = z.object({
    REACT_APP_DOMAIN: z.string(),
    REACT_APP_AUD: z.string(),
    REACT_APP_CLIENT_ID: z.string(),
})

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.log("Invalid environment variables", _env.error.format());
    console.log(process.env)
    throw new Error("Invalid environment variables");
}

export const env = _env.data;