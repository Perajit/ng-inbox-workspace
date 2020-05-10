export interface Mail {
  id: number;
  from: MailSender;
  time: Date;
  subject: string;
  body: string;
}

export interface MailResponse {
  id: number;
  from: MailSender;
  time: string;
  subject: string;
  body: string;
}

interface MailSender {
  name: string;
  email: string;
}
