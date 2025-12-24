// ====== INSTELLINGEN ======
const width = 100;
const height = 100;

// ====== MAP MAKEN ======
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 2,
  zoomControl: true
});

// ====== AFBEELDING ======
const imageUrl = 'map.png';
const bounds = [[0, 0], [height, width]];

L.imageOverlay(imageUrl, bounds).addTo(map);
map.fitBounds(bounds);

// ====== RASTER → COÖRDINATEN ======
function gridToCoords(letter, number) {
  const letters = "ABCDEFGH"; // pas aan indien nodig
  const yStep = height / letters.length;
  const xStep = width / 8;    // 8 kolommen

  const y = letters.indexOf(letter) * yStep + yStep / 2;
  const x = (number - 1) * xStep + xStep / 2;

  return [y, x];
}

// ====== VASTE PINPOINTS ======
L.marker(gridToCoords("C", 3)).addTo(map)
  .bindPopup("C3 – Voorbeeld");

L.marker(gridToCoords("E", 5)).addTo(map)
  .bindPopup("E5 – Dekking");

L.marker(gridToCoords("G", 2)).addTo(map)
  .bindPopup("G2 – Spawn");

// ====== RESPONSIVE FIX ======
window.addEventListener('resize', () => {
  map.invalidateSize();
});
