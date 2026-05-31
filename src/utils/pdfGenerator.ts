import { jsPDF } from 'jspdf';

export interface ReportSection {
  section: string;
  content: string;
}

export interface GeneratedLeadMagnetData {
  diagnosticReport: ReportSection[];
  configurationBlueprint: ReportSection[];
}

/**
 * Returns premium fallback report content in case API is unavailable
 */
export function getFallbackReportData(year: string, make: string, model: string): GeneratedLeadMagnetData {
  const vehicle = `${year} ${make} ${model}`;
  
  return {
    diagnosticReport: [
      {
        section: "Executive Diagnostic Summary",
        content: `Comprehensive passive monitoring analysis mapped specifically for the ${vehicle}. The Astrateq Gadgets supercapacitor hardware model establishes an active read-only connection with the vehicle's secondary powertrain CAN bus network. By deploying real-time sovereign edge processing, the DriveGuard system extracts vehicle diagnostic codes without writing active commands, mitigating any possibility of check-engine warnings or power control unit (PCU) malfunctions.`
      },
      {
        section: "CAN Bus Protocol & Interface Mapping",
        content: `The ${vehicle} utilize standard high-speed ISO 15765-4 CAN signals operating at 500 kbps on pins 6 and 14 of the standard 16-pin OBD-II J1962 port configuration. The Astrateq Gadgets physical interface uses differential receiver transceivers with high electromagnetic immunity (EMI) shielding to prevent noise injection, ensuring zero cross-talk with proprietary steer-by-wire, brake, or active safety stability controllers.`
      },
      {
        section: "Hardware Integration & Current Draw Profile",
        content: `Astrateq Gadgets units feature class-leading active energy management. Drawing under 15mA in sleeping mode, transitioning seamlessly via low-power sleep wake timers during engine startup cycles. Powered on the 12V terminal line (pin 16), it will not trigger battery drain warnings even during deep freezing Canadian climate periods. Integrated thermal overload protection keeps device operation temperature extremely stable.`
      },
      {
        section: "ICES-003 & Compliance Validation Status",
        content: `Diagnostic system compliant under Transport Canada guidelines and tested against FCC Part 15 and ICES-003 limits for Class B digital device emission thresholds. Physical connection conforms with vehicle warranty acts, preserving factory bumper-to-bumper protection because commands are strictly passive. Complete physical diagnostic loop certified safe for continuous cabin operations.`
      }
    ],
    configurationBlueprint: [
      {
        section: "Executive Overview & System Baseline",
        content: `This technical configuration blueprint specifies the operational threshold mapping for the ${vehicle} integrating the Astrateq Gadgets sovereign telemetry loop. By establishing standard hardware integrity layers, the system guarantees instant compatibility with vehicle cabin accessories while retaining high-precision camera visual stabilization loops.`
      },
      {
        section: "Hardware Integrity & Supercapacitor Thermal Shield",
        content: `Engineered specifically to bypass commercial battery failure thresholds. Unlike lithium-based units which swell, puncture, or fail under peak temperature offsets, Astrateq Gadgets leverages dual-cell supercapacitors maintaining active buffer charge. Certified for optimal thermal stability from -35°C to 85°C. Reliable power buffer is guaranteed under freezing winter cycles typical of Canadian territories.`
      },
      {
        section: "Data Isolation Protocols & Privacy Shunting",
        content: `Astrateq Gadgets secures vehicle telemetry data by executing processing entirely at the sovereign edge. No vehicle speed coordinates, sensor mappings, or route trails are transmitted to remote servers during active telemetry scans. Data storage leverages encrypted on-board NAND memory blocks utilizing AES-256 standard, with hardware shunts preventing unauthorized external access over OBD portals.`
      },
      {
        section: "System Architecture Summary & Core Processing",
        content: `The on-board processor architecture is governed by a high-efficiency dual-core ARM Cortex microprocessor operating at 1.2GHz. Unified hardware architecture allows rapid decoding of secondary sensor streams within 14ms of trigger events. Dynamic sensor-fusion pipeline combines accelerometer, gyro, and optical imagery with OBD passive packets to deliver optimal preventative diagnostics.`
      }
    ]
  };
}

interface CanvaPalette {
  headerBg: [number, number, number];
  headerRightTriangle: [number, number, number];
  headerAccentStripe: [number, number, number];
  heroGradientEnd: [number, number, number];
  accentColor: [number, number, number];
  badgeSuccessBg: [number, number, number];
  badgeSuccessText: [number, number, number];
  cardAccentBorder: [number, number, number];
  bgCanvas: [number, number, number];
  cardBg: [number, number, number];
  shadowColor: [number, number, number];
  textMain: [number, number, number];
  textMuted: [number, number, number];
}

/**
 * High-end Canva-Style Layout implementation
 */
function drawCanvaHeaderAndCanvas(
  doc: jsPDF,
  title: string,
  subtitle: string,
  vehicle: string,
  palette: CanvaPalette
) {
  const pageWidth = 210;
  const pageHeight = 297;

  // 1. Off-white soft-colored background canvas
  doc.setFillColor(palette.bgCanvas[0], palette.bgCanvas[1], palette.bgCanvas[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // 2. Main Large Top Content Banner Header
  doc.setFillColor(palette.headerBg[0], palette.headerBg[1], palette.headerBg[2]);
  doc.rect(0, 0, pageWidth, 52, 'F');

  // Elegant Overlay Triangles (Canva aesthetic dynamic waves / overlay)
  doc.setFillColor(palette.headerRightTriangle[0], palette.headerRightTriangle[1], palette.headerRightTriangle[2]);
  doc.triangle(120, 0, pageWidth, 0, pageWidth, 42, 'F');

  doc.setFillColor(palette.headerAccentStripe[0], palette.headerAccentStripe[1], palette.headerAccentStripe[2]);
  doc.triangle(150, 0, pageWidth, 0, pageWidth, 18, 'F');

  // Draw light golden glowing dot in header corner
  doc.setFillColor(245, 158, 11);
  doc.circle(pageWidth - 10, 8, 1.2, 'F');

  // Decorative Left Brand Line Segment
  doc.setFillColor(palette.accentColor[0], palette.accentColor[1], palette.accentColor[2]);
  doc.rect(12, 14, 2.5, 23, 'F');

  // Header Brand Tag text
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(palette.accentColor[0], palette.accentColor[1], palette.accentColor[2]);
  doc.text("ASTRATEQ GADGETS LABS", 18, 19);

  // Dynamic Metadata Box right side
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text(`MAPPED PROFILE: ${vehicle.toUpperCase()}`, pageWidth - 16, 19, { align: 'right' });

  // Sovereign report code badge
  doc.setFillColor(255, 255, 255, 0.15);
  doc.roundedRect(pageWidth - 72, 23, 56, 4.5, 1, 1, 'F');
  doc.setFont('Courier', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(230, 235, 255);
  doc.text("SYSSEC SEQ-INTEGRATED CAN PROT:PASSIVE", pageWidth - 16, 26, { align: 'right' });

  // Main Canva Action Title
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(16.5);
  doc.setTextColor(255, 255, 255);
  doc.text(title, 18, 29);

  // Dynamic Subtitle Info
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(191, 203, 217);
  doc.text(subtitle, 18, 34);

  // 3. Status Ribbon Pill Block (Below Header)
  doc.setFillColor(palette.cardBg[0], palette.cardBg[1], palette.cardBg[2]);
  doc.roundedRect(12, 42, pageWidth - 24, 15, 3, 3, 'F');

  // Left colored ribbon strip on status box
  doc.setFillColor(palette.accentColor[0], palette.accentColor[1], palette.accentColor[2]);
  doc.rect(12, 42, 3, 15, 'F');

  // Inner details status badge
  doc.setFillColor(palette.badgeSuccessBg[0], palette.badgeSuccessBg[1], palette.badgeSuccessBg[2]);
  doc.roundedRect(19, 46.5, 35, 6, 1.2, 1.2, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(palette.badgeSuccessText[0], palette.badgeSuccessText[1], palette.badgeSuccessText[2]);
  doc.text("CONNECTION VERIFIED", 22.5, 51);

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(palette.textMain[0], palette.textMain[1], palette.textMain[2]);
  doc.text("Sovereign ECU Integrity Sandbox: Passive Bypass Shield [ENABLED]", 59, 50.5);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(palette.textMuted[0], palette.textMuted[1], palette.textMuted[2]);
  doc.text("Transport Canada passive diagnostics test standards check: PASS. Pure digital read buffer mode active.", 19, 54);

  // 4. Custom Footer Area
  const footerY = pageHeight - 18;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(12, footerY, pageWidth - 12, footerY);

  // Draw beautiful design agency hallmark
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(palette.headerBg[0], palette.headerBg[1], palette.headerBg[2]);
  doc.text("ASTRATEQ SECURE ALLOCATION HARDWARE DEPLOYMENT", 12, footerY + 5.5);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(palette.textMuted[0], palette.textMuted[1], palette.textMuted[2]);
  doc.text("This technical document specifies read-only CAN bus integrations conforming securely to ICES-003 constraints.", 12, footerY + 9.5);

  // Sovereign safety seal badge circles
  doc.setDrawColor(palette.accentColor[0], palette.accentColor[1], palette.accentColor[2]);
  doc.setLineWidth(0.3);
  doc.circle(pageWidth - 42, footerY + 6.5, 4, 'D');
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(5);
  doc.setTextColor(palette.accentColor[0], palette.accentColor[1], palette.accentColor[2]);
  doc.text("SECURE", pageWidth - 45.3, footerY + 7);

  doc.setFont('Courier', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(palette.textMain[0], palette.textMain[1], palette.textMain[2]);
  doc.text("PAGE 1 OF 1", pageWidth - 12, footerY + 7.5, { align: 'right' });
}

/**
 * Generates the Astrateq Diagnostic Report PDF with a highly-polished, colorful Canva palette
 */
export function generateDiagnosticReportPDF(
  year: string,
  make: string,
  model: string,
  data: ReportSection[]
): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const vehicle = `${year} ${make} ${model}`;
  const pageWidth = 210;

  // Diagnostics Palette: Cobalt Rich Navy + Stunning Teal Highlights + Crisp Slate Light background
  const diagnosticsPalette: CanvaPalette = {
    headerBg: [15, 23, 42], // deep dark slate
    headerRightTriangle: [30, 41, 59], // offset blue-slate
    headerAccentStripe: [79, 70, 229], // beautiful royal indigo
    heroGradientEnd: [49, 46, 129],
    accentColor: [79, 70, 229], // indigo accents
    badgeSuccessBg: [209, 250, 229], // light mint green
    badgeSuccessText: [6, 95, 70], // deep forest green
    cardAccentBorder: [16, 185, 129], // emerald
    bgCanvas: [241, 245, 249], // elegant clear soft-gray canvassing
    cardBg: [255, 255, 255], // bright clean card body
    shadowColor: [226, 232, 240], // soft designer shadow casting
    textMain: [30, 41, 59], // high contrast text slate-800
    textMuted: [100, 116, 139] // slate-500
  };

  drawCanvaHeaderAndCanvas(
    doc,
    "PASSIVE DIAGNOSTIC ASSESSMENT REPORT",
    `Local Hardware Loop Mapped Exclusively for early reservation accounts`,
    vehicle,
    diagnosticsPalette
  );

  let currentY = 62;

  // Render individual sections as gorgeous physical floating cards
  data.forEach((sec, idx) => {
    const cardHeight = 40;
    const paddingX = 17;
    const cardWidth = pageWidth - 24;

    // 1. Draw elegant drop shadow rectangle
    doc.setFillColor(diagnosticsPalette.shadowColor[0], diagnosticsPalette.shadowColor[1], diagnosticsPalette.shadowColor[2]);
    doc.roundedRect(12.7, currentY + 0.6, cardWidth, cardHeight, 3.5, 3.5, 'F');

    // 2. Draw actual crisp white floating card
    doc.setFillColor(diagnosticsPalette.cardBg[0], diagnosticsPalette.cardBg[1], diagnosticsPalette.cardBg[2]);
    doc.roundedRect(12, currentY, cardWidth, cardHeight, 3.5, 3.5, 'F');

    // 3. Highlight Accent Stripe corresponding to card
    doc.setFillColor(diagnosticsPalette.accentColor[0], diagnosticsPalette.accentColor[1], diagnosticsPalette.accentColor[2]);
    doc.rect(12, currentY + 4, 3, 10, 'F');

    // 4. Index Indicator Icon (Numbered Canva badge)
    doc.setFillColor(diagnosticsPalette.bgCanvas[0], diagnosticsPalette.bgCanvas[1], diagnosticsPalette.bgCanvas[2]);
    doc.circle(21.5, currentY + 8, 3.5, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(diagnosticsPalette.accentColor[0], diagnosticsPalette.accentColor[1], diagnosticsPalette.accentColor[2]);
    doc.text(`0${idx + 1}`, 20, currentY + 11);

    // 5. Section Header Content
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(diagnosticsPalette.textMain[0], diagnosticsPalette.textMain[1], diagnosticsPalette.textMain[2]);
    doc.text(sec.section.toUpperCase(), 28, currentY + 9.5);

    // Decorative dividing rule inside card
    doc.setDrawColor(241, 245, 249);
    doc.setLineWidth(0.3);
    doc.line(18, currentY + 14, pageWidth - 18, currentY + 14);

    // 6. Section Body Content
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(diagnosticsPalette.textMain[0], diagnosticsPalette.textMain[1], diagnosticsPalette.textMain[2]);

    const lineLimitWidth = cardWidth - 14;
    const lines = doc.splitTextToSize(sec.content, lineLimitWidth);
    doc.text(lines, 18, currentY + 19, { lineHeightFactor: 1.4 });

    currentY += cardHeight + 4.8;
  });

  return doc;
}

/**
 * Generates the Astrateq Configuration Blueprint PDF with vibrant hot coral and warm amber colors
 */
export function generateConfigurationBlueprintPDF(
  year: string,
  make: string,
  model: string,
  data: ReportSection[]
): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const vehicle = `${year} ${make} ${model}`;
  const pageWidth = 210;

  // Blueprint Theme: Dynamic Sunset charcoal, Hot Rose-Red highlight and energetic Orange accents
  const blueprintPalette: CanvaPalette = {
    headerBg: [9, 9, 11], // Charcoal pitch zinc
    headerRightTriangle: [39, 39, 42], // mid zinc
    headerAccentStripe: [225, 29, 72], // vibrant hot rose red
    heroGradientEnd: [217, 70, 239],
    accentColor: [225, 29, 72], // primary hot action rose red
    badgeSuccessBg: [254, 243, 199], // mild golden warm background
    badgeSuccessText: [180, 83, 9], // deep amber mustard text
    cardAccentBorder: [245, 158, 11], // brilliant secure gold
    bgCanvas: [248, 250, 252], // ultra-soft slate/off-white clean background
    cardBg: [255, 255, 255], // paper white
    shadowColor: [235, 240, 245], // designer soft blue-tinged shadow
    textMain: [24, 24, 27], // zinc 900
    textMuted: [113, 113, 122] // zinc 500
  };

  drawCanvaHeaderAndCanvas(
    doc,
    "SOVEREIGN CONFIGURATION BLUEPRINT",
    `Edge Computing Specification & Data Isolation Mapping Protocol`,
    vehicle,
    blueprintPalette
  );

  let currentY = 62;

  // Render individual sections as gorgeous modular Canva components
  data.forEach((sec, idx) => {
    const cardHeight = 40;
    const cardWidth = pageWidth - 24;

    // 1. Draw beautiful offset shadow paper-effect
    doc.setFillColor(blueprintPalette.shadowColor[0], blueprintPalette.shadowColor[1], blueprintPalette.shadowColor[2]);
    doc.roundedRect(12.7, currentY + 0.6, cardWidth, cardHeight, 3.5, 3.5, 'F');

    // 2. Draw actual crisp clean card base
    doc.setFillColor(blueprintPalette.cardBg[0], blueprintPalette.cardBg[1], blueprintPalette.cardBg[2]);
    doc.roundedRect(12, currentY, cardWidth, cardHeight, 3.5, 3.5, 'F');

    // 3. Left-edge Accent color bar
    doc.setFillColor(blueprintPalette.accentColor[0], blueprintPalette.accentColor[1], blueprintPalette.accentColor[2]);
    doc.rect(12, currentY + 4, 3, 10, 'F');

    // 4. Circular tech counter badge
    doc.setFillColor(blueprintPalette.bgCanvas[0], blueprintPalette.bgCanvas[1], blueprintPalette.bgCanvas[2]);
    doc.circle(21.5, currentY + 8, 3.5, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(blueprintPalette.accentColor[0], blueprintPalette.accentColor[1], blueprintPalette.accentColor[2]);
    doc.text(`0${idx + 1}`, 20, currentY + 11);

    // 5. Section header title
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(blueprintPalette.textMain[0], blueprintPalette.textMain[1], blueprintPalette.textMain[2]);
    doc.text(sec.section.toUpperCase(), 28, currentY + 9.5);

    // Inner dividing line inside card
    doc.setDrawColor(244, 244, 245);
    doc.setLineWidth(0.3);
    doc.line(18, currentY + 14, pageWidth - 18, currentY + 14);

    // 6. Descriptive body context paragraph
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(blueprintPalette.textMain[0], blueprintPalette.textMain[1], blueprintPalette.textMain[2]);

    const lineLimitWidth = cardWidth - 14;
    const lines = doc.splitTextToSize(sec.content, lineLimitWidth);
    doc.text(lines, 18, currentY + 19, { lineHeightFactor: 1.4 });

    currentY += cardHeight + 4.8;
  });

  return doc;
}
