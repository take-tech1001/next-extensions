chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    id: 'next-extension',
    title: 'Next.js Extension',
    contexts: ['all'],
  })
})

chrome.contextMenus.onClicked.addListener((info) => {
  console.log(info)
  if (info.menuItemId === 'next-extension') {
    chrome.windows.create({
      url: 'https://nextjs.org/docs/getting-started',
      type: 'popup',
      width: 700,
      height: 700,
    })
  }
})
