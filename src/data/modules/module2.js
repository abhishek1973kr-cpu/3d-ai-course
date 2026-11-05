export const module2 = {
  id: 2,
  slug: "ai-prompt-engineering",
  title: "MODULE 2: AI PROMPT ENGINEERING",
  subtitle: "3D Prompts, Negative Prompts, Cinematic Cameras aur Lighting Formula",
  description: "AI ko exact visual directions dene ka science aur art. Token hierarchy, style modifiers, photographic parameters aur 3D rendering keywords ka complete mastery.",
  icon: "Terminal",
  badge: "Core Skill",
  totalLessons: 6,
  totalDuration: "82 min",
  lessons: [
    {
      id: "m2-l1",
      moduleId: 2,
      lessonNumber: 1,
      title: "1. Understanding AI prompts",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `AI Prompt sirf simple text nahi hai, balki yeh AI model ke neural network ko activate karne wali mathematical coordinates ki ek chaabi (key) hai.

Jab aap prompt likhte hain, toh AI us text ko chote-chote tukdon mein todta hai jinhe **Tokens** kaha jata hai. AI in tokens ko apne latent space mein search karta hai aur samajhta hai ki aap kis visual style, composition, aur mood ki baat kar rahe hain.

Beginners aksar galti karte hain ki wo AI se human conversation ki tarah baat karte hain (jaise: "Please make me a very nice looking 3D boy who is standing nicely"). AI models conversation se zyada **Descriptive Keywords**, **Semantic Weights**, aur **Structural Modifiers** par best respond karte hain.

Ek world-class prompt ka formula hota hai:
**[Subject] + [Action/Pose] + [Environment/Background] + [Lighting & Mood] + [Art Style / Render Engine] + [Technical Parameters]**`,
      learningObjectives: [
        "Tokens aur Latent Space kaise kaam karta hai yeh samajhna.",
        "Prompt structure ka universal 6-part formula learn karna.",
        "Natural language conversation aur keyword-dense prompting ke difference ko master karna.",
        "AI models (Midjourney, Flux, Meshy) ki token interpretation habits grasp karna."
      ],
      requiredTools: [
        "Web browser",
        "Prompt testing workspace (Midjourney/Flux/Bing Image Creator)",
        "Notion / Text Editor"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Identify the Primary Subject",
          description: "Prompt ke shuru ke 3-5 words sabse high priority hote hain. Subject ko specific banayein (e.g. 'Cybernetic mechanical falcon' instead of 'bird')."
        },
        {
          step: 2,
          title: "Inject Environmental Context",
          description: "Subject kahan hai? 'Perched on a rusted steel beam in a neon-lit rain drenched alleyway'."
        },
        {
          step: 3,
          title: "Specify Optical & Lighting Style",
          description: "Lighting mood define karein: 'Dramatic volumetric cyan rim lighting, bioluminescent glow, shallow depth of field'."
        },
        {
          step: 4,
          title: "Define 3D Render Engine Aesthetic",
          description: "Keywords like 'Octane Render, Unreal Engine 5, Ray Tracing, 8k resolution' AI ko realistic 3D textures generate karne par force karte hain."
        }
      ],
      practicalExample: "Weak Prompt: 'A cool 3D car in city'. Professional Prompt: 'Futuristic hypercar sculpted with matte carbon fiber, glowing aerodynamic LED fins, parked on reflective wet tarmac in Neo Tokyo, dramatic blue and magenta rim lighting, Unreal Engine 5 render, ray-traced reflections, 8k, photorealistic --ar 16:9'. Result: 100x superior aesthetic quality!",
      readyPrompts: [
        {
          title: "Formula-Based 3D Cyber Asset",
          prompt: "Sleek biometric robotic gauntlet, polished obsidian metal with exposed glowing cyan hydraulic circuits, floating in studio display, dramatic rim lighting, Octane render, 8k, ray tracing, sharp focus --ar 16:9",
          useCase: "Prompt structure formula ka practical test"
        }
      ],
      commonMistakes: [
        {
          mistake: "Prompt mein useless filler words use karna ('photorealistic', 'please make', 'super cool').",
          fix: "Filler words AI token limit consume karte hain. Unki jagah precise render engine ya lighting descriptors use karein jaise 'Global illumination, 85mm lens, subsurface scattering'."
        },
        {
          mistake: "Word order ko ignore karna.",
          fix: "Prompt ke shuruaat ke words par sabse zyada weight hota hai. Important details hamesha pehle likhein."
        }
      ],
      homework: "Universal Formula use karke apne pasand ke ek 3D character ya object ka 30-word detailed prompt compose karein.",
      summary: "AI Prompting tokens aur mathematical weighting par chalti hai. Subject + Environment + Lighting + Render Style formula follow karne se consistently photorealistic results aate hain.",
      quiz: [
        {
          question: "AI image aur video models prompt text ko kis format mein break karke process karte hain?",
          options: ["Audio frequencies", "Tokens", "Excel cells", "Pixels"],
          correctIndex: 1,
          explanation: "Natural language processing models prompt ko tokens mein split karte hain jo neural network ke weights ko activate karte hain."
        },
        {
          question: "Ek prompt ke andar sabse zyada attention aur importance kin words ko milti hai?",
          options: ["Shuru ke words (First 5-7 words)", "Bilkul aakhri words", "Sirf punctuation marks ko", "Sabhi words ko hamesha barabar attention milti hai"],
          correctIndex: 0,
          explanation: "Prompt ke initial words par attention weight sabse high hota hai, isliye core subject ko hamesha shuru mein likha jata hai."
        },
        {
          question: "Inme se kaunsa phrase prompt mein sabse kam useful filler word hai?",
          options: ["Volumetric lighting", "Subsurface scattering", "Please make a super awesome photo", "Octane render"],
          correctIndex: 2,
          explanation: "'Please make a super awesome photo' conversational filler hai jisse AI ko koi specific visual direction nahi milti."
        },
        {
          question: "3D render realism inject karne ke liye kaunse keywords industry-standard hain?",
          options: ["Unreal Engine 5, Octane Render, Ray Tracing", "MS Paint 1995", "Simple sketch style", "Low quality resolution"],
          correctIndex: 0,
          explanation: "Unreal Engine 5 aur Octane Render keywords AI ko advanced physically-based rendering (PBR) lighting replicate karne ke liye guide karte hain."
        },
        {
          question: "Universal prompt formula mein 'Lighting & Mood' kis stage par define karna chahiye?",
          options: ["Subject aur Environment ke baad, technical parameters se pehle", "Prompt ke bahar", "Kabhi nahi", "Sirf video editing ke time"],
          correctIndex: 0,
          explanation: "Formula order: Subject + Action/Pose + Environment + Lighting/Mood + Render Style + Parameters."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome back dosto! Aaj ke lesson mein hum AI prompting ki 'magic wand' ko crack karenge. Main aapko dikhaunga ki kaise ek simple amateur prompt ko professional Hollywood-level prompt mein transform kiya jata hai.",
        whatToShowOnScreen: "Midjourney / Flux interface open karein. Side-by-side prompt testing: Left par amateur 4-word prompt ka ordinary result, right par hamare formula wala rich prompt ka breathtaking render.",
        screenRecordingSteps: [
          "Step 1: Test 1 run karein: 'a 3d robot'. Output dikhayen aur limitations highlight karein.",
          "Step 2: Formula ke according tokens add karein: Material, lighting, lens aur render engine.",
          "Step 3: Test 2 run karein aur instant jump in quality live compare karein.",
          "Step 4: Token weighting concepts explain karein."
        ],
        voiceoverHindi: "Dekha aapne farq? Pehla result kitna flat aur cartoonish tha. Lekin jaise hi humne 'Octane Render, brushed titanium, volumetric lighting' add kiya, AI ne exact ray-traced reflections generate kar diye. Yahi difference hai ek beginner aur ek pro prompt engineer mein.",
        practicalDemo: "Live prompt anatomy dissection screen par color-coded boxes ke sath.",
        endingAndHomework: "Is formula ko save kar lijiye. Agle lesson mein hum specific 3D mesh aur character generation prompts ko master karenge!"
      }
    },
    {
      id: "m2-l2",
      moduleId: 2,
      lessonNumber: 2,
      title: "2. Writing professional 3D prompts",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Jab aap 3D modeling ya 3D character design ke liye prompts likhte hain, toh normal 2D photo prompts se keywords bohot alag hote hain. 

3D prompts mein aapko **Materials**, **Surface Texture**, **Mesh Topology**, aur **Geometry** ko accurately describe karna hota hai taaki AI model flat paintings generate na kare, balki ek actual tangible 3D asset create kare jise 3D software mein use kiya ja sake.

Zaroori 3D Keywords jo aapko master karne hain:
1. **Materials:** PBR materials, brushed titanium, polished obsidian, translucent silicone, matte clay sculpt, weathered brass.
2. **Surface Detail:** Micro-scratches, subsurface scattering (SSS for skin/flesh translucency), bevel edges, embossed normal map.
3. **Lighting & Render Style:** Global illumination, Ambient occlusion, Octane render, Redshift 3D, Unreal Engine 5 viewport.
4. **Presentation Angle:** 3D asset presentation, isolated on plain dark studio backdrop, 360 turntable concept, orthographic view.`,
      learningObjectives: [
        "2D photography prompts aur specialized 3D asset prompts ka structural difference samajhna.",
        "PBR (Physically Based Rendering) materials ko text prompts mein define karna.",
        "Subsurface Scattering (SSS) aur normal map keywords ka impact dekhna.",
        "3D mesh generation tools (Meshy AI, Tripo) ke liye prompt optimization seekhna."
      ],
      requiredTools: [
        "Web browser",
        "AI Image Generator (Midjourney / Flux)",
        "Meshy AI account"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Set Asset Presentation Format",
          description: "Use '3D asset isolate on neutral background, full body view, T-pose or A-pose' jab aapko model 3D software mein import karna ho."
        },
        {
          step: 2,
          title: "Define Exact Material Properties",
          description: "Specify: 'Armor made of matte carbon composite with gold accented trim and glowing plasma conduits'."
        },
        {
          step: 3,
          title: "Add PBR Rendering Tokens",
          description: "Append: 'PBR 4k textures, roughness map, ambient occlusion, high polygon count sculpt, Blender Cycles render'."
        }
      ],
      practicalExample: "Prompt for 3D Game Asset: 'Futuristic sci-fi energy blaster rifle, modular attachments, matte olive drab and orange polymer casing, weathered scratches, holographic ammo counter, isolated on solid gray studio background, 3D asset turntable view, Octane render, Unreal Engine 5 asset, 8k --ar 16:9'.",
      readyPrompts: [
        {
          title: "3D Character Asset Master Prompt",
          prompt: "Full-body 3D character concept of an armored cybernetic paladin, intricate filigree on titanium exoskeleton, translucent energy shield on forearm, neutral studio lighting, isolated on solid dark background, T-pose, 3D model render, ZBrush sculpt, Octane 3D, 8k --v 6.0 --ar 16:9",
          useCase: "Meshy AI ya 3D modeler mein import karne ke liye ideal character concept"
        }
      ],
      commonMistakes: [
        {
          mistake: "Background mein bohot cluttered jungle ya complex cities daal dena jab 3D asset model banana ho.",
          fix: "Agar aapko 3D model convert karna hai, toh background hamesha clean, neutral studio gray ya black rakhein."
        },
        {
          mistake: "Character ke haath aur legs cutoff ho jana.",
          fix: "Hamesha 'Full body view, entire character visible from head to toe, wide shot' add karein."
        }
      ],
      homework: "Ek futuristic prop ya weapon ka 3D asset prompt design karein aur verify karein ki usme material, render engine aur neutral background specified hai.",
      summary: "3D asset prompting mein material properties, subsurface scattering, ambient occlusion aur neutral studio isolation sabse vital factors hote hain.",
      quiz: [
        {
          question: "3D model generator (jaise Meshy AI) mein convert karne ke liye background kaisa hona chahiye?",
          options: ["Bohot cluttered aur crowded", "Isolated on plain neutral studio background", "Colorful graffiti se bhara hua", "Watermark ke sath"],
          correctIndex: 1,
          explanation: "Clean neutral background hone se AI 3D algorithm subject ko background se cleanly detach karke accurate 3D mesh geometry create karta hai."
        },
        {
          question: "Skin, wax ya translucent materials ke andar light penetrate hone ke effect ko kya kehte hain?",
          options: ["Subsurface Scattering (SSS)", "Motion blur", "Pixelation", "Lens flare"],
          correctIndex: 0,
          explanation: "Subsurface Scattering (SSS) realism ka core feature hai jisme light surface ke andar absorb hokar soft glow produce karti hai."
        },
        {
          question: "3D animation aur rigging ke liye character ka ideal starting pose kaunsa hota hai?",
          options: ["Lying flat on floor", "T-pose ya A-pose with limbs clearly separated", "Running fast", "Curled into a ball"],
          correctIndex: 1,
          explanation: "T-pose ya A-pose mein arms aur legs alag hote hain jisse automated rigging systems bones ko accurately place kar paate hain."
        },
        {
          question: "Inme se kaunsa keyword 3D modeling topology realism ko boost karta hai?",
          options: ["ZBrush sculpt, high polygon count, clean topology", "Low resolution JPEG", "Hand drawn crayon", "Monochrome scan"],
          correctIndex: 0,
          explanation: "ZBrush sculpting aur high polygon count keywords 3D high-density geometric details inspire karte hain."
        },
        {
          question: "PBR ka full form kya hai jo modern 3D gaming aur VFX mein use hota hai?",
          options: ["Public Broadcast Radio", "Physically Based Rendering", "Pixel Binary Resolution", "Portable Basic Rigging"],
          correctIndex: 1,
          explanation: "PBR = Physically Based Rendering, jo real-world physics ke according light aur surface reflections calculate karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Hello future 3D artists! Aaj hum seekhenge ki kaise specific 3D keywords use karke hum AI se aise renders nikal sakte hain jo seedha 3D software mein sculpt kiye hue lagte hain.",
        whatToShowOnScreen: "ZBrush aur Blender ke rendered models screen par open karein, sath hi prompt library se 3D asset prompts ka walkthrough dikhayein.",
        screenRecordingSteps: [
          "Step 1: 'T-pose character asset' prompt enter karein.",
          "Step 2: Neutral background token '--no background clutter, solid background' demonstrate karein.",
          "Step 3: PBR material terms jaise 'roughness, metallic, ambient occlusion' ko analyze karein.",
          "Step 4: Output render ko zoom karke surface micro-details highlight karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, neutral studio lighting ki wajah se character ke edges kitne crisp hain. Jab hum is image ko aage chal kar Meshy AI mein daalenge, toh bina kisi error ke perfect 3D .GLB file generate hogi. Yahi precision hume chahiye.",
        practicalDemo: "Studio backdrop lighting comparison aur limb separation analysis.",
        endingAndHomework: "Apna pehla 3D asset prompt generate kijiye. Agle lesson mein hum Negative Prompts ki powerful shield samjhenge jo 90% AI errors ko khatam karti hai!"
      }
    },
    {
      id: "m2-l3",
      moduleId: 2,
      lessonNumber: 3,
      title: "3. Negative prompts",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Positive prompt AI ko batata hai ki **kya create karna hai**, jabki **Negative Prompt** AI ko batata hai ki **kya bilkul avoid karna hai**!

AI image aur video generation mein sabse common problems hoti hain: distorted hands, extra fingers, blurry textures, bad anatomy, deformed faces, mutated limbs, aur low quality artifacts.

Negative prompting ek filter ki tarah kaam karta hai jo latent space mein un unwanted directions ko block kar deta hai. Stable Diffusion, Leonardo AI aur professional workflows mein negative prompt ka ek dedicated parameter box hota hai. Midjourney mein iske liye \`--no\` flag use kiya jata hai.

**Master Negative Prompt Formula for 3D AI:**
\`deformed, bad anatomy, extra limbs, extra fingers, mutated hands, missing fingers, poorly drawn hands, poorly drawn face, blurry, low resolution, watermark, signature, text, oversaturated, flat lighting, 2d illustration, cartoonish, low poly, noisy background\``,
      learningObjectives: [
        "Negative Prompting ke underlying mathematical repulsion mechanism ko samajhna.",
        "AI anatomy distortions (hands, faces, duplicate limbs) ko prevent karna.",
        "Different platforms (Midjourney '--no', Stable Diffusion/Leonardo negative box) par syntax use karna.",
        "Clean, production-ready 3D renders extract karna."
      ],
      requiredTools: [
        "Web browser",
        "Leonardo AI or Stable Diffusion / Midjourney account",
        "Negative prompt cheat sheet"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Anatomy Exclusion",
          description: "Always filter biological errors: 'mutated hands, poorly formed fingers, extra limbs, asymmetrical eyes'."
        },
        {
          step: 2,
          title: "Style & Medium Exclusion",
          description: "When aiming for 3D realism, exclude 2D artifacts: '2d drawing, anime, cartoon, sketch, painting, watercolor'."
        },
        {
          step: 3,
          title: "Artifacts & Noise Exclusion",
          description: "Filter compression flaws: 'jpeg artifacts, blur, watermark, grainy, out of frame, cropped head'."
        }
      ],
      practicalExample: "Prompt: 'A futuristic cybernetic warrior'. Without Negative: Face blurred, 6 fingers on right hand, weird text watermark in corner. With Master Negative Prompt: Razor-sharp facial features, anatomically accurate 5 fingers, pristine cinematic render without any stray artifacts!",
      readyPrompts: [
        {
          title: "Universal 3D Negative Prompt Pack",
          prompt: "ugly, deformed, disfigured, poor anatomy, bad hands, missing fingers, extra digits, cropped, low quality, pixelated, blurry, draft, grain, text, watermark, signature, logo, 2d, flat anime style, poorly rendered face, floating limbs",
          useCase: "Stable Diffusion, Leonardo AI, aur video generation platforms ke negative prompt field mein paste karne ke liye"
        }
      ],
      commonMistakes: [
        {
          mistake: "Positive prompt mein 'no extra fingers' ya 'don't make ugly' likhna.",
          fix: "AI negation words jaise 'no' ya 'don't' ko direct prompt mein ignore karta hai aur 'fingers' aur 'ugly' word ko associate kar leta hai! Negation hamesha dedicated Negative Prompt box ya '--no' flag mein dalein."
        },
        {
          mistake: "Bohot zyada excessive irrelevant words bhar dena.",
          fix: "Sirf un unwanted features ko specify karein jo actually us particular model mein appear hone ka risk ho."
        }
      ],
      homework: "Ek character render run karein pehle bina negative prompt ke aur fir negative prompt ke sath, aur dono ke hands aur face details ka side-by-side comparison note karein.",
      summary: "Negative prompts AI ke un-wanted latent spaces ko prune karte hain, jisse mutated hands, blurriness aur 2D artifacts eliminate hote hain aur output professional banta hai.",
      quiz: [
        {
          question: "Agar aap positive prompt mein likhte hain 'A cool car, don't add trees', toh AI kya react karega?",
          options: ["AI trees bilkul nahi banayega", "AI 'trees' word capture karke trees add kar sakta hai kyunki wo natural negation nahi samajhta", "Computer band ho jayega", "Car invisible ho jayegi"],
          correctIndex: 1,
          explanation: "Generative models keywords par focus karte hain, direct prompt mein 'don't add trees' likhne par aksar trees generate ho jate hain. Iske liye Negative prompt use karna chahiye."
        },
        {
          question: "Midjourney mein negative prompting ke liye kaunsa command parameter use hota hai?",
          options: ["--avoid", "--no [keyword]", "--delete", "--cancel"],
          correctIndex: 1,
          explanation: "Midjourney mein '--no' parameter use hota hai (e.g. '--no text blur watermark')."
        },
        {
          question: "3D cinematic realism ke liye inme se kin styles ko negative prompt mein daalna chahiye?",
          options: ["2d, anime, cartoon, sketch, painting", "8k, high quality", "Unreal Engine 5", "Photorealistic"],
          correctIndex: 0,
          explanation: "2D drawing, anime aur sketch styles ko negative prompt mein daalne se AI forced ho jata hai physical 3D rendering deliver karne ke liye."
        },
        {
          question: "Negative prompt ka primary purpose kya hota hai?",
          options: ["Internet speed fast karna", "Unwanted artifacts, anatomical errors aur low-quality traits ko mathematically block karna", "Video ki sound badhana", "Blender ko restart karna"],
          correctIndex: 1,
          explanation: "Negative prompt AI ke sampling steps ke doran unwanted visual patterns ko suppress aur penalize karta hai."
        },
        {
          question: "Sabse common biological issue jo AI generation mein hota hai aur negative prompt se fix hota hai wo kya hai?",
          options: ["Extra fingers aur mutated hands", "Speakers ka volume", "Mouse pointer", "Battery consumption"],
          correctIndex: 0,
          explanation: "AI diffusion models ke liye hands aur fingers generate karna historically tricky hota hai, jise rigorous negative prompts stabilize karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Kitni baar aisa hua hai ki aapne ek shaandaar prompt likha, par character ke haath mein 6 ungliyan ya ajeeb chehra nikal aaya? Aaj ke lesson mein hum is problem ko hamesha ke liye khatam karenge Negative Prompts ki madad se.",
        whatToShowOnScreen: "Leonardo AI dashboard open karein. Negative Prompt box ko enable karein. Ek common bad render show karein, fir master negative keywords paste karke fresh render generate karein.",
        screenRecordingSteps: [
          "Step 1: Leonardo AI settings mein 'Add Negative Prompt' toggle enable karein.",
          "Step 2: Negative prompt library se core anatomy keywords paste karein.",
          "Step 3: Midjourney version mein '--no text, watermark, bad hands' demonstrate karein.",
          "Step 4: Output render zoom karke fingers aur symmetry check karein."
        ],
        voiceoverHindi: "Dosto screen par dekhiye. Pehle render mein right hand par weird distortion tha. Lekin jaise hi humne negative prompt list lagayi, neural weights ne un bad anatomical patterns ko reject kar diya aur hume mila ek pristine 3D sculpt. Is master list ko copy karke apne paas save kar lijiye.",
        practicalDemo: "Hand-anatomy comparison slider drag karke live differences demonstrate karna.",
        endingAndHomework: "Is negative pack ko apne daily workflow ka hissa banayein. Agle lesson mein hum Cinematic Camera Prompts ko master karenge!"
      }
    },
    {
      id: "m2-l4",
      moduleId: 2,
      lessonNumber: 4,
      title: "4. Cinematic camera prompts",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Hollywood movies aur high-budget commercials itne engaging kyu lagte hain? The secret is **Cinematography & Camera Movement**!

Agar aapka prompt simple 'a character standing' hoga, toh visual flat aur boring lagega. Lekin jab aap professional camera terminology inject karte hain, toh AI ek virtual camera rig create karta hai jisme focal length, aperture depth, aur dynamic angles simulate hote hain.

Cinematic Camera Terminology Blueprint:
1. **Camera Angles:**
   - **Low-Angle Hero Shot:** Character niche se shoot hota hai, jisse wo powerful aur majestic dikhta hai.
   - **High-Angle / God Eye View:** Top-down angle jo scale aur geography dikhata hai.
   - **Dutch Angle (Tilted):** Camera thoda tilt hota hai jo tension aur drama create karta hai.
   - **Over-The-Shoulder (OTS):** Conversation ya confrontation scenes ke liye.
2. **Camera Lenses & Optics:**
   - **85mm / 105mm Portrait Lens:** Creamy bokeh, blurred background, razor-sharp subject isolation.
   - **24mm Wide-Angle Lens:** Grand epic landscapes aur architectural scale.
   - **Anamorphic Lens:** 2.39:1 widescreen cinemascope, horizontal blue lens flares, oval bokeh.
3. **Motion Directives (AI Video):**
   - **Dolly Zoom (Vertigo effect), Orbiting 360 Pan, FPV Drone Dive, Steadicam tracking shot.**`,
      learningObjectives: [
        "Cinematic camera angles aur focal lengths ko prompts mein articulate karna.",
        "Anamorphic lenses aur bokeh depth-of-field simulate karna.",
        "AI Video engines (Runway/Luma) ke liye dynamic camera trajectory prompts likhna.",
        "Visual storytelling aur emotional mood camera framing se build karna."
      ],
      requiredTools: [
        "Web browser",
        "AI Image / Video generator",
        "Camera terminology visual chart"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select the Emotional Angle",
          description: "Heroic feel ke liye: 'Low-angle upward perspective shot'. Vulnerable feel ke liye: 'High-angle aerial looking down'."
        },
        {
          step: 2,
          title: "Define Lens & Depth of Field",
          description: "Add: 'Shot on ARRI Alexa 65, 85mm prime lens, f/1.4 aperture, creamy bokeh, shallow depth of field'."
        },
        {
          step: 3,
          title: "Specify Cinematic Movement for Video",
          description: "Video generators mein add karein: 'Slow dramatic push-in dolly tracking shot, cinematic parallax movement'."
        }
      ],
      practicalExample: "Scene: A cyber ninja on a rooftop. Flat Prompt: 'Cyber ninja on roof'. Cinematic Camera Prompt: 'Extreme low-angle upward cinematic shot of a cyber ninja standing at the edge of a skyscraper, shot on 35mm anamorphic lens, dramatic widescreen ratio, subtle blue lens flare, shallow depth of field with city lights softly blurred behind, cinematic composition --ar 21:9'. Output looks like a multimillion-dollar Hollywood movie trailer!",
      readyPrompts: [
        {
          title: "Anamorphic Cinematic Action Frame",
          prompt: "Cinematic low-angle medium shot of a futuristic bounty hunter walking through a neon-lit rainstorm, shot on ARRI Alexa with anamorphic 50mm lens, f/1.8, horizontal streak flares, shallow depth of field, sharp foreground focus, volumetric rain droplets, 8k --ar 2.39:1",
          useCase: "Hollywood-grade movie frame composition"
        }
      ],
      commonMistakes: [
        {
          mistake: "Focal length aur shot type contradictory likhna (e.g. 'Extreme close-up wide angle fisheye portrait').",
          fix: "Shot distance aur lens ko match karein: Portraits ke liye 85mm+, Landscapes ke liye 24mm-35mm."
        },
        {
          mistake: "Aspect ratio mention na karna.",
          fix: "Cinematic shots ke liye hamesha widescreen aspect ratio use karein jaise '--ar 16:9' ya '--ar 21:9' (Cinemascope)."
        }
      ],
      homework: "Ek hi subject (jaise ek futuristic car) ke do alag camera angles generate karein: 1) Low-angle Hero shot, 2) Drone Aerial top-down view, aur compare karein.",
      summary: "Cinematic camera prompts (angles, lenses, depth of field, anamorphic ratio) ordinary renders ko Hollywood movies ke cinematics mein elevate kar dete hain.",
      quiz: [
        {
          question: "Character ko powerful aur majestic dikhane ke liye kaunsa camera angle sabse best hota hai?",
          options: ["High-angle (looking down)", "Low-angle hero shot (looking up)", "Extreme macro eye shot", "Bird's eye view"],
          correctIndex: 1,
          explanation: "Low-angle hero shot mein camera niche se upar dekhta hai, jisse character massive, dominant aur heroic lagta hai."
        },
        {
          question: "Background ko beautifully blur karke subject ko sharp rakhne wale optical effect ko kya kehte hain?",
          options: ["Shallow depth of field / Bokeh", "Motion blur", "Pixelation", "Desaturation"],
          correctIndex: 0,
          explanation: "Shallow depth of field (low f-stop jaise f/1.4 ya f/1.8) background ko creamy bokeh mein blur karta hai jisse subject instantly pop karta hai."
        },
        {
          question: "Hollywood blockbuster movies mein widescreen format ke liye kaunsa lens style mashhoor hai?",
          options: ["Anamorphic lens with horizontal flares", "Toy microscope lens", "Disposable camera lens", "Security CCTV lens"],
          correctIndex: 0,
          explanation: "Anamorphic lenses wide 2.39:1 aspect ratio aur signature horizontal blue/gold streak flares provide karte hain."
        },
        {
          question: "Video generation mein camera ko subject ki taraf aage badhane wale motion ko kya kehte hain?",
          options: ["Dolly In / Push-in shot", "Dutch roll tilt", "Static freeze", "Fade to black"],
          correctIndex: 0,
          explanation: "Dolly In (Push-in) shot camera ko physical space mein subject ki taraf aage push karta hai jo drama intensify karta hai."
        },
        {
          question: "Epic wide landscapes aur cityscapes capture karne ke liye kaunsi focal length ideal hoti hai?",
          options: ["Wide-angle lens (24mm - 35mm)", "Super telephoto 800mm", "Microscopic lens", "Fishhook lens"],
          correctIndex: 0,
          explanation: "24mm to 35mm wide-angle lenses broad field of view provide karte hain jo scale aur environment ko highlight karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Namaste creators! Ek amateur video aur Christopher Nolan ki movie mein sabse bada difference camera language ka hota hai. Is lesson mein hum AI ko virtual camera operator banana seekhenge.",
        whatToShowOnScreen: "Different focal length visual charts (24mm, 50mm, 85mm, 200mm) screen par explain karein. Uske baad live AI generator mein prompt parameters change karke camera framing ka transformation dikhayein.",
        screenRecordingSteps: [
          "Step 1: 'Eye-level generic shot' prompt dikhayein.",
          "Step 2: Modify karke 'Low-angle hero perspective, 85mm f/1.4 anamorphic' inject karein.",
          "Step 3: Aspect ratio parameter '--ar 21:9' set karein.",
          "Step 4: Result analyze karein aur depth of field bokeh highlight karein."
        ],
        voiceoverHindi: "Dhyan se dekhiye dosto, jaise hi humne anamorphic lens aur low-angle specify kiya, background automatically cinematic blur mein chala gaya aur humara character ek multi-million dollar film ka protagonist lag raha hai. Camera language mastering is true directing!",
        practicalDemo: "Camera angle slider manipulation and depth-of-field visual breakdown.",
        endingAndHomework: "Apna cinematic camera experiment execute karein. Agle lesson mein hum Lighting aur Environment ke magical formulas explore karenge!"
      }
    },
    {
      id: "m2-l5",
      moduleId: 2,
      lessonNumber: 5,
      title: "5. Lighting and environment prompts",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `3D graphics aur cinema mein ek mashhoor kahawat hai: *"Lighting is everything."* Chahe aapka 3D model kitna bhi acha ho, agar lighting flat aur lifeless hai, toh final output bilkul dull dikhega.

Professional Cinematic Lighting Archetypes:
1. **Volumetric Lighting (God Rays / Crepuscular Rays):**
   Hawa mein dhuaan, dhool ya fog hoti hai jisme se light beams visible hokar travel karti hain. Yeh scene mein instant spiritual ya mysterious depth daalti hai.
2. **Rim Lighting / Edge Lighting / Kicker:**
   Subject ke peeche se aane wali sharp light jo uske body contours aur shoulders ko background se alag karti hai. Sci-Fi aur Action scenes ke liye compulsory.
3. **Chiaroscuro & Film Noir (High Contrast):**
   Heavy dramatic shadows aur intense highlights ka play jo suspense aur thriller mood create karta hai.
4. **Bioluminescent & Neon Cyber Lighting:**
   Glowing plants, futuristic neon tubes, cybernetic LED accents jo dark purple, electric blue aur cyan reflections throw karte hain.
5. **Golden Hour & Blue Hour:**
   Sunrise ya sunset ke theek baad ka warm golden glow ya dusk ka deep moody blue tone.`,
      learningObjectives: [
        "Volumetric lighting, God rays aur fog simulation prompts likhna.",
        "Rim lighting aur 3-point studio lighting setup recreate karna.",
        "Atmospheric particles (rain, embers, dust, snow) blend karna.",
        "Mood, tone aur color temperature ko light prompts se manipulate karna."
      ],
      requiredTools: [
        "Web browser",
        "AI Image Generator",
        "Color temperature chart"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Primary Key Light & Color Temperature",
          description: "E.g., 'Warm golden sunlight at 3200k' ya 'Cool cyan moonlight at 6500k'."
        },
        {
          step: 2,
          title: "Add Rim Lighting for Edge Definition",
          description: "Always include: 'Intense magenta rim lighting sculpting the silhouettes, glowing edge separation'."
        },
        {
          step: 3,
          title: "Inject Atmospheric Density",
          description: "Keywords: 'Volumetric god rays filtering through dense haze, airborne floating dust motes, misty fog'."
        }
      ],
      practicalExample: "Prompt: 'An ancient warrior standing inside a forgotten cavern, illuminated by glowing cyan bioluminescent moss, dramatic golden god rays streaming through a cracked cavern ceiling, atmospheric dust motes floating in light beams, heavy shadows, cinematic chiaroscuro, Octane 3D render, 8k --ar 16:9'. Result: Ethereal, breathtaking museum-grade visuals!",
      readyPrompts: [
        {
          title: "Volumetric Cyber God-Rays Scene",
          prompt: "Futuristic android sitting on a minimalist throne inside a brutalist cathedral, dramatic volumetric god rays breaking through giant stained glass windows, intense rim light, floating dust particles, moody shadows, cinematic lighting, 8k resolution, octane render --ar 16:9",
          useCase: "Atmospheric depth aur volumetric lighting demonstration"
        }
      ],
      commonMistakes: [
        {
          mistake: "Prompt mein 'bright sunny day' likh kar cinematic mood expect karna.",
          fix: "Harsh direct sunlight visuals ko flat karti hai. Hamesha directional lighting specify karein jaise 'rim light, dramatic backlight, volumetric mist'."
        },
        {
          mistake: "Atmospheric particles bhool jana.",
          fix: "Light beams ko visualize karne ke liye scene mein haze, fog ya dust zaroor specify karein."
        }
      ],
      homework: "Ek dark environment scene design karein jisme kam se kam do contrasting light sources hon (jaise warm orange torchlight aur cool blue moonlight).",
      summary: "Volumetric God rays, rim lighting, atmospheric haze aur color temperature prompts ordinary scenes ko breathtaking cinematic masterpieces mein transform karte hain.",
      quiz: [
        {
          question: "Hawa mein mist ya fog ke through aane wali visible light beams ko technical terms mein kya kehte hain?",
          options: ["Volumetric Lighting / Crepuscular God Rays", "Flat shading", "Color grading", "Monochrome pass"],
          correctIndex: 0,
          explanation: "Volumetric lighting (God rays) tab generate hoti hai jab light atmospheric particles (fog, smoke, dust) se scatter hokar visible beams banati hai."
        },
        {
          question: "Character ke body edges ko dark background se alag karne ke liye kaunsi light use hoti hai?",
          options: ["Rim Light / Backlight / Kicker", "Direct Flash", "Under-chin flashlight", "Ceiling tube light"],
          correctIndex: 0,
          explanation: "Rim lighting subject ke pichle hisse se aati hai jo contours par thin glowing outline banakar subject ko background se detach karti hai."
        },
        {
          question: "High contrast aur deep dramatic shadows wale classic cinema lighting style ko kya kehte hain?",
          options: ["Chiaroscuro", "Watercolor", "Flat daylight", "Whiteboard style"],
          correctIndex: 0,
          explanation: "Chiaroscuro Italian art aur film noir ka concept hai jo strong light aur dark contrast ke through dramatic tension build karta hai."
        },
        {
          question: "Light beams ko hawa mein dikhane ke liye prompt mein kaunse atmospheric element add karna zaroori hai?",
          options: ["Atmospheric haze, volumetric fog, floating dust motes", "Empty vacuum", "Clean white glass", "Plastic wrap"],
          correctIndex: 0,
          explanation: "Bina fog ya dust ke light beams invisible rehti hain. Light scattering ke liye particles zaroori hote hain."
        },
        {
          question: "Sunset ya sunrise ke theek baad aane wali warm, golden visual lighting ko cinematography mein kya kehte hain?",
          options: ["Golden Hour", "Rush Hour", "Lunch break", "Midnight shift"],
          correctIndex: 0,
          explanation: "Golden Hour day ka sabse magical time hota hai jab sun low angle par soft, warm aur long dramatic shadows produce karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum light ke magician banne wale hain. Light hi wo tool hai jo kisi bhi 3D scene mein jaan phookti hai. Is lesson mein hum 5 professional lighting setups live test karenge.",
        whatToShowOnScreen: "Side-by-side prompt variations: Flat ambient light vs Volumetric Rim Light. Screen par photon scattering aur god rays ka live comparison dikhayein.",
        screenRecordingSteps: [
          "Step 1: Test scene setup karein 'Cyberpunk room with flat white light'.",
          "Step 2: Keywords inject karein: 'Volumetric magenta fog, cyan rim light, dramatic shadows'.",
          "Step 3: Particle tokens add karein: 'Floating glowing embers, wet floor reflections'.",
          "Step 4: Output render inspect karein aur photon paths analyze karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, jaise hi humne volumetric fog aur rim lighting add kiya, flat render achanak ek 3D immersive world ban gaya. Shadows depth create karti hain aur light focus guide karti hai. Is formula ko hamesha yaad rakhein.",
        practicalDemo: "Lighting temperature contrast demonstration (Orange vs Teal color grading in prompt).",
        endingAndHomework: "Apna lighting experiment complete kijiye. Agle lesson mein hum Advanced Master Prompts ko unpack karenge!"
      }
    },
    {
      id: "m2-l6",
      moduleId: 2,
      lessonNumber: 6,
      title: "6. Advanced prompt examples",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ab jab aapne Tokens, 3D Materials, Negative Prompts, Camera Optics aur Lighting setups master kar liye hain, ab samay hai in sabhi components ko combine karke **Production-Ready Master Prompts** generate karne ka!

Is lesson mein hum 4 advanced production-ready categories ke master prompt blueprints dissect karenge:
1. **Photorealistic Sci-Fi Character (Game-Ready & Film-Ready)**
2. **Atmospheric Environment & World-Building Scene**
3. **High-End Commercial Product Animation Concept**
4. **Dynamic AI Video Motion Sequence Prompt**

Har prompt ke andar ke specific keywords ko analyze karenge taaki aap samajh sakein ki har word AI ke internal neural weights ko kaise steer kar raha hai. Yeh prompts aap seedha copy-paste karke apne commercial projects ke liye use kar sakte hain.`,
      learningObjectives: [
        "Multi-layered complex prompts ko construct aur disassemble karna.",
        "Character, Environment, Product aur Action prompts ke specialized templates learn karna.",
        "Prompt tuning: 10% change se output ko 200% better banana.",
        "Module 2 ke sabhi prompt skills ko real-world portfolio assets mein translate karna."
      ],
      requiredTools: [
        "Web browser",
        "Master Prompt Library (Dashboard)",
        "Midjourney / Flux / RunwayML"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select your Production Archetype",
          description: "Decide whether your shot is a Character Hero shot, an Environment establishing shot, or a Product showcase."
        },
        {
          step: 2,
          title: "Stack the Technical Modifiers",
          description: "Combine camera lens (85mm anamorphic), lighting (volumetric rim light), materials (brushed carbon fiber), render engine (Unreal Engine 5)."
        },
        {
          step: 3,
          title: "Fine-tune Weighting and Parameters",
          description: "Set aspect ratio (--ar 16:9), stylize values, and feed into negative prompt filters."
        }
      ],
      practicalExample: "Luxury Product Showcase: 'Macro commercial shot of a futuristic obsidian and sapphire luxury smartwatch, intricate mechanical exposed tourbillon gears, subtle water droplets on anti-reflective sapphire glass, isolated on polished black mirror surface, dramatic cyan and white studio rim lighting, Hasselblad H6D-100c medium format, Octane render, photorealistic, 8k --ar 16:9'. Result: Apple/Rolex level commercial render!",
      readyPrompts: [
        {
          title: "Production Master: Cyberpunk Mech Warrior",
          prompt: "Full-body cinematic portrait of a heavy armored cybernetic mech pilot, distressed carbon composite battle armor with glowing cyan telemetry markings, open cockpit helmet revealing determined eyes with biometric HUD reflections, standing in a rainy futuristic hangar, dramatic rim lighting, steam venting from shoulder exhausts, shot on 65mm ARRI, photorealistic, Unreal Engine 5 render, 8k resolution --ar 16:9 --style raw",
          useCase: "Complete character portfolio asset prompt"
        },
        {
          title: "Production Master: Alien Jungle World",
          prompt: "Cinematic wide-angle establishing shot of an alien bioluminescent jungle at night, massive towering glowing purple flora with spiraling luminous roots, sparkling airborne pollen drifting in volumetric mist, distant twin moons illuminating crystal waterfall, octane render, photorealistic, 8k --ar 21:9",
          useCase: "Epic environment concept blueprint"
        }
      ],
      commonMistakes: [
        {
          mistake: "Prompt ko over-complicate karke 500 words ka essay bana dena.",
          fix: "Optimum prompt length 40 se 80 targeted words hoti hai. Excessive words token dilution cause karte hain."
        },
        {
          mistake: "Prompt parameters (--ar, --v, --no) mein spelling ya spacing mistakes karna.",
          fix: "Parameters hamesha prompt ke end mein double hyphen (--) aur single space ke sath likhein."
        }
      ],
      homework: "Course ki prompt library se 2 prompts uthayein, unme apne manpasand changes (color scheme, subject) inject karein aur unka output render save karein.",
      summary: "Advanced prompt engineering technical descriptors, optical science aur creative vision ka synthesis hai. Right prompt structure se aap directly Hollywood-caliber concept art generate kar sakte hain.",
      quiz: [
        {
          question: "High-end commercial product animation prompts mein kaunse details realism add karte hain?",
          options: ["Macro lens, surface water droplets, micro-scratches, polished reflections, studio lighting", "Blurry textures and low resolution", "Hand written text", "Out of focus camera"],
          correctIndex: 0,
          explanation: "Macro camera lenses, subtle micro-imperfections (scratches, water droplets) aur clean studio rim lighting commercial level realism deliver karte hain."
        },
        {
          question: "Prompt ke end mein parameters (jaise aspect ratio ya version) likhne ka standard format kya hota hai?",
          options: ["Double hyphen ke sath space dekar (--ar 16:9)", "Commas lagakar text ke beech mein", "Bracket ke andar bina space ke", "Parenthesis mein"],
          correctIndex: 0,
          explanation: "Standard CLI syntax '--ar 16:9' ya '--no blur' format follow karta hai jise parsers accurately recognize karte hain."
        },
        {
          question: "Generative AI models ke liye ideal targeted prompt length kitni maani jaati hai?",
          options: ["1 single word", "40 se 80 concise, keyword-dense words", "5000 words ka lamba novel", "Sirf numbers"],
          correctIndex: 1,
          explanation: "40 se 80 targeted keywords token attention span ko optimize karte hain bina dilution ke."
        },
        {
          question: "Shot mein depth aur scale create karne ke liye establishes shot ke sath kaunsa aspect ratio best rehta hai?",
          options: ["1:1 square", "21:9 Cinemascope ya 16:9 Widescreen", "9:16 vertical only", "2:3 small photo"],
          correctIndex: 1,
          explanation: "21:9 Cinemascope aur 16:9 widescreen human eye ke horizontal peripheral vision ko simulate karte hain, jo epic environments ke liye standard hai."
        },
        {
          question: "Token Dilution ka kya matlab hota hai prompt engineering mein?",
          options: ["Jab prompt mein itne zyada irrelevant words ho jayein ki AI core subject par focus kho deta hai", "Jab computer ka internet band ho jata hai", "Jab monitor ki brightness kam ho jaati hai", "Jab image download nahi hoti"],
          correctIndex: 0,
          explanation: "Token Dilution tab hoti hai jab prompt bohot lamba aur repetitive ho jata hai, jisse attention weights thin fail jaate hain aur primary subject ka focus weak ho jata hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 2 ke final lesson mein aapka swagat hai. Aaj humne jo kuch bhi seekha hai usko assemble karke hum Hollywood-caliber production master prompts execute karenge.",
        whatToShowOnScreen: "Live screen par complete prompt anatomy breakdown. Character, Environment aur Product archetypes ka render generation demo with live output review.",
        screenRecordingSteps: [
          "Step 1: Mech pilot master prompt paste karein aur key modifier tags highlight karein.",
          "Step 2: Generation process aur step denoiser visualize karein.",
          "Step 3: High resolution render ko zoom in karke textures, eye HUD reflections aur rim light inspect karein.",
          "Step 4: Module 2 wrap-up aur prompt library resource folder tour."
        ],
        voiceoverHindi: "Look at this masterpiece! Har ek screw, carbon fiber texture, aur volumetric steam bilkul cinematic movie frame lag raha hai. Ab aapke paas prompt engineering ka complete secret formula hai. Module 2 ka quiz complete kijiye. Module 3 mein hum AI Image Generation ke through consistent 3D characters create karna seekhenge!",
        practicalDemo: "High-resolution 8K zoom examination and token weight tweaking.",
        endingAndHomework: "Module 2 quiz submit karein aur prompt library download karein. Milte hain Module 3 mein!"
      }
    }
  ]
};

