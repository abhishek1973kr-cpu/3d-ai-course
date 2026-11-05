export const PROMPT_CATEGORIES = [
  "All",
  "3D Character Prompts",
  "3D Animal Prompts",
  "3D Environment Prompts",
  "Cinematic Camera Prompts",
  "Fantasy Animation Prompts",
  "Product Animation Prompts",
  "Image-to-Video Prompts",
  "Text-to-Video Prompts"
];

export const PROMPTS_DATABASE = [
  // 1. 3D Character Prompts
  {
    id: "p-char-1",
    title: "Cybernetic Vanguard Paladin",
    category: "3D Character Prompts",
    prompt: "Full-body 3D character asset of a cybernetic paladin in ornate matte titanium armor, intricate gold filigree engravings, translucent glowing cyan power conduit lines, standing in symmetrical A-pose, neutral studio lighting, isolated on solid dark grey background, 3D model render, ZBrush sculpt, Octane render, 8k resolution --ar 16:9",
    explanation: "Designed specifically for Meshy AI 3D extraction. Symmetrical A-pose with limb clearance ensures instant Mixamo auto-rigging capability.",
    tags: ["Cyberpunk", "Armor", "A-Pose", "Meshy 3D", "PBR"]
  },
  {
    id: "p-char-2",
    title: "Stylized Pixar Robot Explorer",
    category: "3D Character Prompts",
    prompt: "Adorable stylized 3D character model of a young robot explorer, rounded glossy white ceramic chassis with yellow hazard stripes, expressive glowing digital cyan eyes, small tactical backpack with antenna, Pixar 3D animation style, soft studio lighting, neutral background, 8k --ar 16:9",
    explanation: "Soft subsurface scattering and glossy materials give that lovable Pixar / Disney animated feature aesthetic.",
    tags: ["Pixar Style", "Cute Robot", "Subsurface Scattering", "Family"]
  },
  {
    id: "p-char-3",
    title: "Neo-Tokyo Cyber Ninja",
    category: "3D Character Prompts",
    prompt: "Full-body character model of an agile cyber ninja, carbon composite ballistic weave suit, high-gloss obsidian visor with golden HUD telemetry reflection, twin plasma katanas mounted on back, symmetrical A-pose, isolated on solid gray backdrop, Unreal Engine 5 render, 8k --ar 16:9",
    explanation: "Matte carbon weave against high-gloss obsidian visor creates dramatic material roughness contrast in Blender.",
    tags: ["Ninja", "Stealth", "Carbon Fiber", "HUD"]
  },
  {
    id: "p-char-4",
    title: "Ancient Astral Sorceress",
    category: "3D Character Prompts",
    prompt: "Full-body 3D fantasy character of an astral sorceress, flowing iridescent silk robes embroidered with glowing constellation starlight, floating celestial crown, serene expression, symmetrical A-pose, soft volumetric lighting, studio isolation, 8k resolution --ar 16:9",
    explanation: "Iridescent silk fabric prompts render rich fresnel sheen and delicate cloth drape ready for cloth simulation.",
    tags: ["Fantasy", "Sorceress", "Iridescent", "Cloth Sim"]
  },

  // 2. 3D Animal Prompts
  {
    id: "p-anim-1",
    title: "Mechanical Cybernetic Wolf",
    category: "3D Animal Prompts",
    prompt: "Full-body 3D model of a cybernetic robotic dire wolf, articulated titanium spine, exposed glowing electric blue hydraulic pistons in legs, carbon fiber jaw with sharp metallic teeth, standing proud in side-profile asset view, studio lighting, isolated on plain black backdrop, 8k --ar 16:9",
    explanation: "Clear articulation on spine and leg pistons makes this quadruped asset ideal for complex 4-legged walking animation.",
    tags: ["Cyber Wolf", "Quadruped", "Titanium", "Mechanical"]
  },
  {
    id: "p-anim-2",
    title: "Bioluminescent Crystal Stag",
    category: "3D Animal Prompts",
    prompt: "Majestic 3D mythical forest stag with towering translucent sapphire crystal antlers, soft bioluminescent teal glow emanating from floral markings on flanks, deep midnight blue fur texture, standing still, studio background, octane 3D render, 8k --ar 16:9",
    explanation: "Translucent crystal shaders interact with internal emission lights, creating magical refractive caustics in Cycles.",
    tags: ["Crystal", "Stag", "Bioluminescent", "Magical"]
  },
  {
    id: "p-anim-3",
    title: "Armored Combat Eagle Drone",
    category: "3D Animal Prompts",
    prompt: "Full-body 3D asset of a robotic combat golden eagle, metallic feather blades with weathered bronze patina, dual micro-jet thrusters under wings, glowing ruby optical lenses, wings partially spread in T-pose, isolated on neutral grey, 8k --ar 16:9",
    explanation: "Spread wings provide clean polygon separation so wing flap blendshapes can be animated smoothly.",
    tags: ["Eagle", "Mecha", "Bronze", "Wings"]
  },
  {
    id: "p-anim-4",
    title: "Stylized Baby Forest Dragon",
    category: "3D Animal Prompts",
    prompt: "Cute 3D stylized baby dragon sitting on stone pedestal, oversized curious golden eyes, soft moss-green scales with tiny golden horns, gentle smile, Pixar animation style, warm studio rim lighting, 8k render --ar 1:1",
    explanation: "Oversized eyes and soft scale gradients trigger emotional affection, perfect for commercial character mascots.",
    tags: ["Baby Dragon", "Cute Mascot", "Pixar", "Whimsical"]
  },

  // 3. 3D Environment Prompts
  {
    id: "p-env-1",
    title: "Neo-Tokyo Rain-Drenched Alleyway",
    category: "3D Environment Prompts",
    prompt: "Cinematic establishing wide shot of a narrow rainy Neo-Tokyo alleyway at midnight, wet asphalt reflecting vibrant pink and cyan neon signs, steam rising from sewer grates, tangled overhead electrical wires, foreground puddles with detailed ripples, deep atmospheric haze, photorealistic, 8k --ar 16:9",
    explanation: "Classic 3-layer depth staging with puddle reflections in foreground, neon corridor in midground, and towering sky in background.",
    tags: ["Cyberpunk", "Rain", "Neon", "Reflections", "Alley"]
  },
  {
    id: "p-env-2",
    title: "Bioluminescent Alien Jungle Vista",
    category: "3D Environment Prompts",
    prompt: "Cinematic wide vista of a lush bioluminescent extraterrestrial jungle at twilight, colossal spiral glowing purple trees, crystalline waterfalls cascading into luminescent turquoise pools, airborne glowing pollen drifting in volumetric mist, twin moons in violet sky, 8k, Unreal Engine 5 --ar 21:9",
    explanation: "Ultrawide 21:9 aspect ratio and complementary color palette (Purple vs Turquoise) provide breathtaking world-building scale.",
    tags: ["Alien Jungle", "Bioluminescence", "Avatar Style", "21:9"]
  },
  {
    id: "p-env-3",
    title: "Brutalist Sci-Fi Cathedral Hangar",
    category: "3D Environment Prompts",
    prompt: "Interior establishing shot of an enormous brutalist concrete sci-fi hangar, massive vertical pillars creating strong leading lines toward a central illuminated docking cradle, atmospheric dust motes dancing in golden volumetric god-rays streaming through high clerestory windows, photorealistic, 8k --ar 16:9",
    explanation: "Brutalist architectural pillars act as leading lines that direct viewer attention directly to your 3D vehicle or character staging area.",
    tags: ["Brutalist", "Hangar", "God Rays", "Leading Lines"]
  },
  {
    id: "p-env-4",
    title: "Ancient Overgrown Desert Temple",
    category: "3D Environment Prompts",
    prompt: "Epic wide-angle shot of a half-buried ancient sandstone temple emerging from shifting golden dunes, colossal eroded guardian statues flanking doorway, desert heat shimmer on horizon, dramatic low-angle afternoon sun casting long sharp shadows, 8k --ar 16:9",
    explanation: "Long directional shadows and heat haze add physical warmth and desert archaeological mystery to any cinematic shot.",
    tags: ["Desert", "Ancient Temple", "Sand Dunes", "Golden Hour"]
  },

  // 4. Cinematic Camera Prompts
  {
    id: "p-cam-1",
    title: "Low-Angle Hero Worm's Eye View",
    category: "Cinematic Camera Prompts",
    prompt: "Extreme low-angle upward cinematic perspective looking up at an armored giant sentinel from ground level, wide-angle 24mm lens perspective, dramatic vanishing point, towering heroic scale, ominous storm clouds illuminated by lightning behind subject, 8k --ar 16:9",
    explanation: "Worm's eye view forces the audience to look upward, magnifying physical power, dominance, and colossal scale.",
    tags: ["Low Angle", "Hero Perspective", "24mm", "Scale"]
  },
  {
    id: "p-cam-2",
    title: "Anamorphic 85mm Creamy Bokeh",
    category: "Cinematic Camera Prompts",
    prompt: "Cinematic medium close-up shot of a determined female pilot, shot on ARRI Alexa with 85mm anamorphic prime lens, f/1.4 aperture, creamy out-of-focus background with horizontal blue streak lens flares, razor-sharp focus on iris with visible HUD reflections, 8k --ar 2.39:1",
    explanation: "85mm prime lens at f/1.4 produces optical background separation that makes characters look like multimillion-dollar movie leads.",
    tags: ["85mm Lens", "Bokeh", "Anamorphic", "f/1.4"]
  },
  {
    id: "p-cam-3",
    title: "High-Speed FPV Drone Dive Tracking",
    category: "Cinematic Camera Prompts",
    prompt: "Dynamic high-speed FPV racing drone shot diving vertically down the glass facade of a colossal skyscraper, banking sharply at the street level to chase a drifting hoverbike, intense motion blur on edges, cinematic kinetic velocity, 8k, 60fps feel",
    explanation: "FPV drone kinetics simulate high g-force pursuit camera work for adrenaline-fueled vehicle chase scenes.",
    tags: ["FPV Drone", "Dive", "Motion Blur", "Pursuit"]
  },
  {
    id: "p-cam-4",
    title: "Over-the-Shoulder Confrontation Staging",
    category: "Cinematic Camera Prompts",
    prompt: "Cinematic over-the-shoulder shot, looking past the weathered armor silhouette of a cyber warrior in immediate soft foreground, focusing across a rain-swept bridge at an approaching enemy mech, dramatic depth of field, 8k --ar 16:9",
    explanation: "Over-the-shoulder framing anchors the audience inside the protagonist's emotional perspective during confrontations.",
    tags: ["OTS", "Confrontation", "Foreground Framing", "Cinema"]
  },

  // 5. Fantasy Animation Prompts
  {
    id: "p-fan-1",
    title: "Ancient Elder Dragon Awakening",
    category: "Fantasy Animation Prompts",
    prompt: "Cinematic close-up of an ancient colossal obsidian dragon opening glowing molten gold slit eyes, volcanic smoke and sparks drifting from nostrils, cracked lava veins pulsing along jawline, extreme micro-scale texture, photorealistic, 8k --ar 16:9",
    explanation: "Molten lava veins and drifting embers add dynamic particle movement when animated in Runway or Luma.",
    tags: ["Dragon", "Molten Lava", "Eyes", "Fantasy Epic"]
  },
  {
    id: "p-fan-2",
    title: "Floating Floating Citadel Islands",
    category: "Fantasy Animation Prompts",
    prompt: "Epic cinematic panorama of massive floating shattered fantasy islands anchored by giant glowing celestial chains, roaring waterfalls pouring into empty sky, ancient white marble spires and flying airships, golden volumetric sunset lighting, 8k --ar 21:9",
    explanation: "Endless vertical waterfalls cascading into space create continuous fluid motion vectors for AI video generation.",
    tags: ["Floating Islands", "Celestial", "Waterfalls", "Airships"]
  },
  {
    id: "p-fan-3",
    title: "Enchanted Mushroom Grove at Night",
    category: "Fantasy Animation Prompts",
    prompt: "Magical low-angle macro shot of a fairytale forest floor, giant glowing bioluminescent mushrooms pulsing with ethereal cyan and magenta light, floating spore motes swirling in gentle breeze, glistening dew on emerald moss, whimsical atmosphere, 8k",
    explanation: "Whimsical lighting and floating spore motes generate enchanting ambient physics in video engines.",
    tags: ["Fairytale", "Bioluminescent", "Mushrooms", "Spores"]
  },
  {
    id: "p-fan-4",
    title: "Phoenix Rebirth Flame Burst",
    category: "Fantasy Animation Prompts",
    prompt: "Majestic mythical fire phoenix emerging from a swirling vortex of incandescent embers, feathers made of pure golden liquid flame, wings spreading wide in explosive dynamic motion, volumetric smoke, cinematic lighting, 8k",
    explanation: "Liquid flame aesthetics generate realistic fluid turbulence when animated with motion brushes.",
    tags: ["Phoenix", "Liquid Fire", "Rebirth", "Dynamic Motion"]
  },

  // 6. Product Animation Prompts
  {
    id: "p-prod-1",
    title: "Luxury Obsidian Tourbillon Watch",
    category: "Product Animation Prompts",
    prompt: "Macro commercial shot of a luxury obsidian and rose gold wristwatch, intricate mechanical tourbillon gears ticking in visible movement, water droplets beaded on anti-reflective sapphire crystal, resting on polished black mirror, dramatic cyan rim studio lighting, 8k --ar 16:9",
    explanation: "Micro water droplets and exposed mechanical gears establish extreme luxury value and precision engineering.",
    tags: ["Luxury Watch", "Macro", "Water Droplets", "Commercial"]
  },
  {
    id: "p-prod-2",
    title: "Futuristic Aerodynamic Wireless Earbuds",
    category: "Product Animation Prompts",
    prompt: "Commercial 3D hero shot of sleek matte black wireless earbuds with subtle glowing cyan charging strip, hovering weightlessly above a minimalist concrete pedestal, dramatic geometric studio shadows, Hasselblad medium format, 8k --ar 1:1",
    explanation: "Weightless hovering presentation is the modern commercial standard for consumer electronics launches.",
    tags: ["Tech Commercial", "Hovering", "Minimalist", "Earbuds"]
  },
  {
    id: "p-prod-3",
    title: "Cyberpunk Energy Drink Splash Can",
    category: "Product Animation Prompts",
    prompt: "Dynamic commercial shot of a vibrant matte black and neon green energy drink can, icy condensation droplets running down aluminum, frozen explosion of crystal-clear water and lime slices splashing around the can, high-speed 1000fps phantom camera feel, 8k",
    explanation: "Condensation droplets and frozen fluid splashes trigger instant thirst and high conversion in commercial ads.",
    tags: ["Beverage Can", "Water Splash", "Condensation", "Commercial Ad"]
  },
  {
    id: "p-prod-4",
    title: "High-End Holographic Sneaker Launch",
    category: "Product Animation Prompts",
    prompt: "Commercial product turntable shot of a futuristic athletic sneaker, iridescent woven fiber mesh with glowing translucent air bubble sole, floating at 45-degree angle above dark reflective acrylic stage, cinematic purple and cyan rim lights, 8k",
    explanation: "Iridescent woven fabrics and translucent soles showcase high manufacturing complexity for sneaker brands.",
    tags: ["Sneaker", "Footwear", "Iridescent", "Launch Commercial"]
  },

  // 7. Image-to-Video Prompts
  {
    id: "p-i2v-1",
    title: "Cinematic Dolly Push-In on Warrior",
    category: "Image-to-Video Prompts",
    prompt: "Slow dramatic push-in dolly camera, warrior slowly raises eyes to camera with focused gaze, rain droplets running down polished armor, volumetric neon fog drifting left to right, steady 24fps motion",
    explanation: "Designed specifically for Runway Gen-3 I2V. Preserves facial anchor identity while adding controlled atmospheric kinematics.",
    tags: ["I2V", "Push In", "Rain Physics", "Facial Stability"]
  },
  {
    id: "p-i2v-2",
    title: "360 Orbit Parallax on Staged Asset",
    category: "Image-to-Video Prompts",
    prompt: "Smooth horizontal camera truck right creating rich background parallax, subject stands firm and grounded, hair and cape fluttering gently in wind, reflective wet floor ripples, photorealistic 24fps",
    explanation: "Forces the video engine to calculate lateral parallax depth without warping the central character.",
    tags: ["I2V", "Orbit", "Parallax", "Cape Flutter"]
  },
  {
    id: "p-i2v-3",
    title: "Atmospheric Smoke & Embers Drift",
    category: "Image-to-Video Prompts",
    prompt: "Static locked tripod camera, glowing plasma core pulses rhythmically, volumetric smoke billows slowly from exhaust vents, sparkling embers drift upward through cool blue lighting, subtle breathing motion",
    explanation: "Perfect for character idle poses where zero camera movement is required, focusing 100% on particle physics.",
    tags: ["I2V", "Tripod", "Embers", "Idle Stance"]
  },
  {
    id: "p-i2v-4",
    title: "Water Droplets Slow-Motion Phantom",
    category: "Image-to-Video Prompts",
    prompt: "Ultra slow motion 1000fps feel, water droplets splashing gently across product surface and rebounding, liquid ripples spreading outwards on reflective glass, smooth fluid physics",
    explanation: "Simulates high-speed Phantom Flex camera fluid physics for premium commercial product reveals.",
    tags: ["I2V", "Fluid Dynamics", "Slow Mo", "1000fps"]
  },

  // 8. Text-to-Video Prompts
  {
    id: "p-t2v-1",
    title: "Cyber City Flying Vehicle Flythrough",
    category: "Text-to-Video Prompts",
    prompt: "Cinematic wide camera gliding smoothly behind a sleek aerodynamic flying car as it banks sharply between towering neon holographic skyscrapers at night, rain streaks across the lens, blue plasma thruster trails, reflections on wet skyscraper glass, 8k, photorealistic 24fps",
    explanation: "Generates an entire futuristic cityscape with complex 3D vehicle trajectory purely from text tokens.",
    tags: ["T2V", "Flying Car", "Blade Runner", "Cinematic Flythrough"]
  },
  {
    id: "p-t2v-2",
    title: "Colossal Mech March in Mud",
    category: "Text-to-Video Prompts",
    prompt: "Cinematic low-angle tracking shot of a heavy 10-story battle mech marching deliberately forward through misty ruined battlefield, massive hydraulic footsteps displace wet mud with heavy kinetic impact, camera shakes subtly on each step, steam venting from joints, photorealistic, 8k",
    explanation: "Heavy weight keywords and footstep impact cues force the neural diffusion model to simulate true physical gravity.",
    tags: ["T2V", "Giant Mech", "Ground Impact", "Heavy Physics"]
  },
  {
    id: "p-t2v-3",
    title: "Astronaut Entering Alien Monolith",
    category: "Text-to-Video Prompts",
    prompt: "Cinematic medium tracking shot moving behind a lone astronaut walking towards a colossal glowing black obsidian monolith on foreign desert planet, twin suns setting on horizon, sand swirling around boots, golden volumetric haze, 8k, 24fps",
    explanation: "Over-the-shoulder narrative journey shot that evokes Interstellar / 2001: A Space Odyssey cinematic grandeur.",
    tags: ["T2V", "Astronaut", "Sci-Fi Monolith", "Interstellar Style"]
  },
  {
    id: "p-t2v-4",
    title: "High-Octane Energy Katana Duel",
    category: "Text-to-Video Prompts",
    prompt: "Dynamic low-angle combat tracking shot, cybernetic samurai charges forward and executes a lightning-fast spinning horizontal slash with a glowing electric blue energy katana, bright sparks spray across wet asphalt, camera whips dynamically with the motion, 8k, 24fps",
    explanation: "Directional whip momentum keywords allow the T2V engine to render fast martial arts combat without body disintegration.",
    tags: ["T2V", "Katana Duel", "Sparks", "Action Climax"]
  }
];

