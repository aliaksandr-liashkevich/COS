import { Lab4Module } from './lab4.module';

describe('Lab4Module', () => {
  let lab4Module: Lab4Module;

  beforeEach(() => {
    lab4Module = new Lab4Module();
  });

  it('should create an instance', () => {
    expect(lab4Module).toBeTruthy();
  });
});
