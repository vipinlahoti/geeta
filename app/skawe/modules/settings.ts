import appSettings from "~/settings";

interface ObjectType {
  [key: string]: any;
}

type stringType = {
  settingName: string;
  defaultValue: string;
  description: string;
};

export const Settings: ObjectType = {};

export function registerSetting({
  settingName,
  defaultValue,
  description,
}: stringType) {
  Settings[settingName] = { defaultValue, description };
}

export function getSetting(
  settingName: string,
  defaultValue?: string | number
) {
  let setting;

  // if a default value has been registered using registerSetting, use it
  if (typeof defaultValue === "undefined" && Settings[settingName])
    defaultValue = Settings[settingName].defaultValue;

  const setSettings = appSettings && appSettings[settingName];
  setting = typeof setSettings !== "undefined" ? setSettings : defaultValue;

  return setting;
}
