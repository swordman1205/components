/* eslint-env jest */
import HTMLSelector from '../../../../src/lib/selection/media/html-selector'

describe('html-selector.test.js', () => {
  beforeEach(() => {
  })

  it('gathers data attributes', () => {
    document.body.innerHTML =
      `<div data-alpheios_tb_src="http://example.org/tb/mock"/>
       <div data-alpheios_align_src="http://example.org/align/mock"/>
       <span id="mocktarget" data-alpheios_tb_ref="1-1" data-alpheios_align_ref="1-1" lang="lat">foo</span>`
    let target = document.getElementById('mocktarget')
    let mockEvent = {
      target: target
    }
    let selector = new HTMLSelector(mockEvent, 'lat')
    expect(selector.data.tbsrc).toEqual('http://example.org/tb/mock')
    expect(selector.data.tbref).toEqual('1-1')
    expect(selector.data.alignsrc).toEqual('http://example.org/align/mock')
    expect(selector.data.alignref).toEqual('1-1')
  })
})
