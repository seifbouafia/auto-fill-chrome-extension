import { Component } from '@angular/core';

@Component({
  selector: 'app-netvox',
  standalone: true,
  imports: [],
  templateUrl: './netvox.component.html',
  styleUrl: './netvox.component.css'
})
export class NetvoxComponent {
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
    'ctl00_body_modeacquisition': 'un véhicule que vous possédez déjà',
    'ctl00_body_date_misecirculation': '01/02/2024',
    'ctl00_body_date_acquisition': '01/02/2024',
    'ctl00_body_d_fin_assurance_vehicule': '06/02/2024',
    'ctl00_body_modesFinancementAuto': 'Comptant',
    'ctl00_body_Immatriculation': '1235689945',
    'ctl00_body_codeSRA': '4523485',
    'ctl00_body_codeMine': 'hedkf',
    'ctl00_body_marquesAuto': 'AUDI',
    'ctl00_body_usagesAuto': 'Vie privée',
    'ctl00_body_modesParkingAuto': 'Voie publique',
    'ctl00_body_cp': '13008',
    'ctl00_body_ville': 'MARSEILLE 08'
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


