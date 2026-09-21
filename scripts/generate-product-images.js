import sharp from "sharp";
import fs from "fs";
import path from "path";

const OUT_DIR = "images/products";
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Common SVG components
function baseSvg(brand, model, subtitle, innerGraphic, categoryBadge = "MEDICAL EQUIPMENT") {
  const safeBrand = escapeXml(brand);
  const safeModel = escapeXml(model);
  const safeSub = escapeXml(subtitle);
  const safeCat = escapeXml(categoryBadge);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fcfb"/>
        <stop offset="50%" stop-color="#eff7f4"/>
        <stop offset="100%" stop-color="#e3f1ed"/>
      </linearGradient>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1a6f5f"/>
        <stop offset="50%" stop-color="#2a9b85"/>
        <stop offset="100%" stop-color="#69cbb2"/>
      </linearGradient>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="50%" stop-color="#edf2f0"/>
        <stop offset="100%" stop-color="#d4e2de"/>
      </linearGradient>
      <linearGradient id="darkMetal" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#2c423e"/>
        <stop offset="50%" stop-color="#1b2e2b"/>
        <stop offset="100%" stop-color="#0f2422"/>
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#091816"/>
        <stop offset="100%" stop-color="#122a27"/>
      </linearGradient>
      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#0f2422" flood-opacity="0.12"/>
      </filter>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    
    <!-- Background canvas -->
    <rect width="800" height="600" fill="url(#bg)"/>
    
    <!-- Ambient glowing subtle orbs -->
    <circle cx="720" cy="90" r="260" fill="#69cbb2" opacity="0.09"/>
    <circle cx="90" cy="510" r="200" fill="#2a9b85" opacity="0.07"/>
    
    <!-- Studio floor contact shadow -->
    <ellipse cx="400" cy="505" rx="330" ry="28" fill="#0f2422" opacity="0.10"/>
    <ellipse cx="400" cy="500" rx="260" ry="18" fill="#0f2422" opacity="0.14"/>

    <!-- Main Device Illustration Graphic -->
    <g filter="url(#cardShadow)">
      ${innerGraphic}
    </g>

    <!-- Top Brand & Category Header Pill -->
    <rect x="36" y="32" width="220" height="34" rx="17" fill="#ffffff" stroke="#d5e8e3" stroke-width="1.5"/>
    <circle cx="53" cy="49" r="6" fill="#2a9b85"/>
    <text x="68" y="54" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#0f2422">${safeBrand}</text>

    <rect x="266" y="32" width="180" height="34" rx="17" fill="#e6f7f2" stroke="#bcded5" stroke-width="1.2"/>
    <text x="356" y="54" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#1a6f5f" text-anchor="middle">${safeCat}</text>

    <!-- SIMAK Genuine Indenting Badge (Top-Right) -->
    <g transform="translate(610, 32)">
      <rect width="155" height="34" rx="17" fill="#ffffff" stroke="#d5e8e3" stroke-width="1.5"/>
      <path d="M 18 17 L 24 23 L 34 11" fill="none" stroke="#2a9b85" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="42" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#0f2422">OFFICIAL INDENT</text>
    </g>

    <!-- Bottom Model Spec Card -->
    <g transform="translate(36, 475)">
      <rect width="320" height="88" rx="14" fill="#ffffff" fill-opacity="0.94" stroke="#d5e8e3" stroke-width="1.5"/>
      <text x="18" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#0f2422">${safeModel}</text>
      <text x="18" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#5c7370">${safeSub}</text>
      
      <rect x="18" y="58" width="90" height="20" rx="4" fill="#e6f7f2"/>
      <text x="63" y="72" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#1a6f5f" text-anchor="middle">CERTIFIED</text>
      
      <rect x="115" y="58" width="85" height="20" rx="4" fill="#f2fbf8" stroke="#d5e8e3"/>
      <text x="157" y="72" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#2a9b85" text-anchor="middle">WARRANTY</text>
    </g>
  </svg>`;
}

// Graphic Templates
function ctGraphic(accentColor = "#2a9b85", label = "CT GANTRY") {
  return `
    <!-- Gantry Main Housing -->
    <rect x="190" y="115" width="310" height="355" rx="52" fill="url(#metalGrad)" stroke="#c2d9d3" stroke-width="2"/>
    <path d="M 210 115 L 480 115 Q 500 115 500 135 L 500 180 L 190 180 L 190 135 Q 190 115 210 115 Z" fill="#ffffff" opacity="0.75"/>
    <rect x="190" y="180" width="310" height="8" fill="${accentColor}"/>
    
    <!-- Gantry Bore Ring -->
    <circle cx="345" cy="285" r="115" fill="#dfebe8" stroke="#bcd3cc" stroke-width="3"/>
    <circle cx="345" cy="285" r="92" fill="url(#screenGrad)"/>
    <circle cx="345" cy="285" r="76" fill="none" stroke="${accentColor}" stroke-width="2.5" stroke-dasharray="8,6" opacity="0.9"/>
    <circle cx="345" cy="285" r="30" fill="#0f2422" opacity="0.8"/>
    
    <!-- Controls Left & Right -->
    <rect x="215" y="250" width="22" height="65" rx="5" fill="#1b2e2b"/>
    <circle cx="226" cy="265" r="4" fill="${accentColor}"/>
    <circle cx="226" cy="282" r="4" fill="#ffffff"/>
    <circle cx="226" cy="300" r="4" fill="#f0b429"/>

    <rect x="453" y="250" width="22" height="65" rx="5" fill="#1b2e2b"/>
    <circle cx="464" cy="265" r="4" fill="${accentColor}"/>
    <circle cx="464" cy="282" r="4" fill="#ffffff"/>
    <circle cx="464" cy="300" r="4" fill="${accentColor}"/>

    <!-- Top Laser / Digital readout -->
    <rect x="295" y="138" width="100" height="24" rx="4" fill="#0f2422"/>
    <text x="345" y="154" font-family="monospace" font-size="11" font-weight="bold" fill="#69cbb2" text-anchor="middle">${label}</text>

    <!-- Patient Couch Table -->
    <path d="M 345 335 L 685 335 Q 700 335 700 348 L 695 365 L 345 365 Z" fill="url(#darkMetal)"/>
    <rect x="365" y="332" width="320" height="4" fill="${accentColor}" rx="2"/>
    <!-- Pedestal Base -->
    <polygon points="480,365 600,365 585,485 495,485" fill="#e2edea" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="465" y="480" width="150" height="18" rx="4" fill="#1b2e2b"/>
  `;
}

function mriGraphic(accentColor = "#2a9b85", label = "3.0T MAGNET", isOpen = false) {
  if (isOpen) {
    // Open MRI C-shape Architecture
    return `
      <rect x="220" y="130" width="260" height="65" rx="16" fill="url(#metalGrad)" stroke="#c2d9d3" stroke-width="2"/>
      <rect x="220" y="380" width="260" height="85" rx="16" fill="url(#metalGrad)" stroke="#c2d9d3" stroke-width="2"/>
      <!-- Magnetic Vertical Column (Back) -->
      <rect x="180" y="150" width="90" height="270" rx="20" fill="url(#darkMetal)"/>
      <rect x="195" y="170" width="10" height="230" fill="${accentColor}" rx="4"/>

      <!-- Upper Pole & Lower Pole -->
      <ellipse cx="370" cy="190" rx="90" ry="25" fill="#2a423d"/>
      <ellipse cx="370" cy="385" rx="90" ry="25" fill="#2a423d"/>

      <!-- Patient Open Bed -->
      <path d="M 280 295 L 690 295 Q 705 295 705 308 L 700 325 L 280 325 Z" fill="url(#darkMetal)"/>
      <rect x="300" y="292" width="390" height="4" fill="${accentColor}" rx="2"/>
      <polygon points="460,325 580,325 565,475 475,475" fill="#e2edea" stroke="#bcd3cc" stroke-width="2"/>
      <rect x="445" y="470" width="150" height="18" rx="4" fill="#1b2e2b"/>
      
      <rect x="300" y="142" width="100" height="22" rx="4" fill="#0f2422"/>
      <text x="350" y="157" font-family="monospace" font-size="11" font-weight="bold" fill="#69cbb2" text-anchor="middle">OPEN MRI 0.4T</text>
    `;
  }

  // Cylindrical High Field MRI
  return `
    <rect x="170" y="105" width="340" height="375" rx="58" fill="url(#metalGrad)" stroke="#c2d9d3" stroke-width="2.5"/>
    <path d="M 195 105 L 485 105 Q 510 105 510 130 L 510 175 L 170 175 L 170 130 Q 170 105 195 105 Z" fill="#ffffff" opacity="0.8"/>
    <rect x="170" y="175" width="340" height="10" fill="${accentColor}"/>
    
    <!-- Wide MRI Bore -->
    <circle cx="340" cy="290" r="128" fill="#d5e8e3" stroke="#bcd3cc" stroke-width="4"/>
    <circle cx="340" cy="290" r="102" fill="url(#screenGrad)"/>
    <circle cx="340" cy="290" r="85" fill="none" stroke="#69cbb2" stroke-width="3" stroke-dasharray="10, 8"/>
    <circle cx="340" cy="290" r="38" fill="#0f2422"/>

    <!-- Gradient Ring Ambient Lighting -->
    <circle cx="340" cy="290" r="94" fill="none" stroke="${accentColor}" stroke-width="4" opacity="0.6"/>

    <!-- Overhead Control & Display -->
    <rect x="285" y="128" width="110" height="26" rx="5" fill="#0f2422"/>
    <text x="340" y="145" font-family="monospace" font-size="11" font-weight="bold" fill="#69cbb2" text-anchor="middle">${label}</text>

    <!-- Couch Table with RF Coil Slot -->
    <path d="M 340 345 L 690 345 Q 705 345 705 358 L 700 375 L 340 375 Z" fill="url(#darkMetal)"/>
    <rect x="360" y="342" width="330" height="5" fill="${accentColor}" rx="2"/>
    <!-- Head Matrix Coil -->
    <rect x="350" y="325" width="55" height="20" rx="8" fill="#4d6f68" stroke="#bcd3cc"/>

    <!-- Couch Base -->
    <polygon points="470,375 600,375 585,490 485,490" fill="#e2edea" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="455" y="485" width="160" height="18" rx="4" fill="#1b2e2b"/>
  `;
}

function xrayCarmGraphic(isCarm = false) {
  if (isCarm) {
    // Mobile Surgical C-Arm
    return `
      <!-- Mobile Base Cart with Wheels -->
      <rect x="380" y="390" width="190" height="90" rx="14" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
      <circle cx="415" cy="495" r="16" fill="#1b2e2b"/>
      <circle cx="415" cy="495" r="7" fill="#69cbb2"/>
      <circle cx="535" cy="495" r="16" fill="#1b2e2b"/>
      <circle cx="535" cy="495" r="7" fill="#69cbb2"/>
      <!-- Steering Handle -->
      <path d="M 565 420 L 595 420 L 595 440" fill="none" stroke="#2a9b85" stroke-width="4" stroke-linecap="round"/>

      <!-- Vertical Column & Pivot -->
      <rect x="445" y="240" width="45" height="160" fill="url(#darkMetal)" rx="6"/>
      <circle cx="468" cy="270" r="24" fill="#2a9b85" stroke="#ffffff" stroke-width="2"/>

      <!-- C-shaped Arc -->
      <path d="M 280 140 C 130 200, 130 380, 310 440" fill="none" stroke="url(#metalGrad)" stroke-width="32" stroke-linecap="round"/>
      <path d="M 280 140 C 130 200, 130 380, 310 440" fill="none" stroke="#2a9b85" stroke-width="6" stroke-linecap="round"/>

      <!-- Image Intensifier / Flat Panel (Top) -->
      <rect x="250" y="110" width="80" height="60" rx="12" fill="url(#darkMetal)" stroke="#bcd3cc" stroke-width="2"/>
      <rect x="258" y="160" width="64" height="6" fill="#69cbb2" rx="2"/>

      <!-- X-ray Tube Assembly (Bottom) -->
      <rect x="280" y="415" width="85" height="65" rx="12" fill="url(#darkMetal)" stroke="#bcd3cc" stroke-width="2"/>
      <circle cx="322" cy="425" r="8" fill="#f0b429"/>

      <!-- Separate Dual-Monitor Cart Preview -->
      <rect x="580" y="200" width="130" height="90" rx="8" fill="#0f2422" stroke="#2a9b85" stroke-width="2"/>
      <rect x="588" y="208" width="54" height="74" fill="#122a27" rx="4"/>
      <circle cx="615" cy="245" r="18" fill="none" stroke="#69cbb2" stroke-width="2"/>
      <rect x="648" y="208" width="54" height="74" fill="#122a27" rx="4"/>
      <!-- Cart pole -->
      <rect x="640" y="290" width="12" height="150" fill="url(#metalGrad)"/>
      <rect x="600" y="440" width="90" height="25" rx="6" fill="#1b2e2b"/>
    `;
  }

  // General X-Ray System (Floor Mounted)
  return `
    <!-- Floor Radiographic Table -->
    <rect x="180" y="340" width="380" height="35" rx="8" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="180" y="335" width="380" height="6" fill="#2a9b85" rx="2"/>
    <!-- Table Pedestal Base -->
    <rect x="280" y="375" width="180" height="110" fill="url(#darkMetal)" rx="8"/>
    <rect x="250" y="480" width="240" height="18" fill="#1b2e2b" rx="4"/>

    <!-- Tube Crane / Stand -->
    <rect x="580" y="90" width="28" height="400" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <!-- Transverse Arm -->
    <rect x="310" y="140" width="280" height="22" rx="6" fill="url(#darkMetal)"/>
    
    <!-- X-Ray Tube Head & Collimator -->
    <rect x="330" y="160" width="85" height="90" rx="12" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <!-- Collimator Box & Light -->
    <rect x="345" y="240" width="55" height="40" rx="4" fill="#1b2e2b"/>
    <polygon points="350,280 395,280 430,340 315,340" fill="#f0b429" opacity="0.18"/>
    <circle cx="372" cy="260" r="6" fill="#f0b429"/>
    <!-- Handles -->
    <path d="M 325 210 L 315 230 L 315 250" fill="none" stroke="#2a9b85" stroke-width="4" stroke-linecap="round"/>
    <path d="M 420 210 L 430 230 L 430 250" fill="none" stroke="#2a9b85" stroke-width="4" stroke-linecap="round"/>

    <!-- High Frequency Generator Console -->
    <rect x="630" y="270" width="105" height="160" rx="10" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="645" y="290" width="75" height="45" rx="4" fill="#0f2422"/>
    <text x="682" y="315" font-family="monospace" font-size="12" font-weight="bold" fill="#69cbb2" text-anchor="middle">500 mA</text>
    <text x="682" y="328" font-family="monospace" font-size="10" fill="#f0b429" text-anchor="middle">125 kV</text>
  `;
}

function ultrasoundGraphic(isPortable = false, accentColor = "#2a9b85") {
  if (isPortable) {
    // DP-30 Portable Laptop Style
    return `
      <!-- Base Console Clamshell -->
      <rect x="260" y="320" width="280" height="95" rx="14" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
      <!-- Keyboard & Trackball -->
      <rect x="280" y="335" width="240" height="45" rx="6" fill="#233a36"/>
      <circle cx="400" cy="385" r="16" fill="#e6f7f2" stroke="#2a9b85" stroke-width="2"/>
      <!-- Carry Handle -->
      <path d="M 360 415 L 360 435 L 440 435 L 440 415" fill="none" stroke="#1b2e2b" stroke-width="8" stroke-linecap="round"/>

      <!-- Articulating Display Upper Shell -->
      <g transform="rotate(-15, 260, 320)">
        <rect x="260" y="140" width="280" height="185" rx="14" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
        <rect x="275" y="155" width="250" height="155" rx="8" fill="url(#screenGrad)"/>
        <!-- Ultrasound Scan Sector -->
        <path d="M 400 170 L 320 285 A 110 110 0 0 0 480 285 Z" fill="#1b423b" opacity="0.6"/>
        <path d="M 400 170 L 340 285 A 90 90 0 0 0 460 285 Z" fill="#2a9b85" opacity="0.3"/>
        <text x="290" y="175" font-family="monospace" font-size="9" fill="#69cbb2">B-MODE : 7.5MHz</text>
      </g>

      <!-- Transducer Probe & Coiled Cable -->
      <path d="M 520 370 Q 590 390 570 450 Q 560 490 620 480" fill="none" stroke="#2a423d" stroke-width="5"/>
      <rect x="610" y="440" width="28" height="55" rx="8" fill="url(#metalGrad)" stroke="#2a9b85" stroke-width="2"/>
      <rect x="610" y="435" width="28" height="6" fill="#2a9b85" rx="2"/>
    `;
  }

  // Cart-based Premium Diagnostic Ultrasound
  return `
    <!-- Rolling Cart Base with 4 Anti-Static Wheels -->
    <rect x="330" y="440" width="150" height="55" rx="12" fill="url(#darkMetal)"/>
    <circle cx="345" cy="498" r="14" fill="#1b2e2b"/>
    <circle cx="345" cy="498" r="6" fill="#69cbb2"/>
    <circle cx="465" cy="498" r="14" fill="#1b2e2b"/>
    <circle cx="465" cy="498" r="6" fill="#69cbb2"/>
    <rect x="360" y="490" width="90" height="8" fill="${accentColor}"/>

    <!-- Pedestal Column with Motorized Height Adjust -->
    <rect x="385" y="270" width="40" height="175" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="395" y="290" width="20" height="140" fill="#2a423d" rx="4"/>

    <!-- Operating Console & Touch Panel -->
    <path d="M 290 270 L 520 270 L 500 315 L 310 315 Z" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="325" y="278" width="160" height="30" rx="4" fill="#1f3d38"/>
    <!-- Trackball & Keys -->
    <circle cx="405" cy="293" r="10" fill="#ffffff" stroke="${accentColor}" stroke-width="2"/>
    <circle cx="350" cy="293" r="4" fill="${accentColor}"/>
    <circle cx="370" cy="293" r="4" fill="#ffffff"/>
    <circle cx="440" cy="293" r="4" fill="#ffffff"/>
    <circle cx="460" cy="293" r="4" fill="#f0b429"/>

    <!-- Probe Holsters on side -->
    <rect x="290" y="280" width="16" height="35" rx="4" fill="#2a423d"/>
    <rect x="504" y="280" width="16" height="35" rx="4" fill="#2a423d"/>

    <!-- Articulating Display Arm -->
    <path d="M 405 270 L 405 200 L 420 180" fill="none" stroke="#2a423d" stroke-width="12" stroke-linecap="round"/>

    <!-- High-Resolution Widescreen Display -->
    <rect x="260" y="70" width="290" height="180" rx="14" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="272" y="82" width="266" height="156" rx="8" fill="url(#screenGrad)"/>
    
    <!-- Ultrasound Anatomy & Color Doppler Flow Simulation -->
    <path d="M 405 95 L 310 215 A 140 140 0 0 0 500 215 Z" fill="#163832" opacity="0.7"/>
    <circle cx="405" cy="165" r="32" fill="none" stroke="#69cbb2" stroke-width="2" stroke-dasharray="6,4"/>
    <!-- Color Doppler (Red & Blue arterial/venous flow) -->
    <ellipse cx="405" cy="165" rx="18" ry="12" fill="#ef4444" opacity="0.75"/>
    <ellipse cx="415" cy="170" rx="12" ry="8" fill="#3b82f6" opacity="0.75"/>
    <text x="282" y="102" font-family="monospace" font-size="10" fill="#69cbb2">ZST+ DOPPLER | 42 fps</text>

    <!-- Transducer Probes & Cables -->
    <path d="M 295 310 Q 260 360 270 420 Q 280 470 300 480" fill="none" stroke="#1b2e2b" stroke-width="4"/>
    <rect x="290" y="445" width="20" height="42" rx="6" fill="url(#metalGrad)" stroke="${accentColor}" stroke-width="2"/>
    <path d="M 515 310 Q 550 360 540 420 Q 530 470 510 480" fill="none" stroke="#1b2e2b" stroke-width="4"/>
    <rect x="500" y="445" width="20" height="42" rx="6" fill="url(#metalGrad)" stroke="${accentColor}" stroke-width="2"/>
  `;
}

function endoscopyGraphic(isDiathermy = false) {
  if (isDiathermy) {
    // ESG-150 Electrosurgical Generator
    return `
      <!-- Generator Chassis -->
      <rect x="240" y="210" width="320" height="190" rx="16" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2.5"/>
      <rect x="240" y="210" width="320" height="16" fill="#2a9b85" rx="8"/>

      <!-- Digital Wattage Displays (Cut / Coag) -->
      <rect x="270" y="245" width="115" height="65" rx="8" fill="#0f2422"/>
      <text x="327" y="275" font-family="monospace" font-size="24" font-weight="bold" fill="#f0b429" text-anchor="middle">120 W</text>
      <text x="327" y="298" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">PURE CUT</text>

      <rect x="415" y="245" width="115" height="65" rx="8" fill="#0f2422"/>
      <text x="472" y="275" font-family="monospace" font-size="24" font-weight="bold" fill="#3b82f6" text-anchor="middle">80 W</text>
      <text x="472" y="298" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">FORCED COAG</text>

      <!-- Monopolar / Bipolar Socket Connections -->
      <circle cx="285" cy="355" r="14" fill="#1b2e2b" stroke="#bcd3cc"/>
      <circle cx="340" cy="355" r="14" fill="#1b2e2b" stroke="#bcd3cc"/>
      <circle cx="460" cy="355" r="14" fill="#1b2e2b" stroke="#3b82f6"/>
      <circle cx="510" cy="355" r="14" fill="#1b2e2b" stroke="#3b82f6"/>

      <!-- Power Switch -->
      <rect x="240" y="375" width="30" height="15" rx="3" fill="#2a9b85"/>
    `;
  }

  // Endoscopy Video Workstation Tower (EVIS / EBUS)
  return `
    <!-- Multi-shelf Endoscopy Trolley -->
    <rect x="270" y="90" width="260" height="400" rx="16" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2.5"/>
    <rect x="250" y="475" width="300" height="25" rx="8" fill="url(#darkMetal)"/>
    <circle cx="270" cy="505" r="14" fill="#1b2e2b"/>
    <circle cx="530" cy="505" r="14" fill="#1b2e2b"/>

    <!-- Top Medical HD Monitor -->
    <rect x="240" y="70" width="320" height="175" rx="12" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>
    <rect x="252" y="82" width="296" height="151" rx="6" fill="url(#screenGrad)"/>
    <!-- Endoscopic Lumen Visual Simulation -->
    <circle cx="400" cy="157" r="55" fill="#1a3b35"/>
    <circle cx="400" cy="157" r="35" fill="#244d45"/>
    <circle cx="405" cy="155" r="18" fill="#0f2422"/>
    <!-- Mucosal Vessel highlights (NBI Optical filter effect) -->
    <path d="M 375 140 Q 395 150 420 145" fill="none" stroke="#69cbb2" stroke-width="2"/>
    <path d="M 380 170 Q 400 165 425 175" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="264" y="100" font-family="monospace" font-size="10" fill="#69cbb2">NBI ENHANCED | HD-1080p</text>

    <!-- Shelf 2: Video Processor Unit -->
    <rect x="285" y="260" width="230" height="60" rx="8" fill="#1f3d38" stroke="#bcd3cc"/>
    <circle cx="310" cy="290" r="10" fill="#2a9b85"/>
    <rect x="335" y="282" width="60" height="16" rx="4" fill="#0f2422"/>
    <text x="365" y="294" font-family="monospace" font-size="9" fill="#69cbb2" text-anchor="middle">CV-190</text>
    <circle cx="490" cy="290" r="6" fill="#f0b429"/>

    <!-- Shelf 3: Xenon Light Source -->
    <rect x="285" y="335" width="230" height="60" rx="8" fill="#1f3d38" stroke="#bcd3cc"/>
    <circle cx="310" cy="365" r="12" fill="#38bdf8" opacity="0.8"/>
    <rect x="335" y="357" width="60" height="16" rx="4" fill="#0f2422"/>
    <text x="365" y="369" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle">300W XENON</text>

    <!-- Scope Hanger & Flexible Video Endoscope Tube -->
    <path d="M 520 180 L 560 180 L 560 380 Q 560 450 510 460 Q 480 465 490 430" fill="none" stroke="#1b2e2b" stroke-width="7" stroke-linecap="round"/>
    <circle cx="490" cy="425" r="8" fill="#2a9b85"/>
  `;
}

function criticalCareGraphic(isVentilator = false, modelName = "MONITOR") {
  if (isVentilator) {
    // SV300 ICU Mechanical Ventilator
    return `
      <!-- Wheeled Pedestal Base -->
      <rect x="330" y="440" width="140" height="50" rx="10" fill="url(#darkMetal)"/>
      <circle cx="340" cy="495" r="14" fill="#1b2e2b"/>
      <circle cx="460" cy="495" r="14" fill="#1b2e2b"/>
      <!-- Support Pole -->
      <rect x="385" y="270" width="30" height="175" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2"/>

      <!-- Ventilator Main Body -->
      <rect x="260" y="110" width="280" height="200" rx="16" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2.5"/>
      <!-- Color Touchscreen -->
      <rect x="275" y="125" width="200" height="150" rx="8" fill="url(#screenGrad)"/>
      <!-- Pressure / Flow Waveforms -->
      <path d="M 285 155 L 305 140 L 320 155 L 345 155 L 365 140 L 380 155 L 410 155" fill="none" stroke="#69cbb2" stroke-width="2"/>
      <path d="M 285 185 L 295 170 L 310 195 L 325 185 L 355 185 L 365 170 L 380 195" fill="none" stroke="#f0b429" stroke-width="2"/>
      <!-- Numerical Readouts -->
      <text x="440" y="150" font-family="monospace" font-size="14" font-weight="bold" fill="#69cbb2">Vt 450</text>
      <text x="440" y="175" font-family="monospace" font-size="14" font-weight="bold" fill="#f0b429">Ppeak 18</text>
      <text x="440" y="200" font-family="monospace" font-size="14" font-weight="bold" fill="#38bdf8">f 14</text>

      <!-- Control Dial -->
      <circle cx="505" cy="225" r="18" fill="#1b2e2b" stroke="#2a9b85" stroke-width="2.5"/>

      <!-- Expiratory / Inspiratory Valve Ports -->
      <rect x="290" y="285" width="30" height="25" rx="6" fill="#1f3d38"/>
      <rect x="335" y="285" width="30" height="25" rx="6" fill="#1f3d38"/>
      <!-- Dual Heated Breathing Circuits Tube -->
      <path d="M 305 310 Q 280 370 295 440" fill="none" stroke="#69cbb2" stroke-width="5" opacity="0.8"/>
      <path d="M 350 310 Q 325 370 340 440" fill="none" stroke="#38bdf8" stroke-width="5" opacity="0.8"/>
    `;
  }

  // Patient Monitor (BeneVision N17, Unimed U8, U8 Pro, VSA-60)
  return `
    <!-- Patient Monitor Bezel & Casing -->
    <rect x="210" y="140" width="380" height="270" rx="20" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2.5"/>
    <rect x="210" y="140" width="380" height="16" fill="#2a9b85" rx="8"/>
    <!-- Alarm Indicator Light Bar -->
    <rect x="350" y="143" width="100" height="8" rx="4" fill="#69cbb2" filter="url(#glow)"/>

    <!-- High Contrast Vitals Screen -->
    <rect x="228" y="165" width="344" height="225" rx="10" fill="url(#screenGrad)"/>

    <!-- 1. ECG Waveform (Green) -->
    <path d="M 238 200 L 265 200 L 270 185 L 275 220 L 280 175 L 285 205 L 290 200 L 330 200 L 335 185 L 340 220 L 345 175 L 350 205 L 355 200 L 410 200" fill="none" stroke="#22c55e" stroke-width="2.2"/>
    <text x="420" y="200" font-family="monospace" font-size="28" font-weight="bold" fill="#22c55e">75</text>
    <text x="465" y="190" font-family="sans-serif" font-size="9" fill="#22c55e">HR bpm</text>

    <!-- 2. SpO2 Waveform (Cyan) -->
    <path d="M 238 250 Q 250 235 260 250 T 280 250 Q 290 235 300 250 T 320 250 Q 330 235 340 250 T 360 250 L 410 250" fill="none" stroke="#38bdf8" stroke-width="2.2"/>
    <text x="420" y="250" font-family="monospace" font-size="28" font-weight="bold" fill="#38bdf8">99</text>
    <text x="465" y="240" font-family="sans-serif" font-size="9" fill="#38bdf8">SpO2 %</text>

    <!-- 3. NIBP & Resp Readouts (Yellow & White) -->
    <text x="240" y="295" font-family="monospace" font-size="20" font-weight="bold" fill="#f0b429">120 / 80</text>
    <text x="330" y="290" font-family="sans-serif" font-size="9" fill="#f0b429">NIBP (mmHg)</text>

    <text x="240" y="340" font-family="monospace" font-size="20" font-weight="bold" fill="#ffffff">18</text>
    <text x="270" y="335" font-family="sans-serif" font-size="9" fill="#ffffff">RESP</text>

    <text x="350" y="340" font-family="monospace" font-size="20" font-weight="bold" fill="#ec4899">36.8</text>
    <text x="400" y="335" font-family="sans-serif" font-size="9" fill="#ec4899">TEMP °C</text>

    <!-- Side Connector Cable Panel -->
    <rect x="555" y="210" width="22" height="130" rx="4" fill="#1b2e2b"/>
    <circle cx="566" cy="235" r="5" fill="#22c55e"/>
    <circle cx="566" cy="265" r="5" fill="#38bdf8"/>
    <circle cx="566" cy="295" r="5" fill="#f0b429"/>
    <circle cx="566" cy="325" r="5" fill="#ec4899"/>
  `;
}

function labGraphic(brandName = "LABORATORY", modelLabel = "ANALYZER", isImmunoassay = false) {
  return `
    <!-- Main Benchtop Housing -->
    <rect x="180" y="160" width="440" height="280" rx="18" fill="url(#metalGrad)" stroke="#bcd3cc" stroke-width="2.5"/>
    <rect x="180" y="160" width="440" height="16" fill="#2a9b85" rx="8"/>

    <!-- Left: Automated Robotic Carousel / Cartridge Chamber -->
    <rect x="205" y="195" width="205" height="190" rx="12" fill="#182d29" stroke="#bcd3cc" stroke-width="1.5"/>
    <circle cx="307" cy="285" r="68" fill="none" stroke="#2a9b85" stroke-width="3" stroke-dasharray="12, 8"/>
    <circle cx="307" cy="285" r="45" fill="#0f2422"/>
    <!-- Test Tube Sample Positions -->
    ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
      const rad = (deg * Math.PI) / 180;
      const x = 307 + Math.cos(rad) * 68;
      const y = 285 + Math.sin(rad) * 68;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="#e6f7f2" stroke="#2a9b85" stroke-width="2"/>`;
    }).join("")}
    <!-- Robotic Pipette Arm -->
    <rect x="295" y="205" width="24" height="60" rx="4" fill="#d5e8e3" stroke="#2a9b85"/>
    <polygon points="303,265 311,265 307,280" fill="#2a9b85"/>

    <!-- Right: Operating Color Touchscreen -->
    <rect x="430" y="195" width="170" height="125" rx="8" fill="url(#screenGrad)"/>
    <!-- Calibration Curves & Data -->
    <path d="M 445 285 Q 470 240 500 235 T 570 220" fill="none" stroke="#69cbb2" stroke-width="2.5"/>
    <path d="M 445 295 Q 480 270 520 260 T 570 250" fill="none" stroke="#f0b429" stroke-width="2"/>
    <text x="445" y="215" font-family="monospace" font-size="10" fill="#69cbb2">${modelLabel}</text>
    <text x="445" y="310" font-family="monospace" font-size="10" font-weight="bold" fill="#ffffff">STATUS: READY</text>

    <!-- Built-in Thermal Printer Slot & Paper Out -->
    <rect x="430" y="340" width="170" height="45" rx="6" fill="#1b2e2b"/>
    <rect x="445" y="348" width="140" height="6" fill="#0f2422"/>
    <path d="M 450 354 L 450 375 L 580 375 L 580 354 Z" fill="#ffffff" opacity="0.9"/>
    <line x1="458" y1="362" x2="550" y2="362" stroke="#5c7370" stroke-width="1.5"/>
    <line x1="458" y1="368" x2="520" y2="368" stroke="#5c7370" stroke-width="1.5"/>

    <!-- Status Bar -->
    <circle cx="215" cy="410" r="6" fill="#22c55e"/>
    <text x="230" y="414" font-family="sans-serif" font-size="11" font-weight="600" fill="#2a423d">AUTOMATED WALK-AWAY</text>
  `;
}

// 37 Products Map
const PRODUCTS = [
  {
    file: "canon-aquilion-precision.png",
    brand: "Canon Medical Systems",
    model: "Aquilion Precision",
    sub: "Ultra-High Resolution 0.25mm CT",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, ctGraphic("#2a9b85", "0.25mm UHR CT"), c)
  },
  {
    file: "canon-vantage-galan-3t.png",
    brand: "Canon Medical Systems",
    model: "Vantage Galan 3T",
    sub: "Ultra-Quiet 3.0T High-Field MRI",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, mriGraphic("#2a9b85", "3.0T HIGH-FIELD MRI"), c)
  },
  {
    file: "vantage-15t-mri.png",
    brand: "Canon Medical Systems",
    model: "Vantage 1.5T",
    sub: "High-Field Clinical 1.5T MRI",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, mriGraphic("#2a9b85", "1.5T CLINICAL MRI"), c)
  },
  {
    file: "scenaria-64-ct.png",
    brand: "Fujifilm / Hitachi",
    model: "Scenaria 64",
    sub: "64-Slice Whole Body CT Scanner",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, ctGraphic("#0284c7", "64-SLICE CT"), c)
  },
  {
    file: "neuviz-128-ct.png",
    brand: "Neusoft Medical",
    model: "NeuViz 128",
    sub: "128-Slice Multi-Detector CT",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, ctGraphic("#16a34a", "128-SLICE CT"), c)
  },
  {
    file: "ecoray-hf525-plus.png",
    brand: "EcoRay",
    model: "HF-525 Plus",
    sub: "High Frequency Radiographic X-Ray",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, xrayCarmGraphic(false), c)
  },
  {
    file: "gemss-spinel-3g-c-arm.png",
    brand: "GEMSS Medical",
    model: "Spinel 3G",
    sub: "Mobile Surgical C-Arm System",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, xrayCarmGraphic(true), c)
  },
  {
    file: "esaote-magnifico-open-04t.png",
    brand: "Esaote",
    model: "Magnifico Open 0.4T",
    sub: "Open Dedicated MSK & Spine MRI",
    cat: "RADIOLOGY & IMAGING",
    svg: (b, m, s, c) => baseSvg(b, m, s, mriGraphic("#f59e0b", "OPEN 0.4T MRI", true), c)
  },
  {
    file: "resona-r9.png",
    brand: "Mindray",
    model: "Resona R9",
    sub: "Flagship ZST+ Ultrasound System",
    cat: "ULTRASOUND DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, ultrasoundGraphic(false, "#2a9b85"), c)
  },
  {
    file: "consona-n8.png",
    brand: "Mindray",
    model: "Consona N8",
    sub: "Primary Healthcare Diagnostic Ultrasound",
    cat: "ULTRASOUND DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, ultrasoundGraphic(false, "#0284c7"), c)
  },
  {
    file: "consona-n5.png",
    brand: "Mindray",
    model: "Consona N5",
    sub: "Shared-Service Ultrasound System",
    cat: "ULTRASOUND DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, ultrasoundGraphic(false, "#0284c7"), c)
  },
  {
    file: "hepatus-6.png",
    brand: "Mindray",
    model: "Hepatus 6",
    sub: "Transient Elastography Liver System",
    cat: "ULTRASOUND DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, ultrasoundGraphic(false, "#10b981"), c)
  },
  {
    file: "dp-30.png",
    brand: "Mindray",
    model: "DP-30",
    sub: "Digital Ultrasonic Imaging System",
    cat: "ULTRASOUND DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, ultrasoundGraphic(true, "#2a9b85"), c)
  },
  {
    file: "olympus-evis.png",
    brand: "Olympus",
    model: "EVIS Series",
    sub: "HD Video Endoscopy System Tower",
    cat: "ENDOSCOPY SYSTEMS",
    svg: (b, m, s, c) => baseSvg(b, m, s, endoscopyGraphic(false), c)
  },
  {
    file: "olympus-ebus-system.png",
    brand: "Olympus",
    model: "EBUS System",
    sub: "Endobronchial Ultrasonic Bronchoscope",
    cat: "ENDOSCOPY SYSTEMS",
    svg: (b, m, s, c) => baseSvg(b, m, s, endoscopyGraphic(false), c)
  },
  {
    file: "olympus-diathermy-esg-150.png",
    brand: "Olympus",
    model: "ESG-150",
    sub: "Electrosurgical Generator Unit",
    cat: "ENDOSCOPY SYSTEMS",
    svg: (b, m, s, c) => baseSvg(b, m, s, endoscopyGraphic(true), c)
  },
  {
    file: "benevision-n17.png",
    brand: "Mindray",
    model: "BeneVision N17",
    sub: "17-Inch Multi-Parameter Patient Monitor",
    cat: "CRITICAL CARE & ICU",
    svg: (b, m, s, c) => baseSvg(b, m, s, criticalCareGraphic(false, "N17"), c)
  },
  {
    file: "sv300.png",
    brand: "Mindray",
    model: "SV300",
    sub: "Turbine-Driven Comprehensive ICU Ventilator",
    cat: "CRITICAL CARE & ICU",
    svg: (b, m, s, c) => baseSvg(b, m, s, criticalCareGraphic(true, "SV300"), c)
  },
  {
    file: "unimed-vsa-60.png",
    brand: "Unimed",
    model: "VSA-60",
    sub: "Automated Vital Signs & Chemistry Monitor",
    cat: "CRITICAL CARE & ICU",
    svg: (b, m, s, c) => baseSvg(b, m, s, criticalCareGraphic(false, "VSA-60"), c)
  },
  {
    file: "unimed-u8.png",
    brand: "Unimed",
    model: "U8",
    sub: "8.4-Inch Multi-Parameter Vital Signs Monitor",
    cat: "CRITICAL CARE & ICU",
    svg: (b, m, s, c) => baseSvg(b, m, s, criticalCareGraphic(false, "U8"), c)
  },
  {
    file: "unimed-u8-pro.png",
    brand: "Unimed",
    model: "U8 Pro",
    sub: "Advanced Touchscreen Bedside Monitor",
    cat: "CRITICAL CARE & ICU",
    svg: (b, m, s, c) => baseSvg(b, m, s, criticalCareGraphic(false, "U8 PRO"), c)
  },
  {
    file: "boditech-afias-10.png",
    brand: "Boditech Med",
    model: "AFIAS-10",
    sub: "10-Channel Automated Immunoassay Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Boditech", "AFIAS-10", true), c)
  },
  {
    file: "boditech-afias-6.png",
    brand: "Boditech Med",
    model: "AFIAS-6",
    sub: "6-Channel Automated Immunoassay Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Boditech", "AFIAS-6", true), c)
  },
  {
    file: "alcor-ised-pro.png",
    brand: "Alcor Scientific",
    model: "iSED Pro",
    sub: "Automated Erythrocyte Sedimentation Rate",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Alcor", "iSED PRO", false), c)
  },
  {
    file: "alcor-miniised.png",
    brand: "Alcor Scientific",
    model: "Mini-iSED",
    sub: "Compact Automated ESR Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Alcor", "MINI-iSED", false), c)
  },
  {
    file: "mago-4.png",
    brand: "Eurospital",
    model: "MAGO 4",
    sub: "Automated ELISA & IFA Robotic Processor",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Eurospital", "MAGO 4", true), c)
  },
  {
    file: "unimed-uh580.png",
    brand: "Unimed",
    model: "UH-580",
    sub: "5-Part Laser Differential Hematology",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "UH-580 5-PART", false), c)
  },
  {
    file: "unimed-uh560.png",
    brand: "Unimed",
    model: "UH-560",
    sub: "3-Part Differential Hematology Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "UH-560 3-PART", false), c)
  },
  {
    file: "unimed-ah600.png",
    brand: "Unimed",
    model: "AH-600",
    sub: "Automated Hematology Flow System",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "AH-600", false), c)
  },
  {
    file: "unimed-cee-5.png",
    brand: "Unimed",
    model: "CEE-5",
    sub: "Automated Blood Coagulation Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "CEE-5 COAG", false), c)
  },
  {
    file: "unimed-ubg-60.png",
    brand: "Unimed",
    model: "UBG-60",
    sub: "Automated Blood Gas & Electrolyte Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "UBG-60 ABG", false), c)
  },
  {
    file: "unimed-fa-60.png",
    brand: "Unimed",
    model: "FA-60",
    sub: "Automated Fecal Morphology Analysis",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "FA-60 FECAL", false), c)
  },
  {
    file: "unimed-uri-300.png",
    brand: "Unimed",
    model: "URI-300",
    sub: "Urine Formed Elements Microscopy Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "URI-300 SEDIMENT", false), c)
  },
  {
    file: "unimed-u300.png",
    brand: "Unimed",
    model: "U-300",
    sub: "High-Throughput Urine Chemistry Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "U-300 URINE", false), c)
  },
  {
    file: "unimed-u200.png",
    brand: "Unimed",
    model: "U-200",
    sub: "Medium-Throughput Urine Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "U-200 URINE", false), c)
  },
  {
    file: "unimed-u180.png",
    brand: "Unimed",
    model: "U-180",
    sub: "Semi-Automated Urine Test Strip Reader",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "U-180 READER", false), c)
  },
  {
    file: "unimed-labas-m.png",
    brand: "Unimed",
    model: "Labas-M",
    sub: "Semi-Automated Clinical Chemistry Analyzer",
    cat: "LABORATORY DIAGNOSTICS",
    svg: (b, m, s, c) => baseSvg(b, m, s, labGraphic("Unimed", "LABAS-M CHEM", false), c)
  }
];

console.log(`Starting generation of ${PRODUCTS.length} equipment images...`);

for (const p of PRODUCTS) {
  const filePath = path.join(OUT_DIR, p.file);
  const svgStr = p.svg(p.brand, p.model, p.sub, p.cat);
  await sharp(Buffer.from(svgStr)).png().toFile(filePath);
  console.log(`Saved: ${filePath}`);
}

console.log("All 37 equipment images generated successfully!");
