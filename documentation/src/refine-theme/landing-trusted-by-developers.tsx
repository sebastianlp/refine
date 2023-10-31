import clsx from "clsx";
import React, { FC } from "react";
import {
    OracleIcon,
    SalesforceIcon,
    CiscoIcon,
    DeloitteIcon,
    IbmIcon,
    MetaIcon,
} from "../components/landing/icons";

const list = [
    {
        icon: <OracleIcon />,
    },
    {
        icon: <SalesforceIcon />,
    },
    {
        icon: <CiscoIcon />,
    },
    {
        icon: <IbmIcon />,
    },
    {
        icon: <DeloitteIcon />,
    },
    {
        icon: <MetaIcon />,
    },
];

type Props = {
    className?: string;
};

export const LandingTrustedByDevelopers: FC<Props> = ({ className }) => {
    return (
        <div className={clsx(className, "w-full")}>
            <div
                className={clsx(
                    "not-prose",
                    "relative",
                    "w-full",
                    "p-4 landing-md:p-10",
                    "dark:bg-landing-trusted-by-developers-dark bg-landing-trusted-by-developers",
                    "dark:bg-gray-800 bg-gray-50",
                    "rounded-3xl",
                )}
            >
                <p
                    className={clsx(
                        "whitespace-nowrap",
                        "px-0 landing-sm:px-6 landing-lg:px-0",
                        "text-base landing-sm:text-2xl",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    Trusted by developers working at
                </p>
                <div
                    className={clsx(
                        "grid",
                        "grid-cols-3 landing-lg:grid-cols-6",
                        "gap-8 landing-lg:gap-0",
                        "justify-center",
                        "items-center",
                        "mt-6",
                    )}
                >
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "flex",
                                "items-center",
                                "justify-center",
                                "min-h-[56px] sm:min-h-[72px]",
                            )}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
