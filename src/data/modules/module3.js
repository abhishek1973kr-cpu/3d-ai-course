export const module3 = {
  id: 3,
  slug: "ai-image-generation",
  title: "MODULE 3: AI IMAGE GENERATION",
  subtitle: "3D Characters, Photorealistic Environments aur Consistent Reference Images",
  description: "High-resolution 2D concepts jo baad mein 3D models aur AI videos mein convert honge. Character consistency, multi-angle sheets aur aspect ratio mastery.",
  icon: "Image",
  badge: "Visual Foundation",
  totalLessons: 5,
  totalDuration: "72 min",
  lessons: [
    {
      id: "m3-l1",
      moduleId: 3,
      lessonNumber: 1,
      title: "1. Creating 3D characters",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek memorable 3D animated video ka dil hota hai uska **Character**! Chahe wo ek Pixar-style cute robot ho, futuristic cyborg warrior ho, ya fantasy creature.

Jab hum AI ke through character design karte hain, toh hume aisi image chahiye hoti hai jo baad mein 3D software ya Meshy AI mein aasani se convert ho sake. Iske liye character ka pose, lighting, aur silhouette bilkul clear hona chahiye.

3D Character Creation ke 3 Golden Rules:
1. **Clear Silhouette:** Character ke haath-pair body se thode alag hone chahiye (A-Pose ya T-Pose) taaki 3D mesh extraction ke time geometry aapas mein chipak na jaye.
2. **Neutral Studio Lighting:** High contrast shadows se bachein. Soft diffused studio lighting se front, back aur side details barabar visible rehti hain.
3. **Turnaround / Character Sheet:** Agar possible ho, toh 'multiple angles character sheet, front view, side view, back view' generate karein jo 3D modeling ke liye perfect blueprint banta hai.`,
      learningObjectives: [
        "Production-ready 3D character concepts design karna.",
        "A-pose aur T-pose prompt generation master karna.",
        "Character sheets (front, side, three-quarter view) create karna.",
        "Stylized (Pixar/Disney) vs Photorealistic 3D aesthetics choose karna."
      ],
      requiredTools: [
        "Web browser",
        "Midjourney / FLUX.1 / Leonardo AI",
        "Reference character moodboard"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Define Character Archetype & Style",
          description: "Decide whether your style is Pixar-style Stylized 3D, Cyberpunk realism, or Claymation."
        },
        {
          step: 2,
          title: "Prompt for Staging & Pose",
          description: "Use: 'Full-body character model sheet, standing in relaxed A-pose, neutral studio lighting, isolated on solid gray background'."
        },
        {
          step: 3,
          title: "Describe Clothing & Distinctive Features",
          description: "Add identifiable visual markers: 'Wearing vibrant orange flight jacket with tactical harness, holographic visor, white robotic boots'."
        }
      ],
      practicalExample: "Stylized Pixar Character Prompt: 'Full-body 3D character design of an adorable adventurous young inventor girl with messy brown hair and brass goggles, wearing a cozy oversized knit sweater and denim overalls, cute friendly expression, soft subsurface scattering, Pixar 3D animation style, Disney render, neutral gray studio background, 8k --ar 16:9'.",
      readyPrompts: [
        {
          title: "Pixar-Style 3D Character Concept",
          prompt: "Full-body 3D character concept of a charismatic cute robot explorer with glowing teal expressive digital eyes, polished white ceramic body with yellow accent stripes, standing in A-pose, soft studio lighting, Pixar render style, Unreal Engine 5, isolated on light gray background, 8k --ar 16:9",
          useCase: "Pixar / Disney style 3D character modeling base"
        }
      ],
      commonMistakes: [
        {
          mistake: "Character ke haath jeb (pockets) mein daal dena ya arms fold karwana.",
          fix: "3D conversion ke liye limbs hamesha open aur visible hone chahiye, pocketed hands 3D mesh ruin kar dete hain."
        },
        {
          mistake: "Dark moody lighting use karna jisme character ka aadha chehra chhip jaye.",
          fix: "Character reference generation ke doran soft, even studio lighting use karein."
        }
      ],
      homework: "Ek cute stylized 3D character (jaise animal ya friendly robot) ka A-pose concept prompt compose karein aur image generate karein.",
      summary: "3D character generation mein A-pose, neutral studio background, aur clear silhouette sabse zaroori hain taaki 3D modeling stage par error-free mesh extract ho sake.",
      quiz: [
        {
          question: "3D model extraction ke liye character ka sabse behtareen starting pose kaunsa hota hai?",
          options: ["Sitting on a sofa", "A-Pose ya T-Pose with arms slightly away from torso", "Sleeping on ground", "Running backwards"],
          correctIndex: 1,
          explanation: "A-Pose ya T-Pose mein limbs clearly separated hote hain jisse 3D AI algorithms har arm aur leg ki boundary accurately detect kar paate hain."
        },
        {
          question: "Character ke clothing aur facial features ko 3D software ke liye inspect karne ke liye lighting kaisi honi chahiye?",
          options: ["Soft diffused neutral studio lighting", "Pitch black darkness", "Direct harsh flashlight", "Heavy red strobe light"],
          correctIndex: 0,
          explanation: "Soft diffused studio lighting uniform visibility deti hai jisse textures aur mesh details evenly extract hote hain."
        },
        {
          question: "Ek hi image mein character ke front view, side view aur back view hone ko kya kehte hain?",
          options: ["Audio track", "Character Model Sheet / Turnaround sheet", "PDF report", "Subtitles file"],
          correctIndex: 1,
          explanation: "Character model sheet ya turnaround sheet 3D modelers ke liye universal orthographic reference hota hai."
        },
        {
          question: "Pixar ya Disney jaisa soft, friendly aesthetic pane ke liye prompt mein kaunsa keyword use hota hai?",
          options: ["Pixar 3D animation style, cute stylized character, soft SSS lighting", "Horror gore zombie", "80s black and white VHS", "Low poly flat shading"],
          correctIndex: 0,
          explanation: "Pixar 3D style aur stylized subsurface scattering warm, lovable cartoonish aesthetic produce karte hain."
        },
        {
          question: "Agar character ke haath pockets mein hain, toh 3D modeling stage par kya problem aayegi?",
          options: ["Blender crash ho jayega", "3D mesh haath aur pant ko ek hi solid polygon block mein merge kar dega", "Computer ka fan tez chalega", "Color black ho jayega"],
          correctIndex: 1,
          explanation: "Separated fingers na hone par AI model geometry ko coat ya pant ke sath fused block bana deta hai jise rig karna impossible hota hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum apna pehla original 3D character design karne ja rahe hain. Main aapko sikhane wala hoon ki kaise Pixar-style cute characters aur Hollywood cyborgs ko 3D-ready poses mein generate kiya jata hai.",
        whatToShowOnScreen: "Midjourney / Leonardo web app open karein. Live prompt input: '3D character model sheet in A-pose'. Render result inspect karein aur limb separation highlight karein.",
        screenRecordingSteps: [
          "Step 1: Style keywords 'Pixar style, Disney 3D, soft subsurface scattering' enter karein.",
          "Step 2: Pose instruction 'relaxed A-pose, hands open, neutral studio backdrop' add karein.",
          "Step 3: Aspect ratio 16:9 set karein aur upscale button click karein.",
          "Step 4: Output character ke textures aur eye reflections review karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, character ke arms torso se kitne cleanly separated hain. Iska fayda yeh hoga ki jab hum agle module mein ise Meshy AI mein 3D model banayenge, toh bones bilkul perfectly align hongi bina kisi glitch ke.",
        practicalDemo: "Character silhouette inspection using high-contrast black/white mask.",
        endingAndHomework: "Apna pehla character concept render karein. Agle lesson mein hum Realistic Environments design karenge!"
      }
    },
    {
      id: "m3-l2",
      moduleId: 3,
      lessonNumber: 2,
      title: "2. Creating realistic environments",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Character chahe kitna bhi shaandaar ho, bina ek believable environment ke video mein drama aur realism nahi aata. Environment viewers ko story ki duniya mein kheench leta hai.

Realistic Environments create karte waqt 3 Layers of Depth hamesha follow karein:
1. **Foreground (Agla hissa):** Camera ke sabse kareeb ke objects (jaise broken rocks, puddle reflections, wet leaves, metallic railing). Yeh frame ko establish karte hain.
2. **Midground (Beech ka hissa):** Jahan aapka subject aur main action hota hai (jaise road, street lamps, storefronts).
3. **Background (Peechha hissa):** Distant mountains, colossal skyscrapers, alien moons ya moody sky with atmospheric haze (atmospheric perspective).

Environment realism ka sabse bada secret hai **Weathering & Imperfections** (jaise cracked pavement, overgrown moss, puddles, peeling paint). Perfect lines artificial lagti hain, imperfections real world simulate karti hain.`,
      learningObjectives: [
        "Foreground, Midground aur Background ki 3-layer composition construct karna.",
        "Atmospheric perspective aur depth fog generate karna.",
        "Surface weathering (moss, puddles, cracks, rust) inject karna.",
        "Scale aur proportion cues (trees, street furniture, doors) use karna."
      ],
      requiredTools: [
        "Web browser",
        "AI Image Generator",
        "Landscape composition guide"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Establish Scene Scale & Horizon Line",
          description: "Define camera height and focal point: 'Epic wide-angle vista, horizon line at lower third, towering ancient ruins'."
        },
        {
          step: 2,
          title: "Layer the Depth Elements",
          description: "Foreground: 'Cracked stone path with glistening rain puddles'. Midground: 'Ancient crumbling stone temple archway'. Background: 'Misty towering mountain peaks fading into violet haze'."
        },
        {
          step: 3,
          title: "Add Micro-Environmental Details",
          description: "Specify: 'Creeping ivy, wind-blown fallen leaves, steam rising from sewer grates, atmospheric fog'."
        }
      ],
      practicalExample: "Prompt: 'Cinematic wide landscape of an overgrown solarpunk metropolis, giant crystalline towers entwined with lush hanging gardens and waterfalls, foreground showing a rustic wooden balcony overlooking the sprawling city below, warm sunset volumetric light streaming through foliage, birds soaring in distance, 8k, Unreal Engine 5 render --ar 16:9'.",
      readyPrompts: [
        {
          title: "Cyberpunk Alleyway Environment Master",
          prompt: "Cinematic establishing shot of a narrow rainy Neo-Tokyo alleyway at midnight, wet asphalt reflecting vibrant pink and cyan neon signs, steam rising from underground manhole, tangled electrical cables overhead, foreground puddles with detailed ripples, deep atmospheric haze, photorealistic, 8k --ar 16:9",
          useCase: "Realistic urban environment backdrop for 3D character staging"
        }
      ],
      commonMistakes: [
        {
          mistake: "Foreground elements include na karna.",
          fix: "Bina foreground ke scene flat aur 2D wallpaper jaisa lagta hai. Hamesha camera ke kareeb koi object place karein."
        },
        {
          mistake: "Atmospheric haze miss karna.",
          fix: "Real world mein door ke pahad ya buildings hawa aur moisture ki wajah se faded dikhte hain ('Atmospheric depth haze')."
        }
      ],
      homework: "Ek futuristic ya fantasy environment compose karein jisme Foreground, Midground aur Background teeno clearly defined hon.",
      summary: "Realistic environments 3 depth layers (Foreground, Midground, Background) aur atmospheric haze par build hote hain. Surface weathering realism inject karti hai.",
      quiz: [
        {
          question: "Realism aur depth create karne ke liye landscape scene mein kitni layers follow karni chahiye?",
          options: ["Sirf 1 flat layer", "3 Layers: Foreground, Midground aur Background", "100 layers", "Bina kisi layer ke"],
          correctIndex: 1,
          explanation: "Foreground, Midground aur Background visual depth aur 3D spatial separation create karte hain."
        },
        {
          question: "Real world mein door ke objects ka hawa mein मौजूद moisture ki wajah se faded aur bluish dikhne ko kya kehte hain?",
          options: ["Atmospheric Perspective / Aerial Perspective", "Pixel degradation", "Lens scratch", "Motion freeze"],
          correctIndex: 0,
          explanation: "Atmospheric perspective distance aur scale convey karta hai jisse viewer ko gehraai ka ahsaas hota hai."
        },
        {
          question: "Environment ko hyper-realistic banane ke liye surface par kya add karna chahiye?",
          options: ["Weathering, puddles, cracks, moss aur imperfections", "Bilkul smooth flat plastic finish", "Zero shadows", "White blank screen"],
          correctIndex: 0,
          explanation: "Real world mein kuch bhi 100% sterile ya perfect nahi hota. Cracks, puddles aur weathering believable banate hain."
        },
        {
          question: "Composition mein 'Rule of Thirds' ke hisaab se Horizon line kahan honi chahiye?",
          options: ["Lower third ya upper third horizontal line par", "Bilkul corner mein", "Invisible", "Circle ke shape mein"],
          correctIndex: 0,
          explanation: "Horizon line ko lower third par rakhne se sky dramatic banti hai, jabki upper third par rakhne se ground aur foreground highlight hota hai."
        },
        {
          question: "Widescreen cinematic environment ke liye recommended aspect ratio kya hai?",
          options: ["1:1", "16:9 ya 21:9", "9:16", "3:4"],
          correctIndex: 1,
          explanation: "16:9 aur 21:9 widescreen ratios human eyesight field of view se match karte hain aur grand landscapes ke liye perfect hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj ke lesson mein hum aisi mesmerizing 3D worlds create karenge jahan dekhne wale ko lagega ki wo us environment ke andar walk kar sakta hai.",
        whatToShowOnScreen: "Photorealistic environment render screen par show karein. Diagrammatic overlays draw karein: Box 1 (Foreground puddle), Box 2 (Midground temple), Box 3 (Background misty peaks).",
        screenRecordingSteps: [
          "Step 1: 'Wide angle cinematic environment' prompt structure enter karein.",
          "Step 2: Weathering elements: 'wet reflections, overgrown vines, cracked masonry' add karein.",
          "Step 3: Atmospheric tokens 'volumetric haze, dusk lighting' inject karein.",
          "Step 4: Output render zoom karke visual depth verify karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, foreground mein jo paani ka puddle hai aur usme neon sign ka reflection, wo camera ke itna kareeb hai ki viewer ko instantly 3D depth ka perception milta hai. Is 3-layer technique ko hamesha yaad rakhein.",
        practicalDemo: "Depth map generation tool inspection and atmospheric haze toggle.",
        endingAndHomework: "Apna environment asset render karein. Agle lesson mein hum Cinematic Backgrounds aur Staging seekhenge!"
      }
    },
    {
      id: "m3-l3",
      moduleId: 3,
      lessonNumber: 3,
      title: "3. Creating cinematic backgrounds",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Cinematic Backgrounds ka role hota hai foreground character ya action ko complement karna, bina viewer ka focus steal kiye!

Aksar beginners aisi backgrounds bana dete hain jo itni loud aur chaotic hoti hain ki main character unme kho jata hai. Professional cinema mein background ko deliberate lighting, bokeh blur, aur color contrast ke through "subdue" kiya jata hai taaki hero subject pop out kare.

Cinematic Background Rules:
1. **Color Contrast (Color Harmony):** Agar character warm orange/golden tones ka hai, toh background cool cyan/deep navy tones ki rakhein (Teal & Orange Hollywood color grade).
2. **Value Separation:** Dark character against light background, ya Bright glowing character against moody dark background.
3. **Leading Lines:** Background ke architectural elements (bridges, pillars, roads, power lines) aisi hone chahiye jo viewer ki aankhon ko center ke subject ki taraf guide karein.
4. **Clean Negative Space:** Scene mein breathing room rakhein jahan text, titles ya HUD graphics place kiye ja sakein.`,
      learningObjectives: [
        "Subject-Background value separation aur contrast achieve karna.",
        "Color temperature harmony (Teal & Orange palette) balance karna.",
        "Leading lines aur architectural framing techniques use karna.",
        "Clean negative space design karna social media graphics aur titles ke liye."
      ],
      requiredTools: [
        "Web browser",
        "AI Image Generator",
        "Color wheel reference"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Color Palette Contrast",
          description: "Pair complementary colors: Cool dark blue background for a glowing warm gold subject."
        },
        {
          step: 2,
          title: "Design Leading Lines",
          description: "Include perspective vectors: 'Long futuristic corridor receding into infinity, illuminated floor guides'."
        },
        {
          step: 3,
          title: "Add Depth Blur Directives",
          description: "Prompt: 'Softly out-of-focus background, cinematic bokeh, shallow focus on focal plane'."
        }
      ],
      practicalExample: "Prompt: 'Interior of a vast brutalist sci-fi hangar, empty spacious floor with clean negative space, dramatic vertical concrete pillars creating leading lines towards the center, soft teal ambient ceiling lights, atmospheric volumetric haze, out of focus distant structures, cinematic composition --ar 16:9'.",
      readyPrompts: [
        {
          title: "Cinematic Leading Lines Background",
          prompt: "Symmetric futuristic transit corridor, sleek geometric arches with continuous glowing neon cyan floor strips leading towards a bright central vanishing point, polished dark reflective flooring, atmospheric dust motes, cinematic composition, shallow depth of field --ar 16:9",
          useCase: "Perfect background staging for 3D character or vehicle placement"
        }
      ],
      commonMistakes: [
        {
          mistake: "Background ko itna busy bana dena ki subject merge ho jaye.",
          fix: "Prompt mein 'clean composition, subtle background details, bokeh blur' use karein."
        },
        {
          mistake: "Leading lines viewer ki nazar ko scene se bahar bhej dena.",
          fix: "Leading lines hamesha center focal point ki taraf converge honi chahiye."
        }
      ],
      homework: "Ek futuristic corridor ya scenic backdrop prompt generate karein jisme leading lines clear hon aur center mein ek empty staging space ho.",
      summary: "Cinematic backgrounds value contrast, leading lines aur shallow depth of field ke through primary character ko hero banate hain aur scene ko Hollywood polish dete hain.",
      quiz: [
        {
          question: "Hollywood blockbuster films mein sabse mashhoor color grading contrast pair kaunsa hai?",
          options: ["Teal and Orange", "Green and Yellow", "Pink and Brown", "Pure White and Gray"],
          correctIndex: 0,
          explanation: "Teal (cool shadows/background) aur Orange (warm skin tones) complementary color spectrum par opposite hote hain jo maximum visual pop dete hain."
        },
        {
          question: "Viewer ki aankhon ko image ke central subject ki taraf guide karne wali lines ko kya kehte hain?",
          options: ["Leading Lines", "Dotted barcodes", "Underlines", "Border frames"],
          correctIndex: 0,
          explanation: "Leading lines natural eye paths create karti hain jo audience ka attention main focal point par direct karti hain."
        },
        {
          question: "Scene ke us khaali hisse ko kya kehte hain jahan titles ya graphics place kiye ja sakte hain?",
          options: ["Negative Space / Breathing Room", "Corrupted area", "Dead pixels", "Clipped zone"],
          correctIndex: 0,
          explanation: "Negative space visual breathing room deti hai aur composition ko professional aur uncluttered banati hai."
        },
        {
          question: "Background aur Character ke beech 'Value Separation' ka kya matlab hai?",
          options: ["Dono ko alag brightness levels par rakhna (e.g. bright character on dark background)", "Price tag lagana", "Resolution kam karna", "Text likhna"],
          correctIndex: 0,
          explanation: "Value separation brightness values ka contrast hota hai jo silhouette ko instantly readable banata hai."
        },
        {
          question: "Background ko softly blur karne ke liye cinematography term kya hai?",
          options: ["Bokeh / Shallow Depth of Field", "Mosaic tile", "Distortion warp", "Color invert"],
          correctIndex: 0,
          explanation: "Bokeh out-of-focus background lights ka beautiful aesthetic blur hota hai jo shallow depth of field se produce hota hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Ek great director background ko randomly nahi chunta. Background aapke scene ki emotional stage hai. Aaj hum seekhenge ki kaise background ko subtly frame karke subject ko hero banaya jata hai.",
        whatToShowOnScreen: "Futuristic tunnel scene render screen par open karein. Perspective vanishing point lines draw karein. Background brightness slider manipulate karke value separation demonstrate karein.",
        screenRecordingSteps: [
          "Step 1: Symmetry aur leading lines keywords prompt mein add karein.",
          "Step 2: Negative space preserve karne ke liye instructions test karein.",
          "Step 3: Shallow depth of field bokeh token verify karein.",
          "Step 4: Character asset ko background par mock overlay karke visual balance show karein."
        ],
        voiceoverHindi: "Dekhiye dosto, corridor ki saari lines center par aakar mil rahi hain. Agar hum yahan kisi character ko khada karenge, toh viewer ki nazar sabse pehle character par hi jayegi. Yeh composition psychology hai jo har pro filmmaker use karta hai.",
        practicalDemo: "Leading lines vector overlay and focal point convergence test.",
        endingAndHomework: "Leading lines background render execute karein. Agle lesson mein hum AI ki sabse badi challenge ko solve karenge: Consistent Character Creation!"
      }
    },
    {
      id: "m3-l4",
      moduleId: 3,
      lessonNumber: 4,
      title: "4. Creating consistent character reference images",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `AI creators ke saamne sabse badi problem kya aati hai? 
Shot 1 mein character ka face alag dikhta hai, Shot 2 mein achanak uske baal aur kapde badal jaate hain! Is problem ko solve karke **Consistent Character** maintain karna ek professional AI filmmaker ka ultimate superpower hai!

Character Consistency achieve karne ke 4 Proven Techniques:
1. **Unique Character DNA Description:**
   Generic keywords ('a pretty boy') ke badle unique, ultra-specific markers use karein: "28-year-old Scandinavian cyberneticist named Erik, buzzcut platinum blonde hair, robotic left eye with glowing orange ring, diagonal scar across right cheek, wearing matte navy high-collar windbreaker". Is exact description ko har prompt mein word-to-word lock rakhein.
2. **Seed Number Locking:**
   AI generators mein seed number visual randomness control karta hai. Same seed use karne se variations minimize hote hain.
3. **Image-to-Image / Character Reference (--cref in Midjourney):**
   Midjourney ka \`--cref [Image URL]\` parameter reference image ke facial features aur clothing style ko har naye scene mein 90%+ match kar deta hai.
4. **Turnaround Reference Sheet:**
   Pehle hi 1 sheet par character ke multiple expressions aur angles (front, 45-degree, side) generate karke save kar lein.`,
      learningObjectives: [
        "Multi-scene storytelling ke liye character visual DNA lock karna.",
        "Character Reference tags (--cref, weight --cw) master karna.",
        "Seed locking aur style reference parameters execute karna.",
        "Single-character multiple poses portfolio build karna."
      ],
      requiredTools: [
        "Web browser",
        "Midjourney v6+ or Leonardo AI",
        "Image hosting (Discord / Imgur) for URL references"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Generate Master Anchor Image",
          description: "Pehle ek high-definition front portrait generate karein jisme character ka face aur distinct features perfectly visible hon."
        },
        {
          step: 2,
          title: "Copy Image URL / Reference Asset",
          description: "Master image ka URL copy karein ya Leonardo AI mein 'Character Reference' slot mein upload karein."
        },
        {
          step: 3,
          title: "Inject New Actions & Scenarios",
          description: "New prompt: '[New Action] + [Same DNA Description] --cref [MasterURL] --cw 100'. Result: Exactly same person in completely new scenes!"
        }
      ],
      practicalExample: "Scene 1: Master portrait of 'Maya, futuristic archaeologist with braided cyan hair, copper goggles on forehead'. Scene 2 Prompt: 'Maya running through crumbling ancient stone corridor, holding plasma torch --cref [URL_Scene1] --cw 100'. Maya's facial structure, hair color, and goggles remain 100% identical across both shots!",
      readyPrompts: [
        {
          title: "Master Anchor Character Sheet",
          prompt: "Character design turnaround sheet of a charismatic cyberpunk detective, messy silver hair, cybernetic glowing eye implant, brown weathered trenchcoat, multiple view angles: front view, profile view, 3/4 view, clean neutral background, 8k, Unreal Engine 5 render --ar 16:9",
          useCase: "Consitent character storytelling ke liye base reference sheet"
        }
      ],
      commonMistakes: [
        {
          mistake: "Har prompt mein character ka description badal dena.",
          fix: "Character DNA string ko ek notepad mein save rakhein aur har scene ke prompt mein bina change kiye paste karein."
        },
        {
          mistake: "Character Weight (--cw) zero kar dena.",
          fix: "--cw 100 face aur clothing dono lock karta hai, --cw 20 sirf face lock karta hai jab kapde badalne hon."
        }
      ],
      homework: "Ek character ka Anchor portrait generate karein, aur usi character ko do alag situations (jaise sitting in a cafe vs running in rain) mein consistent maintain karke 2 images render karein.",
      summary: "Consistent characters create karne ke liye Character DNA description, Image Reference (--cref), aur Turnaround sheets ka combo use kiya jata hai.",
      quiz: [
        {
          question: "Midjourney mein kisi existing character ke facial features ko naye scenes mein lock karne ke liye kaunsa parameter use hota hai?",
          options: ["--fast", "--cref [Image URL]", "--relax", "--tile"],
          correctIndex: 1,
          explanation: "--cref (Character Reference) parameter image URL ke facial aur visual features ko match karta hai."
        },
        {
          question: "Agar aapko character ka face same rakhna hai lekin uske kapde (clothes) badalne hain, toh character weight (--cw) kitna rakhna chahiye?",
          options: ["--cw 0 to 20", "--cw 100", "--cw 1000", "--cw negative"],
          correctIndex: 0,
          explanation: "--cw 0 to 20 sirf face anatomy par focus karta hai aur AI ko kapde prompt ke hisaab se change karne ki azaadi deta hai."
        },
        {
          question: "Character DNA description ka kya fayda hota hai?",
          options: ["Hard disk space kam lagti hai", "Unique facial markers (scars, hairstyle, eye color) har scene mein consistent identity maintain karte hain", "Internet connection speed double ho jaati hai", "Blender free ho jata hai"],
          correctIndex: 1,
          explanation: "Specific visual markers AI ko har frame mein usi exact person ka neural representation retrieve karne par force karte hain."
        },
        {
          question: "Same prompt par identical visual starting noise preserve karne ke liye kaunsa parameter lock kiya jata hai?",
          options: ["Seed number (--seed)", "Aspect ratio", "Stylize value", "Resolution"],
          correctIndex: 0,
          explanation: "Seed number diffusion process ka initial random noise determine karta hai. Same seed + same prompt = consistent result."
        },
        {
          question: "Short film ya multi-shot video production mein character consistency kyu crucial hoti hai?",
          options: ["Audience suspension of disbelief aur emotional connection bani rehti hai", "File save nahi hoti bina iske", "Monitor off ho jata hai", "Keyboard freeze ho jata hai"],
          correctIndex: 0,
          explanation: "Agar har scene mein character ka chehra badal jayega toh viewer story se detach ho jayega. Consistency believable storytelling ki jaan hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj ka lesson is masterclass ka sabse valuable lesson hai. Consistency na hona 99% AI creators ki sabse badi kamzori hai. Aaj hum seekhenge ki kaise aap apne characters ko har ek scene mein 100% consistent rakh sakte hain.",
        whatToShowOnScreen: "Midjourney Discord / Web interface open karein. Master character image upload karein. URL copy karein. Naya prompt type karein with '--cref [URL] --cw 100'. Do alag scenes side-by-side compare karein.",
        screenRecordingSteps: [
          "Step 1: Anchor character portrait generate karein with unique markers.",
          "Step 2: Right click -> Copy Link Address.",
          "Step 3: New prompt compose karein: 'Character drinking coffee in futuristic diner --cref [Link]'.",
          "Step 4: Output render zoom in karke facial symmetry aur scar alignment compare karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Scene 1 mein character studio mein khada tha, Scene 2 mein wo rainy street par daud raha hai. Lekin uske baal, eye scar aur facial structure 100% identical hain! Yeh hai --cref ki magical power.",
        practicalDemo: "Character weight slider (--cw 0 vs --cw 100) outfit change demonstration.",
        endingAndHomework: "Apna 2-scene consistent character render execute karein. Agle lesson mein hum Aspect Ratios aur 4K Image Quality Upscaling ko decode karenge!"
      }
    },
    {
      id: "m3-l5",
      moduleId: 3,
      lessonNumber: 5,
      title: "5. Image quality and aspect ratios",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek professional AI studio mein output image ka resolution aur aspect ratio randomly select nahi kiya jata. Har platform aur har 3D pipeline ki specific requirements hoti hain.

Standard Aspect Ratios Blueprint:
- **16:9 (--ar 16:9):** Standard YouTube videos, TV screens, cinematic desktop viewing.
- **9:16 (--ar 9:16):** Vertical format for Instagram Reels, YouTube Shorts, TikTok.
- **21:9 (--ar 21:9):** Ultrawide Cinemascope Hollywood film ratio.
- **1:1 (--ar 1:1):** Square format, 3D asset texture maps, Instagram feed.

4K Upscaling & Resolution Enhancement:
Default AI generations aamtaur par 1024x1024 ya 1920x1080 hoti hain. Jab hume video mein zoom karna hota hai ya 3D software mein detailed textures chahiye hote hain, tab hum **AI Upscalers** (jaise Magnific AI, Topaz Gigapixel, ya free Krea/Upscayl) use karte hain. 

Upscalers sirf image ko stretch nahi karte, balki unme micro skin pores, fabric weaves, aur metal scratches mathematically synthesize karke crisp 4K/8K detail add karte hain.`,
      learningObjectives: [
        "Different social platforms aur cinema ke liye correct aspect ratios choose karna.",
        "Midjourney / Flux aspect ratio syntax master karna.",
        "AI Upscaling (Upscayl / Magnific / Krea) ke through 4K textures extract karna.",
        "Compression artifacts aur noise clean karna."
      ],
      requiredTools: [
        "Web browser",
        "AI Image Generator",
        "Free Upscaler (Upscayl app or Krea AI Web)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Target Platform Ratio",
          description: "Decide whether your final video is a Vertical Reel (9:16) or a Cinematic Film (16:9)."
        },
        {
          step: 2,
          title: "Append Syntax Parameter",
          description: "Add '--ar 16:9' or '--ar 9:16' at the very end of your prompt."
        },
        {
          step: 3,
          title: "Execute AI Upscaling to 4K",
          description: "Download the base render and run it through Upscayl / Krea AI at 4x magnification with 'Enhance Details' enabled."
        }
      ],
      practicalExample: "Base 1080p image ko Upscayl mein 4x upscale karne par resolution 4096 x 2304 ho jati hai. Character ke eyes mein iris patterns aur fabric threads crystal-clear ho jate hain, jisse Meshy AI ya 3D software mein ultra-sharp displacement textures bante hain!",
      readyPrompts: [
        {
          title: "Ultra-High Resolution Macro Asset",
          prompt: "Macro close-up shot of an intricate mechanical cybernetic eye with gold wiring and sapphire lens aperture, iris reflecting distant city lights, photorealistic, extreme micro detail, 8k resolution, Hasselblad medium format --ar 16:9",
          useCase: "Quality and upscaling benchmark test"
        }
      ],
      commonMistakes: [
        {
          mistake: "16:9 image ko direct 9:16 mein crop kar dena bina composition adjust kiye.",
          fix: "Vertical reels ke liye hamesha pehle se '--ar 9:16' prompt karein taaki subject perfectly vertically centered ho."
        },
        {
          mistake: "Photoshop mein simple bilinear resize karke usko '4k' samajhna.",
          fix: "Traditional resizing blur kar deta hai. Hamesha AI Neural Upscaler use karein jo missing micro-details reconstruct karta hai."
        }
      ],
      homework: "Ek base image generate karein, free Upscayl ya Krea AI se 4x upscale karein, aur 100% zoom karke sharpness ka difference inspect karein.",
      summary: "Target platform ke hisaab se correct aspect ratio choose karna aur AI Neural Upscalers ke through 4K resolution achieve karna high-end 3D AI production ka essential rule hai.",
      quiz: [
        {
          question: "Instagram Reels aur YouTube Shorts ke liye industry-standard aspect ratio kya hai?",
          options: ["16:9", "9:16", "1:1", "4:3"],
          correctIndex: 1,
          explanation: "9:16 vertical full-screen smartphone ratio mobile audience ke liye standard format hai."
        },
        {
          question: "Traditional image resize aur AI Neural Upscaling mein kya farq hota hai?",
          options: ["AI Upscaling missing micro-details, textures aur sharpness hallucinate karke restore karta hai", "AI Upscaling black and white kar deta hai", "Traditional resize better hota hai", "Dono bilkul same hote hain"],
          correctIndex: 0,
          explanation: "AI upscalers neural models use karte hain jo realistic micro-textures (skin pores, fabric threads) synthesize karte hain."
        },
        {
          question: "Desktop aur standard YouTube video ke liye kaunsa aspect ratio use hota hai?",
          options: ["9:16", "16:9", "1:2", "3:1"],
          correctIndex: 1,
          explanation: "16:9 horizontal widescreen monitors aur standard television displays ka universal format hai."
        },
        {
          question: "Midjourney mein aspect ratio set karne ka sahi syntax kya hota hai?",
          options: ["--ar 16:9", "-ratio 16x9", "size=16:9", "aspect 16/9"],
          correctIndex: 0,
          explanation: "Standard syntax '--ar [width]:[height]' double hyphens ke sath end mein use hota hai."
        },
        {
          question: "Inme se kaunsa tool free aur open-source AI image upscaler hai?",
          options: ["Upscayl", "Notepad", "Paintbrush", "Winamp"],
          correctIndex: 0,
          explanation: "Upscayl ek open-source, free desktop AI upscaler hai jo local GPU par stunning 4x upscaling perform karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Module 3 ke final lesson mein hum seekhenge ki kaise aap apne visuals ko blurry 1080p se crisp, Hollywood-ready 4K resolution mein elevate kar sakte hain.",
        whatToShowOnScreen: "Aspect ratio comparison graphic (16:9 vs 9:16 vs 21:9). Uske baad Upscayl desktop app launch karein, 1080p render drag-and-drop karein, 4x click karein aur live split-screen magnification zoom dikhayein.",
        screenRecordingSteps: [
          "Step 1: '--ar 9:16' vertical prompt execute karein.",
          "Step 2: Base image download karein.",
          "Step 3: Upscayl / Krea AI mein import karein aur 'Digital Art / Realistic' model select karein.",
          "Step 4: 400% zoom slider drag karke fabric micro-textures live highlight karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Left side par base image hai aur right side par 4K AI upscaled output. Notice kariye jacket ke fabric weaves aur metal reflections kitne razor-sharp ho chuke hain. Jab hum is asset ko 3D animation mein daalenge, toh viewer ko har ek polygon premium lagega.",
        practicalDemo: "400% split-slider magnification of micro-details.",
        endingAndHomework: "Module 3 quiz complete karein. Next Module 4 mein hum sabse thrilling topic shuru kar rahe hain: AI 3D Model Creation with Meshy AI!"
      }
    }
  ]
};

