import { Geolocation } from "@capacitor/geolocation";
import { Map, Marker, NavigationControl } from "mapbox-gl";

export default () => ({
  MAPBOX_TOKEN:
    "pk.eyJ1IjoidmlydXNzYW1hIiwiYSI6ImNsM2lrMmkydDAxYzYzY3V3N29iYmRlM20ifQ.1am40GGQMgv5YmwIrtllzg",

  async init() {
    try {
      const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
      this.successlocation(coordinates);
    } catch (error) {
      // errorlocation();
    }

    this.setupMap(this.currentPos);
  },

  setupMap(center) {
    this.map = new Map({
      accessToken: this.MAPBOX_TOKEN,
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15
    });

    this.addMarker(center);
    this.map.addControl(new NavigationControl());

    this.map.on("load", () => {
      if (this.map.getSource("point")) return;

      this.map.addLayer({
        id: "point",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: center
                }
              }
            ]
          }
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#008dff"
        }
      });
    });
  },
  async getRouteTo(destinationCoords) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change

    this.removeMarkerTrace();
    this.marker = this.addMarker(destinationCoords);

    // for transitioning to the location
    this.map.fitBounds([destinationCoords, this.currentPos], {
      padding: 60
    });

    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${this.currentPos[0]},${this.currentPos[1]};${destinationCoords[0]},${destinationCoords[1]}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${this.MAPBOX_TOKEN}`
    );

    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route
      }
    };
    // if the route already exists on the map, we'll reset it using setData
    if (this.map.getSource("route")) {
      this.map.getSource("route").setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      this.map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#008dff",
          "line-width": 5,
          "line-opacity": 0.75
        }
      });
    }
  },

  removeMarkerTrace() {
    this.marker?.remove();
    this.map.getSource("route") && (this.map.removeLayer("route"), this.map.removeSource("route"));
  },

  successlocation(position) {
    console.log("twice");
    // currentPos = correctFormat([9.004349200000004, 7.403816744176722]);
    this.currentPos = [position.coords.longitude, position.coords.latitude];
  },

  addMarker(position) {
    return new Marker().setLngLat(position).addTo(this.map);
  },

  correctFormat(arr) {
    return arr.reverse();
  }
});
