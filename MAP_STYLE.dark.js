var style = {
    "version": 8,
    "metadata": {},
    "sources": {
        block: {
            type: "vector",
            scheme: "xyz",
          //  zoomOffset: -1,
            minzoom: 10,
            tiles: [
              "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:block&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}",
            ],
          },
          roads: {
            type: "vector",
            scheme: "xyz",
         //   zoomOffset: -1,
            minzoom: 10,
            tiles: [
              "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:roads&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}",
            ],
          },
          poi: {
            type: "vector",
            scheme: "xyz",
         //   zoomOffset: -1,
            minzoom: 10,
            tiles: [
              "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:poi&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}",
            ],
          },
          citybuilding: {
            type: "vector",
            scheme: "xyz",
          //  zoomOffset: -1,
            minzoom: 10,
            tiles: [
              "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:building&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}",
            ],
          },
    },
    "sprite": "http://61.177.139.232:8088/mapclient/mapbox/sprites/sprite",
    "glyphs": "http://61.177.139.232:8088/mapclient/mapbox/glyphs/{fontstack}/{range}.pbf",
    "layers": [
      {
        "id": "背景",
        "type": "background",
        "layout": {"visibility": "visible"},
        "paint": {"background-color": "#1A232C"}
      },
      {
        "id": "院落-公共服务设施",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "YL_YuanLuo_A",
        "minzoom": 14,
        "filter": ["all", ["==", "备注", "公共服务设施"]],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": {"base": 1, "stops": [[12, "#1A232C"], [20, "#1A232C"]]},
          "fill-outline-color": "#1A232C"
        }
      },
      {
        "id": "院落-医院",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "YL_YuanLuo_A",
        "minzoom": 13,
        "filter": ["all", ["==", "$type", "Polygon"], ["==", "小区", "医院"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#1A232C"}
      },
      {
        "id": "院落-商业",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "YL_YuanLuo_A",
        "minzoom": 13,
        "filter": ["all", ["==", "$type", "Polygon"], ["==", "备注", "商业广场"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#1A232C"}
      },
      {
        "id": "院落-小区",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "YL_YuanLuo_A",
        "filter": ["all", ["==", "备注", "小区"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#1A232C"}
      },
      {
        "id": "院落-学校",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "YL_YuanLuo_A",
        "minzoom": 13,
        "filter": ["all", ["==", "$type", "Polygon"], ["==", "备注", "学校"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#1A232C"}
      },
      {
        "id": "道路面",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "roads",
        "source-layer": "DL_DaoLu_A",
        "minzoom": 13,
        "filter": ["all", ["==", "$type", "Polygon"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "rgba(24, 24, 24, 1)"}
      },
      {
        "id": "道路面-路口",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "roads",
        "source-layer": "DL_LuKou_A",
        "minzoom": 13,
        "filter": ["all", ["==", "$type", "Polygon"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "rgba(36, 36, 36, 1)"}
      },
      {
        "id": "植被-城市",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "ZB_ChengShi_A",
        "minzoom": 16,
        "maxzoom": 24,
        "filter": ["all"],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#222D37"}
      },
      {
        "id": "植被-农林",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "ZB_NongLin_A",
        "minzoom": 0,
        "filter": ["all"],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#222D37"}
      },
      {
        "id": "水域-湖泊",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "HL_HuPo_A",
        "minzoom": 12,
        "filter": ["all"],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#0A141C"}
      },
      {
        "id": "水域-河流-小",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "HL_HeiLiu_A",
        "minzoom": 13,
        "filter": ["all", ["<=", "SHAPE_Area", 5000]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#0A141C"}
      },
      {
        "id": "水域-河流-大",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849388993.3071"},
        "source": "block",
        "source-layer": "HL_HeiLiu_A",
        "minzoom": 0,
        "filter": ["all", [">", "SHAPE_Area", 5000]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#0A141C"}
      },
      {
        "id": "道路线-支路-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 13,
        "filter": ["all", ["==", "CSDLDJ", "支路"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {
            "base": 1.2,
            "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "道路线-机耕路-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 15,
        "filter": ["all", ["==", "GLXZDJ", "机耕路"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {
            "base": 1.2,
            "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "道路线-次干道-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "filter": ["all", ["==", "CSDLDJ", "次干道"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
        }
      },
      {
        "id": "道路线-主干道-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "maxzoom": 24,
        "filter": ["all", ["==", "CSDLDJ", "主干道"]],
        "layout": {"line-join": "round", "visibility": "visible"},
        "paint": {
          "line-color": "#060D16",
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "道路线-县道-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": ["all", ["==", "GLXZDJ", "县道"]],
        "layout": {"line-join": "round", "visibility": "visible"},
        "paint": {
          "line-color": "#060D16",
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "道路线-乡村路-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 15,
        "filter": ["all", ["==", "GLXZDJ", "乡村路"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#cfcdca",
          "line-width": {
            "base": 1.2,
            "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "道路线-省道-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": ["all", ["==", "GLXZDJ", "省道"]],
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#060D16",
          "line-dasharray": [1],
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 34]]
          }
        }
      },
      {
        "id": "道路线-国道-边线",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": ["all", ["==", "GLXZDJ", "国道"]],
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#060D16",
          "line-dasharray": [1],
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 34]]
          }
        }
      },
      {
        "id": "道路线-乡村路",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 15,
        "filter": ["all", ["==", "GLXZDJ", "乡村路"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
        }
      },
      {
        "id": "道路线-机耕路",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 15,
        "filter": ["all", ["==", "GLXZDJ", "机耕路"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
        }
      },
      {
        "id": "道路线-支路",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 13,
        "filter": ["all", ["==", "CSDLDJ", "支路"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
        }
      },
      {
        "id": "道路线-次干道",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "filter": ["all", ["==", "CSDLDJ", "次干道"]],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[6, 0], [8, 0.5], [20, 13]]}
        }
      },
      {
        "id": "道路线-主干道",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": ["all", ["==", "CSDLDJ", "主干道"]],
        "layout": {"line-join": "round", "visibility": "visible"},
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
        }
      },
      {
        "id": "道路线-县道",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": ["all", ["==", "GLXZDJ", "县道"]],
        "layout": {"line-join": "round", "visibility": "visible"},
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
        }
      },
      {
        "id": "道路线-省道",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": ["all", ["==", "GLXZDJ", "省道"]],
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 30]]}
        }
      },
      {
        "id": "道路线-国道",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "minzoom": 0,
        "maxzoom": 24,
        "filter": ["all", ["==", "GLXZDJ", "国道"]],
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#060D16",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 30]]}
        }
      },
      {
        "id": "建筑物",
        "type": "fill-extrusion",
        "source": "citybuilding",
        "source-layer": "FW_FangWu_A",
        filter: ["all", ["<", "Floor", 4]],
        "minzoom": 16,
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-extrusion-color": "#252F38",
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["*", 3, ["get", "Floor"]]
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "BasementFl"]
          ],
          "fill-extrusion-opacity": 0.5,
          "fill-extrusion-vertical-gradient": false
        }
      },
      {
        "id": "兴趣点-level-18",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 16,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "18v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{OTHERNAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-17",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 16,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "17v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-16",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 16,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "16v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-15",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 15,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "15v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-14",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 14,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "14v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-13",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "13v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-12",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "12v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-11",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "11v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-group",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 13,
        "maxzoom": 24,
        "filter": ["all", ["==", "QH", "组"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-country",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 12,
        "maxzoom": 24,
        "filter": ["all", ["==", "QH", "村"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#ffffff"
        }
      },
      {
        "id": "兴趣点-level-10",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": ["all", ["==", "LEVELS", "10v"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "兴趣点-level-towm",
        "type": "symbol",
        "source": "poi",
        "source-layer": "POI",
        "minzoom": 10,
        "maxzoom": 24,
        "filter": ["all", ["==", "QH", "镇"]],
        "layout": {
          "text-padding": 2,
          "text-font": ["Microsoft YaHei Regular"],
          "text-anchor": "left",
          "icon-image": "{TYPE}",
          "text-field": "{NAME}",
          "text-offset": [0.6, 0],
          "text-size": 13,
          "text-max-width": 6,
          "visibility": "visible",
          "icon-offset": [6, 0],
          "icon-anchor": "right"
        },
        "paint": {
          "icon-opacity": 1,
          "text-halo-blur": 0.5,
          "text-color": "#a0a8b8",
          "text-halo-width": 1,
          "text-halo-color": "#0A141C"
        }
      },
      {
        "id": "铁路",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "JT_TieLu_L",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": ["all"],
        "paint": {
          "line-color": "rgba(113, 113, 113, 1)",
          "line-width": {"stops": [[15, 3], [16, 5]]}
        }
      },
      {
        "id": "铁路-白",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "JT_TieLu_L",
        "minzoom": 11,
        "maxzoom": 24,
        "filter": ["all"],
        "layout": {"visibility": "visible"},
        "paint": {
          "line-color": "rgba(242, 239, 239, 1)",
          "line-width": {"stops": [[15, 3], [16, 5]]},
          "line-dasharray": [5, 5]
        }
      },
      {
        "id": "边框-浅",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "block",
        "source-layer": "bounds",
        "minzoom": 0,
        "filter": ["all"],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(98, 98, 98, 1)",
          "line-width": {"base": 1.2, "stops": [[12, 6], [20, 8]]},
          "line-blur": 1,
          "line-gap-width": {"type": "identity", "property": ""},
          "line-offset": -4,
          "line-opacity": 0.8
        }
      },
      {
        "id": "边框-深",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "block",
        "source-layer": "bounds",
        "minzoom": 0,
        "filter": ["all"],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible",
          "line-round-limit": 1,
          "line-miter-limit": 2
        },
        "paint": {
          "line-color": "rgba(65, 65, 65, 1)",
          "line-width": {"base": 1.2, "stops": [[12, 4], [20, 8]]},
          "line-blur": 1,
          "line-gap-width": {"type": "identity", "property": ""},
          "line-opacity": 0.8
        }
      },
      {
        "id": "边框-城区",
        "type": "line",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "block",
        "source-layer": "bounds80",
        "minzoom": 0,
        "filter": ["all"],
        "layout": {
          "line-join": "round",
          "line-cap": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(148, 148, 148, 1)",
          "line-width": {"base": 1.2, "stops": [[12, 0.5], [20, 1]]}
        }
      },
      {
        "id": "标注-motorway",
        "type": "symbol",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "filter": ["all", ["==", "GLXZDJ", "国道"]],
        "layout": {
          "visibility": "visible",
          "text-field": "{GLNO}",
          "text-font": ["Microsoft YaHei Regular"],
          "text-size": 8,
          "icon-image": "国道",
          "text-transform": "none",
          "icon-size": 1.4,
          "icon-rotation-alignment": "auto",
          "icon-text-fit": "both",
          "icon-text-fit-padding": [6, 2, 4, 2]
        },
        "paint": {
          "text-color": "rgba(255, 255, 255, 1)",
          "text-translate-anchor": "map"
        }
      },
      {
        "id": "标注-shendao",
        "type": "symbol",
        "metadata": {"mapbox:group": "1444849354174.1904"},
        "source": "roads",
        "source-layer": "DL_DaoLu_L",
        "filter": ["all", ["==", "GLXZDJ", "省道"]],
        "layout": {
          "visibility": "visible",
          "text-field": "{GLNO}",
          "text-font": ["Microsoft YaHei Regular"],
          "text-size": 8,
          "icon-image": "省道",
          "text-transform": "none",
          "icon-size": 1.4,
          "icon-rotation-alignment": "auto",
          "icon-text-fit": "both",
          "icon-text-fit-padding": [6, 2, 4, 2],
          "text-ignore-placement": false,
          "text-pitch-alignment": "auto",
          "text-rotation-alignment": "auto",
          "text-keep-upright": true
        },
        "paint": {
          "text-color": "rgba(255, 255, 255, 1)",
          "text-translate-anchor": "map"
        }
      }
    ],
    "id": "hrmq9na14"
  }