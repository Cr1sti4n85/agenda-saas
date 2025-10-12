export interface ContactCreationRequest {
  name: string;
  last_name: string;
  phone: string;
  email: string;
  age: number;
}

export interface ContactModel extends ContactCreationRequest {
  id: number;
  create_at: Date;
  user_id: string;
}
