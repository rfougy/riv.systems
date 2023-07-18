/**
 * @see https://developers.mailerlite.com/docs/subscribers.html#create-upsert-subscriber
 */
export interface IMailerLiteSubscriber {
  email: string;
  fields?: any;
  groups?: ("youtube" | "website" | "instagram")[];
  status?: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
  subscribed_at?: string;
  ip_address?: string;
  opted_in_at?: string;
  optin_ip?: string;
  unsubscribed_at?: string;
}
