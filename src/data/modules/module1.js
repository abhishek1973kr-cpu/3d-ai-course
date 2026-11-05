export const module1 = {
  id: 1,
  slug: "introduction-to-3d-ai-video",
  title: "MODULE 1: INTRODUCTION TO 3D AI VIDEO",
  subtitle: "3D Animation aur AI Video Generation ki buniyadi samajh",
  description: "3D animation, generative AI pipelines, aur modern production workflow ki comprehensive understanding. Zero se shuru karne walon ke liye perfect entry point.",
  icon: "Sparkles",
  badge: "Beginner Level",
  totalLessons: 5,
  totalDuration: "68 min",
  lessons: [
    {
      id: "m1-l1",
      moduleId: 1,
      lessonNumber: 1,
      title: "1. What is 3D animation?",
      duration: "12 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Clean placeholder embed
      hindiExplanation: `3D animation ka matlab hota hai three-dimensional virtual space (X, Y, aur Z axis) mein digital objects ya characters ko create karke unko motion (harkat) dena. 

Purane zamane mein traditional 2D animation mein har ek frame ko haath se draw karna padta tha. Lekin 3D animation mein hum pehle ek 3D model banate hain (Modeling), uspe colors aur textures lagate hain (Texturing), usme digital bones daalte hain (Rigging), aur timeline par keyframes set karke usko chalate hain (Animation).

Aaj ke daur mein AI ne is pure process ko 10x fast bana diya hai. Jahan pehle Pixar ya Disney jaisa 3D character banane mein mahino lagte the, ab aap AI prompts aur neural mesh generators ki madad se minutes mein realistic 3D models aur cinematics create kar sakte hain. Is masterclass mein aap yahi cutting-edge workflow seekhenge.`,
      learningObjectives: [
        "3D space (X, Y, Z coordinates) aur 3D pipeline ke basic fundamentals samajhna.",
        "Traditional CGI production aur modern AI-assisted 3D workflow mein fark janna.",
        "Key terminology: Mesh, Vertices, Polygons, Rigging aur Rendering ko decode karna.",
        "Ek 3D AI video creator banne ka vision aur mindset develop karna."
      ],
      requiredTools: [
        "Web Browser (Chrome/Brave/Edge)",
        "Notebook / Notion for Notes",
        "PC/Mac with basic graphics support"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Understand 3D Coordinate System",
          description: "Virtual world mein 3 axes hote hain: X (Horizontal / Red), Y (Vertical / Green), aur Z (Depth / Blue). 3D space mein depth hone ki wajah se characters realistic lagte hain."
        },
        {
          step: 2,
          title: "The 3D Production Stages",
          description: "1. Modeling (Shape banana) -> 2. Texturing (Material & Color lagana) -> 3. Rigging (Skeletal bones fit karna) -> 4. Animation (Movement define karna) -> 5. Lighting & Rendering (Final video nikalna)."
        },
        {
          step: 3,
          title: "Where AI enters the pipeline",
          description: "AI ab Modeling (Meshy AI), Texturing (AI texture synthesis), aur Final Rendering (Runway/Luma image-to-video) sabhi stages ko supercharge kar raha hai."
        }
      ],
      practicalExample: "Imagine kariye ek Sci-Fi Robot. Pehle 3D artist ko haath se robot ka har ek joint aur screw design karna padta tha. Aaj aap Meshy AI ko sirf prompt dete hain 'Cyberpunk battle robot, metallic armor, glowing cyan wires' aur aapko 60 seconds mein exportable 3D mesh mil jata hai!",
      readyPrompts: [
        {
          title: "3D Concept Visualizer",
          prompt: "Ultra detailed 3D miniature diorama of a futuristic cyberpunk laboratory, holographic floating screens, glowing neon tubes, octane render, isometric view, 8k resolution, volumetric lighting --v 6.0 --ar 16:9",
          useCase: "3D scene concept develop karne ke liye initial visual blueprint"
        }
      ],
      commonMistakes: [
        {
          mistake: "2D drawing aur 3D modeling ko ek hi samajhna.",
          fix: "2D sirf flat surface hoti hai (Height aur Width), jabki 3D mein actual depth (Z-axis) aur 360-degree camera viewing angle hota hai."
        },
        {
          mistake: "Direct complex character animation try karna bina basics samjhe.",
          fix: "Hamesha simple geometric shapes (cube, sphere) se camera aur spatial movement samajhein."
        }
      ],
      homework: "Ek notebook ya digital document banayein aur usme 3 popular 3D animated movies (jaise Toy Story, Avatar, Transformers) ke 3 key visual elements note karein jahan depth aur lighting sabse impactful dikhi.",
      summary: "3D animation virtual 3D space mein digital objects ko animate karne ka art hai. AI ke aane se mesh creation aur cinematic rendering ka samay 90% kam ho chuka hai, jisse solo creators bhi Hollywood-grade video bana sakte hain.",
      quiz: [
        {
          question: "3D space mein kitne dimensions hote hain aur unke axes kya hain?",
          options: ["2 dimensions (X, Y)", "3 dimensions (X, Y, Z)", "4 dimensions (X, Y, Z, W)", "Sirf 1 dimension (Z)"],
          correctIndex: 1,
          explanation: "3D space mein 3 dimensions hote hain: X (Width), Y (Height), aur Z (Depth)."
        },
        {
          question: "3D character mein movement ke liye digital bones add karne ke process ko kya kehte hain?",
          options: ["Texturing", "UV Unwrapping", "Rigging", "Compositing"],
          correctIndex: 2,
          explanation: "Rigging wo process hai jisme 3D mesh ke andar skeleton (bones) fit kiye jaate hain taaki use animate kiya ja sake."
        },
        {
          question: "Traditional 3D pipeline aur AI 3D workflow mein sabse bada difference kya hai?",
          options: ["AI 3D workflow mein rendering band ho gayi hai", "AI 3D workflow text prompts aur image reference se modeling aur motion ko dramatically speed-up karta hai", "AI mein Blender ki zaroorat nahi padti", "AI sirf 2D cartoons banata hai"],
          correctIndex: 1,
          explanation: "AI text prompts aur image synthesis ki madad se manual modeling aur keyframing ke ghanton ko minutes mein badal deta hai."
        },
        {
          question: "3D software mein Z-axis aamtaur par kis dimension ko represent karta hai?",
          options: ["Depth (Gehraai)", "Color intensity", "Sound frequency", "Texture opacity"],
          correctIndex: 0,
          explanation: "Z-axis digital coordinate system mein depth (gehraai) ko darshata hai."
        },
        {
          question: "Ek 3D object ki outer surface jo vertices aur faces se banti hai, use kya kehte hain?",
          options: ["Audio track", "3D Mesh", "Vector path", "Keyframe marker"],
          correctIndex: 1,
          explanation: "Vertices, edges aur polygons se milkar banne wale 3D geometric shape ko 3D Mesh kaha jata hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Namaste dosto! Main hoon aapka instructor aur 3D AI Studio ke pehle lesson mein aapka swagat hai. Aaj hum samjhenge ki 3D animation actual mein kya hai aur kaise AI ne is poore industry ke rules ko badal diya hai.",
        whatToShowOnScreen: "Screen par Blender ka 3D viewport open dikhayen jisme ek glowing neon cyber character 360-degree rotate ho raha ho. Sath hi Pixar render aur AI generated 3D model ka side-by-side comparison graphics dikhayein.",
        screenRecordingSteps: [
          "Step 1: Blender viewport kholkar X, Y, Z axis ko highlight karein.",
          "Step 2: Ek standard cube ko mesh mode (wireframe) mein switch karke Vertices, Edges aur Faces dikhayen.",
          "Step 3: Ek sample Meshy AI 3D model import karein aur dikhayein ki kaise instant textures render hote hain.",
          "Step 4: Camera orbit karke 360 view demonstrate karein."
        ],
        voiceoverHindi: "Dosto, screen par dekhiye. Yeh jo aap red, green aur blue lines dekh rahe hain, yeh hamari 3D universe ke foundation hain. Jab aap kisi character ko walk karate hain, toh computer har frame par uski exact 3D position calculate karta hai. Pehle is kaam mein ek poori team lagti thi, lekin ab hum AI neural pipelines ke through yeh sab khud apne laptop par kar sakte hain.",
        practicalDemo: "Viewport mein standard camera move karke lighting shift karke dikhana aur mesh ke geometry components inspect karna.",
        endingAndHomework: "Is lesson ka homework niche di gayi assignment sheet mein hai. Agle lesson mein hum AI Video Generation ke secret mechanics samjhenge. See you in Lesson 2!"
      }
    },
    {
      id: "m1-l2",
      moduleId: 1,
      lessonNumber: 2,
      title: "2. What is AI video generation?",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `AI video generation ek aisi cutting-edge technology hai jisme Deep Learning models (jaise Diffusion Transformers aur GANs) text descriptions ya static images ko dynamic, moving video frames mein convert kar dete hain.

Yeh traditional video shooting se bilkul alag hai. Yahan na camera ki zaroorat hai, na actors ki, aur na hi expensive film sets ki. Aap computer ko batate hain: "A futuristic flying cyber car zooming past neon skyscrapers at night with rain reflections", aur AI model frame-by-frame naye pixels hallucinate karke ek seamless 4K video clip generate kar deta hai.

Modern models jaise Runway Gen-3 Alpha, Luma Dream Machine, aur Kling AI temporal consistency (matlab har frame mein character aur object ka roop ek jaisa rehna) ko maintain karne ke liye physics simulation ko internal latent space mein calculate karte hain.`,
      learningObjectives: [
        "AI Video Generation ki internal working (Diffusion aur Latent Space) samajhna.",
        "Text-to-Video (T2V) aur Image-to-Video (I2V) ke difference ko grasp karna.",
        "Temporal Consistency aur Physics compliance kya hota hai yeh janna.",
        "Top generative video engines (Runway, Luma, Kling) ke strengths identify karna."
      ],
      requiredTools: [
        "Web browser",
        "Free trial accounts on RunwayML / Luma Dream Machine",
        "Discord account for AI tools access"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Understand Diffusion Models",
          description: "AI video model random visual noise (static) se shuru karta hai aur text prompt ke hisaab se noise ko clean karke clear video frames banata hai."
        },
        {
          step: 2,
          title: "Temporal Consistency Check",
          description: "Video 24 ya 30 frames per second hoti hai. AI ko ensure karna hota hai ki frame 1 ka character frame 24 par achanak badal na jaye."
        },
        {
          step: 3,
          title: "Prompt to Motion Mapping",
          description: "Prompt mein motion verbs (zooming, sprinting, morphing) aur camera directions (pan left, drone tracking) AI ke physics engine ko direct karte hain."
        }
      ],
      practicalExample: "Agar aap prompt dete hain 'Cinematic hyperlapse of ancient Rome transforming into a neon cyberpunk metropolis', AI architectural structures ko mathematically interpolate karke ek seamless time-travel transition render karta hai.",
      readyPrompts: [
        {
          title: "Futuristic Cinematic Motion",
          prompt: "Cinematic drone shot tracking a robotic explorer walking through an alien crystal cave, bioluminescent glowing crystals pulsating with purple light, volumetric fog, cinematic lighting, 8k resolution, smooth 60fps motion",
          useCase: "AI Video generator jaise Runway Gen-3 ya Luma ke liye primary motion prompt"
        }
      ],
      commonMistakes: [
        {
          mistake: "Ek hi prompt mein bohot saare contradictory actions likhna (jaise 'running while sitting and flying').",
          fix: "Motion instruction ko clear aur linear rakhein: ek samay par ek primary action aur camera movement specify karein."
        },
        {
          mistake: "Expect karna ki AI pehle shot mein hi 100% perfect physics deliver karega.",
          fix: "Hamesha 2-3 seed variations generate karein aur best motion clip select karein."
        }
      ],
      homework: "RunwayML ya Luma Dream Machine par ek free account banayein aur ek simple 5-second video prompt generate karke observation note karein ki AI ne camera angle kaise interpret kiya.",
      summary: "AI video generation artificial neural networks ke through static noise ko motion-rich video frames mein transform karta hai. Isse creators bina camera equipment ke cinematic shots bana sakte hain.",
      quiz: [
        {
          question: "AI video generation mein 'Temporal Consistency' ka kya arth hai?",
          options: ["Video ki file size choti hona", "Consecutive frames ke beech character aur scene ka visual coherence bana rehna", "Video mein background music add hona", "Video ka aspect ratio change ho jana"],
          correctIndex: 1,
          explanation: "Temporal consistency ka matlab hai ki video ke har frame mein character ka face, lighting aur environment consistent aur stable rahe, jhatke na lagein."
        },
        {
          question: "Text prompt se seedha video clip generate karne ke process ko kya kehte hain?",
          options: ["Audio-to-Mesh", "Text-to-Video (T2V)", "Rig-to-Render", "Code-to-Audio"],
          correctIndex: 1,
          explanation: "Text-to-Video (T2V) technology natural language prompts se direct video content generate karti hai."
        },
        {
          question: "AI video models kis mathematical process ka use karke visual noise ko clear frames mein convert karte hain?",
          options: ["Diffusion Process", "Spreadsheet calculation", "HTML parsing", "Audio synthesis"],
          correctIndex: 0,
          explanation: "Modern AI video systems Diffusion models par base hote hain jo gaussian noise ko step-by-step denoise karke coherent frames banate hain."
        },
        {
          question: "Inme se kaunsa tool world-class AI video generation ke liye mashhoor hai?",
          options: ["Microsoft Paint", "Runway Gen-3 / Luma Dream Machine", "Notepad++", "WinRAR"],
          correctIndex: 1,
          explanation: "Runway Gen-3 Alpha aur Luma Dream Machine leading AI video generation platforms hain."
        },
        {
          question: "Image-to-Video (I2V) workflow ka sabse bada advantage kya hota hai?",
          options: ["Internet connection ki zaroorat nahi hoti", "Aapko character ke look aur composition par 100% initial control milta hai", "Video audio automatically sync ho jati hai", "Blender install karna compulsory hota hai"],
          correctIndex: 1,
          explanation: "Image-to-Video mein aap pehle ek high-definition perfect image banate hain, jisse character aur lighting pehle se locked rehti hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome back! Lesson 2 mein hum AI Video Generation ke brain ke andar jhankne wale hain. Aaj aap jaanenge ki kaise ek line ka prompt ek dynamic cinematic shot banata hai.",
        whatToShowOnScreen: "RunwayML aur Luma Dream Machine web interface ka live screen record. Prompt input box, generate button click, processing bar aur final 4-second cinematic clip playback.",
        screenRecordingSteps: [
          "Step 1: RunwayML dashboard par T2V tab open karein.",
          "Step 2: Prompt type karein: 'Cyberpunk samurai drawing glowing katana in rainy Tokyo alleyway'.",
          "Step 3: Camera Motion controls (Horizontal Pan aur Zoom In) set karein.",
          "Step 4: Generate par click karein aur generation timeline explain karein.",
          "Step 5: Output play karein aur motion artifacts ko point out karein."
        ],
        voiceoverHindi: "Dosto dhyan se dekhiye. Jab humne generate par click kiya, tab neural network ne hazaron video patterns ko compare kiya. Notice kariye katana ke glow ka reflection paani ke puddles par bilkul realistic optical physics follow kar raha hai. Yeh hai AI video ki asli power!",
        practicalDemo: "Camera motion slider manipulate karke clip ki dynamic velocity change karke dikhana.",
        endingAndHomework: "Ab aapki baari hai! Free trial par pehla shot render karein aur community group mein share karein. Agle lesson mein hum 2D, 3D aur AI ka direct faceoff dekhenge."
      }
    },
    {
      id: "m1-l3",
      moduleId: 1,
      lessonNumber: 3,
      title: "3. Difference between 2D, 3D and AI-generated video",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Visual content creation mein 2D, traditional 3D, aur modern AI Video ke beech ke farq ko samajhna ek professional director ke liye sabse important skill hai:

1. **2D Animation (Two-Dimensional):** 
Yeh flat X aur Y plane par kaam karta hai (jaise Anime, Tom & Jerry, ya vector graphics). Har drawing flat hoti hai aur camera 3D space mein ghoom nahi sakta jab tak har angle dobara haath se na draw kiya jaye.

2. **Traditional 3D Animation (Three-Dimensional):**
Isme virtual 3D models bante hain jinko aap kisi bhi angle se dekh sakte hain. Camera ko 360-degree ghuma sakte hain, custom lights add kar sakte hain. Lekin isme modeling, rigging, aur rendering mein bohot zyada computational power aur manual mehnat lagti hai.

3. **AI-Generated Video (The Hybrid Revolution):**
Yeh 2D aur 3D ka ultimate fusion hai. AI models ne lakhon 3D aur real-world videos se depth, lighting aur motion seekha hua hai. Isme aapko na har polygon manually create karna hai na har frame draw karna hai. Aap 3D mesh ko AI video generators ke saath combine karke 10 guna fast production kar sakte hain.`,
      learningObjectives: [
        "2D, Traditional 3D, aur AI Video ke technical workflows ka comparison karna.",
        "Production cost, time efficiency aur flexibility ka analysis karna.",
        "Kis project ke liye kaunsa approach choose karein yeh decision lena.",
        "Hybrid Pipeline (3D base + AI Enhancement) ki power samajhna."
      ],
      requiredTools: [
        "Web browser",
        "Comparison chart sheet (included in Resources)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Compare Dimensions & Freedom",
          description: "2D = Flat canvas. Traditional 3D = Infinite camera angles par high manual effort. AI = Instant visual richness par prompt control ki zaroorat."
        },
        {
          step: 2,
          title: "Evaluate Production Time",
          description: "Ek 10-second high-end 3D scene banane mein traditional studio ko 1-2 hafte lagte hain. AI hybrid pipeline se wahi scene 2 ghante mein ready ho sakta hai."
        },
        {
          step: 3,
          title: "Adopt the Hybrid Pipeline",
          description: "Best quality ke liye smart creators 3D software (Blender) se rough base layout banate hain aur AI se photorealistic textures aur dynamic lighting render karwate hain."
        }
      ],
      practicalExample: "Ek flying dragon scene: Traditional 2D mein dragon ke 200 drawings banane padenge. Traditional 3D mein dragon ka high-poly sculpt, skin weight paint, aur hours of rendering chahiye. AI Hybrid workflow mein: Meshy AI se 3D dragon mesh nikalo, Blender mein basic flying camera set karo, aur Runway se cinematic skin flame realism render karo!",
      readyPrompts: [
        {
          title: "Hybrid Cinematic Scene Reference",
          prompt: "Cinematic close-up of an ancient stone dragon head opening its eyes, golden mystical smoke flowing from nostrils, extreme macro detail, photorealistic scales, Unreal Engine 5 render style, 8k, dramatic rim lighting",
          useCase: "Comparison render reference generate karne ke liye"
        }
      ],
      commonMistakes: [
        {
          mistake: "Yeh sochna ki AI 3D artists ko bilkul replace kar dega.",
          fix: "AI replace nahi karta, balki jo artist AI use karta hai wo traditional artist se 10x aage nikal jata hai."
        },
        {
          mistake: "Har cheez ke liye sirf raw AI prompts par rely karna bina basic 3D structure ke.",
          fix: "Complex scenes mein hamesha ek 3D reference base use karein consistent results ke liye."
        }
      ],
      homework: "Niche diye gaye comparison table ko review karein aur apne dimag mein ek project choose karein jo aap is masterclass ke doran complete karna chahte hain.",
      summary: "2D flat drawings par based hai, 3D mathematical meshes aur camera control par, aur AI neural hallucination par. Teenon ka combination world-class videos banata hai.",
      quiz: [
        {
          question: "2D animation aur 3D animation ke beech primary structural difference kya hai?",
          options: ["2D mein Z-axis (depth) nahi hoti jabki 3D mein X, Y aur Z teeno hote hain", "2D hamesha black and white hoti hai", "3D sirf audio ke liye use hoti hai", "2D mein computers use nahi hote"],
          correctIndex: 0,
          explanation: "2D flat surfaces (X aur Y) tak seemit hai jabki 3D mathematical depth (Z-axis) provide karta hai jisme camera 360-degree move kar sakta hai."
        },
        {
          question: "Hybrid 3D AI pipeline ka sabse bada benefit kya hai?",
          options: ["Internet bilkul band ho jata hai", "Blender ka camera control aur AI ka photorealistic rendering dono ek sath milte hain", "Files ka size zero ho jata hai", "Keyboard ki zaroorat nahi padti"],
          correctIndex: 1,
          explanation: "Hybrid pipeline mein aapko exact 3D camera angles ka precision milta hai aur AI se Hollywood-level textures aur dynamic lighting milti hai."
        },
        {
          question: "Traditional 3D animation pipeline mein kaunsa step sabse zyada manual time leta hai?",
          options: ["Desktop wallpaper lagana", "Detailed modeling, texturing, rigging aur final rendering", "Audio player open karna", "File rename karna"],
          correctIndex: 1,
          explanation: "Traditional pipeline mein high-poly sculpting, bone weight painting aur render farm calculations mein din aur hafte lagte hain."
        },
        {
          question: "Anime jaise visual formats aamtaur par kis category mein aate hain?",
          options: ["2D Cel Animation", "Hardware rendering", "3D scanning", "Text typography"],
          correctIndex: 0,
          explanation: "Anime traditionally 2D cel animation style follow karta hai, chahe ab usme 3D backgrounds use hote hon."
        },
        {
          question: "Agar aapko kisi character ko 360-degree angle se inspect karke har angle se shoot karna ho, toh best choice kya hai?",
          options: ["Flat 2D painting", "3D Mesh model", "Audio MP3 file", "Plain text file"],
          correctIndex: 1,
          explanation: "Ek 3D Mesh model virtual space mein exist karta hai, jisse camera ko kisi bhi angle ya distance par rakha ja sakta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Hello creators! Aksar beginners confuse hote hain ki kya unhe pehle 2D seekhna chahiye, 3D seekhna chahiye ya seedha AI tools use karne chahiye. Is lesson mein hum teeno ka detailed breakdown karenge.",
        whatToShowOnScreen: "Ek three-way split screen visual: Left side par classic 2D hand-drawn animation, middle mein Blender ka wireframe 3D viewport, aur right side par Runway Gen-3 ka photorealistic AI video.",
        screenRecordingSteps: [
          "Step 1: 2D drawing showcase karein jisme camera move nahi ho sakta bina redrawing ke.",
          "Step 2: Blender mein camera move karke dikhayein ki 3D space mein full rotational freedom hoti hai.",
          "Step 3: AI video player dikhayen jisme text prompt se realistic lighting aur mist generate ho rahi hai.",
          "Step 4: Summary matrix table screen par highlight karein."
        ],
        voiceoverHindi: "Dekhiye dosto, agar aapko exact camera angle control chahiye, toh 3D space ka koi tod nahi hai. Lekin traditional 3D rendering mein ek frame render hone mein 20 minute lag sakte hain. Wahi AI video kuch seconds mein cinematic realism inject kar deta hai. Hamara goal in dono ki best capabilities ko mix karna hai.",
        practicalDemo: "Camera angle ko Blender mein rotate karna aur usi scene ka AI enhanced render side-by-side show karna.",
        endingAndHomework: "Comparison table ko dhyan se study karein. Agle lesson mein hum un sabhi software aur tools ki list dekhenge jo hum is course mein use karenge."
      }
    },
    {
      id: "m1-l4",
      moduleId: 1,
      lessonNumber: 4,
      title: "4. Essential software and tools",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek professional 3D AI Video Studio setup karne ke liye hume hardware aur software ka ek balanced toolkit chahiye hota hai. Achi baat yeh hai ki aaj ke zyadatar modern AI tools cloud-based hain, isliye aapko lakho rupaye ka high-end gaming PC shuru mein nahi chahiye!

Humare Masterclass Toolkit ke 4 pillars hain:
1. **AI Image & Concept Generators:** Midjourney, FLUX.1, Leonardo AI (Visual characters aur backgrounds design karne ke liye).
2. **AI 3D Mesh Creators:** Meshy AI, Tripo3D (Text ya images se direct 3D .GLB / .FBX models nikalne ke liye).
3. **Professional 3D Suite:** Blender 4.x (Free & Open Source - scene layout, camera staging, lighting aur basic animation ke liye).
4. **AI Video Engines & Editors:** Runway Gen-3 Alpha, Luma Dream Machine, CapCut Pro / Premiere Pro (Dynamic motion generate karne aur final audio-video editing ke liye).

Har tool ka pricing aur free tier transparently janna zaroori hai taaki aapka ek rupaya bhi bina zaroorat ke kharch na ho.`,
      learningObjectives: [
        "Masterclass mein use hone wale essential software ecosystem ko install aur setup karna.",
        "Free credits, free tiers aur paid subscription models ka smart usage samajhna.",
        "System requirements (RAM, GPU, Browser) ko verify karna.",
        "Cloud-based vs Local rendering ke trade-offs ko master karna."
      ],
      requiredTools: [
        "Blender 4.x (Free download from blender.org)",
        "Discord account",
        "Browser with WebGL 2.0 support",
        "CapCut (Desktop or Web) or DaVinci Resolve (Free)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Download and Install Blender 4.x",
          description: "blender.org par jayein aur latest stable version install karein (Windows/Mac/Linux sabhi ke liye 100% free hai)."
        },
        {
          step: 2,
          title: "Setup Meshy AI Account",
          description: "meshy.ai par Google account se sign up karein. Free account par har month free credits milte hain 3D models generate karne ke liye."
        },
        {
          step: 3,
          title: "Setup Video AI Accounts",
          description: "RunwayML (app.runwayml.com) aur Luma AI (lumalabs.ai/dream-machine) par free creator accounts banayein."
        },
        {
          step: 4,
          title: "Install Video Editor",
          description: "CapCut Desktop ya DaVinci Resolve Free version download karein audio syncing aur final color grading ke liye."
        }
      ],
      practicalExample: "Budget Breakdown: Blender = ₹0 (Lifetime free). CapCut = ₹0 (Free version more than enough). Meshy AI = Free tier available (Paid plan starts ~$16/mo). Runway = Free trial credits (Standard plan ~$12/mo). Aap zero extra cost par apni learning start kar sakte hain!",
      readyPrompts: [
        {
          title: "Tool Benchmark Prompt",
          prompt: "Futuristic robotic drone with shiny chrome plating, glowing blue optics, hovering in mid-air, studio lighting, isolated on black background, 3D asset model view, 8k",
          useCase: "Har ek AI tool par visual fidelity test karne ke liye standardized benchmark prompt"
        }
      ],
      commonMistakes: [
        {
          mistake: "Pehle hi din expensive paid subscriptions le lena bina basics seekhe.",
          fix: "Hamesha har tool ke free tier aur trial credits se practice start karein jab tak workflow master na ho jaye."
        },
        {
          mistake: "Outdated Blender versions (jaise Blender 2.8) download kar lena.",
          fix: "Hamesha Blender 4.0 ya higher use karein jisme modern geometry nodes aur fast EEVEE-Next engine supported hai."
        }
      ],
      homework: "Blender 4.x download karke install karein, aur Meshy AI par login karke apna profile dashboard screenshot ready rakhein.",
      summary: "3D AI creation ke liye Blender (free 3D foundation), Meshy AI (rapid 3D mesh generator), Runway/Luma (video motion engine) aur CapCut (editing) ka combo world-class results deliver karta hai.",
      quiz: [
        {
          question: "Blender software ki cost kitni hai?",
          options: ["$50 per month", "$300 one-time", "100% Free and Open-Source", "Sirf Mac users ke liye paid hai"],
          correctIndex: 2,
          explanation: "Blender 100% Free aur Open Source software hai jise worldwide professionals aur studios commercially use karte hain."
        },
        {
          question: "Text prompt ya image se direct 3D model (.GLB/.OBJ) generate karne ke liye kaunsa AI tool best suited hai?",
          options: ["Audacity", "Meshy AI", "VLC Media Player", "Google Chrome"],
          correctIndex: 1,
          explanation: "Meshy AI ek specialized generative 3D platform hai jo text aur 2D images ko 3D meshes aur PBR textures mein convert karta hai."
        },
        {
          question: "Kiski wajah se aaj low-end laptops par bhi AI video generation possible ho chuka hai?",
          options: ["Monitors ka resolution kam ho gaya hai", "Heavy AI computation cloud servers par GPU cluster par run hota hai", "Keyboards fast ho gaye hain", "Internet cables wireless ho gayi hain"],
          correctIndex: 1,
          explanation: "Runway, Luma aur Meshy cloud-based platforms hain, isliye saari heavy AI rendering unke cloud GPU servers par hoti hai."
        },
        {
          question: "Video clips ko cut karne, transitions dene aur background music add karne ke liye beginner-friendly free editor kaunsa hai?",
          options: ["CapCut / DaVinci Resolve Free", "MS Excel", "Command Prompt", "Calculator"],
          correctIndex: 0,
          explanation: "CapCut Desktop aur DaVinci Resolve Free version high-quality video editing aur audio synchronization ke liye industry standards hain."
        },
        {
          question: "3D models ke sabse common standard export formats kaunse hain?",
          options: [".MP3 aur .WAV", ".GLB, .FBX aur .OBJ", ".PDF aur .DOCX", ".ZIP aur .RAR"],
          correctIndex: 1,
          explanation: ".GLB, .FBX aur .OBJ 3D models ke universal standard file formats hain jo har 3D software aur game engine mein open hote hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Tools ka sahi chunav aapka 80% samay bachata hai. Is video mein hum apne complete production suite ko setup karenge.",
        whatToShowOnScreen: "Browser mein blender.org open karein, download button click karein, installation wizard dikhayein. Uske baad meshy.ai aur runwayml.com ke interface ka guided tour karein.",
        screenRecordingSteps: [
          "Step 1: Blender 4.x download aur launch demonstrate karein.",
          "Step 2: Meshy AI website par credits counter aur model generator window show karein.",
          "Step 3: Runway Gen-3 interface open karke essential settings highlight karein.",
          "Step 4: Bookmarks bar mein sabhi tools ko organized folder mein save karna dikhayein."
        ],
        voiceoverHindi: "Dosto, screen par dekhiye. Blender open karne par yeh default cube dikhta hai. Don't worry, hume complex manual vertex manipulation mein mahino barbad nahi karne hain. Hamara primary 3D generator hoga Meshy AI aur staging ke liye hum Blender use karenge. Ye toolkit aapki super-power banne wala hai.",
        practicalDemo: "Quick tool launch test aur browser bookmarks organizing.",
        endingAndHomework: "Sabhi 4 accounts setup karein aur community channel par 'Ready' likhein. Agle lesson mein hum complete beginner workflow ka blueprint dekhenge!"
      }
    },
    {
      id: "m1-l5",
      moduleId: 1,
      lessonNumber: 5,
      title: "5. Complete beginner workflow",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek complete 3D AI Video project ko start-to-finish execute karne ke liye professional 6-Step Production Workflow hota hai. Agar aap is roadmap ko follow karenge toh aap kabhi stuck nahi honge aur aapka final output hamesha cinematic aur engaging hoga.

**The 6-Step Zero-to-Pro Blueprint:**
1. **Concept & Storyboard:** Video ka idea, storyline aur visual theme lock karna (e.g. Cyberpunk warrior in ancient temple).
2. **AI Asset Generation:** Concept art generate karna (Midjourney/Flux) aur primary character/props ka 3D model banana (Meshy AI).
3. **3D Staging & Camera Setup:** 3D model ko Blender mein import karna, camera framing, lighting aur background placement karna.
4. **Motion Synthesis (AI Video):** Staged frames ko Runway ya Luma mein feed karke cinematic camera moves aur physics-based movement generate karna.
5. **Post-Production & Sound Design:** Clips ko CapCut mein arrange karna, dramatic beat drops, cinematic whooshes, ambient sound effects aur voiceover sync karna.
6. **Color Grading & 4K Export:** Color lookup tables (LUTs), sharpening aur platform-specific export settings (Reels/Shorts 9:16 ya YouTube 16:9).`,
      learningObjectives: [
        "End-to-end 6-Step 3D AI video production pipeline ko master karna.",
        "Pre-production se lekar post-production tak har stage ki responsibility samajhna.",
        "Bottlenecks aur time-waste se bachne ke proven strategies seekhna.",
        "Course ke aage aane wale modules ka roadmap aur structure visualize karna."
      ],
      requiredTools: [
        "Web browser",
        "Workflow flowchart diagram (available in dashboard)",
        "Notion / Google Docs for Storyboarding"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Step 1: Ideation & Visual Scripting",
          description: "Har scene ko 3-5 second ke micro-shots mein break karein. Scene 1: Wide establishing shot, Scene 2: Character close-up, Scene 3: Action move."
        },
        {
          step: 2,
          title: "Step 2: 3D Model & Environment Creation",
          description: "Hero asset ko Meshy AI se generate karke .GLB format mein download karein."
        },
        {
          step: 3,
          title: "Step 3: Staging in Blender",
          description: "Model ko scene mein place karein, 3-point cinematic lighting setup karein aur perfect render frame capture karein."
        },
        {
          step: 4,
          title: "Step 4: AI Motion Generation",
          description: "Rendered frame ko Runway Gen-3 ya Luma mein upload karke camera zoom aur motion prompts add karein."
        },
        {
          step: 5,
          title: "Step 5: Editing, SFX & Export",
          description: "CapCut mein sabhi shots ko sound effects aur voiceover ke sath seamlessly assemble karein."
        }
      ],
      practicalExample: "Casestudy: Ek 30-second Instagram Reel commercial for a futuristic energy drink. Step 1: Script. Step 2: 3D glowing can model Meshy AI se banaya. Step 3: Blender mein water splash aur neon lights set kiye. Step 4: Runway mein camera orbit shot generate kiya. Step 5: Bass drop sound effect ke sath edit kiya. Total production time: Only 90 minutes!",
      readyPrompts: [
        {
          title: "Storyboard Shot 1 Establishing Frame",
          prompt: "Cinematic wide-angle shot of a lone astronaut standing on the edge of a crystalline cliff on a foreign planet, two glowing moons in purple night sky, volumetric stars, high production value, Unreal Engine 5 cinematic, 8k",
          useCase: "Video project ka pehla opening establishing shot design karne ke liye"
        }
      ],
      commonMistakes: [
        {
          mistake: "Bina storyboard ya script ke direct video generate karna shuru kar dena.",
          fix: "Hamesha pehle kam se kam 3 scenes ka bullet points storyboard banayein taaki credits aur time waste na ho."
        },
        {
          mistake: "Shots bohot lambe (15-20 seconds static) rakhna.",
          fix: "Social media aur modern cinema mein shot duration 2 se 4 seconds rakhein fast pacing aur high retention ke liye."
        }
      ],
      homework: "Ek short 3-shot concept likhein (Title, Scene 1, Scene 2, Scene 3) jise aap is masterclass mein reality mein convert karenge.",
      summary: "Successful 3D AI video creation ek structured process hai: Idea -> 3D Asset -> Blender Staging -> AI Motion -> Sound & Editing. Har step pichle step par depend karta hai.",
      quiz: [
        {
          question: "3D AI video production ka sabse pehla aur sabse critical step kya hota hai?",
          options: ["Final 4K export karna", "Concept aur Storyboard planning", "Video clips delete karna", "Direct paid ads run karna"],
          correctIndex: 1,
          explanation: "Concept aur Storyboard planning se aapko clear clarity milti hai ki kaunse assets aur shots generate karne hain."
        },
        {
          question: "Social media video (Instagram Reel / Shorts) ke liye ideal individual shot length aamtaur par kitni hoti hai?",
          options: ["45 seconds", "2 se 4 seconds per shot", "5 minute single shot", "0.1 second"],
          correctIndex: 1,
          explanation: "2 se 4 seconds ke dynamic cuts audience engagement aur watch time ko significantly increase karte hain."
        },
        {
          question: "Blender ka primary role hamare workflow mein kya hota hai?",
          options: ["Audio recording", "3D asset staging, exact camera framing aur lighting setup", "Credit card payment gateway", "PDF reading"],
          correctIndex: 1,
          explanation: "Blender hume complete 3D control deta hai taaki hum camera angle, focal length aur lighting ko accurately setup kar sakein."
        },
        {
          question: "Video editing stage par Sound Effects (SFX) aur background music add karna kyu zaroori hai?",
          options: ["Kyunki bina audio ke cinematic immersion aur emotional impact adhura rehta hai", "Kyunki YouTube audio allow nahi karta", "Kyunki files choti ho jaati hain", "Kyunki computer hang nahi hota"],
          correctIndex: 0,
          explanation: "Sound design video ka 50% emotional impact decide karta hai. Realistic whooshes, footsteps aur ambient music scene ko jaan dete hain."
        },
        {
          question: "Mobile vertical video ka standard aspect ratio kya hota hai?",
          options: ["16:9", "1:1", "9:16", "4:3"],
          correctIndex: 2,
          explanation: "9:16 vertical full-screen format standard hai Instagram Reels, YouTube Shorts aur TikTok ke liye."
        }
      ],
      recordingScript: {
        instructorIntro: "Dosto, congratulations! Aap Module 1 ke final lesson par pahunch chuke hain. Is lesson mein hum saare pieces ko ek cohesive master workflow mein jod rahe hain.",
        whatToShowOnScreen: "Full animated production workflow flowchart graphic screen par draw hota hua dikhayein. Stage 1 se lekar Stage 6 tak with live video previews of each stage.",
        screenRecordingSteps: [
          "Step 1: Notion storyboard template show karein jisme 3 shots divided hain.",
          "Step 2: Meshy AI mein generate hua 3D asset dikhayen.",
          "Step 3: Wahi asset Blender scene mein lighting ke sath staged show karein.",
          "Step 4: AI video clip motion playback karein.",
          "Step 5: CapCut timeline par audio layers sync hote hue dikhayein."
        ],
        voiceoverHindi: "Yeh jo poori chain aap screen par dekh rahe hain, yahi Hollywood ke top VFX houses aur new-age AI creators follow kar rahe hain. Har module ke sath aap ek-ek step ke master bante jayenge. Module 1 complete karne par aapko bohot bohot badhai!",
        practicalDemo: "Complete 15-second sample teaser play karke har shot ka workflow source identify karna.",
        endingAndHomework: "Module 1 ka quiz complete karein aur certificate eligibility track karein. Next Module 2 mein hum AI Prompt Engineering ke deep secrets unlock karenge!"
      }
    }
  ]
};

