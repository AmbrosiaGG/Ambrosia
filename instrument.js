import * as Sentry from "@sentry/bun";
Sentry.init({
  dsn: "https://2f0aae79537a6b41f3e0ceb5eb82a6ce@o4507255465508864.ingest.de.sentry.io/4507255471276112",
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
});
