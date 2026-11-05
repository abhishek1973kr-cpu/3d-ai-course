export const module5 = {
  id: 5,
  slug: "3d-texturing-and-character-design",
  title: "MODULE 5: 3D TEXTURING AND CHARACTER DESIGN",
  subtitle: "PBR Materials, Rigging, Bones, Mixamo Setup aur Dynamic Poses",
  description: "3D character par realistic materials apply karna, Mixamo ke through 1-click automatic rigging lagana, walking/running/fighting poses setup karna aur animation ke liye model prepare karna.",
  icon: "Layers",
  badge: "Character Studio",
  totalLessons: 5,
  totalDuration: "78 min",
  lessons: [
    {
      id: "m5-l1",
      moduleId: 5,
      lessonNumber: 1,
      title: "1. Applying 3D textures",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `3D model bina textures ke ek plain gray mitti ke putle (clay sculpt) jaisa dikhta hai. Texturing wo process hai jisse hum us model ki surface par realistic rang, dhoop ke reflections, scratches, aur fabric ke patterns chipkate hain.

PBR (Physically Based Rendering) Texture Workflow:
Ek professional 3D material 4 primary image maps se milkar banta hai:
1. **Base Color / Diffuse Map:** Object ka actual rang aur graphics (e.g. blue paint, camouflage pattern).
2. **Roughness Map (Chamak vs Dullness):** Black and white map. Black = mirror ki tarah shiny (metal/glass), White = bilkul matte aur rough (mitti/rubber).
3. **Metallic Map:** Metal vs Non-metal define karta hai. Pure metal = 1.0 (White), Plastic/Wood/Skin = 0.0 (Black).
4. **Normal Map (Bumps & Scratches):** Purple-blue color ka map jo surface par 3D gehraai aur embossed details simulate karta hai.

Meshy AI aur modern AI texturing tools in sabhi 4 maps ko automatically UV-unwrapped mesh par bake kar dete hain.`,
      learningObjectives: [
        "PBR texture maps (Base Color, Roughness, Metallic, Normal) ki functioning samajhna.",
        "UV Unwrapping kya hota hai aur texture 3D surface par kaise wrap hoti hai yeh seekhna.",
        "Meshy AI Texturing engine se existing models re-texture karna.",
        "Blender ke Shader Editor (Principled BSDF) mein texture nodes connect karna."
      ],
      requiredTools: [
        "Web browser",
        "Meshy AI Texture Generator",
        "Blender 4.x installed"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Understand the UV Map Blueprint",
          description: "UV coordinates 3D mesh ko 2D flat sheet mein unfold karte hain taaki 2D image 3D surface par perfectly fit ho sake."
        },
        {
          step: 2,
          title: "AI Texture Synthesis",
          description: "Upload any plain 3D mesh to Meshy 'AI Texturing'. Enter prompt: 'Weathered battle-damaged bronze with turquoise patina and gold leaf trims'."
        },
        {
          step: 3,
          title: "Bake and Download PBR Package",
          description: "Export the textured asset with 4K PBR texture channels (Color, Roughness, Normal, Metallic)."
        },
        {
          step: 4,
          title: "Verify in Blender Shader View",
          description: "Open Blender Shader Editor to inspect the Principled BSDF node connections."
        }
      ],
      practicalExample: "Plain Gray Robot Mesh ko Meshy AI Texturing mein upload kiya with prompt: 'Damaged bumblebee mech, vibrant matte yellow industrial paint, peeling black hazard stripes, heavy oil grease stains in crevices'. 60 seconds mein Hollywood-level movie texture bake ho gaya!",
      readyPrompts: [
        {
          title: "AI Texture Style Prompt",
          prompt: "Futuristic Damascus steel with glowing neon cyan damascene swirls, polished chrome accents, subtle micro-abrasions, high-end PBR shader",
          useCase: "Meshy AI Texturing engine prompt"
        }
      ],
      commonMistakes: [
        {
          mistake: "Roughness aur Metallic maps ko Color space 'sRGB' par load karna.",
          fix: "Base Color hamesha sRGB hoti hai, lekin Roughness, Metallic aur Normal maps ko Blender mein hamesha 'Non-Color' mode par set karna zaroori hai."
        },
        {
          mistake: "UV stretching notice na karna.",
          fix: "Agar texture kahi kheench rahi ho, toh AI texturing prompt mein uniform noise texture use karein."
        }
      ],
      homework: "Meshy AI Texturing tool mein ek standard 3D asset upload karein aur 2 alag material styles (e.g. Rusty Iron vs Gold Marble) generate karke compare karein.",
      summary: "3D texturing PBR maps (Color, Roughness, Metallic, Normal) se real-world physical light interaction simulate karti hai. AI texturing se ghanton ka manual UV painting minutes mein ho jata hai.",
      quiz: [
        {
          question: "Roughness Map mein PURE BLACK color surface ko kaisa banata hai?",
          options: ["Bilkul rough aur matte", "Ekdum glossy aur mirror ki tarah super reflective", "Invisible", "Blue color ka"],
          correctIndex: 1,
          explanation: "Roughness value 0 (Black) zero surface resistance represent karti hai, jisse surface mirror ki tarah sharp reflections deti hai."
        },
        {
          question: "Surface par scratches, screws aur bumps simulate karne wale purple-blue colored map ko kya kehte hain?",
          options: ["Normal Map", "Sound wave", "Font ligature", "PDF thumbnail"],
          correctIndex: 0,
          explanation: "Normal maps RGB values ko X, Y, Z vector normals ke roop mein encode karke micro-shadows aur depth simulate karte hain."
        },
        {
          question: "3D mesh ko 2D flat plane par unfold karne ke process ko kya kehte hain?",
          options: ["UV Unwrapping", "Disk Defrag", "Screen Capture", "Video Rendering"],
          correctIndex: 0,
          explanation: "UV Unwrapping 3D polygons ko 2D coordinate space (U aur V axis) par map karta hai taaki 2D textures correctly wrap ho sakein."
        },
        {
          question: "Blender Shader Editor mein Roughness aur Normal texture images ko kis Color Space par set kiya jata hai?",
          options: ["sRGB", "Non-Color", "Black & White only", "CMYK Printing"],
          correctIndex: 1,
          explanation: "Data maps (Normal, Roughness, Metallic) visual color nahi balki mathematical values hold karte hain, isliye inhe 'Non-Color' set kiya jata hai."
        },
        {
          question: "Blender 4.x mein primary all-in-one PBR material shader node kaunsa hota hai?",
          options: ["Principled BSDF", "Simple Diffuse", "Glass only", "Toon Shader"],
          correctIndex: 0,
          explanation: "Principled BSDF industry-standard universal shader hai jo PBR light equations ke saare parameters handle karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome back! Aaj hum seekhenge ki kaise ek plain 3D putle ko ek photorealistic living object banaya jata hai 3D Texturing ki madad se.",
        whatToShowOnScreen: "Meshy AI Texturing interface. Plain mesh import. Texturing prompt: 'Damaged cybernetic armor'. Live baking progress bar. Output 3D model rotation with metallic glint.",
        screenRecordingSteps: [
          "Step 1: Plain mesh file upload karein.",
          "Step 2: Material prompt enter karein aur PBR resolution 4K select karein.",
          "Step 3: Generate texturing click karein.",
          "Step 4: Viewport mein light rotate karke roughness aur normal reflections examine karein.",
          "Step 5: Blender Shader Editor mein Principled BSDF nodes dikhayein."
        ],
        voiceoverHindi: "Dosto dekhiye, light jaise hi move karti hai, armor ke scratches par realistic highlights shine kar rahi hain aur crevices mein dark ambient occlusion shadows hain. Yeh PBR texturing ki asli khoobsurti hai.",
        practicalDemo: "Rotating directional light in viewport to show dynamic roughness sheen.",
        endingAndHomework: "Apna texturing experiment execute karein. Agle lesson mein hum Materials aur Surface Details ko deeper master karenge!"
      }
    },
    {
      id: "m5-l2",
      moduleId: 5,
      lessonNumber: 2,
      title: "2. Materials and surface details",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Real world mein har material light ke sath alag tareeqe se behave karta hai. Ek plastic bottle, ek gold ring, aur insaan ki skin teeno par light alag tareeqe se absorb aur reflect hoti hai.

Mastering 4 Essential Material Types:
1. **Dielectrics (Non-Metals - Plastic, Wood, Fabric, Stone):**
   Inka Metallic value = 0 hota hai. Inka specular reflection white light reflect karta hai chahe base color koi bhi ho.
2. **Conductors (Pure Metals - Gold, Chrome, Copper, Titanium):**
   Inka Metallic value = 1.0 hota hai. Yeh diffuse light nahi chhodte, balki apni surface par base color ke tint ke sath light reflect karte hain (jaise Gold yellow reflections deta hai).
3. **Subsurface Translucents (Human Skin, Wax, Jade, Leaves):**
   Inme light surface ke andar ghuskar scatter hoti hai (SSS - Subsurface Scattering). Iski wajah se kaan (ears) aur ungliyon ke edges dhoop mein red glow karte hain.
4. **Emissive Materials (Neon Lights, Plasma Cores, Sci-Fi Visors):**
   Yeh materials khud light emit karte hain! Emission Strength badhane se yeh dark environments ko illuminate karte hain.`,
      learningObjectives: [
        "Metals aur Non-Metals (Dielectrics) ke physical differences master karna.",
        "Skin aur organic characters ke liye Subsurface Scattering (SSS) calibrate karna.",
        "Emissive cyber glows aur holographic visor shaders banana.",
        "Surface wear-and-tear (fingerprints, dust, edge wear) layer karna."
      ],
      requiredTools: [
        "Web browser",
        "Blender 4.x",
        "PBR material cheat sheet"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Identify Base Material Physics",
          description: "Set Metallic to either 0.0 (non-metal) or 1.0 (pure metal). Avoid floating in-between values like 0.5 unless dusty metal."
        },
        {
          step: 2,
          title: "Adjust Roughness for Sheen",
          description: "Roughness 0.1 for polished glass/chrome; Roughness 0.8 for cloth/rough concrete."
        },
        {
          step: 3,
          title: "Configure Emissive Glowing Accents",
          description: "Set Emission Color to Neon Cyan (#00F5D4) and Emission Strength to 5.0 for glowing cyber runes."
        },
        {
          step: 4,
          title: "Enable Subsurface Scattering for Skin",
          description: "Increase Subsurface weight to 0.2 with a warm reddish radius to remove clay-like skin look."
        }
      ],
      practicalExample: "Sci-Fi Character Head Shader: Armor plates set to Metallic 1.0, Roughness 0.25 (Dark titanium). Glowing eyes set to Emission Cyan, Strength 8.0. Human face skin set to Metallic 0.0, Roughness 0.45, Subsurface 0.15 (Warm Peach). Result: High-budget movie asset realism!",
      readyPrompts: [
        {
          title: "Emissive Cyber Material Prompt",
          prompt: "Bioluminescent organic dragon scale armor, deep iridescent obsidian with pulsing electric magenta glowing veins, wet sheen roughness, cinematic studio lighting",
          useCase: "Meshy texturing prompt for emissive character design"
        }
      ],
      commonMistakes: [
        {
          mistake: "Metallic value ko 0.5 ya 0.6 par chhod dena.",
          fix: "Nature mein objects ya toh metal hote hain ya non-metal. Metallic slider ko binary (0 ya 1) rakhein."
        },
        {
          mistake: "Emissive materials ko direct rendering mein bina Bloom / Glare compositing ke dekhna.",
          fix: "Glow ko dekhne ke liye EEVEE mein Bloom check karein ya Compositor mein Glare node use karein."
        }
      ],
      homework: "Blender mein Principled BSDF use karke ek chrome ball, ek gold ball aur ek glowing neon cyber sphere design karein.",
      summary: "Materials physically accurate tab bante hain jab Metallic, Roughness, Subsurface aur Emission light physics ke real rules follow karte hain.",
      quiz: [
        {
          question: "Physics ke according ek material ke liye Metallic slider value aamtaur par kya honi chahiye?",
          options: ["Ya toh 0.0 (Non-metal) ya 1.0 (Pure metal)", "Hamesha 0.5", "Negative 2.0", "1000.0"],
          correctIndex: 0,
          explanation: "PBR workflow mein materials strictly dielectric (0.0) ya conductive (1.0) hote hain. Middle values sirf dirty rusted metals ke liye hote hain."
        },
        {
          question: "Sci-Fi cyber characters ke glowing visor aur neon strips ke liye kaunsa shader parameter use hota hai?",
          options: ["Emission (Color aur Strength)", "Decimate", "Wireframe", "Freeze"],
          correctIndex: 0,
          explanation: "Emission parameter surface ko light source bana deta hai jo surrounding objects par glow throw karti hai."
        },
        {
          question: "Insaan ki skin ko plastic jaisa dikhne se bachane ke liye kaunsa crucial shader feature enable kiya jata hai?",
          options: ["Subsurface Scattering (SSS)", "Black and White pass", "Wireframe only", "Motion blur"],
          correctIndex: 0,
          explanation: "Subsurface Scattering skin ke andar light penetration aur warm reddish internal scattering simulate karta hai."
        },
        {
          question: "Ek ekdum polished nayi car ya chrome mirror ka Roughness value kitna hoga?",
          options: ["Very low (near 0.0 to 0.1)", "Very high (near 1.0)", "100.0", "Negative 5.0"],
          correctIndex: 0,
          explanation: "Low roughness smooth mirror-like surfaces define karti hai jo crisp reflections produce karti hain."
        },
        {
          question: "Blender 4.x ke real-time engine mein glowing lights ke aas-paas cinematic haze dekhne ke liye kya use hota hai?",
          options: ["Bloom / Glare Compositor effect", "Audio compressor", "Font selector", "Screen brightness"],
          correctIndex: 0,
          explanation: "Bloom/Glare lens flare aur optical glow bleed simulate karta hai jisse glowing lights vibrant dikhti hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum material physics ke master banenge. Main aapko dikhaunga ki kaise simple numbers tweak karke aap dull plastic ko liquid gold ya futuristic glowing neon mein badal sakte hain.",
        whatToShowOnScreen: "Blender Shader Editor with Principled BSDF. 3 spheres in viewport: Left (Dielectric plastic), Middle (Gold metal), Right (Neon emissive core). Real-time slider adjustments.",
        screenRecordingSteps: [
          "Step 1: Sphere 1 par Roughness slider 0 se 1 drag karke reflection blur dikhayein.",
          "Step 2: Sphere 2 par Metallic 1.0 karein aur Base color gold hex (#FFD700) dalein.",
          "Step 3: Sphere 3 par Emission Color Neon Blue (#00D2FF) aur Strength 10 set karein.",
          "Step 4: Viewport render preview mein interactive lighting test karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, jaise hi humne metallic 1.0 kiya, sphere ne pure gold ka behavior le liya. Aur right sphere par emission badhate hi usne floor par neon light throw karni shuru kar di. Yeh basic principles aapke har character ko cinematic banate hain.",
        practicalDemo: "Real-time shader node tweaking in Blender Viewport.",
        endingAndHomework: "Material study complete kijiye. Agle lesson mein hum animation ka magic shuru karenge: 1-Click Character Rigging with Mixamo!"
      }
    },
    {
      id: "m5-l3",
      moduleId: 5,
      lessonNumber: 3,
      title: "3. Character rigging",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `3D character model create ho gaya, textures lag gaye... lekin abhi wo chal ya bol nahi sakta! Usse zinda karne ke liye hume uske andar ek digital kankaal (Skeleton / Armature) daalna padega. Is process ko **Rigging** kaha jata hai!

Traditional rigging mein har ungli, ghutne aur gardan ki bone manually banani padti thi aur hours of 'Weight Painting' karni padti thi. 
Lekin hum use karenge Adobe ka **Mixamo** (Free Auto-Rigging Platform)!

Mixamo 1-Click Auto-Rigging Workflow:
1. Apne Meshy AI generated 3D character ko **.FBX ya .OBJ** format mein download karein (ensure karein character T-pose ya A-pose mein ho).
2. mixamo.com par jayein (Adobe ka 100% free tool).
3. 'Upload Character' par click karein aur apni 3D file drag karein.
4. Screen par 5 Key Markers place karein:
   - **Chin (Thodi)**
   - **Wrists (Kalaiyan)**
   - **Elbows (Kohniyan)**
   - **Knees (Ghutne)**
   - **Groin (Pelvis center)**
5. Click 'Next'. 60 seconds mein Mixamo AI aapke character ke andar complete skeletal rig fit kar dega!`,
      learningObjectives: [
        "Rigging aur skeletal animation principles samajhna.",
        "Mixamo cloud auto-rigger ka end-to-end usage master karna.",
        "Marker placement accuracy (Chin, Wrists, Elbows, Knees, Groin) seekhna.",
        "Skeletal bones aur skin mesh deformation verify karna."
      ],
      requiredTools: [
        "Web browser",
        "Free Mixamo Account (mixamo.com - Adobe ID)",
        "3D character model (.FBX/.OBJ in T/A pose)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Export Character in A-Pose",
          description: "From Meshy, download character as .OBJ or .FBX."
        },
        {
          step: 2,
          title: "Upload to Mixamo Auto-Rigger",
          description: "Log in to mixamo.com and click 'Upload Character'. Drag and drop your .FBX file."
        },
        {
          step: 3,
          title: "Align the 5 Marker Rings",
          description: "Drag the colored marker circles to their exact anatomical joints on the preview screen."
        },
        {
          step: 4,
          title: "Process Auto-Rig and Test Motion",
          description: "Click Next. Watch the 3D character immediately start moving and looking around smoothly!"
        }
      ],
      practicalExample: "Rigging Test: Meshy se Cyber Samurai model Mixamo par upload kiya. 5 markers set kiye (15 seconds). Auto-rigging process hua. 40 seconds baad Cyber Samurai screen par breathing animation ke sath naturally gardan ghuma raha tha! Zero manual weight painting!",
      readyPrompts: [
        {
          title: "Rigging-Optimized Character Concept",
          prompt: "Full-body sci-fi female operative, sleek stealth suit with neon cyan conduits, symmetrical A-pose, arms angled out, legs spaced apart, fingers open, neutral studio render, 8k --ar 16:9",
          useCase: "Perfect geometry for 1-click Mixamo auto-rigging"
        }
      ],
      commonMistakes: [
        {
          mistake: "Chin marker ko chest ya nose par place kar dena.",
          fix: "Markers ko bilkul precisely anatomical joints par rakhein. Galat placement se gardan ya ghutna ajeeb angle mein twist ho sakta hai."
        },
        {
          mistake: "Symmetry off chhod dena jab character symmetrical ho.",
          fix: "Mixamo mein 'Use Symmetry' checkbox on rakhein taaki left aur right markers mirror coordinate follow karein."
        }
      ],
      homework: "Mixamo par login karein, apna Meshy 3D character upload karein, 5 markers place karke successful rig generate karein.",
      summary: "Rigging 3D model ke andar digital bones fit karne ka process hai. Mixamo auto-rigger 5 markers ki madad se 60 seconds mein Hollywood-ready character skeleton rig bake kar deta hai.",
      quiz: [
        {
          question: "3D character ke andar digital skeleton bones fit karne ke process ko kya kehte hain?",
          options: ["Rigging", "Video editing", "Audio normalization", "Disk cleanup"],
          correctIndex: 0,
          explanation: "Rigging skeletal bones aur joints create karti hai jo 3D mesh ko deform aur animate karne ke liye zaroori hoti hain."
        },
        {
          question: "Mixamo platform par auto-rigging ke liye user ko kitne key markers place karne hote hain?",
          options: ["5 Markers (Chin, Wrists, Elbows, Knees, Groin)", "100 Markers", "Zero markers", "Sirf 1 marker"],
          correctIndex: 0,
          explanation: "Mixamo 5 anatomical landmark circles use karta hai bone hierarchy calculate karne ke liye."
        },
        {
          question: "Mixamo platform kis company ka free tool hai?",
          options: ["Adobe", "Apple", "Nintendo", "Samsung"],
          correctIndex: 0,
          explanation: "Mixamo Adobe ka free web-based 3D character rigging aur motion library platform hai."
        },
        {
          question: "Character rigging ke waqt model ka starting pose kaisa hona chahiye?",
          options: ["A-Pose ya T-Pose", "Sitting down curled up", "Running fast", "Hands behind back"],
          correctIndex: 0,
          explanation: "T-pose aur A-pose limbs ko un-fused aur fully extended rakhte hain taaki auto-rigger joints accurately identify kare."
        },
        {
          question: "Bone move hone par 3D skin ke vertices kitna move honge, is calculation ko kya kehte hain?",
          options: ["Skin Weight Painting", "Audio gain", "Color grading", "Resolution scaling"],
          correctIndex: 0,
          explanation: "Weight painting decide karta hai ki har bone ka influence skin mesh ke kitne polygons par hoga."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj ka lesson aapke 3D creation journey ka sabse magical moment hai. Aaj hum apne static 3D model ke andar digital bones daal kar usme jaan phookenge!",
        whatToShowOnScreen: "Mixamo.com web interface. 'Upload Character' dialog box. .FBX drag-and-drop. 5-point marker placement overlay with zoom-in circles. Successful rig animation celebration.",
        screenRecordingSteps: [
          "Step 1: Mixamo dashboard par character upload karein.",
          "Step 2: Chin marker drag karke thodi ke bottom par place karein.",
          "Step 3: Wrists, Elbows aur Knees markers align karein with symmetry checked.",
          "Step 4: Groin marker pelvis base par place karein.",
          "Step 5: 'Next' click karein aur 3D character ko live moving state mein inspect karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jo character 1 minute pehle ek bejaan 3D mitti ka putla tha, ab wo screen par naturally saans le raha hai, apni ungliyan hila raha hai aur gardan move kar raha hai. We have rigged our character in 60 seconds flat!",
        practicalDemo: "Testing idle head-look animation on the newly rigged mesh.",
        endingAndHomework: "Apna rigged character download karein. Agle lesson mein hum is character ko dynamic action poses aur motions denge!"
      }
    },
    {
      id: "m5-l4",
      moduleId: 5,
      lessonNumber: 4,
      title: "4. Character poses",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek character ka pose uski poori personality aur mood convey karta hai. Ek superhero ka powerful heroic stance, ek ninja ka stealth crouch, ya ek defeated villain ka slouching pose — pose hi story tell karta hai!

The 3 Laws of Dynamic 3D Posing:
1. **Line of Action (S-Curve ya C-Curve):**
   Straight, stiff poses lifeless lagte hain. Body ke spine mein hamesha ek dynamic sweeping curve hona chahiye jo energy aur momentum dikhata hai.
2. **Asymmetry & Contrapposto (Weight Shift):**
   Human body kabhi dono pairon par barabar weight daal kar stiff nahi khadi hoti. Ek pair par weight hota hai (supporting leg) aur dusra relaxed hota hai. Shoulders aur hips opposite angles par tilt hote hain.
3. **Silhouette Test:**
   Agar aap apne 3D model ko pure black silhouette (shadow) bana dein, tab bhi viewer ko uska pose aur emotion clearly samajh aana chahiye. Haath aur hathiyaar body ke peeche chhipe nahi hone chahiye.

Mixamo Animation Library:
Mixamo ke paas 2,000 se zyada motion-captured animations aur poses hain (Walk, Run, Jump, Sword Slash, Dance, Idle Stances) jo aap 1-click mein apne rigged character par apply kar sakte hain!`,
      learningObjectives: [
        "Line of Action aur Contrapposto weight shifting master karna.",
        "Silhouette readability test evaluate karna.",
        "Mixamo ki 2000+ motion-capture library se poses assign karna.",
        "Arm spacing, stride length aur speed sliders customize karna."
      ],
      requiredTools: [
        "Web browser",
        "Mixamo.com",
        "Posing anatomy reference sheet"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Motion from Mixamo Library",
          description: "Browse categories: Combat, Adventure, Sport, Dance, or Idle."
        },
        {
          step: 2,
          title: "Adjust Motion Parameters in Viewport",
          description: "Use right-hand sliders: 'Overdrive' (speed), 'Character Arm-Space' (prevents armor clipping), 'Trim'."
        },
        {
          step: 3,
          title: "Evaluate Silhouette Clarity",
          description: "Rotate camera 360 to verify limbs don't overlap awkwardly."
        },
        {
          step: 4,
          title: "Export Animated / Posed FBX",
          description: "Click 'Download', select 'FBX for Unity / Blender', 30 FPS, and download."
        }
      ],
      practicalExample: "Applying 'Ninja Run': Mixamo search bar mein 'Ninja Run' type kiya. Character instantly anime style mein arms back karke sprint karne laga. 'Arm-space' slider ko +5 kiya taaki shoulder pads chest mein na ghusein. Downloaded as animated FBX in 10 seconds!",
      readyPrompts: [
        {
          title: "Heroic Pose Concept Reference",
          prompt: "Dramatic full-body shot of a cybernetic warrior in low combat crouch, one hand planted on the wet asphalt, ready to spring, intense glowing eye visor, dynamic line of action, cinematic lighting, 8k --ar 16:9",
          useCase: "Dynamic action pose inspiration"
        }
      ],
      commonMistakes: [
        {
          mistake: "Mesh clipping ignore kar dena (character ke haath body ke andar ghus jana).",
          fix: "Mixamo mein 'Character Arm-Space' slider ko increase karein jab tak haath body armor se safely clear na ho jayein."
        },
        {
          mistake: "Stiff, symmetrical poses banana.",
          fix: "Hamesha hips aur shoulders ko slightly tilt karein natural weight distribution ke liye."
        }
      ],
      homework: "Mixamo se apne rigged character par kam se kam 3 alag animations apply karein (1 Combat, 1 Walking, 1 Cinematic Idle) aur unke FBX files download karein.",
      summary: "Dynamic poses Line of Action, Contrapposto aur silhouette readability par depend karte hain. Mixamo motion capture library se thousands of Hollywood animations 1-click apply hote hain.",
      quiz: [
        {
          question: "Dynamic pose mein energy aur fluid movement show karne wali spine curve ko kya kehte hain?",
          options: ["Line of Action", "Dead line", "Border line", "Headline"],
          correctIndex: 0,
          explanation: "Line of Action character ke pose ke main flow of energy ko represent karti hai (C-curve ya S-curve)."
        },
        {
          question: "Natural weight shift jisme hips aur shoulders opposite angles par tilt hote hain, use art terminology mein kya kehte hain?",
          options: ["Contrapposto", "Staccato", "Pizzicato", "Fortissimo"],
          correctIndex: 0,
          explanation: "Contrapposto Italian classical art term hai jisme body ka weight ek leg par shift hone se natural organic balance banta hai."
        },
        {
          question: "Mixamo mein agar character ke haath body armor ke andar penetrate ho rahe hon (clipping), toh kaunsa slider badhana chahiye?",
          options: ["Character Arm-Space slider", "Resolution slider", "Volume slider", "Brightness"],
          correctIndex: 0,
          explanation: "Character Arm-Space slider arms aur torso ke beech distance badhata hai taaki heavy clothes ya armor mein clipping na ho."
        },
        {
          question: "Silhouette Test ka kya fayda hota hai?",
          options: ["Yeh verify karta hai ki character ka pose bina color aur texture ke bhi instantly readable aur clear hai", "File size choti karta hai", "Internet disconnect karta hai", "Speakers test karta hai"],
          correctIndex: 0,
          explanation: "Ek strong pose pure black shadow mein bhi instantly readable hota hai. Clear silhouette audience confusion avoid karti hai."
        },
        {
          question: "Mixamo animations ka source data kya hota hai?",
          options: ["Real actors dwara recorded Motion Capture (MoCap) data", "Random number generator", "Sound recording", "Text transcription"],
          correctIndex: 0,
          explanation: "Mixamo professional optical motion capture studios mein actors ke physical performance se record kiya gaya data use karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum apne character ko act karwayenge. Hollywood movies mein jo stunts MoCap actors perform karte hain, wahi data hum apne character par 1-click mein daalenge.",
        whatToShowOnScreen: "Mixamo animation library screen. Searching 'Sword Attack', 'Combat Idle', 'Parkour Leap'. Character performing live acrobatic stunts in browser. Arm-space slider tuning.",
        screenRecordingSteps: [
          "Step 1: Mixamo Animations tab par click karein.",
          "Step 2: 'Cyberpunk Walk' search karein aur model par click karein.",
          "Step 3: 'In Place' checkbox demonstrate karein (stationary vs moving through world).",
          "Step 4: Arm-space slider manipulate karke armor clearance dikhayein.",
          "Step 5: Download settings (FBX with skin, 30 fps) confirm karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Hamara character kitni fluid swagger walk kar raha hai. Feet ground par perfectly plant ho rahe hain bina kisi sliding ke. Aur arm-space adjust karte hi armor ke sath kisi bhi tarah ki mesh clipping khatam ho gayi. Ab hum final animation staging ke liye ready hain!",
        practicalDemo: "In Place checkbox comparison and walk-cycle loop verification.",
        endingAndHomework: "Apna animated FBX file save karein. Agle lesson mein hum animation readiness ki final checklist execute karenge!"
      }
    },
    {
      id: "m5-l5",
      moduleId: 5,
      lessonNumber: 5,
      title: "5. Preparing characters for animation",
      duration: "18 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Blender ya AI video generation mein character import karne se pehle ek **Pre-Flight Technical Checklist** run karna zaroori hota hai taaki baad mein pipeline crash na ho:

The 5-Step Pre-Flight Checklist:
1. **Apply Scale & Transforms (Ctrl + A in Blender):**
   Jab aap character ko scale ya rotate karte hain, toh internal transforms dirty ho jaate hain. Hamesha 'Ctrl + A -> Apply All Transforms' karein taaki Scale 1.0, 1.0, 1.0 par reset ho jaye.
2. **Origin to Geometry / Floor:**
   Character ka pivot point (origin dot) hamesha dono pairon ke theek beech zameen (floor Z=0) par hona chahiye taaki walk cycle ke time character hawa mein float na kare ya zameen ke andar na ghuse.
3. **Texture Path Relinking:**
   FBX import karne ke baad Blender Shader Editor mein verify karein ki textures correctly connect hain aur 'Pink Material' error nahi hai.
4. **Looping Optimization:**
   Walk cycles ya run cycles ke liye first frame aur last frame perfectly identical hone chahiye taaki seamless infinite loop play ho sake.
5. **Clean Hierarchy Naming:**
   Armature ka naam 'Hero_Rig', mesh ka naam 'Hero_Body' rakhein professional organized studio pipeline maintain karne ke liye.`,
      learningObjectives: [
        "Blender transform application (Scale, Rotation, Location) master karna.",
        "Pivot point aur floor origin calibration execute karna.",
        "Texture node relinking aur embedded texture extraction karna.",
        "Seamless walk-cycle looping aur animation NLA tracks organize karna."
      ],
      requiredTools: [
        "Blender 4.x installed",
        "Downloaded animated .FBX file from Mixamo",
        "Asset naming guidelines"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Import FBX into Blender",
          description: "File -> Import -> FBX (.fbx) -> Select your downloaded Mixamo animated character."
        },
        {
          step: 2,
          title: "Check Timeline & Frame Range",
          description: "Press Spacebar to play animation. Set timeline end frame to match the animation clip length (e.g. frame 1 to 60)."
        },
        {
          step: 3,
          title: "Set Pivot to Floor Contact",
          description: "Ensure character's soles touch the grid plane (Z = 0.00)."
        },
        {
          step: 4,
          title: "Inspect Texture Shading",
          description: "Switch to Material Preview (Z -> 2). Reconnect Base Color and Normal maps if disconnected."
        }
      ],
      practicalExample: "End-to-end Verification: Mixamo animated FBX Blender mein import kiya. Timeline play kiya -> Character smoothly running at 30 FPS. Scale applied to 1.0. Textures re-linked via Principled BSDF. Asset completely prepped for cinematic lighting and camera setup!",
      readyPrompts: [
        {
          title: "Animation Staging Reference",
          prompt: "Cinematic medium tracking shot of an armored cybernetic warrior sprinting forward through volumetric smoke, motion blur on limbs, dynamic low camera angle, Unreal Engine 5 render, 8k --ar 16:9",
          useCase: "Visual guide for animation staging in Blender"
        }
      ],
      commonMistakes: [
        {
          mistake: "Scale apply na karna (Scale = 0.01 ya 100 hona).",
          fix: "Object Mode mein character select karein aur 'Ctrl + A -> Apply All Transforms' press karein. Unapplied scale se physics aur lighting distort ho jati hai."
        },
        {
          mistake: "Spacebar press karne par animation na chalna.",
          fix: "Check karein ki timeline window open hai aur frame cursor zero se aage move ho raha hai."
        }
      ],
      homework: "Downloaded Mixamo FBX ko Blender mein import karein, scale apply karein, viewport mein loop playback play karein aur ek screenshot save karein.",
      summary: "Animation preparation mein transforms apply karna, origin floor par snap karna, texture paths verify karna aur timeline loop set karna shamil hai. Isse flawless production ready hoti hai.",
      quiz: [
        {
          question: "Blender mein Object ke Scale aur Rotation ko neutral standard (1.0) par lock karne ka shortcut kya hai?",
          options: ["Ctrl + A (Apply Transforms)", "Ctrl + Z", "Alt + F4", "Shift + Delete"],
          correctIndex: 0,
          explanation: "Ctrl + A menu se 'All Transforms' select karne par current scale 1.0 par bake ho jata hai jo physics aur rigging glitches prevent karta hai."
        },
        {
          question: "Character ka pivot point (origin) kahan hona sabse best rehta hai?",
          options: ["Dono feet ke beech zameen (floor level) par", "Sir ke 5 feet upar hawa mein", "Kaan ke andar", "Screen ke bahar"],
          correctIndex: 0,
          explanation: "Floor level par pivot point hone se character surface ke sath accurate contact maintain karta hai bina sinking ya floating ke."
        },
        {
          question: "Blender mein timeline par animation play aur pause karne ka universal shortcut kya hai?",
          options: ["Spacebar", "Enter", "Escape", "Caps Lock"],
          correctIndex: 0,
          explanation: "Spacebar Blender mein timeline playback ko start aur stop karta hai."
        },
        {
          question: "Seamless walk loop ke liye animation ke first frame aur last frame mein kya condition honi chahiye?",
          options: ["Dono frame pose mein perfectly identical ya matching hone chahiye", "First frame black hona chahiye", "Last frame delete hona chahiye", "Dono bilkul ulte hone chahiye"],
          correctIndex: 0,
          explanation: "Matching end poses infinite looping create karte hain bina kisi visible jump ya hiccup ke."
        },
        {
          question: "Blender mein multiple animation tracks (jaise Walk aur Run) ko layer karne wale editor ko kya kehte hain?",
          options: ["NLA Editor (Non-Linear Animation)", "Text Editor", "Sound Recorder", "Web Browser"],
          correctIndex: 0,
          explanation: "Non-Linear Animation (NLA) Editor video editing tracks ki tarah multiple animation actions ko blend aur sequence karne deta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 5 ke final lesson mein humne apne character ko texturing se lekar animation-ready state tak successfully pahuncha diya hai. Ab hamara character Blender ke grand cinematic stage par kadam rakhne ke liye 100% prepared hai!",
        whatToShowOnScreen: "Blender 4.x full UI. Mixamo animated FBX import sequence. Timeline scrubbing with Spacebar playback. 'Ctrl + A -> Apply All Transforms' tooltip display. Material preview with glorious PBR shaders.",
        screenRecordingSteps: [
          "Step 1: Blender mein File -> Import -> FBX demonstrate karein.",
          "Step 2: Timeline par 30 FPS smooth animation loop play karein.",
          "Step 3: 'Ctrl + A' press karke Apply All Transforms demonstrate karein.",
          "Step 4: Viewport Shading mode mein metallic textures verify karein.",
          "Step 5: Module 5 wrap-up summary aur celebration."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Hamara rigged, textured character ab smoothly 60 FPS par run kar raha hai. Koi mesh clipping nahi, textures crystal clear hain aur transforms clean hain. You are now officially a 3D Character Designer! Module 5 ka quiz submit kijiye. Module 6 mein hum Blender ke core fundamentals ko master karenge!",
        practicalDemo: "Smooth 60 FPS viewport playback with orbiting camera.",
        endingAndHomework: "Module 5 quiz complete karein aur progress verify karein. Milte hain Module 6: Blender Fundamentals mein!"
      }
    }
  ]
};
