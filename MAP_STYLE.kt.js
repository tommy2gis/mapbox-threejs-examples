var style ={
  "version": 8,
  "name": "Medieval Melbourne",
  "metadata": {
    "mapbox:autocomposite": true,
    "mapbox:type": "template",
    "mapbox:groups": {
      "3784a36513b1f559040c863fc5f3af4b": {"name": "Group"},
      "894dab4b327e63ef0f8d7ad9fd494626": {"name": "Group"},
      "f0e2500afb678f6e3786d9f2ddb5aafb": {"name": "Group"},
      "61cdeaa9622fd482c22f69d27040cda3": {"name": "Group"},
      "a4d4155d3e1252104710a47b91005288": {"name": "Hill shading"}
    },
    "mapbox:trackposition": false,
    "maputnik:renderer": "mbgljs"
  },
  "center": [144.97892645329364, -37.81681487609199],
  "zoom": 15,
  "bearing": 0,
  "pitch": 0,
  "sources": {
    "composite": {
      "url": "mapbox://mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2",
      "type": "vector"
    }
  },
  "sprite": "http://192.168.101.200:8080/mapeditor/mapbox/sprites_kt/sprite",
  "glyphs": "mapbox://fonts/stevage/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {"background-color": "hsl(34, 66%, 91%)"}
    },
    {
      "id": "parks",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "filter": [
        "all",
        ["!=", "type", "fairway"],
        ["in", "class", "agriculture", "grass", "park"]
      ],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(60, 49%, 67%)",
        "fill-outline-color": "hsl(60, 49%, 47%)"
      }
    },
    {
      "id": "cemetery etc",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["in", "class", "cemetery", "school"],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(34, 33%, 78%)",
        "fill-outline-color": "hsl(34, 11%, 58%)"
      }
    },
    {
      "id": "forest",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["in", "class", "scrub", "wood"],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(60, 42%, 64%)",
        "fill-opacity": 1,
        "fill-antialias": false
      }
    },
    {
      "id": "forest texture",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["in", "class", "scrub", "wood"],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(122, 55%, 23%)",
        "fill-opacity": 0.28,
        "fill-pattern": "trees4"
      }
    },
    {
      "id": "parks texture",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["in", "class", "", "agriculture", "grass", "park", "pitch"],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(66, 49%, 67%)",
        "fill-pattern": "grass5",
        "fill-opacity": 0.13
      }
    },
    {
      "id": "barrier-line",
      "type": "line",
      "source": "composite",
      "source-layer": "barrier_line",
      "layout": {"visibility": "visible"},
      "paint": {
        "line-color": "hsl(32, 46%, 20%)",
        "line-translate": [-1, 1.5],
        "line-blur": 1
      }
    },
    {
      "id": "zoo shadow",
      "type": "line",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["all", ["==", "class", "park"], ["==", "type", "zoo"]],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-color": "hsl(32, 46%, 20%)",
        "line-translate": [-1, 1.5],
        "line-blur": 1,
        "line-width": 4
      }
    },
    {
      "id": "zoo",
      "type": "line",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["all", ["==", "class", "park"], ["==", "type", "zoo"]],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-color": "hsl(60, 49%, 67%)",
        "line-translate": [0, 0],
        "line-blur": 1,
        "line-width": 5
      }
    },
    {
      "id": "water edge (cliff)",
      "type": "line",
      "source": "composite",
      "source-layer": "water",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05,
        "visibility": "visible"
      },
      "paint": {
        "line-translate": [0, -3],
        "line-blur": 2,
        "line-color": "hsl(32, 46%, 32%)",
        "line-width": 8,
        "line-opacity": 1,
        "line-translate-anchor": "viewport"
      }
    },
    {
      "id": "waterway edge",
      "type": "line",
      "source": "composite",
      "source-layer": "waterway",
      "layout": {"visibility": "visible", "line-join": "round"},
      "paint": {
        "line-color": "hsl(32, 46%, 32%)",
        "line-blur": 2,
        "line-translate": [0, -4],
        "line-width": 8,
        "line-translate-anchor": "viewport"
      }
    },
    {
      "id": "waterway stroke",
      "type": "line",
      "source": "composite",
      "source-layer": "waterway",
      "layout": {"visibility": "visible", "line-join": "round"},
      "paint": {"line-color": "hsl(205, 49%, 24%)", "line-width": 9}
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "composite",
      "source-layer": "waterway",
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {"line-color": "hsl(205, 89%, 80%)", "line-width": 8}
    },
    {
      "id": "water stroke",
      "type": "line",
      "source": "composite",
      "source-layer": "water",
      "layout": {"visibility": "visible"},
      "paint": {"line-color": "hsl(205, 49%, 24%)", "line-width": 1}
    },
    {
      "id": "water shadow",
      "type": "line",
      "metadata": {},
      "source": "composite",
      "source-layer": "water",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05,
        "visibility": "visible"
      },
      "paint": {
        "line-translate": [1, -2],
        "line-opacity": 1,
        "line-color": "hsl(205, 49%, 24%)",
        "line-width": 4,
        "line-blur": 4,
        "line-translate-anchor": "viewport"
      }
    },
    {
      "id": "hillshade",
      "type": "fill",
      "metadata": {"mapbox:group": "a4d4155d3e1252104710a47b91005288"},
      "source": "composite",
      "source-layer": "hillshade",
      "filter": ["==", "class", "shadow"],
      "layout": {},
      "paint": {
        "fill-opacity": 0.1,
        "fill-color": "#020",
        "fill-antialias": false
      }
    },
    {
      "id": "hillshade edge",
      "type": "line",
      "metadata": {"mapbox:group": "a4d4155d3e1252104710a47b91005288"},
      "source": "composite",
      "source-layer": "hillshade",
      "filter": ["==", "class", "shadow"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-blur": 21,
        "line-width": 10,
        "line-opacity": 0.2,
        "line-color": "#020"
      }
    },
    {
      "id": "hillshade highlight",
      "type": "fill",
      "metadata": {"mapbox:group": "a4d4155d3e1252104710a47b91005288"},
      "source": "composite",
      "source-layer": "hillshade",
      "filter": ["==", "class", "highlight"],
      "layout": {},
      "paint": {
        "fill-antialias": false,
        "fill-color": "#fff",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "hillshade edge highlight",
      "type": "line",
      "metadata": {"mapbox:group": "a4d4155d3e1252104710a47b91005288"},
      "source": "composite",
      "source-layer": "hillshade",
      "filter": ["==", "class", "highlight"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-blur": 21,
        "line-width": 10,
        "line-opacity": 0.3,
        "line-color": "#fff"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "composite",
      "source-layer": "water",
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "hsl(205, 89%, 80%)", "fill-opacity": 1}
    },
    {
      "id": "river light",
      "type": "line",
      "metadata": {},
      "source": "composite",
      "source-layer": "waterway",
      "filter": ["in", "type", "", "river"],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "hsl(205, 63%, 95%)",
        "line-blur": 30,
        "line-width": 20
      }
    },
    {
      "id": "water label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "waterway_label",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "", "river"]
      ],
      "layout": {
        "text-size": 24,
        "text-max-angle": 85,
        "symbol-spacing": 240,
        "text-font": ["Gothic Ultra OT Regular", "Arial Unicode MS Regular"],
        "symbol-placement": "line",
        "visibility": "visible",
        "text-offset": [0, 0.2],
        "text-field": "{name}",
        "text-letter-spacing": 0.5
      },
      "paint": {
        "text-color": "hsl(205, 49%, 24%)",
        "text-halo-color": "hsl(205, 91%, 89%)",
        "text-halo-width": 2
      }
    },
    {
      "id": "waterway-label small",
      "type": "symbol",
      "source": "composite",
      "source-layer": "waterway_label",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "canal", "drain", "stream"]
      ],
      "layout": {
        "visibility": "visible",
        "text-field": "{name}",
        "text-font": ["Gothic Ultra OT Regular", "Arial Unicode MS Regular"],
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-size": 12,
        "symbol-spacing": 350
      },
      "paint": {
        "text-color": "hsl(205, 49%, 24%)",
        "text-halo-color": "hsl(205, 89%, 80%)",
        "text-halo-width": 1,
        "text-translate": [0, 2]
      }
    },
    {
      "id": "jetties shadow",
      "type": "line",
      "metadata": {"mapbox:group": "f0e2500afb678f6e3786d9f2ddb5aafb"},
      "source": "composite",
      "source-layer": "barrier_line",
      "filter": [
        "all",
        ["==", "class", "land"],
        ["in", "$type", "LineString", "Point"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "hsl(205, 49%, 20%)",
        "line-width": 3,
        "line-translate": [-1, 1],
        "line-opacity": 0.5
      }
    },
    {
      "id": "jetties",
      "type": "line",
      "metadata": {"mapbox:group": "f0e2500afb678f6e3786d9f2ddb5aafb"},
      "source": "composite",
      "source-layer": "barrier_line",
      "filter": [
        "all",
        ["==", "class", "land"],
        ["in", "$type", "LineString", "Point"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {"line-color": "hsl(32, 79%, 81%)", "line-width": 3}
    },
    {
      "id": "jetties texture",
      "type": "line",
      "metadata": {"mapbox:group": "f0e2500afb678f6e3786d9f2ddb5aafb"},
      "source": "composite",
      "source-layer": "barrier_line",
      "filter": [
        "all",
        ["==", "class", "land"],
        ["in", "$type", "LineString", "Point"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "hsl(34, 24%, 70%)",
        "line-width": 3,
        "line-dasharray": [1, 2]
      }
    },
    {
      "id": "jetties shadow copy",
      "type": "line",
      "metadata": {},
      "source": "composite",
      "source-layer": "barrier_line",
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "class", "land"]],
      "layout": {"line-join": "round", "line-cap": "round"},
      "paint": {
        "line-color": "hsl(205, 49%, 20%)",
        "line-translate": [-1, 1],
        "line-width": 2,
        "line-blur": 1,
        "line-opacity": 0.5
      }
    },
    {
      "id": "jetties copy",
      "type": "fill",
      "metadata": {},
      "source": "composite",
      "source-layer": "barrier_line",
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "class", "land"]],
      "layout": {},
      "paint": {"fill-color": "hsl(32, 79%, 81%)"}
    },
    {
      "id": "jetties texture copy",
      "type": "fill",
      "metadata": {},
      "source": "composite",
      "source-layer": "barrier_line",
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "class", "land"]],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(34, 24%, 70%)",
        "fill-pattern": "hash-brown",
        "fill-opacity": 0.38
      }
    },
    {
      "id": "rail",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "filter": ["in", "class", "", "major_rail"],
      "layout": {"visibility": "none", "line-join": "round"},
      "paint": {"line-color": "hsl(0, 0%, 71%)", "line-width": 0.5}
    },
    {
      "id": "rail bridge",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "class", "major_rail"],
        ["==", "structure", "bridge"]
      ],
      "layout": {"visibility": "visible", "line-join": "round"},
      "paint": {
        "line-color": "hsl(34, 73%, 9%)",
        "line-width": 6,
        "line-blur": 3,
        "line-translate": [-2, 2]
      }
    },
    {
      "id": "rail new",
      "type": "line",
      "source": "composite",
      "source-layer": "road",
      "filter": ["in", "class", "", "major_rail"],
      "layout": {"visibility": "visible", "line-join": "round"},
      "paint": {"line-color": "hsl(34, 50%, 83%)", "line-width": 4}
    },
    {
      "id": "paths bridge shadow",
      "type": "line",
      "metadata": {"mapbox:group": "3784a36513b1f559040c863fc5f3af4b"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "path", "pedestrian"]
      ],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-color": "hsl(34, 73%, 9%)",
        "line-width": 6.4,
        "line-translate": [-1, 2],
        "line-blur": 1
      }
    },
    {
      "id": "paths bridge",
      "type": "line",
      "metadata": {"mapbox:group": "3784a36513b1f559040c863fc5f3af4b"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "path", "pedestrian"]
      ],
      "layout": {"visibility": "visible", "line-cap": "square"},
      "paint": {"line-color": "hsl(34, 73%, 89%)", "line-width": 5.6}
    },
    {
      "id": "paths",
      "type": "line",
      "metadata": {"mapbox:group": "3784a36513b1f559040c863fc5f3af4b"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["!in", "type", "platform", "sidewalk"],
        ["in", "class", "path", "pedestrian"]
      ],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-dasharray": [6, 5, 8, 6, 5, 7, 3, 3],
        "line-color": "hsl(76, 5%, 32%)",
        "line-width": 0.5
      }
    },
    {
      "id": "road casing",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["!=", "structure", "tunnel"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {"visibility": "visible", "line-join": "round"},
      "paint": {
        "line-color": "hsl(34, 9%, 11%)",
        "line-gap-width": 0,
        "line-width": 10,
        "line-translate-anchor": "map"
      }
    },
    {
      "id": "road  fuzzy casing",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["!=", "structure", "tunnel"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {"visibility": "visible", "line-join": "round"},
      "paint": {
        "line-color": "hsl(34, 26%, 29%)",
        "line-gap-width": 0,
        "line-width": 12,
        "line-blur": 2
      }
    },
    {
      "id": "small road casing",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": ["in", "class", "street", "street_limited"],
      "layout": {
        "visibility": "visible",
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(34, 9%, 11%)",
        "line-gap-width": 0,
        "line-width": 7
      }
    },
    {
      "id": "tiny road casing",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": ["==", "class", "service"],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "hsl(34, 9%, 11%)",
        "line-gap-width": 0,
        "line-width": 4
      }
    },
    {
      "id": "road  bridge",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "hsl(34, 77%, 10%)",
        "line-width": 13,
        "line-gap-width": 0,
        "line-offset": 0,
        "line-translate": [-2, 2],
        "line-blur": 3,
        "line-translate-anchor": "viewport"
      }
    },
    {
      "id": "road  bridge struts",
      "type": "symbol",
      "metadata": {"mapbox:group": "61cdeaa9622fd482c22f69d27040cda3"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {
        "icon-image": "square-15",
        "symbol-placement": "line",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-rotation-alignment": "viewport",
        "icon-size": 0.25,
        "symbol-spacing": 40,
        "visibility": "visible",
        "icon-pitch-alignment": "auto"
      },
      "paint": {
        "icon-translate": [0, 13],
        "icon-opacity": 1,
        "icon-translate-anchor": "viewport"
      }
    },
    {
      "id": "road  bridge struts copy",
      "type": "symbol",
      "metadata": {"mapbox:group": "61cdeaa9622fd482c22f69d27040cda3"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {
        "icon-image": "square-15",
        "symbol-placement": "line",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-rotation-alignment": "viewport",
        "icon-size": 0.25,
        "symbol-spacing": 40
      },
      "paint": {
        "icon-translate": [0, 10],
        "icon-opacity": 1,
        "icon-translate-anchor": "viewport"
      }
    },
    {
      "id": "road  bridge struts copy 1",
      "type": "symbol",
      "metadata": {"mapbox:group": "61cdeaa9622fd482c22f69d27040cda3"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {
        "icon-image": "square-15",
        "symbol-placement": "line",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-rotation-alignment": "viewport",
        "icon-size": 0.25,
        "visibility": "visible",
        "symbol-spacing": 40
      },
      "paint": {
        "icon-translate": [0, 7],
        "icon-opacity": 1,
        "icon-translate-anchor": "viewport"
      }
    },
    {
      "id": "road  bridge struts copy 2",
      "type": "symbol",
      "metadata": {"mapbox:group": "61cdeaa9622fd482c22f69d27040cda3"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {
        "icon-image": "square-15",
        "symbol-placement": "line",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-rotation-alignment": "viewport",
        "icon-size": 0.25,
        "visibility": "visible",
        "symbol-spacing": 40
      },
      "paint": {
        "icon-translate": [0, 4],
        "icon-opacity": 1,
        "icon-translate-anchor": "viewport"
      }
    },
    {
      "id": "road  bridge struts copy 3",
      "type": "symbol",
      "metadata": {"mapbox:group": "61cdeaa9622fd482c22f69d27040cda3"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["==", "structure", "bridge"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {
        "icon-image": "square-15",
        "symbol-placement": "line",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-rotation-alignment": "viewport",
        "icon-size": 0.5,
        "visibility": "none",
        "symbol-spacing": 50
      },
      "paint": {"icon-translate": [0, 1], "icon-opacity": 0.47}
    },
    {
      "id": "road",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": [
        "all",
        ["!=", "structure", "tunnel"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {"visibility": "visible", "line-join": "round"},
      "paint": {
        "line-color": "hsl(34, 73%, 89%)",
        "line-gap-width": 0,
        "line-width": 9.5
      }
    },
    {
      "id": "small road",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": ["in", "class", "street", "street_limited"],
      "layout": {
        "visibility": "visible",
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(34, 73%, 89%)",
        "line-gap-width": 0,
        "line-width": 6.5
      }
    },
    {
      "id": "tiny road",
      "type": "line",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road",
      "filter": ["==", "class", "service"],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "hsl(34, 73%, 89%)",
        "line-gap-width": 0,
        "line-width": 3.5
      }
    },
    {
      "id": "small road labels",
      "type": "symbol",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road_label",
      "filter": ["in", "class", "street", "street_limited"],
      "layout": {
        "text-field": "{name}",
        "text-font": ["Gothic Ultra OT Regular", "Arial Unicode MS Regular"],
        "symbol-placement": "point",
        "text-size": 12,
        "text-letter-spacing": 0.09,
        "text-offset": [0, 0.2],
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 23%)",
        "text-halo-color": "hsl(34, 73%, 89%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "tiny road labels",
      "type": "symbol",
      "metadata": {"mapbox:group": "894dab4b327e63ef0f8d7ad9fd494626"},
      "source": "composite",
      "source-layer": "road_label",
      "filter": ["==", "class", "service"],
      "layout": {
        "text-field": "{name}",
        "text-font": ["Gothic Ultra OT Regular", "Arial Unicode MS Regular"],
        "symbol-placement": "line",
        "text-size": 10,
        "text-letter-spacing": 0.09,
        "text-offset": [0, 0.2]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 23%)",
        "text-halo-color": "hsl(34, 73%, 89%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "building shadow",
      "type": "line",
      "source": "composite",
      "source-layer": "building",
      "layout": {"line-join": "round"},
      "paint": {
        "line-translate": [-1, 1.5],
        "line-color": "hsl(32, 46%, 20%)",
        "line-blur": 1,
        "line-width": 4,
        "line-translate-anchor": "viewport"
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "composite",
      "source-layer": "building",
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "hsl(32, 46%, 70%)", "fill-opacity": 1}
    },
    {
      "id": "building texture",
      "type": "fill",
      "source": "composite",
      "source-layer": "building",
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(32, 79%, 81%)",
        "fill-outline-color": "hsl(0, 0%, 0%)",
        "fill-opacity": 0.22,
        "fill-pattern": "hash-brown",
        "fill-translate": [0, 0]
      }
    },
    {
      "id": "road labels",
      "type": "symbol",
      "source": "composite",
      "source-layer": "road_label",
      "filter": [
        "all",
        ["!=", "name", "CityLink"],
        ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": ["Gothic Ultra OT Regular", "Arial Unicode MS Regular"],
        "symbol-placement": "point",
        "text-letter-spacing": 0.26,
        "text-size": 18,
        "text-offset": [0, 0.15]
      },
      "paint": {"text-halo-color": "hsl(34, 73%, 89%)", "text-halo-width": 2}
    },
    {
      "id": "poi-label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "poi_label",
      "filter": ["any", ["<=", "localrank", 2], ["<=", "scalerank", 2]],
      "layout": {
        "visibility": "visible",
        "text-field": "{name}",
        "text-font": ["Gothic Ultra OT Regular", "Arial Unicode MS Regular"],
        "text-letter-spacing": 0.06
      },
      "paint": {
        "text-halo-color": "hsl(34, 73%, 89%)",
        "text-halo-width": 0.5,
        "text-halo-blur": 1,
        "text-color": "#222"
      }
    },
    {
      "id": "place-label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "place_label",
      "layout": {
        "text-field": "{name}",
        "text-font": ["Gothic Ultra OT Regular", "Arial Unicode MS Regular"],
        "text-size": 20,
        "text-letter-spacing": 0.04
      },
      "paint": {
        "text-halo-color": "hsl(34, 73%, 89%)",
        "text-halo-blur": 1,
        "text-halo-width": 3
      }
    },
    {
      "id": "landuse",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["==", "class", "sand"],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "hsl(195, 10%, 87%)",
        "fill-outline-color": "hsl(41, 8%, 42%)"
      }
    }
  ],
  "created": "2017-02-08T06:17:09.188Z",
  "modified": "2017-02-08T23:14:44.894Z",
  "id": "ciywkc4dg000l2rmfzqopmwd1",
  "owner": "stevage",
  "visibility": "private",
  "draft": false
}