import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assisment2';
  selected!: Date | null;
  constructor(private route: ActivatedRoute, private router: Router) {}
  single: any[] = [
    {
      name: 'Collections',
      value: 100,
    },
    {
      name: 'Fees',
      value: 75,
    },
    {
      name: 'Expenses',
      value: 50,
    },
  ];

  view: any = [500, 250];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;

  showYAxisLabel = true;

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  onSelect(single: any) {
    console.log('Item clicked', JSON.parse(JSON.stringify(this.single)));
  }
}
