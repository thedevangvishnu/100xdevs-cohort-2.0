import { getUserByEmail } from "@/data/user";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  const user = await getUserByEmail(email);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm Your Email",
    html: `
            <h3>Hello ${user?.name}</h3>
            <p>Click <a href="${confirmLink}">here</a> to confirm your email and activate your account!</p>
            `,
  });
};
