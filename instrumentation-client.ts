import * as Sentry from "@sentry/nextjs";

  Sentry.init({
    dsn: "https://0380ab2bfdb2b1729e786e9de6b288f7@o4509579981094912.ingest.us.sentry.io/4509580352749568",
    integrations: [
      Sentry.feedbackIntegration({
        colorScheme: "dark",
        position: "bottom-right", // Ensure the button is positioned correctly
        enabled: true, // Explicitly enable the feedback button
      }),
    ],
  });

  if (typeof window !== "undefined") {
    const observer = new MutationObserver(() => {
      const button = document.querySelector(".sentry-feedback-button");
      if (button) {
        button.setAttribute("style", "visibility: visible;");
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }