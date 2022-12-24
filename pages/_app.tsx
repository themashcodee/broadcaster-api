import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useBroadcasterAPI } from "hooks"
import { DublicateModal } from "components"

export default function App({ Component, pageProps }: AppProps) {
	const { channel, isExpired, setIsExpired } = useBroadcasterAPI(
		"tab_dublicate_recognizer"
	)

	return (
		<div>
			{isExpired && (
				<DublicateModal channel={channel} setIsExpired={setIsExpired} />
			)}
			<Component {...pageProps} />
		</div>
	)
}
