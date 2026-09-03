export interface IUser { 
   id: number;
   name: string;
   email: string;
   password?: string;
   role: 'user' | 'salon-spa-owner' | 'salom-spa-owner' | 'admin';
   is_active?: boolean;
   created_at?: string; 
   updated_at?: string;
}