import React from 'react';

const policySections = [
  {
    title: 'Compliance with Laws and Regulations',
    content: `Users of Cedur software must comply with all applicable laws, regulations, and industry standards related to payroll processing, tax reporting, and data privacy. This includes but is not limited to laws such as the tax laws, and data protection regulations.`
  },
  {
    title: 'Data Privacy and Confidentiality',
    content: `Users of Cedur software must ensure the privacy and confidentiality of employee data. This includes taking appropriate measures to protect sensitive information from unauthorized access, use, or disclosure. Users should adhere to data protection laws and regulations, and implement security measures such as strong passwords, encryption, and access controls.`
  },
  {
    title: 'Accurate and Timely Data Entry',
    content: `Users are responsible for providing accurate and up-to-date employee data, including personal information, employment details, and payroll-related information. Users should verify the accuracy of data before processing payroll to avoid errors or discrepancies.`
  },
  {
    title: 'Use of Authorized Data',
    content: `Users must ensure that they have the necessary rights and authorizations to use the data entered into Cedur software. Users should not enter or process data without proper authorization or consent from the individuals concerned.`
  },
  {
    title: 'Non-Disclosure of Software Access Credentials',
    content: `Users must keep their login credentials and any other access information for Cedur software confidential. Sharing of login information or allowing unauthorized individuals to access the software is strictly prohibited. Each user should have their unique login credentials.`
  },
  {
    title: 'Backup and Disaster Recovery',
    content: `Users should regularly back up their payroll data and implement appropriate disaster recovery measures. This helps ensure data integrity and availability in case of system failures, natural disasters, or other unforeseen events.`
  },
  {
    title: 'Prohibited Activities',
    content: `Users must not use Cedur software for any illegal, unethical, or fraudulent activities. This includes but is not limited to unauthorized access to data, attempts to modify or delete records without proper authorization, or using the software for purposes other than business payroll processing.`
  },
  {
    title: 'Support and Updates',
    content: `Users should keep the software up to date by installing the latest updates and patches provided by the software vendor. Users should also seek technical support from the vendor or authorized support channels when encountering issues or questions related to the software.`
  },
  {
    title: 'Training and Competence',
    content: `Users should possess the necessary skills and knowledge to operate Cedur software effectively. Adequate training should be provided to users to ensure they understand how to use the software and comply with relevant policies and procedures.`
  },
  {
    title: 'Liability and Indemnification',
    content: `Users are solely responsible for their use of Cedur software. The software vendor or provider shall not be held liable for any direct or indirect damages, losses, or legal disputes arising from the user's actions, including but not limited to errors in data entry, processing, or any non-compliance with laws and regulations.`
  },
  {
    title: 'User Access Controls',
    content: `Users should be assigned appropriate access levels and permissions based on their job roles and responsibilities. Access to sensitive payroll data and system settings should be restricted to authorized individuals only. Regular reviews of user access should be conducted to ensure that access rights are aligned with current job roles.`
  },
  {
    title: 'Record Retention and Disposal',
    content: `Users should adhere to record retention policies and legal requirements for retaining payroll records. Cedur software may provide options for archiving or deleting old records based on predefined retention periods. Users should follow these guidelines to ensure compliance with applicable laws and regulations.`
  },
  {
    title: 'Change Management',
    content: `Users should follow proper change management procedures when making any modifications or updates to Cedur software configuration, such as changes to tax rates, deduction rules, or employee information. All changes should be documented, tested, and implemented following a structured change control process to ensure accuracy and minimize disruptions.`
  },
  {
    title: 'Prohibited Software Modifications',
    content: `Users are restricted from modifying Cedur software's source code, database structure, or any other components without explicit permission from the software vendor or authorized personnel. Unauthorized modifications may lead to system instability, data corruption, or other undesirable consequences.`
  },
  {
    title: 'Reporting and Documentation',
    content: `Users should generate accurate and comprehensive payroll reports as required by their organization's policies, legal obligations, and regulatory authorities. Users should retain these reports securely and make them available for internal and external audits, as well as for any legal or compliance requirements.`
  },
  {
    title: 'Vendor Support and Maintenance',
    content: `Users should maintain a valid support contract or agreement (included in the subscription) with Cedur software vendor to receive necessary software updates, bug fixes, and technical assistance. Users should promptly install recommended updates and patches to ensure the security and stability of the software.`
  },
  {
    title: 'Disaster Recovery and Business Continuity',
    content: `Users should develop and maintain a disaster recovery plan that includes procedures for data backup, system restoration, and business continuity in case of unforeseen events such as natural disasters, cyber-attacks, or system failures. Regular testing of the plan should be conducted to validate its effectiveness.`
  },
  {
    title: 'Training and Awareness',
    content: `Users should participate in ongoing training and educational programs to enhance their understanding of payroll processing, tax regulations, and software usage. This includes staying informed about changes in laws or regulations that may impact payroll practices and adapting the use of the software accordingly.`
  },
  {
    title: 'Non-Discrimination and Equal Opportunity',
    content: `Users should process payroll in a fair and unbiased manner, ensuring equal treatment for all employees regardless of their race, colour, religion, sex, national origin, age, disability, or any other protected characteristic. Users should follow applicable anti-discrimination laws and regulations.`
  },
  {
    title: 'Conflict of Interest',
    content: `Users should avoid any conflicts of interest that may compromise the integrity of Cedur processing. This includes refraining from engaging in activities that could result in personal gain or favouritism at the expense of accurate and fair payroll calculations.`
  },
  {
    title: 'Dispute Resolution',
    content: `In the event of any disputes or disagreements related to Cedur software, users should follow established dispute resolution procedures, which may include mediation or arbitration. Users should aim to resolve issues in a timely and professional manner to minimize disruptions to payroll operations.`
  },
  {
    title: 'Training Materials and Documentation',
    content: `Users should utilize training materials and documentation provided by the software vendor or authorized sources to enhance their understanding of Cedur software. Users should not distribute or reproduce these materials without proper authorization to maintain their integrity and accuracy.`
  },
  {
    title: 'Communication and Transparency',
    content: `Users should communicate any known issues, errors, or discrepancies related to Cedur software promptly to the appropriate stakeholders, such as HR personnel, supervisors, or system administrators. Open and transparent communication helps in resolving problems effectively and maintaining trust among users and stakeholders.`
  },
  {
    title: 'Continuous Improvement',
    content: `Users should actively contribute to the improvement of Cedur software by providing feedback, suggestions, or reporting any software bugs or usability issues to the software vendor or support team. This helps in enhancing the functionality, usability, and overall performance of the software.`
  },
  {
    title: 'Social Engineering Awareness',
    content: `Users should be vigilant and aware of social engineering techniques that could be used to gain unauthorized access to Cedur software or sensitive employee information. Users should report any suspicious requests for information or attempts to deceive or manipulate them to appropriate security personnel.`
  },
  {
    title: 'Termination or Change of Employment',
    content: `Users should promptly inform the appropriate personnel or system administrators when an employee's employment is terminated or their job roles change. This ensures that access rights and permissions are updated or revoked in a timely manner to prevent unauthorized access to Cedur software.`
  },
  {
    title: 'Third-Party Service Providers',
    content: `If users engage the services of third-party providers for payroll-related activities, such as tax filing or benefits administration, they should ensure that these providers adhere to applicable laws, regulations, and industry standards. Users should enter into appropriate agreements with third-party providers to protect the confidentiality and security of employee data.`
  },
  {
    title: 'User Responsibility for Third-Party Integration',
    content: `If users integrate Cedur software with other systems or software applications, they are responsible for ensuring the compatibility, security, and proper functioning of such integrations. Users should follow best practices and guidelines provided by the software vendor or authorized experts when integrating the software with external systems.`
  },
  {
    title: 'Monitoring and Auditing',
    content: `Users should be aware that Cedur software may include monitoring and auditing features to track user activities and system usage. Such monitoring is essential for ensuring compliance, detecting unauthorized access, and maintaining the integrity of Cedur process. Users should not attempt to circumvent or disable these monitoring mechanisms.`
  },
];

const Policy = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8 pt-24">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">Fair User Policy</h1>
      <div className="divide-y divide-gray-200 mt-6">
        {policySections.map((section, idx) => (
          <div key={idx} className="py-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{section.title}</h2>
            <div className="text-gray-800 text-lg leading-relaxed">{section.content}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">
        For any questions or concerns, contact us at <a href="mailto:info@cedurnow.com" className="text-blue-700 underline">info@cedurnow.com</a>.
      </div>
    </div>
  </div>
);

export default Policy;
