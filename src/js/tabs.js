const tabs = (
  tabsBtnsWrapperSelector,
  tabsBtnSelector,
  coinContentWrapperSelector,
  tabsContentSelector,
  tabPrevSelector,
  tabNextSelector,
  active,
  containsClass
) => {
  const tabsBtnsWrapper = document.querySelector(tabsBtnsWrapperSelector),
    tabsBtn = tabsBtnsWrapper.querySelectorAll(tabsBtnSelector),
    coinContentWrapper = document.querySelector(coinContentWrapperSelector),
    tabsContent = coinContentWrapper.querySelectorAll(tabsContentSelector),
    tabPrev = document.querySelector(tabPrevSelector),
    tabNext = document.querySelector(tabNextSelector)

  let index = 0

  const addClassActive = (n = 0) => {
    tabsBtn.forEach((btn) => {
      btn.classList.remove(active)
    })
    tabsBtn[n].classList.add(active)
  }

  const hideTab = () => {
    tabsContent.forEach((content) => {
      content.classList.add('hide')
      content.classList.remove('d-flex', 'fade')
    })
  }

  const showTab = (n = 0) => {
    tabsContent[n].classList.add('d-flex', 'fade')
    tabsContent[n].classList.remove('hide')
  }

  addClassActive()
  hideTab()
  showTab()

  tabsBtnsWrapper.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains(containsClass)) {
      tabsBtn.forEach((item, i) => {
        if (target == item) {
          hideTab()
          showTab(i)
          addClassActive(i)
        }
      })
    }
  })

  const clickBtnPrevNext = () => {
    tabNext.addEventListener('click', () => {
      if (index == tabsBtn.length - 1) {
        index = 0
        hideTab()
        showTab(index)
        addClassActive(index)
      } else {
        index++
        hideTab()
        showTab(index)
        addClassActive(index)
      }
    })

    tabPrev.addEventListener('click', () => {
      if (index == 0) {
        index = tabsBtn.length - 1
        hideTab()
        showTab(index)
        addClassActive(index)
      } else {
        index--
        hideTab()
        showTab(index)
        addClassActive(index)
      }
    })
  }

  clickBtnPrevNext()
}

export default tabs
