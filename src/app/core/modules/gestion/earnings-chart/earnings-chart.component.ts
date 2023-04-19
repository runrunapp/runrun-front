import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { UserReduced } from '../../authentication/authentication.models';
// import { LineChartData, LineChartOptions } from 'ngx-graph';
import { Receipt } from '../gestion.models';
import { ReceiptDataService } from '../receipt-data.service';
import { curveLinear } from 'd3-shape';

@Component({
  selector: 'app-earnings-chart',
  templateUrl: './earnings-chart.component.html',
  styleUrls: ['./earnings-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EarningsChartComponent implements OnInit {
  constructor(private dataService: ReceiptDataService) {}

  get data() {
    return [
      {
        name: 'CUP',
        series: this.dataService.receiptByYear(
          this.receipts,
          this.currentYear,
          'CUP'
        ),
      },
      {
        name: 'MLC',
        series: this.dataService.receiptByYear(
          this.receipts,
          this.currentYear,
          'MLC'
        ),
      },
      {
        name: 'USD',
        series: this.dataService.receiptByYear(
          this.receipts,
          this.currentYear,
          'USD'
        ),
      },
      {
        name: 'EUR',
        series: this.dataService.receiptByYear(
          this.receipts,
          this.currentYear,
          'EUR'
        ),
      },
    ];
  }

  get actualYear() {
    return new Date().getFullYear();
  }
  @Input() receipts!: Receipt[];
  @Input() currentYear: number = new Date().getFullYear();

  // options
  legend = false;
  showLabels = false;
  animations = true;
  xAxis = true;
  yAxis = false;
  showYAxisLabel = false;
  showXAxisLabel = false;
  xAxisLabel = '';
  yAxisLabel = '';
  curve = curveLinear;
  timeline = true;

  colorScheme: Color = {
    name: 'runrun',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['black', 'red', 'gray', 'green'],
  };
  ICONS = Icons;

  customColors = (value: any): string => {
    return '#ff0000';
  };

  onSelect(data: any): void {}

  onActivate(data: any): void {}

  onDeactivate(data: any): void {}

  ngOnInit(): void {}

  onDecrease(): void {
    this.currentYear -= 1;
  }
  onIncrease(): void {
    if (this.currentYear === new Date().getFullYear()) {
      return;
    }
    this.currentYear += 1;
  }
}
