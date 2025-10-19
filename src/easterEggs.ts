import confetti from 'canvas-confetti'

let konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
let entered: string[] = []

export function triggerKonami(e: KeyboardEvent) {
	entered.push(e.key)
	if (entered.slice(-konami.length).join('') === konami.join('')) {
		confetti({ particleCount: 300, spread: 90, origin: { y: 0.7 } })
		alert('Konami Code Activated! Hydration Boost +100 💧')
		entered = []
	}
}
