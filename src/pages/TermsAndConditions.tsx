import React from 'react';

const terms = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using the Payroll SaaS Application (the "Service") provided by CEPL (Cedur Enterprises Pvt. Ltd.), ("we," "us," or "our"), you agree to comply with and be bound by the terms and conditions set forth in this agreement (the "Terms of Service"). If you do not agree to these Terms of Service, please do not use the Service.`
  },
  {
    title: 'User Responsibilities',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li><b>Accuracy of Information:</b> You, the user, are solely responsible for the accuracy and completeness of the information, data, and content you provide through the Service. We do not assume responsibility for any errors or omissions in the information you provide.</li>
        <li><b>Compliance with Laws:</b> You are responsible for ensuring that your use of the Service is in compliance with all applicable laws and regulations, including but not limited to tax laws, labor laws, and data protection regulations. We are not liable for any legal consequences resulting from your non-compliance.</li>
        <li><b>Data Security:</b> While we employ security measures to protect your data, you are responsible for maintaining the security and confidentiality of your login credentials. Any unauthorized access to your account due to your failure to safeguard your credentials is your responsibility.</li>
        <li><b>Backups:</b> It is your responsibility to regularly backup your data and files. We are not responsible for any loss of data or files.</li>
        <li><b>User Support:</b> You are responsible for seeking assistance from our support team if you encounter any issues while using the Service. We will make reasonable efforts to assist you, but we do not guarantee problem resolution.</li>
      </ul>
    )
  },
  {
    title: 'Limitation of Liability',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li><b>No Warranty:</b> We provide the Service "as is" and make no warranties or representations regarding its performance, availability, or fitness for a particular purpose. We do not guarantee that the Service will be error-free or uninterrupted.</li>
        <li><b>Indirect Damages:</b> In no event shall we be liable for any indirect, consequential, incidental, special, or punitive damages, including but not limited to lost profits, even if we have been advised of the possibility of such damages.</li>
        <li><b>Maximum Liability:</b> Our maximum liability for any claim related to your use of the Service shall not exceed the fees you paid for the Service in the three (3) months preceding the claim.</li>
      </ul>
    )
  },
  {
    title: 'Termination',
    content: `We reserve the right to terminate or suspend your access to the Service at our sole discretion, without prior notice, if you violate these Terms of Service. Upon termination, you must cease using the Service and destroy any copies of the Service in your possession.`
  },
  {
    title: 'Changes to Terms',
    content: `We may modify these Terms of Service at any time, and it is your responsibility to review them periodically. Your continued use of the Service after any changes constitutes acceptance of those changes.`
  },
  {
    title: 'Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.`
  },
  {
    title: 'Intellectual Property',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li><b>Ownership:</b> All intellectual property rights related to the Service, including but not limited to software, content, and trademarks, are owned by CEPL. Your use of the Service does not grant you any rights to our intellectual property.</li>
        <li><b>User Content:</b> Any content, data, or materials you submit or upload to the Service remains your property. You grant us a non-exclusive, worldwide license to use, modify, and display this content solely for the purpose of providing the Service, which include marketing.</li>
      </ul>
    )
  },
  {
    title: 'User Indemnification',
    content: `You agree to indemnify, defend, and hold us harmless from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or in connection with your use of the Service, your violation of these Terms of Service, or your infringement of any third-party rights.`
  },
  {
    title: 'Third-Party Services and Links',
    content: `The Service may include links to third-party websites, applications, or services. We are not responsible for the content, availability, or functionality of these third-party services. Your use of third-party services is subject to their terms and conditions.`
  },
  {
    title: 'Confidentiality',
    content: `Both parties agree to keep any non-public information or data obtained during the use of the Service confidential and not to disclose it to any third party unless required by law.`
  },
  {
    title: 'Dispute Resolution',
    content: `In the event of any dispute arising under or in connection with these Terms of Service, the parties agree to negotiate in good faith to resolve the dispute. If a resolution cannot be reached through negotiation, the parties agree to submit the dispute to binding arbitration in accordance with the rules of Indian Judicial System and the award rendered by the arbitrator(s) shall be final and binding. Each party shall bear its own costs associated with the arbitration.`
  },
  {
    title: 'Entire Agreement',
    content: `These Terms of Service constitute the entire agreement between you and us, supersedes any prior agreements, and cannot be altered except in writing and signed by both parties.`
  },
  {
    title: 'Severability',
    content: `If any provision of these Terms of Service is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.`
  },
  {
    title: 'Payments',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li><b>Fees:</b> You agree to pay the fees associated with your use of the Service as outlined in your subscription plan. Payment is due as specified in the billing cycle, typically monthly or annually.</li>
        <li><b>Billing Information:</b> You are responsible for providing accurate billing and payment information. Failure to do so may result in the suspension or termination of your access to the Service.</li>
        <li><b>Late Payments:</b> In the event of late payments, we may charge late fees or suspend your access to the Service until payment is received.</li>
      </ul>
    )
  },
  {
    title: 'Refunds',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li><b>No Refunds:</b> We do not provide refunds for fees already paid. All payments are non-refundable.</li>
        <li><b>Cancellation:</b> If you choose to cancel your subscription, you will not receive a refund for the remaining unused portion of your subscription period.</li>
        <li><b>Money Back Period:</b> The above policy will be mute for the Money Back period wherein you have the provision of cancelling your subscription through official channels within 30 days of your purchase and receive a one-time only refund of the current bill cycle amount.</li>
      </ul>
    )
  },
  {
    title: 'Changes to Pricing',
    content: `We reserve the right to change our pricing and subscription plans at any time. Any changes may or may not be communicated to you in advance, and you will have the option to accept the new pricing or cancel your subscription.`
  },
  {
    title: 'Invoicing and Receipts',
    content: `Invoices for your subscription fees will be provided electronically, and you will have access to your payment receipts through your account on the Service.`
  },
  {
    title: 'Taxation',
    content: `You are responsible for paying any applicable taxes related to your use of the Service. If we are required to collect and remit taxes on your behalf, these will be added to your invoices.`
  },
  {
    title: 'Automatic Renewal',
    content: `Your subscription may be set to automatically renew unless you cancel it before the renewal date. You will be notified of upcoming renewals, and you can manage your subscription settings in your account.`
  },
];

const TermsAndConditions = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8 pt-24">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">Terms and Conditions</h1>
      <p className="text-center text-gray-500 mb-8">Effective Date: 1 Oct 2023</p>
      <div className="divide-y divide-gray-200">
        {terms.map((term, idx) => (
          <div key={idx} className="py-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{term.title}</h2>
            <div className="text-gray-800 text-lg leading-relaxed">{term.content}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">
        For any questions or concerns, contact us at <a href="mailto:info@cedurnow.com" className="text-blue-700 underline">info@cedurnow.com</a>.
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
