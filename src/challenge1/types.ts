import {ReactElement} from "react";

/**
 * NOTE: As a part of challenge 1, you are NOT allowed to modify this file.
 */
export type AdminUser = {
    type: 'admin';
    id: number;
    name: `${string} ${string}`; // e.g. "John Doe"
    email: string;
};

export type RegularUser = {
    type: 'regular';
    id: number;
    name: `${string} ${string}`; // e.g. "John Doe"
    email: string;
    subscriptionTier: 'free' | 'premium';
};

export type GuestUser = {
    type: 'guest';
    sessionId: string;
};

export type User = AdminUser | RegularUser | GuestUser;

export interface UserDisplayComponent {
    (user: User): ReactElement;
}
