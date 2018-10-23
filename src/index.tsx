import './types';
import 'sanitize.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as qs from 'qs'

class App extends React.Component<{}, {}> {
  render() {
    const query = qs.parse(window.location.search.substr(1))

    return (
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <video controls style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} height="100%" width="100%">
          <source src={query.src} type="video/mp4" />
        </video>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
