export const appcodes = {
  alignment: "spm-alignment-web",
  master: "spm-master",
};

  export const appUrl = "http://agrohaclub.in:8080/agroha";
  export const authUrl = "http://agrohaclub.in:8080/agroha";
 // export const logoutUrl="http://194.163.40.143/UI";

export const environment = {
  production: false,
  environmentName: "(DEV)",
  alignmentUrl: `${appUrl}${appcodes.alignment}`,
  commonUrl: `${appUrl}`,
  authUrl: `${authUrl}`,
  defaultLanguage: "en-US",
  supportedLanguages: ["en-US", "fr-FR"],
  baseUrl: "http://agrohaclub.in/",
  awsregion: "us-east-1",
  uploadMaxFilesLimit: 20,
  uploadMaxParallelProcessingFilesLimit: 10,
  applicationTimeOut: 1000000000000, //15 min 1680 , // 28 min //180 3min
  apiRequestTimeOut: 1800000, // 30 mins in milliseconds
  apiRefreshToken: 1400000, // 23 mins in milliseconds
  dashboardComingSoonOverlay: false,
  passPhrase: "secret",
};