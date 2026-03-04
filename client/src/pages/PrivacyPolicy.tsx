import ServicePageLayout from "./services/ServicePageLayout";

export default function PrivacyPolicy() {
  return (
    <ServicePageLayout title="Privacy Policy">
      <p className="text-sm text-[var(--medium-gray)] mb-8">
        <strong>Effective Date:</strong> March 4, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> March 4, 2026
      </p>

      <p className="text-lg text-[var(--medium-gray)] mb-8">
        Ameyem Geo Solutions Private Limited (&quot;Ameyem,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy and personal information of our users, clients, and website visitors. This Privacy Policy explains how we collect, use, store, and protect your information when you use our websites and digital platforms.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">1. Information We Collect</h2>
        <p className="text-[var(--medium-gray)] mb-4">
          We collect limited personal information necessary to provide our services and improve your experience:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--medium-gray)]">
          <li><strong>Account Information:</strong> Name, email address, login credentials, and profile details when you create an account on any of our platforms.</li>
          <li><strong>Contact Information:</strong> Name, email address, and message content when you submit our contact form.</li>
          <li><strong>Usage Data:</strong> Pages visited, features used, and general interaction patterns to improve our services.</li>
          <li><strong>Technical Data:</strong> Browser type, device information, and IP address collected automatically for security and analytics purposes.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">2. How We Use Your Information</h2>
        <p className="text-[var(--medium-gray)] mb-4">Your information is used exclusively for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--medium-gray)]">
          <li>Providing, maintaining, and improving our services and platforms</li>
          <li>User authentication and account management</li>
          <li>Personalizing your experience across our digital products</li>
          <li>Responding to inquiries and providing customer support</li>
          <li>Communicating service updates, security alerts, and relevant information</li>
          <li>Ensuring the security and integrity of our systems</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">3. Data Protection Measures</h2>
        <p className="text-[var(--medium-gray)] mb-4">We implement robust security measures to protect your personal information:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--medium-gray)]">
          <li><strong>Encryption:</strong> All our websites and platforms use HTTPS (SSL/TLS) encryption for data in transit.</li>
          <li><strong>Access Controls:</strong> Restricted internal access to sensitive data on a need-to-know basis.</li>
          <li><strong>Infrastructure Security:</strong> Secure hosting infrastructure with firewall protection and intrusion prevention.</li>
          <li><strong>Authentication:</strong> Strong password protection mechanisms and secure session management.</li>
          <li><strong>Monitoring:</strong> Regular software updates, vulnerability patching, and continuous security monitoring.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">4. Data Sharing and Third Parties</h2>
        <p className="text-[var(--medium-gray)] mb-4">
          <strong>We do not sell your personal information to third parties.</strong>
        </p>
        <p className="text-[var(--medium-gray)] mb-4">We may share limited information only in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--medium-gray)]">
          <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our platforms (e.g., hosting, payment processing, analytics), bound by confidentiality agreements.</li>
          <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
          <li><strong>Business Protection:</strong> To protect the rights, safety, and property of Ameyem, our users, or the public.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">5. Data Retention</h2>
        <p className="text-[var(--medium-gray)]">
          We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, it is securely deleted or anonymized.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">6. Your Rights</h2>
        <p className="text-[var(--medium-gray)] mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--medium-gray)]">
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
          <li><strong>Opt-out:</strong> Unsubscribe from non-essential communications at any time.</li>
        </ul>
        <p className="text-[var(--medium-gray)] mt-4">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:ab@ameyem.com" className="text-[var(--ocean-blue)] hover:underline">ab@ameyem.com</a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">7. Cookies and Tracking</h2>
        <p className="text-[var(--medium-gray)]">
          Our websites may use essential cookies for authentication and session management. We do not use third-party tracking cookies for advertising purposes. Analytics data is collected in aggregate form to improve our services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">8. Our Platforms</h2>
        <p className="text-[var(--medium-gray)] mb-4">This privacy policy applies to all Ameyem-operated websites and platforms, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--medium-gray)]">
          <li><strong>ameyem.com</strong> — Company portal and geoscience consulting</li>
          <li><strong>chess99.com</strong> — Online chess platform</li>
          <li><strong>sambandhalu.com</strong> — Telugu matrimonial platform</li>
          <li><strong>santhati.com</strong> — Family tree visualization</li>
          <li><strong>storylikho.com</strong> — AI-powered writing platform</li>
          <li><strong>thogata.co.in</strong> — Community portal</li>
        </ul>
        <p className="text-[var(--medium-gray)] mt-4">
          Each platform may collect information specific to its functionality. The same data protection standards described here apply across all platforms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">9. Children&apos;s Privacy</h2>
        <p className="text-[var(--medium-gray)]">
          Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly. Our educational platform (ChittiBadi) is designed for use by children under parental supervision.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">10. Changes to This Policy</h2>
        <p className="text-[var(--medium-gray)]">
          We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify users of material changes by posting the updated policy on this page with a revised &quot;Last Updated&quot; date.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">11. Contact Us</h2>
        <p className="text-[var(--medium-gray)] mb-4">
          If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="bg-gray-50 rounded-lg p-6 text-[var(--medium-gray)]">
          <p className="font-semibold text-[var(--charcoal)]">Ameyem Geo Solutions Private Limited</p>
          <p>CIN: U72900TG2016PTC112396</p>
          <p>Vanasthalipuram, Hyderabad, Rangareddy, Telangana, 500070</p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:ab@ameyem.com" className="text-[var(--ocean-blue)] hover:underline">ab@ameyem.com</a>
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
