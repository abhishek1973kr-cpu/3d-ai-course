import { module1 } from './modules/module1';
import { module2 } from './modules/module2';
import { module3 } from './modules/module3';
import { module4 } from './modules/module4';
import { module5 } from './modules/module5';
import { module6 } from './modules/module6';
import { module7 } from './modules/module7';
import { module8 } from './modules/module8';
import { module9 } from './modules/module9';
import { module10 } from './modules/module10';
import { module11 } from './modules/module11';
import { module12 } from './modules/module12';

export const COURSE_DETAILS = {
  id: "3d-ai-masterclass",
  title: "3D AI STUDIO – ZERO TO PRO MASTERCLASS",
  tagline: "Imagine It. Create It. Animate It.",
  headline: "MASTER THE FUTURE OF 3D AI VIDEO CREATION",
  subheadline: "Learn how to create stunning 3D characters, cinematic animations and professional AI videos from absolute beginner to advanced level.",
  instructor: {
    name: "Aryan Sharma & Global AI Video Guild",
    title: "Senior 3D AI Director & VFX Supervisor",
    bio: "Pioneering the hybrid pipeline between generative neural networks, Blender 3D, and real-time cinematic production.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  stats: {
    modulesCount: 12,
    lessonsCount: 72,
    durationHours: "18+ Hours",
    studentsEnrolled: 8420,
    rating: 4.98,
    reviewsCount: 1640,
    promptLibraryCount: 30,
    certificateType: "Verified Academy Diploma"
  },
  featuredTools: [
    { name: "Meshy AI", category: "3D Mesh Generation", type: "Freemium", url: "https://meshy.ai" },
    { name: "Blender 4.x", category: "3D Staging & Animation", type: "100% Free", url: "https://blender.org" },
    { name: "Runway Gen-3 Alpha", category: "AI Video Motion Engine", type: "Freemium", url: "https://runwayml.com" },
    { name: "Luma Dream Machine", category: "Video Generation", type: "Freemium", url: "https://lumalabs.ai" },
    { name: "Midjourney / FLUX.1", category: "Concept Art & Character Sheets", type: "Paid / Open", url: "https://midjourney.com" },
    { name: "ElevenLabs", category: "Cinematic Voiceover AI", type: "Freemium", url: "https://elevenlabs.io" },
    { name: "CapCut Desktop", category: "Video Editing & Sound Design", type: "100% Free", url: "https://capcut.com" },
    { name: "Mixamo", category: "Automatic Character Rigging", type: "100% Free", url: "https://mixamo.com" }
  ]
};

export const ALL_MODULES = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
  module10,
  module11,
  module12
];

// Helper to flatten all 72 lessons for easy lookup and search
export const ALL_LESSONS = ALL_MODULES.flatMap(m => m.lessons.map(l => ({
  ...l,
  moduleName: m.title,
  moduleBadge: m.badge,
  moduleSlug: m.slug
})));

export function getLessonById(id) {
  return ALL_LESSONS.find(l => l.id === id) || ALL_LESSONS[0];
}

export function getModuleById(moduleId) {
  return ALL_MODULES.find(m => m.id === Number(moduleId)) || ALL_MODULES[0];
}

export function getNextAndPrevLesson(currentLessonId) {
  const currentIndex = ALL_LESSONS.findIndex(l => l.id === currentLessonId);
  const prevLesson = currentIndex > 0 ? ALL_LESSONS[currentIndex - 1] : null;
  const nextLesson = currentIndex < ALL_LESSONS.length - 1 ? ALL_LESSONS[currentIndex + 1] : null;
  return { prevLesson, nextLesson, currentIndex, total: ALL_LESSONS.length };
}

