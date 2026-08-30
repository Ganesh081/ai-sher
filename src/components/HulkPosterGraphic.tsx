import React from 'react';

export const HulkPosterGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-square max-w-[480px] mx-auto select-none rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(163,230,53,0.4)] border border-lime-400/50 bg-[#040904] ${className}`}>
      
      {/* SVG Canvas for High-Precision Art Representation */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Glow Filters */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <radialGradient id="centerBurst" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#166534" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#052e16" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#020602" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="hulkAura" cx="50%" cy="48%" r="35%">
            <stop offset="0%" stopColor="#a3e635" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#052e16" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="boxFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f2912" />
            <stop offset="50%" stopColor="#08170a" />
            <stop offset="100%" stopColor="#020803" />
          </linearGradient>

          <linearGradient id="boxSideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#030803" />
            <stop offset="100%" stopColor="#0d2410" />
          </linearGradient>

          <linearGradient id="limeTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bef264" />
            <stop offset="50%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#65a30d" />
          </linearGradient>

          <linearGradient id="hulkSkinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="30%" stopColor="#22c55e" />
            <stop offset="70%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          <pattern id="cyberGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.2" />
          </pattern>
        </defs>

        {/* Deep Space Background */}
        <rect width="600" height="600" fill="#030703" />

        {/* Cyber Grid Floor & Walls */}
        <rect width="600" height="600" fill="url(#cyberGrid)" />

        {/* Perspective Laser Grid Lines Converging */}
        <g stroke="#4ade80" strokeWidth="1" strokeOpacity="0.35">
          <line x1="0" y1="0" x2="250" y2="280" />
          <line x1="600" y1="0" x2="350" y2="280" />
          <line x1="0" y1="600" x2="230" y2="440" />
          <line x1="600" y1="600" x2="370" y2="440" />
          <line x1="0" y1="300" x2="200" y2="300" />
          <line x1="600" y1="300" x2="400" y2="300" />
          <line x1="300" y1="0" x2="300" y2="150" />
          <line x1="300" y1="600" x2="300" y2="460" />
        </g>

        {/* Center Radiant Energy Burst */}
        <circle cx="300" cy="300" r="280" fill="url(#centerBurst)" />
        <circle cx="300" cy="300" r="160" fill="url(#hulkAura)" filter="url(#softGlow)" />

        {/* Electric Lightning Bolts (Top Left to Center) */}
        <path
          d="M 20,40 L 70,80 L 50,110 L 120,160 L 90,180 L 180,240"
          fill="none"
          stroke="#86efac"
          strokeWidth="2.5"
          filter="url(#neonGlow)"
        />
        <path
          d="M 10,200 L 60,220 L 40,240 L 110,270 L 90,290 L 160,310"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.8"
          filter="url(#softGlow)"
        />
        {/* Electric Lightning Bolts (Top Right to Center) */}
        <path
          d="M 580,50 L 530,90 L 550,120 L 480,170 L 510,190 L 430,250"
          fill="none"
          stroke="#86efac"
          strokeWidth="2.5"
          filter="url(#neonGlow)"
        />
        <path
          d="M 590,220 L 540,240 L 560,260 L 490,290 L 520,310 L 440,330"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.8"
          filter="url(#softGlow)"
        />
        {/* Bottom Lightning */}
        <path
          d="M 40,550 L 110,510 L 80,480 L 170,440 L 210,430"
          fill="none"
          stroke="#a3e635"
          strokeWidth="2"
          filter="url(#neonGlow)"
        />
        <path
          d="M 560,540 L 490,500 L 520,470 L 430,440 L 390,430"
          fill="none"
          stroke="#a3e635"
          strokeWidth="2"
          filter="url(#neonGlow)"
        />

        {/* ============================================================== */}
        {/* TOP SLOGAN TEXT: UNLEASH THE POWER OF AI! */}
        {/* ============================================================== */}
        <g id="topSlogan">
          <text
            x="300"
            y="52"
            textAnchor="middle"
            fontFamily="'Chakra Petch', 'Outfit', system-ui, sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="2"
            fill="#a3e635"
            filter="url(#neonGlow)"
          >
            UNLEASH THE POWER OF AI!
          </text>
          <text
            x="300"
            y="52"
            textAnchor="middle"
            fontFamily="'Chakra Petch', 'Outfit', system-ui, sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="2"
            fill="#ffffff"
          >
            UNLEASH THE POWER OF AI!
          </text>
        </g>

        {/* ============================================================== */}
        {/* LEFT FLOATING CARDS */}
        {/* ============================================================== */}
        {/* Card 1: Left Top (HULK vs AI) */}
        <g transform="translate(30, 150) rotate(-4)">
          <rect width="95" height="75" rx="5" fill="#040c05" stroke="#4ade80" strokeWidth="1.5" filter="url(#softGlow)" />
          <rect x="5" y="5" width="85" height="48" rx="3" fill="#081a0b" />
          {/* Mini Hulk silhouette battle */}
          <circle cx="35" cy="28" r="12" fill="#22c55e" opacity="0.8" />
          <circle cx="60" cy="26" r="10" fill="#38bdf8" opacity="0.8" />
          <text x="47" y="66" textAnchor="middle" fill="#ffffff" fontFamily="'Chakra Petch', sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">
            HULK vs AI
          </text>
        </g>

        {/* Card 2: Left Middle (HULK vs AI) */}
        <g transform="translate(15, 245) rotate(-2)">
          <rect width="95" height="75" rx="5" fill="#040c05" stroke="#4ade80" strokeWidth="1.5" filter="url(#softGlow)" />
          <rect x="5" y="5" width="85" height="48" rx="3" fill="#081a0b" />
          <circle cx="47" cy="28" r="14" fill="#22c55e" opacity="0.9" />
          <path d="M 40,24 L 54,24 L 51,36 L 43,36 Z" fill="#15803d" />
          <text x="47" y="66" textAnchor="middle" fill="#ffffff" fontFamily="'Chakra Petch', sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">
            HULK vs AI
          </text>
        </g>

        {/* Card 3: Left Bottom (CYBER SMASH) */}
        <g transform="translate(30, 340) rotate(3)">
          <rect width="95" height="75" rx="5" fill="#040c05" stroke="#4ade80" strokeWidth="1.5" filter="url(#softGlow)" />
          <rect x="5" y="5" width="85" height="48" rx="3" fill="#081a0b" />
          <circle cx="47" cy="28" r="13" fill="#a3e635" opacity="0.8" />
          <text x="47" y="66" textAnchor="middle" fill="#ffffff" fontFamily="'Chakra Petch', sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">
            CYBER SMASH
          </text>
        </g>

        {/* ============================================================== */}
        {/* RIGHT FLOATING CARDS */}
        {/* ============================================================== */}
        {/* Card 4: Right Top (CYBER SMASH) */}
        <g transform="translate(470, 150) rotate(4)">
          <rect width="95" height="75" rx="5" fill="#040c05" stroke="#4ade80" strokeWidth="1.5" filter="url(#softGlow)" />
          <rect x="5" y="5" width="85" height="48" rx="3" fill="#081a0b" />
          <circle cx="47" cy="28" r="13" fill="#22c55e" opacity="0.8" />
          <text x="47" y="66" textAnchor="middle" fill="#ffffff" fontFamily="'Chakra Petch', sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">
            CYBER SMASH
          </text>
        </g>

        {/* Card 5: Right Middle (DIGITAL RAGE) */}
        <g transform="translate(485, 245) rotate(2)">
          <rect width="95" height="75" rx="5" fill="#040c05" stroke="#4ade80" strokeWidth="1.5" filter="url(#softGlow)" />
          <rect x="5" y="5" width="85" height="48" rx="3" fill="#081a0b" />
          <circle cx="47" cy="28" r="14" fill="#a3e635" opacity="0.9" />
          <text x="47" y="66" textAnchor="middle" fill="#ffffff" fontFamily="'Chakra Petch', sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">
            DIGITAL RAGE
          </text>
        </g>

        {/* Card 6: Right Bottom (DIGITAL RAGE) */}
        <g transform="translate(470, 340) rotate(-3)">
          <rect width="95" height="75" rx="5" fill="#040c05" stroke="#4ade80" strokeWidth="1.5" filter="url(#softGlow)" />
          <rect x="5" y="5" width="85" height="48" rx="3" fill="#081a0b" />
          <circle cx="47" cy="28" r="13" fill="#22c55e" opacity="0.8" />
          <text x="47" y="66" textAnchor="middle" fill="#ffffff" fontFamily="'Chakra Petch', sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">
            DIGITAL RAGE
          </text>
        </g>

        {/* ============================================================== */}
        {/* 3D PRODUCT BUNDLE BOX (CENTER) */}
        {/* ============================================================== */}
        {/* Box Shadow & Radiant Green Aura */}
        <polygon
          points="180,450 440,430 460,455 170,475"
          fill="#000000"
          opacity="0.8"
        />

        {/* Left 3D Spine of Box */}
        <polygon
          points="180,140 230,105 230,470 180,450"
          fill="url(#boxSideGrad)"
          stroke="#4ade80"
          strokeWidth="1.5"
        />

        {/* Barcode on Left Spine */}
        <g transform="translate(190, 395) skewY(-15)">
          <rect width="25" height="38" fill="#ffffff" rx="1" />
          <rect x="2" y="2" width="2" height="30" fill="#000000" />
          <rect x="6" y="2" width="1" height="30" fill="#000000" />
          <rect x="9" y="2" width="3" height="30" fill="#000000" />
          <rect x="14" y="2" width="1.5" height="30" fill="#000000" />
          <rect x="17" y="2" width="2" height="30" fill="#000000" />
          <rect x="21" y="2" width="2" height="30" fill="#000000" />
        </g>

        {/* Top 3D Edge of Box */}
        <polygon
          points="230,105 440,115 425,125 230,120"
          fill="#143918"
          stroke="#86efac"
          strokeWidth="1"
        />

        {/* Main Front Face of Box */}
        <polygon
          points="230,118 435,128 435,465 230,475"
          fill="url(#boxFrontGrad)"
          stroke="#a3e635"
          strokeWidth="2.5"
          filter="url(#neonGlow)"
        />
        <polygon
          points="230,118 435,128 435,465 230,475"
          fill="url(#boxFrontGrad)"
        />

        {/* Box Inner Matrix Grid */}
        <g opacity="0.25">
          <line x1="230" y1="180" x2="435" y2="190" stroke="#4ade80" strokeWidth="1" />
          <line x1="230" y1="240" x2="435" y2="250" stroke="#4ade80" strokeWidth="1" />
          <line x1="230" y1="300" x2="435" y2="310" stroke="#4ade80" strokeWidth="1" />
          <line x1="230" y1="360" x2="435" y2="370" stroke="#4ade80" strokeWidth="1" />
          <line x1="230" y1="420" x2="435" y2="430" stroke="#4ade80" strokeWidth="1" />
          <line x1="298" y1="122" x2="298" y2="472" stroke="#4ade80" strokeWidth="1" />
          <line x1="366" y1="125" x2="366" y2="468" stroke="#4ade80" strokeWidth="1" />
        </g>

        {/* Box Top Title: 250+ AI HULK */}
        <text
          x="332"
          y="155"
          textAnchor="middle"
          fontFamily="'Chakra Petch', 'Outfit', sans-serif"
          fontWeight="900"
          fontSize="24"
          fill="#a3e635"
          filter="url(#neonGlow)"
        >
          250+ AI HULK
        </text>
        <text
          x="332"
          y="155"
          textAnchor="middle"
          fontFamily="'Chakra Petch', 'Outfit', sans-serif"
          fontWeight="900"
          fontSize="24"
          fill="#bef264"
        >
          250+ AI HULK
        </text>

        {/* Box Top Subtitle: STORY REELS BUNDLE */}
        <text
          x="332"
          y="174"
          textAnchor="middle"
          fontFamily="'Chakra Petch', 'Outfit', sans-serif"
          fontWeight="800"
          fontSize="11"
          letterSpacing="1.5"
          fill="#ffffff"
        >
          STORY REELS BUNDLE
        </text>

        {/* ============================================================== */}
        {/* DETAILED CENTER HERO GRAPHIC: THE POWERFUL AI HULK */}
        {/* ============================================================== */}
        <g id="hulkCharacter" transform="translate(260, 185)">
          {/* Energy Sparks behind Hulk */}
          <circle cx="72" cy="80" r="60" fill="#22c55e" opacity="0.3" filter="url(#softGlow)" />

          {/* Hulk Head & Face */}
          <path
            d="M 60,35 Q 72,20 84,35 Q 90,50 72,58 Q 54,50 60,35 Z"
            fill="url(#hulkSkinGrad)"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          {/* Hair */}
          <path
            d="M 57,32 Q 72,15 87,32 Q 78,25 72,27 Q 66,25 57,32 Z"
            fill="#091a0c"
          />
          {/* Raging Eyes & Glow */}
          <circle cx="66" cy="38" r="2.5" fill="#facc15" filter="url(#softGlow)" />
          <circle cx="78" cy="38" r="2.5" fill="#facc15" filter="url(#softGlow)" />
          {/* Snarl/Mouth */}
          <path d="M 67,48 Q 72,52 77,48" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Massive Muscular Neck & Traps */}
          <path
            d="M 45,55 Q 72,45 99,55 L 108,70 Q 72,60 36,70 Z"
            fill="url(#hulkSkinGrad)"
          />

          {/* Massive Chest (Pectorals) */}
          <path
            d="M 38,68 Q 72,60 106,68 L 112,102 Q 72,112 32,102 Z"
            fill="url(#hulkSkinGrad)"
            stroke="#166534"
            strokeWidth="1.5"
          />
          {/* Pec Muscle Center Line */}
          <line x1="72" y1="65" x2="72" y2="105" stroke="#14532d" strokeWidth="2.5" />
          {/* Glowing Green Veins on Chest */}
          <path
            d="M 48,76 Q 58,82 70,78 M 96,76 Q 86,82 74,78"
            stroke="#bbf7d0"
            strokeWidth="1.2"
            fill="none"
            filter="url(#softGlow)"
          />

          {/* Biceps & Muscular Arms */}
          {/* Left Arm (Viewer's Left) */}
          <path
            d="M 36,70 Q 15,85 24,115 Q 32,130 46,110 L 40,90 Z"
            fill="url(#hulkSkinGrad)"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          {/* Left Fist Clenched */}
          <circle cx="28" cy="120" r="11" fill="#16a34a" stroke="#14532d" strokeWidth="1.5" />
          <path d="M 22,116 L 34,116 M 22,121 L 34,121 M 22,126 L 32,126" stroke="#052e16" strokeWidth="1" />

          {/* Right Arm (Viewer's Right) */}
          <path
            d="M 108,70 Q 129,85 120,115 Q 112,130 98,110 L 104,90 Z"
            fill="url(#hulkSkinGrad)"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          {/* Right Fist Clenched */}
          <circle cx="116" cy="120" r="11" fill="#16a34a" stroke="#14532d" strokeWidth="1.5" />
          <path d="M 110,116 L 122,116 M 110,121 L 122,121 M 112,126 L 122,126" stroke="#052e16" strokeWidth="1" />

          {/* Six-Pack Abs & Core */}
          <path
            d="M 48,103 Q 72,108 96,103 L 92,140 Q 72,145 52,140 Z"
            fill="url(#hulkSkinGrad)"
            stroke="#15803d"
            strokeWidth="1"
          />
          <line x1="72" y1="105" x2="72" y2="138" stroke="#14532d" strokeWidth="2" />
          <line x1="56" y1="116" x2="88" y2="116" stroke="#14532d" strokeWidth="1.5" />
          <line x1="58" y1="128" x2="86" y2="128" stroke="#14532d" strokeWidth="1.5" />

          {/* Dark Ripped Cyber Pants */}
          <path
            d="M 48,138 Q 72,144 96,138 L 102,175 L 82,175 L 72,150 L 62,175 L 42,175 Z"
            fill="#1e1b4b"
            stroke="#312e81"
            strokeWidth="1.5"
          />
          {/* Belt / Waistband */}
          <rect x="50" y="136" width="44" height="5" fill="#4338ca" rx="1" />

          {/* Electric Vein Circuits overlaying Hulk */}
          <path
            d="M 28,100 L 32,90 L 42,88 M 116,100 L 112,90 L 102,88"
            stroke="#86efac"
            strokeWidth="1.5"
            fill="none"
            filter="url(#neonGlow)"
          />
        </g>

        {/* Box Bottom Header: AI HULK */}
        <text
          x="332"
          y="410"
          textAnchor="middle"
          fontFamily="'Chakra Petch', 'Outfit', sans-serif"
          fontWeight="900"
          fontSize="36"
          letterSpacing="1"
          fill="#a3e635"
          filter="url(#neonGlow)"
        >
          AI HULK
        </text>
        <text
          x="332"
          y="410"
          textAnchor="middle"
          fontFamily="'Chakra Petch', 'Outfit', sans-serif"
          fontWeight="900"
          fontSize="36"
          letterSpacing="1"
          fill="#d9f99d"
        >
          AI HULK
        </text>

        {/* Box Bottom Subtitle: STORY REELS BUNDLE */}
        <text
          x="332"
          y="435"
          textAnchor="middle"
          fontFamily="'Chakra Petch', 'Outfit', sans-serif"
          fontWeight="800"
          fontSize="14"
          letterSpacing="2"
          fill="#ffffff"
        >
          STORY REELS BUNDLE
        </text>

        {/* ============================================================== */}
        {/* BOTTOM SLOGAN TEXT: UNLEASH THE POWER OF AI! */}
        {/* ============================================================== */}
        <g id="bottomSlogan">
          <text
            x="300"
            y="555"
            textAnchor="middle"
            fontFamily="'Chakra Petch', 'Outfit', system-ui, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="2"
            fill="#a3e635"
            filter="url(#neonGlow)"
          >
            UNLEASH THE POWER OF AI!
          </text>
          <text
            x="300"
            y="555"
            textAnchor="middle"
            fontFamily="'Chakra Petch', 'Outfit', system-ui, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="2"
            fill="#ffffff"
          >
            UNLEASH THE POWER OF AI!
          </text>
        </g>

      </svg>
    </div>
  );
};
