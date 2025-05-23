

//?source=Main-Gate&destination=A-block
//?source=Main-Gate&destination=Canteen

const predefinedPaths = {
    "Main-Gate-B-Block": [
        { x: 95, y: 654},  // Main-Gate
       // { x: 300, y: 180 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1018, y: 654 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1011, y: 709 }   //B-Block 
    ],
    "Main-Gate-C-Block": [
        { x: 152, y: 655 },  // 📍 Main-Gate
        { x: 283, y: 652},  // 🔴 Fake location (Hidden waypoint)
         { x: 287, y: 413 },  // 🔴 Fake location (Hidden waypoint)
        { x: 607, y: 283 }   // 📍 C-Block
    ],
    "Main-Gate-A-Block": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 577, y: 648 },  // 🔴 Fake location (Hidden waypoint)
        { x: 579, y: 690 }   // A-Block
    ],
    "Main-Gate-Admission-Office": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 283, y: 652},  // 🔴 Fake location (Hidden waypoint)
        { x: 288, y: 424},  // 🔴 Fake location (Hidden waypoint)
        { x: 258, y: 440}   //Admission-Office 
    ],
    "Main-Gate-Boys-Hostel": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 1311, y: 647},  // 🔴 Fake location (Hidden waypoint)
        { x: 1312, y: 675}   // Boys-Hostel
    ],
    "Main-Gate-Girls-Hostel": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 289, y: 654},  // 🔴 Fake location (Hidden waypoint)
        { x: 294, y: 916}   // Girls-Hostel
    ],
    "Main-Gate-Canteen": [
        { x: 152,y:655},  // Main-Gate
        { x: 853, y: 646 },  // 🔴 Fake location (Hidden waypoint)
        { x: 853, y: 435},  // 🔴 Fake location (Hidden waypoint)
        { x: 826, y: 431}   // Canteen
    ],
    "Main-Gate-Playground": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 1016, y: 646},  // 🔴 Fake location (Hidden waypoint)
        { x: 1016, y: 627}   // Playground
    ],
    "Main-Gate-Basketball-Ground": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 853, y: 646},  // 🔴 Fake location (Hidden waypoint)
        { x: 853, y: 314},  // 🔴 Fake location (Hidden waypoint)
        { x: 883, y: 310}   // Basketball-Ground
    ], 
    "Main-Gate-Cricket-Net": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 854, y: 639},  // 🔴 Fake location (Hidden waypoint)
        { x: 851, y: 50},  // 🔴 Fake location (Hidden waypoint)
        { x: 1163, y: 37},  // 🔴 Fake location (Hidden waypoint)
        { x: 1175, y: 108},  // 🔴 Fake location (Hidden waypoint)
        { x: 1215,y:105}      //Circket Ne
    ],
     "Main-Gate-Cricket-Ground": [
        { x: 152, y: 655 },  // Main-Gate
        { x: 1442, y: 648},  // 🔴 Fake location (Hidden waypoint)
        { x: 1442, y: 613}   // Cricket-Ground
    ],
    "Main-Gate-Stationary": [
        { x: 151, y: 653 },  // Main-Gate 
        {x: 773, y: 652},  // 🔴 Fake location (Hidden waypoint)
        { x: 777, y: 738}   // Stationary and juice shop
    ],
    "Main-Gate-Temple": [
        { x: 150, y: 654 },  // Main-Gate
        { x: 578, y: 647},  // 🔴 Fake location (Hidden waypoint)
        { x: 578, y: 450}   // Gate-Temple
    ],
    "Main-Gate-Bus-Parking": [
        { x: 144, y: 654 },  // Main-Gate
        { x: 61, y: 659},  // 🔴 Fake location (Hidden waypoint)
        { x: 61, y: 802}   //Bus-Parking
    ],
    "Main-Gate-Sports-Room": [
        { x: 152, y: 654 },  // Main-Gate
        { x: 1294, y: 645},  // 🔴 Fake location (Hidden waypoint)
        { x: 1294, y: 583}   //Sports-Room
    ],
    "Main-Gate-Auditorium": [
        { x: 152, y: 654},  //Main-Gate
        { x: 1180, y: 643},  // Hidden waypoint
        { x: 1185, y:266 },   //Auditorium
    ],
    



    "B-Block-A-Block": [
        { x: 1008, y: 711 },  // B-Block
        { x:1008, y: 650 },  // 🔴 Fake location (Hidden waypoint)
        { x: 574, y: 640 }   // A-Block
    ],
    "B-Block-C-Block": [
        { x: 1008, y: 707 },  // B-Block
        { x: 1008, y: 645 },  // Hidden waypoint
        { x: 851, y: 644 },  // Hidden waypoint
        { x: 851, y: 516 } ,  // Hidden waypoint
        { x: 755, y: 504 },  // 🔴 Fake location (Hidden waypoint)
        { x: 753, y: 430 },  // 🔴 Fake location (Hidden waypoint)
        { x: 594, y: 426 }, // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 397},  // 🔴 Fake location (Hidden waypoint)
        { x: 570, y: 392 },  // 🔴 Fake location (Hidden waypoint)
        { x: 570, y: 305 },  // 🔴 Fake location (Hidden waypoint)
        { x: 617, y: 287 }, // C-Block  
    ],
    "B-Block-Main-Gate": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 151, y: 649 }   // Main-Gate
    ],
    "B-Block-Admission-Office": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650},  // Hidden waypoint
        { x: 289 ,y: 651},  // Hidden waypoint
        { x: 289 ,y: 433},  // Hidden waypoint
        { x: 263, y: 438},  // Admission-Office
    ],
    "B-Block-Boys-Hostel": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650},  // Hidden waypoint
        { x: 1289, y: 647 },  // Hidden waypoint
        { x: 1289, y: 673}   // Boys-Hostel
    ],
    "B-Block-Girls-Hostel": [
        { x: 1008, y: 711},  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 289, y: 650 },  // Hidden waypoint
        { x: 289, y: 916 }   // Girls-Hostel
    ],
    "B-Block-Canteen": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650},  // Hidden waypoint
        { x: 853, y: 644},  // Hidden waypoint
        { x: 853, y: 428},  // Hidden waypoint
        { x: 803, y: 411}   // Canteen  
    ],
    "B-Block-Playground": [
        { x: 1008, y: 711},  // B-Block
        { x: 1008, y: 630 }   // Playground
    ],
    "B-Block-Basketball-Ground": [
        { x: 982, y: 716 },  // B-Block
        { x: 977, y: 499 }   // Basketball-Ground
    ], 
    "B-Block-Cricket-Net": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 853,  y: 644 },  // Hidden waypoint
        { x: 850,  y: 40 },  // Hidden waypoint
        { x: 1241, y: 48},  // Hidden waypoint
        { x: 1241, y: 85}   // Cricket-Net
    ],
    "B-Block-Cricket-Ground": [
        { x: 1008, y: 704 },  // B-Block
        { x: 1014, y: 653},  // Hidden waypoint
        { x: 1432, y: 639 },  // Hidden waypoint
        { x: 1432, y: 613}   // Cricket-Ground
    ],
    "B-Block-Stationary": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 767, y: 645 },  // Hidden waypoint
        { x: 784, y: 734}   // Stationary
    ],
    "B-Block-Temple": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 575, y: 642 },  // Hidden waypoint
        { x: 575, y: 445}   //Temple
    ],
    "B-Block-Bus-Parking": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 1439, y: 644 },  // Hidden waypoint
        { x: 1439, y: 618}   //Bus-Parking
    ],
    "B-Block-Sports-Room": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 1303, y: 645},  // Hidden waypoint
        { x: 1303, y: 581}   //Sports-Room
    ],
    "B-Block-Auditorium": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 1181, y: 644},  // Hidden waypoint
        { x: 1181, y: 266}   //Auditorium
    ],
    


    "A-Block-B-Block": [
        { x: 578, y: 643 },  // A-Block
        { x: 1012, y: 647 },  // (Hidden waypoint)
        { x: 1012, y: 709 }   // B-Block
    ],
    "A-Block-C-Block": [
        { x: 578, y: 643 },  // A-Block
        { x: 576, y: 460},  // Hidden waypoint
        { x: 601, y: 455 },  // Hidden waypoint
        { x: 597, y: 401 } ,  // C-Block
        { x: 575, y: 402 },  // (Hidden waypoint)
        { x: 575, y: 304 },  // (Hidden waypoint)
        { x: 611, y: 279 } // C-Block
        
    ],
    "A-Block-Main-Gate": [
        { x: 578, y: 643 },  // A-Block
        { x: 152, y: 649 }   // Main-Gate
    ],
    "A-Block-Admission-Office": [
        { x: 578, y: 643  },  // A-Block
        { x: 285, y: 650 },  // Hidden waypoint
        { x: 285, y: 428 },  // Hidden waypoint
        { x: 266, y: 443 }  // Admission-Office
    ],
    "A-Block-Boys-Hostel": [
        { x:578 , y:643  },  //A-Block
        { x:1318, y:647 },  // Hidden waypoint
        { x:1318, y:676 }   // Boys-Hostel
    ],
    "A-Block-Girls-Hostel": [
        { x: 578, y:643 },  //A-Block
        { x: 285, y:650  },  // Hidden waypoint
        { x:295 , y:917 }  // Girls-Hostel
    ],
    "A-Block-Canteen": [
        { x: 578, y: 643 },  //A-Block
        { x: 855, y: 649 },  // Hidden waypoint
        { x: 855, y: 427 },  // Hidden waypoint
        { x:827 , y: 430 }  // Canteen  
    ],
    "A-Block-Playground": [
        { x: 578, y: 643 },  //A-Block
        { x: 855, y: 649 },  // Hidden waypoint
        { x: 852, y: 598 },  // Hidden waypoint
        { x: 852, y: 604 }   // Playground
    ],
    "A-Block-Basketball-Ground": [
        { x: 578, y: 643 },  // A-Block
        { x: 855, y: 649 },  // Hidden waypoint
        { x: 855, y: 427  },  // Hidden waypoint
        { x: 855, y :425  }   // Basketball-Ground
    ], 
    "A-Block-Cricket-Net": [
        { x: 580, y: 643 },  // A-Block
        { x: 856, y: 640 },  // Hidden waypoint
        { x: 852, y: 49 },  // Hidden waypoint
        { x: 1277, y: 37  },  // Hidden waypoint
        { x: 1287, y: 72 }   // Cricket-Net
    ],
    "A-Block-Cricket-Ground": [
        { x: 578, y: 643  },  //A-Block
        { x: 1444, y: 647 },  // Hidden waypoint
        { x: 1444, y: 617}   // Cricket-Ground
    ],
    "A-Block-Stationary": [
        { x: 578, y: 643 },  // A-Block
        { x: 778, y: 652 },  // Hidden waypoint
        { x: 783, y: 731 }   // Stationary
    ],
    "A-Block-Temple": [
        { x: 578 , y: 643  },  //A-Block
        { x: 575, y: 437}   //Temple
    ],
    "A-Block-Bus-Parking": [
        { x: 578, y: 643 },  // A-Block
        { x: 61, y: 657 },  // Hidden waypoint
        { x: 61, y: 795}   //Bus-Parking
    ],
    "A-Block-Sports-Room": [
        { x: 578, y: 643 },  // A-Block
        { x: 1295, y: 652  },  // Hidden waypoint
        { x: 1295, y: 623}   //Sports-Room
    ],
    "A-Block-Auditorium": [
        { x: 578 , y: 643 },  // A-Block
        { x: 1184, y: 646  },  // Hidden waypoint
        { x: 1184, y: 278 }   //Auditorium
    ],

    "C-Block-B-Block": [
        { x:607 , y: 281 },  // C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854, y: 509 },  // 🔴 Fake location (Hidden waypoint)
        { x: 852, y: 647 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1016, y: 650 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1016, y:712 }   // B-Block
    ],

    "C-Block-A-Block": [
        { x: 607, y: 281 },  // C-Block
        { x: 568, y: 311 },  // Hidden waypoint
        { x: 568, y: 399 },  // Hidden waypoint
        { x: 601, y: 424} ,  // C-Block
        { x: 601, y: 425} ,  // C-Block
        { x: 581, y: 454 },  // 🔴 Fake location (Hidden waypoint)
        { x: 578, y:643 } // A-Block
        
    ],
    "C-Block-Main-Gate": [
        { x:607, y:281 },  // C-Block
        { x:298, y:406 },  // Hidden waypoint
        { x:298, y:653 },  // Hidden waypoint
        { x:152, y:655  }   // Main-Gate
    ],
    "C-Block-Admission-Office": [
        { x:607, y:281 },  // C-Block
        { x: 257, y:434 }  // Admission-Office
    ],
    "C-Block-Boys-Hostel": [
        { x: 607 , y: 281 },  //C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854, y: 509 },  // 🔴 Fake location (Hidden waypoint)
        { x: 852, y: 647 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1284, y:649 },  // Hidden waypoint
        { x:1284 , y:677 }   // Boys-Hostel
    ],
    "C-Block-Girls-Hostel": [
        { x:607, y:281},  //C-Block
        { x:298, y:406 },  // Hidden waypoint
        { x:298, y:911 }  // Girls-Hostel
    ],
    "C-Block-Canteen": [
        { x:607 , y: 281 },  // C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854, y: 509 },  // 🔴 Fake location (Hidden waypoint)
        { x: 845,  y:460  },  // Hidden waypoint
        { x: 830 , y: 463 }  // Canteen  
    ],
    "C-Block-Playground": [
        { x: 607, y: 281 },  //C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854, y: 509 },  // 🔴 Fake location (Hidden waypoint)
        { x: 890, y: 512 }   // Playground
    ],
    "C-Block-Basketball-Ground": [
        { x: 607 , y: 281 },  // C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854 , y: 509 },  // Hidden waypoint
        { x: 912, y: 489 }   // Basketball-Ground
    ], 
    "C-Block-Cricket-Net": [
        { x:609, y:283},  // C-Block
        { x:573, y:315  },  // Hidden waypoint
        { x:571, y:397  },  // Hidden waypoint
        { x:601, y:398  },  // Hidden waypoint
        { x:601, y: 426},  // Hidden waypoint
        { x:751, y:427 },  // Hidden waypoint
        { x:752, y:334 },  // Hidden waypoint
        { x:846, y:332  },  // Hidden waypoint
        { x:855, y:50},  // Hidden waypoint
        { x:1170, y:38},  // Hidden waypoint
        { x:1170, y:109},  // Hidden waypoint
        { x:1214 , y:109 }   // Cricket-Net
    ],
    "C-Block-Cricket-Ground": [
        { x: 607 , y: 281 },  // C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854, y: 509 },  // 🔴 Fake location (Hidden waypoint)
        { x: 852, y: 647 },  // 🔴 Fake location (Hidden waypoint
        { x: 1439, y:648  },  // Hidden waypoint
        { x: 1439, y: 607}   // Cricket-Ground
    ],
    "C-Block-Stationary": [
        { x:607 , y: 281 },  // C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 577, y: 636 },  //  (Hidden waypoint)
        { x:774 , y: 651 },  // Hidden waypoint
        { x: 776, y:721 },  // Hidden waypoint
    ],
    "C-Block-Temple": [
        { x: 607, y:281  },  //C-Block
        { x: 572, y:303 },  // Hidden waypoint
        { x:572, y:404}   //Temple
    ],
    "C-Block-Bus-Parking": [
        { x:607 , y:281 },  //C-Block
        { x:298 , y:406  },  // Hidden waypoint
        { x:298 , y:653 },  // Hidden waypoint
        { x: 63, y: 653},  //  Hidden waypoint
        { x: 61, y: 795},  // Bus-Parking
        
    ],
    "C-Block-Sports-Room": [
        { x:607 , y: 281 },  // C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854, y: 509 },  // 🔴 Fake location (Hidden waypoint)
        { x: 852, y: 647 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1287, y:648 },  // Hidden waypoint
        { x: 1287, y:582}   //Sports-Room
    ],
    
    "C-Block-Auditorium": [
        { x:607 , y: 281 },  // C-Block
        { x: 568, y: 311  },  // 🔴 Fake location (Hidden waypoint)
        { x: 568, y: 399 },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 396  },  // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 424  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y: 425  },  // 🔴 Fake location (Hidden waypoint)
        { x: 752, y:507  },  // 🔴 Fake location (Hidden waypoint)
        { x: 854, y: 509 },  // 🔴 Fake location (Hidden waypoint)
        { x: 852, y: 647 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1184, y:645 },  // Hidden waypoint
        { x: 1186, y:272 }   //Auditorium
    ],

    "Admission-Office-B-Block": [
        { x:259 , y: 456 },  //  Admission-Office
        { x:288 , y: 477  },  // 🔴 Fake location (Hidden waypoint)
        { x:288 , y: 652 },  // 🔴 Fake location (Hidden waypoint)
        { x:1011, y:645 },  // 🔴 Fake location (Hidden waypoint)
        { x:1011 , y:705 }   // B-Block
    ],
    "Admission-Office-C-Block": [
        { x: 256, y:441 },  // Admission-Office
        { x: 608, y:278 } // C-Block
        
    ],
    "Admission-Office-Main-Gate": [
        { x:256, y:438 },  // Admission-Office
        { x:284, y:439},  // Hidden waypoint
        { x:284, y:652 },  // Hidden waypoint
        { x:149, y:653  }   // Main-Gate
    ],
    "Admission-Office-A-Block": [
        { x:257 , y:439  },  // Admission-Office
        { x:284 , y:439},  // Hidden waypoint
        { x:284 ,y: 652},  // Hidden waypoint
        { x:576, y:644}  // A-Block
    ],
    "Admission-Office-Boys-Hostel": [
        { x:259, y:439  },  //Admission-Office
        { x:288 , y:477 },  // Hidden waypoint
        { x: 288, y:652 },  // Hidden waypoint
        { x: 1318, y:640 },  // Hidden waypoint
        { x:1318 , y:674 }   // Boys-Hostel
    ],
    "Admission-Office-Girls-Hostel": [
        { x: 257, y:456 },  //Admission-Office
        { x:284, y:439  },  // Hidden waypoint
        { x:294, y:931 }  // Girls-Hostel
    ],
    "Admission-Office-Canteen": [
        { x:257 , y:439 },  //Admission-Office
        { x:288 , y:477 },  // Hidden waypoint
        { x:288, y:652 },  // Hidden waypoint
        { x:856 , y:645 },  // Hidden waypoint
        { x:851 , y:434},  // Hidden waypoint
        { x: 829, y:434 }  // Canteen  
    ],
    "Admission-Office-Playground": [
        { x: 259, y:456 },  //Admission-Office
        { x:288 , y:477 },  // Hidden waypoint
        { x:288, y:652 },  // Hidden waypoint
        { x: 1012, y:652  },  // Hidden waypoint
        { x: 1012, y:616  }   // Playground
    ],
    "Admission-Office-Basketball-Ground": [
        { x: 259, y:456  },  // Admission-Office
        { x:288 , y:477 },  // Hidden waypoint
        { x:288, y:652 },  // Hidden waypoint
        { x:856 , y:645  },  // Hidden waypoint
        { x:851 ,  y:434  },  // Hidden waypoint
        { x:882 , y: 425 }   // Basketball-Ground
    ], 
    "Admission-Office-Cricket-Net": [
        { x: 272, y:445 },  // Admission-Office
        { x:291, y:43 },  // Hidden waypoint
        { x:291, y:45 },  // Hidden waypoint
        { x:1170 , y:42 },  // Hidden waypoint
        { x:1170, y:100},  // Hidden waypoint
       
        { x: 1171, y:95 },  // Hidden waypoint
        { x:1199 , y:101 }   // Cricket-Net
    ],
    "Admission-Office-Cricket-Ground": [
        { x: 259, y:456  },  // Admission-Office
        { x:288 , y:477 },  // Hidden waypoint
        { x:288, y:652 },  // Hidden waypoint
        { x: 1439, y:650  },  // Hidden waypoint
        { x:1439 , y:618}   // Cricket-Ground
    ],
    "Admission-Office-Stationary": [
        { x: 259, y:456  },  // Admission-Office
        { x:288 , y:477 },  // Hidden waypoint
        { x:288, y:652 },  // Hidden waypoint
        { x:773 , y:656  },  // Hidden waypoint
        { x:777 , y:726 }   // Stationary
    ],
    "Admission-Office-Temple": [
        { x: 270, y: 434 },  //Admission-Office
        { x: 563, y:426}   //Temple
    ],
    "Admission-Office-Bus-Parking": [
        { x:257 , y:439},  // Admission-Office
        { x:284 , y:439  },  // Hidden waypoint
        { x:284, y:652 },  // Hidden waypoint
        { x:60 , y:649},  // Hidden waypoint
        { x:60 , y:798 }   //Bus-Parking
    ],
    "Admission-Office-Sports-Room": [
        { x: 259, y:456  },  // Admission-Office
        { x:288 , y:477 },  // Hidden waypoint
        { x:288, y:652 },  // Hidden waypoint
        { x:1288 , y:642 },  // Hidden waypoint
        { x: 1291, y:584}   //Sports-Room
    ],
    "Admission-Office-Auditorium": [
        { x:259 , y:456  },  // Admission-Office
        { x:288 , y:477  },  // Hidden waypoint
        { x:288 , y:652 },  // Hidden waypoint
        { x:1183 , y:644 },  // Hidden waypoint
        { x:1182 , y:273 }   //Auditorium
    ],

    "Canteen-B-Block": [
        { x: 829, y:428  },  // Canteen
        { x:848 , y:433  },  // (Hidden waypoint)
        { x:856 , y:645 },  // Hidden waypoint
        { x:1008, y:639 },  // Hidden waypoint
        { x:1008 , y:700 }   // B-Block
    ],
    "Canteen-C-Block": [
        { x:829 , y: 425},  // Canteen
        { x: 848, y:433 },  // Hidden waypoint
        { x:848 , y:334 },  // Hidden waypoint
        { x:753 , y:334  } ,  // C-Block
        { x: 750, y:428 },  // 🔴 Fake location (Hidden waypoint)
        { x: 602, y:429 },  // 🔴 Fake location (Hidden waypoint)
        { x:599 , y:397 }, // 🔴 Fake location (Hidden waypoint)
        { x: 575, y:396},  // 🔴 Fake location (Hidden waypoint)
        { x:570 , y:318  },  // 🔴 Fake location (Hidden waypoint)
        { x:605 , y:278 } // C-Block
    ],
    "Canteen-A-Block": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x: 581, y:650 }   //A-Block
    ],
    "Canteen-Main-Gate": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x: 779,y:652 },  // Hidden waypoint
        { x: 151, y:653  }   // Main-Gate
    ],
    "Canteen-Admission-Office": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x:288 ,y:648 },  // Hidden waypoint
        { x: 283,y:454 },  // Hidden waypoint
        { x: 252, y:450 }  // Admission-Office
    ],
    "Canteen-Boys-Hostel": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x: 1310, y:648 },  // Hidden waypoint
        { x: 1310, y:677 }   // Boys-Hostel
    ],
    "Canteen-Girls-Hostel": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x: 779,y:652 },  // Hidden waypoint
        { x:288 , y:648  },  // Hidden waypoint
        { x: 285, y:913 }  // Girls-Hostel
    ],
    
    "Canteen-Playground": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:855 ,y:505 },  // Hidden waypoint
        { x:921 , y:516  }   // Playground
    ],
    "Canteen-Basketball-Ground": [
        { x:829 , y:428  },  // Canteen
        { x:884 , y:425 }   // Basketball-Ground
    ], 
    "Canteen-Cricket-Net": [
        { x: 829, y:425},  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x: 855,  y: 49 },  // Hidden waypoint
        { x: 1169,  y: 43 },  // Hidden waypoint
        { x:1172 , y:111 },  // Hidden waypoint
        { x: 1198, y:106 }   // Cricket-Net
    ],
    "Canteen-Cricket-Ground": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x:1428 , y:644  },  // Hidden waypoint
        { x: 1428, y:619}   // Cricket-Ground
    ],
    "Canteen-Stationary": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x:779 , y:652  },  // Hidden waypoint
        { x:776 , y:726 }   // Stationary
    ],
    "Canteen-Temple": [
        { x:829 , y: 425},  // Canteen
        { x: 848, y:433 },  // Hidden waypoint
        { x:848 , y:334 },  // Hidden waypoint
        { x:753 , y:334  } ,  //  Hidden waypoint
        { x: 750, y:428 },  //  Hidden waypoint
        { x: 602, y:429 },  // Temple
    ],
    "Canteen-Bus-Parking": [
        { x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x: 59, y:658 },  // Hidden waypoint
        { x: 64, y:790 }   //Bus-Parking
    ],
    "Canteen-Sports-Room": [
        {x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x:1310 , y: 648},  // Hidden waypoint
        { x: 1297, y:586}   //Sports-Room
    ],
   
    "Canteen-Auditorium": [
        {x:829 , y:428 },  //Canteen
        { x: 848, y:433  },  // Hidden waypoint
        { x:856 ,y:645 },  // Hidden waypoint
        { x:1186 , y:642 },  // Hidden waypoint
        { x: 1186, y:268 }   //Auditorium
    ],

    "Playground-B-Block": [
        { x:1021 , y:624  },  // Playground
        { x:1021 , y:708 }   // B-Block
    ],
    "Playground-C-Block": [
        { x:871 , y:505 },  // Playground
        { x:753 , y:510 },  // Hidden waypoint
        { x: 748, y:431 },  // Hidden waypoint
        { x: 599, y:428  } ,  // C-Block
        { x: 599, y:397 },  // 🔴 Fake location (Hidden waypoint)
        { x: 575, y:397 },  // 🔴 Fake location (Hidden waypoint)
        { x:568 , y:318 }, // 🔴 Fake location (Hidden waypoint)
        { x:612, y:285 } // C-Block
        
    ],
    "Playground-Main-Gate": [
        { x:1016 , y:626 },  // Playground
        { x:1016 , y:648  },  // Hidden waypoint
        { x:148 , y: 650 }   // Main-Gate
    ],
    "Playground-A-Block": [
        { x: 1016, y:626  },  // Playground
        { x:1016 , y: 648},  // Hidden waypoint
        { x:576 , y:645 }  // A-Block
    ],
    "Playground-Boys-Hostel": [
        { x: 1021, y: 624 },  //Playground
        { x: 1021, y:650 },  // Hidden waypoint
        { x:1297 , y:650 },  // Hidden waypoint
        { x:1297 , y:674 }   // Boys-Hostel
    ],
    "Playground-Girls-Hostel": [
        { x:1016, y:626 },  //Playground
        { x:1016 , y:648  },  // Hidden waypoint
        { x:291 , y:652  },  // Hidden waypoint
        { x:289 , y:912 }  // Girls-Hostel
    ],
    "Playground-Canteen": [
        { x: 921, y:516 },  //Playground
        { x:855 , y: 505},  // Hidden waypoint
        { x: 848, y:433 },  // Hidden waypoint
        { x: 829, y:425 }  // Canteen  
    ],
    "Playground-Basketball-Ground": [
        { x:927 , y: 626 },  //Playground
        { x:927 , y: 497 }   // Basketball-Ground
    ], 
    "Playground-Cricket-Net": [
        { x: 1135, y:102},  // Playground
        { x: 1212, y:102 }   // Cricket-Net
    ],
    "Playground-Cricket-Ground": [
        { x:1021 , y:624  },  //Playground
        { x:1021 , y:650 },  // Hidden waypoint
        { x: 1436, y: 645 },  // Hidden waypoint
        { x: 1434, y:621}   // Cricket-Ground
    ],
    "Playground-Stationary": [
        { x:1016 , y:626  },  // Playground
        { x: 1016, y:648 },  // Hidden waypoint
        { x:784 , y:648  },  // Hidden waypoint
        { x:779 , y:731 }   // Stationary
    ],
    "Playground-Temple": [
        { x: 871, y:505  },  //Playground
        { x:748 , y:500 },  // Hidden waypoint
        { x:748 , y:431},  // Hidden waypoint
        { x:599 , y:428}   //Temple
    ],
    "Playground-Bus-Parking": [
        { x:1016 , y:626 },  // Playground
        { x:1016 , y:648  },  // Hidden waypoint
        { x: 62, y:652 },  // Hidden waypoint
        { x: 62, y:798 }   //Bus-Parking
    ],
    "Playground-Sports-Room": [
        { x:1021 , y:624 },  //Playground
        { x:1021 , y:650  },  // Hidden waypoint
        { x:1301 , y:648 },  // Hidden waypoint
        { x:1301 , y:584}   //Sports-Room
    ],
    "Playground-Auditorium": [
        { x: 1023, y:248  },  // Playground
        { x:1165 , y:231 }   //Auditorium
    ],
    "Playground-Admission-Office": [
        { x: 1016, y:626  },  // Playground
        { x:1016 , y: 648 },  // Hidden waypoint
        { x:290 , y:648 },  // Hidden waypoint
        { x:287 , y:448 },  // Hidden waypoint
        { x:262 , y:449 }   //Adimssion
    ],

    "Girls-Hostel-B-Block": [
        { x: 294, y: 912 },  //  Girls-Hostel
        { x: 294, y: 651 },  //Hidden waypoint
        { x: 1010, y:647 },  // Hidden waypoint
        { x: 1010, y: 705}   // B-Block
    ],
    "Girls-Hostel-C-Block": [
        { x: 294 , y: 912 },  // Girls-Hostel
        { x: 290, y: 408 },  // Hidden waypoint
        { x: 609, y: 282 } // C-Block
        
    ],
    "Girls-Hostel-Main-Gate": [
        { x: 294 , y: 912 },  // Girls-Hostel
        { x: 294 , y: 653  },  // Hidden waypoint
        { x: 154 , y: 654  }   // Main-Gate
    ],
    "Girls-Hostel-A-Block": [
        { x: 294, y:912  },  //Girls-Hostel
        { x: 294, y:653 },  // Hidden waypoint
        { x: 580, y:648}  // A-Block
    ],
    "Girls-Hostel-Boys-Hostel": [
        { x: 294, y:912 },  //Girls-Hostel
        { x: 294, y:651 },  // Hidden waypoint
        { x: 1294, y:645 },  // Hidden waypoint
        { x: 1294, y:673 }   // Boys-Hostel
    ],
    "Girls-Hostel-Canteen": [
        { x:294, y:912 },  //Girls-Hostel
        { x:294, y:651 },  // Hidden waypoint
        { x:853, y:644 },  // Hidden waypoint
        { x:853, y:430 },  // Hidden waypoint
        { x:831, y:431 }  // Canteen  
    ],
    "Girls-Hostel-Playground": [
        { x: 294, y:912 },  //Girls-Hostel
        { x: 294, y: 651 },  // Hidden waypoint
        { x: 918, y: 648 },  // Hidden waypoint
        { x: 918, y: 626 }   // Playground
    ],
    "Girls-Hostel-Basketball-Ground": [
        { x: 294, y:912 },  //Girls-Hostel
        { x: 294, y: 651 },  // Hidden waypoint
        { x: 918, y: 648 },  // Hidden waypoint
        { x: 918,  y:626 },  // Hidden waypoint
        { x: 925, y: 500 }   // Basketball-Ground
    ], 
    "Girls-Hostel-Cricket-Net": [
        { x: 294, y: 912},  // Girls-Hostel
        { x: 294, y: 651 },  // Hidden waypoint
        { x: 853, y: 644 },  // Hidden waypoint
        { x: 851,  y: 51 },  // Hidden waypoint
        { x: 1168, y: 48},  // Hidden waypoint
        { x: 1173, y: 104},  // Hidden waypoint
        { x: 1195, y: 105 }   // Cricket-Net
    ],
    "Girls-Hostel-Cricket-Ground": [
        { x: 294, y: 912 },  //Girls-Hostel
        { x: 294, y: 651},  // Hidden waypoint
        { x: 1426, y: 644 },  // Hidden waypoint
        { x: 1426, y:617}   // Cricket-Ground
    ],
    "Girls-Hostel-Stationary": [
        { x: 294, y: 912 },  //Girls-Hostel
        { x: 294, y: 651 },  // Hidden waypoint
        { x: 780, y: 647 },  // Hidden waypoint
        { x: 789, y: 732}   // Stationary
    ],
    "Girls-Hostel-Temple": [
        { x: 294, y: 912  },  //Girls-Hostel
        { x: 296, y: 427},  // Hidden waypoint
        { x: 562, y:427}   //Temple
    ],
   "Girls-Hostel-Bus-Parking": [
        { x:294, y: 912 },  // Girls-Hostel
        { x:294, y: 653 },  // Hidden waypoint
        { x:63,  y: 651 },  // Hidden waypoint
        { x:63, y:800 }   //Bus-Parking
    ],
    "Girls-Hostel-Sports-Room": [
        { x: 294, y:912 },  //Girls-Hostel
        { x: 294, y:651 },  // Hidden waypoint
        { x: 1294, y:645 },  // Hidden waypoint
        { x: 1294, y:584}   //Sports-Room
    ],
    
    "Girls-Hostel-Auditorium": [
        { x:294, y:912  },  // Girls-Hostel
        { x:294, y:651  },  // Hidden waypoint
        { x:1186, y:644 },  // Hidden waypoint
        { x:1183, y:272 }   //Auditorium
    ],
    "Girls-Hostel-Admission-Office": [
        { x: 294, y: 912 },  // Girls-Hostel
        { x: 294, y: 433 },  // Hidden waypoint
        { x: 268, y: 437  }   //Admission-Office
    ],

    "Boys-Hostel-B-Block": [
        { x: 1301, y: 667},  //  Admission-Office
        { x: 1300, y: 647  },  // 🔴 Fake location (Hidden waypoint)
        { x: 1004, y: 648},  // Hidden waypoint
        { x: 1010, y: 707}   // B-Block
    ],
    "Boys-Hostel-C-Block": [
        { x: 1301, y: 667},  // Boys-Hostel
        { x: 1300, y:647 },  // Hidden waypoint
        { x: 575, y: 636},  // Hidden waypoint
        { x: 575, y: 456 } ,  // C-Block
        { x: 597, y: 455},  // 🔴 Fake location (Hidden waypoint)
        { x: 597, y: 402},  // 🔴 Fake location (Hidden waypoint)
        { x: 578, y: 401}, // 🔴 Fake location (Hidden waypoint)
        { x: 571, y:310},  // 🔴 Fake location (Hidden waypoint)
        { x: 605, y: 284} // C-Block
        
    ],
    "Boys-Hostel-Main-Gate": [
        { x: 1301, y: 667},  // Boys-Hostel
        { x: 1300, y: 647 },  // Hidden waypoint
        { x: 149, y: 654 }   // Main-Gate
    ],
    "Boys-Hostel-A-Block": [
        { x: 1301, y:667  },  // Boys-Hostel
        { x: 1300, y:647 },  // Hidden waypoint
        { x: 581, y:645 }  // A-Block
    ],
    "Boys-Hostel-Girls-Hostel": [
        { x: 1301, y:667  },  // Boys-Hostel
        { x: 1300, y:647 },  // Hidden waypoint
        { x: 291, y:653  },  // Hidden waypoint
        { x: 294, y:914 }  // Girls-Hostel
    ],
    "Boys-Hostel-Canteen": [
        { x:1301, y:667 },  //Boys-Hostel
        { x:1300, y:647 },  // Hidden waypoint
        { x:855, y:641},  // Hidden waypoint
        { x:853, y:437 },  // Hidden waypoint
        { x:837, y:434 }  // Canteen  
    ],
    "Boys-Hostel-Playground": [
        { x: 1301, y:667 },  //Boys-Hostel
        { x: 1300, y:647  },  // Hidden waypoint
        { x: 1016,  y:651  },  // Hidden waypoint
        { x: 1016, y:620  }   // Playground
    ],
    "Boys-Hostel-Basketball-Ground": [
        { x: 1301, y:667 },  //Boys-Hostel
        { x: 1300, y:647  },  // Hidden waypoint
        { x: 1016,  y:651  },  // Hidden waypoint
        { x: 1016, y:620  }, // Hidden waypoint
        { x: 1022, y:471 },  // Hidden waypoint
        { x: 995,  y:460  },   // Basketball-Ground
    ], 
    "Boys-Hostel-Cricket-Net": [
        { x: 1301, y:667 },  //Boys-Hostel
        { x: 1300, y:647  },  // Hidden waypoint
        { x: 1398,  y:635  },  // Hidden waypoint
        { x: 1398,  y:114  },  // Hidden waypoint
        { x: 1366, y:104}   // Cricket-Net
    ],
    "Boys-Hostel-Cricket-Ground": [
        { x: 1301, y:667  },  //Boys-Hostel
        { x: 1300, y:647 },  // Hidden waypoint
        { x: 1445, y:644  },  // Hidden waypoint
        { x: 1442, y:617}   // Cricket-Ground
    ],
    "Boys-Hostel-Stationary": [
        { x:1301 , y:667  },  // Boys-Hostel
        { x:1300 , y:647 },  // Hidden waypoint
        { x: 769, y:647  },  // Hidden waypoint
        { x: 769, y:730 }   // Stationary
    ],
    "Boys-Hostel-Temple": [
        { x: 1301, y:667  },  //Boys-Hostel
        { x: 1300, y:647 },  // Hidden waypoint
        { x: 575, y:636},  // Hidden waypoint
        { x: 575, y:456}   //Temple
    ],
    "Boys-Hostel-Bus-Parking": [
        { x:1301 , y:667 },  // Boys-Hostel
        { x: 1300, y:647  },  // Hidden waypoint
        { x:64 , y:651 },  // Hidden waypoint
        { x:63 , y:765 }   //Bus-Parking
    ],
    "Boys-Hostel-Sports-Room": [
        { x:1297 , y:664 },  //Boys-Hostel
        { x:1299 , y:582}   //Sports-Room
    ],
    "Boys-Hostel-Auditorium": [
        { x:1304 , y:667  },  // Boys-Hostel
        { x:1300, y:647  },  // Hidden waypoint
        { x:1184 , y:642 },  // Hidden waypoint
        { x:1180 , y:269 }   //Auditorium
    ],
    "Boys-Hostel-Admission-Office": [
        { x:1301 , y:667  },  // Boys-Hostel
        { x:1300, y:647  },  // Hidden waypoint
        { x:291 , y:653 },  // Hidden waypoint
        { x:288 , y:445 },  // Hidden waypoint
        { x:258 , y:443 }   //Admission-Office
    ],

    "Basketball-Ground-B-Block": [
        { x:991 , y:499  },  //  Basketball-Ground
        { x:990 , y:715 }   // B-Block
    ],
    "Basketball-Ground-C-Block": [
        { x:883 , y:332 },  // Basketball-Ground
        { x:752 , y:335 },  // Hidden waypoint
        { x:751, y:429 },  // Hidden waypoint
        { x:602 , y:429  } ,  // C-Block
        { x:602 , y:398 },  // 🔴 Fake location (Hidden waypoint)
        { x:575 , y:396 },  // 🔴 Fake location (Hidden waypoint)
        { x:568 , y:311 }, // 🔴 Fake location (Hidden waypoint)
        { x:612 , y:288 } // C-Block
        
    ],
    "Basketball-Ground-Main-Gate": [
        { x:929 , y:495 },  // Basketball-Ground
        { x:929 , y:647  },  // Hidden waypoint
        { x:148 , y:654  }   // Main-Gate
    ],
    "Basketball-Ground-A-Block": [
        { x:929 , y:495 },  // Basketball-Ground
        { x:929 , y:647  },  // Hidden waypoint
        { x:578 , y:645 }  // A-Block
    ],
    "Basketball-Ground-Boys-Hostel": [
        { x:991 , y:499  },  //Basketball-Ground
        { x:991 , y:642 },  // Hidden waypoint
        { x:1294, y:644 },  // Hidden waypoint
        { x:1294 , y:676 }   // Boys-Hostel
    ],
    "Basketball-Ground-Girls-Hostel": [
        { x:929 , y:495 },  // Basketball-Ground
        { x:929 , y:647  },  // Hidden waypoint
        { x:290 , y:655  },  // Hidden waypoint
        { x:290 , y:917 }  // Girls-Hostel
    ],
    "Basketball-Ground-Canteen": [
        { x:887, y:399 },  //Basketball-Ground
        { x:830 , y:405 }  // Canteen  
    ],
    "Basketball-Ground-Playground": [
        { x:947 , y:500 },  //Basketball-Ground
        { x:947 , y:534  },  // Hidden waypoint
        { x:1025 ,  y:522 },  // Hidden waypoint
        { x:1023 , y:412 }   // Playground
    ],
    "Basketball-Ground-Cricket-Net": [
        { x:881 , y:358},  // Basketball-Ground
        { x:853 , y:358  },  // Hidden waypoint
        { x:855 ,  y:41  },  // Hidden waypoint
        { x:1167,  y:44  },  // Hidden waypoint
        { x:1174 , y:106 },  // Hidden waypoint
        { x:1196 , y:105 }   // Cricket-Net
    ],
    "Basketball-Ground-Cricket-Ground": [
        { x:991 , y:499  },  //Basketball-Ground
        { x:991, y:642 },  // Hidden waypoint
        { x:1439 , y:641 },  // Hidden waypoint
        { x:1439 , y:619 }   // Cricket-Ground
    ],
    "Basketball-Ground-Stationary": [
        { x:878 , y:393  },  // Basketball-Ground
        { x:848 , y:368},  // Hidden waypoint
        { x:848 , y:638  },  // Hidden waypoint
        { x:771 , y:641 },  // Hidden waypoint
        { x:771 , y:727 }   // Stationary
    ],
    "Basketball-Ground-Temple": [
        { x:883 , y:332 },  // Basketball-Ground
        { x:752 , y:335 },  // Hidden waypoint
        { x:751, y:429 },  // Hidden waypoint
        { x:602 , y:429  } , //Temple
    ],
    "Basketball-Ground-Bus-Parking": [
        { x:929 , y:495 },  // Basketball-Ground
        { x:929 , y:647  },  // Hidden waypoint
        { x:57 , y:645 },  // Hidden waypoint
        { x:57 , y:789 }   //Bus-Parking
    ],
    "Basketball-Ground-Sports-Room": [
        { x:991 , y:499 },  //Basketball-Ground
        { x:991 , y:642  },  // Hidden waypoint
        { x:1294 , y:644 },  // Hidden waypoint
        { x:1294 , y:581}   //Sports-Room
    ],
    "Basketball-Ground-Admission-Office": [
        { x:883 , y:332  },  //Basketball-Ground
        { x:752 , y:335},  // Hidden waypoint
        { x:751 , y:429 },  // Hidden waypoint
        { x:602 , y:429  },  // Hidden waypoint
        { x:602 , y:398 },  // Hidden waypoint
        { x:553 , y:393  },  // Hidden waypoint
        { x:555 , y:421 },  // Hidden waypoint
        { x:259 , y:424 }   //Admission-Office
    ],
    "Basketball-Ground-Auditorium": [
        { x:993 , y:225  },  // Basketball-Ground
        { x:1162 , y:215 }   //Auditorium
    ],

    "Cricket-Net-B-Block": [
        { x:1383 , y:109  },  // Cricket-Net 
        { x:1395 , y:109  },  // Hidden waypoint
        { x:1396 , y:633 },  // Hidden waypoint
        { x:994 , y:650 },  // Hidden waypoint
        { x:994 , y:708 }   // B-Block
    ],
    "Cricket-Net-C-Block": [
        { x:1383 , y:109  },  // Cricket-Net 
        { x:1395 , y:109  },  // Hidden waypoint
        { x:1396 , y:633 },  // Hidden waypoint
        { x:578 , y:643  } ,  // Hidden waypoint
        { x:578 , y:454 },  // Hidden waypoint
        { x:600 , y:454 },  // Hidden waypoint
        { x:600 , y:401 }, // Hidden waypoint
        { x:575 , y:399},  // Hidden waypoint
        { x:572 , y:303 } // C-Block
        
    ],
    "Cricket-Net-Main-Gate": [
        { x:1383 , y:109 },  // Cricket-Net
        { x:1396 , y:109  },  // Hidden waypoint
        { x:1396 , y:633  },  // Hidden waypoint
        { x:153 , y:650  }   // Main-Gate
    ],
    "Cricket-Net-A-Block": [
        { x:1383 , y:109 },  // Cricket-Net
        { x:1396 , y:109  },  // Hidden waypoint
        { x:1396 , y:633  }, // Hidden waypoint
        { x:575 , y:641 }  // A-Block
    ],
    "Cricket-Net-Boys-Hostel": [
        { x:1383 , y:109 },  // Cricket-Net
        { x:1396 , y:109  },  // Hidden waypoint
        { x:1396 , y:633  }, // Hidden waypoint
        { x:1282 , y:631  }, // Hidden waypoint
        { x:1291 , y:673 }   // Boys-Hostel
    ],
    "Cricket-Net-Girls-Hostel": [
        { x:1383 , y:109 },  // Cricket-Net
        { x:1396 , y:109  },  // Hidden waypoint
        { x:1396 , y:633  }, // Hidden waypoint
        { x:290 , y:651 },  // Hidden waypoint
        { x:290 , y:916 }  // Girls-Hostel
    ],
    "Cricket-Net-Canteen": [
        { x:1383 , y:109 },  // Cricket-Net
        { x:1396 , y:109  },  // Hidden waypoint
        { x:1396 , y:633  }, // Hidden waypoint
        { x:855 , y:643  },  // Hidden waypoint
        { x:856 , y:422 },  // Hidden waypoint
        { x:832 , y:422 }  // Canteen  
    ],
    "Cricket-Net-Playground": [
        { x:1385 , y:100 },  //Cricket-Net
        { x:1138 , y:104  }   // Playground
    ],
    
    "Cricket-Net-Cricket-Ground": [
        { x:1385 , y:100  },  //Cricket-Net
        { x:1402 , y:104 }   // Cricket-Ground
    ],
    "Cricket-Net-Stationary": [
        { x:1383 , y:109  },  // Cricket-Net
        { x:1396 , y:109 },  // Hidden waypoint
        { x:1396 , y:633  },  // Hidden waypoint
        { x:764 , y:644  },  // Hidden waypoint
        { x:746 , y:729 }   // Stationary
    ],
    "Cricket-Net-Temple": [
        { x:1383 , y:109  },  // Cricket-Net 
        { x:1395 , y:109  },  // Hidden waypoint
        { x:1396 , y:633 },  // Hidden waypoint
        { x:578 , y:643  } ,  // Hidden waypoint
        { x:578 , y:454 },   //Temple
    ],
    "Cricket-Net-Bus-Parking": [
        { x:1383 , y:109  },  // Cricket-Net 
        { x:1395 , y:109  },  // 🔴 Fake location (Hidden waypoint)
        { x:1396 , y:633 }, // Hidden waypoint
        { x:63 , y:644  },  // Hidden waypoint
        { x:64 , y:800 }   //Bus-Parking
    ],
    "Cricket-Net-Sports-Room": [
        { x:1383 , y:109  },  // Cricket-Net 
        { x:1395 , y:109  },  // 🔴 Fake location (Hidden waypoint)
        { x:1396 , y:633 }, // Hidden waypoint
        { x:1282 , y:631  },  // Hidden waypoint
        { x:1282 , y:582}   //Sports-Room
    ], 
    "Cricket-Net-Admission-Office": [
        { x:1383 , y:109  },  // Cricket-Net 
        { x:1395 , y:109  },  // 🔴 Fake location (Hidden waypoint)
        { x:1396 , y:633 },  // Hidden waypoint
        { x:290 , y:651  },  // Hidden waypoint
        { x:290 , y:420  },  // Hidden waypoint
        { x:258 , y:421 }   //Admission-Office
    ],
    "Cricket-Net-Auditorium": [
        { x:1193 , y:101  },  // Cricket-Net
        { x:1163 , y:106  },  // Hidden waypoint
        { x:1166 , y:189 }   //Auditorium
    ],
    "Cricket-Net-Basketball-Ground": [
        { x:1383 , y:109  },  // Cricket-Net
        { x:924 , y:114  },  // Hidden waypoint
        { x:924 , y:206 }   //Basketball-Ground
    ],

    "Cricket-Ground-B-Block": [
        { x:1441, y:615  },  //  Cricket-Ground
        { x:1441 , y:644  },  // 🔴 Fake location (Hidden waypoint)
        { x:1012, y:646 },  // Hidden waypoint
        { x:1012 , y:708 }   // B-Block
    ],
    "Cricket-Ground-C-Block": [
        { x:1441 , y:615 },  // Cricket-Ground
        { x:1441 , y:644 },  // Hidden waypoint
        { x:575 , y:641 },  // Hidden waypoint
        { x:575 , y:456  } ,  // C-Block
        { x:601 , y:451 },  // 🔴 Fake location (Hidden waypoint)
        { x:601 , y:399 },  // 🔴 Fake location (Hidden waypoint)
        { x:574 , y:398 }, // 🔴 Fake location (Hidden waypoint)
        { x:574 , y:322},  // 🔴 Fake location (Hidden waypoint)
        { x:607 , y:289 } // C-Block
        
    ],
    "Cricket-Ground-Main-Gate": [
        { x:1441 , y:615 },  // Cricket-Ground
        { x:1441 , y:644 }, // Hidden waypoint
        { x:153 , y:653  }   // Main-Gate
    ],
    "Cricket-Ground-A-Block": [
        { x:1441 , y:615  },  // Cricket-Ground
        { x:1441 , y:644 },  // Hidden waypoint
        { x:575 , y:641 }  // A-Block
    ],
    "Cricket-Ground-Boys-Hostel": [
        { x:1441 , y:615  },  // Cricket-Ground
        { x:1441 , y:644 },  // Hidden waypoint
        { x:1285 , y:649 },  // Hidden waypoint
        { x:1285 , y:667 }   // Boys-Hostel
    ],
    "Cricket  Ground-Girls-Hostel": [
        { x:1441 , y:615  },  // Cricket-Ground
        { x:1441 , y:644 },  // Hidden waypoint
        { x:286 , y:649  },  // Hidden waypoint
        { x:286 , y:913 }  // Girls-Hostel
    ],
    "Cricket  Ground-Canteen": [
        { x:1441 , y:615  },  // Cricket-Ground
        { x:1441 , y:644 },  // Hidden waypoint
        { x:853 , y:644 },  // Hidden waypoint
        { x:853 , y:438 },  // Hidden waypoint
        { x:834 , y:434 }  // Canteen  
    ],
    "Cricket  Ground-Playground": [
        { x:1441 , y:615},  //Cricket  Ground
        { x:1441 , y: 644 },  // Hidden waypoint
        { x:1016 ,  y:643 },  // Hidden waypoint 
        { x:1016 , y:620 }   // Playground
    ],
    "Cricket-Ground-Cricket-Net": [
        { x:1403 , y:103},  // Cricket  Ground
        { x:1366 , y:106 }   // Cricket-Net
    ],
    "Cricket-Ground-Stationary": [
        { x:1441 , y:615},  //Cricket  Ground
        { x:1016 , y: 643 }, // Hidden waypoint
        { x:773 , y:651  },  // Hidden waypoint
        { x:773 , y:735 }   // Stationary
    ],
    "Cricket-Ground-Temple": [
        { x:1441 , y:615 },  // Cricket-Ground
        { x:1441 , y:644 },  // Hidden waypoint
        { x:575 , y:641 },  // Hidden waypoint
        { x:575 , y:456  }   //Temple
    ],
    "Cricket  Ground-Bus-Parking": [
        { x:1441 , y:615 },  // Cricket  Ground
        { x:1441 , y:644  },  // Hidden waypoint
        { x:57 , y:657 },  // Hidden waypoint
        { x:57 , y:798 }   //Bus-Parking
    ],
    "Cricket  Ground-Sports-Room": [
        { x:1441 , y:615 },  // Cricket  Ground
        { x:1441 , y:644  },  // Hidden waypoint
        { x:1285 , y:649 },  // Hidden waypoint
        { x:1285 , y:587}   //Sports-Room
    ],
    "Cricket  Ground-Admisssion": [
        { x:1441 , y:615 },  // Cricket  Ground
        { x:1441 , y:644  },  // Hidden waypoint
        { x:286 , y:648 },  // Hidden waypoint
        { x:286 , y:433  },  // Hidden waypoint
        { x:258 , y:434 }   //Admission-Office
    ],
    "Cricket  Ground-Auditorium": [
        { x:1441 , y:615 },  // Cricket  Ground
        { x:1441 , y:644  },  // Hidden waypoint
        { x:1183 , y:647 },  // Hidden waypoint
        { x:1184 , y:261 }   //Auditorium
    ],"Cricket  Ground-Basketball-Ground": [
        { x:1441 , y:615},  //Cricket  Ground
        { x:1441 , y: 644 },  // Hidden waypoint
        { x:1016,  y:643  },  // Hidden waypoint
        { x:950 , y:641 },  // Hidden waypoint
        { x:951 , y:497 }   //Basketball-Ground
    ],

    "Temple-B-Block": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 },  // Hidden waypoint
        { x:856 , y:646 },  // Hidden waypoint
        { x:1012 , y:640 },  // Hidden waypoint
        { x:1012 , y:706 }   // B-Block
    ],
    "Temple-C-Block": [
        { x:572 , y:408 },  // Temple
        { x:572 , y:313 },  // Hidden waypoint
        { x:613 , y:290 } // C-Block
        
    ],
    "Temple-Main-Gate": [
        { x:567 , y:425 },  // Temple
        { x:287 , y:422  },  // Hidden waypoint
        { x:287 , y:650  },  // Hidden waypoint
        { x:149 , y:649  }   // Main-Gate
    ],
    "Temple-A-Block": [
        { x:578 , y:448  },  // Temple
        { x:578 , y:644 }  // A-Block
    ],
    "Temple-Boys-Hostel": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 },  // Hidden waypoint
        { x:856 , y:646 },  // Hidden waypoint
        { x:1295 , y:644 },  // Hidden waypoint
        { x:1295 , y:670 }   // Boys-Hostel
    ],
    "Temple-Girls-Hostel": [
        { x:567 , y:425 },  //Temple
        { x:287 , y:425  },  // Hidden waypoint
        { x:287 , y:918 }  // Girls-Hostel
    ],
    "Temple-Canteen": [
        { x:595 , y:427 },  //Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 },  // Hidden waypoint
        { x:840 , y:418 }  // Canteen  
    ],
    "Temple-Playground": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 },  // Hidden waypoint
        { x:856 , y:646 },  // Hidden waypoint
        { x:1012 , y:620 },  // Hidden waypoint
        { x:1012 , y:614 },  // Playground
    ],
    "Temple-Cricket-Net": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 }, // Hidden waypoint
        { x:853 ,  y:47  },  // Hidden waypoint
        { x:1160 ,  y:37  },  // Hidden waypoint
        { x:1160 , y:103 },  // Hidden waypoint
        { x:1190 , y:103 }   // Cricket-Net
    ],
    "Temple-Cricket-Ground": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 }, // Hidden waypoint
        { x:853 ,  y:47  },  // Hidden waypoint
        { x:1433 , y:39  },  // Hidden waypoint
        { x:1433 , y:74}   // Cricket-Ground
    ],
    "Temple-Stationary": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 },  // Hidden waypoint
        { x:856 , y:646 }, // Hidden waypoint
        { x:784 , y:646 },  // Hidden waypoint
        { x:784 , y:723 }   // Stationary
    ],
    
    "Temple-Bus-Parking": [
        { x:567 , y:425 },  // Temple
        { x:287 , y:425  },  // Hidden waypoint
        { x:287 , y:650 },  // Hidden waypoint
        { x:63 , y:651  },  // Hidden waypoint
        { x:63 , y:800 }   //Bus-Parking
    ],
    "Temple-Sports-Room": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 },  // Hidden waypoint
        { x:856 , y:646 }, // Hidden waypoint
        { x:1285 , y:645 },  // Hidden waypoint
        { x:1285 , y:582 }   //Sports-Room
    ],
    "Temple-Admission-Office": [
        { x:567 , y:425  },  //Temple
        { x:269 , y:425 }   //Admission-Office
    ],
    "Temple-Auditorium": [
        { x:595 , y:427  },  //  Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:840 , y:415 },  // Hidden waypoint
        { x:856 , y:646 },  // Hidden waypoint
        { x:1186 , y:646 },  // Hidden waypoint
        { x:1186 , y:273 }   //Auditorium
    ],
    "Temple-Basketball-Ground": [
        { x:595 , y:427 },  //Temple
        { x:754 , y:427 },  // Hidden waypoint
        { x:754 , y:335 },  // Hidden waypoint
        { x:837 , y:335 },  // Hidden waypoint
        { x:883 , y:329 }  // Basketball-Ground
    ],

    "Bus-Parking-B-Block": [
        { x:63 , y:799  },  //  Bus-Parking
        { x:63 , y:653  },  // Hidden waypoint
        { x:1012, y:646 },  // Hidden waypoint
        { x:1009, y:709 }   // B-Block
    ],
    "Bus-Parking-C-Block": [
        { x:63 , y:799 },  // Bus-Parking
        { x:63 , y:653 },  // Hidden waypoint
        { x:293, y:650 },  // Hidden waypoint
        { x:293, y:421 },  // Hidden waypoint
        { x:259 , y:419  } ,  // Hidden waypoint
        { x:603 , y:287 } // C-Block
        
    ],
    "Bus-Parking-Main-Gate": [
        { x:63 , y:799 },  // Bus-Parking
        { x:63 , y:653  },  // Hidden waypoint
        { x:147 , y:650  }   // Main-Gate
    ],
    "Bus-Parking-A-Block": [
        { x:63 , y: 799 },  // Bus-Parking
        { x: 63, y: 653},  // Hidden waypoint
        { x: 578, y:646 }  // A-Block
    ],
    "Bus-Parking-Boys-Hostel": [
        { x: 63, y:799  },  //Bus-Parking
        { x: 63, y:653},  // Hidden waypoint
        { x: 1307 , y:649 },  // Hidden waypoint
        { x: 1309 , y:6701 }   // Boys-Hostel
    ],
    "Bus-Parking-Girls-Hostel": [
        { x: 63, y:799  },  //Bus-Parking
        { x: 63, y:653},  // Hidden waypoint
        { x: 293, y:650  },  // Hidden waypoint
        { x: 293, y:915 }  // Girls-Hostel
    ],
    "Bus-Parking-Canteen": [
        { x: 63, y:799  },  //Bus-Parking
        { x: 63, y:653},  // Hidden waypoint
        { x: 855, y:649},  // Hidden waypoint
        { x: 855 , y:428 },  // Hidden waypoint
        { x: 832, y:421 }  // Canteen  
    ],
    "Bus-Parking-Playground": [
        { x: 63, y:799  },  //Bus-Parking
        { x: 63, y:653},  // Hidden waypoint
        { x:1012 ,  y:646  },  // Hidden waypoint
        { x:1012 , y:624  }   // Playground
    ],
    "Bus-Parking-Cricket-Net": [
        { x: 63, y:799  },  //Bus-Parking
        { x: 63, y:653},  // Hidden waypoint
        { x: 1396,  y:645  },  // Hidden waypoint
        { x: 1396,  y:102  },  // Hidden waypoint
        { x: 1365, y:103 }   // Cricket-Net
    ],
    "Bus-Parking-Cricket-Ground": [
        { x: 63, y:799  },  //Bus-Parking
        { x: 63, y:653},  // Hidden waypoint
        { x: 1436, y:641  },  // Hidden waypoint
        { x: 1436, y:614}   // Cricket-Ground
    ],
    "Bus-Parking-Stationary": [
        { x: 63, y:799  },  //Bus-Parking
        { x: 63, y:653},  // Hidden waypoint
        { x:777 , y:645  },  // Hidden waypoint
        { x: 777, y:724 }   // Stationary
    ],
    "Bus-Parking-Temple": [
        { x:63 , y:799 },  // Bus-Parking
        { x:63 , y:653 },  // Hidden waypoint
        { x:293, y:650 },  // Hidden waypoint
        { x:293, y:6421 },  // Hidden waypoint
        { x:259 , y:419  } ,  // Hidden waypoint
        { x:603 , y:287 },  // Hidden waypoint
        { x:289, y:427},  // Hidden waypoint
        { x:558 , y:428}   //Temple
    ],
    "Bus-Parking-Sports-Room": [
        { x:63 , y:799 },  // Bus-Parking
        { x:63 , y:653 },  // Hidden waypoint
        { x:1291, y:646 },  // Hidden waypoint
        { x:1291 , y:585}   //Sports-Room
    ],
    "Bus-Parking-Admission-Office": [
        { x:63 , y:799 },  // Bus-Parking
        { x:63 , y:653 },  // Hidden waypoint
        { x:293, y:650 },  // Hidden waypoint
        { x:293, y:421 },  // Hidden waypoint
        { x:259 , y:419  }   //Admission-Office
    ],
    "Bus-Parking-Auditorium": [
        { x:63 , y:799 },  // Bus-Parking
        { x:63 , y:653 },  // Hidden waypoint
        { x:1185, y:649 },  // Hidden waypoint
        { x:1185 , y:261 }   //Auditorium
    ],
    "Bus-Parking-Basketball-Ground": [
        { x:63 , y:799 },  // Bus-Parking
        { x:63 , y:653 },  // Hidden waypoint
        { x:959, y:644 },  // Hidden waypoint
        { x:959 , y:497 }   //Basketball-Ground
    ],

    "Stationary-B-Block": [
        { x:779 , y: 733 },  //  Stationary
        { x:779 , y: 649 },  // Hidden waypoint
        { x: 855, y: 641},  // Hidden waypoint
        { x: 1011, y:650 },  // Hidden waypoint
        { x:1011 , y: 706}   // B-Block
    ],
    "Stationary-C-Block": [
        { x:779 , y: 733 },  //  Stationary
        { x:779 , y: 649 },  // Hidden waypoint
        { x:576 , y:454 },  // Hidden waypoint
        { x:598 , y:456 } ,  // Hidden waypoint
        { x:598 , y:412 },  // Hidden waypoint
        { x:574 , y:394 },  // Hidden waypoint
        { x:574 , y:308 }, // Hidden waypoint
        { x:606 , y:284 } // C-Block
        
    ],
    "Stationary-Main-Gate": [
        { x:779 , y: 733 },  //  Stationary
        { x:779 , y: 649 },  // Hidden waypoint
        { x:149, y:655  }   // Main-Gate
    ],
    "Stationary-A-Block": [
        { x:779 , y: 733 },  //  Stationary
        { x:779 , y: 649 },  // Hidden waypoint
        { x:583 , y:646 }  // A-Block 
    ],
    "Stationary-Boys-Hostel": [
        { x:779 , y: 733 },  //  Stationary
        { x:779 , y: 649 },  // Hidden waypoint
        { x:1296 , y:646},  // Hidden waypoint
        { x:1296 , y:674 }   // Boys-Hostel
    ],
    "Stationary-Girls-Hostel": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 288, y: 650 },  // Hidden waypoint
        { x: 288, y:905 }  // Girls-Hostel
    ],
    "Stationary-Canteen": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 855, y:641 },  // Hidden waypoint
        { x: 855, y:430 },  // Hidden waypoint
        { x: 827, y:421 }  // Canteen  
    ],
    "Stationary-Playground": [
        { x:779 , y: 733 },  //  Stationary
        { x:779 , y: 649 },  // Hidden waypoint
        { x: 855, y: 641},  // Hidden waypoint
        { x: 1011, y:650 },  // Hidden waypoint
        { x:1011 , y:625 }   // Playground
    ],
    "Stationary-Cricket-Net": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 853,  y:635  },  // Hidden waypoint
        { x: 853,  y:43 },  // Hidden waypoint
        { x:1171 , y:44 },  // Hidden waypoint
        { x:1171 , y:106 },  // Hidden waypoint
        { x:1194, y: 109}   // Cricket-Net
    ],
    "Stationary-Cricket-Ground": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 1435, y:640  },  // Hidden waypoint
        { x: 1435, y:613}   // Cricket-Ground
    ],
    
    "Stationary-Temple": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 583, y:646},  // Hidden waypoint
        { x: 583, y:448}   //Temple
    ],
    "Stationary-Bus-Parking": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 60 , y:649},  // Hidden waypoint
        { x: 60, y:792 }   //Bus-Parking
    ],
    "Stationary-Sports-Room": [
        { x:779 , y: 733 },  //  Stationary
        { x:779 , y: 649 },  // Hidden waypoint
        { x:1296 , y:646},  // Hidden waypoint
        { x:1296 , y:562}   //Sports-Room
    ],
    "Stationary-Admission-Office": [
       { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x:288 , y: 650},  // Hidden waypoint
        { x: 288, y:432 },  // Hidden waypoint
        { x: 259, y:432 }   //Bus-Parking
    ],
    "Stationary-Auditorium": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 1188, y:643 },  // Hidden waypoint
        { x: 1188, y:269 }   //Auditorium
    ],
    "Stationary-Basketball-Ground": [
        { x: 779, y:733  },  // Stationary
        { x: 779, y:649  },  // Hidden waypoint
        { x: 855, y:641 },  // Hidden waypoint
        { x: 855, y:430 },  // Hidden waypoint
        { x: 827, y:421 }  //Basketball-Ground
    ],

    "Sports-Room-B-Block": [
        { x:1301 , y:582  },  //  Sports-Room
        { x:1301, y:644 },  // Hidden waypoint
        { x:1014, y:646 },  // Hidden waypoint
        { x:1014 , y:709 }   // B-Block
    ],
    "Sports-Room-C-Block": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:579 , y:638 },  // Hidden waypoint
        { x: 579, y:454  } ,  // Hidden waypoint
        { x:597 , y:454 },  // Hidden waypoint
        { x:597 , y:397 },  // Hidden waypoint
        { x:571 , y:392 }, // Hidden waypoint
        { x:571 , y:314},  // Hidden waypoint
        { x:610, y:284 } // C-Block
        
    ],
    "Sports-Room-Main-Gate": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x: 150, y:655  }   // Main-Gate
    ],
    "Sports-Room-A-Block": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:579, y:638 }  // A-Block
    ],
    "Sports-Room-Boys-Hostel": [
        { x:1301 , y:582  },  //  Sports-Room
        { x:1301 , y:673 }   // Boys-Hostel
    ],  

    "Sports-Room-Girls-Hostel": [
        { x:1301, y:582 },  // Sports-Room
        { x:1301, y:644 },  // Hidden waypoint
        { x:294, y:652  },  // Hidden waypoint
        { x:294, y:910 }  // Girls-Hostel
    ],
    "Sports-Room-Canteen": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:852, y:644 },  // Hidden waypoint
        { x:849 , y:426 },  // Hidden waypoint
        { x:827 , y: 424}  // Canteen  
    ],
    "Sports-Room-Playground": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:1014 , y:644  },  // Hidden waypoint
        { x:1014, y:625 }   // Playground
    ],
    "Sports-Room-Cricket-Net": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:1396 ,  y:641 },  // Hidden waypoint
        { x:1396 ,  y:107  },  // Hidden waypoint
        { x:1363 , y:100 }   // Cricket-Net
    ],
    "Sports-Room-Cricket-Ground": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:1443, y:644  },  // Hidden waypoint
        { x:1441 , y:617}   // Cricket-Ground
    ],
    "Sports-Room-Stationary": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x: 779, y:643  },  // Hidden waypoint
        { x: 781, y:726 }   // Stationary
    ],
    "Sports-Room-Temple": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:579 , y:454}   //Temple
    ],
    "Sports-Room-Bus-Parking": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:57 , y:650 },  // Hidden waypoint
        { x:61 , y:790 }   //Bus-Parking
    ],
    
    "Sports-Room-Admission-Office": [
        { x:1301 , y:582 },  // Sports-Room
        { x:1301 , y:644 },  // Hidden waypoint
        { x:294 , y:652 },  // Hidden waypoint
        { x:294 , y:430 },  // Hidden waypoint
        { x:256, y:429 }   //Bus-Parking
    ],
    "Sports-Room-Auditorium": [
        { x:1301 , y:582  },  // Sports-Room
        { x:1301 , y:644  },  // Hidden waypoint
        { x:1186 , y:644},  // Hidden waypoint
        { x:1186 , y:276 }   //Auditorium
    ],
    "Sports-Room-Basketball-Ground": [
        { x:1301 , y:582  },  // Sports-Room
        { x:1301 , y:644  },  // Hidden waypoint
        { x:57 , y:650},  // Hidden waypoint
        { x:61 , y:790 }   //Basketball-Ground
    ],

    "Auditorium-B-Block": [
        { x:1186 , y:265  },  // Auditorium
        { x:1189 , y:636  },  // 🔴 Fake location (Hidden waypoint)
        { x:1013 , y:651 },  // Hidden waypoint
        { x:1009 , y:705 }   // B-Block
    ],
    "Auditorium-C-Block": [
        { x:1186 , y:265 },  // Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:577 , y:636 },  // Hidden waypoint
        { x:577 , y:456  } ,  // C-Block
        { x:600 , y:455 },  // 🔴 Fake location (Hidden waypoint)
        { x:600, y:398 },  // 🔴 Fake location (Hidden waypoint)
        { x:572 , y:398 }, // 🔴 Fake location (Hidden waypoint)
        { x:569, y:316},  // 🔴 Fake location (Hidden waypoint)
        { x:610 , y:291 } // C-Block
        
    ],
    "Auditorium-Main-Gate": [
        { x:1186, y:265 },  // Auditorium
        { x:1189 , y:636  },  // Hidden waypoint
        { x:146 , y:654  }   // Main-Gate
    ],
    "Auditorium-A-Block": [
        { x:1186 , y:265  },  // Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:581 , y:642 }  // A-Block
    ],
    "Auditorium-Boys-Hostel": [
        { x:1186 , y:265  },  // Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:1296 , y:648 },  // Hidden waypoint
        { x:1296 , y:678 }   // Boys-Hostel
    ],
    "Auditorium-Girls-Hostel": [
        { x:1186 , y:265 },  //Auditorium
        { x:1189 , y:636  },  // Hidden waypoint
        { x:288 , y:653  },  // Hidden waypoint
        { x:293 , y:912 }  // Girls-Hostel
    ],
    "Auditorium-Canteen": [
        { x:1186 , y:265 },  //Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:852 , y:647 },  // Hidden waypoint
        { x:848 , y:430 },  // Hidden waypoint
        { x:834 , y:433 }  // Canteen  
    ],
    "Auditorium-Playground": [
        { x:1167 , y:221},  //Auditorium
        { x:1050 , y:240  }   // Playground
    ],
    "Auditorium-Cricket-Net": [
        { x:1167 , y:221},  // Auditorium
        { x:1120 , y:218  },  // Hidden waypoint
        { x:1195 , y:128 }   // Cricket-Net
    ],
    "Auditorium-Cricket-Ground": [
        { x:1186 , y:265  },  //Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:1439 , y:645 },  // Hidden waypoint
        { x:1446 , y:617}   // Cricket-Ground
    ],
    "Auditorium-Stationary": [
        { x:1186 , y:265  },  // Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:774 , y:651 },  // Hidden waypoint
        { x:783 , y:732 }   // Stationary
    ],
    "Auditorium-Temple": [
        { x:1186 , y:265  },  //Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:578 , y:644},  // Hidden waypoint
        { x:577 , y:453}   //Temple
    ],
    "Auditorium-Admission-Office": [
        { x:1186 , y:265 },  //Auditorium
        { x:1189 , y:636  },  // Hidden waypoint
        { x:288 , y:653 },  // Hidden waypoint
        { x:256 , y:459 }   //Admission-Office
    ],
    "Auditorium-Sports-Room": [
        { x:1186 , y:265 },  //Auditorium
        { x:1189 , y:636  },  // Hidden waypoint
        { x:1304 , y:635 },  // Hidden waypoint
        { x:1304 , y:518}   //Sports-Room
    ],
    "Auditorium-Bus-Parking": [
        { x:1186 , y:265  },  //Auditorium
        { x:1189 , y:636 },  // Hidden waypoint
        { x:62 , y:648 },  // Hidden waypoint
        { x:63 , y:796 }   //Bus-Parking
    ],
};




// Extract query parameters
const urlParams = new URLSearchParams(window.location.search);
const source = urlParams.get("source");
const destination = urlParams.get("destination");

// Ensure canvas size matches image
const canvas = document.getElementById("mapCanvas");
const mapImage = document.getElementById("mapImage");

//Ensures the canvas size matches the image size after the image loads and Calls drawRoute() to display the path.
mapImage.onload = function() {
canvas.width = mapImage.clientWidth;
canvas.height = mapImage.clientHeight;
drawRoute(source, destination);
};

//Get the path coordinates
function getPath(source, destination) {
return predefinedPaths[`${source}-${destination}`];/*|| predefinedPaths[key2] || [];*/
}


//Drawing the route on canvas
function drawRoute(source, destination) {
const waypoints = getPath(source, destination);
if (waypoints.length === 0) return;

//Sets up the canvas for drawing
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.setLineDash([5, 5]);  // Dotted line
ctx.beginPath();



/*
LOOPS THROUGH ALL WAYPOINTS AND:

*Converts absolute x/y to scaled values based on image size
*Starts from the first point (moveTo)
*Draws a line to each following point (lineTo) 
*/

waypoints.forEach((point, index) => {
//const x = (point.x / 1152) * canvas.width;
//const y = (point.y / 648) * canvas.height;

const x = (point.x / 1500) * canvas.width;
const y = (point.y / 1000) * canvas.height;

if (index === 0) ctx.moveTo(x, y);
else ctx.lineTo(x, y);
});


//Applies styles (blue, 3px thick) and actually draws the path.
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.stroke();


// 🔴 Draw source and destination markers
drawDot(waypoints[0], "green"); // source // Calling drawDot function
drawDot(waypoints[waypoints.length - 1], "red"); // destination // Calling drawDot function



generateSmartDirections(waypoints); //Calling generateSmartDirection function


}

// For marking source and the destination point
function drawDot(point, color = "red", radius = 6.5/*circle size*/) {
const ctx = canvas.getContext("2d");
const x = (point.x / 1500) * canvas.width;
const y = (point.y / 1000) * canvas.height;

ctx.save(); // Save current state of the context
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2 * Math.PI);
ctx.fillStyle = color;
ctx.fill();

ctx.restore(); // Restore previous state
}


//For text directions at the bottom of map.
function generateSmartDirections(waypoints) {
const container = document.getElementById("text-directions");
if (!container || waypoints.length < 2) return;

container.innerHTML = "<h3 style='margin-bottom:10px;'>Directions from your current position:</h3><ol style='padding-left:20px;'>";

// ⬅️ FIXED: Flip y-axis here
function getAngle(a, b) {
return Math.atan2(-(b.y - a.y), b.x - a.x);
}

for (let i = 0; i < waypoints.length - 1; i++) {
const from = waypoints[i];
const to = waypoints[i + 1];

const distance = Math.round(Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2));
let instruction = "";

if (i === 0) {
   instruction = `Continue Walking straight for about ${distance} steps.`;
} else {
   const prevAngle = getAngle(waypoints[i - 1], from);
   const currAngle = getAngle(from, to);
   let angleDiff = (currAngle - prevAngle) * (180 / Math.PI);

   // Normalize angle to -180 to 180
   angleDiff = ((angleDiff + 180) % 360) - 180;

   if (Math.abs(angleDiff) < 15) {
       instruction = `Continue straight for about ${distance} steps.`;
   } else if (angleDiff > 15 && angleDiff <= 60) {
       instruction = `Slight left turn, then walk ${distance} steps.`;
   } else if (angleDiff < -15 && angleDiff >= -60) {
       instruction = `Slight right turn, then walk ${distance} steps.`;
   } else if (angleDiff > 60) {
       instruction = `Turn left and walk ${distance} steps.`;
   } else if (angleDiff < -60) {
       instruction = `Turn right and walk ${distance} steps.`;
   } else {
       instruction = `Turn around and walk ${distance} steps.`;
   }
}

let bulletColor = "blue"; // Mid step: green
if (i === 0) bulletColor = "green"; // First: blue
if (i === waypoints.length - 2) bulletColor = "#ff0000"; // Last step: red

container.innerHTML += `<li style="--bullet-color: ${bulletColor}; list-style: none; position: relative; padding-left: 1.2em;">
   <span style="position: absolute; left: 0; color: var(--bullet-color); font-weight: bold;">•</span>
   ${instruction}
</li>`;
}

container.innerHTML += "</ol>";
}

/*
// Ensure script runs after page load
window.onload = function () {
console.log("Page fully loaded, drawing route...");
drawRoute(source, destination);
};*/

function resizeAndRedraw() {
    canvas.width = mapImage.clientWidth;
    canvas.height = mapImage.clientHeight;
    drawRoute(source, destination);
}

if (mapImage.complete) {
    // If image was cached and already loaded
    resizeAndRedraw();
} else {
    mapImage.onload = resizeAndRedraw;
}


/*
//Redraw route on window resize
window.addEventListener("resize", function() {
drawRoute(source, destination);
});*/

window.addEventListener("resize", resizeAndRedraw);


//Go back to home page
function goBack() {
window.location.href = "index.html";
}

// 🔹 Remove overlay + hint after 5s
setTimeout(() => {
const overlay = document.querySelector(".directions-overlay-fade");
const hint = document.querySelector(".scroll-hint");
if (overlay) overlay.remove();
if (hint) hint.remove();
}, 2000);

