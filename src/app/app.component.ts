import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onFillDataClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id as number },
        func: fillForm,

      });
    });

    function fillForm() {
      const inputSelectors = ['input[id="ctl00_body_date_misecirculation"]', 'input[id="ctl00_body_date_acquisition"]','input[id="ctl00_body_d_fin_assurance_vehicule"]'];
      const values = ['20/02/1998', '26/02/1920','15/08/4450'];

      inputSelectors.forEach((selector, index) => {
        const input = document.querySelector(selector) as HTMLInputElement;
        if (input) {
          input.value = values[index];
        }
      });
    }
  }
}
