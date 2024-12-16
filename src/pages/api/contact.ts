import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { SendMailOptions } from 'nodemailer';

const ContactApi = (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions: SendMailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `Contact form submission from ${name}`,
    html: `<p>You have a contact form submission</p>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <br>
        <p><strong>Message: </strong> ${message}</p>
      `,
  };

  try {
    transporter.sendMail(mailOptions, async (error, success) => {
      // error message sent
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: 'Massage not sent',
          description: 'Some thing is wrong. Please try again',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Massage is sent',
        description:
          'Your massage is sent. We will replay you as soon as possible.',
      });
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Massage not sent',
      description: error.message || error.toString(),
    });
  }
};

export default ContactApi;
