// https://raw.githubusercontent.com/mdn/samples-server/master/s/webrtc-simple-datachannel/main.js
// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample
// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs

import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { MenuButton } from '../components/MenuButton/MenuButton'
import { Game } from './Game/Game'

export function Router(): JSX.Element {
  const [page, setPage] = React.useState('Main')

  switch (page) {
    case 'SinglePlayer':
      return (
        <Menu setPage={setPage} backMenu="Main" />
      )
    case 'Join':
      return (
        <Menu setPage={setPage} backMenu="MultiPlayer" />
      )
    case 'Browse':
      return (
        <Menu setPage={setPage} backMenu="MultiPlayer">
          <h2>Browse lobbies</h2>
        </Menu>
      )
    case 'Create':
      return (
        <Menu setPage={setPage} backMenu="MultiPlayer">
          <h2>Create lobby</h2>
        </Menu>
      )
    case 'Local':
      return (
        <Menu setPage={setPage} backMenu="MultiPlayer">
          <Game />
        </Menu>
      )
    case 'MultiPlayer':
      return (
        <Menu setPage={setPage} backMenu="Main">
          <MenuButton label="Join" page="Join" onSetPage={setPage} />
          <MenuButton label="Browse" page="Browse" onSetPage={setPage} />
          <MenuButton label="Create" page="Create" onSetPage={setPage} />
        </Menu>
      )
    case 'Main':
    default:
      return (
        <Menu setPage={setPage}>
          <MenuButton label="Single Player" page="SinglePlayer" onSetPage={setPage} />
          <MenuButton label="Local Multiplayer" page="Local" onSetPage={setPage} />
          <MenuButton label="Online Multiplayer" page="MultiPlayer" onSetPage={setPage} />
        </Menu>
      )
  }
}
