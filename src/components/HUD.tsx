import React from 'react'
import { useGameStore } from '../store'

export default function HUD() {
	const { hydration, xp } = useGameStore()
	return (
		<div className="hud" role="region" aria-label="Run heads-up display">
			<div aria-label="Hydration level">💧 <span style={{ color: '#fff', background: '#0E2A47', padding: '2px 6px', borderRadius: 4 }}>{hydration}%</span></div>
			<div aria-label="XP points">⚡ <span style={{ color: '#fff', background: '#0E2A47', padding: '2px 6px', borderRadius: 4 }}>{xp}</span></div>
		</div>
	)
}
