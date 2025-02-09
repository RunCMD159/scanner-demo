import {Component} from '@angular/core';
import {LOAD_WASM, NgxScannerQrcodeModule} from "ngx-scanner-qrcode";
import {AsyncPipe, JsonPipe} from "@angular/common";

LOAD_WASM().subscribe();
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxScannerQrcodeModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'scan-demo';
}
