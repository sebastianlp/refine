"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40421],{40421:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"`useMany` is a modified version of `react-query`\'s {@link https://react-query.tanstack.com/guides/queries `useQuery`} used for retrieving multiple items from a `resource`.\\n\\nIt uses `getMany` method as query function from the `dataProvider` which is passed to `<Refine>`.","displayName":"useMany","props":{"resource":{"defaultValue":null,"description":"Resource name for API data interactions","name":"resource","required":true,"type":{"name":"string"},"tags":{}},"ids":{"defaultValue":null,"description":"ids of the item in the resource","name":"ids","required":true,"type":{"name":"[`BaseKey[]`](/docs/api-reference/core/interfaceReferences/#basekey)"},"tags":{"type":"[`BaseKey[]`] (/docs/api-reference/core/interfaceReferences/#basekey)"}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetManyResponse<TQueryFnData>, TError, GetManyResponse<TData>, QueryKey>"},"tags":{}},"meta":{"defaultValue":null,"description":"Metadata query for `dataProvider`,","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Metadata query for `dataProvider`,","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"dataProviderName":{"defaultValue":{"value":"\\"default\\""},"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{"default":"\\"default\\""}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: GetManyResponse<TData>, values?: BaseKey[], resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: BaseKey[], resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"overtimeOptions":{"defaultValue":null,"description":"","name":"overtimeOptions","required":false,"type":{"name":"UseLoadingOvertimeCoreOptions"},"tags":{}}},"generatedAt":1701538892153}')}}]);