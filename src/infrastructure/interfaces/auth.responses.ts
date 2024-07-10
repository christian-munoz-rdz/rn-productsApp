
export interface AuthResponse {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
    token:    string;
}

export interface RegisterResponse {
    email:    string;
    fullName: string;
    id:       string;
    isActive: boolean;
    roles:    string[];
    token:    string;
}
