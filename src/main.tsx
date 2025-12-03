import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

async function enableMocking() {
  // Enable MSW in both development and production for demo purposes
  const { worker } = await import('./mocks/browser')
  return worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})


