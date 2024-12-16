const map = L.map('map').setView([50, 5], 4); // Start view over Europe

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Country cooridnates
function getCountryLatLng(country) {
  const coordinates = {
    'Denmark': [56.26392, 9.501785],
    'Germany': [51.1657, 10.4515],
    'France': [46.603354, 1.888334],
    'Malta': [35.9375, 14.3754],
    'Wales': [52.1307, -3.7837],
    'Schweiz': [46.8182, 8.2275],
    'Overview': [50, 5] // overview Europe
  };
  return coordinates[country] || coordinates['Overview']; // default to Europe
}

async function fetchData(endpoint) {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block'; // Add loading icon
  const response = await fetch(endpoint);
  const data = await response.json();
  loadingElement.style.display = 'none'; // Hide loading icon
  return data;
}

let heatLayer;

function updateHeatmap(data) {
  if (heatLayer) {
    map.removeLayer(heatLayer);
  }
  const heatPoints = data.map((item) => {
    const latLng = getCountryLatLng(item.country); // [latitude, longitude = latLng]
    return [...latLng, item['Antal posts']]; 
  });
  heatLayer = L.heatLayer(heatPoints, { radius: 25 }).addTo(map);
}

function moveToCountry(country) {
  const latLng = getCountryLatLng(country);
  // Set zoom level based on country
  let zoomLevel;
  switch (country) {
    case 'Denmark':
      zoomLevel = 7;
      break;
    case 'Germany':
      zoomLevel = 6;
      break;
    case 'France':
      zoomLevel = 6;
      break;
    case 'Malta':
      zoomLevel = 10;
      break;
    case 'Wales':
      zoomLevel = 7;
      break;
    case 'Schweiz':
      zoomLevel = 8;
      break;
    default:
      zoomLevel = 4;
  }
  map.setView(latLng, zoomLevel);
  document.querySelectorAll('.dropdown').forEach(dropdown => dropdown.style.display = 'none');
  document.getElementById(`dropdown-${country.toLowerCase()}`).style.display = 'block';
}

// export { updateHeatmap, fetchData, moveToCountry };

// Section nedenfor skal i sin egen controller som fetching

async function loadIndexHeatmap() {
  const data = await fetchData('/api/overview');
  updateHeatmap(data);
}

async function loadDkForHeatmap() {
  const data = await fetchData('/api/dkfor');
  updateHeatmap(data);
}

async function loadDkImodHeatmap() {
  const data = await fetchData('/api/dkimod');
  updateHeatmap(data);
}

async function loadDkAllHeatmap() {
  const data = await fetchData('/api/dkall');
  updateHeatmap(data);
}

async function loadGermanyForHeatmap() {
  const data = await fetchData('/api/germanyfor');
  updateHeatmap(data);
}

async function loadGermanyImodHeatmap() {
  const data = await fetchData('/api/germanyimod');
  updateHeatmap(data);
}

async function loadGermanyAllHeatmap() {
  const data = await fetchData('/api/germanyall');
  updateHeatmap(data);
}

async function loadFranceForHeatmap() {
  const data = await fetchData('/api/francefor');
  updateHeatmap(data);
}

async function loadFranceImodHeatmap() {
  const data = await fetchData('/api/franceimod');
  updateHeatmap(data);
}

async function loadFranceAllHeatmap() {
  const data = await fetchData('/api/franceall');
  updateHeatmap(data);
}

async function loadMaltaForHeatmap() {
  const data = await fetchData('/api/maltafor');
  updateHeatmap(data);
}

async function loadMaltaImodHeatmap() {
  const data = await fetchData('/api/maltaimod');
  updateHeatmap(data);
}

async function loadMaltaAllHeatmap() {
  const data = await fetchData('/api/maltaall');
  updateHeatmap(data);
}

async function loadWalesForHeatmap() {
  const data = await fetchData('/api/walesfor');
  updateHeatmap(data);
}

async function loadWalesImodHeatmap() {
  const data = await fetchData('/api/walesimod');
  updateHeatmap(data);
}

async function loadWalesAllHeatmap() {
  const data = await fetchData('/api/walesall');
  updateHeatmap(data);
}

async function loadSchweizForHeatmap() {
  const data = await fetchData('/api/schweizfor');
  updateHeatmap(data);
}

async function loadSchweizImodHeatmap() {
  const data = await fetchData('/api/schweizimod');
  updateHeatmap(data);
}

async function loadSchweizAllHeatmap() {
  const data = await fetchData('/api/schweizall');
  updateHeatmap(data);
}

// Startsside load
document.addEventListener('DOMContentLoaded', () => {
  loadIndexHeatmap();
});

