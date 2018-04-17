import OptionDefaults from './option-defaults'

export default class ContentOptionDefaults extends OptionDefaults {
  /**
   * Base Class for holding Option defaults
   */
  constructor (domain = 'alpheios-content-options') {
    super(domain)
  }

  get items () {
    return {
      locale: {
        defaultValue: 'en-US',
        labelText: 'UI Locale:',
        values: [
          {value: 'en-US', text: 'English (US)'},
          {value: 'en-GB', text: 'English (GB)'}
        ]
      },
      panelPosition: {
        defaultValue: 'left',
        labelText: 'Panel position:',
        values: [
          {value: 'left', text: 'Left'},
          {value: 'right', text: 'Right'}
        ]
      },
      popupPosition: {
        defaultValue: 'fixed',
        labelText: 'Popup position:',
        values: [
          {value: 'flexible', text: 'Flexible'},
          {value: 'fixed', text: 'Fixed'}
        ]
      },
      uiType: {
        defaultValue: 'popup',
        labelText: 'UI type:',
        values: [
          {value: 'popup', text: 'Pop-up'},
          {value: 'panel', text: 'Panel'}
        ]
      },
      preferredLanguage: {
        defaultValue: 'lat',
        labelText: 'Page language:',
        values: [
          {value: 'lat', text: 'Latin'},
          {value: 'grc', text: 'Greek'},
          {value: 'ara', text: 'Arabic'},
          {value: 'per', text: 'Persian'}
        ]
      },
      verboseMode: {
        defaultValue: 'normal',
        labelText: 'Log Level',
        values: [
          { value: 'verbose', text: 'Verbose' },
          { value: 'normal', text: 'Normal' }
        ]
      }
    }
  }
}
