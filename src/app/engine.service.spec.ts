import { TestBed, inject } from '@angular/core/testing';

import { EngineService } from './engine.service';

describe('EngineService', () => {
  beforeEach(() => {

    let mockEngine = { getName: function () { return 'mock engine name'; } }
// providers: [{provide:EngineService, useValue:EngineService}]
    TestBed.configureTestingModule({
      providers: [EngineService]
      
    });
  });

  it('should be created', inject([EngineService], (service: EngineService) => {
    expect(service).toBeTruthy();
  }));

  it('should return engine name', inject([EngineService], (service: EngineService) => {
    let name = service.getName();
    let expectedName = 'Basic Engine';
    expect(name).toBe(expectedName);
  }));

  it('should return engine name by spy', inject([EngineService], (service: EngineService) => {
    // const spy = spyOn(service,'getName').and.returnValue('spy test');    
    // const spy = spyOn(service,'getName').and.callThrough();    
    const spy = spyOn(service,'getName').and.callFake(()=>{
      return 'fake value';
    });    
    let name = service.getName();
    // let expectedName = 'spy test';
    let expectedName = 'fake value';
    expect(name).toBe(expectedName);
  }));
});
