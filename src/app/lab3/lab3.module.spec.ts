import { Lab3Module } from './lab3.module';

describe('Lab3Module', () => {
  let lab3Module: Lab3Module;

  beforeEach(() => {
    lab3Module = new Lab3Module();
  });

  it('should create an instance', () => {
    expect(lab3Module).toBeTruthy();
  });
});
