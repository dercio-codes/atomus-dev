import { format_email } from "../../lib/package-selection-html";
import { send_email } from "../../lib/emailer";

export default async function handler(req, res) {
  console.log(req.body);
  const name = req.body["name"];
  const email = req.body["email"];
  const tel = req.body["tel"];
  const company = req.body["company"];
  const packageName = req.body["packageName"];

  const email_html = format_email(company, name, email, tel, packageName);

  const headline = `${packageName} Package Selection From ${name}`;

  try {
    await send_email(headline, email_html);
    res.status(200).send({ message: "MAIL_SENT" });
  } catch (err) {
    console.log(err.message);
    res.status(200).send({ message: "MAIL_NOT_SENT", err: err });
  }
}
