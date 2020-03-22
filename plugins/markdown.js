import Vue from 'vue'
import MarkDownIt from 'markdown-it'

const md = new MarkDownIt()

const defaultRender = md.renderer.rules.link_open || ((tokens, index, options, env, self) => self.renderToken(tokens, index, options))

md.renderer.rules.link_open = (tokens, index, options, env, self) => {
  const aToken = tokens[index]
  const hrefUrl = aToken.attrGet('href')
  // Regex matches <schema>:// or schema relative urls //
  const urlIsAbsolute = !!(hrefUrl && hrefUrl.match(/^(?:[a-zA-Z]+:)?\/\//))
  if (urlIsAbsolute) {
    aToken.attrSet('target', '_BLANK')
  }
  return defaultRender(tokens, index, options, env, self)
}

Vue.prototype.$md = markdown => md.render(markdown)
Vue.directive('md', (element, binding) => {
  element.innerHTML = md.render(binding.value)
})
