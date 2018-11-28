declare const process: { env: { VUE_APP_APIURL: string | undefined } };

export const apiUrl = process.env.VUE_APP_APIURL;
