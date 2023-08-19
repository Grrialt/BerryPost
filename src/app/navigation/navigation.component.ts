import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  tabs: string[] = ["home", "topic", "users"];
  selectedTab: string = 'home';

  constructor() { }

  ngOnInit(): void { }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
