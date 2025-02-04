import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary, App } from '@components'

createRoot(document.getElementById('arteConf')!)
	.render(
		<StrictMode>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</StrictMode>
	)
