export const module10 = {
  id: 10,
  slug: "professional-video-editing",
  title: "MODULE 10: PROFESSIONAL VIDEO EDITING",
  subtitle: "CapCut Pro / DaVinci, Timeline Pacing, SFX Sound Design, Voiceovers aur 4K Master Export",
  description: "AI video clips ko ek cohesive Hollywood blockbuster trailer mein assemble karna. J-Cuts, L-Cuts, dynamic sound effects, cinematic whooshes, AI voiceover sync aur final color grading.",
  icon: "Scissors",
  badge: "Post-Production",
  totalLessons: 8,
  totalDuration: "108 min",
  lessons: [
    {
      id: "m10-l1",
      moduleId: 10,
      lessonNumber: 1,
      title: "1. Introduction to video editing",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `George Lucas (Star Wars ke creator) ne ek baar kaha tha: *"A movie is made three times: when it's written, when it's shot, and when it's edited."* 

Chahe aapne kitni bhi shaandaar 3D AI video clips generate kar li hon, bina ek professional editing workflow ke wo sirf random video files ka dher hain! **Editing hi wo jaadu hai jo alag-alag shots ko jod kar ek emotional story, high-energy trailer ya viral reel banata hai.**

Hamara Masterclass Editing Suite:
Hum use karenge **CapCut Desktop** (Free & Ultra-Fast) ya **DaVinci Resolve** (Industry Standard Hollywood Color Grading & Sound). Dono software 100% free available hain aur dono mein multi-track timeline, speed ramping, keyframe animations aur professional audio editing supported hai.

The 3 Pillars of Professional Editing:
1. **Pacing & Rhythm:** Kab cut karna hai aur kab shot ko hold karna hai.
2. **Audio-Visual Sync:** Video ke visual impacts ko music ke beat drops ke sath perfectly match karna.
3. **Sound Design:** 50% movie audio hoti hai! Realistic whooshes, risers, footstep impacts aur ambient drones ke bina video flat lagti hai.`,
      learningObjectives: [
        "Video editing psychology aur narrative rhythm master karna.",
        "CapCut Desktop aur DaVinci Resolve workspace ecosystem samajhna.",
        "Multi-track timeline architecture (Video tracks, Audio tracks, Effects tracks) grasp karna.",
        "Story rhythm aur attention retention pacing formulas learn karna."
      ],
      requiredTools: [
        "CapCut Desktop (Free download from capcut.com) or DaVinci Resolve Free",
        "Headphones / Studio Monitors",
        "Mouse with scroll wheel"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Download and Install CapCut Desktop",
          description: "Visit capcut.com and install the desktop version (far superior to mobile/web for multi-track precision)."
        },
        {
          step: 2,
          title: "Explore the 4 Main Workspace Areas",
          description: "Media Library (top-left), Player Viewport (top-right), Inspector / Properties (top-right panel), and Timeline Tracks (bottom)."
        },
        {
          step: 3,
          title: "Configure Project Canvas Settings",
          description: "Set Canvas Ratio to 16:9 (1920x1080) for YouTube/Cinema or 9:16 (1080x1920) for Reels/Shorts."
        },
        {
          step: 4,
          title: "Learn Basic Navigation Keys",
          description: "Spacebar = Play/Pause, 'C' = Razor Split Tool, 'V' = Selection Arrow, Backspace = Ripple Delete."
        }
      ],
      practicalExample: "Project Setup Drill: CapCut Desktop launch kiya. New Project par click kiya. Settings mein jakar 24 FPS aur 1920x1080 resolution lock kiya. Workspace bilkul clean ready ho gaya bina kisi clutter ke!",
      readyPrompts: [
        {
          title: "Editing Blueprint Concept",
          prompt: "Cinematic storyboard matrix of 6 video shots arranged in rhythm, beat drops mapped to fast action cuts, high production value, 8k",
          useCase: "Video editing rhythm reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Mobile phone par complex 12-track project edit karne ki koshish karna.",
          fix: "Hamesha Desktop version use karein jahan keyboard shortcuts aur precision audio-video scrubbing milti hai."
        },
        {
          mistake: "Frame rate match na karna (e.g. project 30fps aur clips 24fps).",
          fix: "Project frame rate ko source clips ke 24 FPS se synchronize karein stutter avoid karne ke liye."
        }
      ],
      homework: "CapCut Desktop install karein, ek naya project banayein aur workspace areas inspect karein.",
      summary: "Video editing shots ko rhythm, emotion aur sound ke sath weave karti hai. CapCut Desktop multi-track editing aur audio-visual synchronization ka fastest free tool hai.",
      quiz: [
        {
          question: "Hollywood film editing aur filmmaking theory ke according ek video ka kitna percent emotional impact audio aur sound design par depend karta hai?",
          options: ["Lagbhag 50% ya usse bhi zyada", "Sirf 1%", "Zero percent", "Audio zaroori nahi hoti"],
          correctIndex: 0,
          explanation: "Filmmakers universally agree karte hain ki sound design (SFX, music, ambiences) 50% emotional perception drive karta hai."
        },
        {
          question: "CapCut Desktop timeline par video clip ko do hisson mein cut (split) karne ka universal shortcut key kya hai?",
          options: ["'C' key (Razor Split)", "'Z' key", "'X' key", "'P' key"],
          correctIndex: 0,
          explanation: "'C' key Razor Blade tool activate karti hai jo current playhead frame par instant clean cut execute karta hai."
        },
        {
          question: "Timeline par spacebar dabane se kya action perform hota hai?",
          options: ["Play / Pause Toggle", "File delete ho jaati hai", "Computer shutdown hota hai", "Color change hota hai"],
          correctIndex: 0,
          explanation: "Spacebar video playback ko start aur freeze karta hai."
        },
        {
          question: "Instagram Reels aur YouTube Shorts ke liye CapCut canvas aspect ratio kya set kiya jata hai?",
          options: ["9:16 (1080x1920)", "16:9", "4:3", "1:1"],
          correctIndex: 0,
          explanation: "9:16 vertical full-screen format mobile video platforms ka standard aspect ratio hai."
        },
        {
          question: "Desktop video editor mobile apps ke mukable kyu prefer kiye jaate hain?",
          options: ["Multi-track precision, keyboard shortcuts aur frame-accurate audio scrubbing ke liye", "Kyunki mouse mehenga hota hai", "Kyunki internet nahi lagta", "Kyunki monitor bada hota hai"],
          correctIndex: 0,
          explanation: "Desktop editors millisecond-level audio waveform alignment aur complex multi-layer compositing facilitate karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Module 10 mein hum post-production editing suite mein enter kar rahe hain. Ab tak humne jo raw AI video clips generate kiye hain, ab hum unhe ek high-voltage cinematic trailer mein assemble karenge. Let's start editing!",
        whatToShowOnScreen: "CapCut Desktop launching. Creating 'New Project'. Touring the 4 quadrants: Media Pool, Preview Monitor, Inspector, and Multi-track Timeline. Demonstrating keyboard shortcuts: C for Cut, V for Select, Spacebar for Play.",
        screenRecordingSteps: [
          "Step 1: CapCut launch karke New Project create karein.",
          "Step 2: Project resolution 1920x1080 aur 24 FPS verify karein.",
          "Step 3: Sample clip ko timeline par drag-and-drop karein.",
          "Step 4: 'C' key se clip split karke dikhayein.",
          "Step 5: 'V' key se normal selection arrow wapas switch karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! CapCut ka interface kitna clean aur responsive hai. Yahan bottom par humari multi-track timeline hai jahan hum video clips, sound effects, voiceover aur background music ko parallel layers mein arrange karenge. Navigation is super smooth!",
        practicalDemo: "Quick razor cut demonstration and ripple delete shortcut.",
        endingAndHomework: "CapCut workspace ready karein. Agle lesson mein hum AI Video Clips Import aur Organize karna seekhenge!"
      }
    },
    {
      id: "m10-l2",
      moduleId: 10,
      lessonNumber: 2,
      title: "2. Importing AI video clips",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek professional editor timeline par ek bhi clip daalne se pehle apne **Media Bin (Assets Pool)** ko bilkul military discipline ki tarah organize karta hai!

Media Organization Best Practices:
1. **Bins / Folders Creation:**
   CapCut Media panel mein right click karke folders banayein:
   - \`01_Video_Clips\` (Aapke saare Runway/Luma ke master takes)
   - \`02_B-Roll_Environments\` (Background landscape shots)
   - \`03_Music\` (Trailer soundtrack tracks)
   - \`04_SFX\` (Whooshes, hits, risers, footstep foley)
   - \`05_Voiceovers\` (AI voice narration audio files)
2. **Metadata Tagging & Color Coding:**
   Har clip ko descriptive rename karein: e.g. \`Hero_Run_CloseUp\` ya \`City_Drone_Wide\`.
3. **In-Point & Out-Point Selection (I and O keys):**
   Puri 5-second clip ko timeline par drag karne ke badle, Media viewer mein clip play karein. Jahan se acha motion shuru hota hai wahan **'I' (In-point)** dabayein, jahan motion khatam hota hai wahan **'O' (Out-point)** dabayein, aur sirf wahi best 2-second hissa timeline par layein!`,
      learningObjectives: [
        "Folder bin hierarchies aur asset categorization master karna.",
        "Source monitor mein In-points ('I') aur Out-points ('O') set karna.",
        "Proxy editing aur smooth playback preview settings configure karna.",
        "Asset corruption aur missing media relinking manage karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "Generated AI video clips from Module 8 & 9"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Create Project Bins",
          description: "In CapCut Media tab, create folders: 'Video Clips', 'Audio SFX', 'Music'."
        },
        {
          step: 2,
          title: "Import Assets",
          description: "Click 'Import' (or drag and drop) your downloaded MP4 AI video files into the Video folder."
        },
        {
          step: 3,
          title: "Mark In and Out Points in Viewer",
          description: "Double click clip to preview. Scrub to 00:01:12, press 'I'. Scrub to 00:03:20, press 'O'."
        },
        {
          step: 4,
          title: "Drag Clean Selection to Timeline Track",
          description: "Drag the trimmed snippet onto Track 1. Only the golden frames enter your timeline!"
        }
      ],
      practicalExample: "Trimming in Media Pool: 5-second clip of Cyber Ninja. Shuru ke 1 second mein camera static tha, aakhri 1 second mein hand morphing thi. Humne Frame 24 par 'I' aur Frame 72 par 'O' mark kiya. Exact 2 seconds ka pristine action shot timeline par place ho gaya with ZERO unwanted tail frames!",
      readyPrompts: [
        {
          title: "Media Asset Collection Reference",
          prompt: "Futuristic digital holographic asset library screen with organized video reels, sound waveforms and 3D preview containers, 8k",
          useCase: "Media organization inspiration"
        }
      ],
      commonMistakes: [
        {
          mistake: "Desktop par padi 50 files ko bina folders ke sidha timeline par dump kar dena.",
          fix: "Hamesha pehle bins banayein aur clips ko categorize karein taaki project clean aur stress-free rahe."
        },
        {
          mistake: "Puri clip ko timeline par daalkar wahan par trim karke timeline cluttered karna.",
          fix: "Media monitor mein pehle se 'I' aur 'O' use karke sirf selected portion layein."
        }
      ],
      homework: "Apne sabhi generated AI video clips ko CapCut mein import karein, 3 folders (Videos, Music, SFX) mein organize karein aur 'I' aur 'O' mark karke test karein.",
      summary: "Media bin organization aur In/Out points selection editing efficiency ko 10x boost karta hai aur timeline ko clean aur focused rakhta hai.",
      quiz: [
        {
          question: "Media viewer mein clip ke starting frame ko mark karne ka universal shortcut key kya hai?",
          options: ["'I' key (Mark In)", "'S' key", "'Enter'", "'F' key"],
          correctIndex: 0,
          explanation: "'I' key (In-Point) clip ke selection ka starting boundary mark karta hai."
        },
        {
          question: "Media viewer mein clip ke ending frame ko mark karne ka universal shortcut key kya hai?",
          options: ["'O' key (Mark Out)", "'E' key", "'P' key", "'Spacebar'"],
          correctIndex: 0,
          explanation: "'O' key (Out-Point) clip ke selection ka ending boundary mark karta hai."
        },
        {
          question: "In-points aur Out-points mark karke timeline par clip laane ka sabse bada benefit kya hai?",
          options: ["Aapke timeline par sirf golden, glitch-free frames hi aate hain bina clutter ke", "Video ka color change ho jata hai", "Internet band ho jata hai", "Speaker loud ho jata hai"],
          correctIndex: 0,
          explanation: "Pre-trimming unwanted head aur tail frames ko timeline se bahar rakhti hai jisse timeline streamlined rehti hai."
        },
        {
          question: "Project media assets (video, audio, music) ko folders mein sort karne wale digital folders ko editing software mein kya kehte hain?",
          options: ["Bins / Media Folders", "Recycle bin only", "Trash cans", "Printers"],
          correctIndex: 0,
          explanation: "Bins film editing terminology ka classic term hai jo media assets ko categorized rakhta hai."
        },
        {
          question: "Agar source video file ka location desktop par change ho jaye toh video editor mein kya message aata hai?",
          options: ["Media Offline / Missing File Error", "Video deleted permanently", "Congratulations", "New update available"],
          correctIndex: 0,
          explanation: "Media Offline error tab trigger hota hai jab project file source disk path se video retrieve nahi kar paati."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Ek messy timeline ek messy mind ka reflection hoti hai. Aaj hum Hollywood studio standard par apne media pool ko organize karenge aur In/Out points se surgical precision cuts lagayenge.",
        whatToShowOnScreen: "CapCut Media panel. Right clicking -> Create Folder: '01_Video_Shots', '02_Audio_SFX', '03_Music'. Dragging clips into bins. Double-clicking a clip into preview window. Scrubbing, pressing 'I', scrubbing, pressing 'O'. Dragging clean selection to Track 1.",
        screenRecordingSteps: [
          "Step 1: 3 custom bins banayein aur color label assign karein.",
          "Step 2: AI clips ko Video bin mein import karein.",
          "Step 3: Preview monitor mein 'I' (In-point) aur 'O' (Out-point) mark karein.",
          "Step 4: Trimmed clip ko timeline Track 1 par drop karein.",
          "Step 5: Clean timeline organization visualize karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Humne clip ka wo shuruati 1 second cut kar diya jahan camera stationary tha aur sirf wahi 2.5 seconds timeline par laye jahan dynamic sprint action ho raha hai. Is technique se hamari timeline par har ek frame pure adrenaline hoga!",
        practicalDemo: "In and Out point marking and timeline append demonstration.",
        endingAndHomework: "Media organization drill complete karein. Agle lesson mein hum Cutting, Arranging aur Pacing seekhenge!"
      }
    },
    {
      id: "m10-l3",
      moduleId: 10,
      lessonNumber: 3,
      title: "3. Cutting and arranging scenes",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Editing ka asli magic clips ko aapas mein jodne (Arranging & Cutting) mein hota hai. 

The 3 Master Film Cutting Techniques:
1. **Match on Action:**
   Jab character ek shot mein movement shuru karta hai (jaise sword uthana), toh agle shot mein wahi action dusre angle se continue hona chahiye. Cut action ke beech mein lagta hai, action khatam hone ke baad nahi! Isse viewer ka dimag cut ko notice nahi karta (Invisible Cut).
2. **J-Cut (Audio leads Video):**
   Agle scene ka audio (jaise explosion ka rumble ya character ki voice) pichle scene ki video ke khatam hone se 1 second pehle hi sunai dene lagta hai! Yeh curiosity aur smooth transition create karta hai.
3. **L-Cut (Video leads Audio):**
   Pichle scene ka sound agle scene ke video par 1 second tak continue chalta rehta hai. Yeh emotional continuity provide karta hai.

Pacing & Shot Duration Blueprint:
- **Establishing Shots:** 2.5s to 3.5s (Viewer ko world observe karne ka time milta hai).
- **Action & Combat Shots:** 1.0s to 1.8s (Fast, energetic, high heart-rate).
- **Impact & Climax Beats:** 0.8s to 1.2s (Rapid rhythmic cuts leading to beat drop).`,
      learningObjectives: [
        "Match on action cuts flawlessly execute karna.",
        "J-Cuts aur L-Cuts ki audio-visual psychology master karna.",
        "Action vs emotional scenes ke liye shot durations calibrate karna.",
        "Ripple editing aur timeline trimming tools operate karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "Multiple trimmed video clips on timeline"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Assemble the Rough Assembly",
          description: "Place your 4 primary shots in story order: Shot 1 (Wide vista), Shot 2 (Medium run), Shot 3 (Close-up combat), Shot 4 (Epic reveal)."
        },
        {
          step: 2,
          title: "Apply Match on Action Cutting",
          description: "Align the frame where the sword starts swinging in Shot 2 with the frame where the sword hits in Shot 3."
        },
        {
          step: 3,
          title: "Fine-tune Clip Durations for Pacing",
          description: "Trim Shot 1 to 3.0s, Shot 2 to 1.8s, Shot 3 to 1.2s to create an escalating speed progression."
        },
        {
          step: 4,
          title: "Execute J-Cut on Scene Transition",
          description: "Drag the audio track of Shot 4 backwards by 12 frames so the whoosh sound begins under Shot 3."
        }
      ],
      practicalExample: "Action Sequence Pacing Test: Scene 1 (Wide city) = 3 seconds. Scene 2 (Hero sprinting) = 2 seconds. Scene 3 (Katana blade drawn) = 1.2 seconds. Scene 4 (Laser blast explosion) = 0.8 seconds. Sequence play karne par viewer ki heartbeat pacing ke sath naturally accelerate karti hai! Pure Hollywood pacing!",
      readyPrompts: [
        {
          title: "Dynamic Pacing Storyboard Reference",
          prompt: "Cinematic film timeline with dynamic cut points, escalating visual energy from slow establishing vista to rapid-fire action impacts, 8k",
          useCase: "Visual pacing guide"
        }
      ],
      commonMistakes: [
        {
          mistake: "Har shot ko barabar 4-4 seconds ka chhod dena (Monotonous pacing).",
          fix: "Shot durations ko rhythm mein vary karein: Slow -> Medium -> Fast -> Impact -> Pause."
        },
        {
          mistake: "Action khatam hone ke baad cut lagana.",
          fix: "Cut hamesha movement ke peak momentum ke doran karein taaki cut invisible lage."
        }
      ],
      homework: "Timeline par 4 clips arrange karein, unke durations ko 3s -> 2s -> 1.5s -> 1s trim karein aur 1 J-cut audio overlap create karein.",
      summary: "Match on action cuts, J-Cuts, L-Cuts aur escalating shot pacing ordinary clips ko ek adrenaline-packed cinematic sequence mein transform karte hain.",
      quiz: [
        {
          question: "Action scene mein cut ko invisible banane aur seamless continuous flow create karne wale cut ko kya kehte hain?",
          options: ["Match on Action Cut", "Jump Cut", "Freeze Cut", "Blank Cut"],
          correctIndex: 0,
          explanation: "Match on Action movement ke middle frame par cut karta hai jisse eye motion follow karti rehti hai aur cut notice nahi hota."
        },
        {
          question: "Agle scene ka audio pichle scene ke khatam hone se pehle hi sunai dene lagne ko kya kehte hain?",
          options: ["J-Cut", "L-Cut", "T-Cut", "Z-Cut"],
          correctIndex: 0,
          explanation: "J-Cut mein audio video se aage lead karta hai (timeline par 'J' shape banti hai) jo anticipation build karta hai."
        },
        {
          question: "Pichle scene ka audio agle naye scene ke video par continue chalte rehne ko kya kehte hain?",
          options: ["L-Cut", "J-Cut", "Mute Cut", "Stop Cut"],
          correctIndex: 0,
          explanation: "L-Cut audio tail ko agle shot mein extend karta hai (timeline par 'L' shape) jo emotional continuity preserve karta hai."
        },
        {
          question: "Fast-paced action climax scenes ke liye individual shot ki recommended duration aamtaur par kitni hoti hai?",
          options: ["0.8 seconds se 1.8 seconds", "45 seconds", "5 minutes", "0.01 seconds"],
          correctIndex: 0,
          explanation: "1 se 2 seconds ke short dynamic cuts high adrenaline aur visual urgency convey karte hain."
        },
        {
          question: "Timeline par clips ke beech mein achanak bina kisi transition ke ajeeb visual jump aane wale accidental cut ko kya kehte hain?",
          options: ["Jarring Jump Cut", "Smooth crossfade", "Hollywood dissolve", "Match cut"],
          correctIndex: 0,
          explanation: "Unplanned jump cuts spatial continuity break karte hain aur viewer ko visually distract karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum film editing ke invisible art ko master karenge: The Cut! Ek sahi jagah laga cut viewer ko goosebumps de sakta hai. Let's carve our story on the timeline!",
        whatToShowOnScreen: "CapCut timeline. 4 video clips arranged. Demonstrating Match on Action: Trimming Shot A right as hero draws sword, trimming Shot B right as blade catches light. Demonstrating J-Cut: Pulling audio 15 frames left under the previous clip. Playing back the continuous sequence.",
        screenRecordingSteps: [
          "Step 1: 4 clips sequential timeline par place karein.",
          "Step 2: Shot durations tune karein (3s -> 2s -> 1.2s -> 1s).",
          "Step 3: Sword swing moment par match on action cut execute karein.",
          "Step 4: Next clip ki audio track ko 12 frames aage drag karke J-cut create karein.",
          "Step 5: Full sequence play karke seamless flow verify karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, hero ne jaise hi sword draw karni shuru ki, theek usi frame par camera close-up mein cut ho gaya! Cut itna smooth hai ki viewer ko lagta hai dono cameras ek sath live shoot kar rahe the. Aur yeh J-cut dekhiye: Explosion sound pehle hi aane lagi, jisse viewer agle shot ke liye eagerly brace karta hai. Pure cinema craft!",
        practicalDemo: "Frame-accurate scrubbing showing the precise match cut frame.",
        endingAndHomework: "Cutting drill execute karein. Agle lesson mein hum Cinematic Transitions aur Visual Effects add karenge!"
      }
    },
    {
      id: "m10-l4",
      moduleId: 10,
      lessonNumber: 4,
      title: "4. Transitions and effects",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Beginners aksar galti karte hain ki wo har 2 second mein ajeeb 3D cube spin, star wipe ya glitter transitions daal dete hain jo video ko cheap aur amateur bana deti hain!

**Professional Cinema Rule:** 95% of cuts should be **Hard Cuts (Straight Cuts)**! 
Transitions sirf tab use kiye jaate hain jab unka koi specific emotional ya kinetic purpose ho.

The 4 Professional Cinematic Transitions:
1. **Speed Ramp / Whip Pan Blur:**
   Camera horizontal direction mein super fast blur hota hai aur usi directional momentum ke sath agle scene mein enter hota hai. Action trailers ke liye #1 transition.
2. **Flash / Light Leak Transition:**
   Scene change par ek subtle 3-frame white optical lens flare flash hota hai (jaise camera lens par light strike hui ho). Explosions aur beat drops par amazing lagta hai.
3. **Cross Dissolve / Dip to Black:**
   Scene A slowly fade hokar Scene B mein dissolve hota hai. Time passage (dusk to night) ya emotional reflection scenes ke liye best.
4. **Glitch & Digital Distortion (Sci-Fi Only):**
   Cyberpunk aur futuristic AI videos ke liye 2-frame subtle chromatic aberration glitch with scanlines.

Cinematic Video Effects & Color Grading (LUTs):
- **Film Grain (10% - 15%):** Pure digital AI renders ko organic Hollywood 35mm film texture deta hai.
- **Vignette (15%):** Edges ko subtly dark karta hai taaki viewer ka focus center ke action par lock rahe.
- **Teal & Orange LUT:** Shadows ko deep cool cyan aur highlights ko warm golden orange tint provide karta hai.`,
      learningObjectives: [
        "Professional transitions (Whip Pan, Light Leak, Dissolve) vs cheap amateur transitions distinguish karna.",
        "Speed Ramping (Velocity curve) smoothly calibrate karna.",
        "Film grain aur vignette overlays se CGI sterility remove karna.",
        "Cinematic LUTs (Lookup Tables) aur color grading layers apply karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "Transitions panel & Effects library",
        "Cinematic LUTs pack (Included in Course Resources)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Select Transition Cut Point",
          description: "Click the small transition box between Shot 2 and Shot 3 on timeline."
        },
        {
          step: 2,
          title: "Apply 'Whip Pan Right' (Duration 0.2s)",
          description: "Select Whip Pan. Set duration extremely short (0.2 seconds = 5 frames) for snappy kinetic punch."
        },
        {
          step: 3,
          title: "Add Adjustment Layer for Color Grade",
          description: "Create an Adjustment Layer across the entire timeline. Apply 'Cyberpunk Teal & Orange' LUT."
        },
        {
          step: 4,
          title: "Add Subtle Film Grain & Vignette",
          description: "In Video Effects, add 'Film Grain' set to 12% intensity and 'Vignette' set to 15%."
        }
      ],
      practicalExample: "Transforming Raw Clips to Hollywood Grade: Raw AI clips look digitally sterile. We applied: 1) 0.2s Whip Pan transition on beat drop, 2) 12% 35mm Film Grain, 3) Moody Teal & Orange LUT, 4) 15% soft Vignette. Instantly, the video looks like a multimillion-dollar theatrical release trailer!",
      readyPrompts: [
        {
          title: "Cinematic Color Grade Reference",
          prompt: "Theatrical movie color grade, dramatic teal shadows and warm amber skin tones, 35mm film grain, anamorphic blue lens flare, cinematic masterpiece, 8k",
          useCase: "Color palette and film grain reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Transition duration ko 1 ya 2 seconds lamba rakhna.",
          fix: "Action transitions hamesha super fast (0.1s to 0.3s) honi chahiye. Long transitions pacing slow karti hain."
        },
        {
          mistake: "Excessive 50% film grain daal kar video ko noisy bana dena.",
          fix: "Film grain subtle hona chahiye (10% to 15% max), sirf digital sharpness ko soften karne ke liye."
        }
      ],
      homework: "Timeline ke 2 shots ke beech ek 0.2s Whip Pan lagayein, adjustment layer par Film Grain aur Vignette apply karein aur before/after compare karein.",
      summary: "Tasteful transitions (Whip Pan, Light Leaks) aur cinematic finishing touches (Film grain, Vignette, Teal & Orange LUTs) video ko authentic theatrical polish deliver karte hain.",
      quiz: [
        {
          question: "Professional cinematic films mein lagbhag kitne percent cuts simple 'Hard Cuts' (straight cuts) hote hain?",
          options: ["Lagbhag 90% se 95%", "Sirf 10%", "Zero percent", "Har frame par transition hota hai"],
          correctIndex: 0,
          explanation: "Hard cuts cinematic grammar ka primary tool hain. Overuse of transitions cheap amateur look create karta hai."
        },
        {
          question: "Action trailers aur dynamic beat drops par sabse effective snappy transition kaunsa hota hai?",
          options: ["Fast Whip Pan / Directional Blur (0.2 seconds)", "Slow 3D heart wipe", "Page curl transition", "Rainbow spin"],
          correctIndex: 0,
          explanation: "Whip Pan directional blur camera momentum simulate karta hai jo high-energy kinetic impact deta hai."
        },
        {
          question: "Pure digital AI videos par subtle Film Grain (10%-15%) add karne ka primary purpose kya hota hai?",
          options: ["Digital artificial sterility ko remove karke organic 35mm movie film texture simulate karna", "File size badhana", "Audio tez karna", "Video corrupt karna"],
          correctIndex: 0,
          explanation: "Film grain digital perfection ko soften karta hai aur cinematic photochemical look impart karta hai."
        },
        {
          question: "Video frame ke chaaron corners ko slightly dark karke audience ka focus center par lock karne wale effect ko kya kehte hain?",
          options: ["Vignette", "Posterize", "Invert", "Pixelate"],
          correctIndex: 0,
          explanation: "Vignette subtle lens falloff create karta hai jo viewer ki nazar naturally bright central subject par guide karta hai."
        },
        {
          question: "Pre-calibrated color grading formulas ko store karne wali files ko video editing mein kya kehte hain?",
          options: ["LUTs (Lookup Tables)", "PDF files", "ZIP archives", "Audio drivers"],
          correctIndex: 0,
          explanation: "LUTs (Lookup Tables) mathematically color values ko specific cinematic palettes (jaise Teal & Orange) mein transform karte hain."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum apni video ko ek Hollywood movie look denge. Transitions aur effects ek seasoning (masale) ki tarah hain — sahi quantity scene ko elevate karti hai, over-use ruin kar deta hai. Let's add cinematic polish!",
        whatToShowOnScreen: "CapCut Transitions library. Applying 'Whip Pan Right' between clips. Changing duration slider to 0.2s. Adding Adjustment Layer. Applying 'Teal & Orange' LUT. Adding Film Grain effect (12%) and Vignette (15%). Before / After split-screen slider.",
        screenRecordingSteps: [
          "Step 1: Beat drop marker par Whip Pan transition drag karein.",
          "Step 2: Transition duration 0.2 seconds (5 frames) set karein.",
          "Step 3: Adjustment Layer create karein over entire timeline.",
          "Step 4: Cinematic LUT select karein aur intensity 80% configure karein.",
          "Step 5: Film Grain (12%) aur Vignette (15%) enable karke Before/After toggle karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Before mein video ek plain digital render lag rahi thi. Lekin jaise hi humne subtle film grain, vignette aur teal & orange color grade apply kiya, achanak yeh ek $100 Million Hollywood movie ka shot lagne lagi! This is the polish of a master editor.",
        practicalDemo: "Before/After split screen visual comparison.",
        endingAndHomework: "Color grading aur effects apply karein. Agle lesson mein hum Background Music aur Audio Beats synchronization seekhenge!"
      }
    },
    {
      id: "m10-l5",
      moduleId: 10,
      lessonNumber: 5,
      title: "5. Background music",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Background Music (BGM) aapki video ki **Emotional Heartbeat** hai! Music hi decide karta hai ki viewer suspense feel karega, goosebumps aayenge, ya adrenaline pump hoga.

The 3-Act Trailer Music Structure:
1. **Act 1: The Build-Up / Intrigue (0s - 10s):**
   Low atmospheric sub-bass drone, subtle ticking clock sound ya slow ambient piano. Mystery aur curiosity build hoti hai.
2. **Act 2: The Escalation & Riser (10s - 20s):**
   Percussion kicks in! Taiko drums, accelerating synth arpeggios, aur rising pitch jo tension ko peak par le jata hai.
3. **Act 3: The Climax Beat Drop (20s - 30s):**
   BAM! Giant brass braam, heavy 808 sub-bass drop, epic orchestral strings aur fast rhythmic cuts.

Editing to the Beat (Beat Markers):
Music timeline par drag karein. CapCut mein **Auto-Beat Detect** (ya keyboard par **'M' key**) press karke har musical kick aur snare drum par **Yellow Beat Marker** laga dein. Ab aapke saare video cuts in beat markers par magnet ki tarah snap honge! Video aur music 100% sync ho jayegi!`,
      learningObjectives: [
        "3-Act trailer music structure (Intrigue -> Escalation -> Beat Drop) master karna.",
        "Auto-Beat detection aur manual beat markers ('M' key) map karna.",
        "Visual cuts ko musical kicks aur snares ke sath frame-sync karna.",
        "Royalty-free cinematic music sources (Epidemic Sound, Artlist, YouTube Audio Library) navigate karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "Cinematic trailer music track",
        "Headphones"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Import Trailer Music Track",
          description: "Drag high-energy cinematic trailer soundtrack onto Audio Track 1."
        },
        {
          step: 2,
          title: "Run Auto-Beat Detection",
          description: "Select music clip -> Click 'Beats' icon -> Choose 'Auto-Beats (Beat 2)' to generate yellow rhythm markers on waveforms."
        },
        {
          step: 3,
          title: "Snap Visual Cuts to Beat Markers",
          description: "Turn on 'Snapping' (N key). Drag video cut points so every scene transition aligns precisely with a yellow beat marker."
        },
        {
          step: 4,
          title: "Configure Audio Ducking & Levels",
          description: "Set master music level to -12 dB to prevent clipping and distortion."
        }
      ],
      practicalExample: "Beat-Synced Action Sequence: Music waveform par dramatic kick drum aaya -> Screen cuts to Cyber Samurai drawing sword. Second beat drop -> Screen cuts to laser explosion with white flash. Viewer's brain dopamine spikes because eyes and ears receive impact at the exact same millisecond!",
      readyPrompts: [
        {
          title: "Music Waveform Synchronization Reference",
          prompt: "Cinematic audio visualizer waveforms pulsing with neon cyan sound waves, dramatic beat drop peaks, music production studio, 8k",
          useCase: "Audio rhythm visualization"
        }
      ],
      commonMistakes: [
        {
          mistake: "Music ke beat ke beech mein random off-beat cut lagana.",
          fix: "Snapping on rakhein aur cuts hamesha musical transients (kicks/downbeats) par align karein."
        },
        {
          mistake: "Music volume itna loud (+3 dB) rakhna ki speakers crackle karein.",
          fix: "Audio meter hamesha green/yellow zone (-6 dB to -12 dB) mein rehna chahiye, kabhi red line (0 dB) cross na kare."
        }
      ],
      homework: "Ek cinematic track par Beat Markers generate karein aur kam se kam 4 video cuts ko beat markers par 100% snap karke play karein.",
      summary: "Background music 3-Act structure (Intrigue -> Rise -> Drop) follow karti hai. Auto-Beat markers par visual cuts snap karne se hypnotic audience engagement banti hai.",
      quiz: [
        {
          question: "Video cuts ko background music ke beats ke sath perfectly synchronize karne ke liye CapCut mein kaunsa tool use hota hai?",
          options: ["Auto-Beats / Beat Markers ('M' key)", "Color picker", "Font changer", "Aspect ratio"],
          correctIndex: 0,
          explanation: "Beat Markers audio waveform ke rhythmic transients par snapping guides place karte hain."
        },
        {
          question: "Audio meters par professional master music volume level kis safe zone mein hona chahiye?",
          options: ["-6 dB se -12 dB ke beech (Green/Yellow safe zone)", "+10 dB Red clipping zone", "-80 dB (Mute)", "+50 dB"],
          correctIndex: 0,
          explanation: "-6 dB to -12 dB headroom provide karta hai aur audio distortion (clipping) prevent karta hai."
        },
        {
          question: "Cinematic trailer music ka structure aamtaur par kin 3 acts mein divide hota hai?",
          options: ["Act 1: Intrigue/Build-up -> Act 2: Escalation/Riser -> Act 3: Climax Beat Drop", "Song -> Silence -> Noise", "Rap -> Disco -> Opera", "Fast -> Faster -> Fastest"],
          correctIndex: 0,
          explanation: "Yeh classic 3-act trailer pacing curiosity generate karti hai, tension escalate karti hai aur explosive climax deliver karti hai."
        },
        {
          question: "Timeline par clips aur markers ko aapas mein magnet ki tarah snap karne ka shortcut toggle kya hai?",
          options: ["'N' key (Snapping Toggle)", "'Z' key", "'C' key", "'Spacebar'"],
          correctIndex: 0,
          explanation: "'N' key snapping feature toggle karti hai jisse cut points exact beat markers par lock hote hain."
        },
        {
          question: "Beat-synced video editing ka human brain par kya psychological effect hota hai?",
          options: ["Dopamine aur engagement badhti hai kyunki audio aur visual stimuli simultaneously align hote hain", "Neend aati hai", "Headache hota hai", "Kuch nahi hota"],
          correctIndex: 0,
          explanation: "Audio-visual synchrony cognitive processing ko heighten karti hai jisse retention aur viral watch time multiply hota hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum apni video mein soul aur rhythm phookenge. Music hi wo heartbeat hai jo viewer ki saanson ko control karti hai. Let's sync our cuts to the beat!",
        whatToShowOnScreen: "CapCut audio track. Importing high-energy trailer soundtrack. Clicking 'Beats' -> 'Auto-Beats'. Yellow beat dots appearing across the entire waveform. Demonstrating Snapping: Dragging video clips until they snap onto the yellow beat markers. Full playback with synced audio-visual impacts.",
        screenRecordingSteps: [
          "Step 1: Soundtrack drag karein onto Audio Track 1.",
          "Step 2: 'Auto-Beats' enable karein aur yellow markers observe karein.",
          "Step 3: 'N' press karke Snapping on karein.",
          "Step 4: Har video cut ko exact yellow beat marker par snap karein.",
          "Step 5: Fullscreen playback karein with loud speaker audio demonstration."
        ],
        voiceoverHindi: "Dosto dekhiye aur suniye! Har ek kick drum ke sath scene change ho raha hai. Katana swing theek snare drum par hit karta hai, aur beat drop aate hi screen par explosive action unfold hota hai. Yeh synchronization viewer ko screen se chipka deti hai!",
        practicalDemo: "Snapping demonstration and waveform transient visual alignment.",
        endingAndHomework: "Beat sync drill execute karein. Agle lesson mein hum Sound Effects (SFX) aur Foley Design seekhenge!"
      }
    },
    {
      id: "m10-l6",
      moduleId: 10,
      lessonNumber: 6,
      title: "6. Sound effects",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek video bina Sound Effects (SFX) ke sirf ek silent movie jaisi lagti hai. **Sound Effects hi wo cheez hain jo CGI pixels ko physical reality banate hain!**

The 5 Essential SFX Layers in 3D AI Production:
1. **Whooshes & Sweeps:**
   Camera move hone par, character ke tezi se mudne par ya transitions ke doran aane wali hawa ki tezi sound. Pacing ko dynamic banati hai.
2. **Impacts & Hits (Bass Drops / Thuds):**
   Jab sword takrati hai, robot ka pair zameen par padta hai ya punch land hota hai. Isme heavy sub-bass (80Hz rumble) hota hai jo subwoofer ko shake karta hai.
3. **Risers & Tension Builders:**
   Aisi sound jo pitch mein lagatar upar chadhti hai (jaise jet engine takeoff ya ticking alarm). Yeh scene mein climax aane se pehle extreme anticipation create karti hai.
4. **Foley & Mechanical Details:**
   Real-world micro-sounds: Greaves ka clinking metal, footsteps in mud, armor rustle, breathing sounds, laser charging hums.
5. **Atmospheric Ambience (The Room Tone):**
   Rain dripping on tin roof, wind howling through abandoned corridor, low neon electrical hum. Yeh empty silence ko fill karta hai.`,
      learningObjectives: [
        "5 core SFX layers (Whooshes, Impacts, Risers, Foley, Ambience) construct karna.",
        "SFX waveforms ko video ke exact visual frames par align karna.",
        "Audio volume layering aur sub-bass mixing balance karna.",
        "Free commercial SFX libraries (Freesound.org, Soniss GDC packs, Pixabay) navigate karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "SFX Master Library (Included in Course)",
        "Headphones"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Layer Atmospheric Ambience (Bed Track)",
          description: "Place 'Rain and Wind Loop' on Audio Track 2. Set volume to low (-20 dB) to create baseline mood."
        },
        {
          step: 2,
          title: "Add Foley Footsteps & Mechanical Clinks",
          description: "Place 'Heavy Metal Footstep' on Track 3 directly beneath the frame where the boots touch the puddle."
        },
        {
          step: 3,
          title: "Add Cinematic Whoosh on Transitions",
          description: "Place 'Sci-Fi Air Whoosh' right on the 0.2s Whip Pan transition cut point."
        },
        {
          step: 4,
          title: "Add Epic Sub-Bass Impact on Reveal",
          description: "Place 'Deep Cinema Boom / Braam' on the climactic logo reveal or action strike."
        }
      ],
      practicalExample: "The Power of SFX: Video of robot drawing laser sword: 1) Ambient neon hum playing softly. 2) 'Shhhk' metal unsheathing sound. 3) Electrical plasma hum growing in pitch. 4) 'VWHOOOM' deep laser ignition sound right as blade extends! The result is 1000% realistic and believable!",
      readyPrompts: [
        {
          title: "SFX Studio Soundstage Concept",
          prompt: "Cinematic recording studio control room with glowing foley microphones, mixing console sliders with illuminated VU meters, sound design workstation, 8k",
          useCase: "Sound design inspiration"
        }
      ],
      commonMistakes: [
        {
          mistake: "SFX ko video ke action se 2 frame aage ya peeche rakhna.",
          fix: "Audio waveform ke peak spike ko video ke visual impact frame par frame-accurately snap karein. 1 frame ka delay bhi fake lagta hai."
        },
        {
          mistake: "Saare sound effects ko ek hi volume (0 dB) par baja dena.",
          fix: "Hierarchy banayein: Impacts (-6 dB), Whooshes (-12 dB), Foley (-16 dB), Ambience (-22 dB)."
        }
      ],
      homework: "Apni video sequence par kam se kam 3 alag SFX layers (1 Ambience, 1 Whoosh, 1 Heavy Impact) place karein aur balance karein.",
      summary: "Sound effects (Whooshes, Impacts, Foley, Ambience) pixels ko physical reality dete hain. Frame-accurate waveform alignment audio immersion ki kunji hai.",
      quiz: [
        {
          question: "Fast camera movement ya scene transition ke sath use hone wali hawa ki swift sound ko kya kehte hain?",
          options: ["Whoosh / Swish Sound Effect", "White noise", "Dial tone", "Static beep"],
          correctIndex: 0,
          explanation: "Whoosh SFX visual camera speed aur kinetic motion ko auditory momentum provide karta hai."
        },
        {
          question: "Climactic action hit ya explosion ke sath use hone wale deep sub-bass sound effect ko kya kehte hain?",
          options: ["Impact / Hit / Cinematic Boom", "Whisper", "Cough", "Mouse click"],
          correctIndex: 0,
          explanation: "Cinematic Impacts low-frequency sub-bass shockwaves deliver karte hain jo physically feel hoti hain."
        },
        {
          question: "Character ke footsteps, kapdon ki rustling aur realistic object interaction sounds ko film industry mein kya kehte hain?",
          options: ["Foley Sound Design", "Dubbing", "Subtitles", "Copyright"],
          correctIndex: 0,
          explanation: "Foley artist Jack Foley ke naam par named field hai jo real-world acoustic physical interactions recreate karta hai."
        },
        {
          question: "Climax aane se pehle tension escalate karne wale rising-pitch sound effect ko kya kehte hain?",
          options: ["Riser / Tension Stinger", "Fade out", "Mute switch", "Low pass"],
          correctIndex: 0,
          explanation: "Risers acoustic pitch aur volume steadily amplify karte hain jo anticipation build karta hai."
        },
        {
          question: "Background room tone ya environmental rain/wind loop ko kis volume level par mix karna chahiye?",
          options: ["Subtle low level (-18 dB se -24 dB) taaki wo dialogue ya music ko overpower na kare", "+12 dB maximum", "Zero volume", "Hamesha loudest"],
          correctIndex: 0,
          explanation: "Ambience subtle acoustic bed hota hai jo scene ke silent void ko fill karta hai bina main audio ko mask kiye."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum sound designers banenge. Dekhiye, bina sound effects ke visual ek photo jaisa lagta hai. Lekin jaise hi hum impacts, whooshes aur foley layer karte hain, poori duniya zinda ho uthti hai. Let's design sound!",
        whatToShowOnScreen: "CapCut multi-track audio layout. Tracks labeled: 1) Music, 2) Ambience Bed, 3) Foley Footsteps, 4) Whooshes, 5) Impacts. Zooming into waveform. Aligning the sharp spike of a 'Metal Clash' SFX directly to the video frame of blade contact. Playing back the bone-chilling sequence.",
        screenRecordingSteps: [
          "Step 1: Track 2 par rain ambience bed drop karein (-20 dB).",
          "Step 2: Transition frame par 'Fast Whoosh' align karein.",
          "Step 3: Blade impact frame par 'Cinematic Sub-Boom' place karein.",
          "Step 4: Footstep contacts par foley mud splashes place karein.",
          "Step 5: Mute/Unmute toggle karke audio difference demonstrate karein."
        ],
        voiceoverHindi: "Dosto suniye! Pehle suniye bina SFX ke... bilkul flat lag raha hai. Ab suniye SFX ke sath... BOOM! Har ek footstep ke sath mitti ka splash, sword ke swing par aerodynamic whoosh, aur impact par subwoofer-shaking bass. This is Hollywood audio design!",
        practicalDemo: "Audio A/B testing (With SFX vs Without SFX).",
        endingAndHomework: "SFX layering complete kijiye. Agle lesson mein hum AI Voiceovers aur Animated Subtitles master karenge!"
      }
    },
    {
      id: "m10-l7",
      moduleId: 10,
      lessonNumber: 7,
      title: "7. Voiceovers and subtitles",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek blockbuster movie trailer ya engaging short film ka soul hota hai uska **Narrator Voiceover (VO)** aur **Dynamic Kinetic Subtitles**!

AI Voiceover Generation (ElevenLabs Workflow):
Purane zamane mein professional voice actor hire karne mein hazaron rupaye lagte the. Aaj **ElevenLabs** jaisi neural voice engines deep, gravelly, cinematic Hollywood movie trailer voices generate kar deti hain jo insaan se bhi zyada powerful sound karti hain!

Voice Prompt Scripting Blueprint:
Trailer script short, punchy aur dramatic honi chahiye. Har line ke baad \`...\` (pause) dekar tension build karein:
*"In a world lost to shadows... (pause)... one warrior rises from the ashes... (pause)... to claim the future."*

Dynamic Animated Subtitles in CapCut:
Social media par **70% log videos bina sound ke mute par scroll karte hain!** Agar aapki video mein captions nahi hain, toh log skip kar denge.
CapCut ka **Auto-Captions Feature**:
1. 'Captions' tab par click karein -> 'Auto Captions' -> Click Create.
2. 10 seconds mein AI speech ko transcribe karke word-by-word animate kar dega.
3. Futuristic Cyber Preset choose karein: Glowing Neon Yellow/Cyan text, bold font, subtle pop animation on active spoken word!`,
      learningObjectives: [
        "ElevenLabs se Hollywood movie trailer AI voiceovers generate karna.",
        "Voice pacing, dramatic pauses aur emotional inflections script karna.",
        "CapCut Auto-Captions AI transcription execute karna.",
        "Viral kinetic animated subtitle templates customize karna."
      ],
      requiredTools: [
        "Web browser (elevenlabs.io free account)",
        "CapCut Desktop",
        "Trailer narration script"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Generate Voiceover in ElevenLabs",
          description: "Select voice 'Adam' or 'Marcus' (Deep Movie Trailer Voice). Enter punchy 3-line narration script. Download MP3."
        },
        {
          step: 2,
          title: "Import Voiceover onto Audio Track 1",
          description: "Place voiceover centrally in your edit. Ensure vocal spikes don't clash with loud music hits."
        },
        {
          step: 3,
          title: "Generate Auto-Captions in CapCut",
          description: "Go to Text -> Auto Captions -> Select Language -> Generate. Word-accurate subtitle blocks appear instantly."
        },
        {
          step: 4,
          title: "Apply Cyberpunk Subtitle Styling",
          description: "Select font 'Montserrat / Space Grotesk Bold', uppercase, yellow/cyan stroke, with subtle 'Pop' active word animation."
        }
      ],
      practicalExample: "Complete Voice & Caption Integration: ElevenLabs deep trailer voice: 'They thought humanity was extinct... They were wrong!' Combined with glowing yellow animated kinetic text popping on each word in center screen. Watch retention doubles instantly!",
      readyPrompts: [
        {
          title: "Voiceover Studio Script Reference",
          prompt: "Futuristic digital soundstage with an AI voice hologram visualizing audio frequency spectrum, glowing kinetic words hovering in holographic space, 8k",
          useCase: "Voice and subtitle design visualization"
        }
      ],
      commonMistakes: [
        {
          mistake: "Voiceover aur background music ka volume same level par chhod dena.",
          fix: "Music par 'Audio Ducking' enable karein taaki jab narrator bole toh music volume automatically -8 dB drop ho jaye, aur dialogue crystal clear sunai de."
        },
        {
          mistake: "Subtitles ko screen ke bilkul bottom mein daal dena jahan TikTok/Reels ke UI buttons unhe chhipa dein.",
          fix: "Captions ko vertical center (middle-lower third) safe zone mein place karein."
        }
      ],
      homework: "ElevenLabs se ek 15-second dramatic voiceover generate karein, CapCut mein import karke Auto-Captions generate karein aur cyber glowing style apply karein.",
      summary: "ElevenLabs AI voiceovers aur CapCut kinetic auto-captions storytelling ko complete karte hain aur silent mobile viewers ka 100% engagement capture karte hain.",
      quiz: [
        {
          question: "Hollywood movie trailers aur cinematic voiceovers ke liye industry-leading AI voice generation platform kaunsa hai?",
          options: ["ElevenLabs", "MS Paint", "WinRAR", "Disk Defragmenter"],
          correctIndex: 0,
          explanation: "ElevenLabs deep learning vocal synthesis provide karta hai jisme realistic human emotional inflections aur rich timbres hote hain."
        },
        {
          question: "Social media statistics ke according kitne percent log mobile par videos bina sound ke (mute par) dekhte hain?",
          options: ["Lagbhag 70% se 80%", "0%", "100% sabhi headphones lagate hain", "Sirf 5%"],
          correctIndex: 0,
          explanation: "Major social platforms par over 70% audience videos mute par start karti hai, isliye visual animated captions compulsory hain."
        },
        {
          question: "Jab narrator bolta hai toh background music ka volume automatically thoda kam hone ke feature ko kya kehte hain?",
          options: ["Audio Ducking", "Audio Deleting", "Volume Mute", "Audio Invert"],
          correctIndex: 0,
          explanation: "Audio Ducking voiceover frequencies ke doran background music ko attenuate karta hai speech clarity preserve karne ke liye."
        },
        {
          question: "Instagram Reels aur YouTube Shorts mein subtitles ko screen par kahan place karna chahiye?",
          options: ["Middle-lower third (Center safe zone)", "Bilkul bottom right corner par buttons ke peeche", "Screen ke bahar", "Bilkul top edge par"],
          correctIndex: 0,
          explanation: "Center-middle third safe zone UI buttons (Like, Share, Comments) aur account names ke sath overlap avoid karti hai."
        },
        {
          question: "CapCut Desktop mein bolte hue shabdon ke sath-sath text highlight hone wale animation ko kya kehte hain?",
          options: ["Active Word Pop / Kinetic Karaoke Highlight", "Static watermark", "Fading screen", "Blank text"],
          correctIndex: 0,
          explanation: "Kinetic word-by-word highlight viewer ke reading attention ko exact spoken audio cadence ke sath synchronize karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Ek powerful aawaz kisi bhi ordinary scene ko epic bana sakti hai. Aaj hum Hollywood movie trailer voice generate karenge aur modern viral animated captions setup karenge. Let's give our video a voice!",
        whatToShowOnScreen: "ElevenLabs web dashboard. Selecting voice 'Marcus / Deep Trailer'. Typing dramatic script with ellipses. Generating and playing the booming cinematic audio. Importing into CapCut. Demonstrating 'Audio Ducking'. Clicking 'Auto Captions' -> Selecting glowing yellow kinetic template.",
        screenRecordingSteps: [
          "Step 1: ElevenLabs mein trailer narration script generate karein.",
          "Step 2: MP3 file CapCut voice track par import karein.",
          "Step 3: Music track par 'Audio Ducking' checkbox enable karein.",
          "Step 4: Text -> Auto Captions -> Generate par click karein.",
          "Step 5: Kinetic word-highlight style customize karein aur play karein."
        ],
        voiceoverHindi: "Dosto suniye aur dekhiye screen par! 'They thought the future was written... (boom)... until the machine awakened.' Notice kijiye narrator ke bolte hi background music automatically dip hota hai aur har ek word screen par electric yellow glow ke sath pop kar raha hai. This is viral masterclass quality!",
        practicalDemo: "Audio ducking attenuation and word-by-word kinetic text playback.",
        endingAndHomework: "Voiceover aur captions setup karein. Agle lesson mein hum Final Video Export aur Master Render settings seekhenge!"
      }
    },
    {
      id: "m10-l8",
      moduleId: 10,
      lessonNumber: 8,
      title: "8. Final video export",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Aapka master edit complete ho chuka hai! Clips aligned hain, music beat-synced hai, sound effects thundering hain aur captions sharp hain. Ab aakhri crucial step hai: **Final Video Export!**

Agar aapne galat export settings choose kar li, toh YouTube ya Instagram aapki video ko compress karke blurry pixelated kachra bana dega!

Master Export Settings Blueprint:
1. **Resolution:**
   - **4K Ultra HD (3840x2160):** Recommended for YouTube 16:9! YouTube 4K videos ko unka superior 'VP09 / AV01' codec assign karta hai jisse video crystal clear dikhti hai chahe viewer 1080p par hi kyu na dekhe!
   - **1080x1920 (Full HD):** Recommended for Instagram Reels & Shorts (Instagram 4K uploads ko aggressively throttle karta hai).
2. **Codec & Bitrate:**
   - **Codec:** H.264 (Universal compatibility) ya H.265 (HEVC - for higher compression efficiency).
   - **Bitrate:** **Higher / Custom (Constant Bitrate CBR @ 30 - 50 Mbps)**. Low bitrate video mein dark scenes blocky pixelate ho jaate hain.
3. **Frame Rate:**
   - Source clips ke sath match karein: **24 FPS** (Film cinematic) ya **30/60 FPS**.
4. **Audio Format:**
   - Format: **AAC / MP3**, Bitrate: **320 kbps (Maximum High Fidelity)**, Sample Rate: **48,000 Hz (48 kHz Broadcast Standard)**.`,
      learningObjectives: [
        "Platform-specific export resolutions (4K YouTube vs 1080p Reels) master karna.",
        "Bitrate calibration (CBR vs VBR, 30-50 Mbps) execute karna.",
        "H.264 vs H.265 codecs evaluate karna.",
        "Audio master bitrates (320 kbps @ 48kHz) lock karke pristine master export deliver karna."
      ],
      requiredTools: [
        "CapCut Desktop",
        "Export panel",
        "VLC Media Player for final QA playback"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Click Export in Top-Right",
          description: "Click the blue 'Export' button in CapCut Desktop."
        },
        {
          step: 2,
          title: "Configure Video Parameters",
          description: "Title: '3D_AI_Studio_Master_Trailer_4K'. Resolution: 4K (or 1080p). Bitrate: Higher (or Custom 35 Mbps). Codec: H.264."
        },
        {
          step: 3,
          title: "Configure Broadcast Audio Parameters",
          description: "Audio Format: AAC. Sample Rate: 48,000 Hz. Bitrate: 320 kbps."
        },
        {
          step: 4,
          title: "Run Final Export and QA Inspection",
          description: "Click Export. Open exported file in VLC, inspect fullscreen in dark room, verify audio levels and zero visual compression banding."
        }
      ],
      practicalExample: "Export Benchmark: Low Bitrate Export (5 Mbps): Dark shadows in cyberpunk alley broke into ugly grey pixel blocks. High Bitrate Master Export (35 Mbps CBR): Wet pavement reflections, cyan neon gradients and rain droplets retained razor-sharp crisp 4K fidelity with zero banding!",
      readyPrompts: [
        {
          title: "Final 4K Master Asset Reference",
          prompt: "Theatrical release 4K movie title card, glowing embossed holographic lettering reading '3D AI STUDIO', cinematic lens flares, deep black background with pristine zero noise, 8k",
          useCase: "Final export title benchmark"
        }
      ],
      commonMistakes: [
        {
          mistake: "Instagram Reels ke liye 4K 60fps heavy file export karke mobile app se upload kar dena.",
          fix: "Instagram compress kar deta hai. Reels ke liye 1080x1920 @ 30fps with 15 Mbps bitrate sweet-spot hai."
        },
        {
          mistake: "Audio sample rate ko 44.1 kHz par chhod dena.",
          fix: "Video standards hamesha 48 kHz (48,000 Hz) audio sample rate demand karte hain audio drift avoid karne ke liye."
        }
      ],
      homework: "Apni complete edited sequence ko 4K/1080p master settings ke sath export karein, VLC player mein fullscreen play karein aur audio sync verify karein.",
      summary: "Final export high bitrate (30-50 Mbps), H.264 codec aur 48kHz/320kbps audio se deliver hota hai. Sahi settings platform compression algorithms se video quality ko bachaati hain.",
      quiz: [
        {
          question: "Video editing aur broadcast industry mein universal audio sample rate standard kya hota hai?",
          options: ["48,000 Hz (48 kHz)", "44,100 Hz (CD Audio)", "1,000 Hz", "100,000 Hz"],
          correctIndex: 0,
          explanation: "48 kHz video broadcast aur cinema ka universal audio sample rate standard hai."
        },
        {
          question: "Dark scenes aur fast motion mein blocky pixelation (banding) se bachne ke liye kis setting ko high rakhna zaroori hai?",
          options: ["Bitrate (Mbps)", "Monitor brightness", "Font size", "Timeline zoom"],
          correctIndex: 0,
          explanation: "High bitrate (30-50 Mbps) har second mein more data allocate karta hai jo gradients aur dark shadows ko smooth rakhta hai."
        },
        {
          question: "YouTube par 1080p quality mein bhi sabse sharp compression codec (VP09/AV01) unlock karne ke liye kya trick use hoti hai?",
          options: ["Video ko 4K (3840x2160) export karke upload karna", "File ka naam .mp3 rakhna", "Video ko black and white karna", "Audio delete karna"],
          correctIndex: 0,
          explanation: "YouTube 4K uploads ko instantly high-bitrate VP09/AV01 codec assign karta hai jo 1080p playback par bhi crisp clarity deta hai."
        },
        {
          question: "Universal maximum compatibility ke liye sabse reliable video codec kaunsa hai?",
          options: ["H.264 (MP4)", "FLV legacy", "RealPlayer .rm", "AVI uncompressed"],
          correctIndex: 0,
          explanation: "H.264 (AVC) har phone, browser, TV aur gaming console par 100% native hardware decode support rakhta hai."
        },
        {
          question: "Congratulations! Module 10 complete karne par aapne kis domain ki complete mastery achieve kar li hai?",
          options: ["Professional Video Editing, Sound Design, Voiceover Integration aur 4K Master Post-Production", "Sirf typing speed", "Computer repair", "Printer servicing"],
          correctIndex: 0,
          explanation: "Aapne raw AI clips ko studio-grade cinematic master trailer mein assemble karne ka end-to-end post-production workflow master kar liya hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 10 ke final lesson mein aapka swagat hai. Aaj hum apni mehnat ko final master video file mein export karenge. Ye settings ensure karengi ki aapka video har platform par bina kisi quality loss ke chamakta rahe. Let's export our masterpiece!",
        whatToShowOnScreen: "CapCut Desktop top-right 'Export' button click. Export modal dialog box. Configuring: Title: '3D_AI_Studio_Final_Trailer_4K.mp4', Resolution: 4K, Bitrate: Custom (35 Mbps), Codec: H.264, Audio: 320 kbps @ 48kHz. Clicking Export. Progress bar 0% to 100%. Opening exported file in VLC fullscreen.",
        screenRecordingSteps: [
          "Step 1: Export button click karein.",
          "Step 2: Resolution 4K (3840x2160) select karein.",
          "Step 3: Bitrate 'Custom' select karke 35,000 kbps set karein.",
          "Step 4: Audio format 320 kbps AAC @ 48kHz verify karein.",
          "Step 5: Export execute karein aur finished master playback celebrate karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Hamari final video render ho chuki hai. VLC mein dekhiye: Har ek neon light ka gradient, wet floor par water ripples aur bass-shaking audio tracks bilkul pristine 4K broadcast standard par play ho rahe hain. You are now officially a Professional Video Post-Production Artist! Module 10 quiz submit kijiye. Module 11 mein hum Social Media Content Creation aur Viral Optimization seekhenge!",
        practicalDemo: "VLC player fullscreen playback inspection and file properties check.",
        endingAndHomework: "Module 10 quiz complete karein. Next Module 11 mein hum Social Media Viral Content Creation explore karenge!"
      }
    }
  ]
};

