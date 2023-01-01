import React, { useEffect, useState } from 'react';
import { getAllAlbums } from '../utils/utils';
import AlbomsList from './AlbomsList';

export default function ArtistList() {
  const [artistList, setArtistList] = useState([]);
  useEffect(() => {
    getAllAlbums().then((result) => {
      setArtistList(result);
    });
  }, []);

  const artistAlbumsList = artistList.map((item, index) => {
    return (
      <div key={index}>
        <div>
            <h3>{item.name}{!item.alboms?.length&& ' (No Albums)'}</h3>
          <AlbomsList alboms={item.alboms} />;
        </div>
      </div>
    );
  });

  return <div>{artistAlbumsList}</div>;
}
