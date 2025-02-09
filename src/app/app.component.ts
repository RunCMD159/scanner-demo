import {Component} from '@angular/core';
import {LOAD_WASM} from "ngx-scanner-qrcode";
import {RouterOutlet} from "@angular/router";

LOAD_WASM().subscribe();
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'scan-demo';
}
