import {
    GoConfig,
    RouterBindings,
    ResourceContext,
    matchResourceFromRoute,
    ParseResponse,
} from "@refinedev/core";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { parse, stringify } from "qs";
import React, { ComponentProps, useContext } from "react";
import { paramsFromCurrentPath } from "../common/params-from-current-path";
import { convertToNumberIfPossible } from "src/common/convert-to-number-if-possible";

export const stringifyConfig = {
    addQueryPrefix: true,
    skipNulls: true,
    arrayFormat: "indices" as const,
    encode: false,
    encodeValuesOnly: true,
};

export const routerBindings: RouterBindings = {
    go: function useGoBinding() {
        const { push, replace } = useRouter();
        const pathname = usePathname();
        const searchParamsObj = useSearchParams();

        const fn = React.useCallback(
            ({
                to,
                type,
                query,
                options: { keepQuery = false, keepHash = false } = {},
                hash,
            }: GoConfig) => {
                let urlHash = "";

                if (keepHash && typeof document !== "undefined") {
                    urlHash = document.location.hash;
                }

                if (hash) {
                    urlHash = `#${hash.replace(/^#/, "")}`;
                }

                const urlQuery = {
                    ...(keepQuery
                        ? parse(searchParamsObj.toString(), {
                              ignoreQueryPrefix: true,
                          })
                        : {}),
                    ...query,
                };

                if (urlQuery.to) {
                    urlQuery.to = encodeURIComponent(`${urlQuery.to}`);
                }

                const cleanPathname =
                    pathname?.split("?")[0].split("#")[0] ?? "";

                const urlTo = to || cleanPathname;

                const hasUrlHash = urlHash.length > 1;
                const hasUrlQuery = Object.keys(urlQuery).length > 0;

                const fullPath = `${urlTo}${
                    hasUrlQuery ? stringify(urlQuery, stringifyConfig) : ""
                }${hasUrlHash ? urlHash : ""}`;

                if (type === "path") {
                    return fullPath;
                }

                if (type === "replace") {
                    replace(fullPath);
                } else {
                    push(fullPath);
                }

                return undefined;
            },
            [searchParamsObj, pathname, replace, push],
        );

        return fn;
    },
    back: function useBackBinding() {
        const { back } = useRouter();

        return back;
    },
    parse: function useParseBinding() {
        const pathname = usePathname();
        const searchParamsObj = useSearchParams();
        const { resources } = useContext(ResourceContext);

        const { resource, action, matchedRoute } = React.useMemo(() => {
            if (!pathname) return { found: false };
            return matchResourceFromRoute(pathname, resources);
        }, [pathname, resources]);

        const inferredParams = React.useMemo(
            () =>
                matchedRoute && pathname
                    ? paramsFromCurrentPath(pathname, matchedRoute)
                    : {},
            [matchedRoute, pathname],
        );

        const inferredId = inferredParams.id;

        const parsedParams = React.useMemo(() => {
            const searchParams = searchParamsObj.toString();
            return parse(searchParams, { ignoreQueryPrefix: true });
        }, [searchParamsObj]);

        const fn = React.useCallback(() => {
            const combinedParams = {
                ...inferredParams,
                ...parsedParams,
            };

            const response: ParseResponse = {
                ...(resource && { resource }),
                ...(action && { action }),
                ...(inferredId && { id: decodeURIComponent(inferredId) }),
                pathname: pathname ? pathname : undefined,
                params: {
                    ...combinedParams,
                    current: convertToNumberIfPossible(
                        combinedParams.current as string,
                    ) as number | undefined,
                    pageSize: convertToNumberIfPossible(
                        combinedParams.pageSize as string,
                    ) as number | undefined,
                    to: combinedParams.to
                        ? decodeURIComponent(combinedParams.to as string)
                        : undefined,
                },
            };

            return response;
        }, [
            pathname,
            parsedParams,
            inferredParams,
            inferredId,
            resource,
            action,
        ]);

        return fn;
    },
    Link: React.forwardRef<
        HTMLAnchorElement,
        ComponentProps<NonNullable<RouterBindings["Link"]>>
    >(function RefineLink({ to, ...props }, ref) {
        return <Link href={to} {...props} ref={ref} />;
    }),
};
