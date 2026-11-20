import { Users, UserRound, Award, Building2 } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// CHAIRMAN AND VICE CHAIRMAN
import arunBaluPatil from "../../assets/board/chairman-directors/arun-balu-patil.jpg";
import bhagyashreeNileshBhoir from "../../assets/board/chairman-directors/bhagyashree-nilesh-bhoir.jpg";

// DIRECTORS
import kapilMoreshwarPatil from "../../assets/board/chairman-directors/kapil-moreshwar-patil.jpg";
import baliramSukurJadhav from "../../assets/board/chairman-directors/baliram-sukur-jadhav.jpg";
import amitKrushanaGhoda from "../../assets/board/chairman-directors/amit-krushana-ghoda.jpg";
import sunilChandrakantBhusara from "../../assets/board/chairman-directors/sunil-chandrakant-bhusara.jpg";
import nileshBhagwanSambare from "../../assets/board/chairman-directors/nilesh-bhagwan-sambare.jpg";
import nivruttiYashwantGhushekar from "../../assets/board/chairman-directors/nivrutti-yashwant-ghushekar.jpg";
import neetaRajendraKambli from "../../assets/board/chairman-directors/neeta-rajendra-kambli.jpg";
import dasuKakadRadya from "../../assets/board/chairman-directors/dasu-kakad-radya.jpg";
import rambhajiBarkuJagtap from "../../assets/board/chairman-directors/rambhaji-barku-jagtap.jpg";
import prakashNarayanVarkute from "../../assets/board/chairman-directors/prakash-narayan-varkute.jpg";
import smitaRavindraGhodvinde from "../../assets/board/chairman-directors/smita-ravindra-ghodvinde.jpg";
import jyotiDilipPatekar from "../../assets/board/chairman-directors/jyoti-dilip-patekar.jpg";
import anilMadhavraoGavad from "../../assets/board/chairman-directors/anil-madhavrao-gavad.jpg";
import jayeshRajeshPatil from "../../assets/board/chairman-directors/jayesh-rajesh-patil.jpg";
import saurabhSubhashPawar from "../../assets/board/chairman-directors/saurabh-subhash-pawar.jpg";
import vishalBhauKurhade from "../../assets/board/chairman-directors/vishal-bhau-kurhade.jpg";
import swapnilAnilMumbaikar from "../../assets/board/chairman-directors/swapnil-anil-mumbaikar.jpg";
import manishRajanPatil from "../../assets/board/chairman-directors/manish-rajan-patil.jpg";
import aakashBabajiPatil from "../../assets/board/chairman-directors/aakash-babaji-patil.jpg";

// STAFF
import shrikantPatare from "../../assets/board/staff/shrikant-patare.jpg";
import santoshMhatre from "../../assets/board/staff/santosh-mhatre.jpg";
import rajendraJBhere from "../../assets/board/staff/rajendra-j-bhere.jpg";
import pramodTare from "../../assets/board/staff/pramod-tare.jpg";
import sanjaySPatil from "../../assets/board/staff/sanjay-s-patil.jpg";
import anandBhoir from "../../assets/board/staff/anand-bhoir.jpg";
import prabhakarMhatre from "../../assets/board/staff/prabhakar-mhatre.jpg";
import navnitPashte from "../../assets/board/staff/navnit-pashte.jpg";
import prakashBhondiwale from "../../assets/board/staff/prakash-bhondiwale.jpg";

// DIRECTORS AND MANAGEMENT DATA
const directors = [
  { image: kapilMoreshwarPatil, nameKey: "aboutBoardDirector1Name" },
  { image: baliramSukurJadhav, nameKey: "aboutBoardDirector2Name" },
  { image: amitKrushanaGhoda, nameKey: "aboutBoardDirector3Name" },
  { image: sunilChandrakantBhusara, nameKey: "aboutBoardDirector4Name" },
  { image: nileshBhagwanSambare, nameKey: "aboutBoardDirector5Name" },
  { image: nivruttiYashwantGhushekar, nameKey: "aboutBoardDirector6Name" },
  { image: neetaRajendraKambli, nameKey: "aboutBoardDirector7Name" },
  { image: dasuKakadRadya, nameKey: "aboutBoardDirector8Name" },
  { image: rambhajiBarkuJagtap, nameKey: "aboutBoardDirector9Name" },
  { image: prakashNarayanVarkute, nameKey: "aboutBoardDirector10Name" },
  { image: smitaRavindraGhodvinde, nameKey: "aboutBoardDirector11Name" },
  { image: jyotiDilipPatekar, nameKey: "aboutBoardDirector12Name" },
  { image: anilMadhavraoGavad, nameKey: "aboutBoardDirector13Name" },
  { image: jayeshRajeshPatil, nameKey: "aboutBoardDirector14Name" },
  { image: saurabhSubhashPawar, nameKey: "aboutBoardDirector15Name" },
  { image: vishalBhauKurhade, nameKey: "aboutBoardDirector16Name" },
  { image: swapnilAnilMumbaikar, nameKey: "aboutBoardDirector17Name" },
  { image: manishRajanPatil, nameKey: "aboutBoardDirector18Name" },
  { image: aakashBabajiPatil, nameKey: "aboutBoardDirector19Name" },
];

const deputyCEOs = [
  { image: santoshMhatre, nameKey: "aboutBoardDeputyCeo1Name" },
  { image: rajendraJBhere, nameKey: "aboutBoardDeputyCeo2Name" },
  { image: pramodTare, nameKey: "aboutBoardDeputyCeo3Name" },
  { image: sanjaySPatil, nameKey: "aboutBoardDeputyCeo4Name" },
  { image: anandBhoir, nameKey: "aboutBoardDeputyCeo5Name" },
  { image: prabhakarMhatre, nameKey: "aboutBoardDeputyCeo6Name" },
  { image: navnitPashte, nameKey: "aboutBoardDeputyCeo7Name" },
  { image: prakashBhondiwale, nameKey: "aboutBoardDeputyCeo8Name" },
];

// REUSABLE MEMBER CARD
function MemberCard({ member, featured = false }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-[#E6ECE8] bg-white/90 shadow-[0_5px_18px_rgba(23,62,112,0.045)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.12)]">
      {/* MEMBER PHOTOGRAPH */}

      <div
        className={`relative overflow-hidden bg-[#F1F5F2] ${
          featured ? "aspect-[4/4.2]" : "aspect-[4/4.5]"
        }`}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173E70]/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* MEMBER DETAILS */}

      <div className="flex min-h-[104px] flex-col items-center justify-center border-t border-[#E9EEEB] px-4 py-5 text-center">
        <h3
          className={`font-bold leading-snug text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d] ${
            featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
          }`}
        >
          {member.name}
        </h3>

        {member.designation && (
          <p className="mt-2 text-xs font-semibold tracking-wide text-[#25845d] sm:text-sm">
            {member.designation}
          </p>
        )}
      </div>
    </article>
  );
}

// REUSABLE SECTION HEADING
function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  isMarathi,
}) {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <div>
          <p
            className={`text-xs font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.14em]"
            }`}
          >
            {eyebrow}
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {title}
          </h2>
        </div>
      </div>

      {description && (
        <p className="mt-4 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function Board() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  // CHAIRMAN AND VICE CHAIRMAN
  const chairman = {
    name: t("aboutBoardChairmanName"),
    designation: t("aboutBoardChairmanDesignation"),
    image: arunBaluPatil,
  };

  const viceChairman = {
    name: t("aboutBoardViceChairmanName"),
    designation: t("aboutBoardViceChairmanDesignation"),
    image: bhagyashreeNileshBhoir,
  };

  // DIRECTORS
  const translatedDirectors = directors.map((member) => ({
    ...member,
    name: t(member.nameKey),
  }));

  // CEO
  const ceo = {
    name: t("aboutBoardCeoName"),
    designation: t("aboutBoardCeoDesignation"),
    image: shrikantPatare,
  };

  // DEPUTY CEOS
  const translatedDeputyCEOs = deputyCEOs.map((member) => ({
    ...member,
    name: t(member.nameKey),
    designation: t("aboutBoardDeputyCeoDesignation"),
  }));

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        fontFamily: isMarathi
          ? '"Nirmala UI", "Noto Sans Devanagari", sans-serif'
          : '"Poppins", sans-serif',
        background: `
          radial-gradient(
            ellipse at 8% 10%,
            rgba(229, 246, 238, 0.95) 0%,
            rgba(229, 246, 238, 0) 48%
          ),
          radial-gradient(
            ellipse at 92% 90%,
            rgba(139, 191, 247, 0.13) 0%,
            rgba(139, 191, 247, 0) 45%
          ),
          linear-gradient(120deg, #fffce3 0%, #f7fbf4 48%, #edf6f2 100%)
        `,
        backgroundAttachment: "fixed",
      }}
    >
      {/* PAGE INTRODUCTION */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-16 sm:px-8 lg:pb-16 lg:pt-20">
          <p
            className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("aboutBoardEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("aboutBoardTitle")}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />

          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#596879] sm:text-lg">
            {t("aboutBoardDescription")}
          </p>
        </div>
      </section>

      {/* CHAIRMAN AND VICE CHAIRMAN */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8">
        <SectionHeading
          eyebrow={t("aboutBoardLeadershipEyebrow")}
          title={t("aboutBoardChairmanSection")}
          description={t("aboutBoardChairmanDescription")}
          icon={Award}
          isMarathi={isMarathi}
        />

        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-7 sm:grid-cols-2">
          <MemberCard member={chairman} featured />
          <MemberCard member={viceChairman} featured />
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-20">
        <SectionHeading
          eyebrow={t("aboutBoardMembersEyebrow")}
          title={t("aboutBoardDirectorsTitle")}
          description={t("aboutBoardDirectorsDescription")}
          icon={Users}
          isMarathi={isMarathi}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {translatedDirectors.map((member) => (
            <MemberCard key={member.nameKey} member={member} />
          ))}
        </div>
      </section>

      {/* STAFF AND MANAGEMENT */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-20">
        <SectionHeading
          eyebrow={t("aboutBoardManagementEyebrow")}
          title={t("aboutBoardCeoTitle")}
          description={t("aboutBoardCeoDescription")}
          icon={Building2}
          isMarathi={isMarathi}
        />

        <div className="mx-auto max-w-[320px]">
          <MemberCard member={ceo} featured />
        </div>
      </section>

      {/* DEPUTY CHIEF EXECUTIVE OFFICERS */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <SectionHeading
          eyebrow={t("aboutBoardSeniorManagementEyebrow")}
          title={t("aboutBoardDeputyCeoTitle")}
          description={t("aboutBoardDeputyCeoDescription")}
          icon={UserRound}
          isMarathi={isMarathi}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {translatedDeputyCEOs.map((member) => (
            <MemberCard key={member.nameKey} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Board;
