import GameList from '../components/game_list/gameList';

export default function Home() {
  return (
    <>
      <div className='container'>
        <main className='main'>
          <GameList></GameList>
        </main>
      </div>
    </>
  );
}
