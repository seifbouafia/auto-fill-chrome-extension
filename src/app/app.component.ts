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
      const inputSelectors = ['input[name="ctl00$body$date_misecirculation"]', 'input[name="ctl00$body$date_acquisition"]'];
      const values = ['20/02/1998', '20/02/1998'];

      inputSelectors.forEach((selector, index) => {
        const input = document.querySelector(selector) as HTMLInputElement;
        if (input) {
          input.value = values[index];
        }
      });
    }
  }
}
