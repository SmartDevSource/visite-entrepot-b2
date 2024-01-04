var APP_DATA = {
  "scenes": [
    {
      "id": "0-entree-entrepot",
      "name": "ENTREE ENTREPOT",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.965538720452887,
        "pitch": 0.1445311379138694,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.987735435801495,
          "pitch": 0.12088731138778641,
          "rotation": 0,
          "target": "1-poste-de-garde-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-poste-de-garde-",
      "name": "POSTE DE GARDE ",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0298414984843873,
        "pitch": 0.009761022062601654,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.8307141912947387,
          "pitch": 0.13091028925643577,
          "rotation": 0,
          "target": "2-facade-entrepot"
        },
        {
          "yaw": -0.496284712744929,
          "pitch": 0.07027552192198172,
          "rotation": 0,
          "target": "0-entree-entrepot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-facade-entrepot",
      "name": "FACADE ENTREPOT",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.073800895771166,
        "pitch": -0.04183165206188022,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 3,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.5499615158941609,
          "pitch": 0.08380544838523463,
          "rotation": 0,
          "target": "3-entree-personel"
        },
        {
          "yaw": -2.8637899825666118,
          "pitch": 0.2364613694347728,
          "rotation": 0,
          "target": "1-poste-de-garde-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3330897703741904,
          "pitch": -0.1663513650117565,
          "title": "ENTREE PERSONEL",
          "text": "L'ENTREE DU PERSONEL EST A GAUCHE"
        }
      ]
    },
    {
      "id": "3-entree-personel",
      "name": "ENTREE PERSONEL",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 2.5,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.2932411892805291,
          "pitch": -0.0015502286164412737,
          "rotation": 1.5707963267948966,
          "target": "4-salle-de-repos--refectoire"
        },
        {
          "yaw": 2.2488948679718312,
          "pitch": 0.19075665740147585,
          "rotation": 0,
          "target": "2-facade-entrepot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salle-de-repos--refectoire",
      "name": "SALLE DE REPOS / REFECTOIRE",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "backViewParameters": {
        "yaw": -3.12,
        "pitch": 0.09,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.02406493066477111,
          "pitch": 0.049524084179607186,
          "rotation": 4.71238898038469,
          "target": "5-vestiaire"
        },
        {
          "yaw": 3.0921259516013784,
          "pitch": 0.19440287415338453,
          "rotation": 0,
          "target": "3-entree-personel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1356841738400067,
          "pitch": -0.03506621182432568,
          "title": "RESTAURATION",
          "text": "RESTAURATION DISPONIBLE SUR PLACE"
        }
      ]
    },
    {
      "id": "5-vestiaire",
      "name": "VESTIAIRE",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.1480731904960848,
        "pitch": 0.10247028793968482,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 0.69,
        "pitch": 0.10,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.0352469505012785,
          "pitch": 0.1084497136993825,
          "rotation": 0,
          "target": "6-acces-entrepot"
        },
        {
          "yaw": 0.6168048264042891,
          "pitch": 0.13022764359769923,
          "rotation": 0,
          "target": "4-salle-de-repos--refectoire"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8288862953605474,
          "pitch": -0.05262460019082482,
          "title": "Vestiaire entrepôt",
          "text": ""
        }
      ]
    },
    {
      "id": "6-acces-entrepot",
      "name": "ACCES ENTREPOT",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.1103402333004997,
        "pitch": 0.15377860460309378,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 1.41,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.066487299075531,
          "pitch": 0.14235568828283718,
          "rotation": 0,
          "target": "12-cellule-c---zone-attente"
        },
        {
          "yaw": 1.3947353374272922,
          "pitch": 0.15060328758093533,
          "rotation": 0,
          "target": "5-vestiaire"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cellule-a---store-banne-",
      "name": "CELLULE A - STORE BANNE ",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.68,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 0.68,
        "pitch": -0.07,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.507219246657705,
          "pitch": 0.07750039222568006,
          "rotation": 0,
          "target": "8-cellule-a---kto"
        },
        {
          "yaw": -1.6020433648143122,
          "pitch": 0.15639723923849225,
          "rotation": 0,
          "target": "11-cellule-b---reception--store-banne"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cellule-a---kto",
      "name": "CELLULE A - KTO",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1326846744205277,
        "pitch": 0.07970542978809902,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 2.5,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.4536884304367659,
          "pitch": 0.051471995734665654,
          "rotation": 0,
          "target": "7-cellule-a---store-banne-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cellule-b---store-banne-1",
      "name": "CELLULE B - STORE BANNE 1",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.96,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 1.96,
        "pitch": 0,
        "fov": 1.4010588678110822
      },

      "linkHotspots": [
        {
          "yaw": -1.5461202428568424,
          "pitch": 0.09575330151198003,
          "rotation": 0,
          "target": "14-cellule-c---plan-incline"
        },
        {
          "yaw": 1.592478810684435,
          "pitch": 0.04801027074496034,
          "rotation": 0,
          "target": "11-cellule-b---reception--store-banne"
        },
        {
          "yaw": 0.029706465125983073,
          "pitch": 0.0029715636431113523,
          "rotation": 0,
          "target": "10-cellule-b---store-banne-interieur-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cellule-b---store-banne-interieur-b",
      "name": "CELLULE B - STORE BANNE INTERIEUR B",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.051678439129434,
          "pitch": 0.11921381427271882,
          "rotation": 0,
          "target": "9-cellule-b---store-banne-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cellule-b---reception--store-banne",
      "name": "CELLULE B - RECEPTION / STORE BANNE",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.90,
        "pitch": -0.08,
        "fov": 1.5707963267948966
      },
      "backViewParameters": {
        "yaw": 2.5,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.5738922289449055,
          "pitch": 0.08260116448510679,
          "rotation": 0,
          "target": "9-cellule-b---store-banne-1"
        },
        {
          "yaw": -1.5614359346515485,
          "pitch": 0.12590007093193734,
          "rotation": 0,
          "target": "7-cellule-a---store-banne-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cellule-c---zone-attente",
      "name": "CELLULE C - ZONE D'ATTENTE",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.101842963291382,
        "pitch": 0.14156357107735218,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": -2.37,
        "pitch": 0.06,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.42896897205414675,
          "pitch": 0.15177301862089188,
          "rotation": 0,
          "target": "6-acces-entrepot"
        },
        {
          "yaw": -3.117707224530008,
          "pitch": 0.15509195486828276,
          "rotation": 0,
          "target": "13-cellule-c---packing-flux-lhn-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cellule-c---packing-flux-lhn-",
      "name": "CELLULE C - PACKING FLUX L/HN ",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.7730221923378515,
        "pitch": 0.03270445536441002,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 0.71,
        "pitch": 0.01,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.565638478078049,
          "pitch": 0.08368883090378887,
          "rotation": 0,
          "target": "14-cellule-c---plan-incline"
        },
        {
          "yaw": 3.22,
          "pitch": 0.10026881925820597,
          "rotation": 0,
          "target": "12-cellule-c---zone-attente"
        },
        {
          "yaw": -1.5854419331277505,
          "pitch": 0.10026881925820597,
          "rotation": 0,
          "target": "15-cellule-d---masse-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-cellule-c---plan-incline",
      "name": "CELLULE C - PLAN INCLINE",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.67,
        "pitch": -0.044,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": -1.59,
        "pitch": 0.05,
        "fov": 1.4010588678110822
      },

      "linkHotspots": [
        {
          "yaw": -1.6230161291032275,
          "pitch": 0.1053132169050599,
          "rotation": 0,
          "target": "13-cellule-c---packing-flux-lhn-"
        },
        {
          "yaw": 1.5718426781583803,
          "pitch": 0.10025989038954641,
          "rotation": 0,
          "target": "9-cellule-b---store-banne-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-cellule-d---masse-1",
      "name": "CELLULE D - MASSE 1",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5917402778188183,
        "pitch": 0.040483034409733776,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 1.60,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.5356646973386088,
          "pitch": 0.07137445799710385,
          "rotation": 0,
          "target": "13-cellule-c---packing-flux-lhn-"
        },
        {
          "yaw": -1.5889951360824242,
          "pitch": 0.08453623459601545,
          "rotation": 0,
          "target": "16-cellule-d---masse-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-cellule-d---masse-2",
      "name": "CELLULE D - MASSE 2",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6811609022159395,
        "pitch": 0.004765506353098914,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 1.62,
        "pitch": 0.01,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.5837607939113738,
          "pitch": 0.06890315440397288,
          "rotation": 0,
          "target": "17-cellule-e---rack-1"
        },
        {
          "yaw": 1.5383744029753448,
          "pitch": 0.12003830039433794,
          "rotation": 0,
          "target": "15-cellule-d---masse-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-cellule-e---rack-1",
      "name": "CELLULE E - RACK 1",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.7854056712271884,
        "pitch": 0.022224655522471437,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": -1.141,
        "pitch": 0.08,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.5876518788663443,
          "pitch": 0.18512377306442573,
          "rotation": 0,
          "target": "16-cellule-d---masse-2"
        },
        {
          "yaw": 1.4784244710611176,
          "pitch": 0.14015869995233388,
          "rotation": 0,
          "target": "18-cellule-e---rack-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-cellule-e---rack-2",
      "name": "CELLULE E - RACK 2",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.737195975708854,
        "pitch": 0.016258786381143864,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 1.59,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.5978306948683123,
          "pitch": 0.09916440118014869,
          "rotation": 0,
          "target": "17-cellule-e---rack-1"
        },
        {
          "yaw": -1.4999980281360052,
          "pitch": 0.2095329144923852,
          "rotation": 0,
          "target": "19-cellule-e---rack-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-cellule-e---rack-3",
      "name": "CELLULE E - RACK 3",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.4675530744211933,
        "pitch": 0.09752721838300182,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 1.59,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.5450211256365947,
          "pitch": 0.08920919483861667,
          "rotation": 0,
          "target": "20-cellule-f"
        },
        {
          "yaw": 1.5634519783398222,
          "pitch": 0.10429168898018659,
          "rotation": 0,
          "target": "18-cellule-e---rack-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-cellule-f",
      "name": "CELLULE F",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.38,
        "pitch": -0.29,
        "fov": 1.4010588678110822
      },
      "backViewParameters": {
        "yaw": 0.29,
        "pitch": -0.20,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.4733371536248985,
          "pitch": 0.02458769330262811,
          "rotation": 0,
          "target": "19-cellule-e---rack-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VISITE ENTREPOT B2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
