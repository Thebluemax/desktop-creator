
import { UrlResolver } from '@angular/compiler';
import {DomSanitizer} from '@angular/platform-browser';

export class FileBuilder {

  static buildFile(content: string, mine: string, fileName: string): Blob {
    let blobContainer = new Blob([content], { type: mine });
    return blobContainer;
  }

  static createURL(blob: Blob | File,mime:string) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise<string>((resolve, reject)=>{
      reader.onloadend = function () {
      resolve(String(reader.result));
    }
    });

  }

  static readEntry(file: File) {
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    return new Promise<string>((resolve, reject)=>{
    fileReader.onload = (e) => {
     resolve(String(fileReader.result));
    }
  });
}

}
