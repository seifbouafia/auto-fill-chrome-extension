import { Component } from '@angular/core';

@Component({
  selector: 'app-leocare',
  standalone: true,
  imports: [],
  templateUrl: './leocare.component.html',
  styleUrl: './leocare.component.css'
})
export class LeocareComponent {
  onFillDataClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id as number },
        func: fillForm,

      });
    });
  }
}
function fillForm() {
  const DataAuto: { [key: string]: string } = {
   'tb_dateeffet': '21/02/2024',
    'tb_datemec': '20/02/2024',
    'ddl_kilometrage': 'Moins de 5 000 KM par an'
  }

  for (const [key, value] of Object.entries(DataAuto)) {
    let inputElement: HTMLInputElement | HTMLSelectElement | HTMLTableElement | null = document.getElementById(key) as HTMLInputElement | HTMLSelectElement | HTMLTableElement;

    if (inputElement) {
      if (inputElement.tagName === 'SELECT') {
        let options = inputElement.querySelectorAll('option');
        options.forEach(option => {
          if (option.textContent?.trim() === value && value !== '' && option.value !== '') {
            (option as HTMLOptionElement).selected = true;
          }
        });
      } else {
        (inputElement as HTMLInputElement).value = value;
      }
    }
  }
}
