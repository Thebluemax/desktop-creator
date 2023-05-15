import { Injectable } from '@angular/core';
import { rejects } from 'assert';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { APP_CONFIG } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ElectronFsService {

  fs: any;

  constructor() {

  }

  init(_fs) {
    this.fs = _fs;
  }

  /**
   * Get the files fron a absolute path
   *
   * @param path string required the absolute path
   * @returns strings
   */
  getFiles(path: string) {
    let fileList: any;
    let response: any;

    return new Promise((resolve, reject) => {

      this.fs.readdir(path, function (err, data) {
        if (err) {
          response = {
            status: 'error',
            data: err
          };
          reject(response);
        } else {
          response = {
            status: 'success',
            data: data,
            path: path
          };
          resolve(response);
        }
      });
    });
  }
  /**
   *
   * @param path
   */
  getFile(path: string) {
    return new Promise<string>((resolve, reject) => {
      const data = this.fs.readFileSync(path).toString('base64');
      resolve(data);
    }
    );
  }
  /**
   *
   */
  readAppFolder() {
    let path: string = APP_CONFIG.pathUser + APP_CONFIG.dataFolder + APP_CONFIG.appFolder + '/';
    return this.getFiles(path);
  }

  readImgFolder() {
    let path: string = APP_CONFIG.pathUser + 'Imágenes' + '/';
    return this.getFiles(path);
  }

  isFile(path: string) {
    return this.fs.lstatSync(path).isFile();
  }

  witeFile(path: string, filename: string, contentBase64: string) {
    const file: string = `${path}/${filename}`;
      this.fs.writeFile(file, contentBase64, {encoding: 'base64'}, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File created');
      });
    }

    writeIcon(fileName:string, size:number, contentBase64: string) {
      const path = APP_CONFIG.pathUser + APP_CONFIG.dataFolder +
         APP_CONFIG.iconsFolder + size + 'x' + size + '/apps/';
      this.witeFile(path,fileName,contentBase64);
    }
}
