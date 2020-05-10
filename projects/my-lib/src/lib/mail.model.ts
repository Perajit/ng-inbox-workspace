export interface Mail {
  from: MailSender;
  time: Date;
  subject: string;
  body: string;
}

export interface MailResponse {
  from: MailSender;
  time: string;
  subject: string;
  body: string;
}

interface MailSender {
  name: string;
  email: string;
}
