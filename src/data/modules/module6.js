export const module6 = {
  id: 6,
  slug: "blender-fundamentals",
  title: "MODULE 6: BLENDER FUNDAMENTALS",
  subtitle: "Interface, 3D Viewport, Lighting, Cameras aur EEVEE/Cycles Rendering",
  description: "Duniya ke sabse powerful open-source 3D software ko zero se master karein. Navigation shortcuts, 3-point cinematic lighting, camera focal lengths aur rendering engines ka complete mastery.",
  icon: "Monitor",
  badge: "Studio Suite",
  totalLessons: 7,
  totalDuration: "96 min",
  lessons: [
    {
      id: "m6-l1",
      moduleId: 6,
      lessonNumber: 1,
      title: "1. Installing Blender",
      duration: "12 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Blender ek world-class, 100% Free aur Open Source 3D creation suite hai jo Windows, Mac aur Linux sabhi platforms par chalta hai. Isme na koi watermark hota hai, na koi subscription fee, aur na hi koi expiry date!

Installation & Hardware Setup Blueprint:
1. **Official Download Source:**
   Hamesha **blender.org/download** se hi download karein. Kabhi third-party suspicious sites se mat karein.
2. **Recommended System Configuration:**
   - 64-bit 8-core CPU (Intel i5/i7/i9 ya AMD Ryzen ya Apple M-series Silicon).
   - 16 GB RAM (minimum 8 GB chal jayega, 32 GB recommended).
   - Dedicated GPU: NVIDIA RTX series (RTX 3060, 4060+) with CUDA/OptiX support, ya AMD Radeon with HIP, ya Apple Silicon M1/M2/M3/M4.
3. **Preferences & GPU Compute Enable:**
   Install karne ke baad Edit -> Preferences -> System mein jakar **CUDA / OptiX (NVIDIA)** ya **Metal (Mac)** checkbox ko zaroor check karein taaki rendering aapke powerful graphics card par chale, slow CPU par nahi!`,
      learningObjectives: [
        "Blender 4.x official installer download aur securely install karna.",
        "System preferences mein GPU compute acceleration (OptiX / Metal) enable karna.",
        "Status bar aur viewport statistics configure karna.",
        "Navigation preferences (Orbit around selection, Auto-depth) optimize karna."
      ],
      requiredTools: [
        "Computer with Windows, macOS or Linux",
        "Blender 4.x installer (blender.org)",
        "Latest GPU graphics drivers installed"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Download Blender Installer",
          description: "Visit blender.org/download and download the latest stable release for your OS."
        },
        {
          step: 2,
          title: "Run Installation Wizard",
          description: "Execute the setup wizard, accept GNU GPL license, and complete installation."
        },
        {
          step: 3,
          title: "Activate GPU Hardware Acceleration",
          description: "Launch Blender. Go to Edit -> Preferences -> System -> Cycles Render Devices. Select OptiX (for NVIDIA) or Metal (for Mac Silicon) and check your GPU."
        },
        {
          step: 4,
          title: "Save Startup File",
          description: "Customize your layout and click File -> Defaults -> Save Startup File."
        }
      ],
      practicalExample: "GPU Acceleration Impact: CPU par ek 3D frame render hone mein 3 minute 45 second lagte the. Preferences mein jakar NVIDIA OptiX GPU check karne ke baad wahi frame sirf 11 seconds mein render ho gaya! 20x speedup!",
      readyPrompts: [
        {
          title: "Blender Benchmark Asset Concept",
          prompt: "High-tech futuristic cyber laboratory with neon servers, glass chambers and reflective tile floor, octane render aesthetic, 8k",
          useCase: "Rendering speed benchmark test"
        }
      ],
      commonMistakes: [
        {
          mistake: "Blender install karne ke baad GPU preferences enable karna bhool jana.",
          fix: "Hamesha Preferences -> System mein jakar verify karein ki GPU checked hai, warna Blender slow CPU rendering use karega."
        },
        {
          mistake: "Outdated graphics card drivers.",
          fix: "NVIDIA GeForce Experience ya Apple Software update se latest drivers install karein."
        }
      ],
      homework: "Blender 4.x install karein, Preferences mein jakar GPU enable karein aur System tab ka screenshot save karein.",
      summary: "Blender 100% free open-source software hai. Installation ke baad GPU acceleration enable karna lightning-fast rendering ke liye mandatory hai.",
      quiz: [
        {
          question: "Blender software download karne ki official legitimate website kaunsi hai?",
          options: ["blender.org", "blender-free-cracked.net", "randomdownloads.com", "blender.gov"],
          correctIndex: 0,
          explanation: "blender.org official open-source foundation website hai jahan se latest virus-free release milti hai."
        },
        {
          question: "NVIDIA RTX graphics card par fastest rendering performance ke liye Blender mein kaunsa GPU engine select kiya jata hai?",
          options: ["OptiX", "Floppy Disk", "CPU only", "VGA standard"],
          correctIndex: 0,
          explanation: "NVIDIA OptiX hardware ray-tracing RT cores ka direct use karta hai jo CUDA se bhi 2x fast rendering deta hai."
        },
        {
          question: "Apple Mac Silicon (M1/M2/M3/M4) users ke liye kaunsa backend accelerator use hota hai?",
          options: ["Metal", "DirectX 9", "OpenCL legacy", "DOS"],
          correctIndex: 0,
          explanation: "Metal Apple ka native low-overhead graphics API hai jo Apple Silicon unified memory GPU par blazingly fast chalta hai."
        },
        {
          question: "Blender ka license format kya hai?",
          options: ["GNU GPL (100% Free for commercial and personal use)", "$100 yearly fee", "Trial for 7 days only", "Pay per render"],
          correctIndex: 0,
          explanation: "GNU General Public License Blender ko hamesha ke liye free banata hai bina kisi commercial restriction ke."
        },
        {
          question: "Blender launch hone par screen par aane wale starting box ko kya kehte hain?",
          options: ["Splash Screen", "Error pop-up", "Billing screen", "Captcha gate"],
          correctIndex: 0,
          explanation: "Splash screen recent files, new file presets aur version information display karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum duniya ke sabse versatile 3D suite — Blender 4.x ko apne system par install aur optimize karenge. Let's configure your digital studio!",
        whatToShowOnScreen: "Browser blender.org download sequence -> Setup wizard execution -> First launch splash screen -> Edit Preferences System window -> OptiX/Metal GPU checkbox toggle.",
        screenRecordingSteps: [
          "Step 1: blender.org/download se installer download karein.",
          "Step 2: Installation run karein aur finish karein.",
          "Step 3: Blender launch karke Splash screen dismiss karein.",
          "Step 4: Edit -> Preferences -> System open karein.",
          "Step 5: Cycles render devices mein GPU check karein aur settings save karein."
        ],
        voiceoverHindi: "Dosto screen par dekhiye. Yeh Preferences wala step sabse important hai. Yahan OptiX check karne se aapke graphics card ke AI Tensor aur RT cores activate ho jaate hain. Ab humara system cinematic frames seconds mein bake karne ke liye taiyar hai!",
        practicalDemo: "GPU compute benchmark toggle and instant render preview.",
        endingAndHomework: "Blender setup complete kijiye. Agle lesson mein hum Blender ke interface aur 3D navigation ko master karenge!"
      }
    },
    {
      id: "m6-l2",
      moduleId: 6,
      lessonNumber: 2,
      title: "2. Understanding Blender interface",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Pehli baar Blender kholne par interface thoda intimidating ya complex lag sakta hai kyunki screen par bohot saare panels aur buttons hote hain. Lekin ek baar jab aap iska logical structure samajh lete hain, toh yeh duniya ka sabse intuitive software ban jata hai!

Blender Interface ke 5 Core Zones:
1. **3D Viewport (Center Stage):** Sabse bada area jahan aapke 3D models, cameras, aur lights live exist karte hain.
2. **Outliner (Top-Right):** Aapke scene ke saare objects ki folder hierarchy (Collection list). Jaise computer mein file explorer hota hai.
3. **Properties Panel (Bottom-Right):** Is panel mein 12 vertical tabs hote hain jahan se Camera settings, Render settings, Modifiers, Materials aur Physics control hote hain.
4. **Timeline (Bottom):** Video aur animation ke keyframes scrub karne aur play/pause karne ke liye horizontal bar.
5. **Top Header & Workspaces:** Layout, Modeling, Sculpting, Shading, Animation, aur Compositing ke ready-made task layouts.

Navigation Golden Triad:
- **Middle Mouse Button (MMB) Drag:** Orbit View (Scene ghumana).
- **Shift + MMB Drag:** Pan View (Camera ko left/right/up/down slide karna).
- **Scroll Wheel:** Zoom In / Zoom Out.`,
      learningObjectives: [
        "Blender ke 5 primary workspace zones identify aur operate karna.",
        "Navigation shortcuts (Orbit, Pan, Zoom, Focus) muscle memory mein lana.",
        "View Gizmo aur Numpad view switching (Front, Side, Top, Camera) master karna.",
        "Custom window splits aur workspace reorganization perform karna."
      ],
      requiredTools: [
        "Blender 4.x installed",
        "Three-button mouse (scroll wheel click)",
        "Numpad keyboard (or 'Emulate Numpad' preference)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Master 3D Mouse Navigation",
          description: "Click and hold Scroll Wheel to Orbit. Hold Shift + Scroll Wheel to Pan. Roll wheel to Zoom."
        },
        {
          step: 2,
          title: "Focus on Selected Object",
          description: "Select any object and press Numpad Period (.) or '~' key -> View Selected to instantly center camera on it."
        },
        {
          step: 3,
          title: "Switch Orthographic Perspectives",
          description: "Press Numpad 1 for Front View, Numpad 3 for Side View, Numpad 7 for Top View, and Numpad 0 for Camera View."
        },
        {
          step: 4,
          title: "Toggle Sidebar & Toolbar",
          description: "Press 'T' to toggle left Toolbar. Press 'N' to toggle right Transform Sidebar."
        }
      ],
      practicalExample: "Navigation Drill: Scene mein 3 objects hain (Cube, Light, Camera). Cube par click kiya, Numpad . press kiya -> camera instantly cube ke paas zoom ho gaya. Numpad 0 press kiya -> live camera director lens mein switch ho gaya. Total time: 2 seconds!",
      readyPrompts: [
        {
          title: "Viewport Staging Layout",
          prompt: "Futuristic digital cockpit interface with multiple glowing hologram screens and floating telemetry gauges, 8k",
          useCase: "Interface organization inspiration"
        }
      ],
      commonMistakes: [
        {
          mistake: "Viewport mein kho jana (lost in infinite space) jahan kuch dikhai na de.",
          fix: "Outliner mein apne object par click karein aur keyboard par Numpad Period (.) ya View -> Frame Selected press karein. Camera instantly wapas aa jayega!"
        },
        {
          mistake: "Laptop trackpad par bina 3-button mouse ke struggle karna.",
          fix: "Preferences -> Input mein 'Emulate 3 Button Mouse' aur 'Emulate Numpad' enable karein."
        }
      ],
      homework: "Blender viewport mein Orbit, Pan aur Zoom practice karein, aur Numpad 1, 3, 7 aur 0 views switch karke comfort build karein.",
      summary: "Blender interface 3D Viewport, Outliner, Properties panel aur Timeline se milkar bana hai. MMB navigation aur Numpad camera views studio productivity ki neev hain.",
      quiz: [
        {
          question: "Blender 3D Viewport mein scene ko 360-degree orbit (ghumane) ke liye kaunsa mouse button use hota hai?",
          options: ["Middle Mouse Button (Scroll wheel click drag)", "Right click only", "Left click triple tap", "Double click spacebar"],
          correctIndex: 0,
          explanation: "Middle Mouse Button click-drag 3D spatial orbit operate karta hai."
        },
        {
          question: "Selected object par camera ko instantly zoom aur center karne ka shortcut kya hai?",
          options: ["Numpad Period (.) ya Tilde (~) -> View Selected", "Ctrl + Alt + Delete", "Backspace", "F1"],
          correctIndex: 0,
          explanation: "Numpad Period (.) camera pivot ko instantly selected object par snap kar deta hai."
        },
        {
          question: "Active camera lens ke andar jhankne (Camera View toggle) ke liye kaunsa shortcut key use hota hai?",
          options: ["Numpad 0", "Numpad 9", "Spacebar", "Escape"],
          correctIndex: 0,
          explanation: "Numpad 0 user camera perspective aur active render camera ke beech toggle karta hai."
        },
        {
          question: "Blender viewport ke right side wale Transform Sidebar (Item, Tool, View) ko open/close karne ka shortcut kya hai?",
          options: ["'N' key", "'T' key", "'Z' key", "'X' key"],
          correctIndex: 0,
          explanation: "'N' key right-hand numeric sidebar toggle karti hai jisme precise coordinates hote hain."
        },
        {
          question: "Scene ke saare objects (Cubes, Lights, Cameras, Meshes) ki folder list kis panel mein hoti hai?",
          options: ["Outliner Panel", "Audio mixer", "Calculator", "Trash bin"],
          correctIndex: 0,
          explanation: "Outliner panel scene hierarchy collections aur object visibility toggles ko organize karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome back creators! Blender ka interface dekh kar darna nahi hai. Aaj ke lesson mein hum iske har panel ko dost banayenge aur essential keyboard shortcuts master karenge.",
        whatToShowOnScreen: "Blender 4.x startup layout. Visual highlight boxes around: 1) 3D Viewport, 2) Outliner, 3) Properties, 4) Timeline. Live navigation gestures with on-screen mouse keys display.",
        screenRecordingSteps: [
          "Step 1: MMB drag karke 360 orbit demonstrate karein.",
          "Step 2: Shift + MMB se smooth pan execute karein.",
          "Step 3: Numpad 1 (Front), 3 (Side), 7 (Top) aur 0 (Camera) toggle karein.",
          "Step 4: 'N' key se transform panel aur 'T' key se toolbar toggle karein.",
          "Step 5: Outliner collections mein objects organize karke dikhayein."
        ],
        voiceoverHindi: "Notice kijiye dosto, jab main Numpad 0 dabata hoon, toh hum directly camera ke viewfinder ke andar aa jaate hain. Yahan se hume exact wahi dikhta hai jo final video mein render hoga. Navigation par command hona ek pro director ka pehla sign hai.",
        practicalDemo: "Smooth switching between orthographic and camera views.",
        endingAndHomework: "Navigation practice kijiye. Agle lesson mein hum 3D Objects ko manipulate aur transform karna seekhenge!"
      }
    },
    {
      id: "m6-l3",
      moduleId: 6,
      lessonNumber: 3,
      title: "3. Working with 3D objects",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `3D space mein kisi bhi object ke sath hum 3 fundamental physical transformations kar sakte hain:
1. **Move / Translate (G key - Grab):** Object ko X, Y ya Z axis par slide karna.
2. **Rotate (R key):** Object ko kisi angle par ghumana.
3. **Scale (S key):** Object ko chota ya bada karna.

The Axis Locking Magic Formula:
Jab aap G, R, ya S dabate hain, uske turant baad agar aap:
- **X** dabate hain -> toh object sirf Red (Horizontal) line par move hoga.
- **Y** dabate hain -> toh object sirf Green (Depth) line par move hoga.
- **Z** dabate hain -> toh object sirf Blue (Vertical) line par move hoga.
Example: **G -> Z -> 2** dabane par object theek 2 meters upar hawa mein uth jayega!

Adding and Deleting Objects:
- **Shift + A:** Universal 'Add' menu (Mesh -> Cube, Sphere, Cylinder, Plane, Light, Camera).
- **X key ya Delete:** Delete selected object.
- **Shift + D:** Duplicate object.`,
      learningObjectives: [
        "Transform triad (Grab 'G', Rotate 'R', Scale 'S') master karna.",
        "Axis locking constraints (X, Y, Z axes) flawlessly use karna.",
        "Shift + A Add menu se basic primitives spawn karna.",
        "Duplication (Shift + D) aur precision numeric entry execute karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Shortcuts cheat sheet"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Spawn New Primitive",
          description: "Press Shift + A -> Mesh -> Cylinder."
        },
        {
          step: 2,
          title: "Translate along Axis",
          description: "Press G, then press X, move mouse, then left-click to confirm."
        },
        {
          step: 3,
          title: "Scale Uniformly or Axially",
          description: "Press S to scale all directions. Press S then Z to stretch vertically like a pillar."
        },
        {
          step: 4,
          title: "Duplicate & Arrange",
          description: "Press Shift + D, then Y, then type 3 to create an identical pillar 3 units away."
        }
      ],
      practicalExample: "Building a Sci-Fi Pillar Colonnade: Shift + A se cylinder add kiya. S + Z + 4 karke lamba pillar banaya. Shift + D + X + 3 dabakar 5 baar duplicate kiya. 30 seconds mein ek grand futuristic corridor architecture taiyar!",
      readyPrompts: [
        {
          title: "Modular Architectural Assets",
          prompt: "Set of futuristic sci-fi modular pillars and structural beams, matte dark gray metal with glowing vertical cyan conduits, clean 3D isometric layout, 8k",
          useCase: "Object placement and primitive arrangement blueprint"
        }
      ],
      commonMistakes: [
        {
          mistake: "Freehand mouse drag karna bina axis lock kiye.",
          fix: "Bina axis lock ke object 3D space mein random depth par chala jata hai. Hamesha G/R/S ke baad X, Y, ya Z press karein."
        },
        {
          mistake: "Transform cancel karne ke liye galat key dabana.",
          fix: "Agar transform pasand na aaye toh Left Click mat karein, Right Click ya Escape press karein taaki object apni original jagah wapas aa jaye."
        }
      ],
      homework: "Shift + A se alag-alag primitives (Cube, Cylinder, UV Sphere) add karein aur unhe arrange karke ek simple table aur chair ka 3D layout banayein.",
      summary: "G (Grab), R (Rotate) aur S (Scale) + Axis constraints (X, Y, Z) 3D manipulation ke core pillars hain. Shift + A se naye objects create hote hain aur Shift + D se duplicate hote hain.",
      quiz: [
        {
          question: "Blender mein selected object ko move (translate) karne ka universal shortcut key kya hai?",
          options: ["G key (Grab)", "M key", "T key", "W key"],
          correctIndex: 0,
          explanation: "'G' key (Grab) object ko translation mode mein daal deti hai jisse use mouse se move kiya ja sakta hai."
        },
        {
          question: "Object ko sirf vertical zameen se aasmaan (Height) ki taraf move karne ke liye kaunsi keys press karni hoti hain?",
          options: ["G then Z", "G then X", "G then Y", "S then Space"],
          correctIndex: 0,
          explanation: "Z-axis vertical coordinate hota hai, isliye 'G' ke baad 'Z' dabane par movement vertically lock ho jata hai."
        },
        {
          question: "Blender mein naya 3D Mesh, Light ya Camera add karne ka shortcut menu kaunsa hai?",
          options: ["Shift + A", "Ctrl + N", "Alt + F", "Shift + X"],
          correctIndex: 0,
          explanation: "Shift + A 'Add' menu launch karta hai jahan se saare scene primitives aur elements spawn hote hain."
        },
        {
          question: "Selected object ko duplicate karne ke liye kaunsa shortcut key combination use hota hai?",
          options: ["Shift + D", "Ctrl + C", "Alt + D only", "Ctrl + V"],
          correctIndex: 0,
          explanation: "Shift + D selected object ka exact duplicate clone create karta hai jise turant place kiya ja sakta hai."
        },
        {
          question: "Agar aapne galti se object ko galat jagah drag kar diya, toh use bina confirm kiye cancel karne ke liye kya press karein?",
          options: ["Right-click ya Escape key", "Enter key", "Spacebar", "Power button"],
          correctIndex: 0,
          explanation: "Right-click ya Escape current ongoing transform operation ko instantly cancel karke object ko initial position par return kar deta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj ke lesson mein hum virtual haathon se 3D objects ko uthana, ghumana aur scale karna seekhenge. G, R, aur S shortcuts aapke sabse best friends banne wale hain.",
        whatToShowOnScreen: "Default cube in viewport. Visual keypress HUD active. Demonstrating: G -> X (Red constraint line appears), R -> Z -> 45 (Rotation display), S -> Shift-Z (Scaling on plane). Shift + A spawn menu.",
        screenRecordingSteps: [
          "Step 1: 'G' press karke axis locking (X, Y, Z) demonstrate karein.",
          "Step 2: 'S' press karke numeric value '2' enter karein (object scales 200%).",
          "Step 3: Shift + A press karke 'UV Sphere' spawn karein.",
          "Step 4: Shift + D press karke duplicate karein aur Y axis par move karein.",
          "Step 5: X press karke unwanted object delete karein."
        ],
        voiceoverHindi: "Dosto screen par dekhiye. Jaise hi maine G ke baad Z dabaya, ek bright blue vertical line appear hui. Ab mera mouse chahe kahan bhi jaye, object bilkul straight upar move ho raha hai. Is precision ki madad se hum complex 3D film sets construct karte hain.",
        practicalDemo: "Assembling a modular staircase using Shift + D and G + Z constraints.",
        endingAndHomework: "Primitive transformation practice kijiye. Agle lesson mein hum Basic Modeling aur Edit Mode seekhenge!"
      }
    },
    {
      id: "m6-l4",
      moduleId: 6,
      lessonNumber: 4,
      title: "4. Basic modeling",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ab tak hum 'Object Mode' mein the jahan hum poore object ko ek single block ki tarah treat karte the. Lekin agar aapko kisi cube ko ek car mein, ek building mein, ya ek sci-fi monitor mein badalna hai, toh aapko **Edit Mode (Tab key)** mein jana hoga!

Edit Mode mein ek 3D mesh 3 components se bani hoti hai:
1. **Vertices (1 key):** Chote-chote points (dots).
2. **Edges (2 key):** Do points ko jodne wali lines.
3. **Faces (3 key):** Lines ke beech ki flat surface (polygons).

The Big 3 Modeling Operations:
- **Extrude (E key):** Face ko bahar ya andar kheench kar naya volume create karna.
- **Inset (I key):** Face ke andar ek chota sub-face create karna (jaise photo frame ke andar picture).
- **Bevel (Ctrl + B):** Sharp churi jaise edges ko smooth curved round corners mein convert karna. Bevel hi wo feature hai jo computer CGI ko realistic banata hai kyunki real world mein 100% sharp razor edges nahi hotein!`,
      learningObjectives: [
        "Object Mode aur Edit Mode (Tab key) ke beech toggle karna.",
        "Selection modes: Vertex (1), Edge (2), Face (3) operate karna.",
        "Extrude (E), Inset (I) aur Bevel (Ctrl + B) tools master karna.",
        "Loop Cut (Ctrl + R) se extra geometric divisions create karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "3D mesh primitive (Cube)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Enter Edit Mode",
          description: "Select Cube and press 'Tab' key. Notice the vertices light up in orange."
        },
        {
          step: 2,
          title: "Select Top Face (Press 3)",
          description: "Press 3 for Face Select. Click on the top face of the cube."
        },
        {
          step: 3,
          title: "Inset and Extrude",
          description: "Press 'I' to Inset a smaller border face. Press 'E' to Extrude down into the cube to create a hollow container or screen."
        },
        {
          step: 4,
          title: "Apply Bevel for Realism",
          description: "Press 2 for Edge Select. Select outer edges and press 'Ctrl + B', move mouse and scroll wheel to create smooth rounded bevels."
        }
      ],
      practicalExample: "Creating a Sci-Fi Computer Monitor from Default Cube in 60 Seconds: Cube lein. S + Y se patla karein. Tab dabayein. Front face select karein. 'I' press karke screen bezel banayein. 'E' press karke screen ko slightly andar push karein. Ctrl + B se edges bevel karein. Done! High-tech monitor ready!",
      readyPrompts: [
        {
          title: "Hard-Surface Beveled Asset Reference",
          prompt: "Futuristic sci-fi terminal screen, beveled chamfered titanium edges, glowing holographic UI display, realistic hard-surface modeling, 8k",
          useCase: "Basic hard-surface modeling reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Extrude dabane ke baad mouse move na karke cancel karna bhool jana (Zero-length double faces).",
          fix: "Agar aapne 'E' dabaya aur use cancel karna hai, toh hamesha 'Ctrl + Z' press karein. Right click karne par extrude wahi par zero-distance par baith jata hai jo mesh corrupt karta hai."
        },
        {
          mistake: "Bevel apply karte waqt edges uneven stretch hona.",
          fix: "Object Mode mein jakar pehle 'Ctrl + A -> Apply Scale' karein, tab Bevel uniform round hoga."
        }
      ],
      homework: "Default cube se Edit Mode mein jakar ek Sci-Fi crate ya futuristic monitor banayein using Extrude (E), Inset (I) aur Bevel (Ctrl + B).",
      summary: "Edit Mode (Tab) mesh ke vertices (1), edges (2) aur faces (3) ko unlock karta hai. Extrude (E), Inset (I), Loop Cut (Ctrl + R) aur Bevel (Ctrl + B) modeling ke fundamental building blocks hain.",
      quiz: [
        {
          question: "Object Mode aur Edit Mode ke beech switch karne ka universal toggle key kaunsa hai?",
          options: ["Tab key", "Shift key", "Spacebar", "Alt key"],
          correctIndex: 0,
          explanation: "'Tab' key Blender mein Object Mode aur Edit Mode ke beech instantaneous toggle provide karti hai."
        },
        {
          question: "Edit Mode mein Face Selection mode activate karne ke liye keyboard par kaunsa number dabana hota hai?",
          options: ["3 key", "1 key (Vertex)", "2 key (Edge)", "9 key"],
          correctIndex: 0,
          explanation: "Number row par 1 = Vertex select, 2 = Edge select, aur 3 = Face select mode activate hota hai."
        },
        {
          question: "Ek selected face ko bahar ya andar kheench kar naya 3D volume create karne wale tool ka shortcut kya hai?",
          options: ["E key (Extrude)", "I key", "B key", "P key"],
          correctIndex: 0,
          explanation: "'E' key (Extrude) selected geometry ko normal vector ke along extend karke naya volume banati hai."
        },
        {
          question: "Sharp un-natural 3D edges ko smooth curved bevels mein round karne ka shortcut kya hai?",
          options: ["Ctrl + B (Bevel)", "Ctrl + S", "Alt + B", "Shift + R"],
          correctIndex: 0,
          explanation: "Ctrl + B Bevel modifier tool engage karta hai jisme mouse scroll se segments add karke smooth rounded corners bante hain."
        },
        {
          question: "Mesh ke beech mein ek continuous edge ring add karne ke liye Loop Cut tool ka shortcut kya hai?",
          options: ["Ctrl + R", "Ctrl + L", "Shift + K", "Alt + C"],
          correctIndex: 0,
          explanation: "Ctrl + R (Loop Cut) mesh topology par equidistant edge rings cut karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum default cube ki boring shakal badal kar usse ek stylish futuristic asset banayenge. Edit Mode 3D modeling ka heart and soul hai. Let's sculpt!",
        whatToShowOnScreen: "Default cube. Tab keypress -> Edit Mode orange vertex glow. Number keys 1, 2, 3 toggle demonstrations. Inset (I), Extrude (E), and Bevel (Ctrl + B) interactive execution on screen.",
        screenRecordingSteps: [
          "Step 1: Cube select karke 'Tab' press karein.",
          "Step 2: '3' press karke front face select karein.",
          "Step 3: 'I' press karke inset border create karein.",
          "Step 4: 'E' press karke andar push karein.",
          "Step 5: 'Ctrl + B' se smooth chamfer bevel apply karein aur scroll wheel se 4 segments add karein."
        ],
        voiceoverHindi: "Dekha dosto? Sirf 3 shortcuts (Tab, I, E aur Ctrl + B) ki madad se humne ek ordinary cube ko ek high-tech sci-fi monitor casing mein transform kar diya. Bevels par notice kijiye, light kitni naturally bounce kar rahi hai. You are now modeling in 3D!",
        practicalDemo: "Modeling a sci-fi crate with panel recesses and rounded corners.",
        endingAndHomework: "Apna pehla 3D modeled prop banayein. Agle lesson mein hum Camera Positioning aur Focal Lengths seekhenge!"
      }
    },
    {
      id: "m6-l5",
      moduleId: 6,
      lessonNumber: 5,
      title: "5. Camera positioning",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Aapka 3D scene chahe kitna bhi khoobsurat ho, audience usse sirf aur sirf **Camera Lens** ke through hi dekhegi! Agar camera positioning kharab hai, toh poori movie boring lagegi.

Blender Camera Mastery:
1. **Snap Camera to Current View (Ctrl + Alt + Numpad 0):**
   Yeh Blender ka sabse bada secret shortcut hai! Viewport mein apne mouse se manpasand cinematic angle dhoondein, aur jaise hi aap **Ctrl + Alt + Numpad 0** press karenge, Blender ka virtual camera instantly udkar aapke exact aankhon ke viewing angle par snap ho jayega!
2. **Lock Camera to View:**
   Properties sidebar ('N' key) -> View tab -> **Camera to View** checkbox ko check karein. Ab jab aap camera view ke andar honge (Numpad 0), toh aap mouse se normal navigate karenge aur camera sath-sath move hoga!
3. **Focal Length & Lens Types:**
   - **Wide Angle (18mm - 28mm):** Dynamic, energetic, architectural scale, speed accentuate karta hai.
   - **Normal Lens (35mm - 50mm):** Human eye jaisa natural perspective.
   - **Cinematic Portrait Lens (85mm - 135mm):** Background compression, subject separation, flattering faces.
4. **Depth of Field (DoF):**
   Camera properties mein 'Depth of Field' check karein. Focus Object mein apne character ko select karein aur F-stop 1.4 ya 2.0 set karein. Background instantly Hollywood creamy bokeh mein blur ho jayega!`,
      learningObjectives: [
        "Ctrl + Alt + Numpad 0 snap camera shortcut master karna.",
        "Camera to View navigation lock operate karna.",
        "Focal lengths (Wide 24mm vs Telephoto 85mm) ka emotional impact samajhna.",
        "Depth of Field (F-stop, Focus distance, Bokeh) calibrate karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Camera object in scene"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Find Your Dramatic Perspective",
          description: "Orbit your viewport to a low-angle heroic view of your character or asset."
        },
        {
          step: 2,
          title: "Snap Camera to View",
          description: "Press Ctrl + Alt + Numpad 0. The camera rectangle now frames your exact view."
        },
        {
          step: 3,
          title: "Adjust Focal Length",
          description: "Select camera -> Camera Properties (green camera icon) -> Set Focal Length to 85mm."
        },
        {
          step: 4,
          title: "Enable Depth of Field",
          description: "Check 'Depth of Field', set Focus on your Character, and set F-Stop to 1.8 for gorgeous background blur."
        }
      ],
      practicalExample: "Portrait Staging: Focal length 50mm se badha kar 85mm ki. Camera to View lock karke low angle set kiya. DoF enable karke F-stop 1.4 set kiya. Viewport render mein character crystal sharp dikha aur background lights round aesthetic bokeh mein melt ho gayi. Pure cinema!",
      readyPrompts: [
        {
          title: "Cinematic Camera Bokeh Reference",
          prompt: "Cinematic medium close-up of a futuristic android warrior, shot on 85mm prime lens f/1.4, creamy blurred neon city bokeh background, razor-sharp eye focus, cinematic lighting, 8k --ar 16:9",
          useCase: "Camera framing and depth of field benchmark"
        }
      ],
      commonMistakes: [
        {
          mistake: "Camera frame se bahar navigate karke camera position accidentally hila dena.",
          fix: "Camera position finalize hone ke baad 'Camera to View' checkbox ko uncheck kar dein taaki camera accidentally move na ho."
        },
        {
          mistake: "Depth of Field F-stop ko 0.1 kar dena jisse poora model blur ho jaye.",
          fix: "Realistic F-stop values f/1.8 se f/4.0 ke beech rakhein."
        }
      ],
      homework: "Apne character ke scene mein camera setup karein, 85mm focal length set karein aur Depth of Field enable karke bokeh render preview karein.",
      summary: "Ctrl + Alt + Numpad 0 camera ko active view par snap karta hai. 85mm focal length aur Depth of Field (f/1.8) Hollywood cinematic subject separation create karte hain.",
      quiz: [
        {
          question: "Blender mein virtual camera ko user ke current viewport view par instantly snap karne ka shortcut kya hai?",
          options: ["Ctrl + Alt + Numpad 0", "Ctrl + Shift + S", "Alt + F4", "Shift + Space"],
          correctIndex: 0,
          explanation: "Ctrl + Alt + Numpad 0 active camera ko user ke exact current viewpoint angle aur location par snap kar deta hai."
        },
        {
          question: "Cinematic portrait shots mein creamy background bokeh pane ke liye ideal focal length kya hoti hai?",
          options: ["85mm prime lens", "5mm ultra fisheye", "1000mm telescope", "Zero mm"],
          correctIndex: 0,
          explanation: "85mm lens perspective distortion ko eliminate karta hai aur beautiful compression aur bokeh provide karta hai."
        },
        {
          question: "Camera view ke andar mouse se direct framing navigate karne ke liye kaunsa toggle on kiya jata hai?",
          options: ["Camera to View (View Lock in 'N' panel)", "Delete Camera", "Wireframe lock", "Auto-render"],
          correctIndex: 0,
          explanation: "'Camera to View' enable karne se normal navigation controls active camera rig ko pilot karte hain."
        },
        {
          question: "Camera Depth of Field mein jitna kam F-stop number hoga (e.g. f/1.4 vs f/16), background blur par kya asar padega?",
          options: ["Background blur bohot zyada aur creamy ho jayega (Shallow DoF)", "Background bilkul sharp ho jayega", "Camera turn off ho jayega", "Color green ho jayega"],
          correctIndex: 0,
          explanation: "Low F-stop (wide aperture) depth of field ko shallow banata hai jisse background out-of-focus bokeh mein blur hota hai."
        },
        {
          question: "Dramatic, intense action scenes aur wide perspective ke liye kaunsi focal length use ki jaati hai?",
          options: ["Wide Angle (18mm - 24mm)", "300mm telephoto", "Microscope", "Macro 200mm"],
          correctIndex: 0,
          explanation: "Wide angle lenses (18-24mm) visual perspective ko exaggerate karti hain aur dynamic speed ka illusion create karti hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum virtual cinematographer banenge. Ek camera angle kisi scene ko ordinary se extraordinary bana sakta hai. Aaj hum Hollywood camera techniques Blender mein live execute karenge.",
        whatToShowOnScreen: "3D scene with character. Demonstrating free viewport orbit -> Ctrl + Alt + Numpad 0 snap. Camera settings panel: Focal length slider from 24mm to 85mm. Depth of Field toggle with interactive F-stop slider.",
        screenRecordingSteps: [
          "Step 1: Viewport mein low-angle dramatic view orbit karein.",
          "Step 2: 'Ctrl + Alt + Numpad 0' press karke camera snap dikhayein.",
          "Step 3: 'N' panel mein View -> 'Camera to View' checkbox demonstrate karein.",
          "Step 4: Focal length 50mm se 85mm switch karein aur background compression show karein.",
          "Step 5: Depth of Field checkbox on karke F-stop 1.4 set karein aur real-time bokeh preview karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jaise hi humne 85mm lens lagaya aur F-stop 1.4 kiya, background lights aesthetic glowing discs mein blur ho gayi aur character ke face par razor-sharp focus aa gaya. This is pure cinematic gold!",
        practicalDemo: "Interactive Depth of Field focus rack test.",
        endingAndHomework: "Apna camera setup lock karein. Agle lesson mein hum Cinematic Lighting Setup create karenge!"
      }
    },
    {
      id: "m6-l6",
      moduleId: 6,
      lessonNumber: 6,
      title: "6. Lighting setup",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Blender mein 4 type ki lights hoti hain:
1. **Point Light:** Ek glowing bulb ki tarah jo har direction mein light phekta hai.
2. **Sun Light:** Infinite distance se aane wali parallel directional light (dhoop simulate karne ke liye).
3. **Spot Light:** Ek cone beam (theater flashlight ya stage spotlight).
4. **Area Light:** Ek rectangular ya circular softbox panel jo cinema studios mein use hota hai. **Yeh hamari primary light hogi!**

The Hollywood 3-Point Lighting Formula:
1. **Key Light (Primary Source):**
   Subject ke 45 degree angle par, slightly upar. Yeh character ka main exposure aur facial shape define karti hai (Warm tone, e.g. 500 Watts).
2. **Fill Light (Shadow Softener):**
   Key light ke opposite side (dusre 45 degree par). Iski power Key light se aadhi (e.g. 200 Watts) hoti hai aur color thoda cool hota hai. Yeh dark shadows ko soft karti hai bina unhe poora khatam kiye.
3. **Rim Light / Backlight (Edge Definer):**
   Character ke theek peeche, camera ki taraf point karti hui. Yeh character ke baalon aur shoulders par ek thin glowing halo banati hai jo subject ko background se detach karti hai. (Cool Cyan ya Magenta, high intensity e.g. 800 Watts).`,
      learningObjectives: [
        "Blender light types (Area, Point, Spot, Sun) ke specific use cases samajhna.",
        "Classic 3-Point Lighting (Key, Fill, Rim) architecture construct karna.",
        "Light color temperature (Kelvin) aur power wattage balance karna.",
        "Soft vs Sharp shadows (Light size parameter) control karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Rendered Viewport Shading mode (Z -> 8)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Delete Default Flat Light",
          description: "Select default light and press X to delete."
        },
        {
          step: 2,
          title: "Add Area Light (Key Light)",
          description: "Shift + A -> Light -> Area. Move to front-left (G -> X -2, Y -2, Z 3). Set Power to 600W, Color to warm cream (#FFF4E5)."
        },
        {
          step: 3,
          title: "Add Fill Light",
          description: "Shift + A -> Light -> Area. Place front-right. Set Power to 200W, Color to soft cool blue (#E0F2FE)."
        },
        {
          step: 4,
          title: "Add High-Intensity Rim Light",
          description: "Shift + A -> Light -> Area. Place behind character pointing forward. Set Power to 1000W, Color to electric cyan (#00F5D4)."
        }
      ],
      practicalExample: "Lighting Breakdown: Bina lights ke character flat lag raha tha. 3-point setup lagate hi: Warm key light ne face features sculpt kiye, cool fill light ne dark side ko details di, aur cyan rim light ne shoulders aur hair par electric glow line bana di. Hollywood production value instantly achieved!",
      readyPrompts: [
        {
          title: "3-Point Studio Lighting Master Render",
          prompt: "Cinematic portrait of a futuristic cyber pilot, dramatic three-point studio lighting, warm key light, soft blue fill, intense electric cyan rim light outlining silhouette, 8k octane render --ar 16:9",
          useCase: "Lighting setup visual reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Light size ko 0.01 meter (point small) rakhna jisse harsh ugly shadows banein.",
          fix: "Area Light ki Size property ko 1 meter ya 2 meter karein. Badi light soft, flattering, professional shadows produce karti hai."
        },
        {
          mistake: "Fill light ko Key light se zyada tez kar dena.",
          fix: "Fill light hamesha Key light se 50% ya usse kam honi chahiye taaki facial drama aur contrast preserve rahe."
        }
      ],
      homework: "Blender mein ek character ya prop par Key, Fill aur Rim lights place karein aur Viewport Shading mode mein unke colors aur powers tune karein.",
      summary: "3-Point Lighting (Key, Fill, Rim) visual storytelling ka gold standard hai. Area lights large softboxes ki tarah professional diffused shadows aur edge separation provide karti hain.",
      quiz: [
        {
          question: "Cinema studios mein sabse zyada use hone wali aur sabse soft flattering shadows dene wali light kaunsi hoti hai?",
          options: ["Area Light", "Point Light", "Sun Light", "Flashlight"],
          correctIndex: 0,
          explanation: "Area Lights physical studio softboxes ko simulate karti hain jinka surface area light ko diffuse karke realistic soft shadows banata hai."
        },
        {
          question: "3-Point lighting setup mein character ke peeche se aane wali light jo shoulders par glow outline banati hai, use kya kehte hain?",
          options: ["Rim Light / Backlight / Kicker", "Key light", "Fill light", "Ambient floor light"],
          correctIndex: 0,
          explanation: "Rim light silhouette separation provide karti hai jisse subject dark background mein blend nahi hota."
        },
        {
          question: "Area light ki 'Size' property badhane par shadows par kya asar padta hai?",
          options: ["Shadows soft aur diffused ho jaati hain", "Shadows sharp aur harsh ho jaati hain", "Shadows gayab ho jaati hain", "Light turn off ho jaati hai"],
          correctIndex: 0,
          explanation: "Light source jitna physical area mein bada hoga, shadows ke edges utne hi smooth aur soft falloff ke sath render honge."
        },
        {
          question: "Fill light ki power Key light ke mukable aamtaur par kitni honi chahiye?",
          options: ["Key light ki aadhi (approx 30% - 50%)", "Key light se 10 guna zyada", "Zero", "Exactly 100% same"],
          correctIndex: 0,
          explanation: "Fill light ko Key light se kam intensity par rakha jata hai taaki dramatic contrast aur dimensional depth bani rahe."
        },
        {
          question: "Sci-Fi aur Cyberpunk aesthetics mein Rim light ka popular color choice kaunsa hota hai?",
          options: ["Electric Cyan, Magenta ya Neon Blue", "Dull gray", "Pure black", "Muddy brown"],
          correctIndex: 0,
          explanation: "Vibrant neon tones (Cyan, Magenta) futuristic edge glow aur high production value inject karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum darkness ko illuminate karenge. Lighting hi wo difference hai jo ek amateur student project ko Hollywood commercial mein badalta hai. Let's build a professional 3-point lighting rig!",
        whatToShowOnScreen: "Viewport Rendered Mode (Z -> 8). Scene in darkness. Step-by-step light activation: 1) Key light turns on -> half face illuminates. 2) Fill light turns on -> shadows soften. 3) Rim light turns on -> electric cyan halo wraps around character.",
        screenRecordingSteps: [
          "Step 1: Shift + A -> Light -> Area light spawn karein.",
          "Step 2: Key light place karein 45 degrees par, 600W warm color.",
          "Step 3: Fill light place karein opposite side, 250W cool color.",
          "Step 4: Rim light place karein behind subject, 1200W electric cyan.",
          "Step 5: Area light Size parameter 0.1m se 2.0m drag karke shadow softness live demonstrate karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jaise hi maine rim light on ki, notice kariye character ke baal aur shoulders background se kitne khoobsurti se alag ho gaye. Is 3-point lighting setup ko aap kisi bhi product, character ya scene mein apply kar sakte hain.",
        practicalDemo: "Toggling each light individually to isolate its visual contribution.",
        endingAndHomework: "Apna 3-point lighting rig finalize karein. Agle lesson mein hum Materials aur Final Rendering (EEVEE vs Cycles) ko master karenge!"
      }
    },
    {
      id: "m6-l7",
      moduleId: 6,
      lessonNumber: 7,
      title: "7. Materials and rendering basics",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Blender mein scene setup ho gaya, camera lag gaya, lighting ban gayi. Ab aakhri aur sabse critical step hai **Rendering** — yaani 3D virtual data ko final 4K video frame mein export karna!

Blender 4.x ke 2 Powerful Render Engines:
1. **EEVEE-Next (Real-Time Rasterization Engine):**
   - Video game engines (Unreal Engine) ki tarah kaam karta hai.
   - **Speed: EXTREMELY FAST!** Ek frame render hone mein sirf 1 se 3 seconds lagte hain.
   - Fast animation preview, social media reels, aur quick production ke liye BEST engine.
2. **Cycles (Physically Based Path Tracing Engine):**
   - Real-world light photons ko trace karta hai. Exact optical reflections, glass refraction, global illumination aur caustic shadows calculate karta hai.
   - **Quality: HOLLYWOOD MOVIE LEVEL!**
   - Speed: Thoda slow hota hai (har frame 10-30 seconds le sakta hai depending on GPU).
   - High-end cinematic portfolio shots ke liye BEST.

Render Output Settings Blueprint:
- **Resolution:** 1920x1080 (Full HD) ya 3840x2160 (4K).
- **Frame Rate:** 24 FPS (Cinematic film feel) ya 30/60 FPS (Social media).
- **File Format:** Animation ke liye hamesha **PNG Image Sequence** export karein (agar power cut ho jaye toh jahan tak render hua hai wahan se resume ho sakta hai!), baad mein video editor mein compile karein.`,
      learningObjectives: [
        "EEVEE-Next real-time engine vs Cycles path tracer ka comparison aur selection master karna.",
        "Denoising (OpenImageDenoise / OptiX) configure karna.",
        "Render sample count optimize karna (128 - 256 samples with Denoise).",
        "Render output parameters (Resolution, FPS, File Format) configure karke final frame export karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Configured 3D scene from previous lessons"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Render Engine",
          description: "In Render Properties, choose 'Cycles' for photorealism (Device: GPU Compute) or 'EEVEE' for real-time speed."
        },
        {
          step: 2,
          title: "Enable AI Denoising",
          description: "Check 'Denoise' in Viewport and Render tabs. Set Denoise Engine to 'OpenImageDenoise' or 'OptiX'."
        },
        {
          step: 3,
          title: "Configure Output Resolution",
          description: "Go to Output Properties. Set Resolution X: 1920, Y: 1080 (100%), Frame Rate: 24 fps."
        },
        {
          step: 4,
          title: "Press F12 to Render Still Frame",
          description: "Press F12 on keyboard (or Render -> Render Image). Watch your cinematic frame bake! Press Alt + S to save image."
        }
      ],
      practicalExample: "Render Benchmark: Cycles without Denoise: 2000 samples, took 4 minutes per frame. Cycles WITH OptiX Denoise: 128 samples, took only 14 seconds per frame with pristine zero-noise crystal clarity! 16x faster rendering!",
      readyPrompts: [
        {
          title: "Cycles 4K Photorealism Master Frame",
          prompt: "Cinematic photorealistic 3D render of an armored cybernetic paladin standing under volumetric rain, ray-traced reflections on wet puddles, cinematic lighting, shot on ARRI 65mm, 8k --ar 16:9",
          useCase: "Final render quality reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Cycles mein samples ko 4096 par chhod dena.",
          fix: "AI denoiser ke sath 128 se 256 samples kaafi hote hain. Excessive samples sirf render time waste karte hain bina visible quality difference ke."
        },
        {
          mistake: "Direct .MP4 animation export karna jab scene heavy ho.",
          fix: "Agar render ke beech mein crash ho gaya toh MP4 corrupt ho jayegi. Hamesha PNG image sequence export karein."
        }
      ],
      homework: "Apne complete 3D scene ko F12 press karke render karein, Alt + S press karke high-res image save karein aur course community mein upload karein.",
      summary: "EEVEE speed deta hai aur Cycles Hollywood photorealism. AI Denoising ke sath 128-256 samples par F12 rendering professional workflow ka standard hai.",
      quiz: [
        {
          question: "Blender mein photorealistic ray-traced lighting aur reflections calculate karne wale engine ka naam kya hai?",
          options: ["Cycles", "EEVEE", "Workbench", "QuickTime"],
          correctIndex: 0,
          explanation: "Cycles physically-based path tracer hai jo real light physics simulate karke photorealistic renders deta hai."
        },
        {
          question: "Blender mein current frame ko render karne ka universal keyboard shortcut key kya hai?",
          options: ["F12 key", "F5 key", "Ctrl + R", "Spacebar"],
          correctIndex: 0,
          explanation: "F12 key Render Image command trigger karti hai jo high-resolution render window open karti hai."
        },
        {
          question: "Rendering time ko 10x fast karne aur grainy dots ko clean karne ke liye kaunsa feature use hota hai?",
          options: ["AI Denoising (OptiX / OpenImageDenoise)", "Increasing brightness", "Lowering monitor volume", "Deleting camera"],
          correctIndex: 0,
          explanation: "AI Denoiser neural networks use karke low-sample renders se noise remove kar deta hai jisse rendering minutes ke badle seconds mein ho jati hai."
        },
        {
          question: "Cinematic Hollywood films ka standard frame rate (FPS) kya hota hai?",
          options: ["24 FPS", "10 FPS", "120 FPS", "1 FPS"],
          correctIndex: 0,
          explanation: "24 frames per second cinema ka century-old standard frame rate hai jo natural human motion blur produce karta hai."
        },
        {
          question: "Render window mein final rendered image ko disk par save karne ka shortcut kya hai?",
          options: ["Alt + S (ya Image -> Save As)", "Ctrl + X", "F4", "Shift + Esc"],
          correctIndex: 0,
          explanation: "Alt + S render viewer mein image save dialog launch karta hai jahan se PNG/JPEG export hoti hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 6 ke aakhri lesson mein aapka swagat hai. Aaj hum apni mehnat ka final fruit extract karenge. Hum apne 3D scene ka pehla Hollywood-grade 4K cinematic render bake karne ja rahe hain!",
        whatToShowOnScreen: "Render Properties panel. Cycles vs EEVEE toggle. GPU Compute selection. Denoise checkbox enabled. Pressing F12 key. Render tiles resolving live. The finished stunning render appearing on screen. Alt + S saving window.",
        screenRecordingSteps: [
          "Step 1: Engine 'Cycles' aur Device 'GPU Compute' select karein.",
          "Step 2: Denoise enable karein with OptiX.",
          "Step 3: Render samples 128 configure karein.",
          "Step 4: 'F12' press karein aur render execution visualize karein.",
          "Step 5: Finished render ko zoom karke ray-traced reflections aur soft shadows celebrate karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Just 12 seconds ke andar hamara final frame render ho chuka hai. Notice kijiye armor par light reflections, cinematic cyan rim glow aur creamy background bokeh. You have officially mastered Blender Fundamentals! Module 6 ka quiz complete kijiye. Module 7 mein hum Professional 3D Animation ke deep water mein dive karenge!",
        practicalDemo: "Full resolution zoom inspection and saving final PNG frame.",
        endingAndHomework: "Module 6 quiz submit karein aur rendered image portfolio mein add karein. Milte hain Module 7: Professional 3D Animation mein!"
      }
    }
  ]
};
