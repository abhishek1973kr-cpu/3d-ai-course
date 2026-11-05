export const module12 = {
  id: 12,
  slug: "final-professional-project",
  title: "MODULE 12: FINAL PROFESSIONAL PROJECT",
  subtitle: "End-to-End Capstone Production: Complete 30–60s Hollywood-Grade 3D AI Video",
  description: "Ab tak seekhe gaye sabhi 11 modules ka ultimate practical execution! 3D Character -> Cinematic World -> AI Video Takes -> Post-Production Assembly -> SFX & Voiceover -> 4K Final Master Release aur Certificate of Completion.",
  icon: "Award",
  badge: "Capstone Project",
  totalLessons: 6,
  totalDuration: "98 min",
  lessons: [
    {
      id: "m12-l1",
      moduleId: 12,
      lessonNumber: 1,
      title: "1. Create a 3D animated character",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Aapka Final Capstone Project shuru hota hai aapke **Original Protagonist (Hero 3D Character)** ke creation se! 

Yeh sirf ek random test nahi hai, balki aapke professional portfolio ka main showpiece banne wala hai jise aap clients ya studios ko dikhayenge.

Capstone Character Creation Pipeline:
1. **Character Concept Art (Midjourney / Flux):**
   A-pose character model sheet generate karein with unique DNA features (e.g. Cybernetic bounty hunter with glowing cyan optics and tactical weather-beaten armor).
2. **Meshy AI 3D Mesh Extraction:**
   Image-to-3D mein upload karein with Symmetry enabled and Quad topology target (50k - 70k polygons).
3. **PBR Material Baking:**
   4K PBR textures (Base color, roughness, normal map, metallic) bake karein.
4. **Mixamo Auto-Rigging & Action Pose:**
   Mixamo par 5 markers place karke auto-rig generate karein. 2 dynamic animations download karein: 1) Combat Stance Idle, 2) Forward Sprint / Leap.
5. **Blender Staging & Verify:**
   Import as FBX, apply transforms (Ctrl + A), and verify smooth 60 FPS playback.`,
      learningObjectives: [
        "End-to-end original character creation pipeline ko self-sufficiently execute karna.",
        "Concept art se 3D mesh extraction aur topology balance verify karna.",
        "Mixamo rigging aur dynamic motion assignment complete karna.",
        "Portfolio-grade character asset package (.GLB / .FBX) archive karna."
      ],
      requiredTools: [
        "Midjourney / Flux / Leonardo AI",
        "Meshy AI account",
        "Mixamo.com",
        "Blender 4.x"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Generate A-Pose Concept Art",
          description: "Prompt your hero protagonist in clean symmetrical A-pose on neutral gray background."
        },
        {
          step: 2,
          title: "Generate 3D Model in Meshy AI",
          description: "Convert image to 3D. Refine with 4K PBR textures and export as .FBX or .GLB."
        },
        {
          step: 3,
          title: "Rig and Animate in Mixamo",
          description: "Upload to Mixamo, set 5 joint markers, assign dynamic action animation, and download as FBX."
        },
        {
          step: 4,
          title: "Inspect in Blender",
          description: "Import FBX, press Spacebar to verify animation, check materials in Viewport Shading mode."
        }
      ],
      practicalExample: "Project Asset Delivery: Cyber Operative 'Kaelen' created from concept prompt. Meshy generated 62k polygon mesh. Mixamo rigged in 45 seconds with dual-blade combat animation. Blender render test confirmed flawless reflection highlights on titanium armor. Step 1 successfully complete!",
      readyPrompts: [
        {
          title: "Capstone Hero Character Prompt",
          prompt: "Full-body character model sheet of a futuristic armored vanguard pilot, weathered carbon composite exoskeleton with glowing cyan tactical runes, symmetrical A-pose, neutral studio lighting, 3D model render, ZBrush sculpt, 8k --ar 16:9",
          useCase: "Capstone project character base"
        }
      ],
      commonMistakes: [
        {
          mistake: "Arms body se chipki hui generate karna.",
          fix: "Ensure karein ki concept image mein A-pose limb clearance ho taaki Mixamo bones smoothly bind hon."
        },
        {
          mistake: "Unapplied transforms in Blender.",
          fix: "Import ke baad hamesha 'Ctrl + A -> Apply All Transforms' karein."
        }
      ],
      homework: "Apna original 3D hero character design karein, Meshy + Mixamo pipeline se rig karein aur Blender viewport playback screenshot submit karein.",
      summary: "Capstone step 1 mein original character concept se rigged, textured 3D animation asset create karna shamil hai jo hamari final film ka hero banega.",
      quiz: [
        {
          question: "Capstone project ke pehle step mein character ko kis pose mein generate kiya jata hai?",
          options: ["Symmetrical A-Pose with limb clearance", "Sleeping on floor", "Sitting cross-legged", "Arms folded behind back"],
          correctIndex: 0,
          explanation: "Symmetrical A-pose automated rigging algorithms ke liye optimal anatomical separation provide karta hai."
        },
        {
          question: "3D character model ki ideal polygon density video rendering ke liye kitni honi chahiye?",
          options: ["50,000 se 75,000 polygons (Mid-Poly)", "10 polygons", "50 Million polygons", "Zero polygons"],
          correctIndex: 0,
          explanation: "50k to 75k polygons smooth surface curves aur real-time viewport playback ka golden balance maintain karte hain."
        },
        {
          question: "Character ke mesh aur skeleton bones ko Blender mein import karne ke liye best format kaunsa hai?",
          options: [".FBX format", ".TXT file", ".JPG", ".PDF"],
          correctIndex: 0,
          explanation: ".FBX armature bone hierarchies, animation keyframes aur skin weight bindings natively preserve karta hai."
        },
        {
          question: "Blender mein character import karne ke baad pehla mandatory hygiene step kya hota hai?",
          options: ["Ctrl + A -> Apply All Transforms", "File delete karna", "Direct render karna", "Texture blur karna"],
          correctIndex: 0,
          explanation: "Applying transforms scale ko 1.0 par calibrate karta hai aur future physics glitches eliminate karta hai."
        },
        {
          question: "Character rigging ke liye 5 markers place karne wala Adobe ka free tool kaunsa hai?",
          options: ["Mixamo", "Paintbrush", "Excel", "Notepad"],
          correctIndex: 0,
          explanation: "Mixamo automated web cloud rigging aur motion capture assignment platform provide karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators to the Grand Capstone Project! Aaj hum apni master 3D AI film ka pehla cornerstone rakhenge. Hum apna original hero character zero se design karke animate karenge. Let's forge our protagonist!",
        whatToShowOnScreen: "Midjourney concept generation -> Meshy AI 3D mesh conversion -> Mixamo 5-marker auto-rigging -> Blender 4.x FBX import and Spacebar animation playback. Character moving with glorious cyan-lit cyber armor.",
        screenRecordingSteps: [
          "Step 1: A-pose hero concept prompt execute karein.",
          "Step 2: Meshy Image-to-3D mein upload karke 4K PBR textures bake karein.",
          "Step 3: Mixamo par auto-rig generate karein with combat animation.",
          "Step 4: Blender mein import karein aur Ctrl + A transforms apply karein.",
          "Step 5: 60 FPS smooth viewport playback celebrate karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Hamara hero character 'Kaelen' ab 3D space mein zinda ho chuka hai. Titanium armor par light bounce kar rahi hai aur character dynamic combat stance mein move kar raha hai. Phase 1 of our Capstone Project is officially complete!",
        practicalDemo: "360-degree orbit review of the rigged character in Blender.",
        endingAndHomework: "Character asset package save karein. Agle project lesson mein hum Cinematic Environment build karenge!"
      }
    },
    {
      id: "m12-l2",
      moduleId: 12,
      lessonNumber: 2,
      title: "2. Create a cinematic environment",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Hamara hero character taiyar hai, ab hume uske liye ek **Cinematic World (Environment Stage)** create karni hai jahan hamari story unfold hogi!

Capstone Environment Architecture:
1. **Thematic Consistency:**
   Agar character futuristic cyber warrior hai, toh world bhi matching honi chahiye: e.g. Rainy Neo-Kyoto rooftop garden with towering neon skyscrapers and ancient stone shrines.
2. **Foreground, Midground, Background Layering:**
   - **Foreground:** Weathered mossy stone railing with dripping water puddles.
   - **Midground:** The main staging arena where our hero stands under volumetric cyan spotlight.
   - **Background:** Sprawling megalopolis with holographic mega-billboards fading into rainy atmospheric haze.
3. **Lighting Setup:**
   Classic Hollywood 3-Point setup: Key light (warm golden moonlight), Fill light (cool blue mist), Rim light (vibrant electric cyan outline on character).
4. **Anchor Render Capture:**
   Blender mein Cycles engine enable karein with OptiX Denoising, 85mm camera lens set karein, Depth of Field enable karein, aur **F12 press karke hamara Master 4K Anchor Frame render karein!**`,
      learningObjectives: [
        "Thematic world-building aur character-environment harmonization master karna.",
        "3-Layer depth staging (Foreground, Arena Midground, Megalopolis Background) construct karna.",
        "3-Point studio lighting rig calibrate karna.",
        "High-definition 4K master anchor frame render karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Cycles Render Engine with OptiX Denoise",
        "Environment asset / HDRi backdrop"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Place Character in 3D Scene",
          description: "Position hero character at scene center on ground grid (Z = 0.00)."
        },
        {
          step: 2,
          title: "Build Surrounding Architectural Elements",
          description: "Add reflective wet floor plane, foreground stone pillars, and background holographic cityscape billboard."
        },
        {
          step: 3,
          title: "Configure 3-Point Cinematic Lighting",
          description: "Place Key Area light (600W), Fill Area light (250W), and Rim Area light (1200W electric cyan behind subject)."
        },
        {
          step: 4,
          title: "Press F12 to Render 4K Master Frame",
          description: "Set camera to 85mm, F-stop 1.8 with Depth of Field. Render pristine 4K PNG master anchor image."
        }
      ],
      practicalExample: "Environment Showcase: Neo-Kyoto rooftop environment staged in Blender. Wet floor plane reflects neon lights with roughness 0.15. Rain particles suspended in volumetric fog. Cyan rim light traces character silhouette. The F12 render looks like a genuine cinematic shot from a Hollywood feature film!",
      readyPrompts: [
        {
          title: "Capstone Environment Master",
          prompt: "Cinematic wide-angle shot of a rainy neo-cyberpunk rooftop temple garden overlooking sprawling neon city at midnight, glistening puddles reflecting magenta and cyan signs, volumetric steam rising, photorealistic, 8k --ar 16:9",
          useCase: "Environment backdrop generation blueprint"
        }
      ],
      commonMistakes: [
        {
          mistake: "Floor plane par flat zero-reflection texture use karna.",
          fix: "Cinematic scenes mein floor hamesha slightly reflective ya wet rakhein taaki lights aur characters ke beautiful reflections capture hon."
        },
        {
          mistake: "Cycles rendering mein Denoise check karna bhool jana.",
          fix: "Hamesha Render Properties mein Denoise enable karein taaki zero-noise crystal clarity mile."
        }
      ],
      homework: "Blender mein apna character environment ke sath stage karein, 3-point lighting setup karein aur 4K Master Anchor Frame render karke save karein.",
      summary: "Capstone step 2 mein thematic world-building, wet surface reflections, volumetric lighting aur 85mm camera framing se Master 4K Anchor Image render hoti hai.",
      quiz: [
        {
          question: "Cinematic environment mein floor par wet puddle reflections add karne se kya visual benefit hota hai?",
          options: ["3D spatial depth aur rich lighting reflections multiply hote hain jo Hollywood realism impart karte hain", "Floor fisal jati hai", "Camera gir jata hai", "Render crash hota hai"],
          correctIndex: 0,
          explanation: "Reflective wet surfaces environment ke saare light sources ko mirror karti hain jo visual complexity aur production value enhance karti hai."
        },
        {
          question: "Scene mein character ko background se majestic separation dene ke liye kaunsi light sabse critical hoti hai?",
          options: ["Electric Cyan Rim Light placed behind subject pointing towards camera", "Flat white ceiling bulb", "Monitor screen light", "Keyboard backlight"],
          correctIndex: 0,
          explanation: "Rim light character ke outer silhouette contours ko illuminate karke deep separation create karti hai."
        },
        {
          question: "Blender mein camera ko 85mm focal length aur F-stop 1.8 par set karne par background par kya asar padta hai?",
          options: ["Background creamy out-of-focus bokeh blur mein melt ho jata hai jo subject ko pop out karta hai", "Background delete ho jata hai", "Background white ho jata hai", "Camera turn off ho jata hai"],
          correctIndex: 0,
          explanation: "Shallow depth of field (85mm @ f/1.8) optical subject isolation aur premium cinematic aesthetic deliver karti hai."
        },
        {
          question: "Render karte waqt F12 press karne ke baad image ko disk par save karne ka shortcut kya hota hai?",
          options: ["Alt + S (Save As Image)", "Ctrl + W", "F4", "Shift + Esc"],
          correctIndex: 0,
          explanation: "Alt + S render buffer window mein image export dialog invoke karta hai."
        },
        {
          question: "Rendered Master Anchor Frame ka final project pipeline mein kya use hoga?",
          options: ["Yeh Runway/Luma Image-to-Video mein input anchor frame banega jo video motion generate karega", "Yeh delete kiya jayega", "Yeh wallpaper banega only", "Kuch use nahi hoga"],
          correctIndex: 0,
          explanation: "Master render hamare next stage (AI Video Motion Generation) ka starting anchor blueprint hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome back creators! Hamara hero character Kaelen taiyar hai. Aaj hum uske liye ek cinematic universe construct karenge. Lighting, wet reflections aur volumetric mist se humara scene ek Hollywood blockbuster set ban jayega. Let's stage our world!",
        whatToShowOnScreen: "Blender 4.x viewport. Importing hero character into rooftop scene. Adding reflective wet tarmac plane. Positioning 3-point lighting rig (Key, Fill, Rim). Cycles Viewport Shading activation -> Ray-traced reflections glistening live. Setting camera 85mm f/1.8. Pressing F12 key. Pristine 4K master render resolving on screen.",
        screenRecordingSteps: [
          "Step 1: Character ko scene origin par place karein.",
          "Step 2: Reflective ground plane aur background structures build karein.",
          "Step 3: 3-Point Area lights setup karein with cyan rim light.",
          "Step 4: Camera 85mm with Depth of Field focus calibrate karein.",
          "Step 5: 'F12' press karein aur 4K Master Anchor Frame export karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jaise hi Cycles ne frame render kiya, wet floor par character aur neon city ke exact reflections shine kar rahe hain, aur cyan rim light ne shoulders par electric halo create kar diya hai. This is not just a render, this is an official Hollywood film frame. Step 2 complete!",
        practicalDemo: "Inspecting ray-traced puddle reflections and saving master 4K PNG file.",
        endingAndHomework: "Master Anchor Render save karein. Agle project lesson mein hum Multiple AI Video Clips generate karenge!"
      }
    },
    {
      id: "m12-l3",
      moduleId: 12,
      lessonNumber: 3,
      title: "3. Generate multiple AI video clips",
      duration: "17 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek complete 30-to-60 second film trailer ke liye hume **Multiple Varied Shots (Shots Coverage)** chahiye hote hain! 

Ek single shot se film nahi banti. Hum Runway Gen-3 Alpha aur Luma Dream Machine mein hamare 4K Master Renders aur T2V prompts feed karke **4 Core Narrative Shots** generate karenge:

The 4 Essential Film Trailer Shots:
1. **Shot 1: Wide Establishing Shot (The World):**
   Camera sweeps past wet temple gargoyles overlooking the sprawling rainy mega-city. Rain falling, neon reflections shimmering (5 seconds).
2. **Shot 2: Medium Tracking Shot (The Action):**
   Hero character walking deliberately forward, camera tracking alongside, puddles splashing under heavy boots, cape billowing in wind (5 seconds).
3. **Shot 3: Extreme Close-Up Macro (The Intensity):**
   Camera pushes in close to character's glowing visor, rain running down helmet, eye narrowing with lethal focus, katana blade igniting with electrical sparks (5 seconds).
4. **Shot 4: Dynamic Combat Climax (The Climax):**
   Hero leaps forward with glowing energy blade in high-speed acrobatic action, volumetric steam exploding around him, camera orbits dynamically (5 seconds).

Har shot ke 2-2 takes generate karein aur best glitch-free takes download karein!`,
      learningObjectives: [
        "Multi-shot coverage matrix (Wide, Medium Tracking, Macro Close-up, Action Climax) generate karna.",
        "Character consistency aur color atmosphere across all 4 shots preserve karna.",
        "Runway Gen-3 camera controls aur motion brushes surgically apply karna.",
        "Master takes folder organization aur quality filtering execute karna."
      ],
      requiredTools: [
        "RunwayML Gen-3 Alpha / Luma Dream Machine",
        "4K Master Render from Step 2",
        "Shot list storyboard"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Generate Shot 1 (Wide Vista)",
          description: "Upload environment master or prompt: 'Cinematic wide drone sweep past wet stone gargoyles overlooking neon megacity, rain falling, 8k'."
        },
        {
          step: 2,
          title: "Generate Shot 2 (Medium Tracking)",
          description: "Upload Hero anchor render into I2V. Motion prompt: 'Slow tracking truck shot alongside warrior walking through neon mist, puddles splashing'."
        },
        {
          step: 3,
          title: "Generate Shot 3 (Close-Up Macro)",
          description: "Generate tight visor close-up with Motion Brush static face mask: 'Camera pushes in, glowing visor pulses cyan, rain dripping'."
        },
        {
          step: 4,
          title: "Generate Shot 4 (Dynamic Action Climax)",
          description: "Prompt high-kinetic action: 'Warrior leaps forward unleashing sweeping energy katana arc, volumetric steam explosion, 8k, 24fps'."
        }
      ],
      practicalExample: "Production Batch Run: 4 shots generated in Runway Gen-3. Shot 1 wide sweep was clean on Take 1. Shot 2 needed Take 2 with motion brush on legs to stabilize footstep contacts. Shot 3 and Shot 4 executed with flawless Hollywood consistency. All 4 master takes downloaded at 1080p/4K!",
      readyPrompts: [
        {
          title: "Capstone Multi-Shot Pack: Shot 3 Macro",
          prompt: "Cinematic macro close-up of armored warrior visor, intense cyan optical telemetry reflecting inside visor lens, water droplets running down helmet, shallow depth of field, 8k, 24fps",
          useCase: "Macro shot generation"
        }
      ],
      commonMistakes: [
        {
          mistake: "Charon shots mein alag-alag color lighting generate kar lena.",
          fix: "Har prompt ke end mein identical lighting tokens use karein: 'rainy midnight, cyan and magenta neon, volumetric mist'."
        },
        {
          mistake: "Single take par compromise kar lena.",
          fix: "Agar kisi clip mein tail glitch hai, naya take generate karein ya trimming plan karein."
        }
      ],
      homework: "Apni film trailer ke liye 4 distinct camera shots (Wide, Medium, Close-up, Climax) generate karein aur unhe organized folder mein save karein.",
      summary: "Capstone step 3 mein 4 complementary camera shots (Wide, Medium, Close, Climax) generate karke unhe high-bitrate master files mein archive kiya jata hai.",
      quiz: [
        {
          question: "Hollywood movie trailer structure mein complete visual coverage ke liye kam se kam kitne diverse camera angles generate karne chahiye?",
          options: ["Kam se kam 4 angles: Wide Establishing, Medium Tracking, Macro Close-Up, aur Dynamic Climax", "Sirf 1 hi angle poori video mein", "Zero camera angles", "Sirf black screen"],
          correctIndex: 0,
          explanation: "4-shot coverage visual variety, narrative progression aur emotional rhythm provide karti hai."
        },
        {
          question: "Alag-alag AI video clips ke beech visual continuity aur color harmony kaise maintain ki jaati hai?",
          options: ["Har prompt mein locked character DNA string aur identical environmental lighting tokens repeat karke", "Har shot alag movie se utha kar", "Random color generators use karke", "Black and white filter se"],
          correctIndex: 0,
          explanation: "Shared visual tokens neural network ko identical color palette aur character features synthesize karne guide karte hain."
        },
        {
          question: "Shot 3 (Macro Close-Up) mein character ke face ko morphing se bachane ke liye kaunsi technique use ki jaati hai?",
          options: ["Motion Brush static mask (0 velocity) on face", "Speed slider 10 karna", "Screen blur karna", "Brightness badhana"],
          correctIndex: 0,
          explanation: "Face par zero motion lock facial anatomy ko anchor image se frozen rakhta hai jabki rain aur lights move karte hain."
        },
        {
          question: "Shot 4 (Climax) ka primary narrative goal kya hota hai?",
          options: ["High-energy explosive action, peak emotional intensity aur dramatic payoff deliver karna", "Neend lana", "Video end karna abruptly", "Boring visual dikhana"],
          correctIndex: 0,
          explanation: "Climax shot trailer ka highest dopamine moment hota hai jo audience ko memorable lingering impact deta hai."
        },
        {
          question: "Organized production folder mein master clips ko kis naming format mein save kiya jata hai?",
          options: ["Project_Shot01_Wide.mp4, Project_Shot02_Tracking.mp4, etc.", "File1.mp4, File2.mp4", "New folder(1)", "Random numbers"],
          correctIndex: 0,
          explanation: "Descriptive naming post-production timeline assembly mein instant alignment facilitate karti hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum apni film ke 4 core narrative shots direct karenge. Wide Vista se shuru karke, Medium Tracking, Macro Close-Up aur explosive Climax tak. Humara complete footage package ready hone wala hai. Action!",
        whatToShowOnScreen: "Runway Gen-3 batch generation screen. Shot 1 Wide vista rendering. Shot 2 Medium tracking rendering. Shot 3 Visor macro close-up rendering. Shot 4 Acrobatic energy katana strike rendering. All 4 video tiles playing simultaneously on screen. Inspecting and downloading master takes.",
        screenRecordingSteps: [
          "Step 1: Shot 1 Wide establishing prompt run karein.",
          "Step 2: Shot 2 Medium tracking shot generate karein with rain puddles.",
          "Step 3: Shot 3 Macro close-up execute karein with static face mask.",
          "Step 4: Shot 4 High-octane combat climax render karein.",
          "Step 5: Sabhi 4 master takes download karke project folder mein save karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Chaaron shots kitne beautifully ek dusre ko complement kar rahe hain. Same character, same cyber city, same volumetric cyan lighting, lekin 4 alag-alag dramatic camera perspectives. We have captured our master cinematic coverage! Step 3 complete!",
        practicalDemo: "4-way split screen playback of all 4 generated master takes.",
        endingAndHomework: "4 Master video takes archive karein. Agle project lesson mein hum Timeline Assembly aur Rhythmic Cuts seekhenge!"
      }
    },
    {
      id: "m12-l4",
      moduleId: 12,
      lessonNumber: 4,
      title: "4. Combine scenes",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ab hum apne 4 Master Shots ko CapCut Desktop ki multi-track timeline par lekar aayenge aur unhe ek **Cohesive Theatrical Sequence** mein assemble karenge!

The Capstone Assembly & Rhythmic Cutting Blueprint:
1. **Rough Cut Sequencing:**
   - **0.0s - 4.0s:** Shot 1 (Wide Vista) - Establish the rainy cyberpunk world.
   - **4.0s - 7.5s:** Shot 2 (Medium Tracking) - Introduce hero walking deliberately forward.
   - **7.5s - 10.5s:** Shot 3 (Close-Up Macro) - Reveal glowing visor and eyes full of determination.
   - **10.5s - 15.0s:** Shot 4 (Combat Climax) - Explosive leap and energy katana strike!
2. **Precision Trimming:**
   Har shot ke head aur tail ke micro-glitches ko razor blade tool ('C') se trim karein. Only 100% stable frames stay on timeline.
3. **Pacing Acceleration:**
   Notice kijiye timing progression: 4.0s -> 3.5s -> 3.0s -> 2.0s -> Rapid action climax! Pacing automatically accelerate karti hai jo audience ke heart rate ko pump karti hai.
4. **Cinematic Transitions:**
   Shot 3 se Shot 4 ke beech **0.2s Whip Pan Right** transition place karein right on the sword slash momentum!`,
      learningObjectives: [
        "4 Master shots ko timeline par cinematic progression ke sath assemble karna.",
        "Razor blade trimming se unwanted tail frames eliminate karna.",
        "Escalating temporal pacing (4s -> 3.5s -> 3s -> 2s) fine-tune karna.",
        "Whip Pan transitions aur match cuts seamlessly integrate karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "4 Master AI video takes from Step 3"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Import 4 Master Takes into CapCut Timeline",
          description: "Arrange sequentially on Video Track 1: Shot 1 -> Shot 2 -> Shot 3 -> Shot 4."
        },
        {
          step: 2,
          title: "Trim to Exact Narrative Durations",
          description: "Trim Shot 1 (0s - 4.0s), Shot 2 (4.0s - 7.5s), Shot 3 (7.5s - 10.5s), Shot 4 (10.5s - 15.0s)."
        },
        {
          step: 3,
          title: "Apply 0.2s Whip Pan on Climax Cut",
          description: "Insert Whip Pan transition between Shot 3 and Shot 4 right on the blade ignition."
        },
        {
          step: 4,
          title: "Play Continuous Assembly",
          description: "Press Spacebar to review overall narrative flow and visual momentum."
        }
      ],
      practicalExample: "Timeline Assembly Review: 15-second rough cut plays. Wide vista sets the mood -> Camera cuts to warrior tracking -> Camera cuts to visor close-up -> SNAP! Whip pan transition into explosive leaping blade strike. Pacing is razor-tight with zero drag! The video flows like an authentic Marvel/Pixar studio trailer!",
      readyPrompts: [
        {
          title: "Timeline Assembly Flow Reference",
          prompt: "Visual continuity timeline grid showing fluid match-cut transition between close-up eye macro and dynamic action leap, 8k",
          useCase: "Assembly flow benchmark"
        }
      ],
      commonMistakes: [
        {
          mistake: "Shots ko bina trim kiye default 5-5 seconds par chhod dena.",
          fix: "Un-cut clips boring lagti hain. Hamesha razor blade se golden portions trim karein."
        },
        {
          mistake: "Transition itna slow kar dena ki action ka punch mar jaye.",
          fix: "Keep action transitions super snappy (0.2 seconds)."
        }
      ],
      homework: "CapCut timeline par apne 4 shots assemble karein, durations ko 4s -> 3.5s -> 3s -> 4.5s trim karein aur 1 snappy transition insert karein.",
      summary: "Capstone step 4 mein 4 shots ko progressive narrative pacing, razor trimming aur kinetic transitions ke sath seamless 15-second sequence mein assemble kiya jata hai.",
      quiz: [
        {
          question: "Action film trailers mein visual momentum aur tension escalate karne ke liye shot durations ke sath kya kiya jata hai?",
          options: ["Shots ki duration progressively choti ki jaati hai (e.g. 4s -> 3s -> 1.5s -> 0.8s) taaki pacing accelerate ho", "Shots ko 10 minute lamba kiya jata hai", "Video freeze kar di jaati hai", "Screen black kar di jaati hai"],
          correctIndex: 0,
          explanation: "Accelerating pacing heart-rate accelerate karti hai aur dramatic climax ke liye psychological anticipation build karti hai."
        },
        {
          question: "Shot 3 (Visor Close-Up) se Shot 4 (Leaping Katana Strike) ke cut point par kaunsa transition sabse punchy kinetic energy deta hai?",
          options: ["Fast Whip Pan Right (0.2 seconds)", "Slow 3D heart dissolve", "Star wipe", "Page roll"],
          correctIndex: 0,
          explanation: "Whip Pan directional blur character ke attack momentum ke direction ko amplify karta hai."
        },
        {
          question: "Timeline assembly stage par har clip ke head aur tail ko scrutinize karke trim karna kyu compulsory hai?",
          options: ["Taaki AI video model ke initial static lag ya tail morphing glitches timeline se 100% remove ho sakein", "Kyunki files free hoti hain", "Kyunki internet band ho jata hai", "Kyunki sound mute hoti hai"],
          correctIndex: 0,
          explanation: "Trimming ensure karti hai ki final render mein audience ko sirf 100% pristine golden frames hi dikhein."
        },
        {
          question: "CapCut timeline par video clip ko bina gaps chhodhe aapas mein chipka kar rakhne wale mode ko kya kehte hain?",
          options: ["Magnetic Timeline / Ripple Edit", "Static lock", "Freeze track", "Mute track"],
          correctIndex: 0,
          explanation: "Magnetic timeline automatically trimmed clips ke beech ke gaps ko close kar deti hai."
        },
        {
          question: "Visual editing mein 'Match Cut' ka kya arth hota hai?",
          options: ["Pichle shot ka visual shape ya motion direction agle shot ke opening composition se match hona", "Matchstick jalana", "Cricket match dekhna", "Color delete karna"],
          correctIndex: 0,
          explanation: "Match cuts visual symmetry ya kinetic direction preserve karte hain jo cuts ko subconscious level par invisible banate hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum apni raw clips ko ek coherent story mein assemble karenge. Yahan ek director ki pacing sense test hoti hai. Har cut ka ek purpose hai, har frame ka ek rhythm hai. Let's assemble our master sequence!",
        whatToShowOnScreen: "CapCut Desktop timeline. Dragging 4 master clips into sequence. Demonstrating Razor Blade tool trimming head and tail frames. Zooming in to apply 0.2s 'Whip Pan Right' transition between Shot 3 and Shot 4. Pressing Spacebar. Continuous 15-second action trailer playing smoothly.",
        screenRecordingSteps: [
          "Step 1: Track 1 par 4 shots chronological order mein place karein.",
          "Step 2: 'C' key se head aur tail trimming execute karein.",
          "Step 3: Durations calibrate karein (Wide 4s, Med 3.5s, Close 3s, Climax 4.5s).",
          "Step 4: Snappy 0.2s Whip Pan transition drag karein.",
          "Step 5: Full visual sequence review karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, wide shot world establish karta hai, medium shot hero ka determination dikhata hai, close-up visor tension peak par le jata hai, aur BAM! Whip pan ke sath exploding combat climax! The visual spine of our movie is complete. Step 4 done!",
        practicalDemo: "Real-time playback of the assembled visual cut.",
        endingAndHomework: "Assembly cut finalize karein. Agle project lesson mein hum Sound Design, SFX aur Epic Voiceover integrate karenge!"
      }
    },
    {
      id: "m12-l5",
      moduleId: 12,
      lessonNumber: 5,
      title: "5. Add music and sound effects",
      duration: "17 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Visual cut complete ho chuka hai, ab samay hai is bejaan shareer mein **Sound Design ki Aatma (Soul) phookne ka!**

Capstone Complete Multi-Track Audio Architecture:
Hum CapCut mein 5 parallel audio tracks construct karenge:
1. **Audio Track 1: Master Cinematic Trailer Music:**
   Epic orchestral-electronic hybrid soundtrack with rising tension strings and massive beat drop at 10.5 seconds (matching the climax leap!). Volume: -10 dB.
2. **Audio Track 2: The Narrator AI Voiceover (ElevenLabs):**
   Booming, deep movie trailer voice:
   *Line 1 (0s): "In a world consumed by steel..." (pause)*
   *Line 2 (7s): "...one machine remembers humanity." (pause)*
   *Line 3 (10s): "RISE!" (screamed as blade strikes).* Volume: -3 dB with Audio Ducking enabled.
3. **Audio Track 3: Environmental Ambience Bed:**
   Rain dripping on stone, low howling cyberpunk wind, distant city hum. Volume: -22 dB.
4. **Audio Track 4: Kinetic Foley & Movements:**
   Heavy metal boots stomping in water puddles, leather armor rustle, sword unsheathing metallic scraping sound. Volume: -14 dB.
5. **Audio Track 5: Cinematic Whooshes & Climax Braams (Sub-Bass):**
   Whip pan transition par high-speed air whoosh. Climax blade strike par massive 80Hz subwoofer-shaking cinema boom hit! Volume: -6 dB.`,
      learningObjectives: [
        "5-Track professional audio layering architecture construct karna.",
        "ElevenLabs deep movie trailer voiceover synchronize karna.",
        "Audio ducking aur vocal clarity frequency space balance karna.",
        "Frame-accurate SFX transient alignment (whooshes, footsteps, impacts) master karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "Trailer music soundtrack",
        "ElevenLabs voiceover MP3",
        "SFX master pack"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Import Trailer Music onto Track 1",
          description: "Align musical beat drop exactly with the Shot 4 climax leap at 10.5 seconds."
        },
        {
          step: 2,
          title: "Place ElevenLabs Voiceover on Track 2",
          description: "Position dramatic vocal lines in the negative space between heavy drum hits. Enable Audio Ducking."
        },
        {
          step: 3,
          title: "Lay Ambient Rain & Wind Bed on Track 3",
          description: "Loop continuous rain sound across entire 15s at -22 dB."
        },
        {
          step: 4,
          title: "Snap Foley Footsteps & Sword Scrapes on Track 4",
          description: "Frame-align metal boot splashes under Shot 2 walking frames."
        },
        {
          step: 5,
          title: "Insert Whoosh & Sub-Bass Impact on Track 5",
          description: "Place whoosh on Whip Pan cut, place massive cinematic braam on blade hit."
        }
      ],
      practicalExample: "Full Audio-Visual Experience: The screen starts in rainy mist. Narrator's deep voice shakes the room: 'In a world consumed by steel...' Rain drips softly. Hero walks, boots splash in wet puddle with crisp foley. Visor eyes glow -> Riser sound accelerates -> Voice whispers: 'RISE!' -> WHOOSH! BAM! Subwoofer roars, beat drops, energy blade slashes with thunderous plasma hum! Goosebumps guaranteed!",
      readyPrompts: [
        {
          title: "Sound Design Mixing Console Reference",
          prompt: "Professional film sound design mixing console, illuminated VU meters glowing in amber and green, multi-track waveform monitors, acoustic treatment panels, 8k",
          useCase: "Audio mixing session reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Voiceover ko loud music ke neeche dabba dena (inaudible dialogue).",
          fix: "Hamesha music track par Audio Ducking on karein aur master audio levels monitor karein."
        },
        {
          mistake: "Sub-bass impact ko 0 dB se upar push karke audio clipping distortion karna.",
          fix: "Keep peak transients below -1.0 dB True Peak."
        }
      ],
      homework: "Apne 4 assembled video shots par complete 5-layer audio design (Music, Voiceover, Ambience, Foley, Impacts) arrange aur balance karein.",
      summary: "Capstone step 5 mein 5-track audio layering (Soundtrack, ElevenLabs voiceover, Rain ambience, Foley, Sub-bass impacts) se video ko Hollywood theatrical sound immersion milta hai.",
      quiz: [
        {
          question: "Professional trailer audio post-production mein kitni distinct audio layers standard build ki jaati hain?",
          options: ["5 Layers: Master Music, Voiceover Dialogue, Ambience Bed, Foley Movements, aur Cinematic Impacts/Whooshes", "Sirf 1 single mono track", "Zero audio", "100 random noise tracks"],
          correctIndex: 0,
          explanation: "5-layer audio architecture clarity, depth, dynamic range aur emotional resonance guarantee karti hai."
        },
        {
          question: "Climax scene ke exact video impact par music ka sabse loudest dynamic moment hit karne ko kya kehte hain?",
          options: ["The Beat Drop / Musical Climax Hit", "Audio mute", "Fade to black", "Low pass filter"],
          correctIndex: 0,
          explanation: "Musical beat drops visual impacts ke sath synchronize hokar maximum visceral adrenaline release karte hain."
        },
        {
          question: "Narrator voiceover sunai dene ke doran background music ko automatically dip karne ke liye kya enable kiya jata hai?",
          options: ["Audio Ducking", "Audio Inversion", "Delete music", "Pitch shift"],
          correctIndex: 0,
          explanation: "Audio Ducking voice intelligibility maintain karta hai bina music ko manually keyframe kiye."
        },
        {
          question: "Metal footsteps aur cloth rustle sounds kis audio category mein belong karti hain?",
          options: ["Foley Sound Design", "Synthesizer music", "Podcast dialogue", "Radio broadcast"],
          correctIndex: 0,
          explanation: "Foley realistic organic physical interactions aur footsteps simulate karta hai."
        },
        {
          question: "Master audio meter par safe maximum peak ceiling kya hoti hai digital distortion (clipping) prevent karne ke liye?",
          options: ["-1.0 dB True Peak (below 0 dB red line)", "+15 dB", "+50 dB", "-100 dB"],
          correctIndex: 0,
          explanation: "-1.0 dB True Peak headroom inter-sample clipping aur speaker crackle distortion prevent karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Ab hum apni film mein soul, power aur thunder phookenge. 5-Track Sound Design hi wo difference hai jo computer graphics ko ek Hollywood blockbuster theatrical experience banata hai. Let's mix the sound!",
        whatToShowOnScreen: "CapCut multi-track audio window. Layering Track 1 (Trailer music), Track 2 (ElevenLabs voiceover), Track 3 (Rain ambience), Track 4 (Foley boots), Track 5 (Whooshes and Bass booms). Waveform alignment demonstration. Playing full mixed master playback with booming theatrical audio.",
        screenRecordingSteps: [
          "Step 1: Track 1 par trailer soundtrack drop karein with beat marker on 10.5s.",
          "Step 2: Track 2 par ElevenLabs deep voiceover place karein with Audio Ducking.",
          "Step 3: Track 3 par rain and wind ambience loop -22 dB set karein.",
          "Step 4: Footstep impacts par water splash foley align karein.",
          "Step 5: Full combined playback run karein with master audio meters in green/yellow safe zone."
        ],
        voiceoverHindi: "Dosto suniye aur feel kijiye! 'In a world consumed by steel...' (rain dripping)... boots splash on wet stone... riser builds... 'RISE!'... BOOM! Subwoofer vibrates, katana lights up, and the music drops with earth-shattering power! We have created a cinematic masterpiece. Step 5 complete!",
        practicalDemo: "Soloing each audio track and demonstrating the combined wall of sound.",
        endingAndHomework: "Audio mix lock karein. Agle aur aakhri lesson mein hum 4K Master Render export karenge aur aapka Certificate of Completion unlock hoga!"
      }
    },
    {
      id: "m12-l6",
      moduleId: 12,
      lessonNumber: 6,
      title: "6. Export a complete 30–60 second professional 3D AI video",
      duration: "19 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `CONGRATULATIONS CREATOR! Aap 3D AI Studio ke aakhri aur sabse bade milestone par pahunch chuke hain!

Is final lesson mein hum apni complete 30–60 second 3D AI Masterpiece Film ko:
1. **Apply Theatrical Color Grading & Film Grain:**
   Master adjustment layer par 'Teal & Orange' Hollywood grade, 12% 35mm film grain aur 15% vignette apply karein.
2. **Add Official Academy Branding & Outro:**
   Video ke end mein official title card:
   *"3D AI STUDIO - ZERO TO PRO MASTERCLASS"*
   Tagline: *"Imagine It. Create It. Animate It."*
3. **Execute 4K UHD Master Export:**
   Resolution: **3840 x 2160 (4K UHD)**, Bitrate: **Custom 40 Mbps (CBR)**, Codec: **H.264 / MP4**, Audio: **320 kbps AAC @ 48 kHz**.
4. **Course Graduation & Certificate Eligibility:**
   Is final project submission ke sath aapka course progress 100% complete ho jayega aur aapka **Official Verifiable Certificate of Completion** automatically generate ho jayega!`,
      learningObjectives: [
        "Final master color grading, film grain aur vignette polish execute karna.",
        "Official academy branding outro title card integrate karna.",
        "4K UHD (3840x2160 @ 40 Mbps) master file export karna.",
        "Course completion requirements satisfy karke Verifiable Certificate claim karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "Completed multi-track master project",
        "Student Dashboard (for Certificate generation)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Final Timeline Quality Check (QA)",
          description: "Inspect timeline from Frame 1 to End. Verify zero black gaps, zero audio pops, perfect lip/beat sync."
        },
        {
          step: 2,
          title: "Attach Official Title Card Outro",
          description: "Append 3-second animated title card: '3D AI STUDIO - ZERO TO PRO MASTERCLASS | Imagine It. Create It. Animate It.'"
        },
        {
          step: 3,
          title: "Configure 4K UHD Master Export",
          description: "Settings: 3840x2160, 24 FPS, Custom Bitrate 40,000 kbps, Codec H.264, Audio 320 kbps AAC @ 48kHz."
        },
        {
          step: 4,
          title: "Render Master File",
          description: "Click Export. Save as '3D_AI_STUDIO_FINAL_MASTERPIECE_4K.mp4'."
        },
        {
          step: 5,
          title: "Claim Official Certificate of Completion",
          description: "Head to your Student Dashboard to download and print your official verifiable Certificate!"
        }
      ],
      practicalExample: "Grand Project Delivery: The completed 45-second 3D AI film trailer exported at 4K 40 Mbps. Breathtaking visual depth, ray-traced reflections, thundering multi-track sound design, and an inspiring ending title card. The student is now equipped to work as a professional 3D AI Director, VFX Creator, or agency producer worldwide!",
      readyPrompts: [
        {
          title: "Official Academy Graduation Crest",
          prompt: "Official gilded crest of 3D AI Studio Academy, embossed gold and electric cyan cybernetic laurel wreath surrounding glowing crystal cube, cinematic lighting, 8k",
          useCase: "Certificate and graduation presentation asset"
        }
      ],
      commonMistakes: [
        {
          mistake: "Export ke baad video ko bina dekhe upload kar dena.",
          fix: "Hamesha exported file ko VLC mein fullscreen play karke shuru se aakhir tak headphones par inspect karein (Quality Assurance pass)."
        },
        {
          mistake: "Project source files delete kar dena.",
          fix: "Blender .blend files, Meshy .glb models aur CapCut project files ko external drive par safe archive karein."
        }
      ],
      homework: "Apni complete 30–60 second 4K master video export karein, social media / portfolio par share karein aur Student Dashboard se apna official Certificate download karein!",
      summary: "Aapne Zero to Pro Masterclass successfully complete kar liya hai! Aap ek complete 3D AI Video Creator ban chuke hain jo text se 3D models, animation, AI video aur professional post-production master kar chuka hai.",
      quiz: [
        {
          question: "Final 4K Master Video export ke liye recommended bitrate kitna hona chahiye?",
          options: ["35 Mbps se 50 Mbps Constant Bitrate (CBR)", "0.1 Mbps", "2 Mbps", "10,000 Mbps"],
          correctIndex: 0,
          explanation: "35 to 50 Mbps 4K resolution ke dynamic color gradients, film grain aur fast motion details ko artifact-free preserve karta hai."
        },
        {
          question: "3D AI Studio Academy ka official tagline kya hai?",
          options: ["Imagine It. Create It. Animate It.", "Just click and forget", "Simple 2D drawings", "Only for robots"],
          correctIndex: 0,
          explanation: "'Imagine It. Create It. Animate It.' academy ka core inspiring vision aur creative philosophy hai."
        },
        {
          question: "Exported video deliver karne se pehle 'QA (Quality Assurance) Pass' mein kya inspect kiya jata hai?",
          options: ["Full playback to verify zero black gaps, zero audio pops, sharp color grading aur audio-visual sync", "Sirf file name", "Mouse battery", "Desktop icons"],
          correctIndex: 0,
          explanation: "QA pass broadcast industry ka mandatory final verification step hota hai delivery se pehle."
        },
        {
          question: "3D AI Studio Zero to Pro Masterclass mein aapne kin core tool ecosystems ko end-to-end master kiya?",
          options: ["Meshy AI (3D Modeling), Blender (Staging & Animation), Runway/Luma (AI Video), CapCut/DaVinci (Post-Production & Sound Design)", "Sirf Paint brush", "Sirf MS Excel", "Sirf Calculator"],
          correctIndex: 0,
          explanation: "Aapne comprehensive Hollywood-grade hybrid production pipeline master ki hai jo prompt se lekar 4K master video tak chalti hai."
        },
        {
          question: "Course ke sabhi 12 Modules aur Quizzes complete karne ke baad student ko kya award kiya jata hai?",
          options: ["Official Verifiable Certificate of Completion with unique Credential ID", "Blank paper", "Error message", "Email spam"],
          correctIndex: 0,
          explanation: "Student Dashboard complete progress aur quiz evaluation ke baad digitally verifiable authentic Certificate issue karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Hum apni journey ke shikhar (summit) par pahunch chuke hain. Aapne Zero se start kiya, 3D space seekha, prompt engineering master ki, Meshy se 3D models banaye, Blender mein stage kiya, Runway se AI video generate ki aur Hollywood level par edit aur sound design kiya. Aaj aapka master video duniya ke saamne aane ke liye taiyar hai!",
        whatToShowOnScreen: "CapCut Desktop full timeline with all 5 audio tracks and 4 video tracks aligned. Export dialog box opening. Configuring: 4K UHD, 40 Mbps, H.264, 320 kbps AAC. Exporting the master video. Playing the complete 45-second breathtaking 3D AI film trailer fullscreen with cinema audio. Transitioning to Student Dashboard showing 100% Course Progress and the official glowing Certificate of Completion.",
        screenRecordingSteps: [
          "Step 1: Final QA inspection timeline scrub karein.",
          "Step 2: Academy outro title card review karein.",
          "Step 3: 4K UHD master export execute karein.",
          "Step 4: Fullscreen master trailer playback celebrate karein.",
          "Step 5: Student Dashboard mein jakar verified Certificate generate aur download karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Yeh video kisi multimillion-dollar Hollywood studio ne nahi, aapne apne laptop par banayi hai! 3D AI ki taakat se ab aap ek complete solo animation studio hain. Imagine It. Create It. Animate It. You are now officially a Certified 3D AI Video Master! Go create wonders!",
        practicalDemo: "Fullscreen master trailer premiere and Certificate generation celebration.",
        endingAndHomework: "Congratulations! Apna certificate download karein, portfolio launch karein aur 3D AI Studio community mein apna final video submit karein!"
      }
    }
  ]
};

