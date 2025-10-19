// Placeholder API interface for Last Drop app
// Replace with real API calls when backend is ready


export async function syncMiles(miles: number) {
  await fetch('http://localhost:4000/api/miles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ miles }),
  });
}


export async function syncFactUnlocked(factUnlocked: boolean) {
  await fetch('http://localhost:4000/api/fact-unlocked', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ factUnlocked }),
  });
}


export async function syncSeasonProgress(progress: number) {
  await fetch('http://localhost:4000/api/season-progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ progress }),
  });
}


export async function syncMissionChoice(missionIdx: number, choice: string) {
  await fetch('http://localhost:4000/api/mission-choice', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ missionIdx, choice }),
  });
}
