import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared.barrel';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public constructor(public authService: AuthService) {
    //
  }

  public ngOnInit() {
    //
  }

}