import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from './App.tsx'
import './index.css'

const element = document.getElementById('root')
const root = createRoot(element!)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
