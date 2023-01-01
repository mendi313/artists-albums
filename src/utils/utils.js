import axios from 'axios';
const firstURLAlboms =
  'https://62812f617532b4920f7885bb.mockapi.io/api/random/artists';
const secondURLAlboms =
  'https://62812f617532b4920f7885bb.mockapi.io/api/random/albums';

export const getAllAlbums = async () => {
  const artistsByNames = await (await axios.get(firstURLAlboms)).data;
  let albomsByNames = await (await axios.get(secondURLAlboms)).data;
  albomsByNames = albomsByNames.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.place === value.place && t.name === value.name
  ))
)
  artistsByNames.forEach((artist) => {
    artist.alboms = albomsByNames?.filter(
      (albom) => albom.artistId === artist.id
    );
  });
  return artistsByNames;
};
