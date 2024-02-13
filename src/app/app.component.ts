export class AppComponent {
  constructor() {
    // Écouter l'événement click sur le bouton pour remplir le formulaire
    document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));
  }

  onDOMContentLoaded(): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: { id: any; }[]) => {
      // Récupérer l'ID de l'onglet actif
      const tabId = tabs[0]?.id;

      if (tabId) {
        // Injecter le script dans la page Web actuelle
        chrome.tabs.executeScript(tabId, { code: this.fillFormScript });
      }
    });
  }

  fillFormScript = `
    const formData = {
      date: '20/02/1998',
      date2: '20/02/1999',
    };

    const usernameField = document.querySelector('input[name="ctl00$body$date_misecirculation"]');
    const passwordField = document.querySelector('input[name="ctl00$body$date_acquisition"]');

    console.log(usernameField);
    console.log(passwordField);

    if (usernameField && passwordField) {
      usernameField.value = formData.date;
      passwordField.value = formData.date2;
    }
  `;
}
