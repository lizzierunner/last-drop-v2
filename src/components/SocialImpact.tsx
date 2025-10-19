import React from 'react';
import { syncMiles, syncFactUnlocked, syncSeasonProgress } from '../api';

const SocialImpact: React.FC = () => {
  // GPS tracking state

  // Load from localStorage
  const [miles, setMiles] = React.useState(() => {
    const saved = localStorage.getItem('ld_miles');
    return saved ? parseFloat(saved) : 0;
  });
  const [tracking, setTracking] = React.useState(false);
  const [watchId, setWatchId] = React.useState<number | null>(null);
  const [lastPosition, setLastPosition] = React.useState<{lat: number, lng: number} | null>(null);
  const [factUnlocked, setFactUnlocked] = React.useState(() => {
    const saved = localStorage.getItem('ld_factUnlocked');
    return saved === 'true';
  });
  const [seasonProgress, setSeasonProgress] = React.useState(() => {
    const saved = localStorage.getItem('ld_seasonProgress');
    return saved ? parseInt(saved) : 0;
  });

  // Save to localStorage
  React.useEffect(() => {
    localStorage.setItem('ld_miles', miles.toString());
    syncMiles(miles);
  }, [miles]);
  React.useEffect(() => {
    localStorage.setItem('ld_factUnlocked', factUnlocked.toString());
    syncFactUnlocked(factUnlocked);
  }, [factUnlocked]);
  React.useEffect(() => {
    localStorage.setItem('ld_seasonProgress', seasonProgress.toString());
    syncSeasonProgress(seasonProgress);
  }, [seasonProgress]);

  // Haversine formula to calculate distance between two lat/lng points
  function getDistanceFromLatLonInMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 3958.8; // Radius of the earth in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // Start GPS tracking
  const startTracking = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setTracking(true);
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        if (lastPosition) {
          const dist = getDistanceFromLatLonInMiles(
            lastPosition.lat,
            lastPosition.lng,
            latitude,
            longitude
          );
          if (dist > 0.0001) { // Ignore tiny GPS drift
            setMiles(m => m + dist);
          }
        }
        setLastPosition({ lat: latitude, lng: longitude });
      },
      (err) => {
        alert('Error getting position: ' + err.message);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 20000 }
    );
    setWatchId(id);
  };

  // Stop GPS tracking
  const stopTracking = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setTracking(false);
    setLastPosition(null);
  };

  return (
    <div className="social-impact">
      <h2>Social Impact Features</h2>
      <ul>
        <li>
          <strong>Miles : Drops</strong>: <br />
          {!tracking ? (
            <button onClick={startTracking}>Start GPS Tracking</button>
          ) : (
            <button onClick={stopTracking}>Stop GPS Tracking</button>
          )}
          <div>Miles tracked: {miles.toFixed(2)}</div>
          <div>Drops earned: {Math.floor(miles * 10)}</div>
        </li>
        <li>
          <strong>Unlockable Fact Files</strong>: <br />
          <button onClick={() => setFactUnlocked(true)} disabled={factUnlocked}>
            Unlock Fact File
          </button>
          {factUnlocked && (
            <div className="fact-file">
              <strong>Fact:</strong> Your run helped fund a real water well in Kenya!
            </div>
          )}
        </li>
        <li>
          <strong>Season Challenges</strong>: <br />
          <button onClick={() => setSeasonProgress(p => p + 10)}>Simulate Progress</button>
          <div>Global progress: {seasonProgress} / 100</div>
          {seasonProgress >= 100 && <div>Milestone unlocked! Charity water project funded.</div>}
        </li>
      </ul>
    </div>
  );
};

export default SocialImpact;
