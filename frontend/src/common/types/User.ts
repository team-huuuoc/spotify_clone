export interface IUser {
    id?: number | string;
    ho: string;
    ten: string;
    email: string;
    password: string;
    password_confirmation?: string;
    so_dien_thoai?: string;
    avatar?: string;
    dia_chi?: string;
    createdAt?: Date;
    updatedAt?: Date;
    role?: string;
    isActive?: boolean;
    checkboxs: boolean;
}
