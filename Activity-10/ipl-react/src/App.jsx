
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/hero';
import MatchCard from './components/MatchCard';

function App() {

  const [bookedMatches, setBookedMatches] = useState([]);

  const matches = [
    {
      id: 1,
      team1: 'Chennai Super Kings',
      team2: 'Mumbai Indians',
      date: 'To be announced',
      venue: 'Wankhede Stadium'
    },
    {
      id: 2,
      team1: 'Royal Challengers Bengaluru',
      team2: 'Kolkata Knight Riders',
      date: 'To be announced',
      venue: 'M. Chinnaswamy Stadium'
    },
    {
      id: 3,
      team1: 'Sunrisers Hyderabad',
      team2: 'Rajasthan Royals',
      date: 'To be announced',
      venue: 'Rajiv Gandhi Stadium'
    }
  ];

  const handleBooking = (team) => {
    setBookedMatches([...bookedMatches, team]);
    alert('Your booking request for ' + team + ' has been received!');
  };

  return (
    <>
      <Navbar />

      <Hero />

      <section id="matches">
        <h1>Upcoming IPL Matches</h1>

        <div className="matches-container">

          {matches.map((match) => (
            <MatchCard
              key={match.id}
              team1={match.team1}
              team2={match.team2}
              date={match.date}
              venue={match.venue}
              onBook={() => handleBooking(match.team1)}
            />
          ))}

        </div>

        <p>Total Booking Requests: {bookedMatches.length}</p>

      </section>

      <footer id="contact">
        <p>© 2026 IPL Tickets. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;

