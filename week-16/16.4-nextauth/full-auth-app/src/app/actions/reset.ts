"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetFormType, ResetSchema } from "@/schemas";

export const reset = async (values: ResetFormType) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (validatedFields.success) {
    const { email } = validatedFields.data;

    const user = await getUserByEmail(email);
    if (!user) {
      return { error: "Email does not exist!" };
    }

    // Generate token for this user

    const passwordResetToken = await generatePasswordResetToken(
      user.email as string
    );

    await sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token
    );
    return { success: "Reset email sent!" };
  } else {
    return { error: "Invalid email!" };
  }
};
