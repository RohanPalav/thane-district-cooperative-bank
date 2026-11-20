import { ExternalLink, ShieldCheck } from "lucide-react";

function MobileBankingPrivacyPolicy() {
  return (
    <main className="min-h-[55vh] bg-white">
      <article className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-14">
        <header className="mb-9 border-b border-[#E2E8F0] pb-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF4EF] text-[#178456]">
              <ShieldCheck size={23} aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#178456]">
                The Thane District Central Co-operative Bank Ltd.
              </p>
              <p className="mt-1 text-sm text-[#687584]">
                Customer Information
              </p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#173E70] sm:text-3xl">
            Mobile Banking Privacy Policy
          </h1>
        </header>

        <div className="max-w-none space-y-7 text-[15px] leading-8 text-[#394554] sm:text-base">
          <section>
            <h2 className="mb-3 text-lg font-bold text-[#173E70]">
              Privacy Policy
            </h2>

            <p>
              Thane District Central co-operative Bank (Thane District Bank)
              hosts its website, i.e.,{" "}
              <a
                href="https://www.thanedistrictbank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 break-all font-medium text-[#087DB5] underline underline-offset-2 hover:text-[#173E70]"
              >
                www.thanedistrictbank.com
                <ExternalLink size={13} aria-hidden="true" />
              </a>
              , for broadcasting and publishing information pertaining to Thane
              District Bank such as products, services, departments, branches,
              board of directors, receiving correspondence, providing facilities
              for downloading information of its products and services, etc., to
              its existing as well as future customers. This website may be
              extended for providing banking services through the net or by
              similar ways, as it may be decided by the Thane Bank from time to
              time in the future for its customers. Thane District Central
              co-operative Bank Ltd. is well aware of protecting customers'
              privacy and the confidentiality of customer information. Thane
              District Bank will make all necessary arrangements to keep
              customer information confidential in terms with and according to
              agreements and arrangements made with the customers for providing
              web-based/mobile-based services.
            </p>

            <p className="mt-5">
              By way of agreement, the customer will authorize the bank to use,
              exchange, share, part with all customer information, details,
              transaction history, etc., to its affiliates/banks/financial
              institutions/credit bureaus/agencies/participation in any
              telecommunication or electronic clearing network as may be
              required by law, customary practice, credit reporting, statistical
              information/analysis, risk management, etc. Thus, the bank shall
              not be held liable or responsible for using/disclosing such
              information.
            </p>

            <p className="mt-5">
              For using IMPS services through mBank app, customers will be
              educated for protecting their information, avoiding unauthorized
              access by way of choosing and keeping the confidentiality of
              passwords, etc. Customer information will not be disclosed
              according to the terms between the bank and the customer except
              otherwise for legal requirements, to defend, protect the bank or
              its rights, interest, or property, and if products and services
              require it according to their terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 border-l-4 border-[#178456] pl-3 text-lg font-bold text-[#173E70]">
              Disclaimer
            </h2>

            <p>
              The information published on the website of Thane District Bank is
              for the benefit of customers and the general public. They should
              not disclose, misuse, or reuse the information in any manner
              whatsoever.
            </p>

            <p className="mt-5">
              Failure to comply with this obligation and if found to be doing
              such misconduct, it will be treated as a breach of trust and shall
              entitle Thane District Central co-operative Bank or its affiliates
              to take appropriate action. Persons desiring to have additional
              information may contact Thane Bank. The information and material
              available on the website are subject to change from time to time.
              Thane Bank is not responsible in any manner for any loss or damage
              arising out of the use of data, any errors, or omissions in the
              information published on the website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 border-l-4 border-[#178456] pl-3 text-lg font-bold text-[#173E70]">
              Use of Personal Information
            </h2>

            <p>
              At <em>The Thane District Central co-operative Bank</em> (Thane
              District Bank), we collect and use personal information through
              the <em>TDCC_mBank</em> app for the following purposes:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-[#178456]">
              <li>
                <strong className="text-[#263D70]">
                  Transaction Processing:
                </strong>{" "}
                To facilitate IMPS transactions, fund transfers, and other
                banking operations securely and efficiently.
              </li>

              <li>
                <strong className="text-[#263D70]">Account Management:</strong>{" "}
                To provide account-related services such as balance inquiries,
                mini statements, and transaction histories.
              </li>

              <li>
                <strong className="text-[#263D70]">Service Improvement:</strong>{" "}
                To enhance our mobile banking services based on usage trends,
                user feedback, and analytics.
              </li>

              <li>
                <strong className="text-[#263D70]">
                  Compliance with Laws:
                </strong>{" "}
                To comply with applicable banking regulations, guidelines, and
                government mandates such as KYC (Know Your Customer) and
                anti-money laundering policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 border-l-4 border-[#178456] pl-3 text-lg font-bold text-[#173E70]">
              Hyperlink Policy
            </h2>

            <p>
              The Thane District Central Co-operative Bank LTD.cautions
              customers that Thane Bank never sends emails requesting persona;
              information,password,etc.,as phishing attacks. Data download is
              not warranted for accuracy. Any hyperlink internet is at the
              customer's risk, and Thane Bank is not responsible for any damage
              to data after downloading or opening the page.Access by the
              customer in public place is at the customer's Risk for any loss of
              information.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default MobileBankingPrivacyPolicy;
