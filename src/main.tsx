import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@components'

createRoot(document.getElementById('arteconf')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
