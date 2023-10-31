import clsx from "clsx";
import React, { DetailedHTMLProps, FC, ReactNode, SVGProps } from "react";
import {
    Ably,
    Airtable,
    Antd,
    Appwrite,
    Chakra,
    Directus,
    Dp,
    Elide,
    ElideGraphql,
    EntRefine,
    Firebase,
    Gatsby,
    Graphql,
    Hasura,
    Headless,
    HookForm,
    Kbar,
    Mantine,
    Medusa,
    Mui,
    Nest,
    NestQuery,
    Nextjs,
    Nhost,
    ShadCn,
    React as ReactIcon,
    Remix,
    Rest,
    Strapi,
    StrapiWithText,
    Supabase,
    Hygraph,
    UseGenerated,
    Sanity,
    SQLite,
    JSONApi,
} from "../assets/integration-icons";
import { LandingSectionCtaButton } from "./landing-section-cta-button";

type Props = {
    className?: string;
};

export const LandingPackages: FC<Props> = ({ className }) => {
    return (
        <div className={clsx(className, "w-full")}>
            <div
                className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}
            >
                <h2
                    className={clsx(
                        "text-2xl landing-sm:text-[32px]",
                        "tracking-tight",
                        "text-start",
                        "p-0",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    Start{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-green-alt",
                            "text-refine-blue",
                        )}
                    >
                        faster
                    </span>
                    , maintain{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt",
                            "text-refine-indigo",
                        )}
                    >
                        easier
                    </span>
                    , manage{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-red",
                            "text-refine-purple",
                        )}
                    >
                        complexity
                    </span>
                    .
                </h2>
            </div>

            <div
                className={clsx(
                    "w-full",
                    "relative",
                    "mt-8 landing-sm:mt-12 landing-lg:mt-20",
                    "p-4 landing-md:p-10",
                    "dark:bg-landing-packages-dark bg-landing-packages",
                    "dark:bg-gray-800 bg-gray-50",
                    "rounded-3xl",
                )}
            >
                <div className={clsx("overflow-hidden")}>
                    <PackagesContainer
                        className={clsx("animate-landing-packages-right")}
                    >
                        {[...listOne, ...listOne].map(
                            ({ icon: Icon, label, hoverText }) => (
                                <PackageItem
                                    key={label}
                                    label={label}
                                    hoverText={hoverText}
                                    icon={<Icon width="24" height="24" />}
                                />
                            ),
                        )}
                    </PackagesContainer>
                    <PackagesContainer
                        className={clsx("animate-landing-packages-left")}
                    >
                        {[...listTwo, ...listTwo].map(
                            ({ icon: Icon, label, hoverText }) => (
                                <PackageItem
                                    key={label}
                                    label={label}
                                    hoverText={hoverText}
                                    icon={<Icon width="24" height="24" />}
                                />
                            ),
                        )}
                    </PackagesContainer>
                </div>

                <div
                    className={clsx(
                        "not-prose",
                        "mt-4 landing-sm:mt-6 landing-lg:mt-10",
                    )}
                >
                    <h6
                        className={clsx(
                            "p-0",
                            "font-semibold",
                            "text-base landing-sm:text-2xl",
                            "dark:text-gray-300 text-gray-900",
                        )}
                    >
                        Seamless connectivity
                    </h6>
                    <div
                        className={clsx(
                            "not-prose",
                            "flex",
                            "items-center",
                            "justify-between",
                            "flex-wrap",
                            "gap-4 landing-sm:gap-8",
                        )}
                    >
                        <p
                            className={clsx(
                                "p-0",
                                "mt-2 landing-sm:mt-4",
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            Out-of-the box integrations for 15+ services
                            including custom REST and GraphQL API’s.
                        </p>
                        <LandingSectionCtaButton to="/docs/integrations/">
                            All integrations
                        </LandingSectionCtaButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PackagesContainer = ({
    children,
    className,
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div
            className={clsx(
                className,
                "flex",
                "items-center",
                "justify-center",
                "gap-[18px]",
                "mt-6",
                "relative",
            )}
        >
            {children}
        </div>
    );
};

const PackageItem = (props: {
    icon: ReactNode;
    label: string;
    hoverText: string;
}) => {
    const { hoverText, icon, label } = props;

    return (
        <div
            className={clsx(
                "flex",
                "items-center",
                "justify-center",
                "gap-3",
                "pl-4 pt-4 pb-4 pr-6",
                "dark:bg-gray-900 bg-gray-0",
                "rounded-full",
            )}
        >
            <div>{icon}</div>
            <div
                className={clsx(
                    "text-sm",
                    "font-medium",
                    "dark:bg-landing-packages-text-dark bg-landing-packages-text",
                    "bg-clip-text",
                    "text-transparent",
                    "whitespace-nowrap",
                )}
            >
                {label}
            </div>
        </div>
    );
};

const listOne = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Antd {...props} />,
        label: "Ant Design",
        hoverText: "npm i @refinedev/antd",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Mui {...props} />,
        label: "Material UI",
        hoverText: "npm i @refinedev/mui",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Mantine {...props} />,
        label: "Mantine",
        hoverText: "npm i @refinedev/mantine",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Chakra {...props} />,
        label: "Chakra UI",
        hoverText: "npm i @refinedev/chakra-ui",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <ShadCn {...props} />,
        label: "Shadcn",
        hoverText: "npm i @refinedev/shadcn",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Firebase {...props} />,
        label: "Firebase",
        hoverText: "npm i refine-firebase",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Ably {...props} />,
        label: "Ably",
        hoverText: "npm i @refinedev/ably",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Airtable {...props} />,
        label: "Airtable",
        hoverText: "npm i @refinedev/airtable",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Appwrite {...props} />,
        label: "Appwrite",
        hoverText: "npm i @refinedev/appwrite",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Directus {...props} />,
        label: "Directus",
        hoverText: "npm i @refinedev/directus",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Dp {...props} />,
        label: "Dp",
        hoverText: "npm i @refinedev/dp",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Elide {...props} />,
        label: "Elide",
        hoverText: "npm i @refinedev/elide",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <ElideGraphql {...props} />,
        label: "Elide GraphQL",
        hoverText: "npm i @refinedev/elide-graphql",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <EntRefine {...props} />,
        label: "EntRefine",
        hoverText: "npm i @refinedev/entrefine",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Gatsby {...props} />,
        label: "Gatsby",
        hoverText: "npm i @refinedev/gatsby",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Hasura {...props} />,
        label: "Hasura",
        hoverText: "npm i @refinedev/hasura",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Headless",
        hoverText: "npm i @refinedev/headless",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <HookForm {...props} />,
        label: "Hook Form",
        hoverText: "npm i @refinedev/hook-form",
    },
];

const listTwo = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Graphql {...props} />,
        label: "GraphQL",
        hoverText: "npm i @refinedev/graphql",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Kbar {...props} />,
        label: "Kbar",
        hoverText: "npm i @refinedev/kbar",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Medusa {...props} />,
        label: "Medusa",
        hoverText: "npm i @refinedev/medusa",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Nest {...props} />,
        label: "Nest",
        hoverText: "npm i @refinedev/nest",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <NestQuery {...props} />,
        label: "Nest Query",
        hoverText: "npm i @refinedev/nest-query",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Nextjs {...props} />,
        label: "Next.js",
        hoverText: "npm i @refinedev/nextjs",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Nhost {...props} />,
        label: "Nhost",
        hoverText: "npm i @refinedev/nhost",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <ReactIcon {...props} />,
        label: "React",
        hoverText: "npm i @refinedev/react",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Remix {...props} />,
        label: "Remix",
        hoverText: "npm i @refinedev/remix",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Rest {...props} />,
        label: "REST",
        hoverText: "npm i @refinedev/rest",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Strapi {...props} />,
        label: "Strapi",
        hoverText: "npm i @refinedev/strapi",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <StrapiWithText {...props} />,
        label: "Strapi with Text",
        hoverText: "npm i @refinedev/strapi-with-text",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Supabase {...props} />,
        label: "Supabase",
        hoverText: "npm i @refinedev/supabase",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <UseGenerated {...props} />,
        label: "Use Generated",
        hoverText: "npm i @refinedev/usegenerated",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Hygraph {...props} />,
        label: "Hygraph",
        hoverText: "npm i @refinedev/hygraph",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Sanity {...props} />,
        label: "Sanity",
        hoverText: "npm i @refinedev/sanity",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <SQLite {...props} />,
        label: "SQLite",
        hoverText: "npm i @refinedev/sqlite",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <JSONApi {...props} />,
        label: "JSON API",
        hoverText: "npm i @refinedev/json-api",
    },
];
