import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";
import { config } from "../lib/env";
import { asyncHandler } from "../utils/async-handler";

export const oauthCallback = asyncHandler(async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const destination = session.user.username === null
    ? `${config.frontend.url}/onboarding`
    : `${config.frontend.url}/dashboard`;

  res.redirect(destination);
});
