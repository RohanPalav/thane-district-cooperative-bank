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

// BOARD MEMBERS
const chairman = {
  name: "Mr. Arun Balu Patil",
  designation: "Chairman",
  image: arunBaluPatil,
};

const viceChairman = {
  name: "Mrs. Bhagyashree Nilesh Bhoir",
  designation: "Vice Chairman",
  image: bhagyashreeNileshBhoir,
};

const directors = [
  {
    name: "Mr. Kapil Moreshwar Patil",
    image: kapilMoreshwarPatil,
  },
  {
    name: "Mr. Baliram Sukur Jadhav",
    image: baliramSukurJadhav,
  },
  {
    name: "Mr. Amit Krushana Ghoda",
    image: amitKrushanaGhoda,
  },
  {
    name: "Mr. Sunil Chandrakant Bhusara",
    image: sunilChandrakantBhusara,
  },
  {
    name: "Mr. Nilesh Bhagwan Sambare",
    image: nileshBhagwanSambare,
  },
  {
    name: "Mr. Nivrutti Yashwant Ghushekar",
    image: nivruttiYashwantGhushekar,
  },
  {
    name: "Mrs. Neeta Rajendra Kambli",
    image: neetaRajendraKambli,
  },
  {
    name: "Mr. Dasu Kakad Radya",
    image: dasuKakadRadya,
  },
  {
    name: "Mr. Rambhaji Barku Jagtap",
    image: rambhajiBarkuJagtap,
  },
  {
    name: "Mr. Prakash Narayan Varkute",
    image: prakashNarayanVarkute,
  },
  {
    name: "Mrs. Smita Ravindra Ghodvinde",
    image: smitaRavindraGhodvinde,
  },
  {
    name: "Mrs. Jyoti Dilip Patekar",
    image: jyotiDilipPatekar,
  },
  {
    name: "Mr. Anil Madhavrao Gavad",
    image: anilMadhavraoGavad,
  },
  {
    name: "Mr. Jayesh Rajesh Patil",
    image: jayeshRajeshPatil,
  },
  {
    name: "Mr. Saurabh Subhash Pawar",
    image: saurabhSubhashPawar,
  },
  {
    name: "Mr. Vishal Bhau Kurhade",
    image: vishalBhauKurhade,
  },
  {
    name: "Mr. Swapnil Anil Mumbaikar",
    image: swapnilAnilMumbaikar,
  },
  {
    name: "Mr. Manish Rajan Patil",
    image: manishRajanPatil,
  },
  {
    name: "Mr. Aakash Babaji Patil",
    image: aakashBabajiPatil,
  },
];

const ceo = {
  name: "Shrikant Patare",
  designation: "Chief Executive Officer",
  image: shrikantPatare,
};

const deputyCEOs = [
  {
    name: "Santosh Mhatre",
    designation: "Deputy CEO",
    image: santoshMhatre,
  },
  {
    name: "Rajendra J. Bhere",
    designation: "Deputy CEO",
    image: rajendraJBhere,
  },
  {
    name: "Pramod Tare",
    designation: "Deputy CEO",
    image: pramodTare,
  },
  {
    name: "Sanjay S. Patil",
    designation: "Deputy CEO",
    image: sanjaySPatil,
  },
  {
    name: "Anand Bhoir",
    designation: "Deputy CEO",
    image: anandBhoir,
  },
  {
    name: "Prabhakar Mhatre",
    designation: "Deputy CEO",
    image: prabhakarMhatre,
  },
  {
    name: "Navnit Pashte",
    designation: "Deputy CEO",
    image: navnitPashte,
  },
  {
    name: "Dr. Prakash Bhondiwale",
    designation: "Deputy CEO",
    image: prakashBhondiwale,
  },
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

        {/* <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        /> */}

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
function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#25845d]">
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
  const { language } = useLanguage();

  const isMarathi = language === "mr";

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
            {isMarathi ? "आमचे नेतृत्व" : "OUR LEADERSHIP"}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {isMarathi ? "संचालक मंडळ" : "Board"}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />

          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#596879] sm:text-lg">
            {isMarathi
              ? "ठाणे जिल्हा मध्यवर्ती सहकारी बँकेचे संचालक मंडळ आणि वरिष्ठ व्यवस्थापन."
              : "Meet the Board of Directors and senior management of The Thane District Central Co-operative Bank Ltd."}
          </p>
        </div>
      </section>

      {/* CHAIRMAN AND VICE CHAIRMAN */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8">
        <SectionHeading
          eyebrow={isMarathi ? "नेतृत्व" : "LEADERSHIP"}
          title={
            isMarathi ? "अध्यक्ष आणि उपाध्यक्ष" : "Chairman & Vice Chairman"
          }
          description={
            isMarathi
              ? "बँकेच्या संचालक मंडळाचे अध्यक्ष आणि उपाध्यक्ष."
              : "The Chairman and Vice Chairman of the Bank."
          }
          icon={Award}
        />

        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-7 sm:grid-cols-2">
          <MemberCard member={chairman} featured />

          <MemberCard member={viceChairman} featured />
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-20">
        <SectionHeading
          eyebrow={isMarathi ? "संचालक मंडळ" : "BOARD MEMBERS"}
          title={isMarathi ? "संचालक" : "Directors"}
          description={
            isMarathi
              ? "बँकेच्या संचालक मंडळातील सदस्य."
              : "Members of the Bank's Board of Directors."
          }
          icon={Users}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {directors.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* STAFF AND MANAGEMENT */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-20">
        <SectionHeading
          eyebrow={isMarathi ? "व्यवस्थापन" : "BANK MANAGEMENT"}
          title={
            isMarathi ? "मुख्य कार्यकारी अधिकारी" : "Chief Executive Officer"
          }
          description={
            isMarathi
              ? "बँकेचे मुख्य कार्यकारी अधिकारी."
              : "The Chief Executive Officer of the Bank."
          }
          icon={Building2}
        />

        <div className="mx-auto max-w-[320px]">
          <MemberCard member={ceo} featured />
        </div>
      </section>

      {/* DEPUTY CHIEF EXECUTIVE OFFICERS */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <SectionHeading
          eyebrow={isMarathi ? "वरिष्ठ व्यवस्थापन" : "SENIOR MANAGEMENT"}
          title={
            isMarathi
              ? "उप मुख्य कार्यकारी अधिकारी"
              : "Deputy Chief Executive Officers"
          }
          description={
            isMarathi
              ? "बँकेच्या वरिष्ठ व्यवस्थापनातील उप मुख्य कार्यकारी अधिकारी."
              : "Deputy Chief Executive Officers serving in the Bank's senior management."
          }
          icon={UserRound}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {deputyCEOs.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Board;
