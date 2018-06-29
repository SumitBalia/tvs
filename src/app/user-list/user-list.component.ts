import { Component, OnInit } from '@angular/core';
import {UserloginService} from '../userlogin.service';
import { Router} from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any;
  chart: Chart;
  cityName = [];
  filter:any;
  constructor(private userloginservice: UserloginService, private route: Router) { }
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  ngOnInit() {
    var userSession = sessionStorage.getItem('user');
    if(!userSession){
      this.route.navigate(['/login']);
    }else{
      this.users = this.userloginservice.userData;
      for(var _i = 0; _i < this.users.data.length; _i++){
        this.cityName = this.users.data[_i];
      }
    }
    this.chart = new Chart({
      chart: {
        type: 'bar'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: this.users.data,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
    }]
    });
  }

}
