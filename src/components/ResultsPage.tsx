import React from 'react'
import { useGameStore } from '../store'

export default function ResultsPage() {
	const { xp, reset } = useGameStore()
	const facts = [
		"703 million people lack access to clean water.",
		"Time spent collecting water often keeps kids out of school.",
		"Access to clean water improves health and local economies."
	]
	const randomFact = facts[Math.floor(Math.random() * facts.length)]

	return (
		<section className="results card">
			<h1>Mission Complete 💧</h1>
			<p>You earned <strong>{xp}</strong> XP</p>
			<p className="fact">🌍 {randomFact}</p>
			<button onClick={reset}>Run Again</button>
		</section>
	)
}
