import Head from "@docusaurus/Head";
import clsx from "clsx";
import React from "react";

import { CommonLayout } from "../refine-theme/common-layout";
import { LandingFooter } from "../refine-theme/landing-footer";
import { LandingHeader } from "../refine-theme/landing-header";
import { LandingHero } from "../refine-theme/landing-hero";
import { LandingPlayground } from "../refine-theme/landing-playground";
import { LandingStats } from "../refine-theme/landing-stats";
import { LandingTiles } from "../refine-theme/landing-tiles";
import { LandingWalkthrough } from "../refine-theme/landing-walkthrough";
import { LandingTrustedByDevelopers } from "../refine-theme/landing-trusted-by-developers";
import { LandingPackages } from "../refine-theme/landing-packages";

function Home() {
    return (
        <>
            <Head>
                <html data-active-page="index" />
                <link
                    rel="preload"
                    href="https://refine.new/embed-form"
                    as="document"
                />
            </Head>
            <CommonLayout
                title={`refine | Build your React-based CRUD applications, without constraints!`}
                description="refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. It ships with Ant Design, an enterprise-level UI toolkit."
            >
                <div
                    className={clsx(
                        "h-screen",
                        "w-full",
                        "flex",
                        "flex-col",
                        "p-2 landing-sm:p-12",
                        "max-w-[1296px]",
                        "mx-auto",
                        "flex justify-center items-center",
                    )}
                >
                    <LandingTrustedByDevelopers
                        className={clsx(
                            "mt-16 landing-sm:mt-20 landing-md:mt-28 landing-lg:mt-10",
                        )}
                    />
                    <LandingPackages
                        className={clsx(
                            "mt-16 landing-sm:mt-20 landing-md:mt-28 landing-lg:mt-40",
                        )}
                    />
                    {/* <LandingHeader />
                    <div
                        className={clsx(
                            "top-section",
                            "bg-landing-stars",
                            "mb-12 -mt-[100px] md:-mt-[110px] lg:-mt-[90px] xl:-mt-[110px]",
                            "pt-[100px] lg:pt-[90px] xl:-pt-[110px]",
                            "landing-mask-image-hero-wide",
                        )}
                    >
                        <LandingHero />
                    </div>
                    <LandingWalkthrough />
                    <LandingTiles />
                    <LandingPlayground />
                    <LandingStats />
                    <div className="h-[96px] landing-lg:h-[160px]" />
                    <LandingFooter /> */}
                </div>
            </CommonLayout>
        </>
    );
}

export default Home;
