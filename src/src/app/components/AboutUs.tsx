"use client";

import Image from "next/image";
import { colors } from "../constants/constants";
import {
  ABOUT_SECTION_MISSION,
  ABOUT_SECTION_VALUES,
  ABOUT_SECTION_STRUCTURE,
  ABOUT_SECTION_TEAM,
  ABOUT_SECTION_COMMUNITY,
  ABOUT_MISSION_P1,
  ABOUT_MISSION_P2,
  ABOUT_VALUES_P1,
  ABOUT_VALUES_P2,
  ABOUT_STRUCTURE_P1,
  ABOUT_STRUCTURE_P2,
  ABOUT_TEAM_P1,
  ABOUT_TEAM_P2,
  ABOUT_COMMUNITY_P1,
  ABOUT_COMMUNITY_P2,
  ABOUT_IMAGE_MISSION_ALT,
  ABOUT_IMAGE_VALUES_ALT,
  ABOUT_IMAGE_STRUCTURE_ALT,
  ABOUT_IMAGE_TEAM_ALT,
  ABOUT_IMAGE_COMMUNITY_ALT,
  IMG_ABOUT_IMAGE_VALUES_SRC,
  IMG_ABOUT_IMAGE_MISSION_SRC,
  IMG_ABOUT_IMAGE_STRUCTURE_SRC,
  IMG_ABOUT_IMAGE_TEAM_SRC,
  IMG_ABOUT_IMAGE_COMMUNITY_SRC,
} from "../constants/constants";

const AboutUs: React.FC = () => (
  <section className="py-16 px-4 md:px-20 bg-gray-50">
    <div className="max-w-7xl mx-auto space-y-16">
      {/* Mission */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2
            className={`text-3xl font-bold mb-4 ${colors.aboutGradientH1} text-transparent bg-clip-text`}
          >
            {ABOUT_SECTION_MISSION}
          </h2>
          <p className={`${colors.textPrimary} mb-2`}>{ABOUT_MISSION_P1}</p>
          <p className={colors.textPrimary}>{ABOUT_MISSION_P2}</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={IMG_ABOUT_IMAGE_MISSION_SRC}
            alt={ABOUT_IMAGE_MISSION_ALT}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Business intrinsic values */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <h2
            className={`text-3xl font-bold mb-4 ${colors.aboutGradientH3} text-transparent bg-clip-text`}
          >
            {ABOUT_SECTION_VALUES}
          </h2>
          <p className={`${colors.textPrimary} mb-2`}>{ABOUT_VALUES_P1}</p>
          <p className={colors.textPrimary}>{ABOUT_VALUES_P2}</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={IMG_ABOUT_IMAGE_VALUES_SRC}
            alt={ABOUT_IMAGE_VALUES_ALT}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Structure */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2
            className={`text-3xl font-bold mb-4 ${colors.aboutGradientH1} text-transparent bg-clip-text`}
          >
            {ABOUT_SECTION_STRUCTURE}
          </h2>
          <p className={`${colors.textPrimary} mb-2`}>{ABOUT_STRUCTURE_P1}</p>
          <p className={colors.textPrimary}>{ABOUT_STRUCTURE_P2}</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={IMG_ABOUT_IMAGE_STRUCTURE_SRC}
            alt={ABOUT_IMAGE_STRUCTURE_ALT}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Medical team */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <h2
            className={`text-3xl font-bold mb-4 ${colors.aboutGradientH3} text-transparent bg-clip-text`}
          >
            {ABOUT_SECTION_TEAM}
          </h2>
          <p className={`${colors.textPrimary} mb-2`}>{ABOUT_TEAM_P1}</p>
          <p className={colors.textPrimary}>{ABOUT_TEAM_P2}</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={IMG_ABOUT_IMAGE_TEAM_SRC}
            alt={ABOUT_IMAGE_TEAM_ALT}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Comunity healthcare */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2
            className={`text-3xl font-bold mb-4 ${colors.aboutGradientH1} text-transparent bg-clip-text`}
          >
            {ABOUT_SECTION_COMMUNITY}
          </h2>
          <p className={`${colors.textPrimary} mb-2`}>{ABOUT_COMMUNITY_P1}</p>
          <p className={colors.textPrimary}>{ABOUT_COMMUNITY_P2}</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={IMG_ABOUT_IMAGE_COMMUNITY_SRC}
            alt={ABOUT_IMAGE_COMMUNITY_ALT}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
