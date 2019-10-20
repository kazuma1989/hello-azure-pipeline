import * as React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    setTimeout(() => setCount(v => v + 1), 1000)
  })

  return (
    <div>
      <h1>Hello</h1>
      <p>Seconds: {count}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
