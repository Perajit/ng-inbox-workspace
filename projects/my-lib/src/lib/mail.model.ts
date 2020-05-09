export interface Mail {
  from: {
    name: string;
    email: string;
  };
  subject: string;
  body: string;
}
