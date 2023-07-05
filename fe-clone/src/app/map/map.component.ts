import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'fe-clone-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less'],
    standalone: true,
    imports: [MatGridListModule, CommonModule],
})
export class MapComponent {
    // TODO: move these into config.yaml
    readonly colsLen: number = 32;
    readonly rowsLen: number = 32;
    readonly rowsArray: any[] = [];
    readonly colRowRatio: string = '1:1';

    constructor() {
        for (let i = 0; i < 32 * 100; i++) {
            this.rowsArray.push('');
        }
    }

    public setActiveTile(evt?: Event): void {
        console.log(evt?.target);
    }
}
