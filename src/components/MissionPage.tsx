import React, { useState } from 'react';
import { syncMissionChoice } from '../api';
import { useParams } from 'react-router-dom';

const missionDetails = [
  {
    title: "The Runner’s Code",
    description: "First mission. Outrun a filter. Victc rineing.",
    choices: [
      { text: "Sprint ahead", result: "You gain distance from the pursuers!" },
      { text: "Hide and wait", result: "You avoid danger, but lose time." },
    ],
  },
  {
    title: "Dry Heat",
    description: "Escape shivcdow. In talan cdenrat’s billiter.",
    choices: [
      { text: "Find shade", result: "You cool off and recover energy." },
      { text: "Push through", result: "You risk dehydration but make progress." },
    ],
  },
  {
    title: "Echo Wells",
    description: "Investigate clicker. Jns carding fire filter unit.",
    choices: [
      { text: "Investigate the sound", result: "You discover a hidden well!" },
      { text: "Ignore and move on", result: "You miss a potential resource." },
    ],
  },
  {
    title: "Black Gold",
    description: "Post ‘un upgrades, purifiers solar farms.",
    choices: [
      { text: "Upgrade purifier", result: "Water quality improves." },
      { text: "Scout solar farm", result: "You find extra supplies." },
    ],
  },
  {
    title: "Mirage Protocol",
    description: "All compaim bkz ginching.",
    choices: [
      { text: "Trust the mirage", result: "It was a trap! You lose time." },
      { text: "Stay on course", result: "You avoid danger and stay safe." },
    ],
  },
  {
    title: "Pipeline Ghosts",
    description: "The Oasis Gambit.",
    choices: [
      { text: "Follow the pipeline", result: "You reach the oasis faster." },
      { text: "Take a shortcut", result: "You get lost but find something new." },
    ],
  },
  {
    title: "The Last Drop",
    description: "The last drop.",
    choices: [
      { text: "Share the last drop", result: "You inspire hope in others." },
      { text: "Keep it for yourself", result: "You survive, but at a cost." },
    ],
  },
];

const MissionPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const missionIdx = Number(id) - 1;
  const mission = missionDetails[missionIdx];
  // Load choice from localStorage
  const [choiceResult, setChoiceResult] = useState<string | null>(() => {
    const saved = localStorage.getItem(`ld_mission_choice_${missionIdx}`);
    return saved || null;
  });

  // Save choice to localStorage and sync to backend
  React.useEffect(() => {
    if (choiceResult) {
      localStorage.setItem(`ld_mission_choice_${missionIdx}`, choiceResult);
      syncMissionChoice(missionIdx, choiceResult);
    }
  }, [choiceResult, missionIdx]);

  if (!mission) return <div>Mission not found.</div>;

  return (
    <div className="mission-page">
      <h2>{mission.title}</h2>
      <p>{mission.description}</p>
      {choiceResult ? (
        <div className="choice-result">{choiceResult}</div>
      ) : (
        <div className="choices">
          {mission.choices.map((choice, idx) => (
            <button key={idx} onClick={() => setChoiceResult(choice.result)}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MissionPage;
