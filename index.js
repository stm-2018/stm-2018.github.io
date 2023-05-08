let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 51.4960113, lng: 0.1422846 },
    zoom: 8,
  });
}

initMap();