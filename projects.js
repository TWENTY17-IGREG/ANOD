/* =====================================================================
   ANOD PROJECT LIST — this is the only file you need to edit.

   Add a project:
     1. Copy the TEMPLATE below.
     2. Paste it inside the [ ] list, after the last project, and put a
        comma after the previous project's closing  }
     3. Fill it in, save, commit, push. The site updates in about a minute.

   status : "active" (in progress) · "next" · "idea" · "paused" · "done"
   stage  : 0 Concept · 1 Prototype · 2 Custom PCB · 3 Testing · 4 Demo
   repo, facts, log, docs : optional, leave out what you don't have.

   Everything in this file is public once it is on GitHub Pages.

   TEMPLATE ------------------------------------------------------------
   {
     id: "P-02",
     name: "Project name",
     division: "E-mobility",
     status: "next",
     stage: 0,
     updated: "2026-11-19",
     repo: "https://github.com/USER/REPO",
     summary: "One or two sentences: what it is and why it matters.",
     facts: {
       "Hardware": "…",
       "Next milestone": "…"
     },
     log: [
       ["2026-11-19", "What happened."]
     ],
     docs: [
       ["Document title", "https://…"]
     ]
   }
   ===================================================================== */

window.PROJECTS = [
  {
    id: "P-01",
    name: "VITALTRACK",
    division: "Medical technology",
    status: "active",
    stage: 1,
    updated: "2026-11-19",
    repo: "",
    summary: "Fingertip wearable that measures heart rate, experimental SpO2, skin temperature and motion, and sends them to a phone app over Bluetooth. Engineering and research prototype, not a medical device.",
    facts: {
      "Started": "Nov 2026",
      "Hardware": "ESP32-C3 · MAX30102 · TMP117 · BMI270 · LiPo 250 mAh",
      "Software": "PlatformIO firmware (VS Code) · Flutter app",
      "Next milestone": "First PPG readings sent over BLE from a breadboard",
      "Regulatory": "Research use only, no medical claims"
    },
    log: [
      ["2026-11-13", "Engineering dossier started: components, power budget, firmware plan."],
      ["2026-11-13", "Product concept and app UI/UX: 9 screens."],
      ["2026-11-13", "Tool chain chosen: VS Code + PlatformIO."]
    ],
    docs: [
      ["Engineering dossier", "https://claude.ai/artifact/YWhSucGyTYNkFebJXYNYvV"],
      ["Product concept and app UI/UX", "https://claude.ai/artifact/TdX7osFZ7KW6Zw76xq4thJ"]
    ]
  }
];

/* Documents that belong to the whole group, not to one project. */
window.GROUP_DOCS = [
  ["ANOD website concept (final vision)", "https://claude.ai/artifact/2NcVRWD3Zp9JqsU413VoVj"]
];
