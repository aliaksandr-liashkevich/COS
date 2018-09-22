import { Lab2Module } from './lab2.module';

describe('Lab2Module', () => {
  let lab2Module: Lab2Module;

  beforeEach(() => {
    lab2Module = new Lab2Module();
  });

  it('should create an instance', () => {
    expect(lab2Module).toBeTruthy();
  });
});
