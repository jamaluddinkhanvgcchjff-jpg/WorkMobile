# WorkMobile — consent-based screen sharing

## Files
- `public/index.html` — screen-share page
- `public/viewer.html` — viewer page
- `server.js` — Socket.IO signaling server

## Run
Install Node.js, then:
npm install
npm start

Open:
http://localhost:3000/

A room is created in the URL, e.g. `?room=abc123`.
The viewer opens:
`http://YOUR-SERVER:3000/viewer.html?room=abc123`

## Production
Screen capture normally requires a secure context (HTTPS) except localhost.
For internet deployment use HTTPS and a proper domain. A TURN server may also be needed when direct peer-to-peer connectivity fails.

## Privacy
The sender must explicitly approve the browser's Screen Share permission. This project does not silently access a camera, microphone, or screen.
