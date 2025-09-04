import Script from 'next/script';

export const metadata = {
  title: 'UK Student Study Abroad Visa Consultants in Hyderabad Requirements and Processing Time',
    description: 'Best UK Student or Abroad Study Visa Consultants in Hyderabad to know the Requirements of UK Study Visa Applications and also Check the Eligibility to Study in UK, Get Free UK Student Visa Processing and Documentation Apply UK Student Visa Process with Experts of VJC Overseas',
    keywords: 'Best UK Study Visa Consultants in Hyderabad, UK Student Visa, UK Study Visa, Student Visa for UK, Best UK student Visa Consultants in Hyderabad, UK Visa Process for Students, How To Apply for UK Student Visa, UK Student Visa Requirements, UK Study Visa Application, Documents for UK Student Visa, UK Student Visa 2025, UK Student Visa Checklist, Study in UK Visa Process, UK Student Visa Processing Time, UK Student Visa Eligibility, UK Visa Process',
};

export default function ContactLayout({ children }) {
  return (
    <>
      {/* Google Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        strategy="afterInteractive"
        async
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16767451796');
        `}
      </Script>

      {children}
    </>
  );
}
