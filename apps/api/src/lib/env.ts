function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const config = {
  port: process.env.PORT || 3000,
  databaseUrl: requireEnv("DATABASE_URL"),
  auth: {
    secret: requireEnv("BETTER_AUTH_SECRET"),
    url: requireEnv("BETTER_AUTH_URL"),
  },
  oauth: {
    googleClientId: process.env.GOOGLE_CLIENT_ID || "",
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    githubClientId: process.env.GITHUB_CLIENT_ID || "",
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  },
  frontend: {
    url: process.env.FRONTEND_URL || "http://localhost:3001",
  },
};
