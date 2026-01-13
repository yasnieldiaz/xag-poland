import { PartsCatalogMulti } from "@/components/parts-catalog/PartsCatalogMulti";
import { PartsGroupData } from "@/components/parts-catalog/types";

// Demo parts data - in production this would come from a CMS or API
const getPartsData = (productSlug: string, groupSlug: string): PartsGroupData | null => {
  const partsDatabase: Record<string, Record<string, PartsGroupData>> = {
    "p100-pro-2023": {
      "arm": {
        title: "001-P100H Pro 2023 Arm",
        diagrams: [
          {
            id: "arm-1",
            title: "Arm Assembly",
            image: "/images/parts/p100-arm-diagram-1-hq.jpg",
            parts: [
              { id: "1", number: "1", code: "02-002-10353", name: "Motor/Servo Bracket Pin", quantity: 16, position: { x: 72, y: 8 },
                subParts: [{ id: "1.1", number: "1.1", code: "02-004-01038", name: "M5*20 Screw (Special)", quantity: 16 }]
              },
              { id: "2", number: "2", code: "02-001-08187", name: "Motor/Servo Bracket Pin Buffer", quantity: 16, position: { x: 82, y: 12 } },
              { id: "3", number: "3", code: "02-001-08858", name: "L-Type Tube Fitting (for Arm 3/4)", quantity: 2, position: { x: 78, y: 28 } },
              { id: "4", number: "4", code: "02-001-07674", name: "Arm Rubber Protector Support", quantity: 4, position: { x: 72, y: 32 },
                subParts: [{ id: "4.1", number: "4.1", code: "02-004-00918", name: "ST4.2*8 Tapping Screw", quantity: 4 }]
              },
              { id: "5", number: "5", code: "02-001-07249", name: "Arm Rubber Protector", quantity: 4, position: { x: 88, y: 35 } },
              { id: "6", number: "6", code: "02-001-09021", name: "Arm Rubber Protector Bracket", quantity: 4, position: { x: 92, y: 42 },
                subParts: [{ id: "6.1", number: "6.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 4 }]
              },
              { id: "7", number: "7", code: "02-001-09012", name: "Motor Connector Bracket", quantity: 4, position: { x: 85, y: 52 },
                subParts: [{ id: "7.1", number: "7.1", code: "02-004-00775", name: "ST4.0*16 Screws", quantity: 2 }]
              },
              { id: "8", number: "8", code: "02-001-08203", name: "Motor Connector Housing", quantity: 4, position: { x: 82, y: 58 },
                subParts: [{ id: "8.1", number: "8.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 4 }]
              },
              { id: "9", number: "9", code: "02-002-11658", name: "Motor Connector Isolator (Thick)", quantity: 12, position: { x: 68, y: 52 },
                subParts: [{ id: "9.1", number: "9.1", code: "02-004-00978", name: "M4*18*8 Screw Kit", quantity: 3 }]
              },
              { id: "10", number: "10", code: "02-001-08855", name: "Nozzle Extension Rod Tube Clip", quantity: 2, position: { x: 72, y: 62 },
                subParts: [{ id: "10.1", number: "10.1", code: "02-004-01075", name: "M3*16*6 Hex Cylinder Head Screw", quantity: 4 }]
              },
              { id: "11", number: "11", code: "02-001-09515", name: "Nozzle Extension Rod Internal Cable Bracket", quantity: 2, position: { x: 75, y: 68 },
                subParts: [{ id: "11.1", number: "11.1", code: "02-004-00841", name: "M3*8 screws", quantity: 1 }]
              },
              { id: "12", number: "12", code: "02-001-09317", name: "Nozzle Extension Rod", quantity: 2, position: { x: 68, y: 78 },
                subParts: [{ id: "12.1", number: "12.1", code: "02-001-11738", name: "Spray Extension Bar (Nozzle Upgrade Kit)", quantity: 4 }]
              },
              { id: "13", number: "13", code: "02-001-08857", name: "Nozzle Extension Rod Clip (for Folded Position)", quantity: 1, position: { x: 52, y: 82 },
                subParts: [{ id: "13.1", number: "13.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 4 }]
              },
              { id: "14", number: "14", code: "02-001-09040", name: "Nozzle Extension Rod Release Knob", quantity: 2, position: { x: 45, y: 72 },
                subParts: [{ id: "14.1", number: "14.1", code: "02-001-08068", name: "Spiral Feeder Motor Gear Shaft Seal", quantity: 1 }]
              },
              { id: "15", number: "15", code: "02-001-08363", name: "Spare Nozzle Cable Organizer", quantity: 2, position: { x: 48, y: 58 } },
              { id: "16", number: "16", code: "02-001-09200", name: "Nozzle Extension Rod Bracket (Left/Right)", quantity: 2, position: { x: 52, y: 52 },
                subParts: [{ id: "16.1", number: "16.1", code: "02-004-00834", name: "Hex Cylinder Head Triple Combination Self-locking Screw", quantity: 4 }]
              },
              { id: "17", number: "17", code: "02-001-08981", name: "Arm Cable Protector", quantity: 4, position: { x: 55, y: 42 } },
              { id: "18", number: "18", code: "02-001-08978", name: "Arm Strap Holder", quantity: 4, position: { x: 42, y: 42 } },
              { id: "19", number: "19", code: "02-001-08986", name: "Arm Strap Bracket", quantity: 4, position: { x: 38, y: 48 } },
              { id: "20", number: "20", code: "02-001-09590", name: "Arm Strap (for Folded Position)", quantity: 4, position: { x: 25, y: 58 } },
              { id: "21", number: "21", code: "14-006-00028", name: "Arm Joint Pin Kit", quantity: 4, position: { x: 28, y: 42 } },
              { id: "22", number: "22", code: "02-007-00238", name: "Arm Interior Foam Protector (Fuselage Side)", quantity: 4, position: { x: 22, y: 38 } },
              { id: "23", number: "23", code: "02-002-07249", name: "Arm Clamp", quantity: 8, position: { x: 12, y: 35 },
                subParts: [{ id: "23.1", number: "23.1", code: "02-004-00780", name: "Hex Triple Combination Anti Drop Screw", quantity: 2 }]
              },
              { id: "24", number: "24", code: "02-001-09592", name: "Arm (Fuselage Side)", quantity: 4, position: { x: 18, y: 18 } },
              { id: "25", number: "25", code: "02-001-06306", name: "Fuselage Arm Cover", quantity: 4, position: { x: 25, y: 8 } },
              { id: "26", number: "26", code: "02-001-09632", name: "Arm (Motor Side)", quantity: 4, position: { x: 42, y: 22 } },
              { id: "27", number: "27", code: "14-006-00044", name: "Arm Clamp Clip Pin", quantity: 4, position: { x: 48, y: 18 } },
              { id: "28", number: "28", code: "14-006-00049", name: "Arm Clamp Clip Kit", quantity: 2, position: { x: 58, y: 28 },
                subParts: [{ id: "28.1", number: "28.1", code: "02-004-00659", name: "M4*10 Countersunk Screw", quantity: 1 }]
              },
              { id: "29", number: "29", code: "14-006-00041", name: "Arm Clamp Handle", quantity: 2, position: { x: 62, y: 22 } },
              { id: "30", number: "30", code: "02-001-07349", name: "Motor Bracket", quantity: 4, position: { x: 55, y: 15 },
                subParts: [{ id: "30.1", number: "30.1", code: "02-004-00939", name: "M5*16*10 Screw Kit", quantity: 6 }]
              },
            ],
          },
          {
            id: "arm-2",
            title: "Motor & Propeller",
            image: "/images/parts/p100-arm-diagram-2-hq.jpg",
            hideMarkers: true,
            parts: [
              { id: "1", number: "1", code: "14-006-00001", name: "55\" Foldable Propeller Blades Kit (CCW) - 55\" version", quantity: 2, position: { x: 88, y: 8 },
                subParts: [
                  { id: "1.1", number: "1.1", code: "02-003-00823", name: "Adjustable webbing", quantity: 1 },
                  { id: "1.2", number: "1.2", code: "03-010-00165", name: "Propeller Holder", quantity: 1 }
                ]
              },
              { id: "2", number: "2", code: "14-006-00010", name: "Propeller clamp (55\" version)", quantity: 4, position: { x: 82, y: 18 },
                subParts: [{ id: "2.1", number: "2.1", code: "02-004-00824", name: "M6*40*12 screws", quantity: 2 }]
              },
              { id: "3", number: "3", code: "02-002-12104", name: "Foldable Propeller Clamp Bracket Pin Bushing", quantity: 4, position: { x: 78, y: 28 } },
              { id: "4", number: "4", code: "02-001-09041", name: "55\" Foldable Propeller Gasket (CCW/CW)", quantity: 16, position: { x: 82, y: 32 } },
              { id: "5", number: "5", code: "02-002-12102", name: "55\" Foldable Propeller Clamp Bracket", quantity: 4, position: { x: 78, y: 40 },
                subParts: [{ id: "5.1", number: "5.1", code: "02-004-01189", name: "M6*20*12 screws", quantity: 4 }]
              },
              { id: "6", number: "6", code: "02-005-00396", name: "Motor", quantity: 4, position: { x: 88, y: 48 } },
              { id: "7", number: "7", code: "05-002-01767", name: "ESC", quantity: 4, position: { x: 38, y: 35 },
                subParts: [
                  { id: "7.1", number: "7.1", code: "02-004-00836", name: "M4*16*8 Screw Kit", quantity: 2 },
                  { id: "7.2", number: "7.2", code: "02-004-00834", name: "Hex Cylinder Head Triple Combination Self-locking Screw", quantity: 4 },
                  { id: "7.3", number: "7.3", code: "02-002-09974", name: "Main Power Cord Connector Isolator", quantity: 2 }
                ]
              },
              { id: "8", number: "8", code: "02-002-12169", name: "Foldable Propeller Clamp Pin", quantity: 8, position: { x: 48, y: 28 } },
              { id: "9", number: "9", code: "02-002-12103", name: "Foldable Propeller Clamp Bracket Pin", quantity: 4, position: { x: 55, y: 22 } },
            ],
          },
        ],
      },
      "fuselage-front": {
        title: "002-P100H Pro 2023 Fuselage Front Compartment",
        diagrams: [
          {
            id: "fuselage-front-1",
            title: "Frame",
            image: "/images/parts/p100-fuselage-diagram-1-hq.jpg",
            hideMarkers: true,
            parts: [
              { id: "1", number: "1", code: "05-002-01870", name: "Front Hood (International Version)", quantity: 1, position: { x: 50, y: 20 } },
              { id: "2", number: "2", code: "02-001-08076", name: "Front Hood Rack", quantity: 2, position: { x: 50, y: 25 },
                subParts: [{ id: "2.1", number: "2.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 2 }]
              },
              { id: "3", number: "3", code: "02-001-07397", name: "Front Hood Clip (Rear)", quantity: 1, position: { x: 50, y: 30 },
                subParts: [{ id: "3.1", number: "3.1", code: "02-004-00937", name: "M3*8*6 Screw Kit", quantity: 2 }]
              },
              { id: "4", number: "4", code: "02-001-07970", name: "Antenna Cable Organizer", quantity: 1, position: { x: 50, y: 35 },
                subParts: [{ id: "4.1", number: "4.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 2 }]
              },
              { id: "5", number: "5", code: "02-001-09448", name: "Fuselage Front Compartment Frame", quantity: 1, position: { x: 50, y: 40 },
                subParts: [{ id: "5.1", number: "5.1", code: "02-004-00939", name: "M5*16*10 Screw Kit", quantity: 8 }]
              },
              { id: "6", number: "6", code: "02-001-07999", name: "Front Rack Bracket (Left)", quantity: 1, position: { x: 50, y: 45 },
                subParts: [{ id: "6.1", number: "6.1", code: "02-004-00834", name: "Hexagonal Cylinder Head Triple Combination Self-locking Screw", quantity: 3 }]
              },
              { id: "7", number: "7", code: "02-001-08239", name: "Front Cable Organizer (Small)", quantity: 2, position: { x: 50, y: 50 },
                subParts: [{ id: "7.1", number: "7.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 2 }]
              },
              { id: "8", number: "8", code: "02-002-12166", name: "Front Rack", quantity: 1, position: { x: 50, y: 55 } },
              { id: "9", number: "9", code: "14-005-00005", name: "Optical Flow Lens Shade", quantity: 1, position: { x: 50, y: 60 } },
              { id: "10", number: "10", code: "02-001-09447", name: "Front Modules Bracket", quantity: 1, position: { x: 50, y: 65 },
                subParts: [{ id: "10.1", number: "10.1", code: "02-004-00834", name: "Hexagonal Cylinder Head Triple Combination Self-locking Screw", quantity: 4 }]
              },
              { id: "11", number: "11", code: "02-001-08982", name: "Downward FPV Camera Bracket", quantity: 1, position: { x: 50, y: 70 },
                subParts: [{ id: "11.1", number: "11.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 2 }]
              },
              { id: "12", number: "12", code: "02-001-07399", name: "Front Hood Clip (Front)", quantity: 2, position: { x: 50, y: 75 },
                subParts: [{ id: "12.1", number: "12.1", code: "02-004-00937", name: "M3*8*6 Screw Kit", quantity: 1 }]
              },
              { id: "13", number: "13", code: "02-001-08433", name: "Front Cable Organizer (Large)", quantity: 1, position: { x: 50, y: 80 },
                subParts: [{ id: "13.1", number: "13.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 2 }]
              },
              { id: "14", number: "14", code: "02-001-08000", name: "Front Rack Bracket (Right)", quantity: 1, position: { x: 50, y: 85 },
                subParts: [{ id: "14.1", number: "14.1", code: "02-004-00834", name: "Hexagonal Cylinder Head Triple Combination Self-locking Screw", quantity: 3 }]
              },
            ],
          },
          {
            id: "fuselage-front-2",
            title: "FC and Sensing System",
            image: "/images/parts/p100-fuselage-diagram-2-hq.jpg",
            hideMarkers: true,
            parts: [
              { id: "1", number: "1", code: "05-002-01265", name: "Terrain Module", quantity: 1, position: { x: 50, y: 20 },
                subParts: [{ id: "1.1", number: "1.1", code: "02-004-00523", name: "M2.5*8*4.5 screws", quantity: 3 }]
              },
              { id: "2", number: "2", code: "05-002-01262", name: "UPS Module", quantity: 1, position: { x: 50, y: 30 },
                subParts: [{ id: "2.1", number: "2.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 4 }]
              },
              { id: "3", number: "3", code: "05-002-01681", name: "FPV Camera (Downward)", quantity: 1, position: { x: 50, y: 40 },
                subParts: [{ id: "3.1", number: "3.1", code: "02-004-00523", name: "M2.5*8*4.5 screws", quantity: 2 }]
              },
              { id: "4", number: "4", code: "05-002-01349", name: "FPV Camera", quantity: 1, position: { x: 50, y: 50 },
                subParts: [{ id: "4.1", number: "4.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 4 }]
              },
              { id: "5", number: "5", code: "05-002-01880", name: "SuperX4 Pro Flight Controller (International Version)", quantity: 1, position: { x: 50, y: 60 },
                subParts: [{ id: "5.1", number: "5.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 4 }]
              },
              { id: "6", number: "6", code: "05-002-01769", name: "4D Imaging Radar (Dynamic Radar)(Chinese Version)", quantity: 1, position: { x: 50, y: 70 },
                subParts: [{ id: "6.1", number: "6.1", code: "02-004-00833", name: "M4*10*8 Screw Kit", quantity: 4 }]
              },
            ],
          },
        ],
      },
      "fuselage": {
        title: "003-P100H Pro 2023 Fuselage",
        diagrams: [
          {
            id: "fuselage-frame",
            title: "Frame",
            image: "/images/parts/p100-fuselage-sub1.jpg",
            hideMarkers: true,
            parts: [
              { id: "1", number: "1", code: "14-005-00021", name: "Main Fuselage", quantity: 2, position: { x: 50, y: 30 } },
              { id: "2", number: "2", code: "02-001-08932", name: "Central Cable & Tube Organizer", quantity: 1, position: { x: 45, y: 35 },
                subParts: [{ id: "2.1", number: "2.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 2 }]
              },
              { id: "3", number: "3", code: "02-001-07711", name: "Arm Clamp Dustproof Cover", quantity: 8, position: { x: 55, y: 25 } },
              { id: "4", number: "4", code: "02-002-09897", name: "Main Fuselage Beam", quantity: 2, position: { x: 30, y: 50 },
                subParts: [{ id: "4.1", number: "4.1", code: "02-004-00939", name: "M5*16*10 Screw Kit", quantity: 10 }]
              },
              { id: "5", number: "5", code: "02-001-08156", name: "Central Hood", quantity: 1, position: { x: 70, y: 20 },
                subParts: [{ id: "5.1", number: "5.1", code: "02-004-00918", name: "ST4.2*8 Tapping Screw", quantity: 4 }]
              },
              { id: "6", number: "6", code: "02-001-07657", name: "Fuselage Side Panel", quantity: 4, position: { x: 25, y: 40 },
                subParts: [
                  { id: "6.1", number: "6.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 2 },
                  { id: "6.2", number: "6.2", code: "02-004-00618", name: "M4*8*8 Screw Kit", quantity: 2 }
                ]
              },
              { id: "7", number: "7", code: "02-001-09446", name: "Fuselage Handle 4G Antenna Bracket", quantity: 2, position: { x: 35, y: 22 } },
              { id: "8", number: "8", code: "02-001-08829", name: "Fuselage Handle", quantity: 2, position: { x: 28, y: 18 },
                subParts: [{ id: "8.1", number: "8.1", code: "02-004-01053", name: "M6*22*12 Screw Kit", quantity: 2 }]
              },
              { id: "9", number: "9", code: "14-005-00026", name: "Application System Releasable Hook", quantity: 2, position: { x: 20, y: 35 } },
              { id: "10", number: "10", code: "02-002-09829", name: "Application System Releasable Hook Pin", quantity: 2, position: { x: 40, y: 28 } },
              { id: "11", number: "11", code: "14-005-00022", name: "Application System Releasable Hook Bracket", quantity: 2, position: { x: 42, y: 32 },
                subParts: [{ id: "11.1", number: "11.1", code: "02-004-00939", name: "M5*16*10 Screw Kit", quantity: 4 }]
              },
              { id: "12", number: "12", code: "02-007-00200", name: "Main Fuselage Interior Foam Protector", quantity: 4, position: { x: 15, y: 45 } },
              { id: "13", number: "13", code: "02-001-08979", name: "Antenna Mount Cap", quantity: 2, position: { x: 18, y: 38 } },
              { id: "14", number: "14", code: "02-001-07658", name: "RTK & Radio Antenna Bracket", quantity: 2, position: { x: 22, y: 55 },
                subParts: [{ id: "14.1", number: "14.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 2 }]
              },
              { id: "15", number: "15", code: "02-001-07990", name: "Application System Mount", quantity: 4, position: { x: 32, y: 58 },
                subParts: [{ id: "15.1", number: "15.1", code: "02-004-00834", name: "Hexagonal Cylinder Head Triple Combination Self-locking Screw", quantity: 4 }]
              },
              { id: "16", number: "16", code: "02-001-08831", name: "Fuselage Handle 4G Antenna Bracket Cable Clip", quantity: 4, position: { x: 38, y: 62 },
                subParts: [{ id: "16.1", number: "16.1", code: "02-004-00531", name: "M2.5*6*4.5 Screw Kit", quantity: 2 }]
              },
              { id: "17", number: "17", code: "02-001-07622", name: "Application System Mount Rubber Buffer", quantity: 4, position: { x: 48, y: 42 } },
              { id: "18", number: "18", code: "02-001-08784", name: "Central Power Busbar O-ring", quantity: 1, position: { x: 52, y: 48 } },
              { id: "19", number: "19", code: "02-001-08238", name: "Central Power Busbar Screw Dust Proof Cover", quantity: 2, position: { x: 35, y: 52 } },
              { id: "20", number: "20", code: "02-001-08976", name: "V-Type Tube Fitting", quantity: 2, position: { x: 55, y: 55 },
                subParts: [{ id: "20.1", number: "20.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 1 }]
              },
              { id: "21", number: "21", code: "02-001-08483", name: "Fuselage Bottom Shield", quantity: 1, position: { x: 60, y: 45 },
                subParts: [{ id: "21.1", number: "21.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 4 }]
              },
            ],
          },
          {
            id: "fuselage-power",
            title: "Power Distribution",
            image: "/images/parts/p100-fuselage-sub2.jpg",
            hideMarkers: true,
            parts: [
              { id: "1", number: "1", code: "02-002-09974", name: "Main Power Cord Connector Isolator", quantity: 12, position: { x: 45, y: 20 } },
              { id: "2", number: "2", code: "14-006-00024", name: "Central Cable Hub", quantity: 1, position: { x: 50, y: 30 } },
              { id: "3", number: "3", code: "02-001-08213", name: "Central Power Busbar", quantity: 1, position: { x: 40, y: 35 },
                subParts: [{ id: "3.1", number: "3.1", code: "02-004-00833", name: "M4*10*8 Screw Kit", quantity: 4 }]
              },
              { id: "4", number: "4", code: "14-005-00027", name: "Battery Socket", quantity: 2, position: { x: 70, y: 25 },
                subParts: [{ id: "4.1", number: "4.1", code: "02-004-00836", name: "M4*16*8 Screw Kit", quantity: 2 }]
              },
              { id: "5", number: "5", code: "01-027-02536", name: "Y-Type Signal Cable (for Battery Sockets)", quantity: 1, position: { x: 75, y: 30 } },
            ],
          },
          {
            id: "fuselage-cables",
            title: "Cables",
            image: "/images/parts/p100-fuselage-sub3.jpg",
            hideMarkers: true,
            parts: [
              { id: "1", number: "1", code: "14-006-00024", name: "Central Cable Hub", quantity: 1, position: { x: 50, y: 15 } },
              { id: "2", number: "2", code: "02-001-08213", name: "Central Power Busbar", quantity: 1, position: { x: 50, y: 25 },
                subParts: [{ id: "2.1", number: "2.1", code: "02-004-00833", name: "M4*10*8 Screw Kit", quantity: 4 }]
              },
              { id: "3", number: "3", code: "14-006-00016", name: "Short Liquid Tube (Spraying System - Fuselage)", quantity: 2, position: { x: 70, y: 55 } },
              { id: "4", number: "4", code: "01-027-02338", name: "Application System Main Connect Cable", quantity: 1, position: { x: 70, y: 65 } },
            ],
          },
          {
            id: "fuselage-antennas",
            title: "Antennas",
            image: "/images/parts/p100-fuselage-sub4.jpg",
            hideMarkers: true,
            parts: [
              { id: "1", number: "1", code: "01-003-00379", name: "RTK Antenna (Right)", quantity: 1, position: { x: 22, y: 25 },
                subParts: [{ id: "1.1", number: "1.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 4 }]
              },
              { id: "2", number: "2", code: "01-003-00374", name: "4G Antenna", quantity: 4, position: { x: 32, y: 25 } },
              { id: "3", number: "3", code: "01-003-00373", name: "Radio Antenna (Dual Band)", quantity: 1, position: { x: 45, y: 25 } },
              { id: "4", number: "4", code: "01-003-00373", name: "Radio Antenna (Dual Band)", quantity: 1, position: { x: 58, y: 25 } },
              { id: "5", number: "5", code: "01-003-00378", name: "RTK Antenna (Left)", quantity: 1, position: { x: 72, y: 25 },
                subParts: [{ id: "5.1", number: "5.1", code: "02-004-00903", name: "ST2.9*8 Tapping Screw", quantity: 4 }]
              },
            ],
          },
        ],
      },
      "tail-frame": {
        title: "004-P100H Pro 2023 Tail Frame",
        diagrams: [{
          id: "tail-1",
          title: "Tail Frame Assembly",
          image: "/images/parts/p100-tail-frame-diagram.jpg",
          parts: [
            {
              id: "1",
              number: "1",
              code: "02-001-09024",
              name: "Tail Frame",
              quantity: 1,
              position: { x: 50, y: 25 },
              subParts: [
                { id: "1.1", number: "1.1", code: "02-004-00939", name: "M5*16*10 Screw Kit", quantity: 8 }
              ]
            },
            {
              id: "2",
              number: "2",
              code: "02-001-08078",
              name: "Battery Guide Rubber Buffer",
              quantity: 2,
              position: { x: 25, y: 40 }
            },
            {
              id: "3",
              number: "3",
              code: "02-002-09098",
              name: "Tail Frame Beam",
              quantity: 1,
              position: { x: 50, y: 55 },
              subParts: [
                { id: "3.1", number: "3.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 8 }
              ]
            },
            {
              id: "4",
              number: "4",
              code: "14-005-00006",
              name: "Battery Guide Kit (incl Rubber Buffers)",
              quantity: 2,
              position: { x: 75, y: 40 },
              subParts: [
                { id: "4.1", number: "4.1", code: "02-004-00994", name: "M4*12 Countersunk Screw", quantity: 2 }
              ]
            },
            {
              id: "5",
              number: "5",
              code: "02-001-08009",
              name: "Battery Socket Upper Housing",
              quantity: 2,
              position: { x: 30, y: 70 },
              subParts: [
                { id: "5.1", number: "5.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 4 }
              ]
            },
            {
              id: "6",
              number: "6",
              code: "02-001-08462",
              name: "Battery Socket Lower Housing",
              quantity: 2,
              position: { x: 70, y: 70 },
              subParts: [
                { id: "6.1", number: "6.1", code: "02-004-00624", name: "M3*10*6 Screw Kit", quantity: 4 }
              ]
            },
          ],
        }],
      },
      "revospray": {
        title: "005-P100H Pro 2023 Revospray",
        diagrams: [{
          id: "revospray-1",
          title: "RevoSpray System",
          image: "/images/parts/groups/placeholder.svg",
          parts: [
            { id: "1", number: "1", code: "02-001-07952", name: "Application System Upper Frame", quantity: 4, position: { x: 50, y: 20 } },
            { id: "2", number: "2", code: "02-002-10890", name: "Landing Skid (Right)", quantity: 1, position: { x: 70, y: 30 } },
            { id: "3", number: "3", code: "02-002-10891", name: "Landing Skid (Left)", quantity: 1, position: { x: 30, y: 30 } },
          ],
        }],
      },
      "revocast": {
        title: "006-P100H Pro 2023 RevoCast",
        diagrams: [{
          id: "revocast-1",
          title: "RevoCast System",
          image: "/images/parts/groups/placeholder.svg",
          parts: [
            { id: "1", number: "1", code: "06-001-00400", name: "Spreading Hopper Assembly", quantity: 1, position: { x: 50, y: 30 } },
            { id: "2", number: "2", code: "06-001-00401", name: "Impeller Disc", quantity: 1, position: { x: 50, y: 60 } },
          ],
        }],
      },
    },
    "p150-max-2023": {
      "arm": {
        title: "001-P150 Max 2023 Arm",
        diagrams: [{
          id: "p150-arm-1",
          title: "Arm Assembly",
          image: "/images/parts/groups/placeholder.svg",
          parts: [
            { id: "1", number: "1", code: "P150-001-001", name: "P150 Arm Assembly", quantity: 4, position: { x: 50, y: 40 } },
          ],
        }],
      },
    },
  };

  return partsDatabase[productSlug]?.[groupSlug] || null;
};

interface PageProps {
  params: Promise<{ productSlug: string; groupSlug: string }>;
}

export default async function GroupPartsPage({ params }: PageProps) {
  const { productSlug, groupSlug } = await params;
  const partsData = getPartsData(productSlug, groupSlug);

  if (!partsData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-2">Parts Not Found</h1>
          <p className="text-gray-500">The requested parts catalog is not available.</p>
        </div>
      </div>
    );
  }

  return <PartsCatalogMulti data={partsData} productSlug={productSlug} />;
}
