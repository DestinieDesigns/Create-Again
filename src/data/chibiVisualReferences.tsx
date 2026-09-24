import React from 'react';
import { Eye, HelpCircle } from 'lucide-react';

interface ChibiVisualReferenceCardProps {
  refId: string;
  title: string;
  sublabel?: string;
  artTeacherTip?: string;
  whatToNotice?: string[];
  className?: string;
}

export const ChibiVisualReferenceCard: React.FC<ChibiVisualReferenceCardProps> = ({
  refId,
  title,
  sublabel,
  artTeacherTip,
  whatToNotice,
  className = '',
}) => {
  return (
    <div
      className={`rounded-2xl border-2 border-[#2D2723] bg-[#FCFAF6] p-4 text-[#2D2723] shadow-sm flex flex-col ${className}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#EFE9DF] text-[#8A7D71]">
            Art Instruction Sheet
          </span>
          <span className="text-xs font-bold text-[#E06D53]">{title}</span>
        </div>
        <Eye className="w-4 h-4 text-[#8A7D71]" />
      </div>

      {/* SVG Sketch Drawing Box */}
      <div className="w-full aspect-[4/3] rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] p-2 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2D2723_1px,transparent_1px)] [background-size:12px_12px]" />
        {renderSketchDiagram(refId)}
      </div>

      {/* Instructional Details & What to Notice */}
      <div className="mt-3 space-y-2 text-left">
        {sublabel && (
          <p className="text-xs font-medium text-[#5C5249] leading-relaxed">
            {sublabel}
          </p>
        )}

        {whatToNotice && whatToNotice.length > 0 && (
          <div className="rounded-lg bg-[#EFE9DF]/60 p-2.5 text-[11px] text-[#4A3F35]">
            <div className="font-bold text-[#2D2723] mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D53]" />
              WHAT TO NOTICE ON PAPER:
            </div>
            <ul className="space-y-1 list-disc list-inside text-[#5C5249]">
              {whatToNotice.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {artTeacherTip && (
          <div className="flex items-start gap-1.5 text-[11px] text-[#8A7D71] italic pt-1">
            <HelpCircle className="w-3.5 h-3.5 text-[#E06D53] shrink-0 mt-0.5" />
            <span>Teacher Note: {artTeacherTip}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Render clean, instructional hand-drawn style SVGs for each reference category
function renderSketchDiagram(refId: string): React.ReactNode {
  const stroke = '#2D2723';
  const guide = '#E06D53';
  const pencil = '#8A7D71';

  // SILHOUETTES
  if (refId.startsWith('ref-sil-')) {
    switch (refId) {
      case 'ref-sil-round':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="55" r="42" fill="#2D2723" />
            <ellipse cx="65" cy="100" rx="12" ry="7" fill="#2D2723" />
            <ellipse cx="95" cy="100" rx="12" ry="7" fill="#2D2723" />
            <circle cx="80" cy="55" r="42" fill="none" stroke={guide} strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">PURE BALL SILHOUETTE</text>
          </svg>
        );
      case 'ref-sil-tiny':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="65" r="22" fill="#2D2723" />
            <ellipse cx="80" cy="90" rx="14" ry="12" fill="#2D2723" />
            <circle cx="72" cy="104" r="5" fill="#2D2723" />
            <circle cx="88" cy="104" r="5" fill="#2D2723" />
            <line x1="30" y1="65" x2="50" y2="65" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <line x1="110" y1="65" x2="130" y2="65" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">COMPACT POCKET SIZE</text>
          </svg>
        );
      case 'ref-sil-tall':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="35" r="24" fill="#2D2723" />
            <rect x="73" y="58" width="14" ry="7" height="34" fill="#2D2723" />
            <line x1="72" y1="92" x2="68" y2="108" stroke="#2D2723" strokeWidth="5" strokeLinecap="round" />
            <line x1="88" y1="92" x2="92" y2="108" stroke="#2D2723" strokeWidth="5" strokeLinecap="round" />
            <line x1="45" y1="35" x2="45" y2="108" stroke={guide} strokeWidth="1" strokeDasharray="3 3" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">LANKY / LONG LEGS</text>
          </svg>
        );
      case 'ref-sil-wide':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <ellipse cx="80" cy="50" rx="46" ry="34" fill="#2D2723" />
            <rect x="52" y="80" width="56" height="24" rx="8" fill="#2D2723" />
            <ellipse cx="60" cy="106" rx="14" ry="6" fill="#2D2723" />
            <ellipse cx="100" cy="106" rx="14" ry="6" fill="#2D2723" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">SQUAT & GROUNDED</text>
          </svg>
        );
      case 'ref-sil-fluffy':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <path
              d="M 50 50 Q 50 30 70 30 Q 90 25 100 40 Q 120 40 120 60 Q 125 80 110 90 Q 90 105 70 95 Q 45 100 45 75 Q 40 60 50 50 Z"
              fill="#2D2723"
            />
            <circle cx="70" cy="102" r="6" fill="#2D2723" />
            <circle cx="90" cy="102" r="6" fill="#2D2723" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">CLOUD SCALLOP EDGES</text>
          </svg>
        );
      case 'ref-sil-topheavy':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="46" r="38" fill="#2D2723" />
            <polygon points="70,82 90,82 85,98 75,98" fill="#2D2723" />
            <line x1="75" y1="98" x2="72" y2="108" stroke="#2D2723" strokeWidth="4" strokeLinecap="round" />
            <line x1="85" y1="98" x2="88" y2="108" stroke="#2D2723" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">GIANT HEAD / PIN BODY</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <ellipse cx="80" cy="50" rx="35" ry="30" fill="#2D2723" />
            <ellipse cx="80" cy="85" rx="25" ry="18" fill="#2D2723" />
            <circle cx="70" cy="105" r="7" fill="#2D2723" />
            <circle cx="90" cy="105" r="7" fill="#2D2723" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">DEFINED SILHOUETTE</text>
          </svg>
        );
    }
  }

  // HEAD SHAPES & ANGLES
  if (refId.startsWith('ref-head-') || refId.startsWith('ref-angle-')) {
    switch (refId) {
      case 'ref-head-round':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="55" r="40" fill="none" stroke={stroke} strokeWidth="3" />
            <path d="M 40 55 C 40 78, 60 95, 80 95 C 100 95, 120 78, 120 55" fill="#E8E0D5" opacity="0.3" />
            <line x1="80" y1="15" x2="80" y2="95" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <line x1="40" y1="65" x2="120" y2="65" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="62" cy="65" r="4" fill={stroke} />
            <circle cx="98" cy="65" r="4" fill={stroke} />
            <path d="M 77 76 Q 80 79 83 76" stroke={stroke} strokeWidth="2" fill="none" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">LOW EYE LINE (EYES AT 60%)</text>
          </svg>
        );
      case 'ref-head-square':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <rect x="42" y="22" width="76" height="70" rx="16" fill="none" stroke={stroke} strokeWidth="3" />
            <line x1="80" y1="22" x2="80" y2="92" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <line x1="42" y1="68" x2="118" y2="68" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="60" cy="68" r="4" fill={stroke} />
            <circle cx="100" cy="68" r="4" fill={stroke} />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">SOFT-CORNERED CUBE</text>
          </svg>
        );
      case 'ref-angle-34-left':
      case 'ref-angle-34-right':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <ellipse cx="80" cy="55" rx="38" ry="36" fill="none" stroke={stroke} strokeWidth="3" />
            {/* Curved cross lines */}
            <path d="M 70 19 Q 62 55 70 91" fill="none" stroke={guide} strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M 44 65 Q 80 72 116 65" fill="none" stroke={guide} strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Eyes in perspective */}
            <ellipse cx="58" cy="64" rx="5" ry="7" fill={stroke} />
            <ellipse cx="90" cy="66" rx="7" ry="8" fill={stroke} />
            <path d="M 74 77 Q 78 80 82 78" stroke={stroke} strokeWidth="2" fill="none" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">3/4 THREE-DIMENSIONAL TURN</text>
          </svg>
        );
      case 'ref-angle-tilt':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <g transform="rotate(-15 80 55)">
              <circle cx="80" cy="55" r="38" fill="none" stroke={stroke} strokeWidth="3" />
              <line x1="80" y1="17" x2="80" y2="93" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
              <line x1="42" y1="65" x2="118" y2="65" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="62" cy="65" r="5" fill={stroke} />
              <circle cx="98" cy="65" r="5" fill={stroke} />
              <path d="M 77 78 Q 80 82 83 78" stroke={stroke} strokeWidth="2" fill="none" />
            </g>
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">CURIOUS 15° HEAD TILT</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="55" r="38" fill="none" stroke={stroke} strokeWidth="3" />
            <line x1="80" y1="17" x2="80" y2="93" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <line x1="42" y1="65" x2="118" y2="65" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="62" cy="65" r="4" fill={stroke} />
            <circle cx="98" cy="65" r="4" fill={stroke} />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">SKULL STRUCTURE</text>
          </svg>
        );
    }
  }

  // EYES & FACIAL FEATURES
  if (refId.startsWith('ref-eye-') || refId.startsWith('ref-brow-') || refId.startsWith('ref-mouth-')) {
    switch (refId) {
      case 'ref-eye-sparkle':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            {/* Left Eye */}
            <ellipse cx="55" cy="55" rx="16" ry="22" fill={stroke} />
            <circle cx="50" cy="45" r="6" fill="#FFF" />
            <circle cx="62" cy="65" r="3" fill="#FFF" />
            {/* Right Eye */}
            <ellipse cx="105" cy="55" rx="16" ry="22" fill={stroke} />
            <circle cx="100" cy="45" r="6" fill="#FFF" />
            <circle cx="112" cy="65" r="3" fill="#FFF" />
            {/* Lashes & guide */}
            <path d="M 36 38 Q 55 30 74 38" stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 86 38 Q 105 30 124 38" stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" />
            <text x="80" y="108" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">SPARKLE HIGHLIGHTS (UPPER LEFT)</text>
          </svg>
        );
      case 'ref-eye-dot':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="55" cy="55" r="6" fill={stroke} />
            <circle cx="105" cy="55" r="6" fill={stroke} />
            <path d="M 76 68 Q 80 72 84 68" stroke={stroke} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <ellipse cx="44" cy="62" rx="7" ry="4" fill="#E06D53" opacity="0.4" />
            <ellipse cx="116" cy="62" rx="7" ry="4" fill="#E06D53" opacity="0.4" />
            <text x="80" y="108" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">INK DOTS + BLUSH CHEEKS</text>
          </svg>
        );
      case 'ref-eye-sleepy':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <path d="M 40 50 Q 55 42 70 50" stroke={stroke} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <ellipse cx="55" cy="58" rx="10" ry="8" fill={stroke} />
            <path d="M 90 50 Q 105 42 120 50" stroke={stroke} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <ellipse cx="105" cy="58" rx="10" ry="8" fill={stroke} />
            <text x="80" y="108" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">HALF-DROOPED UPPER LIDS</text>
          </svg>
        );
      case 'ref-eye-arc':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <path d="M 42 60 Q 55 40 68 60" stroke={stroke} strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 92 60 Q 105 40 118 60" stroke={stroke} strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 72 75 Q 80 84 88 75 Z" fill={stroke} />
            <text x="80" y="108" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">PURE HAPPINESS CRESCENTS</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <ellipse cx="55" cy="55" rx="12" ry="16" fill={stroke} />
            <circle cx="52" cy="48" r="4" fill="#FFF" />
            <ellipse cx="105" cy="55" rx="12" ry="16" fill={stroke} />
            <circle cx="102" cy="48" r="4" fill="#FFF" />
            <text x="80" y="108" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">FACIAL EXPRESSION</text>
          </svg>
        );
    }
  }

  // HAIR & DEFINING FEATURES
  if (refId.startsWith('ref-hair-') || refId.startsWith('ref-feat-')) {
    switch (refId) {
      case 'ref-feat-ears':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            {/* Skull guide */}
            <circle cx="80" cy="65" r="32" fill="none" stroke={guide} strokeWidth="1" strokeDasharray="3 3" />
            {/* Left Ear */}
            <path d="M 52 45 L 36 12 L 68 32 Z" fill="#FCFAF6" stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
            <path d="M 50 38 L 42 20 L 62 32 Z" fill="#E8E0D5" />
            {/* Right Ear */}
            <path d="M 108 45 L 124 12 L 92 32 Z" fill="#FCFAF6" stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
            <path d="M 110 38 L 118 20 L 98 32 Z" fill="#E8E0D5" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">EAR BASES WRAP AROUND SKULL</text>
          </svg>
        );
      case 'ref-hair-bangs':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="60" r="30" fill="none" stroke={guide} strokeWidth="1" strokeDasharray="3 3" />
            {/* Big Chunky Bangs */}
            <path
              d="M 45 50 Q 60 20 80 20 Q 100 20 115 50 Q 105 45 95 62 Q 85 46 80 64 Q 75 46 65 62 Q 55 45 45 50 Z"
              fill="#FCFAF6"
              stroke={stroke}
              strokeWidth="3"
            />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">SCULPTURAL CLUMPS OF HAIR</text>
          </svg>
        );
      case 'ref-feat-horns':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="65" r="30" fill="none" stroke={guide} strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 58 45 Q 40 30 35 15 Q 48 20 64 38 Z" fill="#FCFAF6" stroke={stroke} strokeWidth="3" />
            <path d="M 102 45 Q 120 30 125 15 Q 112 20 96 38 Z" fill="#FCFAF6" stroke={stroke} strokeWidth="3" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">TAPERING CURVED HORNS</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="60" r="28" fill="none" stroke={guide} strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 45 65 Q 50 30 80 25 Q 110 30 115 65 Q 100 45 80 50 Q 60 45 45 65 Z" fill="#FCFAF6" stroke={stroke} strokeWidth="3" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">VOLUME EXTENDS OUTSIDE SKULL</text>
          </svg>
        );
    }
  }

  // BODY & PROPORTIONS
  if (refId.startsWith('ref-body-') || refId.startsWith('ref-prop-')) {
    switch (refId) {
      case 'ref-prop-1to1':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            {/* Top half: Head */}
            <circle cx="80" cy="38" r="28" fill="none" stroke={stroke} strokeWidth="3" />
            <line x1="120" y1="10" x2="120" y2="66" stroke={guide} strokeWidth="2" />
            <text x="135" y="42" fill={guide} fontSize="10" fontFamily="monospace" fontWeight="bold">1 HEAD</text>
            {/* Bottom half: Body */}
            <rect x="70" y="68" width="20" height="24" rx="8" fill="none" stroke={stroke} strokeWidth="2.5" />
            <circle cx="72" cy="98" r="5" fill={stroke} />
            <circle cx="88" cy="98" r="5" fill={stroke} />
            <line x1="120" y1="68" x2="120" y2="104" stroke={guide} strokeWidth="2" />
            <text x="135" y="88" fill={guide} fontSize="10" fontFamily="monospace" fontWeight="bold">1 BODY</text>
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">1:1 RATIO (MAXIMUM CHIBI)</text>
          </svg>
        );
      case 'ref-body-bean':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="32" r="22" fill="none" stroke={guide} strokeWidth="1" strokeDasharray="2 2" />
            {/* Bean shape */}
            <path
              d="M 72 54 C 62 65, 62 82, 74 92 C 86 94, 94 88, 92 76 C 90 65, 84 56, 72 54 Z"
              fill="none"
              stroke={stroke}
              strokeWidth="3"
            />
            <path d="M 72 52 Q 66 72 82 92" stroke={guide} strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <text x="80" y="114" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">CURVED SPINE LINE OF ACTION</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="35" r="24" fill="none" stroke={stroke} strokeWidth="2.5" />
            <rect x="68" y="62" width="24" height="28" rx="8" fill="none" stroke={stroke} strokeWidth="2.5" />
            <line x1="72" y1="90" x2="72" y2="104" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <line x1="88" y1="90" x2="88" y2="104" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">BALANCED CHIBI BUILD</text>
          </svg>
        );
    }
  }

  // CLOTHING & ACCESSORIES
  if (refId.startsWith('ref-cloth-') || refId.startsWith('ref-acc-')) {
    switch (refId) {
      case 'ref-cloth-sweater':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            {/* Slouchy sweater with collar */}
            <ellipse cx="80" cy="30" rx="16" ry="6" fill="#E8E0D5" stroke={stroke} strokeWidth="2.5" />
            <path
              d="M 64 32 Q 40 44 32 68 Q 38 72 44 68 Q 50 50 62 42 L 58 84 Q 80 88 102 84 L 98 42 Q 110 50 116 68 Q 122 72 128 68 Q 120 44 96 32 Z"
              fill="#FCFAF6"
              stroke={stroke}
              strokeWidth="3"
            />
            {/* Ribbing marks */}
            <line x1="64" y1="84" x2="96" y2="84" stroke={guide} strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">OVERSIZED CUFFS & DROPPED HEM</text>
          </svg>
        );
      case 'ref-acc-bag':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <rect x="52" y="35" width="56" height="48" rx="8" fill="#FCFAF6" stroke={stroke} strokeWidth="3" />
            <path d="M 52 48 Q 80 62 108 48" stroke={stroke} strokeWidth="2.5" fill="none" />
            <rect x="74" y="58" width="12" height="10" rx="2" fill="#E8E0D5" stroke={stroke} strokeWidth="2" />
            <path d="M 44 20 Q 80 30 116 20" stroke={guide} strokeWidth="2.5" fill="none" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">SATCHEL BUCKLES & POCKETS</text>
          </svg>
        );
      case 'ref-acc-mug':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <rect x="62" y="44" width="36" height="38" rx="6" fill="#FCFAF6" stroke={stroke} strokeWidth="3" />
            <path d="M 98 52 C 112 52, 112 72, 98 72" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            {/* Steam curves */}
            <path d="M 72 38 Q 68 28 72 20" stroke={guide} strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 82 36 Q 86 26 82 18" stroke={guide} strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">STEAM CURLS COMMUNICATE WARMTH</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <rect x="55" y="38" width="50" height="46" rx="6" fill="#FCFAF6" stroke={stroke} strokeWidth="3" />
            <circle cx="80" cy="61" r="12" fill="none" stroke={guide} strokeWidth="2" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">COSTUME & PROP DETAIL</text>
          </svg>
        );
    }
  }

  // POSES & WHOLE BODY EXPRESSIONS
  if (refId.startsWith('ref-pose-') || refId.startsWith('ref-act-') || refId.startsWith('ref-exp-')) {
    switch (refId) {
      case 'ref-pose-shy':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="34" r="22" fill="none" stroke={stroke} strokeWidth="2.5" />
            <ellipse cx="80" cy="68" rx="16" ry="18" fill="none" stroke={stroke} strokeWidth="2.5" />
            {/* Inward arms */}
            <path d="M 64 60 L 74 72" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M 96 60 L 86 72" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            {/* Pigeon toes */}
            <line x1="72" y1="86" x2="76" y2="102" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="78" cy="104" rx="6" ry="4" transform="rotate(-20 78 104)" fill={stroke} />
            <line x1="88" y1="86" x2="84" y2="102" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="82" cy="104" rx="6" ry="4" transform="rotate(20 82 104)" fill={stroke} />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">PIGEON-TOES & TUCKED ELBOWS</text>
          </svg>
        );
      case 'ref-pose-proud':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="32" r="22" fill="none" stroke={stroke} strokeWidth="2.5" />
            <path d="M 74 28 Q 80 24 86 28" stroke={stroke} strokeWidth="2" fill="none" />
            <ellipse cx="80" cy="64" rx="16" ry="16" fill="none" stroke={stroke} strokeWidth="2.5" />
            {/* Hands on hips */}
            <path d="M 66 56 L 56 64 L 66 70" stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 94 56 L 104 64 L 94 70" stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Wide feet */}
            <line x1="72" y1="80" x2="62" y2="100" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <line x1="88" y1="80" x2="98" y2="100" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">WIDE STANCE & CHIN UP</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="80" cy="34" r="20" fill="none" stroke={stroke} strokeWidth="2.5" />
            <ellipse cx="80" cy="66" rx="14" ry="16" fill="none" stroke={stroke} strokeWidth="2.5" />
            <line x1="72" y1="82" x2="68" y2="102" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <line x1="88" y1="82" x2="92" y2="102" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <text x="80" y="116" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">DYNAMIC ACTION LINE</text>
          </svg>
        );
    }
  }

  // WORLDS & COMPANIONS
  if (refId.startsWith('ref-world-') || refId.startsWith('ref-comp-') || refId.startsWith('ref-story-')) {
    switch (refId) {
      case 'ref-comp-frog':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <ellipse cx="80" cy="65" rx="22" ry="18" fill="#FCFAF6" stroke={stroke} strokeWidth="3" />
            <circle cx="68" cy="50" r="7" fill="#FCFAF6" stroke={stroke} strokeWidth="2.5" />
            <circle cx="68" cy="50" r="3" fill={stroke} />
            <circle cx="92" cy="50" r="7" fill="#FCFAF6" stroke={stroke} strokeWidth="2.5" />
            <circle cx="92" cy="50" r="3" fill={stroke} />
            <path d="M 72 68 Q 80 74 88 68" stroke={stroke} strokeWidth="2" fill="none" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">PALM-SIZED POCKET COMPANION</text>
          </svg>
        );
      case 'ref-world-attic':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            {/* Sloped roof beams */}
            <line x1="20" y1="20" x2="140" y2="50" stroke={stroke} strokeWidth="3" />
            <line x1="40" y1="25" x2="40" y2="100" stroke={guide} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="120" y1="45" x2="120" y2="100" stroke={guide} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="10" y1="100" x2="150" y2="100" stroke={stroke} strokeWidth="2" />
            {/* Floorboard planks */}
            <line x1="40" y1="100" x2="30" y2="114" stroke={pencil} strokeWidth="1" />
            <line x1="80" y1="100" x2="80" y2="114" stroke={pencil} strokeWidth="1" />
            <line x1="120" y1="100" x2="130" y2="114" stroke={pencil} strokeWidth="1" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">WOODEN EAVES & FLOOR PLANK LINES</text>
          </svg>
        );
      case 'ref-story-key':
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <circle cx="65" cy="55" r="14" fill="none" stroke={guide} strokeWidth="2.5" />
            <circle cx="65" cy="55" r="7" fill="none" stroke={stroke} strokeWidth="2" />
            <line x1="79" y1="55" x2="115" y2="55" stroke={stroke} strokeWidth="3" />
            <line x1="105" y1="55" x2="105" y2="65" stroke={stroke} strokeWidth="3" />
            <line x1="115" y1="55" x2="115" y2="68" stroke={stroke} strokeWidth="3" />
            {/* Sparkles */}
            <path d="M 90 35 L 93 42 L 100 45 L 93 48 L 90 55 L 87 48 L 80 45 L 87 42 Z" fill={guide} />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">A GLOWING CLUE SPARKS STORY</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
            <rect x="40" y="30" width="80" height="60" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
            <circle cx="60" cy="50" r="10" fill={guide} opacity="0.4" />
            <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">STORY SNAPSHOT VIGNETTE</text>
          </svg>
        );
    }
  }

  // PALETTE & COLOR
  if (refId.startsWith('ref-pal-')) {
    return (
      <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
        <circle cx="45" cy="50" r="18" fill="#5C5249" />
        <circle cx="80" cy="50" r="18" fill="#E06D53" />
        <circle cx="115" cy="50" r="18" fill="#E8E0D5" stroke={stroke} strokeWidth="1.5" />
        <text x="80" y="96" textAnchor="middle" fill={stroke} fontSize="10" fontWeight="bold">2 BASE COLORS + 1 POP ACCENT</text>
        <text x="80" y="112" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">SWATCH CIRCLES IN MARGIN</text>
      </svg>
    );
  }

  // DEFAULT / FALLBACK
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full max-h-44">
      <circle cx="80" cy="45" r="28" fill="none" stroke={stroke} strokeWidth="2.5" />
      <ellipse cx="80" cy="85" rx="20" ry="16" fill="none" stroke={stroke} strokeWidth="2.5" />
      <line x1="80" y1="17" x2="80" y2="101" stroke={guide} strokeWidth="1" strokeDasharray="3 3" />
      <text x="80" y="114" textAnchor="middle" fill={pencil} fontSize="9" fontFamily="monospace">CHIBI PROPORTION SCHEMATIC</text>
    </svg>
  );
}
