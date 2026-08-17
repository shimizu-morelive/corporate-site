/* eslint-disable @next/next/no-html-link-for-pages -- vinext production router currently breaks client-side Link navigation. */

import Image from "next/image";
import { SiteFooter, SiteHeader } from "../site-chrome";

type Feature = {
  title: string;
  text: string;
};

type ServiceDetailProps = {
  variant: "channel" | "sales" | "creator";
  number: string;
  label: string;
  title: string;
  lead: string;
  descriptions: string[];
  introTitle: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  stat?: {
    value: string;
    label: string;
    text: string;
  };
  journey?: {
    title: string;
    text: string;
    steps: { title: string; icon: "product" | "plan" | "creator" | "live" | "purchase" | "analysis" }[];
  };
  comingSoon?: {
    title: string;
    text: string;
    items: string[];
  };
  featuresTitle: string;
  features: Feature[];
  steps: Feature[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export default function ServiceDetail({
  variant,
  number,
  label,
  title,
  lead,
  descriptions,
  introTitle,
  imageSrc,
  imageAlt,
  imageCaption,
  stat,
  journey,
  comingSoon,
  featuresTitle,
  features,
  steps,
  ctaTitle,
  ctaText,
  ctaLabel,
}: ServiceDetailProps) {
  const visual = (
    <section className={`detail-visual${stat ? " has-stat" : ""}`}>
      <div className="detail-visual-image">
        <Image src={imageSrc} width={1536} height={1024} sizes="100vw" alt={imageAlt} />
        <p>{imageCaption}</p>
      </div>
      {stat && (
        <div className="detail-stat">
          <p className="eyebrow">BROADCASTING SYSTEM</p>
          <strong>{stat.value}</strong>
          <h2>{stat.label}</h2>
          <p>{stat.text}</p>
        </div>
      )}
    </section>
  );

  return (
    <main id="top" className={`service-detail service-detail-${variant}`}>
      <SiteHeader />

      <section className="detail-hero">
        <a className="detail-back" href="/#service">← SERVICE一覧へ</a>
        <div className="detail-hero-layout">
          <div>
            <p className="detail-number">SERVICE {number}</p>
            <p className="detail-label">{label}</p>
            <h1>{title}</h1>
          </div>
          <p className="detail-lead">{lead}</p>
        </div>
      </section>

      {visual}

      <section className="detail-intro">
        <p className="eyebrow">WHAT WE DO</p>
        <div className="detail-intro-grid">
          <h2>{introTitle}</h2>
          <div>{descriptions.map((description) => <p key={description}>{description}</p>)}</div>
        </div>
      </section>

      {journey && (
        <section className="detail-journey">
          <div className="detail-section-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>{journey.title}</h2>
            <p>{journey.text}</p>
          </div>
          <ol>
            {journey.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i className={`journey-icon journey-icon-${step.icon}`} aria-hidden="true"><b></b></i>
                <strong>{step.title}</strong>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="detail-features">
        <div className="detail-section-heading">
          <p className="eyebrow">OUR SUPPORT</p>
          <h2>{featuresTitle}</h2>
        </div>
        <div className="detail-card-grid">
          {features.map((feature, index) => (
            <article key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      {variant !== "sales" && (
        <section className="detail-flow">
          <div className="detail-section-heading">
            <p className="eyebrow">FLOW</p>
            <h2>ご相談から実施まで</h2>
          </div>
          <ol>
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {comingSoon && (
        <section className="detail-coming-soon">
          <div>
            <p className="eyebrow">COMING SOON...</p>
            <h2>{comingSoon.title}</h2>
            <p>{comingSoon.text}</p>
          </div>
          <ul>{comingSoon.items.map((item) => <li key={item}>{item}<span>準備中</span></li>)}</ul>
        </section>
      )}

      <section className="detail-cta">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
        </div>
        <a href="/#contact"><span>{ctaLabel}</span><span aria-hidden="true">→</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
