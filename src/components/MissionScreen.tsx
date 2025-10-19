import React, { useState, useEffect } from 'react'
import { useGameStore } from '../store'
import { triggerKonami } from '../easterEggs'

export default function MissionScreen() {
	const { addXP, loseHydration, finishRun } = useGameStore()
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress(p => {
				const next = p + 10
				addXP(50)
				loseHydration(5)
				if (next >= 100) {
					finishRun()
					clearInterval(timer)
				}
				return next
			})
		}, 1200)
		const listener = (e: KeyboardEvent) => triggerKonami(e)
		window.addEventListener('keydown', listener)
		return () => window.removeEventListener('keydown', listener)
	}, [])

	return (
		<section className="mission">
			<h2>Mission: The Wasteland Circuit</h2>
			<p className="muted">Hold pace. Watch hydration. Avoid raiders.</p>
					<div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} tabIndex={0} aria-label="Mission progress">
						<div className="bar" style={{ width: `${progress}%` }}></div>
					</div>
			<p className="hint">Tip: Try the Konami Code ↑ ↑ ↓ ↓ ← → ← → B A</p>
		</section>
	)
}
