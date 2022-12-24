import { useEffect, useMemo, useState } from "react"
import { BroadcastChannel } from "broadcast-channel"

export const useBroadcasterAPI = (name: string) => {
	const channel = useMemo(
		() => new BroadcastChannel<"new instance created">(name),
		[name]
	)
	const [isExpired, setIsExpired] = useState(false)

	useEffect(() => {
		channel.onmessage = (data) => {
			console.log({ data })
			if (data === "new instance created") {
				setIsExpired(true)
			}
		}
	}, [channel])

	useEffect(() => {
		channel.postMessage("new instance created")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		isExpired,
		setIsExpired,
		channel,
	}
}
