import Image from 'next/image';
import Link from 'next/link';

const PassportServices = () => {
  return (
    <div className="w-full bg-white p-8">
      {/* Heading */}
      <div
        className="text-black  font-serif mb-8"
        style={{ fontFamily: 'Times New Roman', serif: true }}
      >
        <h1 className="text-2xl md:text-2xl font-bold text-center md:text-left">
          <span className="text-orange-500">Passport Services for VJC Overseas</span>: Your Trusted Partner for Smooth Travel Documentation
        </h1>
      </div>

      {/* Image and First Paragraph Side by Side */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        {/* Image */}
        <div className="mb-4 md:mb-0 md:mr-8">
          <Image
            src="/passportservices.webp"
            alt="Passport Services"
            width={500}
            height={300}
            className=" shadow-md"
          />
        </div>

        {/* First Paragraph */}
        <div
          className="text-black font-serif"
          style={{ fontFamily: 'Times New Roman', serif: true }}
        >
          <p className="text-lg">
            At <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">VJC Overseas</Link>, we understand how crucial it is to have your passport in order for seamless international travel. Whether you're planning a family vacation, a business trip, or seeking opportunities abroad, having a valid passport is your first step toward your journey. Our passport services are designed to provide you with a hassle-free, fast, and reliable solution for all your passport needs.
          </p>
        </div>
      </div>

      {/* Rest of the content */}
      <div
        className="text-black font-serif"
        style={{ fontFamily: 'Times New Roman', serif: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose <span className="text-orange-500">VJC Overseas</span> for Passport Services?
        </h2>
        <ul className="list-disc pl-8 mb-4">
          <li>
            Expert Guidance: We offer personalized consultations and expert guidance to help you understand the passport application or renewal process, ensuring that every step is completed accurately. For complex cases, our <Link href="https://www.vjcoverseas.com/services" className="text-orange-500 font-bold">Immigration Support Services</Link> provide additional assistance.
          </li>
          <li>
            Quick Processing Times: We prioritize time-sensitive applications, offering expedited services for urgent passport needs, so you can get your passport faster.
          </li>
          <li>
            Comprehensive Services: From first-time passport applications to passport renewals and corrections, we cover all aspects of passport processing. For travelers, we also connect with <Link href="https://www.vjcoverseas.com/tours-ticketing" className="text-orange-500 font-bold">Travel and Tourism Packages</Link> to complete your journey planning.
          </li>
          <li>
            Affordable Rates: We provide competitive pricing for passport services without compromising on the quality or speed of our service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Passport Services Include:</h2>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            First-Time Passport Application: Applying for a passport for the first time can be overwhelming. Let our experienced team guide you through the entire process to ensure that your passport application is submitted correctly, avoiding unnecessary delays. Many of our first-time applicants later opt for guidance from <Link href="https://www.vjcoverseas.com/study-abroad" className="text-orange-500 font-bold">Study Abroad Consultants</Link> when pursuing international education.
          </li>
          <li>
            Passport Renewal Services: Don’t let your passport expire before your trip! Whether your passport is close to expiring or already expired, we offer passport renewal services to help you renew it quickly, so you’re ready to travel.
          </li>
          <li>
            Passport Correction: A mistake on your passport can create major travel issues. If there is an error in your passport details, such as a name typo, we can help you with passport corrections efficiently.
          </li>
          <li>
            Lost or Stolen Passport Assistance: If your passport is lost or stolen, we provide assistance with applying for a replacement passport, ensuring you can get back on track as soon as possible. Our team helps you understand the necessary steps to report your lost passport and handle the required paperwork. To stay compliant for future travel, connect with trusted <Link href="https://www.vjcoverseas.com/visit-visas" className="text-orange-500 font-bold">Visit Visa Consultants</Link>.
          </li>
          <li>
            Passport Update Services (For Name Changes, Marital Status, etc.): Life events such as marriage or a legal name change can require updates to your passport. We provide passport update services for name changes, gender changes, and other necessary updates to keep your documentation accurate.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">
          How We Make Passport Services Easy for You
        </h2>
        <ul className="list-disc pl-8 mb-4">
          <li>
            Step-by-Step Support: From the initial consultation to the final delivery of your passport, we will be with you every step of the way to ensure a smooth and efficient process. Many clients also rely on us as <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">Best Visa Immigration Consultants</Link> for complete documentation support.
          </li>
          <li>
            Clear Communication: Our team ensures that you are well-informed throughout the process. We’ll help you prepare the necessary documentation and ensure everything is in order before submission.
          </li>
          <li>
            Affordable, Transparent Pricing: With no hidden fees, you’ll know exactly what you’re paying for, making our services both reliable and budget-friendly.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Start Your Passport Journey Today with{' '}
          <span className="text-orange-500">VJC Overseas</span>!
        </h2>
        <p className="text-lg mb-4">
          Don’t let passport paperwork slow down your plans. Whether it’s a new passport application or passport renewal, <span className="text-orange-500">VJC Overseas</span> is here to ensure that your travel documents are in perfect order.
        </p>
        <p className="text-lg mb-4">
          Ready to get started? Contact us today to schedule a consultation or to learn more about our passport services. At <span className="text-orange-500">VJC Overseas</span>, we are committed to making your travel experience as smooth and efficient as possible.
        </p>
      </div>
    </div>
  );
};

export default PassportServices;
