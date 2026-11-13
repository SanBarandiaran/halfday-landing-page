import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy - Subby",
  description: "How Subby collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 13, 2026"
      sections={[
        {
          heading: "Introduction",
          body: [
            "This Privacy Policy explains how Subby (\"we\", \"us\") collects, uses, and shares information when you use our website and services.",
          ],
        },
        {
          heading: "Information We Collect",
          body: [
            "We collect information you provide directly, such as your name and email address, as well as information about the subscriptions you choose to track, including merchant names, amounts, and renewal dates.",
          ],
        },
        {
          heading: "How We Use Information",
          body: [
            "We use the information we collect to provide and improve the service, send renewal reminders, and communicate with you about your account.",
          ],
        },
        {
          heading: "Data Sharing",
          body: [
            "We do not sell your personal information. We may share information with service providers who help us operate Subby, subject to confidentiality obligations.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "We use cookies and similar technologies to keep you signed in and to understand how the service is used.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable technical and organizational measures to protect your information, but no method of transmission or storage is completely secure.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "Depending on where you live, you may have rights to access, correct, or delete your personal information. Contact us to make a request.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page.",
          ],
        },
        {
          heading: "Contact Us",
          body: ["If you have questions about this Privacy Policy, contact us at privacy@subby.app."],
        },
      ]}
    />
  );
}
