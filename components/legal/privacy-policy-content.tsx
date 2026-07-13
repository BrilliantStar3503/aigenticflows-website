export function PrivacyPolicyContent() {
  return (
    <>
      <p>
        This Privacy Policy explains how <strong>AIGENTIC Flows</strong> ("AIGENTIC Flows," "we," "us," or "our")
        collects, uses, shares, and protects information in connection with our website and our multi-tenant
        business operating platform — CRM, sales pipeline, and (for insurance agencies) production and recruitment
        tracking, offered under each customer agency's own branding (the "Service").
      </p>
      <p>
        This policy is written to align with the Philippines' Data Privacy Act of 2012 (Republic Act No. 10173,
        "RA 10173") and its Implementing Rules and Regulations. If your organization operates outside the
        Philippines, additional local requirements may also apply to your use of the Service; please contact us if
        you need a jurisdiction-specific addendum.
      </p>

      <h2>1. Who this policy covers, and two different roles we play</h2>
      <p>
        We collect information in two distinct capacities, and RA 10173 treats them differently:
      </p>
      <ul>
        <li>
          <strong>As a Data Controller</strong> — for account and billing-adjacent information about the people who
          sign up for, administer, or use the Service (Owners, Managers, Advisors, Recruiters, and website visitors
          who request a trial or contact us). We decide how this information is used.
        </li>
        <li>
          <strong>As a Data Processor</strong> — for the client, contact, and business data that an agency's own
          team enters into their workspace (for example, a client's name, contact details, or policy information).
          Your agency is the Data Controller for that information; we process it only on your agency's instructions,
          to provide the Service.
        </li>
      </ul>
      <p>
        If you are a client or prospect of one of our customer agencies and have a question about your own data,
        please contact that agency directly — they control that data, not us.
      </p>

      <h2>2. Information we collect</h2>
      <h3>2.1 Account and workspace information</h3>
      <ul>
        <li>Name, email address, and password (encrypted) when you create a trial account or are invited to a workspace.</li>
        <li>Agency/workspace details you provide during setup: agency name, industry, time zone, currency, locale, and branding.</li>
        <li>Role and workspace membership information (Owner, Manager, Advisor, or Recruiter).</li>
      </ul>
      <h3>2.2 Client and business data you or your team enter</h3>
      <ul>
        <li>Contact records: names, contact details, notes, tags, and activity history your team enters for your own clients and prospects.</li>
        <li>Business records: companies, deals, and (for insurance workspaces) policy, production, and recruitment records.</li>
        <li>Leads captured through a Facebook Lead Ads form you connect — see §5 below.</li>
      </ul>
      <h3>2.3 Technical and usage information</h3>
      <ul>
        <li>Log data such as IP address, browser type, device information, and timestamps, collected automatically when you use the website or the Service.</li>
        <li>Basic product usage information needed to operate and secure the Service (for example, sign-in activity).</li>
      </ul>
      <h3>2.4 Cookies</h3>
      <p>
        The Service uses cookies that are strictly necessary for sign-in and session security. We do not currently
        run third-party analytics or advertising tracking on our website or in the Service. If that changes, we
        will publish a separate Cookie Policy describing exactly what's used and, where required, ask for your
        consent before it runs.
      </p>

      <h2>3. How we use information</h2>
      <ul>
        <li>To provide, maintain, and secure the Service, including authenticating sign-ins and enforcing per-agency data isolation.</li>
        <li>To communicate with you about your account, trial, or subscription, including service and security notices.</li>
        <li>To respond to support requests and questions submitted through our website.</li>
        <li>To send product and marketing emails, where you have not opted out — every email includes an unsubscribe mechanism, and we honor opt-outs and bounces automatically.</li>
        <li>To improve and maintain the reliability of the Service.</li>
        <li>To comply with legal obligations and enforce our Terms of Service.</li>
      </ul>
      <p>
        We do not sell personal information, and we do not use client data entered into a customer's workspace for
        any purpose other than providing the Service to that customer.
      </p>

      <h2>4. How we share information</h2>
      <p>
        We share information only as needed to operate the Service, with the following categories of service
        providers acting on our behalf (sub-processors):
      </p>
      <ul>
        <li><strong>Hosting and infrastructure</strong> — our application is hosted on Vercel, with our database, authentication, and file storage provided by Supabase.</li>
        <li><strong>Email delivery</strong> — transactional and marketing emails are sent through Resend.</li>
        <li><strong>Facebook / Meta</strong> — if you connect a Facebook Lead Ads form, lead data is retrieved from Meta's platform via the connection you authorize; Meta's own privacy practices also apply to that data. See §5.</li>
      </ul>
      <p>
        We do not otherwise share personal information with third parties for their own marketing purposes. We may
        disclose information if required by law, to protect the rights and safety of AIGENTIC Flows or others, or in
        connection with a merger, acquisition, or sale of assets, subject to this policy continuing to apply to
        previously collected information.
      </p>

      <h2>5. Facebook Lead Ads integration</h2>
      <p>
        If an agency connects a Facebook Page and Lead Ads form to their workspace, leads submitted through that
        form are delivered to the workspace in real time. This data flow is subject to Meta's own Platform Terms
        and Data Use Policy in addition to this Privacy Policy. Agencies are responsible for having the appropriate
        consent to collect and process lead data through their connected Facebook Pages.
      </p>

      <h2>6. Data security</h2>
      <p>
        Every agency's data is isolated at the database level — tenant isolation is enforced by database-level
        access policies, not just application logic, so one agency's workspace cannot read or write another's data
        under normal operation. Data is encrypted in transit, and sensitive credentials (such as connected Facebook
        access tokens) are encrypted at rest. No system is perfectly secure, and we cannot guarantee absolute
        security, but we design and operate the Service with tenant isolation as a first-class requirement.
      </p>

      <h2>7. Data retention</h2>
      <p>
        We retain account and workspace data for as long as your agency's subscription is active, and for a
        reasonable period afterward to allow reactivation, comply with legal obligations, resolve disputes, and
        enforce our agreements. An agency may request deletion of their data as described in §8 below.
      </p>

      <h2>8. Your rights under RA 10173</h2>
      <p>
        If you are located in the Philippines, the Data Privacy Act gives you the following rights regarding your
        personal information:
      </p>
      <ul>
        <li><strong>Right to be informed</strong> — that your personal information will be, is being, or has been processed.</li>
        <li><strong>Right to access</strong> — to obtain a copy of your personal information we hold.</li>
        <li><strong>Right to object</strong> — to processing of your information, including for direct marketing.</li>
        <li><strong>Right to correction</strong> — to have inaccurate or outdated information corrected.</li>
        <li><strong>Right to erasure or blocking</strong> — to have your information removed or blocked from further processing, subject to legal retention requirements.</li>
        <li><strong>Right to data portability</strong> — to obtain a copy of your information in an electronic format.</li>
        <li><strong>Right to damages</strong> — for any damage sustained due to inaccurate, incomplete, outdated, false, unlawfully obtained, or unauthorized use of your personal information.</li>
        <li><strong>Right to file a complaint</strong> — with the National Privacy Commission (NPC) if you believe your rights have been violated.</li>
      </ul>
      <p>
        To exercise any of these rights over account or website information we control, contact us using the
        details in §12. If your request concerns client data entered into a specific agency's workspace, we will
        direct you to that agency, since they control that data.
      </p>

      <h2>9. International data transfers</h2>
      <p>
        Our infrastructure providers may process and store data in locations outside the Philippines. Where this
        occurs, we require our providers to maintain security and confidentiality protections consistent with this
        policy and applicable law.
      </p>

      <h2>10. Children's privacy</h2>
      <p>
        The Service is intended for business use by adults and is not directed at children. We do not knowingly
        collect personal information from children.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will update the effective date above when we do,
        and, where changes are material, provide additional notice.
      </p>

      <h2>12. Contact us</h2>
      <p>
        Questions about this policy, or requests to exercise your rights under §8, can be sent to:{" "}
        <a href="mailto:privacy@aigenticflows.com">privacy@aigenticflows.com</a>.
      </p>
      <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-[13px] leading-relaxed text-amber-900">
        <strong>Placeholder notice:</strong> this document references a placeholder contact email
        (privacy@aigenticflows.com) and does not yet include a registered legal entity name or business address.
        Replace these before this policy is treated as final, and have it reviewed by qualified counsel before
        relying on it, particularly for RA 10173 compliance.
      </p>
    </>
  );
}
