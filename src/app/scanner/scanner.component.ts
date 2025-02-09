import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {NgxScannerQrcodeModule} from "ngx-scanner-qrcode";

@Component({
  selector: 'app-scanner',
  imports: [
    AsyncPipe,
    JsonPipe,
    NgxScannerQrcodeModule
  ],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.scss'
})
export class ScannerComponent {

}
