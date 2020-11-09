var data = {};
temp1.items.forEach((e) => {
  data[e.file.sprite_info.class_name] = {
    width: e.width,
    height: e.height,
    x: e.x,
    y: e.y,
    pixelRatio: 1,
    visible: true,
  };
});
JSON.stringify(data);
