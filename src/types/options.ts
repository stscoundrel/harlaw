export interface ContentReplace {
    search: string,
    replace: string,
}

export interface HarlawOptions {
    replaces?: ContentReplace[],
    removes?: string[],
    readSettings?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    // note: types/node does not seem to export
    // the options type createReadStream uses
    // therefore readSettings are just "unknown".
    // See https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options for use.
}
