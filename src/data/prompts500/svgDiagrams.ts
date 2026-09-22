// Reusable high-quality instructional SVG diagrams for the 500 Master Prompt Library
// Clean lines, warm paper aesthetic (#FAF5EB background, #2D2723 ink lines, #E06D53 accent, #8C7E72 annotations)

export const SVG_DIAGRAMS: Record<string, string> = {
  // MARKS & LINES
  'marks-straight-curved': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(30, 30)">
        <line x1="0" y1="20" x2="100" y2="20" stroke="#2D2723" stroke-width="3" />
        <line x1="0" y1="45" x2="100" y2="45" stroke="#2D2723" stroke-width="1.5" />
        <line x1="0" y1="70" x2="100" y2="70" stroke="#E06D53" stroke-width="2" stroke-dasharray="6 6" />
        <text x="50" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">STRAIGHT &amp; DASH</text>
      </g>
      <g transform="translate(160, 30)">
        <path d="M10 20 Q50 -10 90 20 T170 20" stroke="#2D2723" stroke-width="2.5" />
        <path d="M10 50 Q50 80 90 50 T170 50" stroke="#E06D53" stroke-width="2.5" />
        <path d="M10 75 C40 60 70 90 100 75 S160 90 170 75" stroke="#2D2723" stroke-width="1.8" />
        <text x="90" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">WAVES &amp; CURVES</text>
      </g>
      <g transform="translate(370, 30)">
        <path d="M10 20 L25 50 L40 20 L55 50 L70 20 L85 50 L100 20 L115 50" stroke="#2D2723" stroke-width="2" />
        <path d="M20 75 Q40 60 60 75 T100 75" stroke="#E06D53" stroke-width="2.5" />
        <circle cx="120" cy="75" r="3" fill="#E06D53" stroke="none" />
        <circle cx="130" cy="75" r="2" fill="#E06D53" stroke="none" />
        <text x="70" y="110" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ZIGZAG &amp; STIPPLE</text>
      </g>
    </svg>
  `,

  'marks-crosshatching': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(40, 35)">
        <rect x="0" y="0" width="80" height="80" rx="4" stroke="#8C7E72" stroke-width="1" />
        <line x1="10" y1="10" x2="10" y2="70" stroke="#2D2723" stroke-width="1.5" />
        <line x1="25" y1="10" x2="25" y2="70" stroke="#2D2723" stroke-width="1.5" />
        <line x1="40" y1="10" x2="40" y2="70" stroke="#2D2723" stroke-width="1.5" />
        <line x1="55" y1="10" x2="55" y2="70" stroke="#2D2723" stroke-width="1.5" />
        <line x1="70" y1="10" x2="70" y2="70" stroke="#2D2723" stroke-width="1.5" />
        <text x="40" y="105" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">1. PARALLEL</text>
      </g>
      <g transform="translate(160, 35)">
        <rect x="0" y="0" width="80" height="80" rx="4" stroke="#8C7E72" stroke-width="1" />
        <path d="M10 10 L70 70 M10 30 L50 70 M10 50 L30 70 M30 10 L70 50 M50 10 L70 30" stroke="#2D2723" stroke-width="1.5" />
        <path d="M70 10 L10 70 M50 10 L10 50 M30 10 L10 30 M70 30 L30 70 M70 50 L50 70" stroke="#E06D53" stroke-width="1.5" />
        <text x="40" y="105" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">2. CROSSHATCH</text>
      </g>
      <g transform="translate(280, 35)">
        <rect x="0" y="0" width="80" height="80" rx="4" stroke="#8C7E72" stroke-width="1" />
        <path d="M15 40 Q30 15 45 40 T75 40 Q60 65 45 40 T15 40" stroke="#2D2723" stroke-width="1.8" />
        <path d="M25 45 Q40 25 55 45 T70 45" stroke="#2D2723" stroke-width="1.5" />
        <text x="40" y="105" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">3. CONTOUR</text>
      </g>
      <g transform="translate(400, 35)">
        <rect x="0" y="0" width="80" height="80" rx="4" stroke="#8C7E72" stroke-width="1" />
        <path d="M15 20 C40 10 30 70 65 60 C80 30 20 80 50 30" stroke="#E06D53" stroke-width="1.8" />
        <text x="40" y="105" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">4. GESTURAL</text>
      </g>
    </svg>
  `,

  // SHAPES & FORMS
  'shapes-primitives': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(40, 30)">
        <circle cx="35" cy="40" r="30" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
        <text x="35" y="95" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SPHERE / CIRCLE</text>
      </g>
      <g transform="translate(140, 30)">
        <polygon points="35,10 65,70 5,70" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
        <text x="35" y="95" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">WEDGE / CONE</text>
      </g>
      <g transform="translate(240, 30)">
        <rect x="10" y="15" width="55" height="55" rx="3" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
        <text x="37" y="95" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">BOX / CUBE</text>
      </g>
      <g transform="translate(340, 30)">
        <ellipse cx="35" cy="22" rx="25" ry="10" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <line x1="10" y1="22" x2="10" y2="60" stroke="#2D2723" stroke-width="2" />
        <line x1="60" y1="22" x2="60" y2="60" stroke="#2D2723" stroke-width="2" />
        <ellipse cx="35" cy="60" rx="25" ry="10" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <text x="35" y="95" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CYLINDER</text>
      </g>
      <g transform="translate(440, 30)">
        <path d="M15 30 C5 60 60 70 55 40 C50 15 25 10 15 30 Z" stroke="#E06D53" stroke-width="2.5" fill="#FAF5EB" />
        <text x="35" y="95" font-size="10" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ORGANIC BLOB</text>
      </g>
    </svg>
  `,

  // CHARACTER HEADS
  'character-heads-shapes': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(30, 25)">
        <circle cx="35" cy="40" r="28" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
        <line x1="35" y1="12" x2="35" y2="68" stroke="#E06D53" stroke-width="1.2" stroke-dasharray="3 3" />
        <circle cx="26" cy="38" r="2.5" fill="#2D2723" stroke="none" />
        <circle cx="44" cy="38" r="2.5" fill="#2D2723" stroke="none" />
        <path d="M30 52 Q35 57 40 52" stroke="#2D2723" stroke-width="1.8" />
        <text x="35" y="95" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">ROUND</text>
      </g>
      <g transform="translate(135, 25)">
        <rect x="10" y="15" width="50" height="52" rx="6" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
        <circle cx="26" cy="38" r="2.5" fill="#2D2723" stroke="none" />
        <circle cx="44" cy="38" r="2.5" fill="#2D2723" stroke="none" />
        <path d="M28 52 L42 52" stroke="#2D2723" stroke-width="2" />
        <text x="35" y="95" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SQUARE JAW</text>
      </g>
      <g transform="translate(240, 25)">
        <path d="M20 20 C10 40 10 65 35 68 C60 65 60 40 50 20 C45 15 25 15 20 20 Z" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
        <circle cx="28" cy="40" r="2.5" fill="#2D2723" stroke="none" />
        <circle cx="42" cy="40" r="2.5" fill="#2D2723" stroke="none" />
        <path d="M30 54 Q35 58 40 54" stroke="#2D2723" stroke-width="1.8" />
        <text x="35" y="95" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PEAR / BEAN</text>
      </g>
      <g transform="translate(345, 25)">
        <polygon points="12,18 58,18 35,68" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
        <circle cx="26" cy="32" r="2.5" fill="#2D2723" stroke="none" />
        <circle cx="44" cy="32" r="2.5" fill="#2D2723" stroke="none" />
        <path d="M30 48 Q35 52 40 48" stroke="#2D2723" stroke-width="1.8" />
        <text x="35" y="95" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">TRIANGLE / CHIN</text>
      </g>
      <g transform="translate(445, 25)">
        <polygon points="35,12 60,40 35,68 10,40" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
        <circle cx="26" cy="38" r="2.5" fill="#2D2723" stroke="none" />
        <circle cx="44" cy="38" r="2.5" fill="#2D2723" stroke="none" />
        <line x1="30" y1="52" x2="40" y2="52" stroke="#2D2723" stroke-width="1.8" />
        <text x="35" y="95" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DIAMOND</text>
      </g>
    </svg>
  `,

  // EXPRESSIONS
  'facial-expressions-chart': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(35, 30)">
        <circle cx="35" cy="35" r="26" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <path d="M22 24 Q28 20 32 24" stroke="#2D2723" stroke-width="2" />
        <path d="M38 24 Q42 20 48 24" stroke="#2D2723" stroke-width="2" />
        <path d="M22 42 Q35 55 48 42" stroke="#E06D53" stroke-width="2.5" />
        <text x="35" y="85" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">JOY / SMILE</text>
      </g>
      <g transform="translate(140, 30)">
        <circle cx="35" cy="35" r="26" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <line x1="22" y1="22" x2="32" y2="28" stroke="#2D2723" stroke-width="2.5" />
        <line x1="48" y1="22" x2="38" y2="28" stroke="#2D2723" stroke-width="2.5" />
        <line x1="26" y1="46" x2="44" y2="46" stroke="#2D2723" stroke-width="2.5" />
        <text x="35" y="85" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DETERMINED</text>
      </g>
      <g transform="translate(245, 30)">
        <circle cx="35" cy="35" r="26" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <ellipse cx="27" cy="30" rx="4" ry="6" stroke="#2D2723" stroke-width="2" />
        <ellipse cx="43" cy="30" rx="4" ry="6" stroke="#2D2723" stroke-width="2" />
        <ellipse cx="35" cy="46" rx="5" ry="7" stroke="#E06D53" stroke-width="2.2" />
        <text x="35" y="85" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SURPRISE / O</text>
      </g>
      <g transform="translate(350, 30)">
        <circle cx="35" cy="35" r="26" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <line x1="22" y1="28" x2="32" y2="22" stroke="#2D2723" stroke-width="2" />
        <line x1="48" y1="28" x2="38" y2="22" stroke="#2D2723" stroke-width="2" />
        <path d="M24 48 Q35 38 46 48" stroke="#2D2723" stroke-width="2.5" />
        <text x="35" y="85" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SORROW / WORRY</text>
      </g>
      <g transform="translate(445, 30)">
        <circle cx="35" cy="35" r="26" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <line x1="24" y1="24" x2="32" y2="22" stroke="#2D2723" stroke-width="2" />
        <line x1="40" y1="20" x2="48" y2="24" stroke="#2D2723" stroke-width="2" />
        <path d="M26 44 Q38 40 44 48" stroke="#E06D53" stroke-width="2.2" />
        <text x="35" y="85" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">SMUG / SMIRK</text>
      </g>
    </svg>
  `,

  // HANDS & GESTURES
  'hands-construction': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(40, 25)">
        <!-- Palm box + mitten curve -->
        <rect x="15" y="25" width="40" height="40" rx="6" stroke="#2D2723" stroke-width="2.2" fill="#FAF5EB" />
        <path d="M15 35 C0 35 0 50 15 52" stroke="#E06D53" stroke-width="2.5" />
        <path d="M18 25 C18 5 52 5 52 25" stroke="#2D2723" stroke-width="2.5" />
        <text x="35" y="90" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">1. MITTEN BLOCK</text>
      </g>
      <g transform="translate(170, 25)">
        <!-- Pointing finger -->
        <rect x="15" y="30" width="35" height="35" rx="5" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <line x1="30" y1="30" x2="30" y2="5" stroke="#E06D53" stroke-width="4" stroke-linecap="round" />
        <circle cx="15" cy="45" r="5" stroke="#2D2723" stroke-width="2" />
        <text x="35" y="90" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">2. POINTING</text>
      </g>
      <g transform="translate(290, 25)">
        <!-- Clenched fist -->
        <rect x="15" y="25" width="38" height="35" rx="8" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
        <path d="M18 42 L50 42" stroke="#2D2723" stroke-width="2" />
        <path d="M15 35 C10 35 10 50 25 55" stroke="#E06D53" stroke-width="2.5" />
        <text x="35" y="90" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">3. FIST BLOCK</text>
      </g>
      <g transform="translate(410, 25)">
        <!-- Open fingers spread -->
        <rect x="18" y="35" width="35" height="30" rx="5" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <line x1="22" y1="35" x2="16" y2="12" stroke="#2D2723" stroke-width="2.5" stroke-linecap="round" />
        <line x1="28" y1="35" x2="26" y2="8" stroke="#2D2723" stroke-width="2.5" stroke-linecap="round" />
        <line x1="35" y1="35" x2="36" y2="8" stroke="#2D2723" stroke-width="2.5" stroke-linecap="round" />
        <line x1="42" y1="35" x2="48" y2="14" stroke="#2D2723" stroke-width="2.5" stroke-linecap="round" />
        <line x1="18" y1="48" x2="5" y2="40" stroke="#E06D53" stroke-width="3" stroke-linecap="round" />
        <text x="35" y="90" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">4. SPREAD PALM</text>
      </g>
    </svg>
  `,

  // PERSPECTIVE & DEPTH
  'perspective-depth': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <line x1="30" y1="75" x2="510" y2="75" stroke="#8C7E72" stroke-width="1.5" stroke-dasharray="4 4" />
      <text x="50" y="70" font-size="8" font-family="sans-serif" fill="#8C7E72" stroke="none">Horizon Line (Eye Level)</text>
      <circle cx="270" cy="75" r="3" fill="#E06D53" stroke="none" />
      <path d="M40 160 L270 75 L500 160" stroke="#2D2723" stroke-width="2.2" />
      <line x1="270" y1="75" x2="270" y2="160" stroke="#E06D53" stroke-width="2" stroke-dasharray="6 6" />
      <!-- Near pole -->
      <line x1="90" y1="30" x2="90" y2="145" stroke="#2D2723" stroke-width="3.5" />
      <line x1="75" y1="45" x2="105" y2="45" stroke="#2D2723" stroke-width="2.5" />
      <text x="115" y="45" font-size="8" font-family="sans-serif" font-weight="bold" fill="#2D2723" stroke="none">NEAR (LARGE)</text>
      <!-- Far pole -->
      <line x1="220" y1="65" x2="220" y2="95" stroke="#2D2723" stroke-width="1.8" />
      <line x1="212" y1="72" x2="228" y2="72" stroke="#2D2723" stroke-width="1.5" />
      <text x="235" y="72" font-size="7" font-family="sans-serif" fill="#8C7E72" stroke="none">FAR (TINY)</text>
    </svg>
  `,

  // COMPOSITION
  'composition-rule-of-thirds': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(60, 20)">
        <rect x="0" y="0" width="180" height="135" rx="4" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <line x1="60" y1="0" x2="60" y2="135" stroke="#E06D53" stroke-width="1" stroke-dasharray="3 3" />
        <line x1="120" y1="0" x2="120" y2="135" stroke="#E06D53" stroke-width="1" stroke-dasharray="3 3" />
        <line x1="0" y1="45" x2="180" y2="45" stroke="#E06D53" stroke-width="1" stroke-dasharray="3 3" />
        <line x1="0" y1="90" x2="180" y2="90" stroke="#E06D53" stroke-width="1" stroke-dasharray="3 3" />
        <circle cx="60" cy="45" r="5" fill="#E06D53" stroke="none" />
        <circle cx="120" cy="90" r="5" fill="#E06D53" stroke="none" />
        <text x="90" y="150" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">RULE OF THIRDS (INTERSECTIONS)</text>
      </g>
      <g transform="translate(300, 20)">
        <rect x="0" y="0" width="180" height="135" rx="4" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <!-- Framing with tree and hero focal circle -->
        <path d="M0 0 Q30 40 35 135" stroke="#2D2723" stroke-width="4" />
        <path d="M0 25 Q70 15 110 30" stroke="#2D2723" stroke-width="3" />
        <circle cx="130" cy="80" r="18" stroke="#E06D53" stroke-width="2.5" fill="#FAF5EB" />
        <text x="90" y="150" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">NATURAL FRAMING &amp; FOCAL POINT</text>
      </g>
    </svg>
  `,

  // GRAPHIC DESIGN HIERARCHY
  'graphic-design-hierarchy': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="180" height="135" rx="4" stroke="#8C7E72" stroke-width="1.5" fill="#FAF5EB" />
        <text x="90" y="22" font-size="8" font-family="sans-serif" font-weight="bold" fill="#8C7E72" text-anchor="middle" stroke="none">EQUAL WEIGHT (CONFUSING)</text>
        <rect x="25" y="35" width="130" height="15" fill="#D5C9BC" stroke="none" rx="2" />
        <rect x="25" y="58" width="130" height="15" fill="#D5C9BC" stroke="none" rx="2" />
        <rect x="25" y="81" width="130" height="15" fill="#D5C9BC" stroke="none" rx="2" />
        <rect x="25" y="104" width="130" height="15" fill="#D5C9BC" stroke="none" rx="2" />
      </g>
      <g transform="translate(240, 80)">
        <path d="M0 0 L40 0 M30 -8 L40 0 L30 8" stroke="#E06D53" stroke-width="2.5" />
      </g>
      <g transform="translate(310, 20)">
        <rect x="0" y="0" width="180" height="135" rx="4" stroke="#2D2723" stroke-width="2" fill="#FAF5EB" />
        <rect x="20" y="25" width="140" height="28" fill="#2D2723" rx="3" stroke="none" />
        <text x="90" y="43" font-size="10" font-family="sans-serif" font-weight="bold" fill="#FAF5EB" text-anchor="middle" stroke="none">1. HERO TITLE</text>
        <rect x="20" y="62" width="90" height="12" fill="#E06D53" rx="2" stroke="none" />
        <text x="25" y="71" font-size="7" font-family="sans-serif" font-weight="bold" fill="#FAF5EB" stroke="none">2. SUBTITLE</text>
        <line x1="20" y1="88" x2="160" y2="88" stroke="#8C7E72" stroke-width="1.5" />
        <line x1="20" y1="98" x2="130" y2="98" stroke="#8C7E72" stroke-width="1.5" />
        <line x1="20" y1="108" x2="150" y2="108" stroke="#8C7E72" stroke-width="1.5" />
        <text x="90" y="128" font-size="7.5" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">CLEAR HIERARCHY</text>
      </g>
    </svg>
  `,

  // ENVIRONMENTAL GRAPHICS & WAYFINDING
  'environmental-wayfinding': `
    <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto text-[#2D2723]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="536" height="176" rx="8" fill="#FAF5EB" stroke="#D5C9BC" stroke-width="1.5" />
      <g transform="translate(50, 25)">
        <rect x="0" y="0" width="110" height="80" rx="6" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
        <path d="M30 40 L70 40 M55 25 L70 40 L55 55" stroke="#E06D53" stroke-width="3.5" />
        <text x="55" y="105" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">DIRECTION SIGN</text>
      </g>
      <g transform="translate(210, 25)">
        <polygon points="55,5 105,75 5,75" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
        <line x1="55" y1="28" x2="55" y2="52" stroke="#E06D53" stroke-width="3.5" />
        <circle cx="55" cy="62" r="2.5" fill="#E06D53" stroke="none" />
        <text x="55" y="105" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">HAZARD SYMBOL</text>
      </g>
      <g transform="translate(370, 25)">
        <circle cx="55" cy="40" r="35" stroke="#2D2723" stroke-width="2.5" fill="#FAF5EB" />
        <circle cx="55" cy="30" r="8" fill="#2D2723" stroke="none" />
        <path d="M42 45 C42 40 68 40 68 45 L68 62 L42 62 Z" fill="#2D2723" stroke="none" />
        <text x="55" y="105" font-size="9" font-family="sans-serif" font-weight="bold" fill="#2D2723" text-anchor="middle" stroke="none">PICTOGRAM</text>
      </g>
    </svg>
  `,
};

export const getSvgDiagramForCategory = (category: string, subkey?: string): string => {
  if (subkey && SVG_DIAGRAMS[subkey]) {
    return SVG_DIAGRAMS[subkey];
  }
  switch (category) {
    case 'Marks & Lines':
    case 'Line Transformations':
      return SVG_DIAGRAMS['marks-straight-curved'];
    case 'Shapes & Forms':
    case 'Observation':
      return SVG_DIAGRAMS['shapes-primitives'];
    case 'Character Heads':
      return SVG_DIAGRAMS['character-heads-shapes'];
    case 'Facial Features':
    case 'Expressions':
      return SVG_DIAGRAMS['facial-expressions-chart'];
    case 'Arms, Legs, Hands & Feet':
    case 'Poses & Movement':
    case 'Bodies & Proportions':
      return SVG_DIAGRAMS['hands-construction'];
    case 'Perspective & Depth':
    case 'Environments':
      return SVG_DIAGRAMS['perspective-depth'];
    case 'Composition':
    case 'Texture, Light & Shadow':
    case 'Color':
      return SVG_DIAGRAMS['composition-rule-of-thirds'];
    case 'Graphic Design':
    case 'Typography & Layout':
    case 'Storytelling':
    case 'Creative Transformation':
      return SVG_DIAGRAMS['graphic-design-hierarchy'];
    case 'Environmental Graphics':
      return SVG_DIAGRAMS['environmental-wayfinding'];
    default:
      return SVG_DIAGRAMS['marks-straight-curved'];
  }
};
