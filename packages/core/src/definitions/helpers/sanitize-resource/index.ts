import { IResourceItem } from "../../../interfaces/bindings/resource";

/**
 * Remove all properties that are non-serializable from a resource object.
 */
export const sanitizeResource = (
    resource?: Partial<IResourceItem> &
        Required<Pick<IResourceItem, "name">> & { children?: unknown },
):
    | (Partial<IResourceItem> & Required<Pick<IResourceItem, "name">>)
    | undefined => {
    if (!resource) {
        return undefined;
    }

    const {
        icon: _icon,
        list: _list,
        edit: _edit,
        create: _create,
        show: _show,
        clone: _clone,
        children: _children,
        meta,
        options,
        ...restResource
    } = resource;

    const { icon: _metaIcon, ...restMeta } = meta ?? {};
    const { icon: _optionsIcon, ...restOptions } = options ?? {};

    return {
        ...restResource,
        ...(meta ? { meta: restMeta } : {}),
        ...(options ? { options: restOptions } : {}),
    };
};
