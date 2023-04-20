import { format_email } from "../../lib/standard-email-html-template";
import { send_email } from "../../lib/emailer";

export default async function handler(req, res) {
  const name = req.body["name"];
  const email = req.body["enail"];
  const tel = req.body["tel"];
  const query = req.body["query"];

  const email_html = format_email(name, email, tel, query);

  const headline = `Contact Query From ${name}`;

  try {
    await send_email(headline, email_html);
    res.status(200).send({ message: "MAIL_SENT" });
  } catch (err) {
    console.log(err.message);
    res.status(200).send({ message: "MAIL_NOT_SENT", err: err });
  }
}
