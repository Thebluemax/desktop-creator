import { DesktopEntry } from "../models/desktop-entry";

export class EntryProccessor {

  header: string = '[Desktop Entry]\n';
  entry: DesktopEntry;

  constructor(entry:DesktopEntry) {
    this.entry = entry;
  }

  buildLauncher(){
    let launcher = this.header;
    for (var [key, value] of Object.entries(this.entry)) {
      launcher += key.replace(/^\w/, (c) => c.toUpperCase()) + '=' + value + '\n'; // "a 5", "b 7", "c 9"
  }
  return launcher;
  }

}
