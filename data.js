var APP_DATA = {
  "scenes": [
    {
      "id": "0-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.05427081520038968,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.7641753307757586,
          "pitch": 0.023573572002707266,
          "rotation": 0.7853981633974483,
          "target": "1-passerelle-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-passerelle-1",
      "name": "Passerelle 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5318863196695638,
          "pitch": 0.135053210589426,
          "rotation": 6.283185307179586,
          "target": "2-passerelle-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-passerelle-2",
      "name": "Passerelle 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01332268266264336,
          "pitch": 0.2912286056836937,
          "rotation": 6.283185307179586,
          "target": "3-passerelle-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-passerelle-3",
      "name": "Passerelle 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02589134515436342,
          "pitch": 1.2951980677146935,
          "rotation": 0,
          "target": "4-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bottom",
      "name": "Bottom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03590609388673904,
          "pitch": -1.4734117561847704,
          "rotation": 12.566370614359176,
          "target": "5-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-top",
      "name": "Top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0600161754022643,
          "pitch": 0.2291004829422736,
          "rotation": 0,
          "target": "0-office"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Silo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
