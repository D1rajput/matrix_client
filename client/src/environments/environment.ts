export const appcodes = {
  alignment: "spm-alignment-web",
  master: "spm-master",
};

  export const appUrl = "http://localhost:9091";
  export const authUrl = "http://localhost:9091";

export const environment = {
  production: false,
  environmentName: "(DEV)",
  alignmentUrl: `${appUrl}${appcodes.alignment}`,
  commonUrl: `${appUrl}`,
  authUrl: `${authUrl}`,
  defaultLanguage: "en-US",
  supportedLanguages: ["en-US", "fr-FR"],
  baseUrl: "http://localhost:4200",
  awsregion: "us-east-1",
  uploadMaxFilesLimit: 20,
  uploadMaxParallelProcessingFilesLimit: 10,
  applicationTimeOut: 1000000000000, //15 min 1680 , // 28 min //180 3min
  apiRequestTimeOut: 1800000, // 30 mins in milliseconds
  apiRefreshToken: 1400000, // 23 mins in milliseconds
  dashboardComingSoonOverlay: false,
  passPhrase: "secret",
};