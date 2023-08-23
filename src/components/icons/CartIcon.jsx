import PropTypes from 'prop-types';

export function CartIcon({ height = 32, width = 32 }) {
	return (
		<svg
			height={height}
			width={width}
			viewBox="0 0 512 512">
			<path fill="#88CC2A" d="M495.304,111.304H94.609c-9.217,0-16.696,7.473-16.696,16.696v233.739
	c0,9.223,7.479,16.696,16.696,16.696h367.304c27.619,0,50.087-22.468,50.087-50.087V128
	C512,118.777,504.521,111.304,495.304,111.304z M178.087,294.957c0,9.223-7.479,16.696-16.696,16.696s-16.696-7.473-16.696-16.696
	V194.783c0-9.223,7.479-16.696,16.696-16.696s16.696,7.473,16.696,16.696V294.957z M244.87,294.957
	c0,9.223-7.479,16.696-16.696,16.696s-16.696-7.473-16.696-16.696V194.783c0-9.223,7.479-16.696,16.696-16.696
	s16.696,7.473,16.696,16.696V294.957z M311.652,294.957c0,9.223-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.473-16.696-16.696
	V194.783c0-9.223,7.479-16.696,16.696-16.696c9.217,0,16.696,7.473,16.696,16.696V294.957z M378.435,294.957
	c0,9.223-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.473-16.696-16.696V194.783c0-9.223,7.479-16.696,16.696-16.696
	c9.217,0,16.696,7.473,16.696,16.696V294.957z M445.217,294.957c0,9.223-7.479,16.696-16.696,16.696
	c-9.217,0-16.696-7.473-16.696-16.696V194.783c0-9.223,7.479-16.696,16.696-16.696c9.217,0,16.696,7.473,16.696,16.696V294.957z"/>
			<path fill="#7FB335" d="M495.304,111.304H294.957v66.783c9.217,0,16.696,7.473,16.696,16.696v100.174
	c0,9.223-7.479,16.696-16.696,16.696v66.783h166.957c27.619,0,50.087-22.468,50.087-50.087V128
	C512,118.777,504.521,111.304,495.304,111.304z M378.435,294.957c0,9.223-7.479,16.696-16.696,16.696
	c-9.217,0-16.696-7.473-16.696-16.696V194.783c0-9.223,7.479-16.696,16.696-16.696c9.217,0,16.696,7.473,16.696,16.696V294.957z
	 M445.217,294.957c0,9.223-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.473-16.696-16.696V194.783
	c0-9.223,7.479-16.696,16.696-16.696c9.217,0,16.696,7.473,16.696,16.696V294.957z"/>
			<path fill="#C9D2D9" d="M428.522,478.609H128c-9.217,0-16.696-7.473-16.696-16.696s7.479-16.696,16.696-16.696h300.522
	c9.217,0,16.696,7.473,16.696,16.696S437.739,478.609,428.522,478.609z"/>
			<path fill="#B7C4CC" d="M428.522,445.217H294.957v33.391h133.565c9.217,0,16.696-7.473,16.696-16.696
	S437.739,445.217,428.522,445.217z"/>
			<path fill="#C9D2D9" d="M94.609,445.217c-9.217,0-16.696-7.473-16.696-16.696V50.087c0-9.206-7.49-16.696-16.696-16.696
	H16.696C7.479,33.391,0,25.918,0,16.696S7.479,0,16.696,0h44.522c27.619,0,50.087,22.468,50.087,50.087v378.435
	C111.304,437.744,103.826,445.217,94.609,445.217z"/>
			<path fill="#736056" d="M94.609,512c-27.619,0-50.087-22.468-50.087-50.087s22.468-50.087,50.087-50.087
	s50.087,22.468,50.087,50.087S122.228,512,94.609,512z"/>
			<path fill="#665247" d="M461.913,512c-27.619,0-50.087-22.468-50.087-50.087s22.468-50.087,50.087-50.087
	S512,434.294,512,461.913S489.532,512,461.913,512z"/>
			<circle fill="#BDDEFF" cx="461.913" cy="461.913" r="16.696" />
			<circle fill="#D7EBFF" cx="94.609" cy="461.913" r="16.696" />
		</svg>
	)
}

CartIcon.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number
}

export default CartIcon