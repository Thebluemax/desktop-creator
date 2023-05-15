export class ImageManger {
  private context: CanvasRenderingContext2D;
  dataBase64:string;


  constructor(context: CanvasRenderingContext2D){
    this.context = context;
  }

  setData(data:string){
    this.dataBase64 = data;
  }

  draw(img,width, height, ref, px, py){
        this.context.drawImage(img, px, py , ref, ref, 0, 0, width, height);
      }
  getImgData(width, height){
    return this.context.getImageData( 0, 0, width, height)
  }
}
