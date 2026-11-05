export const module8 = {
  id: 8,
  slug: "ai-image-to-video",
  title: "MODULE 8: AI IMAGE TO VIDEO",
  subtitle: "Runway Gen-3, Luma Dream Machine, Motion Brushes aur Camera Control",
  description: "Static 3D renders aur concept art ko dynamic cinematic video clips mein convert karna. Motion brush masking, directional vectors, camera controls aur AI morphing artifacts ko fix karna.",
  icon: "Film",
  badge: "Generative Motion",
  totalLessons: 6,
  totalDuration: "84 min",
  lessons: [
    {
      id: "m8-l1",
      moduleId: 8,
      lessonNumber: 1,
      title: "1. Understanding image-to-video generation",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Text-to-Video mein aap AI ko prompt dete hain aur AI random scene generate karta hai. Lekin **Image-to-Video (I2V)** mein aap AI ko pehle se ek high-definition first frame (hamara Blender 3D render ya Midjourney concept art) dete hain aur AI ko bolte hain: *"Is exact image ko agle 4 se 5 seconds ke liye zinda kar do!"*

I2V Generative Physics:
1. **Anchor Frame (Initial Latent State):**
   Input image frame 1 par mathematically freeze hoti hai. AI ko character ka face, lighting, kapde aur colors invent nahi karne padte, wo pehle se locked hote hain.
2. **Temporal Diffusion & Optical Flow:**
   AI model video training datasets se seekhta hai ki real world mein hawa chalne par baal kaise hilte hain, paani kaise behata hai, smoke kaise disperse hoti hai, aur camera move hone par perspective kaise change hota hai.
3. **Motion Vector Guidance:**
   Hum prompt aur motion controls ke through AI ko force karte hain ki kaunse objects static rahenge aur kaunse dynamic harkat karenge.`,
      learningObjectives: [
        "Image-to-Video (I2V) vs Text-to-Video (T2V) ka structural difference samajhna.",
        "Input anchor frames ke latent preservation mechanics grasp karna.",
        "Top I2V engines: Runway Gen-3 Alpha, Luma Dream Machine, Kling AI evaluate karna.",
        "Motion predictability aur physics compliance maximize karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML account (app.runwayml.com)",
        "Luma Dream Machine account (lumalabs.ai)",
        "High-resolution 3D render from previous modules"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Your Anchor Render",
          description: "Choose a clean, high-resolution render (16:9 or 9:16) with clear depth layers."
        },
        {
          step: 2,
          title: "Upload to I2V Workspace",
          description: "In Runway Gen-3 or Luma Dream Machine, select 'Image to Video' and upload the asset."
        },
        {
          step: 3,
          title: "Specify Motion Direction",
          description: "Describe ONLY the action: 'Slow push in, subtle hair blowing in wind, volumetric neon fog drifting right'."
        },
        {
          step: 4,
          title: "Generate and Review Motion",
          description: "Render a 5-second video clip and verify facial stability across all 120 frames."
        }
      ],
      practicalExample: "Transforming Static Render to Movie Trailer: Hamne Blender ka 3D Cyber Samurai render Runway Gen-3 I2V mein upload kiya with prompt: 'Camera slowly dollies forward, rain droplets running down armor, katana blade gently hums with electric sparks'. 60 seconds baad hamare paas ek Hollywood blockbuster movie trailer ka live 4K shot taiyar tha!",
      readyPrompts: [
        {
          title: "I2V Ambient Motion Prompt",
          prompt: "Cinematic subtle push-in camera, gentle wind blowing character's trenchcoat hem, shimmering heat distortion from thrusters, floating airborne dust particles, 24fps motion",
          useCase: "Runway Gen-3 I2V prompt template"
        }
      ],
      commonMistakes: [
        {
          mistake: "I2V prompt mein poori image dobara describe karna (jaise 'A man with blue armor, yellow hair in a room').",
          fix: "Image pehle se uploaded hai! AI ko pata hai kya dikh raha hai. Prompt mein SIRF MOTION aur CAMERA DIRECTIVES likhein (jaise 'walk forward, pan right')."
        },
        {
          mistake: "Extreme aggressive fast motion maangna jo character ko disfigure kar de.",
          fix: "Cinematic stability ke liye motion values ko moderate (speed 3 to 5) rakhein."
        }
      ],
      homework: "Runway ya Luma mein ek static 3D render upload karein aur 1 subtle camera movement generate karke review karein.",
      summary: "Image-to-Video anchor frame ki visual fidelity preserve karta hai aur neural optical flow se photorealistic 4K motion inject karta hai.",
      quiz: [
        {
          question: "Image-to-Video (I2V) workflow ka Text-to-Video par sabse bada fayda kya hai?",
          options: ["Character ka face, design aur lighting Frame 1 se 100% locked aur consistent rehti hai", "Internet nahi lagta", "Video black and white banti hai", "Computer ka fan band ho jata hai"],
          correctIndex: 0,
          explanation: "Input image anchor frame hoti hai, isliye character identity aur aesthetic quality pehle se locked rehti hai."
        },
        {
          question: "Image-to-Video prompt box mein kya likhna sabse effective hota hai?",
          options: ["Sirf Motion, Camera movements aur environmental physics (e.g. 'Slow zoom in, wind blowing coat')", "Poori image ka lamba description dobara likhna", "Alphabet ABC", "Price list"],
          correctIndex: 0,
          explanation: "AI visual elements image se decode karta hai, prompt ko sirf motion trajectory aur camera kinematics guide karni hoti hai."
        },
        {
          question: "Modern leading AI video generation platforms mein se kaunsa Runway ka flagship engine hai?",
          options: ["Gen-3 Alpha", "MS Paint 3D", "Photoshop 7", "Flash Player"],
          correctIndex: 0,
          explanation: "Runway Gen-3 Alpha leading photorealistic video generation diffusion model hai."
        },
        {
          question: "Optical Flow AI video generation mein kya calculate karta hai?",
          options: ["Frame-by-frame pixels ki movement velocity aur trajectory", "Audio ka volume", "Internet data usage", "Color saturation only"],
          correctIndex: 0,
          explanation: "Optical flow pixels ke continuous motion vectors ko analyze karta hai smooth temporal animation ke liye."
        },
        {
          question: "AI video generation mein 'Temporal Morphing' ka kya matlab hota hai?",
          options: ["Jab frames aage badhne par character ka face ya haath ajeeb tareeqe se pighalne (distort) lagta hai", "Video ka size chota hona", "Color grading karna", "Audio sync hona"],
          correctIndex: 0,
          explanation: "Morphing ek common AI artifact hai jisme temporal consistency loss hone par shapes dissolve ya distort hoti hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Module 8 mein hum static visuals ki boundary tod kar dynamic motion video mein enter kar rahe hain. Aaj hum seekhenge ki kaise ek bejaan 3D render ko Hollywood video clip mein convert kiya jata hai.",
        whatToShowOnScreen: "Runway Gen-3 Alpha dashboard. Dragging and dropping Blender 3D render into 'Image' slot. Typing concise motion prompt. Clicking Generate. Progress bar 0% to 100%. Playing the live cinematic video clip.",
        screenRecordingSteps: [
          "Step 1: RunwayML Gen-3 interface open karein.",
          "Step 2: 3D render drag karein.",
          "Step 3: Motion prompt enter karein: 'Slow dramatic push-in, rain dripping, subtle eye blink'.",
          "Step 4: Generate click karein.",
          "Step 5: Output video 4K fullscreen play karke facial consistency aur rain physics highlight karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Hamara jo 3D character static khada tha, ab wo camera ki taraf dekhta hai, uski palkein naturally jhapakti hain aur barish ki boondein armor par beh rahi hain. This is not animation keyframing, this is Generative AI Motion!",
        practicalDemo: "Side-by-side comparison: Static image vs 5-second dynamic AI video.",
        endingAndHomework: "Apna pehla I2V generation run karein. Agle lesson mein hum Reference Image Preparation aur Padding seekhenge!"
      }
    },
    {
      id: "m8-l2",
      moduleId: 8,
      lessonNumber: 2,
      title: "2. Preparing the reference image",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Garbage in, Garbage out! Agar aapki input image mein flaws honge, toh AI video un flaws ko 10 guna multiply karke ek ajeeb distorted video bana degi.

I2V ke liye Perfect Reference Image Preparation Checklist:
1. **Aspect Ratio Match:**
   Agar aapko 16:9 widescreen video banani hai, toh image bhi EXACT 16:9 (1920x1080 ya 2560x1440) honi chahiye. Agar square image upload karenge toh AI use stretch ya crop karega jisse composition ruin ho jayegi.
2. **Edge Padding & Breathing Room (Safe Margins):**
   Jab camera zoom ya pan karta hai, toh AI ko edges ke bahar ke pixels predict karne padte hain. Agar character ka sir frame ke bilkul kinare par chipka hua hoga, toh camera zoom karte hi sir cut jayega ya morph ho jayega. Hamesha character ke charon taraf **15% to 20% breathing margin** rakhein.
3. **Pristine Sharp Focus (No Blurry AI Artifacts):**
   Faces aur hands razor sharp hone chahiye. Blurry textures video mein puddle ki tarah dissolve ho jaati hain.
4. **Resolution Normalization:**
   Image ko 2K (2048px width) par optimize karein. Excessive 8K images upload karne se cloud server unhe aggressively compress kar dete hain.`,
      learningObjectives: [
        "Aspect ratio alignment aur canvas dimension normalization master karna.",
        "Edge padding aur camera overshoot safety margins establish karna.",
        "Input image sharpening aur artifact elimination techniques use karna.",
        "Color grading aur contrast optimization pre-generation stage par execute karna."
      ],
      requiredTools: [
        "Web browser",
        "Image editor (Photoshop / Photopea free / Canva)",
        "AI Image Upscaler"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Crop / Set Canvas to Exact Ratio",
          description: "Ensure image dimensions are exactly 1920x1080 (16:9) or 1080x1920 (9:16)."
        },
        {
          step: 2,
          title: "Verify Edge Padding",
          description: "Check that subject's head and limbs have at least 15% clear distance from canvas boundaries."
        },
        {
          step: 3,
          title: "Clean Stray Noise Artifacts",
          description: "Remove any floating pixel specks, unwanted text or blurry patches using heal brush."
        },
        {
          step: 4,
          title: "Export as High-Quality PNG / WebP",
          description: "Save with zero compression artifacts for maximum neural network clarity."
        }
      ],
      practicalExample: "Bad Prep vs Good Prep: Unpadded image jisme character ka head top boundary par tha, video mein camera zoom aate hi character ka forehead gayab ho gaya! Padded 16:9 image jisme 20% margin tha, camera smooth sweep kiya aur character perfectly framed raha!",
      readyPrompts: [
        {
          title: "Padded Cinematic Staging Concept",
          prompt: "Cinematic medium wide shot of an astronaut sitting on alien crystal throne, plenty of breathing room around subject, wide framing, clean negative space, 8k --ar 16:9",
          useCase: "Safe margin image generation blueprint"
        }
      ],
      commonMistakes: [
        {
          mistake: "Square (1:1) image upload karke widescreen (16:9) video expect karna.",
          fix: "Hamesha source image ko target video aspect ratio par match karein."
        },
        {
          mistake: "Extreme high contrast black crush jisme dark areas mein zero detail ho.",
          fix: "Shadows ko thoda lift karein taaki AI video generator shadow details mein motion generate kar sake."
        }
      ],
      homework: "Apni ek 3D render image ko Photopea ya Photoshop mein open karein, 16:9 safe margins verify karein aur optimized PNG export karein.",
      summary: "I2V success clean reference image par depend karta hai: Exact aspect ratio, 15% edge padding, aur sharp focus morphing errors ko 90% prevent karte hain.",
      quiz: [
        {
          question: "Image-to-Video generation ke liye subject ke charon taraf kitna safe margin (breathing room) rakhna chahiye?",
          options: ["Zero percent (tight borders)", "15% se 20% clear margin", "90% empty screen", "Subject ko screen ke bahar rakhna"],
          correctIndex: 1,
          explanation: "15-20% margin camera ke zoom aur pan movements ke liye safety buffer provide karta hai bina subject cutoff ke."
        },
        {
          question: "Agar aap 1:1 square image upload karte hain widescreen video generation ke liye, toh kya hoga?",
          options: ["AI image ko stretch ya awkward crop karega jisse composition damage ho sakti hai", "Video automatic 4K ho jayegi", "Kuch nahi hoga", "Browser crash ho jayega"],
          correctIndex: 0,
          explanation: "Aspect ratio mismatch hone par AI platforms forced zoom-in ya letterbox pillarboxing apply karte hain."
        },
        {
          question: "I2V input image ke liye best lossless file format kaunsa maana jata hai?",
          options: ["High quality PNG ya uncompressed WebP", "Low quality GIF", "BMP", "Text .txt"],
          correctIndex: 0,
          explanation: "PNG lossless compression use karta hai jo sharp edges aur micro-textures ko pristine preserve karta hai."
        },
        {
          question: "Input image mein dark shadows ko thoda lift (brighten) karna kyu helpful hota hai?",
          options: ["Taaki AI neural network dark areas mein bhi visual motion aur depth discern kar sake", "Paise kam lagte hain", "Monitor saaf hota hai", "Sound tez aati hai"],
          correctIndex: 0,
          explanation: "Pure pitch-black pixels latent space mein zero information carry karte hain, jisse dark spots static blotches ban jaate hain."
        },
        {
          question: "Free online browser-based Photoshop alternative editor kaunsa hai jo quick image prep ke liye ideal hai?",
          options: ["Photopea.com", "MS Notepad", "Calculator", "VLC"],
          correctIndex: 0,
          explanation: "Photopea.com free browser-based full Photoshop clone hai jo PSD, PNG, canvas resize sab support karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! 90% AI video errors generation ke waqt nahi, balki galat image upload karne ki wajah se aate hain. Aaj hum apni reference image ko film-ready banana seekhenge.",
        whatToShowOnScreen: "Photopea.com window. Loading raw render. Overlaying 16:9 guide lines (Safe Action Margin box). Demonstrating content-aware fill / generative expand to create 20% edge breathing room.",
        screenRecordingSteps: [
          "Step 1: Photopea.com par render image drag karein.",
          "Step 2: Crop tool (C) select karein aur ratio '16:9' lock karein.",
          "Step 3: Canvas expand karke edges par breathing room add karein.",
          "Step 4: Curves adjustment layer se shadows ko +10% lift karein.",
          "Step 5: File -> Export As -> PNG click karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Pehle character ka helmet frame ke bilkul top border se touch ho raha tha. Lekin jaise hi humne 15% padding add ki, ab camera chahe upar move kare ya zoom kare, character hamesha frame ke andar majestic rahega. Prep work guarantees perfection!",
        practicalDemo: "Canvas padding comparison and safe margin overlay.",
        endingAndHomework: "Image prep drill execute karein. Agle lesson mein hum Motion Prompts likhna seekhenge!"
      }
    },
    {
      id: "m8-l3",
      moduleId: 8,
      lessonNumber: 3,
      title: "3. Creating motion prompts",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Image-to-Video mein prompt likhne ka tareeqa 2D image prompts se 180-degree alag hota hai! 

Yahan aapko **Physics, Verbs (Kriyaayein), aur Kinetic Energy** describe karni hoti hai.

The 3 Golden Rules of I2V Motion Prompts:
1. **Never Describe What is Already Visible:**
   Prompt mein "A robotic soldier with cyan armor" mat likhein. Image mein wo pehle se dikh raha hai!
2. **Focus 100% on Motion Verbs & Atmospheric Dynamics:**
   Describe: "Slowly draws plasma sword from scabbard, electrical arcing surges through blade, smoke billows gently from background vents".
3. **Control Motion Intensity (Velocity Hierarchy):**
   - **Primary Action (Subject):** Slow dramatic head turn towards camera.
   - **Secondary Ambient Motion (Environment):** Gentle rain droplets falling, neon sign flickering intermittently, heat shimmer.
   - **Camera Kinematics:** Smooth slow push-in tracking shot.

Motion Intensity Formula:
Keep motion descriptive and grounded: *"Slow, deliberate, cinematic, smooth 24fps"* words AI ko crazy hallucinations aur jitter se rokte hain.`,
      learningObjectives: [
        "I2V motion prompts ki verb-centric grammar structure master karna.",
        "Primary subject action vs secondary ambient motion layer karna.",
        "Motion intensity keywords (Gentle, Slow, Gliding, Rapid) calibrate karna.",
        "Physics parameters (Fluid dynamics, cloth simulation, particles) guide karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML / Luma Dream Machine",
        "Motion verbs reference cheat sheet"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Identify Primary Dynamic Element",
          description: "Choose ONE main action: 'Character takes three heavy deliberate steps forward'."
        },
        {
          step: 2,
          title: "Add Secondary Environmental Motion",
          description: "Append: 'Volumetric mist drifts slowly from left to right, neon reflections ripple on wet floor'."
        },
        {
          step: 3,
          title: "Add Stabilizing Velocity Keywords",
          description: "Include: 'Cinematic slow motion, steady tripod shot, photorealistic physics, smooth 24fps'."
        },
        {
          step: 4,
          title: "Execute Generation",
          description: "Run generation with motion slider at 4 (Balanced sweet spot)."
        }
      ],
      practicalExample: "Weak Prompt: 'A cyber car flying fast in city with lights'. Professional Motion Prompt: 'Camera smoothly tracks alongside the hovering speeder bike as blue jet thrusters pulse with heat distortion, wet asphalt reflections stream underneath, rain streaks across the windshield, cinematic 24fps'. The output looks like an authentic shot from Blade Runner 2049!",
      readyPrompts: [
        {
          title: "I2V Kinetic Master Prompt",
          prompt: "Slow cinematic push-in shot, warrior slowly raises energy staff, glowing runes pulse with golden light, subtle atmospheric embers drifting upward, cape billows gently in wind, photorealistic physics, 24fps",
          useCase: "Hollywood-grade character reveal motion"
        }
      ],
      commonMistakes: [
        {
          mistake: "Ek hi prompt mein 5 alag-alag complex actions likh dena (jaise 'Running, then jumps, does a backflip, shoots, and sits').",
          fix: "5-second clip mein sirf EK natural progression action describe karein. Complex multi-actions alag shots mein cut hoti hain."
        },
        {
          mistake: "Motion speed slider ko 10 (maximum) par rakh dena.",
          fix: "High motion values (8-10) visual warping aur body melting cause karte hain. 3 se 5 value cinematic realism ke liye ideal hai."
        }
      ],
      homework: "Course library se 2 motion prompts pick karein aur unhe apne 3D assets par apply karke motion smoothness check karein.",
      summary: "I2V motion prompts visual description ke badle dynamic verbs, atmospheric physics aur controlled camera kinematics par focus karte hain.",
      quiz: [
        {
          question: "Image-to-Video prompt mein sabse zaroori words kaunse hote hain?",
          options: ["Dynamic Action Verbs aur Motion Directives (e.g. 'Push in, drifting smoke, blinking')", "Image mein dikh rahe colors aur kapdon ka lamba essay", "Subject ka bio-data", "Random punctuation marks"],
          correctIndex: 0,
          explanation: "Input image aesthetics define karti hai, prompt ka role sirf motion trajectory aur physical behavior coordinate karna hota hai."
        },
        {
          question: "AI video generators mein Motion Speed / Intensity slider ko 10 (maximum) par rakhne se kya nuksan hota hai?",
          options: ["Severe visual warping, body melting aur unrealistic physics glitches", "Video 8K ho jaati hai", "Sound automatically add ho jati hai", "File download nahi hoti"],
          correctIndex: 0,
          explanation: "Extreme motion intensity latent frames ke beech temporal coherence tod deti hai jisse objects morph ho jaate hain."
        },
        {
          question: "Cinematic realism ke liye Motion Slider ki recommended sweet-spot range kya hoti hai?",
          options: ["3 se 5 (Balanced & Stable)", "100", "0 (Freeze frame)", "Negative 5"],
          correctIndex: 0,
          explanation: "Motion value 3 to 5 natural camera and organic physical movement create karti hai bina deformation ke."
        },
        {
          question: "Ek 5-second AI video clip mein kitne primary actions describe karna best practice hai?",
          options: ["1 single focused continuous action", "50 alag-alag actions", "Zero movement", "10 acrobatic stunts"],
          correctIndex: 0,
          explanation: "Single continuous action neural model ko consistent optical flow maintain karne allow karta hai."
        },
        {
          question: "Scene mein subtle depth add karne wale environmental motion elements kaunse hote hain?",
          options: ["Drifting smoke, falling rain, floating dust motes, water ripples", "Static black boxes", "Text watermarks", "Dead pixels"],
          correctIndex: 0,
          explanation: "Atmospheric micro-movements (smoke, dust, rain) scene ko organic aur alive banate hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum AI video prompting ke golden rules seekhenge. Main aapko dikhaunga ki kaise sahi verbs use karke aap AI se robotic jhatke nahi, balki Hollywood movie jaisi smooth cinematics nikal sakte hain.",
        whatToShowOnScreen: "Runway Gen-3 prompt box. Bad prompt test ('Warrior fighting') -> Shows warped output. Good prompt test ('Slow cinematic push-in, cape billows gently, glowing katana hums') -> Shows breathtaking realistic motion.",
        screenRecordingSteps: [
          "Step 1: Motion prompt anatomy explain karein (Subject + Atmosphere + Camera).",
          "Step 2: Motion Slider ko 4 par lock karein.",
          "Step 3: Prompt enter karein: 'Slow dramatic tracking shot, rain dripping from helmet, glowing eyes'.",
          "Step 4: Generate click karein aur real-time frame resolution observe karein.",
          "Step 5: Output video 60 FPS play karke liquid physics analyze karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, humne AI ko koi confusing instructions nahi di. Sirf 3 specific physical directions: Camera push-in, rain dripping, aur eye glow. Result dekhiye: Har ek water droplet armor par bilkul real world gravity follow kar rahi hai. Master this formula!",
        practicalDemo: "Motion slider speed comparison (Speed 3 vs Speed 9).",
        endingAndHomework: "Motion prompt compose karein. Agle lesson mein hum Camera Control Tools aur Motion Brush explore karenge!"
      }
    },
    {
      id: "m8-l4",
      moduleId: 8,
      lessonNumber: 4,
      title: "4. Camera movements",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Runway Gen-3 aur modern video engines mein sirf prompt par rely karne ke alawa **Dedicated Camera Controls & Motion Brush** milte hain!

Directorial Camera Controls:
1. **Pan (Horizontal Left / Right):** Camera apne tripod par khade hokar left ya right ghoomta hai.
2. **Tilt (Vertical Up / Down):** Camera niche se upar (reveal shot) ya upar se niche dekhta hai.
3. **Zoom In / Zoom Out:** Lens focal length change hoti hai.
4. **Roll (Clockwise / Counter-Clockwise):** Dynamic action tilt (Dutch angle).
5. **Truck (Track Left / Right):** Camera physically dolly track par side mein slide karta hai (pure parallax effect!).

The Magic Motion Brush (Targeted Movement):
Agar aap chahte hain ki scene mein character bilkul static khada rahe, lekin uske peeche ka jharne (waterfall) ka paani behta rahe aur chimney se dhuaan nikalta rahe:
Aap **Motion Brush** se waterfall aur chimney ko paint (highlight) kar dete hain aur specific direction aur speed assign kar dete hain. Baaki poora scene rock-solid stable rehta hai!`,
      learningObjectives: [
        "Runway Camera Control gizmo (Pan, Tilt, Zoom, Roll, Truck) master karna.",
        "Motion Brush selective masking operate karna.",
        "Multiple brush layers (Brush 1 for water, Brush 2 for smoke) assign karna.",
        "Camera speed sliders aur dynamic easing synchronize karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML with Camera Control / Motion Brush feature",
        "High-depth 3D scene image"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Access Camera Control Panel",
          description: "In Runway I2V, click the 'Camera' icon below the uploaded image."
        },
        {
          step: 2,
          title: "Select Trajectory Vector",
          description: "Choose 'Zoom In' (+2.5) and 'Pan Right' (+1.0) for a dynamic sweeping push-in."
        },
        {
          step: 3,
          title: "Apply Motion Brush to Dynamic Elements",
          description: "Click 'Motion Brush'. Paint over character's flowing cape. Set horizontal motion slider to +3 (wind blowing right)."
        },
        {
          step: 4,
          title: "Generate and Review Precision Control",
          description: "Render clip. Observe character standing firm while cape flutters and camera sweeps cinematic curve."
        }
      ],
      practicalExample: "Selective Motion Execution: Cyberpunk street image. Motion Brush 1: Puddle water ripple (+1). Motion Brush 2: Steam rising (+4 Up). Camera: Dolly In (+3). Result: Zero body morphing, pristine character stability, hyper-realistic living environmental physics!",
      readyPrompts: [
        {
          title: "Camera Sweep Reference Prompt",
          prompt: "Cinematic horizontal tracking truck shot, smooth lateral camera movement, rich background parallax, steady speed, 8k",
          useCase: "Camera control synchronization prompt"
        }
      ],
      commonMistakes: [
        {
          mistake: "Pan, Tilt, Zoom aur Roll sabhi ko ek sath maximum par ghuma dena.",
          fix: "Chaotic camera movements audience ko confuse karti hain. Ek shot mein maximum 1 ya 2 complementary camera vectors use karein (jaise Zoom In + Pan Right)."
        },
        {
          mistake: "Motion Brush se character ke body borders ke bahar messy paint karna.",
          fix: "Brush size chota rakhein aur edges ko accurately paint karein taaki background accidentally warp na ho."
        }
      ],
      homework: "Runway Motion Brush use karke ek image ke specific hisse (jaise smoke ya fire) par targeted motion apply karein aur video render karein.",
      summary: "Camera Control tools aur Motion Brush selective masking provide karte hain, jisse creators exact cinematic trajectories execute kar sakte hain bina AI hallucinations ke.",
      quiz: [
        {
          question: "Runway ML mein image ke specific hisse ko paint karke sirf usi hisse mein movement dalne wale tool ko kya kehte hain?",
          options: ["Motion Brush", "Eraser tool", "Color picker", "Text typewriter"],
          correctIndex: 0,
          explanation: "Motion Brush selective masking allow karta hai jahan painted area ko specific directional velocity milti hai."
        },
        {
          question: "Camera ko physical track par horizontally left ya right slide karne wale motion ko kya kehte hain?",
          options: ["Truck / Lateral Dolly Shot", "Tilt up", "Dutch roll", "Freeze frame"],
          correctIndex: 0,
          explanation: "Truck shot lateral tracking movement provide karta hai jo foreground aur background ke beech maximum parallax depth generate karta hai."
        },
        {
          question: "Motion Brush use karte waqt agar aap poori screen ko paint kar dein toh kya hoga?",
          options: ["Selective masking ka fayda khatam ho jayega aur poora scene chaotic move karne lagega", "Video 8K ho jayegi", "File size zero ho jayegi", "Internet speed double ho jayegi"],
          correctIndex: 0,
          explanation: "Motion Brush ka purpose targeted isolation hai. Poori image paint karne se selective control khatam ho jata hai."
        },
        {
          question: "Ek cinematic shot mein ek samay par kitne camera movements combine karna recommended hai?",
          options: ["Maximum 1 ya 2 subtle complementary movements (jaise Zoom In + Pan)", "Sabhi 10 directions ek sath", "Zero camera", "Random vibrating shake"],
          correctIndex: 0,
          explanation: "Professional cinematography controlled, purposeful camera paths use karti hai jisse viewer story par focus kar sake."
        },
        {
          question: "Camera ko apne vertical axis par upar se niche tilt karne wale movement ko kya kehte hain?",
          options: ["Tilt (Tilt Up / Tilt Down)", "Zoom", "Truck", "Roll"],
          correctIndex: 0,
          explanation: "Tilt camera angle ko vertically elevate ya depress karta hai (jaise shoes se lekar face tak reveal shot)."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum virtual dolly track aur camera jib operate karenge. Runway ke Camera Controls aur Motion Brush se aap AI ko 100% apne isharon par nacha sakte hain.",
        whatToShowOnScreen: "Runway camera control modal. 3D orbit gizmo with X, Y, Z arrows. Slider adjustments: Zoom In +2.0, Pan Right +1.5. Motion Brush window: Painting purple mask over flowing cape. Setting Upward motion +2. Live render playback.",
        screenRecordingSteps: [
          "Step 1: Image upload karein aur Camera icon click karein.",
          "Step 2: Zoom In slider +2.5 aur Pan slider +1.0 set karein.",
          "Step 3: Motion Brush select karke character ke cape par mask draw karein.",
          "Step 4: Horizontal motion vector +3 assign karein.",
          "Step 5: Generate click karein aur precise targeted animation inspect karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Camera kitne royal cinematic curve mein aage badh raha hai, aur notice kijiye character ka face 100% sharp aur steady hai, jabki cape bilkul natural hawa ki tarah flutter kar raha hai. We have achieved surgical directorial precision!",
        practicalDemo: "Motion Brush masking and directional vector arrows preview.",
        endingAndHomework: "Motion brush video generate karein. Agle lesson mein hum Cinematic Video Clips assemble karenge!"
      }
    },
    {
      id: "m8-l5",
      moduleId: 8,
      lessonNumber: 5,
      title: "5. Generating cinematic video clips",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek professional AI production mein hum ek-do random clips generate karke rukte nahi hain. Hum **Production Batches** generate karte hain!

The Professional 3-Clip Multi-Take Strategy:
Hollywood mein jab director scene shoot karta hai, toh wo ek hi shot ke Take 1, Take 2 aur Take 3 record karta hai. AI video mein bhi hume same approach follow karna chahiye:
1. **Take 1 (Balanced Seed):** Standard motion parameters (Speed 4) ke sath pehla render nikalna.
2. **Take 2 (Subtle Variation):** Thoda camera angle shift karke alternative framing check karna.
3. **Take 3 (Dynamic Action):** Thoda extra particle ya atmospheric motion inject karna.

Clips Organization & Naming Blueprint:
Production files ko mess hone se bachane ke liye systematic naming convention follow karein:
\`[Project]_[Scene]_[Shot]_[Take].mp4\`
Example: \`3DAI_Scene01_Establishing_Take02.mp4\`
Isse post-production video editing ke time aapka 80% time save hota hai!`,
      learningObjectives: [
        "Multi-take batch generation strategy master karna.",
        "Seed variation aur clip cherry-picking workflow samajhna.",
        "Professional folder organization aur naming conventions implement karna.",
        "High-definition MP4 master exports download karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML / Luma Dream Machine",
        "Project folder on desktop"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Create Local Project Folder Structure",
          description: "Create folders: '01_Renders', '02_AI_Video_Takes', '03_Audio_SFX', '04_Final_Edits'."
        },
        {
          step: 2,
          title: "Execute Multi-Take Batch",
          description: "Generate 2 to 3 takes of your key cinematic scene using slightly varied seeds or camera speeds."
        },
        {
          step: 3,
          title: "Cherry-Pick the Flawless Take",
          description: "Inspect each take in fullscreen. Eliminate takes with morphing or jitter. Pick the smoothest motion take."
        },
        {
          step: 4,
          title: "Download Master File",
          description: "Download in full 1080p/4K resolution and save with standard naming code."
        }
      ],
      practicalExample: "Scene 1 Shot: Generated 3 takes of Cyber Warrior walking in rain. Take 1 had a slight hand distortion on frame 90. Take 2 had a camera glitch. Take 3 was 100% flawless with perfect rain physics and razor-sharp face throughout all 5 seconds! Take 3 selected for final commercial edit!",
      readyPrompts: [
        {
          title: "Batch Master Production Shot",
          prompt: "Cinematic medium tracking shot, futuristic bounty hunter walking through neon mist, camera gliding parallel at steady pace, puddles splashing under boots, 8k, photorealistic, 24fps",
          useCase: "Multi-take production batch prompt"
        }
      ],
      commonMistakes: [
        {
          mistake: "Pehli hi generation mein imperfect take ko accept karke edit mein ghus jana.",
          fix: "Agar clip mein visual glitch hai, toh naya take generate karein. Editing stage par kharab AI motion fix karna bohot mushkil hota hai."
        },
        {
          mistake: "Files ko default names (jaise 'download(1).mp4') par chhod dena.",
          fix: "Hamesha turant descriptive shot code ke sath rename karein."
        }
      ],
      homework: "Apne key shot ke kam se kam 2 takes generate karein, best take ko select karke organized project folder mein save karein.",
      summary: "Multi-take generation aur systematic clip cherry-picking professional production standard hai jo ensure karta hai ki final video mein sirf flawless shots hi use hon.",
      quiz: [
        {
          question: "Hollywood directors aur professional AI filmmakers ek shot ke multiple 'Takes' kyu generate karte hain?",
          options: ["Taaki best performance, cleanest physics aur zero-glitch shot select kiya ja sake", "Kyunki unke paas extra time hota hai", "Kyunki computer automatically demand karta hai", "Kyunki files delete ho jaati hain"],
          correctIndex: 0,
          explanation: "Multiple takes options provide karte hain taaki director micro-artifacts se bachkar best temporal flow choose kar sake."
        },
        {
          question: "Professional video production folder naming convention ka example kaunsa hai?",
          options: ["3DAI_Scene01_Shot02_Take03.mp4", "asdfghjk.mp4", "final_final_final_v2.mp4", "new video.mp4"],
          correctIndex: 0,
          explanation: "Systematic naming (Scene, Shot, Take) timeline editing mein instant asset retrieval facilitate karta hai."
        },
        {
          question: "AI video clip review karte waqt kis visual factor ko sabse pehle scrutinize karna chahiye?",
          options: ["Character ke face aur hands ki temporal stability (morphing check)", "Desktop wallpaper", "Mouse pointer", "Browser theme"],
          correctIndex: 0,
          explanation: "Face aur hands human eye ke liye sabse sensitive hote hain. Unme distortion audience immersion break kar deta hai."
        },
        {
          question: "Agar Take 1 mein character ka haath thoda distort ho raha hai, toh smart workflow kya hai?",
          options: ["Alternative take generate karna ya motion brush se hand area ko static mask karna", "Video delete karke project chhod dena", "Monitor off karna", "Speaker change karna"],
          correctIndex: 0,
          explanation: "Selective motion masking ya seed variation se unwanted anatomical distortion eliminate ho jata hai."
        },
        {
          question: "1080p AI generated video clips ko final 4K production ke liye kaise up-scale kiya jata hai?",
          options: ["Topaz Video AI ya Runway 4K Upscaler", "Simple stretch in Paint", "File rename karke .4k likhna", "Screen brightness badhana"],
          correctIndex: 0,
          explanation: "Topaz Video AI neural models use karke video frames mein micro-details reconstruct karta hai aur frame rate 60 FPS interpolate karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum Hollywood style mein 'Take 1, Take 2, Take 3' direct karenge. Ek professional creator kabhi ek take par compromise nahi karta. Let's master the cherry-picking workflow!",
        whatToShowOnScreen: "Runway generation history panel. 3 video thumbnails generated. Side-by-side video player playback. Scrutinizing frame 75 for hand distortion. Flagging Take 1 as discard, approving Take 2 as Master. Folder organization demonstration.",
        screenRecordingSteps: [
          "Step 1: Batch generation launch karein (Take A aur Take B).",
          "Step 2: Dono takes ko side-by-side review window mein play karein.",
          "Step 3: Facial stability aur camera easing inspect karein.",
          "Step 4: Master take ko 1080p download karein.",
          "Step 5: Folder '02_AI_Video_Takes' mein organized filename ke sath save karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, Take 1 ke aakhri second mein camera thoda jerky tha. Lekin Take 2 mein camera bilkul fluid Steadicam ki tarah glide ho raha hai aur eye visor ka glow constant hai. We select Take 2! Yahi standard aapki videos ko million-view caliber banayega.",
        practicalDemo: "Frame-by-frame scrub review of candidate takes.",
        endingAndHomework: "Master takes download karein. Agle lesson mein hum AI Video Errors aur Glitches ko fix karna seekhenge!"
      }
    },
    {
      id: "m8-l6",
      moduleId: 8,
      lessonNumber: 6,
      title: "6. Fixing common AI video errors",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Chahe aap kitne bhi ache tools use karein, AI models abhi bhi 100% perfect nahi hain. Kabhi-kabhi clips mein:
- Face achanak morph hokar kisi aur ka ban jata hai.
- Ungliyan (fingers) aapas mein melt ho jaati hain.
- Pointers ya background textures vibrate (flicker) karne lagte hain.
- Physics illogical behave karti hai (object hawa mein teleport ho jata hai).

The 4-Step Error Troubleshooting Toolkit:
1. **The 'Static Mask' Fix (Motion Brush):**
   Agar character ka face achanak badal raha hai jabki camera move ho raha hai, toh Motion Brush se Face ko highlight karein aur uski motion intensity ko **0 (Zero)** set kar dein! Ab face input render se 100% locked rahega, jabki background camera ke sath move hoga!
2. **Lower Motion Intensity Slider:**
   Motion slider ko 7-8 se ghata kar **3 ya 4** par le aayein. 80% melting errors instant gayab ho jaate hain.
3. **Speed Ramp & Reverse Trick in Video Editor:**
   Agar video ke aakhri 1 second mein koi glitch aati hai, toh CapCut mein us aakhri 1 second ko trim kar dein ya 50% slow-motion (Optical Flow) apply karein.
4. **Seed Switching:**
   Agar ek particular seed number par persistently glitch aa rahi hai, toh seed toggle ko random par switch karein.`,
      learningObjectives: [
        "Common AI video artifacts (Morphing, Jitter, Melting, Inconsistent physics) diagnose karna.",
        "Static Face Masking (Motion Intensity 0) technique master karna.",
        "Motion intensity slider tuning se warping eliminate karna.",
        "Post-production speed ramping aur trim fixes execute karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML / Luma Dream Machine",
        "Video Editor (CapCut / DaVinci Resolve)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Identify the Glitch Type",
          description: "Diagnose whether the error is Anatomical Morphing (face/hands) or Environmental Warping (background)."
        },
        {
          step: 2,
          title: "Apply Static Masking to Problem Area",
          description: "Open Motion Brush. Paint over problem zone (face/weapon) and set motion value to zero to enforce rigidity."
        },
        {
          step: 3,
          title: "Reduce Overall Velocity Slider",
          description: "Lower motion speed from high values to 3.5 for stabilized physics."
        },
        {
          step: 4,
          title: "Apply Post-Production Clean Cut",
          description: "In CapCut, trim the tail frames where the model begins to hallucinate."
        }
      ],
      practicalExample: "Fixing a Melting Hand: Shot mein character ki right hand 3.5 seconds ke baad 6 fingers mein morph ho rahi thi. Fix: CapCut mein clip ko exactly 3.2 seconds par cut kiya aur agle shot par dynamic transition lagaya. Glitch screen par aane se pehle hi scene change ho gaya! Viewer noticed ZERO errors!",
      readyPrompts: [
        {
          title: "Stabilized Low-Motion Benchmark Prompt",
          prompt: "Static tripod camera, subtle breathing motion, steady facial features, gentle wind blowing through hair, highly consistent physics, photorealistic 24fps",
          useCase: "Maximum stability test prompt"
        }
      ],
      commonMistakes: [
        {
          mistake: "Glitched clip ko poora 5 seconds play karna social media par.",
          fix: "Sirf perfect frames use karein! Agar 5 seconds mein se sirf 3 seconds perfect hain, toh sirf wahi 3 seconds use karein."
        },
        {
          mistake: "Warped face ko post-production mein ignore kar dena.",
          fix: "Audience face par focus karti hai. Face glitch hamesha fix ya trim karein."
        }
      ],
      homework: "Ek deliberate high-motion glitched clip generate karein, fir static masking aur trimming technique se use flawless production shot mein convert karein.",
      summary: "AI video errors static masking (intensity 0), velocity reduction (3-4 slider) aur strategic trimming se 100% eliminate kiye ja sakte hain.",
      quiz: [
        {
          question: "Agar AI video mein character ka face move hote waqt ajeeb tareeqe se morph ho raha ho, toh sabse best fix kya hai?",
          options: ["Motion Brush se Face ko mask karke motion intensity 0 (Zero) par lock karna", "Volume badhana", "Monitor rotate karna", "Computer shutdown karna"],
          correctIndex: 0,
          explanation: "Face par zero motion lock lagane se AI input anchor frame ke exact facial features ko freeze rakhta hai bina morphing ke."
        },
        {
          question: "AI video generation mein 'Ghosting / Jitter' aamtaur par kis wajah se hoti hai?",
          options: ["Excessive motion speed slider settings (Too high velocity)", "Resolution 1080p hona", "Internet fast hona", "Audio track mute hona"],
          correctIndex: 0,
          explanation: "High motion values frames ke beech pixel alignment ko destabilize karti hain jisse ghosting artifacts aate hain."
        },
        {
          question: "Agar 5-second ki AI video clip mein aakhri 1.5 seconds par glitch aati hai, toh video editor mein use kaise solve kiya jata hai?",
          options: ["Aakhri 1.5 seconds ko trim karke cut kar dena aur agle shot par transition lagana", "Poori video delete karna", "YouTube par as-is upload karna", "Screen par haath rakhna"],
          correctIndex: 0,
          explanation: "Smart editing trimming use karti hai: Sirf golden frames ko timeline par rakha jata hai aur decayed tail cut ho jati hai."
        },
        {
          question: "Optical Flow frame interpolation (jaise CapCut / DaVinci mein Smooth Slow Motion) ka kya fayda hota hai?",
          options: ["Yeh 24 FPS clip ko ultra-smooth 60 FPS slow-motion mein convert karta hai bina choppiness ke", "Color black ho jata hai", "Internet disconnect hota hai", "Sound echo karti hai"],
          correctIndex: 0,
          explanation: "Optical flow AI intermediate frames synthesize karta hai jisse cinematic buttery-smooth slow motion milta hai."
        },
        {
          question: "AI video generation mein Seed number switch karne se kya hota hai?",
          options: ["AI naye random mathematical noise pattern se generation shuru karta hai jisse purana persistent glitch solve ho sakta hai", "Account logout ho jata hai", "Language change ho jaati hai", "Resolution drop ho jata hai"],
          correctIndex: 0,
          explanation: "Different seeds alternate latent paths explore karte hain jahan pichle seed ke specific artifacts naturally avoid ho jaate hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 8 ke aakhri lesson mein aapka swagat hai. Ek amateur creator glitch dekh kar pareshan ho jata hai, lekin ek pro director janta hai ki glitch ko kaise surgical precision se fix kiya jata hai. Let's fix our AI shots!",
        whatToShowOnScreen: "Glitched video clip showing face warping. Applying Motion Brush static mask (0 velocity) in Runway. Re-generating. Side-by-side comparison. Importing into CapCut, demonstrating trimming the tail glitch at 3.4 seconds with a razor cut.",
        screenRecordingSteps: [
          "Step 1: Glitched clip analyze karein aur exact timestamp note karein.",
          "Step 2: Runway Motion Brush mein face par mask draw karke slider 0 set karein.",
          "Step 3: Re-generated stabilized clip preview karein.",
          "Step 4: CapCut mein clip import karein aur 'C' (Split tool) se tail trim karein.",
          "Step 5: Smooth cinematic transition verify karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jo face pehle 3 second ke baad pighal raha tha, static mask lagane ke baad ab wo har ek frame par razor-sharp locked hai. Aur CapCut mein micro-trim karte hi video bilkul flawless movie shot ban chuki hai. You now hold the complete mastery of AI Image-to-Video!",
        practicalDemo: "Split tool trim and cross dissolve transition in CapCut.",
        endingAndHomework: "Module 8 quiz complete karein. Next Module 9 mein hum AI Text-to-Video generation explore karenge!"
      }
    }
  ]
};

