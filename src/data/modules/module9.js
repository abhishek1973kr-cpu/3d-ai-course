export const module9 = {
  id: 9,
  slug: "ai-text-to-video",
  title: "MODULE 9: AI TEXT TO VIDEO",
  subtitle: "Direct Prompting, Cinematic Choreography, Camera Angles aur Temporal Consistency",
  description: "Bina kisi reference image ke seedha text prompt se Hollywood-grade video scenes generate karna. Runway Gen-3 Alpha, Luma Dream Machine, Kling AI, cinematic camera directives aur consistency formulas.",
  icon: "Video",
  badge: "Text Directing",
  totalLessons: 6,
  totalDuration: "86 min",
  lessons: [
    {
      id: "m9-l1",
      moduleId: 9,
      lessonNumber: 1,
      title: "1. Introduction to text-to-video",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `**Text-to-Video (T2V)** generative artificial intelligence ki sabse advanced frontier hai! Yahan aapko na koi 3D model banana hai aur na hi pehle koi 2D image render karni hai. Aap seedha ek film director ki tarah computer ko text mein script sunate hain aur AI poora 3D realistic cinematic world, actors, lighting, camera physics aur dynamic motion khud generate kar deta hai!

T2V Generative Architecture:
Modern T2V models (jaise Runway Gen-3 Alpha, Sora, Luma Dream Machine, Kling AI) **Diffusion Transformers (DiT)** architecture use karte hain. Yeh text tokens ko spatio-temporal video patches mein convert karte hain. Iska matlab AI ek sath space (X, Y pixels) aur time (Z frames) dono ko 3D mathematical latent space mein simulate karta hai.

Text-to-Video vs Image-to-Video:
- **I2V:** Existing image ko motion deta hai (Higher character design control).
- **T2V:** Zero se naya world aur dynamic camera transitions create karta hai (Maximum creative spontaneity aur fast concept ideation).`,
      learningObjectives: [
        "Text-to-Video (T2V) diffusion transformer mechanics samajhna.",
        "Spatio-temporal latent patches aur video tokenization grasp karna.",
        "Top T2V engines (Runway Gen-3, Luma Dream Machine, Kling AI) compare karna.",
        "Creative rapid prototyping aur cinematic ideation pipelines build karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML / Luma Dream Machine account",
        "Text prompting workspace"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select 'Text to Video' Mode",
          description: "Open your AI video engine dashboard and switch to Text-to-Video generation tab."
        },
        {
          step: 2,
          title: "Set Technical Parameters",
          description: "Configure aspect ratio (16:9 for YouTube / Cinema, 9:16 for Reels) and set duration (5s to 10s)."
        },
        {
          step: 3,
          title: "Craft the Master Directional Prompt",
          description: "Combine Shot Type + Subject + Dynamic Action + Lighting + Atmospheric Environment."
        },
        {
          step: 4,
          title: "Generate and Review Dynamic Generation",
          description: "Review real-time spatio-temporal coherence and lighting fidelity."
        }
      ],
      practicalExample: "Prompting from Zero: Prompt entered: 'Cinematic wide drone shot skimming low over a bioluminescent alien swamp, giant crystal flowers pulsing with violet light, mist swirling around ancient mossy stone monoliths, sunset sky with twin giant moons, Unreal Engine 5 aesthetic, photorealistic, 8k'. In 90 seconds, a breathtaking 4K sci-fi video clip was generated out of pure thin air!",
      readyPrompts: [
        {
          title: "T2V Atmospheric Vista Prompt",
          prompt: "Cinematic drone sweep over a colossal cybernetic dam in high mountain valley, rushing turquoise waterfalls powered by glowing plasma conduits, heavy mist, dramatic morning golden hour lighting, 8k, 24fps",
          useCase: "Pure text-to-video establishing shot"
        }
      ],
      commonMistakes: [
        {
          mistake: "T2V prompt mein static image descriptors use karna bina motion verbs ke.",
          fix: "Agar aap sirf static description denge toh video static photo jaisi banegi. Hamesha motion verbs (gliding, sweeping, banking, running) include karein."
        },
        {
          mistake: "Unrealistic multi-phase scene maangna.",
          fix: "AI 5-second video mein ek continuous shot deliver karta hai. Scene jumps ke liye alag prompts banayein."
        }
      ],
      homework: "Runway Gen-3 ya Luma mein 'Text to Video' select karein aur ek futuristic environment ka 5-second clip generate karke motion evaluate karein.",
      summary: "Text-to-Video Diffusion Transformers se natural language ko seedha dynamic cinematic video clips mein render karta hai. Rapid world-building ke liye ultimate tool hai.",
      quiz: [
        {
          question: "Modern leading AI Text-to-Video models kis neural architecture par based hote hain?",
          options: ["Diffusion Transformers (DiT)", "Simple spreadsheet", "Basic HTML", "Analog tape recorder"],
          correctIndex: 0,
          explanation: "Diffusion Transformers (DiT) text tokens aur spatio-temporal video latent patches ko harmonize karke high-resolution consistent video generate karte hain."
        },
        {
          question: "Text-to-Video ka sabse bada creative advantage kya hai?",
          options: ["Aap bina kisi prior 3D model ya reference image ke seedha text se poora dynamic scene create kar sakte hain", "Internet data zero lagta hai", "Computer battery charge ho jaati hai", "Monitor 4K ho jata hai"],
          correctIndex: 0,
          explanation: "T2V direct imagination-to-motion pipeline provide karta hai jo rapid cinematic prototyping aur ideation ke liye unbeatable hai."
        },
        {
          question: "T2V prompt mein agar motion verbs (jaise 'sweeping', 'gliding', 'flowing') na hon toh output kaisa aayega?",
          options: ["Video almost static aur lifeless lagegi", "Video fast chalne lagegi", "Color gayab ho jayega", "Audio bajne lagega"],
          correctIndex: 0,
          explanation: "Motion verbs AI ke kinetic temporal vectors ko trigger karte hain. Bina verbs ke AI static frame extrapolate karta hai."
        },
        {
          question: "Cinematic landscape video ke liye kaunsa aspect ratio standard format hota hai?",
          options: ["16:9", "1:1", "9:16", "2:3"],
          correctIndex: 0,
          explanation: "16:9 horizontal ratio cinematic desktop, YouTube aur television screens ke liye universal standard hai."
        },
        {
          question: "T2V generation ke doran AI ek sath kin do dimensions ko solve karta hai?",
          options: ["Spatial pixels (X, Y) aur Temporal frames over time (Z)", "Sirf audio", "Sirf text file", "Sirf mouse cursor"],
          correctIndex: 0,
          explanation: "Video generation 3D spatio-temporal problem hai jisme har spatial pixel ko samay (time frames) ke across track kiya jata hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Module 9 mein hum direct AI film director ban rahe hain. Imagine kijiye ki aap ek Hollywood set par baithe hain aur aap jo bolte hain, wo computer screen par 4K video bankar chalne lagta hai. Let's master Text-to-Video!",
        whatToShowOnScreen: "Runway Gen-3 Text-to-Video dashboard. Typing master directional prompt: 'Cinematic wide drone flythrough of a futuristic neon canyon'. Setting 16:9 ratio. Clicking generate. Live progress bar. Fullscreen playback of the generated movie-grade shot.",
        screenRecordingSteps: [
          "Step 1: Text-to-Video mode select karein.",
          "Step 2: 5-Part master prompt structure enter karein.",
          "Step 3: Duration 5 seconds aur aspect ratio 16:9 configure karein.",
          "Step 4: Generate click karein aur neural latent decoding observe karein.",
          "Step 5: Generated 4K clip fullscreen play karke volumetric lighting aur camera momentum analyze karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Humne koi 3D model import nahi kiya, koi image draw nahi ki. Sirf 30 words ka prompt type kiya aur AI ne ek poora futuristic canyon, volumetric clouds aur sweeping drone camera path 90 seconds mein render kar diya. This is the future of cinema!",
        practicalDemo: "Visual dissection of camera trajectory and atmospheric particles in the generated video.",
        endingAndHomework: "T2V prompt execute karein. Agle lesson mein hum Professional Video Prompts likhne ka Hollywood formula decode karenge!"
      }
    },
    {
      id: "m9-l2",
      moduleId: 9,
      lessonNumber: 2,
      title: "2. Writing professional video prompts",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Image prompt aur Video prompt mein zameen-aasmaan ka farq hota hai. Video prompt mein AI ko **Timeline (Pacing, Speed, Camera Vector, Physical Interaction)** samajhna hota hai.

The 5-Part Hollywood Video Prompt Formula:
\`[Camera Shot & Motion] + [Subject & Core Action] + [Lighting & Atmospheric Environment] + [Physical Interaction & Secondary Motion] + [Cinematic Style & Quality Keywords]\`

Detailed Breakdown:
1. **Camera Shot & Motion:**
   "Cinematic low-angle tracking shot, slow forward dolly push..."
2. **Subject & Core Action:**
   "...of an armored cybernetic knight drawing a glowing plasma greatsword..."
3. **Lighting & Atmosphere:**
   "...in a rain-soaked abandoned neo-gothic cathedral, illuminated by shafts of moonlight and flickering blue neon..."
4. **Physical Interaction:**
   "...sparks spraying off the wet flagstones, rain droplets splashing off polished armor shoulders, heavy steam venting from joints..."
5. **Cinematic Style & Quality:**
   "...shot on 35mm anamorphic lens, shallow depth of field, photorealistic, 8k, 24fps motion."`,
      learningObjectives: [
        "5-Part Hollywood Video Prompt Formula master karna.",
        "Camera kinematics aur actor choreography ko harmonize karna.",
        "Physical micro-interactions (sparks, rain splash, steam) articulate karna.",
        "Optical parameters (Anamorphic lens, motion blur, 24fps) integrate karna."
      ],
      requiredTools: [
        "Web browser",
        "Runway Gen-3 / Luma Dream Machine",
        "Prompt formula reference sheet"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Start with Camera Kinematics",
          description: "Always lead with the camera movement: 'Cinematic smooth orbit around...', 'Low angle push-in tracking shot...'."
        },
        {
          step: 2,
          title: "Specify Subject Action with Precision",
          description: "Describe the kinetic action: 'Cyborg sprints forward through smoke and vaults over ruined concrete barrier'."
        },
        {
          step: 3,
          title: "Add Tangible Physical Interactions",
          description: "Specify physics: 'Puddles splashing under heavy tactical boots, embers drifting in wake of thrusters'."
        },
        {
          step: 4,
          title: "Append Optical Quality Modifiers",
          description: "Conclude with: 'Shot on ARRI 65mm, anamorphic flares, photorealistic lighting, smooth 24fps'."
        }
      ],
      practicalExample: "Amateur Prompt: 'Robot running in city'. Professional Hollywood Formula Prompt: 'Cinematic low-angle tracking shot pacing alongside an armored combat robot sprinting through a rainy cyberpunk alleyway, puddles splashing violently under heavy metallic feet, steam venting from shoulder exhausts, neon signage reflecting in wet asphalt, shot on 35mm anamorphic lens, photorealistic 8k, 24fps'. Result: 100x superior cinematic immersion!",
      readyPrompts: [
        {
          title: "Hollywood Master Action Video Prompt",
          prompt: "Cinematic low-angle tracking shot moving parallel with a sleek armored cyber ninja sprinting across wet neon rooftops, sparks flying from edge of drawn katana, volumetric rain and mist, reflections of colossal holograms on wet surface, shot on 35mm anamorphic lens, photorealistic, 8k, 24fps",
          useCase: "High-octane commercial action video prompt"
        }
      ],
      commonMistakes: [
        {
          mistake: "Prompt ko static adjectives se bhar dena bina kisi action verb ke.",
          fix: "Adjectives visual look dete hain, verbs motion banate hain. Dono ka 50/50 balance rakhein."
        },
        {
          mistake: "Camera angle mention na karna.",
          fix: "Bina camera direction ke AI boring static eye-level tripod shot generate kar deta hai."
        }
      ],
      homework: "5-Part formula follow karke apna ek original 50-word cinematic action prompt compose karein aur use AI video engine mein test karein.",
      summary: "Professional video prompts Camera Motion + Subject Action + Environmental Physics + Secondary Micro-Interactions + Optical Style ka structured synthesis hote hain.",
      quiz: [
        {
          question: "Hollywood Video Prompt Formula mein prompt ki shuruaat sabse pehle kis element se karni chahiye?",
          options: ["Camera Shot Type aur Motion Kinematics (e.g. 'Cinematic low-angle tracking shot...')", "Actor ka real naam", "Project budget", "Website URL"],
          correctIndex: 0,
          explanation: "Camera shot type shuru mein likhne se AI sabse pehle virtual camera rig establish karta hai jiske andar action place hota hai."
        },
        {
          question: "Action scene ko hyper-realistic banane ke liye prompt mein kaunse physical details add karne chahiye?",
          options: ["Sparks spraying, water droplets splashing, steam venting, debris flying", "Empty sterile room", "Static painted walls", "Zero gravity always"],
          correctIndex: 0,
          explanation: "Physical interaction cues (splashes, sparks, steam) AI ke physics simulation engine ko ground aur believable banate hain."
        },
        {
          question: "Camera lens ke wide cinematic flare aur blockbuster movie ratio ke liye kaunsa keyword use hota hai?",
          options: ["35mm anamorphic lens with horizontal flares", "Toy microscope", "CCTV 1990", "Fisheye door peephole"],
          correctIndex: 0,
          explanation: "Anamorphic lenses Hollywood movies ke signature horizontal blue/gold flares aur widescreen aesthetics emulate karte hain."
        },
        {
          question: "Prompt mein '24fps motion' specify karne ka kya benefit hota hai?",
          options: ["AI cinematic motion blur simulate karta hai aur robotic video game jitter avoid karta hai", "File download cancel ho jati hai", "Sound turn on ho jati hai", "Internet band ho jata hai"],
          correctIndex: 0,
          explanation: "24fps cinema standard natural human eye shutter angle aur motion blur recreate karta hai."
        },
        {
          question: "Agar aap prompt mein camera movement mention nahi karte toh AI default kaisa shot generate karega?",
          options: ["Static eye-level neutral tripod shot", "Acrobatic drone loop", "360 space flip", "Submarine dive"],
          correctIndex: 0,
          explanation: "Bina explicit camera directives ke neural networks zero-velocity default baseline use karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum Hollywood scriptwriting aur generative prompt engineering ka fusion seekhenge. Main aapko 5-part formula ka live execution dikhaunga jo ordinary words ko multimillion-dollar cinematic footage mein transform karta hai.",
        whatToShowOnScreen: "Notion prompt builder sheet showing 5 color-coded boxes: 1) Camera, 2) Subject, 3) Environment, 4) Physics, 5) Lens. Assembling the prompt live. Pasting into Runway Gen-3. Live generation review.",
        screenRecordingSteps: [
          "Step 1: Formula ke 5 blocks screen par highlight karein.",
          "Step 2: Camera component 'Cinematic low-angle tracking shot' type karein.",
          "Step 3: Subject + Action 'armored cyber ninja sprinting across wet rooftops' add karein.",
          "Step 4: Physics details 'sparks flying, puddles splashing, rain mist' inject karein.",
          "Step 5: Output video play karein aur formula ka impact analyze karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, jaise hi humne 5-part formula follow kiya, video mein camera kinetic speed se aage badh raha hai, ninja ke har step par paani ke splashes realistic physics follow kar rahe hain aur katana ke sparks wet floor par reflect ho rahe hain. Master this 5-part formula!",
        practicalDemo: "Color-coded prompt block assembly and video result dissection.",
        endingAndHomework: "Formula prompt compose karein. Agle lesson mein hum Cinematic Scenes Generate karna seekhenge!"
      }
    },
    {
      id: "m9-l3",
      moduleId: 9,
      lessonNumber: 3,
      title: "3. Generating cinematic scenes",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Cinematic scenes generate karte waqt ek professional creator 3 core visual dynamics ko balance karta hai: **Depth, Lighting, aur Scale!**

Cinematic Scene Generation Principles:
1. **Volumetric Lighting & Atmosphere:**
   Bina atmospheric fog ya dust ke scene CGI video game jaisa flat lagta hai. Prompts mein hamesha specify karein: *"Volumetric god rays, atmospheric haze, floating dust motes, swirling rain mist"*.
2. **Foreground-to-Background Separation:**
   Camera ke samne se koi object pass hona chahiye (Foreground Wipe). Jaise ek pillar ya hanging cables camera ke aage se fast slide hoti hain jabki background slowly move hota hai (Parallax Depth).
3. **Epic Sense of Scale:**
   Colossal structures (giant statues, towering skyscrapers, massive spaceships) ko human-sized elements (tiny person standing on bridge, street lights) ke sath contrast karein taaki viewer ko scene ki grandness mehsoos ho.`,
      learningObjectives: [
        "Cinematic scale cues aur architectural grandeur construct karna.",
        "Foreground wipe aur depth parallax prompts compose karna.",
        "Volumetric atmospheric lighting integration execute karna.",
        "Color temperature harmony (Warm vs Cool) scene composition mein blend karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML / Luma Dream Machine",
        "Cinematic staging guidelines"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Establish Visual Scale Ratio",
          description: "Pair a microscopic subject with a colossal environment: 'A lone explorer standing on cliff overlooking a city of 1000-story crystalline spires'."
        },
        {
          step: 2,
          title: "Inject Atmospheric Volumetrics",
          description: "Add: 'Dense low-hanging violet fog rolling between towers, golden sunlight rays piercing through smog'."
        },
        {
          step: 3,
          title: "Define Camera Trajectory with Foreground Elements",
          description: "Add: 'Slow forward dolly shot skimming past ancient stone gargoyles in immediate foreground'."
        },
        {
          step: 4,
          title: "Generate and Review Immersion",
          description: "Inspect visual depth layers and lighting atmosphere."
        }
      ],
      practicalExample: "Epic Monumental Scene: Prompt: 'Cinematic slow drone ascent revealing a colossal ancient stone titan half-submerged in a misty forest valley, tiny campfire flickering at its stone foot with a lone traveler, volumetric morning sunbeams cutting through golden mist, photorealistic, 8k, 24fps'. The generated shot looks like a $200 Million Hollywood blockbuster film!",
      readyPrompts: [
        {
          title: "Cinematic Monumental Scene Master",
          prompt: "Cinematic slow forward dolly shot skimming past hanging mossy cables in foreground, revealing a colossal futuristic spaceport hangar filled with docking starships, golden volumetric light beams cutting through dense steam, high production value, 8k, 24fps",
          useCase: "Epic world-building scene generation"
        }
      ],
      commonMistakes: [
        {
          mistake: "Foreground elements miss karna jisse scene flat 2D projection jaisa lage.",
          fix: "Hamesha camera ke kareeb koi passing object (pillars, trees, cables) describe karein."
        },
        {
          mistake: "Scene mein light source undefined chhod dena.",
          fix: "Hamesha primary light source (e.g. 'Setting crimson sun', 'Gigantic glowing hologram') explicitly define karein."
        }
      ],
      homework: "Ek epic scale ka cinematic scene generate karein jisme Foreground element, Colossal background, aur Volumetric lighting teeno clearly visible hon.",
      summary: "Cinematic scenes scale contrast, foreground parallax wipes aur volumetric atmospheric lighting se Hollywood visual depth deliver karte hain.",
      quiz: [
        {
          question: "3D scene mein colossal scale aur grandness convey karne ka sabse effective tareeqa kya hai?",
          options: ["Ek tiny human subject ko colossal giant structure ke sath contrast mein frame karna", "Screen par 'Big' likhna", "Sound mute karna", "Resolution kam karna"],
          correctIndex: 0,
          explanation: "Human scale reference viewer ke dimag ko background structures ke massive physical dimensions visualize karne deta hai."
        },
        {
          question: "Camera ke aage se passing objects (jaise pillars ya cables) slide hone ke effect ko cinematography mein kya kehte hain?",
          options: ["Foreground Wipe / Parallax Framing", "Defect", "Corrupted frame", "Lens scratch"],
          correctIndex: 0,
          explanation: "Foreground elements camera ke kareeb move hokar massive 3D depth perception aur cinematic immersion provide karte hain."
        },
        {
          question: "Scene mein light rays ko visible aur atmospheric banane ke liye kya zaroori hota hai?",
          options: ["Volumetric fog, haze, smoke ya dust motes", "Vacuum", "Clear empty air", "Pure darkness"],
          correctIndex: 0,
          explanation: "Light scattering ke liye atmospheric moisture ya particles zaroori hote hain jo visible god-rays create karte hain."
        },
        {
          question: "Hollywood blockbuster cinematography ka signature lighting contrast kya hai?",
          options: ["Warm key highlights aur cool deep atmospheric shadows", "Flat white office lighting", "Overexposed green", "Pure grayscale only"],
          correctIndex: 0,
          explanation: "Color temperature contrast (Warm Gold vs Cool Cyan/Teal) visual depth aur emotional impact maximize karta hai."
        },
        {
          question: "Drone camera ka vertical upar uthne wale shot ko kya kehte hain?",
          options: ["Pedestal Up / Crane Up / Drone Ascent", "Truck left", "Roll right", "Crash zoom"],
          correctIndex: 0,
          explanation: "Pedestal Up ya Crane Ascent shot scale reveal aur geographical grandness show karne ke liye classic tool hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum Hollywood scale ki duniya create karenge. Christopher Nolan aur Denis Villeneuve ki films mein jo grand, awe-inspiring moments hote hain, wahi scale hum text prompts se summon karenge.",
        whatToShowOnScreen: "Runway Gen-3 dashboard. Prompt typing: 'Colossal stone titan in misty valley'. Highlighting foreground mossy tree branch. Executing generation. Fullscreen 4K playback. Analyzing scale and volumetric light beams cutting through fog.",
        screenRecordingSteps: [
          "Step 1: Epic scale keywords 'colossal, towering, massive monolith' enter karein.",
          "Step 2: Human contrast element 'lone explorer standing at base' add karein.",
          "Step 3: Atmospheric tokens 'volumetric morning sunbeams, low hanging fog' inject karein.",
          "Step 4: Camera trajectory 'slow pedestal ascent' define karein.",
          "Step 5: Output video analyze karein aur depth layers review karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Foreground mein ped ki daliyan camera ke kareeb slide ho rahi hain, aur peeche dekhiye wo colossal titan kitna massive lag raha hai kyunki uske pair ke paas ek chota traveler khada hai. Light beams fog ke through bilkul photorealistic behave kar rahi hain. This is world-class filmmaking!",
        practicalDemo: "Visual breakdown of the 3 depth planes (Foreground, Midground, Colossal Background).",
        endingAndHomework: "Monumental scene generate karein. Agle lesson mein hum Realistic Movement aur Character Physics seekhenge!"
      }
    },
    {
      id: "m9-l4",
      moduleId: 9,
      lessonNumber: 4,
      title: "4. Creating realistic movement",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `AI video generation mein sabse bada tell (pechan) ki video fake hai, wo hoti hai **Unnatural Movement** — jaise character bina pair hilaye zameen par slide kar raha ho (floating), ya body achanak rubber ki tarah stretch ho rahi ho.

Realistic Physical Movement ke 3 Laws:
1. **Weight & Gravitational Inertia:**
   Heavy objects (jaise giant mech robots ya armored warriors) achanak fast nahi rukte. Unke steps mein heavy thud hota hai aur har step ke sath body slightly downward compress hoti hai. Prompts mein use karein: *"Heavy deliberate stomping footsteps, weight compression on impact, kinetic inertia"*.
2. **Cloth & Hair Fluid Dynamics:**
   Kapde aur baal body ke sath stiff nahi hilte, wo air resistance aur velocity ke hisaab se delay (drag) ke sath follow karte hain. Prompts: *"Trenchcoat dragging and fluttering in atmospheric tailwind, realistic fabric wrinkles"*.
3. **Pacing Keywords (Natural Velocity):**
   Avoid words like "running crazily" ya "super fast". Instead use: *"Athletic fluid stride, measured steady sprint, graceful rhythmic gait"*. Yeh descriptive keywords AI ko human biometric databases se realistic motion pull karne guide karte hain.`,
      learningObjectives: [
        "Weight, gravity aur kinetic inertia simulation master karna.",
        "Cloth, hair aur secondary soft-body physics prompts compose karna.",
        "Floating feet aur sliding ground contact errors eliminate karna.",
        "Kinetic pacing descriptors (Stride, Gait, Cadence) apply karna."
      ],
      requiredTools: [
        "Web browser",
        "Runway Gen-3 / Luma Dream Machine",
        "Biomechanics motion reference guide"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Define Subject Weight Class",
          description: "Specify physical mass: 'Heavy 50-ton armored bipedal mech' vs 'Agile lightweight parkour runner'."
        },
        {
          step: 2,
          title: "Describe Impact & Contact Physics",
          description: "Add: 'Each heavy step drives into soft earth with visible dust puffs and ground vibration'."
        },
        {
          step: 3,
          title: "Add Secondary Cloth / Fluid Drag",
          description: "Add: 'Tattered silk battle cape flutters with secondary inertia trailing character's movement'."
        },
        {
          step: 4,
          title: "Review Foot-Ground Contact",
          description: "Verify that soles plant securely without ice-skating sliding artifacts."
        }
      ],
      practicalExample: "Heavy Mech Stomp: Prompt: 'Cinematic tracking shot of a colossal heavy combat mech walking through muddy ruins, each mechanical hydraulic step impacts the wet ground with visible mud displacement and hydraulic steam release, heavy mass inertia, camera shakes slightly on each footstep, photorealistic, 8k, 24fps'. Output delivers bone-shaking physical weight and realism!",
      readyPrompts: [
        {
          title: "High-Inertia Heavy Physical Motion",
          prompt: "Cinematic low-angle tracking shot of a heavy armored gladiator walking deliberately forward, heavy metal greaves firmly impacting ground, dust puffs rising on foot strikes, cape trailing with delayed fluid inertia, photorealistic physics, 8k, 24fps",
          useCase: "Realistic weight and physical movement demonstration"
        }
      ],
      commonMistakes: [
        {
          mistake: "Weightless floating characters.",
          fix: "Hamesha ground contact cues (mud displacement, footsteps, dust puffs) describe karein taaki character zameen par grounded rahe."
        },
        {
          mistake: "Excessive simultaneous actions.",
          fix: "Single primary gait (walk/sprint) maintain karein taaki temporal consistency glitch na ho."
        }
      ],
      homework: "Ek heavy mechanical robot ya athlete character ka prompt compose karein jisme weight, footsteps impact aur ground contact specifically detailed ho.",
      summary: "Realistic movement weight inertia, ground contact impact aur secondary cloth drag par depend karti hai. Sahi biomechanical descriptors floating artifacts eliminate karte hain.",
      quiz: [
        {
          question: "Character ko zameen par fisalne (ice-skating slide) se rokne ke liye prompt mein kya detail add karni chahiye?",
          options: ["Firm foot strikes, mud displacement, visible dust puffs under shoes", "Smooth glass ice", "Zero gravity", "Floating speed"],
          correctIndex: 0,
          explanation: "Footstep impact cues (dust, mud displacement) AI ko physical ground contact collision calculate karne par force karte hain."
        },
        {
          question: "Heavy armored characters ya giant mechs ke movement mein kya visual trait hona zaroori hai?",
          options: ["Heavy mass inertia, hydraulic compression, deliberate weight on impact", "Light as a feather bounce", "Instant teleportation", "Zero resistance"],
          correctIndex: 0,
          explanation: "Inertia aur weight compression mass simulate karte hain jisse audience heavy machinery ka physical weight feel kar sakti hai."
        },
        {
          question: "Body move hone ke baad kapdon (cape/coat) aur baalon ke thode delay ke sath hilne ko animation mein kya kehte hain?",
          options: ["Secondary Motion / Overlapping Action", "Static freeze", "Primary frame", "Audio delay"],
          correctIndex: 0,
          explanation: "Secondary motion aur follow-through Disney ke 12 animation principles ka core part hai jo natural fluidity convey karta hai."
        },
        {
          question: "Prompt mein 'Athletic fluid stride' likhne ka 'Running crazily' ke mukable kya fayda hai?",
          options: ["AI biomechanically accurate motion patterns pull karta hai jisse morphing glitches nahi aate", "Paise kam lagte hain", "Resolution kam hoti hai", "Video black and white banti hai"],
          correctIndex: 0,
          explanation: "Structured biomechanical terms AI training data se high-quality mocap athletic movements synthesize karte hain."
        },
        {
          question: "Har footstep ke sath subtle camera shake add karne se viewer par kya psychological effect padta hai?",
          options: ["Viewer character ke massive weight aur ground impact force ko feel karta hai", "Viewer ko chashma lagana padta hai", "Video cancel ho jati hai", "Volume zero ho jata hai"],
          correctIndex: 0,
          explanation: "Impact camera shake viewer ke sensory perception ko engage karta hai aur colossal power convey karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Realism ka sabse bada test physics aur gravity hai. Agar ek 10-ton ka robot hawa mein balloon ki tarah udega, toh scene fake lagega. Aaj hum AI ko gravity aur mass ki physics sikhayenge.",
        whatToShowOnScreen: "Runway prompt input. Comparing two prompts: 1) 'Robot walking' (shows floaty feet). 2) 'Heavy combat mech with hydraulic foot impacts, dust puffs and camera shake' (shows thunderous bone-crushing steps).",
        screenRecordingSteps: [
          "Step 1: Heavy weight prompts vocabulary review karein.",
          "Step 2: Ground contact cues 'dust puffs, mud displacement' inject karein.",
          "Step 3: Camera impact shake parameter describe karein.",
          "Step 4: Output video playback karein aur foot strike frame freeze karke impact analyze karein.",
          "Step 5: Secondary cloth drag physics highlight karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, har baar jab robot ka pair ground par padta hai, camera mein ek subtle shudder hota hai aur zameen se mitti udti hai. Viewer ko screen ke through us robot ka 10-ton ka weight mehsoos hota hai. That is how you master physical realism!",
        practicalDemo: "Frame-by-frame impact inspection of footsteps and dust displacement.",
        endingAndHomework: "Realistic physical motion test execute karein. Agle lesson mein hum Cinematic Camera Angles ko deep dive karenge!"
      }
    },
    {
      id: "m9-l5",
      moduleId: 9,
      lessonNumber: 5,
      title: "5. Controlling camera angles",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Text-to-Video mein aapke paas physical camera rig nahi hota, lekin **Text Prompts mein exact cinematography terminology use karke aap AI ko virtual camera operator bana sakte hain!**

The 6 Essential T2V Camera Directives:
1. **Low-Angle Worm's Eye View:**
   "Extreme low-angle ground-level shot looking upward at..." (Subject ko massive, dominant, threatening ya heroic banata hai).
2. **High-Angle Bird's Eye / Top-Down God View:**
   "Direct 90-degree overhead top-down bird's eye tracking shot..." (Geometry, maze, traffic flow aur scale dikhane ke liye).
3. **Dutch Angle (Tilted Roll):**
   "Dramatic canted Dutch angle tilt shot, 25-degree roll..." (Psychological tension, disorientation, danger).
4. **Over-The-Shoulder (OTS):**
   "Over-the-shoulder perspective shot looking past warrior's silhouette towards approaching army..." (Viewer ko character ke perspective mein lock karta hai).
5. **Dolly Zoom / Vertigo Effect:**
   "Dolly zoom shot, camera pushes forward while lens zooms out, background dramatically warps and compresses while subject remains constant size..."
6. **FPV High-Speed Chase Tracking:**
   "Dynamic first-person FPV drone shot banking tightly through narrow alleyways, chasing speeder bike..."`,
      learningObjectives: [
        "6 foundational cinematography camera angle prompts master karna.",
        "Dolly Zoom (Vertigo effect) prompts simulate karna.",
        "FPV drone pursuit kinematics articulate karna.",
        "Emotional psychology aur narrative purpose ke hisaab se camera angle choose karna."
      ],
      requiredTools: [
        "Web browser",
        "RunwayML / Luma Dream Machine",
        "Camera angles visual storyboard cheat sheet"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Narrative Emotion",
          description: "Dominance = Low Angle. Vulnerability/Geography = High Angle. Tension = Dutch Angle."
        },
        {
          step: 2,
          title: "Lead Prompt with Technical Camera Syntax",
          description: "Start: 'Dynamic low-angle Dutch tilt shot looking upward at 30-degree canted angle...'."
        },
        {
          step: 3,
          title: "Add Lens Optics Specification",
          description: "Append: 'Shot on 24mm wide angle cine lens, dramatic vanishing perspective'."
        },
        {
          step: 4,
          title: "Generate and Review Framing Fidelity",
          description: "Verify that AI respected the optical angle throughout the clip duration."
        }
      ],
      practicalExample: "Vertigo Reveal: Prompt: 'Cinematic dolly zoom vertigo shot of a detective standing in the center of a spinning circular library, camera smoothly pushes forward while background walls compress and expand dramatically, subject remains tack-sharp in center, 8k, 24fps'. Result: Classic Alfred Hitchcock psychological thriller optical illusion rendered flawlessly in 4K!",
      readyPrompts: [
        {
          title: "FPV Drone Chase Kinematics Master",
          prompt: "High-speed cinematic FPV drone tracking shot skimming inches above wet asphalt, chasing a glowing neon sports car as it drifts around sharp corner, intense tire smoke, sparks flying, camera banks sharply with the turn, 8k, 60fps feel",
          useCase: "High-speed pursuit camera angle reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Prompt mein 3 contradictory camera angles likhna (jaise 'Top down view while looking low angle from floor').",
          fix: "Ek continuous shot mein EK single coherent camera trajectory aur angle specify karein."
        },
        {
          mistake: "Camera angle mention karna bhool jana.",
          fix: "Angle hamesha prompt ke pehle 5 words mein define karein."
        }
      ],
      homework: "Ek hi character ya car ke 2 contrasting camera angles generate karein: 1) Low-Angle Hero Shot, 2) Overhead 90-degree Bird's Eye shot, aur compare karein.",
      summary: "Exact camera terminology (Low-Angle, Overhead, Dutch, Dolly Zoom, FPV) AI ko precise cinematic framing aur perspective maintain karne par force karti hai.",
      quiz: [
        {
          question: "Scene mein suspense, danger aur psychological tension create karne ke liye tilted camera angle ko kya kehte hain?",
          options: ["Dutch Angle / Canted Angle", "Flat straight view", "Simple zoom", "Normal tripod"],
          correctIndex: 0,
          explanation: "Dutch Angle camera horizon ko tilt kar deta hai jo subconscious disorientation aur psychological tension inject karta hai."
        },
        {
          question: "Camera aage push hone ke sath background ka dramatically stretch ya compress hone wale classic optical effect ko kya kehte hain?",
          options: ["Dolly Zoom / Vertigo Effect / Zolly", "Simple screenshot", "Night mode", "Black and white filter"],
          correctIndex: 0,
          explanation: "Dolly Zoom camera dolly movement aur lens zoom ko simultaneously counter-balance karta hai jo visual distortion create karta hai."
        },
        {
          question: "Subject ko colossal, heroic aur dominant dikhane ke liye camera kahan place hona chahiye?",
          options: ["Ground level par upar ki taraf point karta hua (Low-Angle Worm's Eye View)", "Aasmaan mein niche dekhta hua", "Subject ke peeche chhipa hua", "Screen ke bahar"],
          correctIndex: 0,
          explanation: "Low-angle upward perspective subject ke height aur power ko exaggerate karti hai."
        },
        {
          question: "Two-person conversation ya cinematic confrontation mein kaunsa camera angle standard hota hai?",
          options: ["Over-The-Shoulder (OTS) Shot", "Satellite view", "Floor tile macro", "Microscopic lens"],
          correctIndex: 0,
          explanation: "Over-the-shoulder framing spatial relationship establish karti hai aur intimacy provide karti hai."
        },
        {
          question: "High-speed dynamic action scenes aur vehicle chases ke liye modern cinema mein kaunsa camera style mashhoor hai?",
          options: ["FPV Racing Drone Shot with banking turns", "Static security camera", "Stationary tripod only", "Family camcorder"],
          correctIndex: 0,
          explanation: "FPV drone shots high velocity kinetic banking angles provide karte hain jo extreme adrenaline rush deliver karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Camera angle sirf ek placement nahi hai, wo ek psychological tool hai. Ek angle se character superhero lag sakta hai, dusre angle se vulnerable victim. Aaj hum AI ko virtual camera operator banana seekhenge.",
        whatToShowOnScreen: "Storyboard comparing 6 camera angles. Running prompt tests in Runway Gen-3: 1) Low Angle Hero shot -> Epic towering cyborg. 2) 90-degree Overhead God view -> Beautiful symmetric geometric maze. 3) Dolly zoom effect demo.",
        screenRecordingSteps: [
          "Step 1: 'Low-angle upward worm's eye perspective' prompt run karein.",
          "Step 2: 'Direct 90-degree top-down bird's eye tracking shot' prompt run karein.",
          "Step 3: 'Dramatic canted Dutch angle tilt' execute karein.",
          "Step 4: Three outputs side-by-side compare karein.",
          "Step 5: Emotional impact aur narrative tone analyze karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, character same hai, lekin jaise hi humne camera ground par lakar upar point kiya, wo kitna majestic aur powerful lag raha hai. Wahi top-down angle se viewer ek omniscient spectator ban jata hai. Controlling the camera is true directorial mastery!",
        practicalDemo: "Side-by-side 3-angle emotional resonance comparison.",
        endingAndHomework: "Camera angle test execute karein. Agle lesson mein hum AI Video Consistency aur Multi-Shot Storytelling seekhenge!"
      }
    },
    {
      id: "m9-l6",
      moduleId: 9,
      lessonNumber: 6,
      title: "6. Improving video consistency",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Text-to-Video mein sabse badi challenge kya hoti hai? 
Shot 1 mein ek hero character hai, Shot 2 mein prompt type karne par hero ka face aur kapde badal jaate hain! 

T2V Multi-Shot Consistency ke 4 Proven Secrets:
1. **The Locked Character Anchor String:**
   Generic terms ('a young warrior') ke badle ek unique 20-word DNA formula har prompt mein word-to-word copy paste karein:
   *"28-year-old female cyborg operative Maya, shaved side undercut teal hair, gold ocular cybernetic left eye, matte black titanium armor with glowing cyan telemetry markings"*.
2. **Color Palette & Lighting Lockdown:**
   Har shot ke end mein exact same atmospheric tokens use karein: *"Rain-drenched Neo-Tokyo alleyway, teal and orange volumetric lighting, 8k, 24fps"*. Isse background mood 100% consistent rehta hai.
3. **The 'Tail-Frame as Head-Frame' Bridge Trick (I2V / T2V Hybrid):**
   Shot 1 video ke bilkul aakhri frame (Last frame at 5.0 seconds) ko high-res screenshot capture karein! Us frame ko Shot 2 ke liye **Input Reference Image** bana kar Image-to-Video mein feed karein! Result: Shot 1 aur Shot 2 ke beech **100% PERFECT SEAMLESS ZERO-GLITCH CONTINUITY!**
4. **Seed Consistency Tracking:**
   Same seed numbers track karke visual noise coherence preserve karein.`,
      learningObjectives: [
        "Locked character DNA strings multi-shot pipelines mein implement karna.",
        "Atmospheric aur color palette consistency rules maintain karna.",
        "'Tail-to-Head' frame bridging technique master karna flawless continuity ke liye.",
        "Multi-shot cohesive mini-movie workflow assemble karna."
      ],
      requiredTools: [
        "Web browser",
        "Runway Gen-3 / Luma Dream Machine",
        "Screenshot tool (Frame capture) or Video Editor"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Generate Shot 1 (Establishing Action)",
          description: "Execute Shot 1 using your locked Character DNA string: 'Maya sprinting across wet rooftop...'"
        },
        {
          step: 2,
          title: "Extract the Exact Final Tail Frame",
          description: "Pause video at Frame 120 (5.0s). Use 'Export Current Frame' (or high-res snipping) to grab the exact end frame."
        },
        {
          step: 3,
          title: "Feed Tail Frame as Start Frame for Shot 2",
          description: "Upload this image into I2V. Prompt: 'Camera whips around as Maya draws katana and slides into combat stance'."
        },
        {
          step: 4,
          title: "Splice Together in Video Editor",
          description: "Place Shot 1 and Shot 2 back-to-back. The cut is 100% mathematically continuous!"
        }
      ],
      practicalExample: "Continuous 10-Second Scene: Shot 1 ends with cyber warrior reaching the rooftop edge. Final frame captured. Uploaded to Shot 2 with prompt 'character looks down and leaps into flight'. When played continuously, audience sees one continuous Hollywood sequence with zero character change or costume morphing!",
      readyPrompts: [
        {
          title: "Locked Multi-Scene Character DNA",
          prompt: "Sleek biometric cybernetic operative with glowing cyan optical implants, matte obsidian composite armor with orange hazard accents, standing in rainy futuristic courtyard, dramatic volumetric lighting, 8k, photorealistic 24fps",
          useCase: "Universal character string for multi-scene consistency"
        }
      ],
      commonMistakes: [
        {
          mistake: "Har scene mein character ke clothing descriptors thode-thode badal dena.",
          fix: "Character string ko notepad mein lock rakhein aur har shot mein exact same string use karein."
        },
        {
          mistake: "Shot 1 aur Shot 2 mein lighting completely ulta kar dena (jaise Scene 1 night cyberpunk, Scene 2 sunny beach).",
          fix: "Story continuity ke liye time-of-day aur atmospheric palette consistent rakhein."
        }
      ],
      homework: "'Tail-to-Head' bridging trick use karke ek 2-shot continuous sequence generate karein jisme Shot 1 ka end Shot 2 ka start frame banta hai.",
      summary: "T2V consistency locked character DNA strings, matching color atmospheres aur Tail-to-Head frame bridging trick se achieve hoti hai. Isse solo creators multi-scene movies bana sakte hain.",
      quiz: [
        {
          question: "Shot 1 aur Shot 2 ke beech 100% flawless character aur scene continuity achieve karne wali secret industry technique kaunsi hai?",
          options: ["Tail-to-Head Frame Bridging (Shot 1 ke last frame ko Shot 2 ka input image banana)", "Video delete karke dubbing karna", "Monitor turn off karna", "YouTube video share karna"],
          correctIndex: 0,
          explanation: "Tail-to-Head bridging se Shot 2 bilkul usi exact frame se continuous aage badhta hai jahan Shot 1 end hua tha."
        },
        {
          question: "Multi-shot video storytelling mein character identity preserve karne ke liye prompt mein kya lock kiya jata hai?",
          options: ["A locked Character DNA string (Specific age, distinct scars, unique cybernetics, exact clothing)", "Sirf 'A handsome man'", "Random names", "Date of birth"],
          correctIndex: 0,
          explanation: "Specific visual markers (scars, unique armor trim, hair details) neural model ko har naye shot mein usi exact character representation par lock rakhte hain."
        },
        {
          question: "Multi-shot scene sequence mein lighting aur environment consistency preserve karne ke liye kya karna chahiye?",
          options: ["Har prompt ke end mein identical atmospheric aur color grading tokens repeat karna", "Har shot mein time of day badal dena", "Black and white karna", "Volume mute karna"],
          correctIndex: 0,
          explanation: "Consistent lighting tokens (e.g. 'rainy midnight, cyan rim light') saare clips ke color palette ko harmonize karte hain."
        },
        {
          question: "Video editor mein Shot 1 aur Shot 2 ko back-to-back lagane par seamless cut kab banta hai?",
          options: ["Jab Shot 1 ka final motion vector aur Shot 2 ka opening motion vector organically match karte hon", "Jab dono shots alag aspect ratio ke hon", "Jab screen black ho jaye", "Bina kisi video clip ke"],
          correctIndex: 0,
          explanation: "Match on action cutting continuous kinetic momentum create karta hai jisse viewer cuts notice nahi karta."
        },
        {
          question: "Module 9 ke baad ek solo creator kya produce karne ke capable ho jata hai?",
          options: ["Complete multi-shot cinematic movie trailers aur story scenes bina physical camera ya actors ke", "Sirf text emails", "Sirf audio podcasts", "Sirf static PowerPoint slides"],
          correctIndex: 0,
          explanation: "Text-to-Video aur continuity techniques solo creators ko studio-caliber multi-shot films deliver karne ki power deti hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 9 ke final lesson mein aapka swagat hai. Aaj hum AI video creation ki sabse badi holy grail ko unlock karenge: Multi-Shot Scene Continuity. Let's link our shots into a Hollywood movie sequence!",
        whatToShowOnScreen: "Shot 1 playing in video player. Pausing at 5.0 seconds. Exporting frame as 'Shot1_End.png'. Dragging 'Shot1_End.png' into Runway I2V. Entering Shot 2 motion prompt. Rendering Shot 2. Placing both clips back-to-back on timeline. Flawless 10-second continuous sequence playback.",
        screenRecordingSteps: [
          "Step 1: Shot 1 generate karein with locked character DNA string.",
          "Step 2: Shot 1 ka exact last frame export karein.",
          "Step 3: Wahi image Shot 2 ke starting slot mein upload karein.",
          "Step 4: Shot 2 motion prompt execute karein.",
          "Step 5: Dono clips ko timeline par splice karke 100% seamless continuity demonstrate karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Shot 1 mein character building ke kinare par aata hai. Shot 2 theek usi exact frame se shuru hota hai jahan wo leap karta hai. Dono shots ke beech 0% glitch, 100% continuous character match! You now possess the true craft of AI Film Directing! Module 9 quiz complete kijiye. Module 10 mein hum Professional Video Editing aur Sound Design ke studio mein enter karenge!",
        practicalDemo: "Timeline playback of the 2-shot continuous sequence.",
        endingAndHomework: "Module 9 quiz submit karein. Milte hain Module 10: Professional Video Editing mein!"
      }
    }
  ]
};

