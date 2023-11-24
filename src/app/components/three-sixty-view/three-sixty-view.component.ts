import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ThreeSixtyService } from '../../services/three-sixty.service';

@Component({
  selector: 'app-three-sixty-view',
  templateUrl: './three-sixty-view.component.html',
  styleUrls: ['./three-sixty-view.component.css'],
})
export class ThreeSixtyViewComponent implements AfterViewInit {
  @ViewChild('threeSixtyContainer')
  threeSixtyContainer!: ElementRef;

  constructor(private _threeSixtyService: ThreeSixtyService) {}

  ngAfterViewInit(): void {
    this._threeSixtyService.initView(this.threeSixtyContainer.nativeElement);
  }
}
