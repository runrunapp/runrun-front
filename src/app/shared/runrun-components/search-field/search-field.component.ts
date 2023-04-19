import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { GeocodeResponse } from 'src/app/core/services/nominatim/geocode.response';
import { NominatimService } from 'src/app/core/services/nominatim/nominatim.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent implements OnInit {
  constructor(private nominatim: NominatimService, private router: Router) {}
  @Input() label!: string;
  @Input() active = true;

  @Output() click = new EventEmitter<string>();

  inputControl = new FormControl();
  filteredOptions!: Observable<GeocodeResponse[]>;

  icons = Icons;

  ngOnInit(): void {
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      // delay(2000),
      switchMap((value) =>
        this.nominatim.getLocation({
          q: value,
        })
      )
    );
  }

  onClick(search: string): void {
    const option = this.inputControl.value;
    this.router.navigate([URLs.feedURL], {
      queryParams: {
        map: 1,
        lat: option.lat,
        lon: option.lon,
      },
    });
    this.click.emit(search);
  }

  displayFn(option: GeocodeResponse): string {
    return option.display_name;
  }
}
