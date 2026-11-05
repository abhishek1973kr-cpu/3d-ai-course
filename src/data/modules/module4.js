export const module4 = {
  id: 4,
  slug: "ai-3d-model-creation",
  title: "MODULE 4: AI 3D MODEL CREATION",
  subtitle: "Meshy AI, Text-to-3D, Image-to-3D, Mesh Topology aur GLB/FBX Export",
  description: "Prompt aur 2D image se 60 seconds mein exportable 3D meshes generate karna. Meshy AI workflow, polygon density, UV unwrapping aur game-ready 3D file formats.",
  icon: "Box",
  badge: "Game Changer",
  totalLessons: 6,
  totalDuration: "86 min",
  lessons: [
    {
      id: "m4-l1",
      moduleId: 4,
      lessonNumber: 1,
      title: "1. Introduction to Meshy AI",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Traditional 3D modeling mein ek single character sculpt karne mein ek professional 3D artist ko 3 se 7 din lagte hain. Lekin **Meshy AI** ne is pure landscape ko hamesha ke liye disrupt kar diya hai!

Meshy AI ek neural 3D generative platform hai jo state-of-the-art NeRF (Neural Radiance Fields) aur Diffusion 3D algorithms ka use karta hai. Iski madad se aap:
1. Text prompt type karke direct 3D model generate kar sakte hain (**Text-to-3D**).
2. Kisi bhi 2D photo ya concept art ko upload karke 3D mesh bana sakte hain (**Image-to-3D**).
3. 3D models par automatic high-resolution PBR textures (Color, Normal, Roughness, Metallic maps) apply kar sakte hain (**AI Texturing**).
4. Models ko game engines aur Blender ke universal formats jaise **.GLB, .FBX, aur .OBJ** mein 1-click download kar sakte hain.

Meshy AI browser-based chalta hai, iska matlab aapko heavy local graphics card ki zaroorat nahi hai. Free tier par har user ko monthly generation credits milte hain.`,
      learningObjectives: [
        "Meshy AI ke cloud interface aur core navigation ko master karna.",
        "Text-to-3D vs Image-to-3D engines ka selection criteria samajhna.",
        "Generation credits aur resolution options ko effectively manage karna.",
        "Interactive 3D viewport controls (Orbit, Pan, Zoom, Wireframe) operate karna."
      ],
      requiredTools: [
        "Web browser with WebGL support",
        "Free Meshy AI Account (meshy.ai)",
        "Three-button mouse (or trackpad gestures)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Sign up and Explore Dashboard",
          description: "meshy.ai par Google account se login karein aur dashboard par 'Text to 3D' aur 'Image to 3D' tabs ko explore karein."
        },
        {
          step: 2,
          title: "Viewport Navigation Controls",
          description: "Left-Click drag = Orbit camera, Right-Click drag = Pan, Scroll wheel = Zoom."
        },
        {
          step: 3,
          title: "Inspect Shading Modes",
          description: "Toggle between 'Textured view', 'Wireframe view', aur 'Clay view' to inspect underlying mesh geometry."
        }
      ],
      practicalExample: "Dashboard Tour: Meshy AI mein jab aap kisi sample model par click karte hain, toh aap dekhenge ki neural network ne front, back aur bottom sabhi sides ko automatically 360-degree mein close kar diya hai bina kisi manual polygon patching ke!",
      readyPrompts: [
        {
          title: "Meshy Quick Test Prompt",
          prompt: "Cute robotic companion orb, glossy white plastic shell, glowing cyan central eye, metallic copper thrusters at base, game ready 3D asset",
          useCase: "Meshy AI platform capability test"
        }
      ],
      commonMistakes: [
        {
          mistake: "Pehle hi generation mein ultra-complex 10-character crowd generate karne ki koshish karna.",
          fix: "Meshy AI single subjects, characters, weapons, vehicles aur props par best perform karta hai. Single isolated objects se shuru karein."
        },
        {
          mistake: "Credits tracking ignore kar dena.",
          fix: "Har generation kuch credits leti hai. Pehle draft preview generate karein, fir satisfied hone par high-res mesh bake karein."
        }
      ],
      homework: "Meshy AI dashboard par login karein, community gallery se 3 models inspect karein aur unka wireframe view toggle karke dekhein.",
      summary: "Meshy AI browser-based 3D generation platform hai jo text aur images ko 60 seconds mein exportable 3D meshes aur PBR textures mein convert karta hai.",
      quiz: [
        {
          question: "Meshy AI ka primary function kya hai?",
          options: ["Music compose karna", "Text aur 2D images ko 3D models (.GLB/.FBX) mein convert karna", "PDF compress karna", "Excel calculations"],
          correctIndex: 1,
          explanation: "Meshy AI ek neural 3D modeling platform hai jo text/images se direct 3D assets generate karta hai."
        },
        {
          question: "Meshy AI chalane ke liye kya aapko ₹2 Lakh ka gaming PC compulsory chahiye?",
          options: ["Haan, minimum 64GB GPU chahiye", "Nahi, Meshy cloud servers par run hota hai isliye standard browser par chalta hai", "Sirf supercomputer par chalta hai", "Nahi, internet ki zaroorat nahi"],
          correctIndex: 1,
          explanation: "Meshy cloud-based platform hai, isliye saari heavy NeRF computation remote GPU clusters par hoti hai."
        },
        {
          question: "3D model ki underlying geometric structure (lines aur vertices) dekhne ke liye kaunsa mode use hota hai?",
          options: ["Wireframe mode", "Audio visualizer", "Subtitles mode", "Night vision"],
          correctIndex: 0,
          explanation: "Wireframe mode model ke edges aur vertices ko display karta hai jisse mesh density aur quality inspect hoti hai."
        },
        {
          question: "Meshy AI 3D viewport mein camera ko object ke charon taraf ghumane (orbit) ke liye kaunsa mouse action use hota hai?",
          options: ["Left-click drag", "Double click spacebar", "Right-click triple tap", "Scroll wheel click only"],
          correctIndex: 0,
          explanation: "Left-click drag 3D orbit tool operate karta hai jo object ko 360 degrees se dekhne deta hai."
        },
        {
          question: "Meshy AI se export kiye gaye models kis software mein directly import kiye ja sakte hain?",
          options: ["Blender, Unreal Engine, Unity, Cinema 4D", "Sirf MS Word", "Sirf VLC Media Player", "Kisi software mein nahi"],
          correctIndex: 0,
          explanation: "Meshy universal .GLB, .FBX aur .OBJ files export karta hai jo sabhi major 3D suites mein native support rakhti hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Module 4 mein hum 2D images se nikal kar actual 3D space mein kadam rakh rahe hain. Aaj hum Meshy AI ka live walkthrough karenge aur samjhenge ki kaise seconds mein 3D models generate hote hain.",
        whatToShowOnScreen: "Meshy.ai home screen, login transition, Dashboard UI walkthrough. Shading toggles: Textured, Clay, Wireframe, Normal map display.",
        screenRecordingSteps: [
          "Step 1: Meshy AI interface open karein aur credit balance dikhayein.",
          "Step 2: 'Explore' tab par click karke top community 3D models show karein.",
          "Step 3: Ek Sci-Fi helmet model select karein aur 360-degree orbit karein.",
          "Step 4: Wireframe mode toggle karke polygons inspect karein.",
          "Step 5: Export panel show karein (.GLB, .FBX options)."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Yeh jo 3D helmet aap dekh rahe hain, iska ek-ek polygon AI ne generate kiya hai. Wireframe mode par dekhiye kitni clean symmetry hai. Pehle is kaam ke liye weeks ki manual sculpting lagti thi. Ab hum next lesson mein khud apna model prompt se banayenge!",
        practicalDemo: "Interactive 3D orbit and wireframe inspection in browser viewport.",
        endingAndHomework: "Meshy account setup karein. Agle lesson mein hum Text-to-3D se pehla model generate karenge!"
      }
    },
    {
      id: "m4-l2",
      moduleId: 2,
      lessonNumber: 2,
      title: "2. Creating 3D models from text",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `**Text-to-3D** workflow mein aapko kisi 2D drawing ya reference image ki zaroorat nahi hoti. Aap seedha text description type karte hain aur Meshy AI ka neural engine ek complete 3D volumetric mesh construct kar deta hai.

Text-to-3D Prompting ke 3 Rules:
1. **Isolated Single Object Focus:** Ek prompt mein multiple separate objects mat maangiye. "A knight holding a sword standing on a mountain with a castle" confuse karega. Iske badle: "A medieval knight in engraved silver plate armor, single character asset, T-pose".
2. **Style Selection:** Meshy AI mein aapko styles milti hain: 'Realistic', 'Sculpture', 'PBR', 'Low Poly', ya 'Cartoon'. Final cinematic video ke liye hamesha **Realistic** ya **PBR** select karein.
3. **Geometry Density / Polycount:** High-detail close-up shots ke liye High Polycount select karein, background props ke liye Medium Polycount rakhein.

Generation Stages:
Meshy AI pehle 30-40 seconds mein ek rough **Draft Model** (coarse preview) banata hai. Agar aapko shape pasand aati hai, tab aap **Refine / Texture** par click karte hain jahan high-definition 4K textures bake hote hain.`,
      learningObjectives: [
        "Text-to-3D pipeline ka 2-stage generation process (Draft -> Refine) samajhna.",
        "Style presets (Realistic, PBR, Stylized) correctly configure karna.",
        "Prompt structure ko 3D spatial geometry ke hisaab se optimize karna.",
        "Generated mesh ke proportions aur symmetry verify karna."
      ],
      requiredTools: [
        "Web browser",
        "Meshy AI account",
        "Prompt notepad"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select 'Text to 3D' Mode",
          description: "Meshy dashboard mein Text to 3D tab select karein."
        },
        {
          step: 2,
          title: "Enter Descriptive Prompt",
          description: "Type: 'Futuristic sci-fi exploration rover with 6 heavy-tread wheels, solar panels on roof, dual antennas, weathered orange and black chassis, realistic PBR 3D asset'."
        },
        {
          step: 3,
          title: "Choose Style Preset & Generate Draft",
          description: "Select 'Realistic' and click 'Generate'. 45 seconds wait karein coarse 3D preview aane tak."
        },
        {
          step: 4,
          title: "Click Refine for 4K PBR Texturing",
          description: "Draft approve karne ke baad 'Refine' button press karein taaki detailed metallic reflections aur normal maps calculate hon."
        }
      ],
      practicalExample: "Prompt: 'Sci-fi robotic sentinel drone with three glowing blue camera lenses, matte dark titanium armor, dual jet thrusters, isolated 3D model'. Draft generation in 40 seconds -> Refined 4K textures in 2 minutes -> Ready-to-animate 3D mesh!",
      readyPrompts: [
        {
          title: "Text-to-3D Hero Asset",
          prompt: "Ancient mythical warrior stone golem, glowing green moss growing on shoulders, cracked granite chest with pulsing emerald core, heavy stone fists, symmetrical 3D character asset, realistic PBR textures",
          useCase: "Meshy Text-to-3D high-detail generation"
        }
      ],
      commonMistakes: [
        {
          mistake: "Draft generation pasand na aane par bhi Refine click karke credits waste karna.",
          fix: "Agar draft ki shape ya proportions sahi nahi hain, toh prompt ko tweak karke naya draft banayein. Refine sirf tab karein jab base silhouette perfect ho."
        },
        {
          mistake: "Prompt mein camera movements likhna (jaise 'camera zooming in').",
          fix: "Meshy AI 3D object banata hai, video nahi! Prompt mein sirf object ke physical traits aur materials describe karein."
        }
      ],
      homework: "Meshy AI mein 'Text to 3D' use karke ek Sci-Fi weapon ya vehicle ka draft generate karein aur uska 360 view inspect karein.",
      summary: "Text-to-3D prompt se direct volumetric models banata hai. Draft stage par shape verify karein aur Refine stage par 4K PBR textures bake karein.",
      quiz: [
        {
          question: "Meshy AI mein 3D model generation kitni stages mein complete hota hai?",
          options: ["10 stages", "2 Stages: Draft (rough shape) aur Refine (4K PBR textures)", "Sirf 1 text click bina kisi preview ke", "40 stages"],
          correctIndex: 1,
          explanation: "Pehle Draft stage rough mesh geometry banata hai, fir Refine stage ultra-detailed textures aur displacement bake karta hai."
        },
        {
          question: "Text-to-3D prompt mein inme se kya likhna bilkul galat hoga?",
          options: ["Matte titanium armor", "Camera pans left and zooms in fast", "Weathered metallic textures", "Glowing optical lens"],
          correctIndex: 1,
          explanation: "Camera movements video ke liye hote hain. 3D model prompt mein sirf physical object ke material aur shape attributes hone chahiye."
        },
        {
          question: "Meshy AI mein sabse realistic aur reflective materials ke liye kaunsa style preset choose karna chahiye?",
          options: ["PBR / Realistic", "Voxel / Minecraft block", "Stick figure", "Wireframe only"],
          correctIndex: 0,
          explanation: "PBR (Physically Based Rendering) / Realistic preset real-world light physics, roughness aur metallic values emulate karta hai."
        },
        {
          question: "Agar Draft model ki base shape ajeeb ya deformed dikh rahi hai toh aapko kya karna chahiye?",
          options: ["Refine click karke paise kharch karna", "Prompt modify karke naya Draft generate karna", "Computer shutdown kar dena", "Monitor clean karna"],
          correctIndex: 1,
          explanation: "Refine kharab shape ko theek nahi kar sakta. Hamesha base draft ko pehle prompt tweak se theek karein."
        },
        {
          question: "Text-to-3D ke liye best object type kaunsa hota hai?",
          options: ["Isolated single prop, character, vehicle ya weapon", "Ek poora complex 2 ghante ka movie scene", "Audio song", "PDF book"],
          correctIndex: 0,
          explanation: "Single isolated subjects ke 3D boundary detection 100% accurate hote hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome back! Aaj hum text ki taakat se hawa mein 3D object create karenge. No drawing, no sculpting. Just pure descriptive power. Let's create our first 3D asset!",
        whatToShowOnScreen: "Meshy AI dashboard, 'Text to 3D' screen. Prompt typing, style dropdown selection, Generate button click. 0% to 100% draft progress bar.",
        screenRecordingSteps: [
          "Step 1: 'Text to 3D' tab select karein.",
          "Step 2: Prompt enter karein: 'Cyberpunk flying combat drone with neon blue thrusters'.",
          "Step 3: Style 'Realistic PBR' choose karein aur Generate click karein.",
          "Step 4: Draft 3D preview inspect karein 360 degrees mein.",
          "Step 5: 'Refine' button par click karein aur texture baking process dikhayein."
        ],
        voiceoverHindi: "Dosto dekhiye, 40 seconds ke andar AI ne drone ka 3D volume construct kar diya hai. Ab hum Refine par click karte hain... Aur boom! 4K metallic scratches, thruster glows aur carbon fiber textures instantly bake ho chuke hain. This is pure magic!",
        practicalDemo: "Draft vs Refined texture split-view comparison.",
        endingAndHomework: "Apna pehla Text-to-3D asset create karein. Agle lesson mein hum seekhenge Image-to-3D, jo aur bhi zyada precise control deta hai!"
      }
    },
    {
      id: "m4-l3",
      moduleId: 4,
      lessonNumber: 3,
      title: "3. Converting images into 3D models",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Text-to-3D fast hai, lekin **Image-to-3D** professional creators ka favorite workflow hai! 

Kyun? Kyunki Image-to-3D mein aap pehle Midjourney ya Flux se apne character ya object ki bilkul manpasand 2D photo generate karte hain (jahan aapko facial features, colors aur design par 100% control hota hai), aur fir us photo ko Meshy AI mein upload karke exact 3D model mein convert kar lete hain!

Image-to-3D ke Success Secrets:
1. **Remove Background (Clean Isolation):** Image ka background solid white, gray, ya transparent PNG hona chahiye. Background mein trees ya buildings honge toh AI unhe bhi character ke sath solid mesh bana dega!
2. **Clear Lighting:** Image mein harsh directional shadows na hon jo model ke back side ko confuse karein.
3. **Turnaround / Multi-View (Optional Pro Feature):** Meshy AI mein multi-view mode hota hai jahan aap front image ke sath-sath back aur side image bhi de sakte hain taaki peeche ka texture bhi 100% accurate aaye.`,
      learningObjectives: [
        "Image-to-3D conversion pipeline ko end-to-end execute karna.",
        "Reference image ko 3D conversion ke liye clean aur prepare karna.",
        "Front-view single image vs Multi-view turnaround image synthesis.",
        "AI mesh reconstruction algorithms ki depth estimation samajhna."
      ],
      requiredTools: [
        "Web browser",
        "Meshy AI account",
        "Background removal tool (remove.bg or Photoroom)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Prepare Clean Reference Image",
          description: "Apni Midjourney image ko lein aur ensure karein ki background plain neutral ho. Agar zaruri ho toh remove.bg se background clean karein."
        },
        {
          step: 2,
          title: "Upload to Meshy 'Image to 3D'",
          description: "Meshy dashboard mein 'Image to 3D' section par image drag and drop karein."
        },
        {
          step: 3,
          title: "Select Topology & Polycount Settings",
          description: "Choose Quad mesh (clean topology for animation) or Triangle mesh, and set polycount to 50k - 100k."
        },
        {
          step: 4,
          title: "Generate and Review 3D Mesh",
          description: "Click generate. Neural depth estimation back view ko hallucinate karke symmetrical 3D asset create karegi."
        }
      ],
      practicalExample: "Casestudy: Midjourney se ek futuristic sneaker design render kiya. Image-to-3D mein feed kiya. AI ne sole ke grooves, shoe laces aur fabric textures ko exact 3D depth mein reconstruct kiya. 2 minutes mein product commercial ke liye ready 3D shoe taiyar!",
      readyPrompts: [
        {
          title: "Image-to-3D Target Asset Concept",
          prompt: "Futuristic tactical combat helmet with gold mirrored visor, matte black composite shell, dual side communication antennas, isolated on solid white background, studio product lighting, 3D orthographic view, 8k --ar 1:1",
          useCase: "Clean isolated asset for flawless Image-to-3D conversion"
        }
      ],
      commonMistakes: [
        {
          mistake: "Complex scene with multiple overlapping objects upload karna.",
          fix: "Sirf single isolated hero object upload karein."
        },
        {
          mistake: "Object ka hissa frame se bahar kat (crop) jana.",
          fix: "Ensure karein ki poora object image frame ke andar centered ho with sufficient padding around edges."
        }
      ],
      homework: "Midjourney/Flux se ek isolated weapon ya character helmet render karein, Meshy Image-to-3D mein convert karein aur 360 rotation video record karein.",
      summary: "Image-to-3D visual design par maximum creative control deta hai. Clean background aur centered composition se exact high-fidelity 3D meshes generate hote hain.",
      quiz: [
        {
          question: "Image-to-3D workflow mein reference image ka background kaisa hona chahiye?",
          options: ["Bohot saare log aur traffic", "Clean, solid neutral background ya transparent PNG", "Horror jungle with lightning", "Black and white text newspaper"],
          correctIndex: 1,
          explanation: "Clean neutral background hone se AI object boundary ko isolate karke clean 3D mesh borders banata hai."
        },
        {
          question: "Text-to-3D ke mukable Image-to-3D ka sabse bada advantage kya hai?",
          options: ["Aapko visual design, colors aur character look par pehle se 100% control milta hai", "Internet nahi lagta", "Mouse ki zaroorat nahi hoti", "Monitor resolution 8K ho jata hai"],
          correctIndex: 0,
          explanation: "Image-to-3D mein aap pehle Midjourney se exact look finalize karte hain, isliye 3D output bilkul predictable aur custom hota hai."
        },
        {
          question: "Agar reference image mein object ke edges cut-off (crop) hain toh 3D model kaisa banega?",
          options: ["3D model bhi wahan se flat aur cut-off banega", "AI automatically room bana dega", "Computer restart ho jayega", "Model disappear ho jayega"],
          correctIndex: 0,
          explanation: "AI reference image ki visible geometry ko hi reconstruct karta hai. Cropped input se incomplete 3D mesh generate hoti hai."
        },
        {
          question: "Animation aur rigging ke liye kaunsi mesh topology structure best maani jaati hai?",
          options: ["Quad mesh (4-sided polygons)", "Random chaotic holes", "Single triangle", "Zero vertices"],
          correctIndex: 0,
          explanation: "Quad meshes (four-sided faces) smooth deformation aur clean rigging allow karti hain bina ugly pinching ke."
        },
        {
          question: "Meshy AI mein image upload karne ke baad backside ki geometry kaise generate hoti hai?",
          options: ["Neural network visual symmetry aur learned 3D priors se back depth synthesize karta hai", "Backside hamesha invisible rehti hai", "Aapko physical camera ghumana padta hai", "Computer camera scan karta hai"],
          correctIndex: 0,
          explanation: "Generative AI millions of 3D shapes ki training se object ki rear surface logically complete karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum 2D image ko 3D reality mein badalna seekhenge. Yeh technique aapko infinite creative freedom degi kyunki aap jo bhi imagine karke render karenge, wo agle 2 minute mein ek tangible 3D model ban jayega.",
        whatToShowOnScreen: "Midjourney image display -> Background removal step -> Meshy 'Image to 3D' upload window -> Topology settings (Quad mesh) -> Live 3D generation render output.",
        screenRecordingSteps: [
          "Step 1: Isolated Sci-Fi helmet image show karein.",
          "Step 2: Meshy Image-to-3D interface par drag-and-drop karein.",
          "Step 3: Polycount target (80k) aur Quad topology select karein.",
          "Step 4: Generate click karein aur progress bar observe karein.",
          "Step 5: 3D model ko 360 orbit karke back side details inspect karein."
        ],
        voiceoverHindi: "Dhyan se dekhiye dosto, image mein hume sirf helmet ka front dikh raha tha. Lekin Meshy AI ke neural engine ne helmet ke back side par matching ventilation grills aur straps automatically 3D space mein sculpt kar diye hain! This is groundbreaking technology.",
        practicalDemo: "Side-by-side 2D reference image vs 360 rotating 3D mesh.",
        endingAndHomework: "Apna Image-to-3D test run execute karein. Agle lesson mein hum full-body 3D Characters aur complex Objects create karenge!"
      }
    },
    {
      id: "m4-l4",
      moduleId: 4,
      lessonNumber: 4,
      title: "4. Creating 3D objects and characters",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Full-body 3D Characters aur mechanical Objects (jaise weapons, vehicles, props) create karne mein technical differences hote hain:

1. **Inorganic / Hard-Surface Objects (Vehicles, Weapons, Gadgets):**
   Inme sharp edges, bevels aur metallic flatness hoti hai. Inke liye **Hard Surface mode** aur high normal map strength chahiye hoti hai taaki metal plates crisp dikhein.
2. **Organic / Biomechanical Characters (Humans, Monsters, Aliens):**
   Inme smooth curvature, skin pores, aur anatomical muscle flow hota hai. Characters ke liye **Symmetry Mode** on rakhna compulsory hota hai taaki left aur right side perfectly balanced rahein.
3. **Rigging Readiness Checklist:**
   Jab aap character banate hain, ensure karein:
   - Dono arms body se 45 degree angle par hon (A-Pose).
   - Legs slightly apart hon taaki unke beech gap ho.
   - Fingers aapas mein fused (chipki) na hon, balki slightly open hon.
   Yeh checklist follow karne se character agle module mein 1-click automatic rig ho jayega!`,
      learningObjectives: [
        "Hard-surface objects aur organic characters ke modeling requirements mein fark janna.",
        "Symmetry enforcement aur axis alignment ensure karna.",
        "Character mesh ko auto-rigging compatibility ke liye prepare karna.",
        "Props aur character assets ko scale proportion ke according match karna."
      ],
      requiredTools: [
        "Web browser",
        "Meshy AI account",
        "Rigging readiness visual checklist"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Asset Category",
          description: "Decide whether your asset is a Hard-Surface prop (vehicle/gadget) or an Organic character."
        },
        {
          step: 2,
          title: "Enable Symmetry for Characters",
          description: "In Meshy settings, toggle 'Symmetry: Auto' to guarantee identical left-right limb geometry."
        },
        {
          step: 3,
          title: "Verify Limb Spacing",
          description: "Inspect the generated draft. Ensure fingers are distinct and legs have clearance between thighs."
        },
        {
          step: 4,
          title: "Bake High-Resolution PBR Map",
          description: "Proceed to Refine stage to bake diffuse color, ambient occlusion, and normal maps."
        }
      ],
      practicalExample: "Cybernetic Bounty Hunter Character: Meshy AI mein A-pose reference upload kiya with Symmetry enabled. Result: Both arms perfectly symmetrical, helmet visor razor-sharp, weapon holsters cleanly detached from legs. 100% ready for Blender animation!",
      readyPrompts: [
        {
          title: "Full-Body Symmetrical Character Asset",
          prompt: "Full-body 3D character model of an armored cyber ninja, matte carbon fiber armor plates, glowing cyan joints, symmetrical A-pose, arms slightly raised, legs apart, neutral studio background, 3D asset presentation, 8k --ar 16:9",
          useCase: "Character mesh creation for animation pipeline"
        }
      ],
      commonMistakes: [
        {
          mistake: "Character ke thighs aapas mein chipak jana (merged geometry).",
          fix: "Reference image mein legs ke beech clear daylight gap hona chahiye taaki AI separate leg meshes create kare."
        },
        {
          mistake: "Symmetry off chhod dena characters ke liye.",
          fix: "Bina symmetry ke character ka ek shoulder bada aur ek chota ban sakta hai jo animation mein weird lagta hai."
        }
      ],
      homework: "Meshy AI mein symmetry mode on karke ek complete A-pose character generate karein aur uske limbs aur fingers ka spacing check karein.",
      summary: "Hard-surface props sharp edges mangte hain, jabki organic characters symmetry aur A-pose spacing mangte hain taaki animation rigging seamless ho sake.",
      quiz: [
        {
          question: "3D character modeling ke doran 'Symmetry Mode' on rakhna kyu compulsory hota hai?",
          options: ["Kyunki file size 0 ho jati hai", "Taaki left aur right body parts (arms, legs, ears) perfectly balanced aur proportional rahein", "Kyunki internet nahi lagta", "Kyunki color black and white ho jata hai"],
          correctIndex: 1,
          explanation: "Human aur humanoid characters bilateral symmetry follow karte hain. Symmetry mode anatomical balance guarantee karta hai."
        },
        {
          question: "Agar 3D character ki thighs (legs) aapas mein fused (chipki) hui generate ho jayein, toh rigging ke waqt kya hoga?",
          options: ["Character smoothly daud sakega", "Jab character ek leg aage karega toh dusri leg ki geometry bhi stretch hokar deform ho jayegi", "Character fly karne lagega", "Kuch nahi hoga"],
          correctIndex: 1,
          explanation: "Fused mesh vertices dono legs ke bones se shared ho jate hain, jisse leg movement ke sath ugly mesh stretching hoti hai."
        },
        {
          question: "Vehicles, guns aur futuristic gadgets kis category ke 3D modeling assets mein aate hain?",
          options: ["Organic clay sculpting", "Hard-Surface Assets", "Foliage grass assets", "Audio stems"],
          correctIndex: 1,
          explanation: "Mechanical, rigid aur industrial objects hard-surface modeling domain mein categorize hote hain."
        },
        {
          question: "Character ke fingers ko cleanly separate rakhne ke liye reference image mein kya hona zaroori hai?",
          options: ["Fingers closed tightly in fist", "Fingers slightly spread apart with clear spacing between each digit", "Hands in pockets", "Gloves covered in mud"],
          correctIndex: 1,
          explanation: "Spread-out fingers AI ko individual bone finger mesh generate karne ki visual boundary provide karte hain."
        },
        {
          question: "Character modeling ke liye A-pose T-pose se aksar kyu prefer kiya jata hai?",
          options: ["A-pose mein shoulder muscles par natural resting tension hoti hai aur arms relax rehti hain", "T-pose illegal hai", "A-pose se video jaldi render hoti hai", "A-pose black color ka hota hai"],
          correctIndex: 0,
          explanation: "A-pose shoulder deltoids ko over-stretch nahi karta, jisse downward arm poses mein rigging artifacts kam aate hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum full-body 3D characters aur hard-surface props ka live breakdown karenge. Main aapko dikhaunga ki kaise ek animation-ready character banaya jata hai jise aap kisi bhi movie ya game mein use kar sakte hain.",
        whatToShowOnScreen: "Meshy AI symmetry settings toggle. A-pose character draft generation. Limb inspection tools. Normal map high-poly bake visualization.",
        screenRecordingSteps: [
          "Step 1: 'Symmetry: Enabled' switch on karein.",
          "Step 2: A-pose cyber warrior concept import karein.",
          "Step 3: Draft generate karke viewport mein bottom-up inspection karein.",
          "Step 4: Fingers aur leg separation check karein.",
          "Step 5: Refined 4K PBR material pass trigger karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, dono arms ke beech aur dono legs ke beech clear negative space hai. Aur symmetry mode ki wajah se left shoulder armor aur right shoulder armor mathematically 100% identical hain. Yeh asset 100% rigging-ready hai!",
        practicalDemo: "Limb separation spacing measurement and symmetry axis check.",
        endingAndHomework: "Symmetrical A-pose asset finalize karein. Agle lesson mein hum Mesh Quality aur Polygon Optimization seekhenge!"
      }
    },
    {
      id: "m4-l5",
      moduleId: 4,
      lessonNumber: 5,
      title: "5. Understanding mesh quality",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek 3D model computer ke liye koi jadui cheez nahi hai, balki hazaron chote-chote flat polygons (triangles ya quads) ka ek jaal (network) hota hai. Is jaal ko hum **Mesh Topology** kehte hain!

Mesh Quality ke 4 Key Metrics:
1. **Polycount (Polygon Density):**
   - **Low Poly (1,000 - 10,000 polys):** Mobile games aur background crowd ke liye best. Fast render, but kam surface curve.
   - **Mid Poly (20,000 - 80,000 polys):** Hamare 3D AI video workflow ke liye GOLDEN STANDARD! Smooth curves, detailed textures aur fast performance.
   - **High Poly (500,000+ polys):** Sculpting ke liye, par animation mein system slow kar deta hai.
2. **Topology Flow (Edge Loops):**
   Faces aur joints ke aas-paas circular edge loops hone chahiye taaki jab character smile kare ya aankhein band kare, toh mesh natural tareeqe se bend ho.
3. **Decimation & Retopology:**
   Agar AI model mein bohot zyada heavy polygons ban gaye hain, toh hum **Decimation** (polycount kam karna bina detail khoye) use karte hain. Normal maps micro-details ko handle kar lete hain!`,
      learningObjectives: [
        "Low poly, Mid poly aur High poly meshes ke use cases samajhna.",
        "Edge loops aur topology deformation physics master karna.",
        "Polygon decimation aur mesh optimization perform karna.",
        "Non-manifold geometry aur mesh holes detect aur fix karna."
      ],
      requiredTools: [
        "Web browser",
        "Meshy AI / Blender 4.x",
        "Mesh inspector tool"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Switch to Wireframe Mode",
          description: "Viewport mein wireframe mode on karein taaki individual polygon faces aur density visibly reveal ho jaye."
        },
        {
          step: 2,
          title: "Inspect Polycount Statistics",
          description: "Check vertex and face count. Aim for 30k to 70k faces for optimal video rendering balance."
        },
        {
          step: 3,
          title: "Apply Mesh Decimation (If Too Heavy)",
          description: "Use Meshy AI target polycount slider (or Blender Decimate modifier) to reduce face count by 50% while preserving Normal details."
        }
      ],
      practicalExample: "A 500,000 polygon raw AI sculpt will choke video rendering. By decimating it to 45,000 polygons and baking the high-poly surface detail into a 4K Normal Map, the visual quality remains identical to the eye, but viewport playback speed jumps from 4 FPS to smooth 60 FPS!",
      readyPrompts: [
        {
          title: "Clean Topology Asset Prompt",
          prompt: "Sleek biometric robotic gauntlet, polished obsidian metal with exposed glowing cyan hydraulic circuits, floating in studio display, dramatic rim lighting, Octane render, 8k, ray tracing, sharp focus --ar 16:9",
          useCase: "Clean topological asset demonstration"
        }
      ],
      commonMistakes: [
        {
          mistake: "1 Million polygons wala un-optimized mesh Blender mein import kar lena.",
          fix: "Isse Blender lag karega aur crash ho sakta hai. Hamesha 100k se kam polygons par optimize karein."
        },
        {
          mistake: "Decimation itna zyada aggressive kar dena ki model ke circular parts square ban jayein.",
          fix: "Silhouette inspect karte hue decimate karein taaki main curved profile round rahe."
        }
      ],
      homework: "Meshy AI se ek model download karein, Blender mein open karke uska face count check karein aur wireframe inspect karein.",
      summary: "High quality mesh balanced polycount (30k-70k), clean edge loops aur optimized normal maps par depend karti hai. Fast rendering aur smooth animation ke liye optimization zaroori hai.",
      quiz: [
        {
          question: "3D animation aur video rendering ke liye ideal balanced polygon count kitna hona chahiye?",
          options: ["10 Polygons", "30,000 se 80,000 Polygons (Mid Poly)", "10 Million Polygons", "Bina kisi polygon ke"],
          correctIndex: 1,
          explanation: "30k to 80k polygons smooth curvature provide karte hain aur computer ko lag-free 60 FPS real-time playback allow karte hain."
        },
        {
          question: "Mesh ke polygon count ko reduce karne lekin surface visual detail ko preserve karne ke process ko kya kehte hain?",
          options: ["Decimation / Retopology", "Audio mixing", "Color invert", "Disk formatting"],
          correctIndex: 0,
          explanation: "Decimation geometry ke unnecessary flat coplanar faces ko combine karke polygon density optimize karta hai."
        },
        {
          question: "Model ke joints (elbow, knee) par smooth bending ke liye kya zaroori hota hai?",
          options: ["Proper Edge Loops", "White paint", "Extra speakers", "High volume"],
          correctIndex: 0,
          explanation: "Edge loops biological muscle flow follow karti hain, jisse joint flex hone par mesh pinch ya tear nahi hoti."
        },
        {
          question: "Surface micro-details (jaise scratches aur bumps) ko bina extra polygons add kiye render karne wale texture map ko kya kehte hain?",
          options: ["Normal Map / Bump Map", "Audio track", "Font file", "License agreement"],
          correctIndex: 0,
          explanation: "Normal Maps light rays ke bounce angle ko alter karke 3D depth simulate karte hain bina heavy actual geometry ke."
        },
        {
          question: "Agar mesh mein 1 Million polygons hain toh viewport par kya asar padega?",
          options: ["System lag karega, memory usage spike hogi aur rendering slow ho jayegi", "Internet speed badh jayegi", "Screen ka color badal jayega", "Kuch farq nahi padega"],
          correctIndex: 0,
          explanation: "Excessive polygons GPU memory choke karte hain aur real-time frame rates dramatically drop kar dete hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Ek bura 3D model aapke poore computer ko freeze kar sakta hai. Aaj hum seekhenge ki kaise studio professionals mesh quality ko analyze aur optimize karte hain.",
        whatToShowOnScreen: "Blender viewport statistics overlay (Vertices, Faces count). High poly raw model vs Decimated model side-by-side wireframe comparison. Normal map visual toggle.",
        screenRecordingSteps: [
          "Step 1: Blender Viewport Overlays mein 'Statistics' checkbox on karein.",
          "Step 2: 250k face count wala model show karein.",
          "Step 3: 'Decimate Modifier' apply karein aur ratio slider 0.2 set karein.",
          "Step 4: Face count 50k par aate hue dikhayein.",
          "Step 5: Rendered view toggle karke dikhayein ki visual details 100% intact hain."
        ],
        voiceoverHindi: "Dosto dekhiye, humne model ke 80% polygons delete kar diye, lekin jab hum textured render view dekhte hain, toh normal map ki wajah se visual quality mein 1% ka bhi loss nahi hua! Ab hamara scene super smooth 60 FPS par chalega.",
        practicalDemo: "Decimate slider manipulation and FPS counter comparison.",
        endingAndHomework: "Apne model ko optimize karein. Agle lesson mein hum Industry Universal Export Formats (.GLB, .FBX, .OBJ) ko master karenge!"
      }
    },
    {
      id: "m4-l6",
      moduleId: 4,
      lessonNumber: 6,
      title: "6. Exporting GLB, FBX and OBJ files",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `3D asset create karne ke baad sabse critical step hota hai **Correct Export Settings** choose karna! 

Agar aap galat format mein export karenge, toh ya toh textures gayab ho jayenge (pink/black missing textures), ya bones detach ho jayengi, ya scale 100 guna chota ya bada ho jayega.

The Big 3 Formats in 3D AI Production:
1. **.GLB / .GLTF (The Modern Web & AI King):**
   Yeh 3D world ka 'JPEG' hai. Iska sabse bada fayda yeh hai ki **Mesh, PBR Textures (Color, Roughness, Normal) aur Rigging sab ek single lightweight compressed binary file (.glb) ke andar pack hote hain!** Drag and drop karo aur turant ready!
2. **.FBX (Filmbox - The Animation & Game Industry Standard):**
   Maya, Unreal Engine, Unity aur Blender ke beech animations aur complex skeletal bone hierarchies transfer karne ke liye universal standard.
3. **.OBJ (Wavefront - The Universal Legacy Classic):**
   Sabse simple static mesh format. Isme geometry alag file mein hoti hai aur textures alag .MTL file mein. Note: OBJ mein bone animation support nahi hota, sirf static objects ke liye use hota hai.`,
      learningObjectives: [
        ".GLB, .FBX aur .OBJ file formats ke specific use cases aur differences master karna.",
        "Embedded textures vs external texture folder structure samajhna.",
        "Missing textures (Pink material error) ko prevent aur fix karna.",
        "Meshy AI se production-ready export execute karke Blender mein flawless import karna."
      ],
      requiredTools: [
        "Web browser",
        "Meshy AI account",
        "Blender 4.x installed"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Navigate to Export Menu in Meshy",
          description: "Click the 'Download / Export' button on your completed 3D asset."
        },
        {
          step: 2,
          title: "Select Format: GLB (Recommended)",
          description: "Choose GLB format for complete self-contained package with all 4K PBR textures embedded."
        },
        {
          step: 3,
          title: "Configure Texture Map Resolution",
          description: "Select 2048x2048 (2K) for fast viewport or 4096x4096 (4K) for maximum cinematic fidelity."
        },
        {
          step: 4,
          title: "Import into Blender",
          description: "Open Blender -> File -> Import -> glTF 2.0 (.glb/.gltf) -> Select downloaded file. Done!"
        }
      ],
      practicalExample: "Workflow test: Meshy se Cyber Warrior .GLB download kiya (File size: ~22MB). Blender khola, File -> Import glTF kiya. Model centered aaya, instant metallic textures render hue, koi missing file error nahi. Total import time: 4 seconds!",
      readyPrompts: [
        {
          title: "Export Test Mesh Asset",
          prompt: "Futuristic biometric briefcase with glowing digital touch screen lock, titanium edges, matte carbon fiber surface, game asset 3D model, 8k",
          useCase: "Universal export-import test asset"
        }
      ],
      commonMistakes: [
        {
          mistake: "OBJ format export karke expect karna ki bones aur animation bhi chalengi.",
          fix: "OBJ format mein bones aur animations save nahi hote. Animation ke liye hamesha .GLB ya .FBX export karein."
        },
        {
          mistake: "FBX export karte waqt 'Embed Textures' option uncheck chhod dena.",
          fix: "Hamesha ensure karein ki textures embedded hon taaki file kisi aur computer par kholne par textures missing na hon."
        }
      ],
      homework: "Meshy se ek 3D model .GLB format mein export karein aur Blender mein import karke Viewport Shading mode mein textures verify karein.",
      summary: ".GLB modern web aur self-contained textures ke liye best hai, .FBX complex skeletal animation ke liye aur .OBJ static props ke liye. Sahi format workflow ko seamless banata hai.",
      quiz: [
        {
          question: "Modern 3D workflow mein mesh aur saare PBR textures ko ek single file ke andar pack karne wala format kaunsa hai?",
          options: [".GLB (.glTF Binary)", ".TXT file", ".MP3", ".HTML"],
          correctIndex: 0,
          explanation: ".GLB ek self-contained binary container hai jisme 3D mesh, materials, aur embedded textures sab ek hi file mein pack hote hain."
        },
        {
          question: "Games aur Hollywood character animation rigs transfer karne ke liye universal industry-standard format kaunsa hai?",
          options: [".FBX (Filmbox)", ".PNG", ".DOCX", ".EXE"],
          correctIndex: 0,
          explanation: ".FBX skeletal bones, skin weights aur complex keyframe animations ko flawlessly transfer karta hai."
        },
        {
          question: "Blender mein imported model ka color achanak bright PINK kyu dikhta hai?",
          options: ["Kyunki texture file ka path missing hai ya load nahi hua", "Kyunki model Barbie theme par hai", "Kyunki render complete ho gaya", "Kyunki computer restart chahiye"],
          correctIndex: 0,
          explanation: "3D software mein bright Magenta/Pink color universal error code hota hai jo batata hai ki assigned image texture path missing hai."
        },
        {
          question: "Kya .OBJ format skeletal bone animations save kar sakta hai?",
          options: ["Nahi, OBJ sirf static 3D geometry save karta hai", "Haan, OBJ mein sabse best animation hoti hai", "Sirf Mac par hoti hai", "Sirf 3D glasses pehan kar hoti hai"],
          correctIndex: 0,
          explanation: ".OBJ legacy format hai jo sirf vertex geometry aur UV coordinates store karta hai, isme rigging ya bones support nahi hoti."
        },
        {
          question: "Blender mein .GLB file import karne ke liye kaunse menu option mein jana hota hai?",
          options: ["File -> Import -> glTF 2.0 (.glb/.gltf)", "File -> Print", "Edit -> Undo", "Help -> Tutorial"],
          correctIndex: 0,
          explanation: "Blender ka native glTF 2.0 importer .glb aur .gltf files ko 1-click mein textures aur materials ke sath load karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 4 ke aakhri lesson mein aapka swagat hai. Aaj hum seekhenge ki kaise aap apne generated 3D assets ko universal industry formats mein export karke Blender aur game engines mein smoothly import kar sakte hain.",
        whatToShowOnScreen: "Meshy export modal (.GLB, .FBX, .OBJ checkboxes). Download process. Blender open karein, File -> Import -> glTF 2.0 click karein. Material Preview switch karke instant textured render show karein.",
        screenRecordingSteps: [
          "Step 1: Meshy AI download button click karein aur format breakdown explain karein.",
          "Step 2: .GLB format with 4K textures download karein.",
          "Step 3: Blender launch karein aur default cube delete karein.",
          "Step 4: File -> Import -> glTF 2.0 select karke file choose karein.",
          "Step 5: Viewport Shading mode (Z -> Material Preview) toggle karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jaise hi humne .GLB file import ki, humara 3D character perfect real-world scale par Blender ke origin par place ho gaya. Saare metallic reflections aur normal details 100% accurate hain bina kisi missing texture ke. We have bridged the AI to 3D pipeline!",
        practicalDemo: "File export from web to desktop and 1-click import into Blender.",
        endingAndHomework: "Module 4 quiz complete karein. Next Module 5 mein hum Texturing aur Character Rigging ke andar deeply enter karenge!"
      }
    }
  ]
};

