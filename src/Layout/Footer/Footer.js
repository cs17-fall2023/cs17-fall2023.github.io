import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		const resizeStyle = this.props.resize ? " footer-resize" : ""

		return (
			<div className={"footer-wrapper" + resizeStyle}>
				<div>Copyright © 2023 CS17</div>
				<div>Submit feedback at our anonymous form <a href="https://docs.google.com/forms/d/1gm02ekb4bvOM3Jtw6BMRa_2gdozbJiZpNKuuWKvNPOU/viewform" target="_blank" rel="noreferrer noopener">here!</a></div>
			</div>
		);
	}
}

export default Footer;