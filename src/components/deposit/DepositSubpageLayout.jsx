import {
  Coins,
  PiggyBank,
  Wallet,
  Landmark,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";

const floatingIcons = [
  { Icon: Coins, position: "left-[5%] top-[12%]", size: 42, delay: "0s" },
  { Icon: PiggyBank, position: "right-[7%] top-[16%]", size: 50, delay: "1s" },
  { Icon: Wallet, position: "left-[7%] bottom-[20%]", size: 44, delay: "2s" },
  {
    Icon: TrendingUp,
    position: "right-[6%] bottom-[24%]",
    size: 46,
    delay: "0.5s",
  },
  { Icon: Landmark, position: "left-[44%] top-[8%]", size: 36, delay: "1.5s" },
  {
    Icon: CircleDollarSign,
    position: "right-[35%] bottom-[8%]",
    size: 40,
    delay: "2.5s",
  },
];

function DepositSubpageLayout({
  title,
  image,
  imageAlt,
  transitionName,
  tabs,
  activeTab,
  onTabChange,
  children,
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F3F8F5] via-[#F8F9FC] to-[#F7F5FA]">
      <style>
        {`
          @keyframes depositSubpageFloat {
            0%, 100% {
              transform: translateY(0) rotate(-5deg);
            }
            50% {
              transform: translateY(-16px) rotate(5deg);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .deposit-subpage-floating-icon {
              animation: none !important;
            }
          }
        `}
      </style>

      {/* BACKGROUND DECORATION */}

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E5F0E9]/40 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#E9EDF8]/40 blur-3xl" />

        {floatingIcons.map(({ Icon, position, size, delay }, index) => (
          <div
            key={index}
            className={`deposit-subpage-floating-icon absolute ${position} text-[#25845d]/[0.075]`}
            style={{
              animation: `depositSubpageFloat ${9 + (index % 3)}s ease-in-out ${delay} infinite`,
            }}
          >
            <Icon size={size} strokeWidth={1.5} />
          </div>
        ))}
      </div>

      {/* PAGE CONTENT */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          {/* LEFT ACCOUNT PANEL */}

          <aside className="flex flex-col items-center">
            {/* ACCOUNT ILLUSTRATION */}

            <div className="flex h-[230px] w-full max-w-[320px] items-center justify-center p-4 sm:h-[260px]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-contain"
                style={
                  transitionName
                    ? { viewTransitionName: transitionName }
                    : undefined
                }
              />
            </div>

            {/* ACCOUNT TITLE */}

            <h1 className="mt-4 text-center text-xl font-bold text-[#173E70]">
              {title}
            </h1>

            {/* ACCOUNT TABS */}

            <nav
              className="mt-7 flex w-full max-w-[320px] flex-col gap-2"
              aria-label="Account information"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onTabChange(tab.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-4 py-4 text-center font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-[#173E70]"
                        : "text-[#687585] hover:text-[#25845d]"
                    }`}
                  >
                    {tab.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#25845d]" />
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* RIGHT INFORMATION PANEL */}

          <section className="min-w-0 px-2 py-4 sm:px-4 lg:px-0 lg:py-6">
            {children}
          </section>
        </div>
      </section>
    </main>
  );
}

export default DepositSubpageLayout;
