import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    const { data, error } = await supabase
      .from('songs')
      .select('*');

    if (error) {
      console.error('Ошибка при получении песен:', error);
    } else {
      setSongs(data);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <h2>Список песен</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <strong>{song.title}</strong> - {song.artist} <a href={song.url}>Слушать</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;