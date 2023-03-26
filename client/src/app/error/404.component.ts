import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  templateUrl: '404.component.html'
})
export class P404Component {

  constructor(
    private router: Router,
) {}

homeNavigate() {
    this.router.navigateByUrl('/');
}

}
