// Reusable microcopy library for Create Again
// Following the 91-point core UX principles:
// Compassionate, non-judgmental, pressure-free companion tone.

export const MICROCOPY = {
  mantra: {
    line1: "Start somewhere.",
    line2: "Add something.",
    line3: "See what happens.",
    subtext: "A creative companion for your sketchbook, paper, or drawing tablet.",
    deviceDownReminder: "Look → Read → Put device down → Create",
  },
  firstVisit: {
    welcome: "CREATE AGAIN",
    sub1: "You don't need to know what to draw.",
    sub2: "You don't need to be \"good at art.\"",
    sub3: "You just need somewhere to start.",
    button: "I WANT TO CREATE",
    whatIsLink: "What is Create Again?",
  },
  firstChoice: {
    title: "WHAT BRINGS YOU HERE?",
    options: [
      { id: 'dont-know', label: "I DON'T KNOW WHAT TO DRAW", desc: "No idea where to begin? We'll give you a calm start." },
      { id: 'practice', label: "I WANT TO PRACTICE", desc: "2-minute looseners to relax your hand and grip." },
      { id: 'experiment', label: "I WANT TO EXPERIMENT", desc: "Mix up strange, funny combinations and see what happens." },
      { id: 'skills', label: "I WANT TO BUILD MY SKILLS", desc: "Step-by-step character and creative exploration." },
    ],
  },
  stuck: {
    title: "STUCK?",
    sub: "That's okay.",
    lead: "Try this tiny nudge:",
    buttonGotIt: "GOT IT, BACK TO DRAWING",
    buttonAnother: "ANOTHER NUDGE",
    reassurances: [
      "That mark is allowed to stay.",
      "Try a tiny start.",
      "Make one mark.",
      "You can change direction.",
      "Don't erase it. Change it.",
      "Sometimes the weird part becomes the interesting part.",
    ],
    levels: [
      {
        level: 1,
        title: "Level 1: Start with a simple shape",
        hints: [
          "Draw a single circle anywhere on your paper.",
          "Draw a curved line from left to right.",
          "Draw three small dots and connect two of them.",
          "Make one wobbly box in a corner.",
          "Draw a triangle and don't worry if it's crooked.",
        ],
      },
      {
        level: 2,
        title: "Level 2: Put it somewhere unexpected",
        hints: [
          "Put the shape in the very corner of your page.",
          "Tilt the shape at an unusual angle.",
          "Make the shape way larger or way smaller than it should be.",
          "Overlap the shape over a line you already drew.",
          "Give the shape a tiny shadow underneath it.",
        ],
      },
      {
        level: 3,
        title: "Level 3: Turn it into something",
        hints: [
          "Add two dots inside: now it has eyes.",
          "Give it three tiny legs so it can walk away.",
          "Put a lid or a hat on top of it.",
          "Draw steam or bubbles floating out of it.",
          "Draw something sitting on top of it.",
        ],
      },
    ],
  },
  deviceDown: {
    title: "PUT THE DEVICE DOWN.",
    lead: "Go make it.",
    sub: "Come back when you're ready.",
  },
  visualReference: {
    notice: "HERE'S AN EXAMPLE",
    disclaimer: "You don't need to copy it. Use it to see what we mean.",
  },
  noErasePhilosophy: {
    headline: "NO ERASE. NO RESTART. JUST ADD.",
    explanation: "Mistakes are allowed. Instead of erasing, try adding something that changes the drawing.",
  },
  completion: {
    singleStart: {
      headline: "YOU MADE A START.",
      subtext: "That's enough for today if you want it to be.",
    },
    fullSession: {
      headline: "YOU CREATED SOMETHING.",
      subtext: "Take a moment to look at your page. You didn't need a perfect idea. You just started.",
    },
  },
  emptyStates: {
    collection: {
      title: "YOUR COLLECTION IS EMPTY",
      sub: "That's okay. Your first creation can go here.",
      action: "START CREATING",
    },
    unfinished: {
      title: "NOTHING WAITING HERE",
      sub: "That's not a bad thing. Want to start something?",
      action: "CREATE SOMETHING",
    },
  },
  leaveSession: {
    title: "LEAVE THIS SESSION?",
    message: "Your progress will be saved so you can pick it right back up whenever you return.",
    keep: "KEEP CREATING",
    leave: "LEAVE SESSION",
  },
  deleteCreation: {
    title: "DELETE THIS CREATION?",
    message: "This cannot be undone.",
    confirm: "DELETE",
    cancel: "KEEP IT",
  },
  offline: {
    title: "YOU'RE OFFLINE",
    message: "Your current creative session can still continue locally.",
    action: "KEEP CREATING",
  },
};
