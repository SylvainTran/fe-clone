import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
    let component: MapComponent;
    let fixture: ComponentFixture<MapComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [MapComponent]
        });
        fixture = TestBed.createComponent(MapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should invoke initTileData from ngOnInit', () => {
      fixture = TestBed.createComponent(MapComponent);
      component = fixture.componentInstance;
      const initTileDataSpy: jasmine.Spy = spyOn(component, 'initTileData');
      fixture.detectChanges();
      expect(initTileDataSpy).toHaveBeenCalled();
    });

    it('should init rowsData with correct output', () => {
      component.colsLen = 10;
      component.tileSize = 2;
      let input: any = [];
      const output = component.generateTileData(input);
      expect(output.length).toBe(20);
    });

    it('should call setActiveTile when clicking on an interactable tile', () => {
      const setActiveTileSpy: jasmine.Spy = spyOn(component, 'setActiveTile');
      fixture.debugElement.query(el => el.attributes['id'] === 'tile-0')
        .triggerEventHandler('click');
      expect(setActiveTileSpy).toHaveBeenCalled();
  });
});
