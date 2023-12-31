import PropTypes from 'prop-types';

export function CardsIcon({ height = 32, width = 32 }) {
	return (
		<svg
			fill="#000000"
			height={height}
			width={width}
			viewBox="0 0 16 16">
			<path
				d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
				fillRule="evenodd" />
		</svg>
	)
}

CardsIcon.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number
}

export default CardsIcon