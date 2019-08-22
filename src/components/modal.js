import React from 'react';
import '../styles/_modal.scss';

const Modal = props => (
	<div className="modal-wrapper">
		<div className="modal-header">
			{' '}
			<span className="modal-header-close" onClick={props.close}>
				×
			</span>
		</div>
		<div className="modal-body">
			<p>{props.children}</p>
		</div>
	</div>
);

export default Modal;
