import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AddSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('songs')
      .insert([
        { title, artist, url },
      ]);

    if (error) {
      console.error('Ошибка при добавлении песни:', error);
    } else {
      console.log('Песня добавлена:', data);
      setTitle('');
      setArtist('');
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название песни"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Исполнитель"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL песни"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Добавить песню</button>
    </form>
  );
};

export default AddSong;