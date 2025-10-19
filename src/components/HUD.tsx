
import { useGameStore } from '../store'

export default function HUD() {
	const { hydration, xp } = useGameStore()
	return (
		<div className="hud" role="region" aria-label="Run heads-up display">
			<div aria-label="Hydration level" className="hud-value">💧 <span>{hydration}%</span></div>
			<div aria-label="XP points" className="hud-value">⚡ <span>{xp}</span></div>
		</div>
	)
}
