var style = {
  "version": 8,
  "metadata": {"maputnik:renderer": "mbgljs"},
  "sources": {
    "img_w": {
      "type": "raster",
      "tiles": [
        "http://t0.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
      ],
      "tileSize": 256
    },
    "cia_w": {
      "type": "raster",
      "tiles": [
        "http://t0.tianditu.gov.cn/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
      ],
      "tileSize": 256
    },
    "vec_w": {
      "type": "raster",
      "tiles": [
        "http://t0.tianditu.gov.cn/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
      ],
      "tileSize": 256
    },
    "cva_w": {
      "type": "raster",
      "tiles": [
        "http://t0.tianditu.gov.cn/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
      ],
      "tileSize": 256
    },
    "block": {
      "type": "vector",
      "scheme": "xyz",
      "minzoom": 0,
      "tiles": [
        "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:block&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ],
      "crs": "EPSG:3857"
    },

    "roads": {
      "type": "vector",
      "scheme": "xyz",
      "minzoom": 0,
      "tiles": [
        "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:roads&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ],
      "crs": "EPSG:3857"
    },
    "poi": {
      "type": "vector",
      "scheme": "xyz",
      "minzoom": 0,
      "tiles": [
        "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:poi&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ],
      "crs": "EPSG:3857"
    },
    "citybuilding": {
      "type": "vector",
      "scheme": "xyz",
      "minzoom": 10,
      "tiles": [
        "http://geowork.wicp.vip:25081/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:building&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ],
      "crs": "EPSG:3857"
    }
  },
  "sprite": "http://localhost:5501/sprites_new/sprite",
  "glyphs": "http://192.168.101.200:8080/mapeditor/mapbox/glyphs/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "背景",
      "type": "background",
      "minzoom": 0,
      "layout": {"visibility": "visible"},
      "paint": {"background-color": "#142B64"}
    },
   
    {
      "id": "乡镇",
      "type": "fill",
      "source": "block",
      "source-layer": "ZQ_XiangQu_A",
      "minzoom": 0,
      "maxzoom": 24,
      "paint": {"fill-color": "#0D1440"}
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
        "line-color": "#06244F",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
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
        "fill-color": {"base": 1, "stops": [[12, "#0D1440"], [20, "#071F36"]]},
        "fill-outline-color": "#0D1C51"
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
      "paint": {"fill-color": "#0D1440", "fill-outline-color": "#0D1C51"}
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
      "paint": {"fill-color": "#0D1440", "fill-outline-color": "#0D1C51"}
    },
    {
      "id": "院落-小区",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "YL_YuanLuo_A",
      "minzoom": 13,
      "filter": ["all", ["==", "备注", "小区"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#0D1440", "fill-outline-color": "#0D1C51"}
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
      "paint": {"fill-color": "#0D1440", "fill-outline-color": "#0D1C51"}
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
      "paint": {"fill-color": "#002140"}
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
      "paint": {"fill-color": "#002140"}
    },
    {
      "id": "植被-城市",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "ZB_ChengShi_A",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": ["all", [">=", "SHAPE_Area", 6000]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#001826"}
    },
    {
      "id": "植被-农林",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "ZB_NongLin_A",
      "minzoom": 10,
      "filter": ["all", [">=", "SHAPE_Area", 6000]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#001826"}
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
      "paint": {"fill-color": "#0A325D"}
    },
    {
      "id": "水域-河流-小",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "HL_HeiLiu_A",
      "minzoom": 16,
      "filter": ["all", ["<=", "SHAPE_Area", 5000]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#0A325D"}
    },
    {
      "id": "水域-河流-大",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "HL_HeiLiu_A",
      "minzoom": 12,
      "filter": ["all", [">", "SHAPE_Area", 5000]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#0A325D"}
    },
    {
      "id": "水域-河流-主",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "HL_HeiLiu_A",
      "minzoom": 0,
      "filter": [
        "all",
        ["in", "NAME", "焦港河", "如泰运河", "如海运行", "丁堡河", "通扬运河", "长江"]
      ],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#0A325D"}
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
        "line-color": "#06244F",
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
        "line-color": "#06244F",
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
      "minzoom": 13,
      "filter": ["all", ["==", "CSDLDJ", "次干道"]],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#06244F",
        "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 10]]}
      }
    },
    {
      "id": "道路线-主干道-边线",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 11.5,
      "maxzoom": 24,
      "filter": ["all", ["==", "CSDLDJ", "主干道"]],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#134590",
        "line-width": {"base": 1.2, "stops": [[5, 0.4], [10, 1.5], [20, 22]]}
      }
    },
    {
      "id": "道路线-县道-边线",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 11.5,
      "maxzoom": 24,
      "filter": ["all", ["==", "GLXZDJ", "县道"]],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#134590",
        "line-width": {"base": 1.2, "stops": [[5, 0.4], [10, 0.6], [20, 22]]}
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
        "line-color": "#134590",
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
        "line-color": "#134590",
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
        "line-color": "#06244F",
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
        "line-color": "#06244F",
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
        "line-color": "#06244F",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "道路线-次干道",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 13,
      "filter": ["all", ["==", "CSDLDJ", "次干道"]],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#06244F",
        "line-width": {"base": 1.2, "stops": [[6, 0], [8, 0.5], [20, 8]]}
      }
    },
    {
      "id": "道路线-主干道",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 11.5,
      "maxzoom": 24,
      "filter": ["all", ["==", "CSDLDJ", "主干道"]],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#134590",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [10, 0.5], [20, 18]]}
      }
    },
    {
      "id": "道路线-县道",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 11.5,
      "maxzoom": 24,
      "filter": ["all", ["==", "GLXZDJ", "县道"]],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#134590",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [10, 0.5], [20, 18]]}
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
        "line-color": "#134590",
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
      "filter": ["all", ["in", "GLXZDJ", "国道", "高速公路", "国道（旧）"]],
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#134590",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 30]]}
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
        "visibility": "visible",
        "line-round-limit": 1,
        "line-miter-limit": 2
      },
      "paint": {
        "line-color": "rgba(3, 69, 144, 1)",
        "line-opacity": 1,
        "line-width": 2.5,
        "line-dasharray": [2],
        "line-offset": -4
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
        "line-color": "#7B7B7C",
        "line-opacity": 1,
        "line-width": 2,
        "line-dasharray": [1, 2],
        "line-offset": 0
      }
    },
    {
      "id": "建筑物",
      "type": "fill-extrusion",
      "source": "citybuilding",
      "source-layer": "FW_FangWu_A",
      "minzoom": 13,
      "filter": [
        "all",
        ["!=", "NAME", "如城国土资源所"]
      ],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-extrusion-color": "#161B36",
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
        "fill-extrusion-vertical-gradient": false,
        "fill-extrusion-pattern": {
          "stops": [[16, "午夜蓝8"], [19, "午夜蓝16"], [20, "午夜蓝8"]]
        }
      }
    },
    {
      "id": "建筑物-top",
      "type": "fill-extrusion",
      "source": "citybuilding",
      "source-layer": "FW_FangWu_A",
      "minzoom": 13,
      "filter": [
        "all",
        ["!=", "NAME", "如城国土资源所"]
      ],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-extrusion-color": "#161B36",
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
          ["*", 3, ["get", "Floor"]]
        ],
        "fill-extrusion-opacity": 1,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "铁路",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "DL_TieLu_L",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-color": "#02121A",
        "line-width": {"stops": [[15, 3], [16, 7]]}
      }
    },
    {
      "id": "铁路-白",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "DL_TieLu_L",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-color": "rgba(187, 191, 191, 1)",
        "line-width": {"stops": [[15, 3], [16, 5]]},
        "line-dasharray": [2, 2]
      }
    },
    {
      "id": "水域-河流-标注",
      "type": "symbol",
      "source": "block",
      "source-layer": "HL_HeiLiu_A",
      "filter": [
        "all",
        ["in", "NAME", "焦港河", "如泰运河", "如海运行", "丁堡河", "通扬运河", "长江"]
      ],
      "layout": {
        "text-field": "{NAME}",
        "text-font": ["Microsoft YaHei Regular"],
        "text-size": 13,
        "symbol-placement": "point",
        "text-anchor": "center",
        "text-justify": "center",
        "text-keep-upright": false,
        "symbol-z-order": "auto",
        "text-max-width": 10,
        "symbol-spacing": 250
      },
      "paint": {
        "text-color": "#2177C7",
        "text-halo-color": "#FFFFFF",
        "text-halo-width": 1.5,
        "text-translate-anchor": "map"
      }
    },
    {
      "id": "道路-国道标注",
      "type": "symbol",
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": ["all", ["in", "GLNO", "G40", "G15", "S28"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{TYPE}",
        "text-field": "{GLNO}",
        "text-offset": [0, 0],
        "text-size": 12,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "center",
        "icon-size": 1,
        "text-pitch-alignment": "map",
        "text-justify": "auto",
        "icon-pitch-alignment": "map",
        "symbol-spacing": 250,
        "text-line-height": 1.2,
        "text-max-angle": 45,
        "icon-rotation-alignment": "map",
        "icon-text-fit": "none",
        "icon-padding": 2
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(16, 16, 16, 1)",
        "text-halo-width": 2,
        "text-opacity": 1,
        "icon-halo-color": "#191B20",
        "text-translate-anchor": "map",
        "text-halo-color": "#FFFFFF"
      }
    },
    {
      "id": "道路-国道省道-copy",
      "type": "symbol",
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": ["all", ["in", "GLNO", "G204", "G345"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{TYPE}",
        "text-field": "{GLNO}",
        "text-offset": [0, 0],
        "text-size": 12,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "center",
        "icon-size": 1,
        "text-pitch-alignment": "map",
        "text-justify": "auto",
        "icon-pitch-alignment": "map",
        "symbol-spacing": 250,
        "text-line-height": 1.2,
        "text-max-angle": 45,
        "icon-rotation-alignment": "map",
        "icon-text-fit": "none",
        "icon-padding": 2
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(16, 16, 16, 1)",
        "text-halo-width": 2,
        "text-opacity": 1,
        "icon-halo-color": "#191B20",
        "text-translate-anchor": "map",
        "text-halo-color": "#FFFFFF"
      }
    },
    {
      "id": "道路-国道省道",
      "type": "symbol",
      "source": "roads",
      "source-layer": "DL_DaoLu_L",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": ["all", ["in", "GLNO", "S334", "S355", "S345", "S356", "S226"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{TYPE}",
        "text-field": "{GLNO}",
        "text-offset": [0, 0],
        "text-size": 12,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "center",
        "icon-size": 1,
        "text-pitch-alignment": "map",
        "text-justify": "auto",
        "icon-pitch-alignment": "map",
        "symbol-spacing": 250,
        "text-line-height": 1.2,
        "text-max-angle": 45,
        "icon-rotation-alignment": "map",
        "icon-text-fit": "none",
        "icon-padding": 2
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(16, 16, 16, 1)",
        "text-halo-width": 2,
        "text-opacity": 1,
        "icon-halo-color": "#191B20",
        "text-translate-anchor": "map",
        "text-halo-color": "#FFFFFF"
      }
    },
    {
      "id": "兴趣点-水系设施",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 18,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "闸坝", "泵站", "变电所"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{CLASSIFY}",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-企业",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": ["all", ["==", "CLASSIFY", "企业"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "企业",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-居民点",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "居民点", "住宅区"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "none",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-image": "{CLASSIFY}",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-组织",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "行政组织", "工业开发区"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-image": "行政组织",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-体育场广场",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "购物中心", "体育场", "超市"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{CLASSIFY}",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-宗教纪念地",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "寺庙", "宗教"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-image": "{CLASSIFY}",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-交通",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        ["in", "CLASSIFY", "出入口", "渡口", "火车站", "飞机场", "加油站", "汽车站", "收费站"]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-image": "{CLASSIFY}",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-教育",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "学校", "大学"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{CLASSIFY}",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-事业单位",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "CLASSIFY",
          "殡仪馆",
          "福利院",
          "公检法机构",
          "派出所",
          "图书馆",
          "消防",
          "政府机构",
          "博物馆",
          "文化组织"
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "text-pitch-alignment": "auto",
        "symbol-z-order": "auto",
        "icon-ignore-placement": true,
        "icon-optional": false,
        "icon-rotation-alignment": "map",
        "icon-text-fit": "none",
        "icon-keep-upright": true,
        "icon-pitch-alignment": "auto",
        "icon-allow-overlap": true,
        "icon-image": "{CLASSIFY}",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000",
        "icon-translate-anchor": "viewport"
      }
    },
    {
      "id": "兴趣点-医疗",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "医院", "红十字", "兽医", "卫生所"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{CLASSIFY}",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-风景名胜区",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 10.5,
      "maxzoom": 24,
      "filter": ["all", ["in", "CLASSIFY", "风景名胜区", "人物纪念地", "公园", "陵园", "墓地"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-image": "{CLASSIFY}",
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-政府机构",
      "type": "symbol",
      "source": "poi",
      "source-layer": "DMDZBZ",
      "minzoom": 10.5,
      "maxzoom": 24,
      "filter": ["all", ["==", "CLASSIFY", "政府机关"]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "政府机关",
        "text-field": "{NAME}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-size": 0.8
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#EBEBEB",
        "text-halo-width": 1,
        "text-halo-color": "#000000"
      }
    },
    {
      "id": "兴趣点-level-country",
      "type": "symbol",
      "source": "poi",
      "source-layer": "loc_point",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": ["all", ["==", "TYPE", 22200]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{TYPE}",
        "text-field": "{MapName}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "none",
        "icon-offset": [6, 0],
        "icon-anchor": "right"
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "#DBDBDC",
        "text-halo-width": 1,
        "text-halo-color": "#0A141C"
      }
    },
    {
      "id": "兴趣点-level-towm",
      "type": "symbol",
      "source": "poi",
      "source-layer": "loc_point",
      "minzoom": 0,
      "maxzoom": 10.57,
      "filter": ["all", ["==", "TYPE", 21500]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{TYPE}",
        "text-field": "{MapName}",
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
        "text-color": "#00070D",
        "text-halo-width": 1.5,
        "text-halo-color": "#FFFFFF"
      }
    }
  ],
  "id": "hrmq9na14"
}