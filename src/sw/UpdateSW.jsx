import React from 'react';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

const UpdateSW = (props) => {
	const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

	return newServiceWorkerDetected ? (
		<div style={{ backgroundColor: 'tomato' }}>
			<h3>Nueva versión detectada</h3>
			<h4>Por favor actualize a la nueva versión</h4>
			<button onClick={onLoadNewServiceWorkerAccept}>Actualizar</button>
		</div>
	) : null;
};

export default withServiceWorkerUpdater(UpdateSW);
