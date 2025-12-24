const width = 100;
const height = 100;

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1
});

const imageUrl = 'map.png';
const bounds = [[0,0], [height, width]];

L.imageOverlay(imageUrl, bounds).addTo(map);
map.fitBounds(bounds);

function gridToCoords(letter, number) {
  const letters = "ABCDEFGH";
  const y = letters.indexOf(letter) * 12.5 + 6;
  const x = (number - 1) * 12.5 + 6;
  return [y, x];
}

L.marker(gridToCoords("C", 3)).addTo(map)
  .bindPopup("Voorbeeld pin C3");
