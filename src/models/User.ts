export interface User {
    id:number
    full_name: string;
    city: string;
    country:string;
    bio: string;
    photo: string;
    email?:string
}

export interface AuthState {
  user: User | null;
}

export interface AuthFormProps {
    onClose : () => void
}