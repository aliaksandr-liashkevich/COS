import { Lab1Module } from './lab1.module';

describe('Lab1Module', () => {
  let lab1Module: Lab1Module;

  beforeEach(() => {
    lab1Module = new Lab1Module();
  });

  it('should create an instance', () => {
    expect(lab1Module).toBeTruthy();
  });
});
