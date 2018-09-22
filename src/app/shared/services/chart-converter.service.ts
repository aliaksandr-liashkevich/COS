import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartConverterService {

  constructor() { }

  public convert(name: string, data: Array<number>): any[] {
    const resultData = [
      {
        name: name,
        series: data.map((x) => ({
          value: x,
          name: x.toString()
        }))
      }
    ];

    return resultData;
  }

  public convertMultiOnlyForLab2(names: string[], data: Array<Array<any>>): any[] {
    const resultData: any[] = new Array<any>(data.length);
    for (let i = 0; i < data.length; i++) {
      resultData[i] = {
        name: names[i],
        series: data[i].map((point) => ({
          value: point.y,
          name: point.x.toString()
        }))
      };
    }

    return resultData;
  }
}
