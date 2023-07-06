import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'fe-clone-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less'],
    standalone: true,
    imports: [MatGridListModule, CommonModule],
})
export class MapComponent implements OnInit {
    // TODO: move these into config.yaml
    colsLen: number = 32;
    rowsLen: number = 32;
    tileSize: number = 100;
    colRowRatio: string = '1:1';
    rowsArray: any[] = [];
    activeTile: HTMLElement | null = null;

    ngOnInit(): void {
      this.initTileData();
    }

    public initTileData(): void {
      this.rowsArray = [...this.generateTileData()];
    }

    public generateTileData(input: any = []): any[] {
      let output: any = [...input];
      for (let i = 0; i < this.colsLen * this.tileSize; i++) {
        output.push('');
      }
      return output;
    }

    public setActiveTile($event: MouseEvent): void {
      this.activeTile = $event.currentTarget as HTMLElement;
    }
}
