import React from "react";
import { bannerStyles } from "../assets/dummyStyles";
import { floatingIcons } from "../assets/dummyBanner";
import { Sparkle,CircleCheckBig } from "lucide-react";




export const features = [
{ text: "Easy to Use", color: "green" },
{ text: "Fast & Secure", color: "blue" },
{ text: "24/7 Support", color: "purple" },
{ text: "Free Updates", color: "yellow" },
];


const Banner = () => {
  return (
    <div className={bannerStyles.bannerContainer}>
      {/* Floating Icons Wrapper */}
      <div className={bannerStyles.floatingIconsWrapper}>
        {floatingIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt || ""}
            className={`${bannerStyles.floatingIcon} ${icon.pos}`}
            style={{
              animationDelay: `${i * 0.35}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
      <div className={bannerStyles.mainContent}>
        <div className={bannerStyles.grid}>
          <div className={bannerStyles.leftContent}>
            <span className={bannerStyles.badge}>
              <Sparkle className={bannerStyles.badgeIcon} />
              New Features Available
            </span>
            <h1 className={bannerStyles.heading}>
              <span className={bannerStyles.headingSpan1}>Build Amazing</span>
              <span className={bannerStyles.headingSpan2}>Digital Product</span>
            </h1>
            <p className={bannerStyles.description}>
              Create beautiful,responssive web application with our powerful
              tools and components. Start building your next project today.
            </p>
            {/*features*/}
            <div className={bannerStyles.featuresGrid}>
              {features.map((feature, i) => (
                <div key={i} className={bannerStyles.featureItem}>
                  <div className={bannerStyles.featureIconContainer}>
                    <span className={`${bannerStyles.featureIcon} text-${feature.color}-500`}>
                      <CircleCheckBig size={16} />

                    </span>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>


            {/*button*/}
            

          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

