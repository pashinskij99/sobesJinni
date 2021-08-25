import openModal from './hamburger'
import slider from './slider'
import tabs from './tabs'

document.addEventListener('DOMContentLoaded', () => {
  slider()
  tabs(
    '.coin-list',
    '.coin-item',
    '.coin-tabs-content',
    '.content-item',
    '.coin-prev',
    '.coin-next',
    'coin-item-active',
    'coin-item'
  )
  tabs(
    '.cost-list',
    '.cost-item',
    '.cost-tabs-content',
    '.content-item',
    '.cost-prev',
    '.cost-next',
    'cost-item-active',
    'cost-item'
  )
  openModal()
})
