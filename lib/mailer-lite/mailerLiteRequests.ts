import MailerLite from "@mailerlite/mailerlite-nodejs";

import { IMailerLiteSubscriber } from "../../interfaces/mailer-lite/IMailerLiteSubscriber";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY as string,
});

export async function getMailerLiteGroups(params?: any): Promise<void> {
  await mailerlite.groups
    .get(params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) console.log(error.response.data);
    });
}

export async function createMailerLiteSubscriber(
  params: IMailerLiteSubscriber
): Promise<void> {
  mailerlite.subscribers
    .createOrUpdate(params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) console.log(error.response.data);
    });
}
