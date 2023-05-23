import { isValidObjectId } from "mongoose";
import { z } from 'zod';

export const getUserSchema = z.object({
    params: z.object({
        id: z.custom(isValidObjectId),
    }),
});

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().min(3).max(50),
        email: z.string().email(),
        password: z.string().min(6).max(20),
    }),
});

export const updateUserSchema = z.object({
    body: z.object({
        name: z.string().min(3).max(50).optional(),
        email: z.string().email().optional(),
    }),
    params: z.object({
        id: z.custom(isValidObjectId),
    }),
});

export const updateUserPasswordSchema = z.object({})