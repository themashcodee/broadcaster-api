import React, { Dispatch, SetStateAction } from "react"
import { BroadcastChannel } from "broadcast-channel"
import { Illustration } from "./illustration"

type Props = {
	setIsExpired: Dispatch<SetStateAction<boolean>>
	channel: BroadcastChannel<"new instance created">
}

export const DublicateModal = ({ setIsExpired, channel }: Props) => {
	return (
		<div className="fixed left-0 top-0 w-full h-screen flex items-center justify-center p-8 overflow-auto z-[1000]">
			<div className="w-full absolute left-0 top-0 h-full bg-black/70 z-[-1]"></div>

			<div className="w-full max-w-sm bg-white rounded-md p-6 flex flex-col gap-6 select-none items-center">
				<Illustration className="w-32" />

				<p className="text-center">
					This App is open in another window. Click
					<span className="font-semibold inline">{" Use here "}</span>
					to use this App in this window otherwise close this tab.
				</p>

				<div className="flex justify-end gap-3">
					<button
						className="w-40 py-[6px] bg-blue-500 text-white rounded-md"
						onClick={() => {
							setIsExpired(false)
							channel.postMessage("new instance created")
						}}
					>
						Use here
					</button>
				</div>
			</div>
		</div>
	)
}
