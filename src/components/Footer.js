import React from 'react'

const Footer = () => {
	return (
		<footer className="footer" role="contentinfo">
			{' '}
			<p>
				By <a href="https://urre.me">Urban Sandén</a>
				<a href="https://github.com/urre/greycolors">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<circle cx="18" cy="18" r="3" />
						<circle cx="6" cy="6" r="3" />
						<path d="M13 6h3a2 2 0 0 1 2 2v7" />
						<line x1="6" y1="9" x2="6" y2="21" />
					</svg>
				</a>
			</p>
		</footer>
	)
}

export default Footer
