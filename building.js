class Building {
  constructor(map) {
    this.map = map;
  }
  add(data) {
    let map = this.map;
    function assignUVs(geometry, len) {
      geometry.computeBoundingBox();
      const max = geometry.boundingBox.max;
      const min = geometry.boundingBox.min;
      const offset = new THREE.Vector2(0 - min.x, 0 - min.y);
      const range = new THREE.Vector2(max.x - min.x, max.y - min.y);
      const faces = geometry.faces;
      geometry.faceVertexUvs[0] = [];
      for (let i = 0; i < len * 2; i++) {
        if(faces[i]){
          let v1 = geometry.vertices[faces[i].a],
          v2 = geometry.vertices[faces[i].b],
          v3 = geometry.vertices[faces[i].c];
        geometry.faceVertexUvs[0].push([
          new THREE.Vector2(
            (v1.x + offset.x) / range.x,
            (v1.y + offset.y) / range.y
          ),
          new THREE.Vector2(
            (v2.x + offset.x) / range.x,
            (v2.y + offset.y) / range.y
          ),
          new THREE.Vector2(
            (v3.x + offset.x) / range.x,
            (v3.y + offset.y) / range.y
          )
        ]);
        }
        
      }
      let faceuv = [
        new THREE.Vector2(0, 1),
        new THREE.Vector2(1, 1),
        new THREE.Vector2(1, 0),
        new THREE.Vector2(0, 0)
      ];
      for (let i = len - 3; i < len * 4; i++) {
        geometry.faceVertexUvs[0][i * 2 + 0] = [
          faceuv[0],
          faceuv[1],
          faceuv[3]
        ];
        geometry.faceVertexUvs[0][i * 2 + 1] = [
          faceuv[1],
          faceuv[2],
          faceuv[3]
        ];
      }
      geometry.uvsNeedUpdate = true;
    }
    map.addLayer({
      id: "custom_layer2",
      type: "custom",
      renderingMode: "3d",
      onAdd: function(map, mbxContext) {
        Threebox.prototype.defaultLights = function() {
          this.scene.add(new THREE.AmbientLight(0xccccff, 2));
          let sunlight = new THREE.DirectionalLight(0xffffff, 0.25);
          sunlight.position.set(0, 8000, 10000);
          sunlight.matrixWorldNeedsUpdate = true;
          this.world.add(sunlight);
        };
        window.tb = new Threebox(map, mbxContext, { defaultLights: true });
        
        data.features.forEach(fea => {
            const extrudeSettings = {
                depth: fea.properties.Floors*0.1,
                steps: 1,
                bevelEnabled: false
              };
          let bs = fea.geometry.coordinates[0][0];
          let points = fea.geometry.coordinates[0].map(item => {
            let x = (item[0] - bs[0]) * 3100;
            let y = (item[1] - bs[1]) * 3100;
            return new THREE.Vector2(x, y);
          });
          let rectShape = new THREE.Shape(points);
          let geometry = new THREE.ExtrudeGeometry(rectShape, extrudeSettings);
          let materialTop = new THREE.MeshLambertMaterial({
            transparent: true,
            opacity: 0.8,
            overdraw: true,
            map: new THREE.TextureLoader().load("building_top.png"),
            side: THREE.DoubleSide
          });
          let textureWall = new THREE.TextureLoader().load("building.png");
          textureWall.wrapS = THREE.RepeatWrapping;
          textureWall.wrapT = THREE.RepeatWrapping;

          let materialWall = new THREE.MeshPhongMaterial({
            color: 0x666666,
            transparent: true,
            opacity: 0.8,
            map: textureWall,
            overdraw: true,
            side: THREE.DoubleSide
          });
          const material = new THREE.MeshFaceMaterial([
            materialTop,
            materialWall
          ]);

          assignUVs(geometry, points.length);
          let mesh = new THREE.Mesh(geometry, material);
          mesh.rotateZ(Math.PI);
          tb.Object3D({ obj: mesh }).setCoords(bs);
          tb.add(mesh);
        });
      },

      render: function(gl, matrix) {
        tb.update();
        map.triggerRepaint();
      }
    });
  }
}
