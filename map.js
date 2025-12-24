const width = 1024;   // 👈 ECHTE pixelbreedte
const height = 1024;  // 👈 ECHTE pixelhoogte

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 2
});

const imageUrl = 'map.png';
const bounds = [[0, 0], [height, width]];

L.imageOverlay(imageUrl, bounds).addTo(map);
map.fitBounds(bounds);

function gridToCoords(letter, number) {
  const letters = "ABCDEFGH";
  const rows = letters.length;
  const cols = 8;

  const yStep = height / rows;
  const xStep = width / cols;

  const y = letters.indexOf(letter) * yStep + yStep / 2;
  const x = (number - 1) * xStep + xStep / 2;

  return [y, x];
}

// Pins
L.marker(gridToCoords("B", 2)).addTo(map).bindPopup("B2");
L.marker(gridToCoords("D", 4)).addTo(map).bindPopup("D4");
L.marker(gridToCoords("F", 3)).addTo(map).bindPopup("F3");
