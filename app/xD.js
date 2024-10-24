import { useState } from 'react';
import Head from 'next/head';
import styles from './xD.module.css'; 

const Home = () => {
    // class Track {
    //     constructor(title, artist, url, albumArt) {
    //       this.title = title;
    //       this.artist = artist;
    //       this.url = url;
    //       this.albumArt = albumArt;
    //     }
    //   }
    //   class Playlist {
    //     constructor(name) {
    //       this.name = name;
    //       this.tracks = [];
    //     }
      
    //     addTrack(track) {
    //       this.tracks.push(track);
    //     }
      
    //     removeTrack(index) {
    //       this.tracks.splice(index, 1);
    //     }
    //   }
    //   function loadPlaylists() {
    //     const playlistsStr = localStorage.getItem('playlists');
    //     return playlistsStr ? JSON.parse(playlistsStr) : [];
    //   }
    //   function savePlaylists(playlists) {
    //     localStorage.setItem('playlists', JSON.stringify(playlists));
    //   }
      
    //   let playlists = loadPlaylists();
    
    //   function renderPlaylists() {
    //     const playlistContainer = document.getElementById('playlistContainer');
    //     playlistContainer.innerHTML = '';
      
    //     playlists.forEach((playlist, index) => {
    //         const playlistDiv = document.createElement('div');
    //         playlistDiv.className = 'playlist';
    //         playlistDiv.innerHTML = `
    //             <h3>${playlist.name}</h3>
    //             <ul class="tracks">
    //                 ${playlist.tracks.map((track, trackIndex) =>
    //                 `<li class="track" data-track-index="${trackIndex}">
    //                     <img src="${track.albumArt}" alt="${track.title}" class="albumArt">
    //                     <span class="title">${track.title}</span> - <span class="artist">${track.artist}</span>
    //                     <button class="delete-track" data-playlist-index="${index}" data-track-index="${trackIndex}">Удалить</button>
    //                 </li>`
    //                 ).join('')}
    //             </ul>
    //             <button class="add-track" data-playlist-index="${index}">Добавить трек</button>
    //             <button class="share-playlist" data-playlist-index="${index}">Поделиться</button>
    //         `;
        
    //         playlistContainer.appendChild(playlistDiv);
    //     });
    //   }
    //   const addPlaylistButton = document.getElementById('addPlaylistButton');
    //   addPlaylistButton.addEventListener('click', () => {
    //     const playlistName = prompt('Введите название плейлиста');
    //     if (playlistName) {
    //       playlists.push(new Playlist(playlistName));
    //       savePlaylists(playlists);
    //       renderPlaylists();
    //     }
    //   });
    //                                                                                                                                                                                      ЭТО ПЕРЕДЕЛЫВАТЬ!!!!!!!!!!!!
    //   document.addEventListener('click', (event) => {
    //     if (event.target.classList.contains('add-track')) {
    //       const playlistIndex = parseInt(event.target.dataset.playlistIndex);
    //       const trackTitle = prompt('Введите название трека');
    //       const trackArtist = prompt('Введите имя исполнителя');
    //       const trackUrl = prompt('Введите URL трека');
    //       const trackAlbumArt = prompt('Введите URL изображения обложки');
    //       if (trackTitle && trackArtist && trackUrl && trackAlbumArt) {
    //         const newTrack = new Track(trackTitle, trackArtist, trackUrl, trackAlbumArt);
    //         playlists[playlistIndex].addTrack(newTrack);
    //         savePlaylists(playlists);
    //         renderPlaylists();
    //       }
    //     }
    //   });
    //   document.addEventListener('click', (event) => {
    //     if (event.target.classList.contains('delete-track')) {
    //       const playlistIndex = parseInt(event.target.dataset.playlistIndex);
    //       const trackIndex = parseInt(event.target.dataset.trackIndex);
    //       playlists[playlistIndex].removeTrack(trackIndex);
    //       savePlaylists(playlists);
    //       renderPlaylists();
    //     }
    //   });
    //   document.addEventListener('click', (event) => {
    //     if (event.target.classList.contains('share-playlist')) {
    //       const playlistIndex = parseInt(event.target.dataset.playlistIndex);
    //       const playlistName = playlists[playlistIndex].name;
    //       const playlistTracks = playlists[playlistIndex].tracks;
    //       alert(`Поделитесь плейлистом "${playlistName}"!`);
    //     }
    //   });
      
    //   renderPlaylists();

  return (
    <>
      <Head>
        <title>Музыкальное приложение</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <button id="addPlaylistButton" onClick={addPlaylist}>
        Добавить плейлист
      </button>

      <div id="playlistContainer">
        {playlists.map((playlist, index) => (
          <div key={index}>{playlist}</div>
        ))}
      </div>
    </>
  );
};

export default Home;