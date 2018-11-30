import React, { Component } from 'react'
import tinycolor from 'tinycolor2'
import './App.css'
import Footer from './components/Footer'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = { value: 3, colors: [...Array(48).keys()], hexes: [] }
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({ value: parseInt(event.target.value) })
		this.generateColors()
	}

	generateColors() {
		const amount = this.state.value
		const hexes = this.state.colors.map(function(item) {
			return tinycolor('#fff')
				.darken(item + amount)
				.toString()
		})

		this.setState({ hexes: hexes })
	}

	componentWillMount() {
		this.generateColors()
	}

	render() {
		return (
			<React.Fragment>
				<header className="header">
					<input
						className="slider"
						id="typeinp"
						type="range"
						min="0"
						max="50"
						value={this.state.value}
						onChange={this.handleChange}
						step="1"
					/>
				</header>
				<ul>
					{this.state.hexes.map(item => (
						<li style={{ backgroundColor: item }} key={item}>
							<span className="color-name">{item}</span>
						</li>
					))}
				</ul>
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
