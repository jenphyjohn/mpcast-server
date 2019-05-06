import { UserMeta } from '../../entity';
export declare class UserDto {
    readonly identifier: string;
    passwordHash?: string;
    displayName?: string;
    verified?: boolean;
    verificationToken?: string | null;
    identifierChangeToken?: string | null;
    metas?: UserMeta[];
}
