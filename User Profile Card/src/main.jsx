import React from 'react'
import ReactDOM from 'react-dom/client'

// import { Advice } from './formSamples/Advice'
// import { Details } from './formSamples/Details'
// import { RegForm } from './formSamples/RegForm'

// import App from './App.jsx'
// import './index.css'

// import './QrCode.css'
// import { QrCode } from './QrCode'

import { UserCard } from './UserCard'
import './UserCard.css'


// Here note the .. symbol bcz its inside of 2 folders

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <UserCard />

    {/* <QrCode /> */}

    {/* <Details /> */}

    {/* <RegForm /> */}

    {/* <Advice /> */}

  </React.StrictMode>,
)
