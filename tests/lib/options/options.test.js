/* eslint-env jest */
import Options from '../../../src/lib/options/options'
import LanguageOptionDefaults from '../../../src/lib/options/language-option-defaults'
import ContentOptionDefaults from '../../../src/lib/options/content-option-defaults'

describe('options.test.js', () => {
  let grouped, single, mockLoader, mockSaver

  beforeEach(() => {
    grouped = new LanguageOptionDefaults()
    single = new ContentOptionDefaults()
    mockLoader = new Promise((resolve, reject) => {
      resolve()
    })
    mockSaver = new Promise((resolve, reject) => {
      resolve()
    })
  })

  it('handles grouped items in the constructor', () => {
    let options = new Options(grouped, mockLoader, mockSaver)
    expect(options.items.lexicons).toBeTruthy()
    expect(options.items.lexicons[0]).toBeTruthy()
    expect(options.items.lexicons[0].name).toEqual('lexicons-grc')
    expect(options.items.lexicons[0].defaultValue).toBeTruthy()
    expect(options.items.lexicons[0].currentValue).toEqual(['https://github.com/alpheios-project/lsj'])
    expect(options.items.lexicons[0].multiValue).toBeTruthy()
    expect(options.items.lexicons[0].currentTextValue()).toEqual(['Liddell, Scott, Jones'])
  })

  it('handles single items in the constructor', () => {
    let options = new Options(single, mockLoader, mockSaver)
    expect(options.items.preferredLanguage).toBeTruthy()
    expect(options.items.preferredLanguage.name).toEqual('preferredLanguage')
    expect(options.items.preferredLanguage.defaultValue).toEqual('lat')
    expect(options.items.preferredLanguage.currentTextValue()).toEqual('Latin')
  })

  it('loads stringified values', async () => {
    mockLoader = () => {
      return new Promise((resolve, reject) => {
        resolve(
          {
            'lexicons-grc': JSON.stringify(['https://github.com/alpheios-project/dod', 'https://github.com/alpheios-project/aut'])
          }
        )
      })
    }
    let options = new Options(grouped, mockLoader, mockSaver)
    await options.load(() => {})
    expect(options.items.lexicons.filter((a) => a.name === 'lexicons-grc')[0].currentValue).toEqual(['https://github.com/alpheios-project/dod', 'https://github.com/alpheios-project/aut'])
  })

  it('loads stringified and unstringified values', async () => {
    let loader = () => {
      return new Promise((resolve, reject) => {
        resolve(
          {
            panelPosition: 'right',
            preferredLanguage: JSON.stringify('grc')
          }
        )
      })
    }
    let options = new Options(single, loader, mockSaver)
    await options.load(() => {})
    expect(options.items.preferredLanguage.currentValue).toEqual('grc')
    expect(options.items.panelPosition.currentValue).toEqual('right')
  })
})