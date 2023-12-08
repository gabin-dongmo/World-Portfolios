"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/countryContext";
import { CardCloseSvg } from "./Icons";
import CardSocial from "@/components/CardSocial.";
import UserProfile from "@/interfaces/userProfile.interface";

type Props = UserProfile & { handlePreviewCardClose: () => void };
export default function PreviewCard({
  name,
  link,
  tags,
  socials,
  handlePreviewCardClose,
}: Props) {
  const {
    country: { code: currentCountryCode, name: currentCountryName },
  } = useContext(Context);
  const buildInitials = (name: string) => {
    const cleanName = name.split(" ");
    return cleanName[1] === undefined
      ? cleanName[0][0] + cleanName[0][1]
      : cleanName[0][0] + cleanName[1][0];
  };

  return (
    <div className="preview-card">
      <div className="card">
        <button className="card-close" onClick={handlePreviewCardClose}>
          <CardCloseSvg />
        </button>
        <div className="card-banner">
          <Image
            width={384}
            height={274}
            src={`/assets/images/${currentCountryCode}/card-portfolio.png`}
            alt={`${currentCountryName} Card Banner`}
          />

          <h1>{buildInitials(name)}</h1>
        </div>
        <div className="card__body">
          <h2 className="card-name">{name}</h2>
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="card-socials">
            <CardSocial handle={socials.twitter} media={"twitter"} />
            <CardSocial handle={socials.github} media={"github"} />
            <CardSocial handle={socials.linkedin} media={"linkedIn"} />
          </div>

          {typeof link === "string" && (
            <Link className="card-portfolio" href={link} target="_blank">
              <span>Visit Portfolio</span>
            </Link>
          )}
          {Array.isArray(link) && (
            <div className="group">
              {link.map((singleLink: string, index: any) => (
                <Link
                  className="card-portfolio"
                  key={index}
                  href={singleLink}
                  target="_blank"
                >
                  <span>Visit Portfolio</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
