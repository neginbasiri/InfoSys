import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/_modal.scss';

export default class Modal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
		this.modalRoot = document.getElementById('modal-root');
	}

	componentDidMount() {
		this.modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		this.modalRoot.removeChild(this.el);
	}

	renderContainer = () => {
		const { close, children } = this.props;
		return (
			<div className="modal-wrapper">
				<div className="modal-header">
					{' '}
					<span className="modal-header-close" onClick={close}>
						×
					</span>
				</div>
				<div className="modal-body">
					<p>{children}</p>
				</div>
			</div>
		);
	};
	render() {
		return ReactDOM.createPortal(this.renderContainer(), this.el);
	}
}
