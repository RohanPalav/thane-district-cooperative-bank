import { FileText, Landmark } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

function ImportantNotice() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  const content = isMarathi
    ? {
        eyebrow: "बँकिंग आणि ग्राहक सेवा",
        title: "महत्त्वाची सूचना",
        greeting: "प्रिय ग्राहकांनो,",
        paragraphs: [
          "भारतीय रिझर्व्ह बँकेकडून प्राप्त झालेल्या मार्गदर्शक सूचनांनुसार, १ जानेवारी २०१२ पासून बँकेने विविध व्यवहारांसाठी केवळ CTS 2010 सक्षम धनादेशांचा वापर करणे आवश्यक आहे.",
          "त्यामुळे आपणास विनंती करण्यात येते की, आपल्या संबंधित शाखेतून जुनी धनादेश पुस्तिका बदलून CTS 2010 सक्षम धनादेश पुस्तिका घ्यावी. आपण ३१ डिसेंबर २०१२ नंतरच्या तारखेचा कोणताही पुढील दिनांकाचा धनादेश दिला असल्यास, तो संबंधित व्यक्तीकडून परत घेऊन त्याऐवजी नवीन CTS 2010 सक्षम धनादेश द्यावा.",
        ],
        designation: "मुख्य कार्यकारी अधिकारी",
        bankName: "ठाणे जिल्हा मध्यवर्ती सहकारी बँक लिमिटेड",
      }
    : {
        eyebrow: "BANKING & CUSTOMER SERVICES",
        title: "Important Notice",
        greeting: "Dear Customer,",
        paragraphs: [
          "You are hereby informed that as per guidelines received from Reserve Bank of India, from 1st of January 2012 Bank have to use only CTS 2010 enabled cheques for various transactions.",
          "You are therefore requested to exchange your cheque book from your respective branche & obtain the CTS 2010 enabled cheque book. If you have issued any post dated cheque which date is greater than 31st Dec. 2012. You are requested to collect the same from your party & issue him new CTS 2010 enable cheque.",
        ],
        designation: "Chief Executive Officer",
        bankName: "The Thane District Central Co-Op Bank Ltd",
      };

  return (
    <main
      className={`relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#F1F8F4] via-[#F8FBF8] to-[#EDF4FA] ${
        isMarathi
          ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
          : "font-['Poppins']"
      }`}
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 -z-10 h-80 w-80 rounded-full bg-[#25845d]/[0.055] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#173E70]/[0.055] blur-3xl"
      />

      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        {/* Page heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#25845d]">
            {content.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
        </div>

        {/* Notice card */}
        <section
          aria-label={content.title}
          className="overflow-hidden rounded-2xl border border-[#E7ECE9] bg-white shadow-[0_8px_28px_rgba(23,62,112,0.06)]"
        >
          {/* Greeting */}
          <div className="flex items-center gap-4 border-b border-[#E7ECE9] bg-[#F5FAF6] px-5 py-6 sm:px-9 sm:py-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
              <Landmark size={24} strokeWidth={1.8} />
            </div>

            <p className="text-lg font-semibold text-[#173E70] sm:text-xl">
              {content.greeting}
            </p>
          </div>

          {/* Notice content */}
          <div className="space-y-7 px-5 py-8 sm:px-9 sm:py-10 lg:px-12">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base font-medium leading-8 text-[#40566C] sm:text-lg sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div className="border-t border-[#E7ECE9] bg-[#F5FAF6] px-5 py-7 sm:px-9 sm:py-9">
            <div className="ml-auto flex max-w-md flex-col items-center rounded-xl border border-[#DCEBE1] bg-white px-5 py-7 text-center shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#E5F3EA] text-[#25845d]">
                <FileText size={21} />
              </div>

              <p className="text-lg font-bold text-[#173E70] sm:text-xl">
                {content.designation}
              </p>

              <div className="my-4 h-1 w-12 rounded-full bg-[#25845d]" />

              <p className="text-sm font-semibold leading-7 text-[#40566C] sm:text-base">
                {content.bankName}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ImportantNotice;
