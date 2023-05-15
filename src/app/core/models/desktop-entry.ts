type DesktopEntryType = {
  [key: string]: boolean
}

export interface DesktopEntry {

  type: string;
  name: string;
  genericName: string;
  version?: string;
  comment?: string;
  encoding:string;
  terminal?: string
  icon?: string;
  categories?: string[];
  keywords?: string[];
  exec: string;
  tryExec: boolean;
  path?: string;
  url?:string;
  mimeType?: string;
  DBusActivatable?: boolean;
  noDisplay: boolean;
  hidden?: boolean;
  implements?: string;
}
