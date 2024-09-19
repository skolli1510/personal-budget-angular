import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  public dataSource: any = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#83FF33',
          '#F633FF',
          '#FF3333',
        ],
      }
    ],
    labels: []
  };
  constructor(private http: HttpClient) { }
  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
      .subscribe((res: any) => {
        console.log(res);
        console.log(res.length);
        for (var i = 0; i < res.length; i++) {
          this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
          this.dataSource.labels[i] = res.data.myBudget[i].title;
        }
        this.createChart();
      });
  }
  createChart() {
    var ctx = <HTMLCanvasElement>document.getElementById("myChart");
      var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
      });
  }
}
