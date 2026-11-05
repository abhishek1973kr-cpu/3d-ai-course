export const module7 = {
  id: 7,
  slug: "professional-3d-animation",
  title: "MODULE 7: PROFESSIONAL 3D ANIMATION",
  subtitle: "Timelines, Keyframes, Interpolation Curves, Camera Rigs aur Cinematic Sequences",
  description: "3D animation ki deep craft. Graph editor se smooth easing (Ease-in, Ease-out), object physics motion, dynamic drone camera orbits aur multi-shot cinematic sequencing.",
  icon: "PlayCircle",
  badge: "Animation Pro",
  totalLessons: 6,
  totalDuration: "88 min",
  lessons: [
    {
      id: "m7-l1",
      moduleId: 7,
      lessonNumber: 1,
      title: "1. Understanding animation timelines",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Animation ka basic matlab hota hai: **Change over Time** (Samay ke sath kisi cheez ka badalna). 

Blender mein **Timeline** wo rasta hai jispar time aage badhta hai. Timeline frames mein divide hoti hai. Agar aapka project 24 FPS (Frames Per Second) par chal raha hai, toh iska matlab 1 second ke andar timeline 24 frames aage badhegi.

Timeline ke Essential Components:
1. **Playhead / Current Frame Indicator (Blue line):** Yeh batata hai ki aap abhi video ke kis exact frame par khade hain.
2. **Start Frame & End Frame:** Animation ki shuruaat (usually frame 1) aur aakhri frame (e.g. frame 120 = 5 seconds at 24fps).
3. **Playback Controls:** Spacebar dabane se animation play ya pause hoti hai. Shift + Left Arrow se jump to start frame.
4. **Auto-Keying Toggle (Record icon):** Jab yeh ON hota hai, aap viewport mein jo bhi move ya rotate karenge, Blender automatically us frame par keyframe record kar lega!`,
      learningObjectives: [
        "Timeline architecture, Frame Rate (FPS) aur timecode translation master karna.",
        "Frame cursor navigation aur playback controls operate karna.",
        "Start Frame aur End Frame range synchronize karna.",
        "Auto-Keying mode ka smart aur cautious use seekhna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Timeline window"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Verify Project Frame Rate",
          description: "In Output Properties, check Frame Rate is set to 24 FPS (Cinematic standard)."
        },
        {
          step: 2,
          title: "Define Clip Duration",
          description: "Set Start Frame: 1, End Frame: 120 (5 seconds total animation)."
        },
        {
          step: 3,
          title: "Scrub the Timeline",
          description: "Click and drag the blue playhead marker across frames to inspect time progression."
        },
        {
          step: 4,
          title: "Toggle Playback",
          description: "Press Spacebar to run real-time animation playback loop."
        }
      ],
      practicalExample: "Timeline Timing Calculation: Agar aapko character ko 3 seconds mein ek door tak walk karwana hai: 3 seconds * 24 FPS = 72 frames. Iska matlab Frame 1 par character start position par hoga aur Frame 72 par door par pahuchega!",
      readyPrompts: [
        {
          title: "Time-Lapse Motion Concept",
          prompt: "Cinematic time-lapse shot of a futuristic neon city from dusk till midnight, high-speed flying vehicle light trails, clouds rushing across cyberpunk skyline, 8k",
          useCase: "Motion progression visual guide"
        }
      ],
      commonMistakes: [
        {
          mistake: "End frame ko default 250 par chhod dena jab animation sirf 60 frames ki ho.",
          fix: "Render time aur file size bachane ke liye End Frame ko exact animation length par trim karein."
        },
        {
          mistake: "Auto-keying ON chhod kar bhool jana.",
          fix: "Auto-keying har accidental mouse movement ko keyframe bana deta hai. Animation set karne ke baad use turn off karein."
        }
      ],
      homework: "Timeline par Start 1 aur End 72 set karein, frame scrub karke 24 FPS ke hisaab se seconds calculate karein.",
      summary: "Timeline 3D animation ka chronometer hai. Frame rate (24 FPS) aur frame range animation ke exact timing aur pacing ko control karte hain.",
      quiz: [
        {
          question: "24 FPS par 10-second ki animation ke liye Timeline ka End Frame kitna hona chahiye?",
          options: ["240 Frames", "24 Frames", "100 Frames", "10 Frames"],
          correctIndex: 0,
          explanation: "10 seconds * 24 frames per second = 240 frames."
        },
        {
          question: "Timeline par cursor ko turant Frame 1 (start) par le jane ka shortcut kya hai?",
          options: ["Shift + Left Arrow", "Ctrl + Alt + Delete", "Page Down", "F1"],
          correctIndex: 0,
          explanation: "Shift + Left Arrow timeline cursor ko instantly first frame par reset karta hai."
        },
        {
          question: "Timeline par har movement ko automatically keyframe mein record karne wale mode ko kya kehte hain?",
          options: ["Auto-Keying", "Screen recording", "Auto-save", "Wireframe"],
          correctIndex: 0,
          explanation: "Auto-keying mode (blue record circle) transform hone par automatically keyframe generate karta hai."
        },
        {
          question: "Timeline par yellow diamonds kis cheez ko represent karte hain?",
          options: ["Keyframes", "Missing audio", "Errors", "Deleted files"],
          correctIndex: 0,
          explanation: "Yellow diamond icons timeline par stored keyframe data points ko darshate hain."
        },
        {
          question: "Cinema standard frame rate 24 FPS kyu prefer kiya jata hai?",
          options: ["Yeh human eye ke liye natural motion blur aur cinematic realism provide karta hai", "Kyunki 24 number lucky hota hai", "Kyunki files free hoti hain", "Kyunki audio mute ho jati hai"],
          correctIndex: 0,
          explanation: "24 FPS cinematic motion signature produce karta hai jise audience Hollywood films se associate karti hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! 3D animation time aur space ka dance hai. Aaj hum timeline ke master banenge taaki aap har motion ki timing ko frame-by-frame control kar sakein.",
        whatToShowOnScreen: "Blender Timeline window highlighted. Setting Start: 1, End: 120. Scrubbing the blue playhead. Timeline transport controls (Play, Loop, Jump). Auto-keying button toggle.",
        screenRecordingSteps: [
          "Step 1: Timeline panel inspect karein.",
          "Step 2: End Frame field mein 120 type karein.",
          "Step 3: Playhead scrub karke frame numbers show karein.",
          "Step 4: Spacebar press karke 24 FPS playback loop demonstrate karein.",
          "Step 5: Auto-keying toggle button highlight karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, timeline ke bottom par 24 FPS constant rate par tick ho raha hai. Is timeline par hum decide karenge ki kab hamara character talwar nikalega aur kab camera zoom karega. Time control is directorial control!",
        practicalDemo: "Frame scrubbing with real-time FPS counter monitoring.",
        endingAndHomework: "Timeline mastery drill complete karein. Agle lesson mein hum Keyframes generate karna seekhenge!"
      }
    },
    {
      id: "m7-l2",
      moduleId: 7,
      lessonNumber: 2,
      title: "2. Creating keyframes",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `**Keyframe** animation ka sabse fundamental concept hai. 

Purane zamane mein Disney ke master artists sirf main poses draw karte the (jinhe 'Key Frames' kaha jata tha), aur assistant artists beech ke frames draw karte the (jinhe 'In-betweens' kaha jata tha). 

3D software mein **Aap Master Artist hain** aur **Computer aapka assistant hai!**
Aap sirf 2 keyframes banate hain:
- Frame 1: Object yahan hai (Point A).
- Frame 50: Object wahan hai (Point B).
Computer beech ke saare 48 frames ko mathematically calculate karke smooth motion generate kar deta hai! Is process ko **Interpolation** kehte hain.

Keyframe Insert karne ka Shortcut:
Object select karein aur keyboard par **'I' key (Insert Keyframe)** press karein -> Choose:
- **Location:** Sirf position store karne ke liye.
- **Rotation:** Sirf turning angle store karne ke liye.
- **Location & Rotation:** Dono ek sath store karne ke liye (Most common!).`,
      learningObjectives: [
        "Keyframe insertion shortcut ('I' key / K menu) master karna.",
        "Location, Rotation aur Scale keyframe types distinguish karna.",
        "Mathematical interpolation (linear vs bezier easing) samajhna.",
        "Graph Editor mein easing curves (Ease-in, Ease-out) fine-tune karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Graph Editor workspace"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Set Initial Keyframe at Frame 1",
          description: "Move playhead to Frame 1. Select object. Press 'I' -> Location & Rotation."
        },
        {
          step: 2,
          title: "Advance Timeline to Frame 60",
          description: "Move playhead to Frame 60 (2.5 seconds later)."
        },
        {
          step: 3,
          title: "Transform Object to Target State",
          description: "Move object across room (G -> X -> 10) and rotate 180 degrees (R -> Z -> 180)."
        },
        {
          step: 4,
          title: "Set Second Keyframe",
          description: "Press 'I' -> Location & Rotation. Press Spacebar and watch smooth interpolated movement!"
        }
      ],
      practicalExample: "Flying Sci-Fi Drone: Frame 1 par drone ground par hai (I -> Location). Frame 40 par drone 5 meter upar hawa mein uthta hai (G -> Z -> 5, I -> Location). Spacebar press karne par drone smoothly ground se hawa mein glide karta hai!",
      readyPrompts: [
        {
          title: "Dynamic Aerial Motion Concept",
          prompt: "Futuristic anti-gravity speeder bike hovering above neon salt flats, dramatic trailing light trails, dynamic motion blur, high-speed camera tracking, 8k",
          useCase: "Keyframe trajectory visualization"
        }
      ],
      commonMistakes: [
        {
          mistake: "Object move karne ke baad 'I' key dabana bhool jana.",
          fix: "Agar aapne keyframe insert nahi kiya, toh jaise hi aap playhead move karenge object wapas apni purani jagah chala jayega! Always press 'I' after transforming."
        },
        {
          mistake: "Linear interpolation se robotic stiff movement banna.",
          fix: "Graph Editor mein Bezier curves use karein taaki object smoothly slow shuru ho aur smoothly slow rukhe (Ease-in, Ease-out)."
        }
      ],
      homework: "Ek cube ko Frame 1 se Frame 60 ke beech move aur rotate karke uski smooth keyframe animation banayein.",
      summary: "Keyframes ('I' key) Point A aur Point B par state record karte hain, aur computer unke beech smooth interpolation calculate karta hai.",
      quiz: [
        {
          question: "Blender mein selected object par keyframe insert karne ka universal shortcut key kya hai?",
          options: ["'I' key (Insert Keyframe)", "'K' key only", "'F' key", "Ctrl + P"],
          correctIndex: 0,
          explanation: "'I' key Insert Keyframe menu open karti hai jahan se Location, Rotation aur Scale channels store hote hain."
        },
        {
          question: "Do keyframes ke beech computer dwara automatically frames calculate karne ke process ko kya kehte hain?",
          options: ["Interpolation / Tweening", "Audio encoding", "Screen capture", "Video compression"],
          correctIndex: 0,
          explanation: "Interpolation do mathematical points ke beech smooth intermediate frames calculate karta hai."
        },
        {
          question: "Natural motion mein object ka dheere se shuru hona aur dheere se rukna kis curve se achieve hota hai?",
          options: ["Bezier Easing (Ease-in / Ease-out)", "Linear straight line", "Random noise", "Instant jump"],
          correctIndex: 0,
          explanation: "Bezier curves acceleration aur deceleration provide karti hain jo real-world physics ke inertia se match karti hai."
        },
        {
          question: "Timeline par kisi keyframe ko delete karne ke liye kya press karte hain?",
          options: ["Keyframe select karke 'X' ya Delete key", "Escape", "Spacebar", "Enter"],
          correctIndex: 0,
          explanation: "Selected keyframe diamonds ko 'X' press karke delete kiya ja sakta hai."
        },
        {
          question: "Animation curves ki visual slope aur acceleration inspect karne wale editor ko kya kehte hain?",
          options: ["Graph Editor", "Notepad", "Calculator", "Web View"],
          correctIndex: 0,
          explanation: "Graph Editor animation channels ko editable mathematical bezier curves ke roop mein display karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum computer ko apna assistant banayenge. Hum sirf do points define karenge aur computer beech ka poora rasta animate karega. Let's create our first keyframes!",
        whatToShowOnScreen: "Viewport with floating cyber drone. Timeline at Frame 1 -> Pressing 'I' (Yellow diamond appears). Scrubbing to Frame 50 -> Moving drone -> Pressing 'I'. Playing back smooth flight motion.",
        screenRecordingSteps: [
          "Step 1: Frame 1 par drone select karein aur 'I -> Location & Rotation' press karein.",
          "Step 2: Playhead Frame 48 (2 seconds) par le jayein.",
          "Step 3: Drone ko X aur Z axis par move karein aur tilt rotate karein.",
          "Step 4: Dobara 'I' press karein.",
          "Step 5: Frame 1 par jakar Spacebar dabayein aur flight play karein."
        ],
        voiceoverHindi: "Notice kijiye dosto, humne beech ke 46 frames mein kuch nahi kiya, lekin drone kitni smooth velocity ke sath hawa mein glide kar raha hai. Bezier easing ki wajah se start aur stop bilkul natural lag raha hai. You are now animating in 3D!",
        practicalDemo: "Graph editor curve handle tweaking to exaggerate acceleration.",
        endingAndHomework: "Keyframe drill execute karein. Agle lesson mein hum complex Object Animation aur mechanical physics explore karenge!"
      }
    },
    {
      id: "m7-l3",
      moduleId: 7,
      lessonNumber: 3,
      title: "3. Object animation",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Mechanical objects jaise flying spaceships, racing cars, rotating planets, ya robotic opening doors ko animate karne ke liye **Physics & Constraints** ka use kiya jata hai.

Object Animation ke 3 Master Techniques:
1. **Parenting (Ctrl + P):**
   Agar aap chahte hain ki ek weapon character ke haath ke sath move kare, ya car ke pahiye car body ke sath chalte rahein, toh hum **Parenting** use karte hain:
   *Pehle Child select karein, fir Shift dabakar Parent select karein -> Press Ctrl + P -> Set Parent to Object.* Ab jab Parent move hoga, Child automatically sath chalega!
2. **Follow Path Constraint:**
   Ek curved bezier curve line banayein (jaise flight path). Spaceship par 'Follow Path' constraint lagayein. Ab spaceship bina kisi complex keyframes ke us 3D curve line par perfectly follow karegi jaise rail track par train!
3. **Continuous Rotation (Generator Modifiers):**
   Rotating fans, car wheels ya glowing holographic rings ke liye bar-bar keyframes lagane ke badle Graph Editor mein \`#frame * 0.05\` expression use karein for infinite continuous rotation!`,
      learningObjectives: [
        "Object hierarchy aur Parenting (Ctrl + P) master karna.",
        "Bezier Curve path animation aur Follow Path constraint use karna.",
        "Mechanical rigid body movement principles apply karna.",
        "Continuous rotational expressions configure karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Bezier curve and mechanical prop"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Create Flight Curve Path",
          description: "Shift + A -> Curve -> Bezier. Scale and bend the curve across your 3D world."
        },
        {
          step: 2,
          title: "Attach Object to Curve",
          description: "Select Ship -> Object Constraints tab (two linked wheels icon) -> Add 'Follow Path' -> Target: BezierCurve."
        },
        {
          step: 3,
          title: "Enable Follow Curve & Animate Path",
          description: "Check 'Follow Curve' so the ship automatically banks and faces the forward trajectory. Click 'Animate Path'."
        },
        {
          step: 4,
          title: "Inspect Dynamic Flight",
          description: "Press Spacebar. The ship swoops and banks along the 3D roller-coaster path effortlessly!"
        }
      ],
      practicalExample: "Sci-Fi Space Dogfight: Ek complex spiral curve banaya. Spaceship ko 'Follow Path' assign kiya with 'Follow Curve' enabled. Spaceship automatically realistic banking angle mein 360 spiral flight karti hui camera ke paas se zoom kar gayi. 2 minutes mein movie-level shot ready!",
      readyPrompts: [
        {
          title: "Curved Flight Path Concept",
          prompt: "Sleek aerodynamic starfighter banking sharply around an asteroid field, dynamic camera angle, intense blue plasma engine plumes, 8k octane render",
          useCase: "Path animation motion reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Parenting ulte order mein kar dena (Parent ko pehle select kar lena).",
          fix: "Rule hamesha yaad rakhein: 'Child first, Parent last!' Shift select parent second."
        },
        {
          mistake: "Follow Path lagane par ship achanak door teleport ho jana.",
          fix: "Ship select karke 'Alt + G' press karein to clear location offset."
        }
      ],
      homework: "Ek Bezier curve path banayein aur ek futuristic object ko uske along animate karein using Follow Path constraint.",
      summary: "Parenting (Ctrl + P) aur Path Constraints mechanical objects ko complex realistic trajectories par bina repetitive manual keyframing ke effortlessly animate karte hain.",
      quiz: [
        {
          question: "Blender mein Child object ko Parent object ke sath link karne ka universal shortcut key kya hai?",
          options: ["Ctrl + P (Set Parent)", "Ctrl + J", "Alt + P", "Shift + P"],
          correctIndex: 0,
          explanation: "Ctrl + P hierarchy establish karta hai jisse child parent ke saare transforms automatically inherit karta hai."
        },
        {
          question: "Parenting setup karte waqt objects ko select karne ka sahi kram (order) kya hota hai?",
          options: ["Pehle Child, fir Shift dabakar Parent", "Pehle Parent, fir Child", "Dono ko ek sath bina order ke", "Sirf Parent"],
          correctIndex: 0,
          explanation: "Active (last selected) object hamesha parent banta hai, isliye child first, parent second."
        },
        {
          question: "Ek object ko 3D curved line ke along automatically drive karwane ke liye kaunsa constraint use hota hai?",
          options: ["Follow Path Constraint", "Copy Color", "Floor limit", "Shrinkwrap"],
          correctIndex: 0,
          explanation: "Follow Path constraint object ko spline curve ke coordinates par animate karta hai."
        },
        {
          question: "Follow Path constraint mein 'Follow Curve' checkbox on karne se kya hota hai?",
          options: ["Object curve ke turning direction ke according automatically rotate aur bank karta hai", "Object delete ho jata hai", "Curve straight ho jati hai", "Color white ho jata hai"],
          correctIndex: 0,
          explanation: "'Follow Curve' tangent vector calculate karke object ke nose ko hamesha travel direction ki taraf align rakhta hai."
        },
        {
          question: "Object ke location coordinates ko reset (zero origin) karne ka shortcut kya hai?",
          options: ["Alt + G", "Alt + R", "Alt + S", "Ctrl + Z"],
          correctIndex: 0,
          explanation: "Alt + G location clear karta hai, Alt + R rotation clear karta hai, aur Alt + S scale reset karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Har cheez ko manually keyframe karna waqt ki barbaadi hai. Smart animators constraints aur mathematics use karte hain. Aaj hum Follow Path se cinematic flight paths construct karenge.",
        whatToShowOnScreen: "Blender viewport with Bezier Curve. Ship placed in world. Constraints panel -> Adding 'Follow Path'. Enabling 'Follow Curve' checkbox. Spaceship banking smoothly through 3D space.",
        screenRecordingSteps: [
          "Step 1: Shift + A -> Curve -> Bezier add karein aur Edit Mode mein curve bend karein.",
          "Step 2: Ship select karein, Constraints tab mein 'Follow Path' assign karein.",
          "Step 3: Target mein BezierCurve pick karein.",
          "Step 4: 'Follow Curve' check karein aur 'Animate Path' button press karein.",
          "Step 5: Playback loop play karke banking physics observe karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jaise hi path aage mudta hai, hamara starfighter naturally wing tilt karke bank turn le raha hai. Zero manual rotation keyframes! Yeh studio workflows ki efficiency hai.",
        practicalDemo: "Adjusting bezier curve handles in real time while animation loops.",
        endingAndHomework: "Path constraint test complete karein. Agle lesson mein hum Character Animation aur NLA blending seekhenge!"
      }
    },
    {
      id: "m7-l4",
      moduleId: 7,
      lessonNumber: 4,
      title: "4. Character animation",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Character Animation 3D art ki sabse expressive form hai. Yahan hum character ke armature (skeletal bones) ko Pose Mode mein manipulate karte hain.

Pose Mode & Inverse Kinematics (IK):
- **FK (Forward Kinematics):** Shoulder rotate hoga toh bicep ghumega, bicep ghumega toh forearm ghumega, fir hand ghumega. (Robotic animations ke liye).
- **IK (Inverse Kinematics):** Aap sirf Haath (Hand) ko target par move karte hain, aur kohni (elbow) aur shoulder automatically realistic angle par bend ho jaate hain! Mixamo aur modern rigs IK solve karte hain.

Non-Linear Animation (NLA Editor) - Motion Mixing:
Agar aapke paas 2 animations hain:
1. 'Idle Breathing' (frames 1-40)
2. 'Walking Forward' (frames 41-100)
NLA Editor mein aap in dono clips ko video editor ki tarah drag karke ek dusre par overlap kar sakte hain. Blender unke beech **Crossfade Blend** generate karega jisse character bina kisi jhatke ke smoothly idle stance se chalna shuru kar dega!`,
      learningObjectives: [
        "Pose Mode (Ctrl + Tab) navigation aur bone selection master karna.",
        "FK vs IK (Inverse Kinematics) physics difference grasp karna.",
        "NLA Editor mein multiple animation actions ko blend aur loop karna.",
        "Foot sliding artifacts ko fix karna aur ground contact lock karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Rigged character with Mixamo animations"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Enter Pose Mode",
          description: "Select Character Armature. Press Ctrl + Tab to switch from Object Mode to Pose Mode (bones turn blue)."
        },
        {
          step: 2,
          title: "Manipulate Individual Bones",
          description: "Select head bone, press 'R' to tilt neck, press 'I -> Rotation' to set expressive keyframe."
        },
        {
          step: 3,
          title: "Open NLA Editor Workspace",
          description: "Split viewport and switch window type to 'Nonlinear Animation' (NLA)."
        },
        {
          step: 4,
          title: "Push Down Action into NLA Strip",
          description: "Click 'Push Down' button. Your walk cycle is now an editable track strip. Blend with another attack or run action."
        }
      ],
      practicalExample: "Action Sequence: Walk Cycle strip ko NLA Track 1 par rakha. Frame 40 par 'Sword Slash' strip ko Track 2 par rakha with 10-frame transition blend. Spacebar dabane par character chalte-chalte bina ruke smoothly apni sword swing karta hai! Seamless Hollywood action choreography!",
      readyPrompts: [
        {
          title: "Action Choreography Reference",
          prompt: "Cinematic medium action shot of a cybernetic warrior executing a spinning energy blade slash, motion trails on weapon, volumetric smoke, dynamic low angle, 8k",
          useCase: "Character action timing reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Object Mode mein character mesh ko move karna instead of Armature bones.",
          fix: "Mesh ko kabhi manually na hilaein. Animation hamesha Armature bones par Pose Mode mein hoti hai."
        },
        {
          mistake: "Foot sliding (pair zameen par fisalna).",
          fix: "Walk speed ko floor movement ke sath match karein taaki feet zameen par firmly planted dikhein."
        }
      ],
      homework: "Mixamo se 2 alag actions (e.g. Idle aur Jump) Blender NLA editor mein combine karein aur smooth transition verify karein.",
      summary: "Character animation Pose Mode (Ctrl + Tab) mein bones par execute hoti hai. NLA Editor multiple actions ko seamlessly blend karke complex cinematic performances banata hai.",
      quiz: [
        {
          question: "Rigged character ke skeleton bones ko pose aur animate karne ke liye kaunsa mode use hota hai?",
          options: ["Pose Mode (Ctrl + Tab)", "Edit Mode only", "Sculpt Mode", "Texture Paint"],
          correctIndex: 0,
          explanation: "Pose Mode specifically armature bones ke rotational aur translational keyframes store karta hai."
        },
        {
          question: "Sirf hand ya foot ko move karne par poori arm ya leg ka naturally bend hona kis kinematics system se hota hai?",
          options: ["IK (Inverse Kinematics)", "FK (Forward Kinematics)", "Static physics", "Zero kinematics"],
          correctIndex: 0,
          explanation: "Inverse Kinematics end-effector ki position se parent joints ke angles mathematically solve karta hai."
        },
        {
          question: "Blender mein multiple animation actions ko video editor ki tarah clips mein blend karne wale editor ka naam kya hai?",
          options: ["NLA Editor (Nonlinear Animation)", "Text Editor", "Spreadsheet", "Audio visualizer"],
          correctIndex: 0,
          explanation: "NLA Editor animation clips ko multi-track non-linear strips ke roop mein sequence aur blend karta hai."
        },
        {
          question: "NLA Editor mein do overlapping animation strips ke beech smooth transition create karne wale setting ko kya kehte hain?",
          options: ["Transition Blend (Blend In / Blend Out)", "Cut delete", "Mute strip", "Freeze frame"],
          correctIndex: 0,
          explanation: "Blend In aur Blend Out curves do alag animations ke weights ko smoothly crossfade karti hain."
        },
        {
          question: "Character chalte waqt agar uske feet ground par slip (fisal) rahe hon, toh use kya kehte hain?",
          options: ["Foot Sliding artifact", "Speed boost", "Motion blur", "Super jump"],
          correctIndex: 0,
          explanation: "Foot sliding tab hoti hai jab character ki linear forward velocity walk cycle ke foot strike speed se mismatch karti hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Aaj hum apne character ko lifeless 3D mesh se ek expressive digital actor mein transform karenge. NLA Editor aur Pose Mode se hum Hollywood action choreography set karenge.",
        whatToShowOnScreen: "Blender with rigged character. Armature selected -> Ctrl + Tab into Pose Mode (bones highlighted in cyan). Keyframing head tilt. Opening NLA Editor window. Pushing down walk action strip. Blending into attack stance.",
        screenRecordingSteps: [
          "Step 1: Armature select karke Pose Mode enter karein.",
          "Step 2: Head bone aur arm bones rotate karke dynamic posture show karein.",
          "Step 3: NLA Editor switch karein aur 'Push Down' action strip demonstrate karein.",
          "Step 4: Strip properties mein 'Blend In: 10 frames' configure karein.",
          "Step 5: Full combined action sequence loop play karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Character normal walk kar raha tha, aur bina kisi jhatke ke Frame 40 par usne apni sword draw kar li. NLA editor ne dono animations ke beech seamless blend create kar diya. This is professional character animation at its finest!",
        practicalDemo: "NLA strip crossfade slider demonstration with real-time playback.",
        endingAndHomework: "Character action blend save karein. Agle lesson mein hum Cinematic Camera Movements aur Drone Rigs seekhenge!"
      }
    },
    {
      id: "m7-l5",
      moduleId: 7,
      lessonNumber: 5,
      title: "5. Camera movements",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek moving character ke sath agar camera static (stiff) khada rahega, toh scene CCTV footage jaisa boring lagega. Cinematic feel lane ke liye **Camera ko bhi character ke sath dynamic motion mein hona chahiye!**

The Big 4 Cinematic Camera Moves:
1. **Dolly In / Push-In (Drama & Realization):**
   Camera slowly subject ke close move hota hai. Viewer ka emotional focus character ki aankhon par lock hota hai.
2. **Orbit / Parallax Tracking Shot (Heroic Grandeur):**
   Camera subject ke charon taraf 180 ya 360 degree circle mein ghoomta hai. Foreground aur background different speeds par slide hote hain (Parallax Effect), jo intense 3D spatial depth create karta hai.
3. **Whip Pan (Fast Action Transition):**
   Super fast horizontal camera flick with heavy motion blur jo ek scene se dusre action shot mein jump karta hai.
4. **FPV Drone Dive (Epic Adrenaline):**
   Camera aasmaan se niche dive karta hai, structures ke beech se squeeze hota hua ground ke 1 foot upar level out hota hai.

The Camera Tracking Rig (Damped Track):
Blender mein camera par **Track To / Damped Track** constraint lagayein aur Target apne character ke head ko banayein. Ab aap camera ko duniya mein kahin bhi move karein, camera ka lens hamesha 100% locked subject par rahega!`,
      learningObjectives: [
        "Cinematic camera trajectories (Dolly, Orbit, Whip Pan, Drone Dive) master karna.",
        "Parallax effect aur background motion depth amplify karna.",
        "Camera Tracking constraints (Track To / Damped Track) setup karna.",
        "Camera shake and handheld realism inject karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Camera rig setup"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Create Empty Target at Character Center",
          description: "Shift + A -> Empty -> Plain Axes. Place at character's chest level. Name it 'Camera_Target'."
        },
        {
          step: 2,
          title: "Attach Track Constraint to Camera",
          description: "Select Camera -> Constraints tab -> Add 'Track To' -> Target: Camera_Target. To: -Z, Up: Y."
        },
        {
          step: 3,
          title: "Keyframe Dynamic Camera Orbit",
          description: "At Frame 1, place camera high front-left. At Frame 72, place camera low back-right. Camera automatically keeps character dead centered!"
        },
        {
          step: 4,
          title: "Add Subtle Handheld Camera Shake",
          description: "In Graph Editor, add a 'Noise' modifier to Camera Z-rotation to emulate a real cameraman's subtle breathing motion."
        }
      ],
      practicalExample: "Heroic 360 Parallax Reveal: Character standing in rainy alleyway. Camera orbits around him from low angle over 4 seconds. Background neon signs sweep past at high speed while character remains majestically centered. Pure blockbuster movie trailer cinematography!",
      readyPrompts: [
        {
          title: "Cinematic Drone Orbit Reference",
          prompt: "Cinematic orbiting low-angle tracking shot of a futuristic mech warrior standing in a rainy cyberpunk alleyway, intense cyan rim light, neon signs sweeping past in background with rich parallax, photorealistic, 8k",
          useCase: "Camera movement and parallax speed reference"
        }
      ],
      commonMistakes: [
        {
          mistake: "Camera movement itna tez kar dena ki viewer ko motion sickness ho jaye.",
          fix: "Movement ko deliberate aur smooth rakhein. High speed sirf action moments ke liye reserve karein."
        },
        {
          mistake: "Constraint axis galat set karna jisse camera subject se ulta point kare.",
          fix: "Blender camera mein hamesha 'To: -Z' aur 'Up: Y' standard tracking convention follow karein."
        }
      ],
      homework: "Camera par 'Track To' constraint lagayein aur character ke charon taraf ek 3-second cinematic orbit animation create karein.",
      summary: "Dynamic camera movements (Dolly, Orbit, Drone) aur Track To constraints 3D scene mein Hollywood parallax depth aur kinetic energy inject karte hain.",
      quiz: [
        {
          question: "Camera ko hamesha moving character ke face par locked rakhne ke liye kaunsa constraint use hota hai?",
          options: ["Track To Constraint", "Copy Scale", "Floor limit", "Maintain Volume"],
          correctIndex: 0,
          explanation: "'Track To' constraint camera ke optical axis (-Z) ko target object ke origin par continuously lock rakhta hai."
        },
        {
          question: "Foreground objects aur background objects ka camera movement ke doran alag-alag speeds par move hone ke optical illusion ko kya kehte hain?",
          options: ["Parallax Effect", "Motion freeze", "Pixelation", "White balance"],
          correctIndex: 0,
          explanation: "Parallax effect human visual system ko 3D depth perception provide karta hai jab viewer moving camera se scene dekhta hai."
        },
        {
          question: "Blender camera tracking constraint mein pointing direction standard convention kya hoti hai?",
          options: ["To: -Z, Up: Y", "To: +X, Up: +Z", "To: -Y, Up: -X", "Random"],
          correctIndex: 0,
          explanation: "Blender ke native camera coordinate system mein lens forward vector '-Z' aur vertical top axis 'Y' hota hai."
        },
        {
          question: "Camera animation mein human cameraman ke subtle haath ke shake ko simulate karne ke liye Graph Editor mein kaunsa modifier add kiya jata hai?",
          options: ["Noise Modifier", "Delete modifier", "Volume booster", "Sharpen filter"],
          correctIndex: 0,
          explanation: "Noise modifier mathematical pseudo-random jitter add karta hai jo realistic handheld documentary camera feel deta hai."
        },
        {
          question: "Camera ko subject ke kareeb aage push karne wale shot ko cinematography mein kya kehte hain?",
          options: ["Dolly In / Push-In Shot", "Dutch tilt", "Bird's eye", "Fade out"],
          correctIndex: 0,
          explanation: "Dolly In shot emotional intensity badhata hai aur viewer ka focus subject ke internal thoughts par direct karta hai."
        }
      ],
      recordingScript: {
        instructorIntro: "Welcome creators! Camera movement hi wo difference hai jo static CGI ko ek pulsating, exciting cinema shot banata hai. Aaj hum camera ko ek virtual Steadicam rig par mount karenge.",
        whatToShowOnScreen: "Empty target placed at character chest. Camera constraint tab -> Adding 'Track To'. Demonstrating camera moving freely while lens remains laser-focused on target. Orbiting path playback with parallax reflections.",
        screenRecordingSteps: [
          "Step 1: Shift + A -> Empty -> Plain Axes create karein aur name dein 'Cam_Target'.",
          "Step 2: Camera select karke 'Track To' constraint add karein.",
          "Step 3: Target mein 'Cam_Target' pick karein, To: -Z, Up: Y set karein.",
          "Step 4: Camera ko Frame 1 se Frame 72 tak orbit curve par animate karein.",
          "Step 5: Viewport camera view (Numpad 0) mein live cinematic parallax playback dikhayein."
        ],
        voiceoverHindi: "Dosto screen par dekhiye. Camera jaise hi left se right sweep karta hai, background ke pillars aur neon signs kitni dynamic velocity ke sath slide ho rahe hain, jabki humara hero character dead-center locked hai. This is classic Hollywood visual language!",
        practicalDemo: "Graph Editor noise modifier addition for handheld realism.",
        endingAndHomework: "Camera orbit render save karein. Agle lesson mein hum Complete Multi-Shot Cinematic Sequences assemble karenge!"
      }
    },
    {
      id: "m7-l6",
      moduleId: 7,
      lessonNumber: 6,
      title: "6. Creating cinematic animation sequences",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hindiExplanation: `Ek complete 30-second ya 60-second animated video kabhi ek single camera shot se nahi banti. Wo multiple camera angles aur shots ka ek calculated combination hoti hai!

The Classic 4-Shot Cinematic Sequence Formula:
1. **Shot 1: Wide Establishing Shot (0s - 3s):**
   Scene ka geographical context dikhata hai. (e.g. Gigantic cyberpunk city in rain, tiny character on rooftop).
2. **Shot 2: Medium Action / Tracking Shot (3s - 7s):**
   Character forward move kar raha hai, camera parallel track kar raha hai. Viewer story ke flow mein enter hota hai.
3. **Shot 3: Close-Up / Emotional Beat (7s - 10s):**
   Character ka face, eye reflection, sword draw ya dramatic smirk. Emotional stakes high hoti hain.
4. **Shot 4: Dynamic Climax / Reveal (10s - 15s):**
   High energy action, explosion, transformation ya epic camera orbit.

Blender Camera Markers (Multiple Cameras in 1 Timeline):
Aapko har shot ke liye alag Blender file banane ki zaroorat nahi hai! Timeline par aap alag-alag frames par **Camera Markers (Ctrl + B in Timeline)** bind kar sakte hain. Frame 1 par Camera A active hoga, Frame 72 par automatically Camera B switch ho jayega, aur Frame 144 par Camera C!`,
      learningObjectives: [
        "4-Shot Cinematic Sequence formula (Wide -> Medium -> Close -> Climax) master karna.",
        "Timeline par Camera Markers bind karna (Ctrl + B) multi-camera cuts ke liye.",
        "Shot pacing aur visual rhythm edit karna.",
        "Complete multi-shot animation preview render karna."
      ],
      requiredTools: [
        "Blender 4.x",
        "Multi-camera setup (Wide Cam, Medium Cam, Close-up Cam)"
      ],
      stepByStep: [
        {
          step: 1,
          title: "Create 3 Distinct Cameras",
          description: "Shift + A -> Camera. Create: 1) Cam_Wide, 2) Cam_Medium, 3) Cam_CloseUp."
        },
        {
          step: 2,
          title: "Position Each Camera for its Shot Beat",
          description: "Cam_Wide at 24mm (establishing), Cam_Medium at 50mm (action), Cam_CloseUp at 85mm (face focus)."
        },
        {
          step: 3,
          title: "Bind Cameras to Timeline Markers",
          description: "At Frame 1: Select Cam_Wide, hover timeline, press 'M' (Marker), then press 'Ctrl + B' (Bind Camera to Marker). At Frame 72: Bind Cam_Medium. At Frame 144: Bind Cam_CloseUp."
        },
        {
          step: 4,
          title: "Play Full Multi-Camera Sequence",
          description: "Press Spacebar. Watch the viewport automatically cut between wide, medium, and close-up angles seamlessly in real time!"
        }
      ],
      practicalExample: "15-Second Cinematic Teaser: Frame 1-72: Wide shot of cyberpunk temple. Frame 73-144: Medium shot of cyber samurai walking with glowing katana. Frame 145-216: Extreme close-up of visor glowing cyan as rain hits the lens. Complete continuous story scene within 1 single render pass!",
      readyPrompts: [
        {
          title: "Multi-Shot Storyboard Concept",
          prompt: "Storyboard grid of 4 cinematic shots: 1 wide establishing sci-fi vista, 2 medium tracking combat shot, 3 extreme close-up eye macro, 4 epic explosive climax, 8k octane render",
          useCase: "Sequence planning and visual rhythm guide"
        }
      ],
      commonMistakes: [
        {
          mistake: "Saare shots ek hi focal length par rakhna.",
          fix: "Shots ke beech lens variety rakhein: Wide (24mm) for scale, Telephoto (85mm) for drama."
        },
        {
          mistake: "Cuts ke beech 180-degree rule tod dena (camera achanak character ke ulte side jump kar jana).",
          fix: "Visual continuity preserve karne ke liye camera hamesha action line ke ek hi side par rakhein."
        }
      ],
      homework: "3 cameras setup karein, timeline markers par bind karein aur ek continuous 3-shot sequence record karke play karein.",
      summary: "Cinematic sequences 4 core beats (Establishing, Medium, Close-up, Climax) par chalte hain. Blender Camera Markers (Ctrl + B) multi-angle editing ko 1-timeline ke andar automate karte hain.",
      quiz: [
        {
          question: "Blender timeline par selected camera ko active marker par bind karne ka shortcut key kya hai?",
          options: ["Ctrl + B (Bind Camera to Marker in Timeline)", "Ctrl + S", "Alt + M", "Shift + F"],
          correctIndex: 0,
          explanation: "Timeline par cursor hover karke Ctrl + B dabane se active camera selected marker frame par bind ho jata hai."
        },
        {
          question: "Scene ke geography aur mahaul ko establish karne ke liye shuruaat mein kaunsa shot use hota hai?",
          options: ["Wide Establishing Shot", "Extreme Macro shot", "Microscopic view", "Blank black screen"],
          correctIndex: 0,
          explanation: "Wide Establishing shot scene ka physical context, world-building scale aur time of day convey karta hai."
        },
        {
          question: "Filmmaking mein 180-degree rule todne se audience par kya asar padta hai?",
          options: ["Audience disoriented ho jaati hai kyunki characters ka screen direction ulta lagne lagta hai", "Video quality 4K ho jaati hai", "Computer fast ho jata hai", "Speaker sound badh jati hai"],
          correctIndex: 0,
          explanation: "180-degree line cross karne se left-to-right eye orientation confuse hoti hai, isliye continuity preserve ki jaati hai."
        },
        {
          question: "Character ke emotional stakes aur facial expression capture karne ke liye kaunsa shot best hota hai?",
          options: ["Close-Up Shot (85mm - 105mm)", "Aerial Satellite shot", "Top down floor shot", "Extreme wide shot"],
          correctIndex: 0,
          explanation: "Close-up shots audience ko character ke micro-expressions aur emotional psychology se connect karte hain."
        },
        {
          question: "Multiple cameras ko 1 single timeline par switch karne ka sabse bada workflow advantage kya hai?",
          options: ["Aapko alag-alag project files nahi banani padti aur lighting scene continuously shared rehti hai", "Internet nahi lagta", "Mouse battery save hoti hai", "Blender free ho jata hai"],
          correctIndex: 0,
          explanation: "Single timeline multi-camera setup se lighting, assets aur world elements synchronize rehte hain bina manual file swapping ke."
        }
      ],
      recordingScript: {
        instructorIntro: "Congratulations creators! Module 7 ke aakhri lesson mein aapka swagat hai. Aaj hum individual camera shots ko combine karke ek complete cinematic sequence director ki tarah cut karenge. Let's direct our master sequence!",
        whatToShowOnScreen: "Blender scene with 3 cameras visible. Timeline with 3 markers labeled 'Wide', 'Medium', 'CloseUp'. Pressing Spacebar. Viewport cutting seamlessly between cameras in real time at exact frame markers.",
        screenRecordingSteps: [
          "Step 1: 3 cameras add karein (Wide 24mm, Med 50mm, Close 85mm).",
          "Step 2: Timeline Frame 1 par marker banayein ('M') aur Cam_Wide bind karein ('Ctrl + B').",
          "Step 3: Frame 60 par Cam_Medium bind karein.",
          "Step 4: Frame 120 par Cam_CloseUp bind karein.",
          "Step 5: Full 180-frame playback loop run karein aur instant cuts visualize karein."
        ],
        voiceoverHindi: "Dosto dekhiye screen par! Jaise hi playhead Frame 60 par pahuncha, camera automatically wide shot se medium combat angle par jump ho gaya. Aur Frame 120 par direct face close-up! This is a complete mini-movie playing right inside Blender. You are now officially a 3D Animation Director!",
        practicalDemo: "Real-time camera marker switching playback.",
        endingAndHomework: "Module 7 quiz submit karein. Next Module 8 mein hum sabse cutting-edge AI revolution explore karenge: AI Image to Video Generation!"
      }
    }
  ]
};

