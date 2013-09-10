var maps = {};

maps.first = {
    "name":"start",
    "sprite": {
        "file":"sprites-16x16.png",
        "size":16,
        "config": {
            "0": {
                "2": {
                    "type":'door'
                }
            },
            "1": {
                "2": 'wall',
                "9": 'floor'
            }
        }
    },
    "tiles": [
        [ [1,2],[1,2],[1,2],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,2],[0,2],[1,2] ]
    ],
    "config": {
        "8": {
            "2": {
                "goTo": [ "gochest",1,2]
            }
        }
    },
    "start": [1,1],
};

maps.gochest = {
    "name":"chest",
    "sprite": {
        "file":"sprites-16x16.png",
        "size":16,
        "config": {
            "0": {
                "2": {
                    "type":'door'
                }
            },
            "1": {
                "2": 'wall',
                "9": 'floor'
            }
        }
    },
    "tiles": [
        [ [1,2],[1,2],[0,2],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[0,2] ],
        [ [1,2],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,2],[1,2],[1,2] ]
    ],
    "entities": [
        {
            "name":'a-chest',
            "x": 2 * 16,
            "y": 7 * 16,
            "autoDraw": true,
            "open": false,
            "type":"chest",
            "sprite": {
                "row": 2,
                "col": 4
            },
            "opened": {
                "row": 2,
                "col": 5
            },
            "item": {
                "name":"first-key",
                "sprite": {
                    "row": 3,
                    "col": 4
                }
            }
        },
    ],
    "config": {
        "0": {
            "2": {
                "goTo": ["first",7,2]
            }
        },
        "6": {
             "3": {
                 "goTo": ["gomonster",1,1]
             }
        }
    }
};


maps.gomonster= {
    "name":"gomonster",
    "sprite": {
        "file":"sprites-16x16.png",
        "size":16,
        "config": {
            "0": {
                "2": {
                    "type":'door'
                }
            },
            "1": {
                "2": 'wall',
                "9": 'floor'
            }
        }
    },
    "start": [1,1],
    "tiles": [
        [ [1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2] ],
        [ [0,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,2] ],
        [ [1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2] ]
    ],
    "entities": [
        {
            "name":"amonster",
            "x":7 * 16,
            "y":10 * 16,
            "attack": 2,
            "defense": 2,
            "type":"monster",
            "autoDraw": true,
            "life": 4,
            "maxLife": 4,
            "sprite": {
                "row": 3,
                "col":5
            }
        }
    ],
    "config": {
        "1": {
            "0": {
                "goTo": ["gochest",6,2]
            }
        }
    }
};

