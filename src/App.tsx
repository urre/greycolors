import { useState, useEffect, useCallback } from 'react'
import tinycolor from 'tinycolor2'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [value, setValue] = useState<number>(3)
  const [hexes, setHexes] = useState<string[]>([])
  const [copied, setCopied] = useState<string | null>(null)

  const generateColors = useCallback(() => {
    const colors = [...Array(48).keys()]
    const generatedHexes = colors.map((item) => {
      return tinycolor('#fff')
        .darken(item + value)
        .toString()
    })
    setHexes(generatedHexes)
  }, [value])

  useEffect(() => {
    generateColors()
  }, [generateColors])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value))
  }

  const handleClick = (item: string) => {
    navigator.clipboard.writeText(item)
    setCopied(item)
    setTimeout(() => setCopied(null), 1000)
  }

  return (
    <>
      <header className="header">
        <input
          className="slider"
          id="typeinp"
          type="range"
          min="0"
          max="50"
          value={value}
          onChange={handleChange}
          step="1"
        />
      </header>
      <ul>
        {hexes.map((item) => (
          <li
            style={{ backgroundColor: item }}
            key={item}
            className={copied === item ? 'copied' : ''}
          >
            <button
              className="color-name"
              onClick={() => handleClick(item)}
            >
              {copied === item
                ? 'Hex color copied to clipboard!'
                : item}
            </button>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  )
}

export default App
