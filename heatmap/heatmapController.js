import { fetchData, updateHeatmap, moveToCountry } from './public/heatmap';


const heatmapper = require('/public/heatmap.js');
const routing = require('controller.js');



async function loadIndexHeatmap() {
    const data = await fetchData('/api/overview');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadDkForHeatmap() {
    const data = await fetchData('/api/dkfor');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadDkImodHeatmap() {
    const data = await fetchData('/api/dkimod');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadDkAllHeatmap() {
    const data = await fetchData('/api/dkall');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadGermanyForHeatmap() {
    const data = await fetchData('/api/germanyfor');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadGermanyImodHeatmap() {
    const data = await fetchData('/api/germanyimod');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadGermanyAllHeatmap() {
    const data = await fetchData('/api/germanyall');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadFranceForHeatmap() {
    const data = await fetchData('/api/francefor');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadFranceImodHeatmap() {
    const data = await fetchData('/api/franceimod');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadFranceAllHeatmap() {
    const data = await fetchData('/api/franceall');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadMaltaForHeatmap() {
    const data = await fetchData('/api/maltafor');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadMaltaImodHeatmap() {
    const data = await fetchData('/api/maltaimod');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadMaltaAllHeatmap() {
    const data = await fetchData('/api/maltaall');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadWalesForHeatmap() {
    const data = await fetchData('/api/walesfor');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadWalesImodHeatmap() {
    const data = await fetchData('/api/walesimod');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadWalesAllHeatmap() {
    const data = await fetchData('/api/walesall');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadSchweizForHeatmap() {
    const data = await fetchData('/api/schweizfor');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadSchweizImodHeatmap() {
    const data = await fetchData('/api/schweizimod');
    heatmapper.updateHeatmap(data);
  }
  
  async function loadSchweizAllHeatmap() {
    const data = await fetchData('/api/schweizall');
    heatmapper.updateHeatmap(data);
  }
  
  // Startsside load
  document.addEventListener('DOMContentLoaded', () => {
    loadIndexHeatmap();
  });

  export {
    loadIndexHeatmap,
    loadDkAllHeatmap,
    loadDkForHeatmap,
    loadDkImodHeatmap,
    loadFranceAllHeatmap,
    loadFranceForHeatmap,
    loadFranceImodHeatmap,
    loadGermanyAllHeatmap,
    loadGermanyForHeatmap,
    loadGermanyImodHeatmap,
    loadMaltaAllHeatmap,
    loadMaltaForHeatmap,
    loadMaltaImodHeatmap,
    loadSchweizAllHeatmap,
    loadSchweizForHeatmap,
    loadSchweizImodHeatmap,
    loadWalesAllHeatmap,
    loadWalesForHeatmap,
    loadWalesImodHeatmap
  };
  