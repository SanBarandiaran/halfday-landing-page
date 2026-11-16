import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions - Halfday",
  description: "The terms that govern your use of Halfday.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="November 13, 2026"
      sections={[
        {
          heading: "Agreement to Terms",
          body: [
            "By accessing or using Halfday, you agree to be bound by these Terms & Conditions. If you do not agree, do not use the service.",
          ],
        },
        {
          heading: "Use of the Service",
          body: [
            "You agree to use Halfday only for its intended purpose of tracking your subscriptions, and not to misuse the service or interfere with its operation.",
          ],
        },
        {
          heading: "Accounts",
          body: [
            "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
          ],
        },
        {
          heading: "Subscriptions & Billing",
          body: [
            "Some features of Halfday require a paid plan. Fees are billed in advance on a recurring basis and are non-refundable except as required by law.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "Halfday and its original content, features, and functionality are owned by us and are protected by applicable intellectual property laws.",
          ],
        },
        {
          heading: "Termination",
          body: [
            "We may suspend or terminate your access to Halfday at any time for conduct that violates these terms or is otherwise harmful to other users or the service.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "Halfday is provided \"as is\" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any indirect or consequential damages.",
          ],
        },
        {
          heading: "Governing Law",
          body: ["These terms are governed by the laws of the jurisdiction in which Halfday operates, without regard to conflict of law principles."],
        },
        {
          heading: "Changes to These Terms",
          body: ["We may update these Terms & Conditions from time to time. Continued use of Halfday after changes take effect constitutes acceptance of the new terms."],
        },
        {
          heading: "Contact Us",
          body: ["If you have questions about these Terms & Conditions, contact us at legal@halfday.app."],
        },
      ]}
    />
  );
}
