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
}
