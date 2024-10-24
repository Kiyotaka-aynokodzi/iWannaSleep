import { useState, useEffect } from "react";
import AddSong from '../components/AddSong';
import SongList from '../components/SongList';
import styles from "./main.module.css";

export default function Home() {
  const [avatarPreview, setAvatarPreview] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/api/tracks")
      .then((response) => response.json())
      .then((tracks) => setSongs(tracks));
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatarPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleUploadSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("good!");
      fetch("/api/tracks")
        .then((response) => response.json())
        .then((tracks) => setSongs(tracks));
    } else {
      alert("bad");
    }
  };

  return (
    <main>
      <header>
        <h1>DeadSongs</h1>
        <input type="text" placeholder="Поиск музыки..." id="search-bar" />
        <div className="card">
          <input
            type="file"
            id="file-input"
            accept="image/*"
            hidden
            onChange={handleAvatarChange}
          />
          <div
            className="avatar"
            onClick={() => document.getElementById("file-input").click()}
          >
            <img
              id="avatar-preview"
              src={avatarPreview}
              alt="Аватар"
              className="avatar-image"
            />
          </div>
          <div>
            <span
              id="profile-icon"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            />
            <div
              id="profile-menu"
              className={`menu ${showProfileMenu ? "show" : ""}`}
            >
                            <button>Изменить профиль</button>
              <br />
              <button>Выйти</button>
            </div>
          </div>
        </div>
      </header>

      <div id="container">
        <div id="playlists-section">
          <h2>Плейлисты</h2>
          <ul>
            <li onClick={() => handlePlaylistClick("Плейлист 1")}>
              Плейлист 1
            </li>
            <li onClick={() => handlePlaylistClick("Плейлист 2")}>
              Плейлист 2
            </li>
            <li onClick={() => handlePlaylistClick("Плейлист 3")}>
              Плейлист 3
            </li>
            <li onClick={() => handlePlaylistClick("Плейлист 4")}>
              Плейлист 4
            </li>
          </ul>
        </div>

        <div id="songs-section">
          <h2>Песни из Плейлиста</h2>
          <ul id="songs-list">
          <SongList />
          </ul>
        </div>

        <div id="artist-info-section">
          <h2>Информация об Авторе</h2>
          <p>
            <strong>Имя автора:</strong> Имя исполнителя
          </p>
          <p>
            <strong>Альбом:</strong> Название альбома
          </p>
          <p>
            <strong>Жанр:</strong> Жанр музыки
          </p>
          <p>
            <strong>Год:</strong> 2024
          </p>
        </div>
      </div>

      <footer>
        <button id="uploadButton" onClick={handleUploadClick}>
          <img src="/img/qwe.jpg" alt="Загрузить" />
          <AddSong/>
        </button>
        <form onSubmit={handleUploadSubmit}>
          <input
            type="file"
            id="fileInput"
            accept="audio/*"
            style={{ display: "none" }}
          />
          <div className="controls">
            <button id="prevButton" onClick={() => {}}>
              <img src="/img/icons8-начать-64.png" alt="Previous" />
            </button>
            <button id="playPauseButton" onClick={() => {}}>
              <img
                src="/img/icons8-воспроизведение-50.png"
                alt="Play/Pause"
              />
            </button>
            <button id="nextButton" onClick={() => {}}>
              <img src="/img/icons8-до-конца-64.png" alt="Next" />
            </button>
          </div>
        </form>
      </footer>
    </main>
  );
}

            