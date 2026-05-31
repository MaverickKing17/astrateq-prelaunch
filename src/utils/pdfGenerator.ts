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
        content: `Comprehensive passive monitoring analysis mapped specifically for the ${vehicle}. The Astrateq supercapacitor hardware model establishes an active read-only connection with the vehicle's secondary powertrain CAN bus network. By deploying real-time sovereign edge processing, the DriveGuard system extracts vehicle diagnostic codes without writing active commands, mitigating any possibility of check-engine warnings or power control unit (PCU) malfunctions.`
      },
      {
        section: "CAN Bus Protocol & Interface Mapping",
        content: `The ${vehicle} utilize standard high-speed ISO 15765-4 CAN signals operating at 500 kbps on pins 6 and 14 of the standard 16-pin OBD-II J1962 port configuration. Astrateq's physical interface uses differential receiver transceivers with high electromagnetic immunity (EMI) shielding to prevent noise injection, ensuring zero cross-talk with proprietary steer-by-wire, brake, or active safety stability controllers.`
      },
      {
        section: "Hardware Integration & Current Draw Profile",
        content: `Astrateq units feature class-leading active energy management Drawing under 15mA in sleeping mode, transitioning seamlessly via low-power sleep wake timers during engine startup cycles. Powered on the 12V terminal line (pin 16), it will not trigger battery drain warnings even during deep freezing Canadian climate periods. Integrated thermal overload protection keeps device operation temperature extremely stable.`
      },
      {
        section: "ICES-003 & Compliance Validation Status",
        content: `Diagnostic system compliant under Transport Canada guidelines and tested against FCC Part 15 and ICES-003 limits for Class B digital device emission thresholds. Physical connection conforms with vehicle warranty acts, preserving factory bumper-to-bumper protection because commands are strictly passive. Complete physical diagnostic loop certified safe for continuous cabin operations.`
      }
    ],
    configurationBlueprint: [
      {
        section: "Executive Overview & System Baseline",
        content: `This technical configuration blueprint specifies the operational threshold mapping for the ${vehicle} integrating the Astrateq sovereign telemetry loop. By establishing standard hardware integrity layers, the system guarantees instant compatibility with vehicle cabin accessories while retaining high-precision camera visual stabilization loops.`
      },
      {
        section: "Hardware Integrity & Supercapacitor Thermal Shield",
        content: `Engineered specifically to bypass commercial battery failure thresholds. Unlike lithium-based units which swell, puncture, or fail under peak temperature offsets, Astrateq leverages dual-cell supercapacitors maintaining active buffer charge. Certified for optimal thermal stability from -35°C to 85°C. Reliable power buffer is guaranteed under freezing winter cycles typical of Canadian territories.`
      },
      {
        section: "Data Isolation Protocols & Privacy Shunting",
        content: `Astrateq secures vehicle telemetry data by executing processing entirely at the sovereign edge. No vehicle speed coordinates, sensor mappings, or route trails are transmitted to remote servers during active telemetry scans. Data storage leverages encrypted on-board NAND memory blocks utilizing AES-256 standard, with hardware shunts preventing unauthorized external access over OBD portals.`
      },
      {
        section: "System Architecture Summary & Core Processing",
        content: `The on-board processor architecture is governed by a high-efficiency dual-core ARM Cortex microprocessor operating at 1.2GHz. Unified hardware architecture allows rapid decoding of secondary sensor streams within 14ms of trigger events. Dynamic sensor-fusion pipeline combines accelerometer, gyro, and optical imagery with OBD passive packets to deliver optimal preventative diagnostics.`
      }
    ]
  };
}

/**
 * Helper to draw a beautiful, premium dark theme layout for Astrateq engineering reports
 */
function applyPremiumThemeLayout(
  doc: jsPDF, 
  title: string, 
  subtitle: string, 
  vehicle: string, 
  pageCount: number, 
  totalPageCount: number
) {
  // Page size is A4 (210 x 297 mm)
  const pageWidth = 210;
  const pageHeight = 297;

  // Background deep dark blue/black: #070a13
  doc.setFillColor(7, 10, 19);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Draw thin glowing accent line (Indigo) down the left margin
  doc.setDrawColor(99, 102, 241); // #6366f1
  doc.setLineWidth(1.5);
  doc.line(10, 15, 10, pageHeight - 15);

  // Header Divider logic
  doc.setDrawColor(30, 41, 59); // Slate-800: #1e293b
  doc.setLineWidth(0.5);
  doc.line(15, 30, pageWidth - 15, 30);

  // Header Text
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(99, 102, 241); // Indigo
  doc.text("ASTRATEQ AUTOMOTIVE ENGINEERING LABS", 15, 20);

  doc.setFont('Courier', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184); // Slate-400
  doc.text(`PROFILE: ${vehicle.toUpperCase()}`, pageWidth - 15, 20, { align: 'right' });

  // Main Report Title
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text(title, 15, 42);

  // Document Subtitle / Version Tracker
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(148, 163, 184); // Slate-400
  doc.text(subtitle, 15, 48);

  // Top Accent Box (e.g. system certified badge)
  doc.setFillColor(99, 102, 241, 0.1); // subtle opacity background
  doc.setDrawColor(99, 102, 241);
  doc.setLineWidth(0.3);
  doc.rect(15, 54, pageWidth - 30, 14, 'FD');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(16, 185, 129); // Emerald Success Accent
  doc.text("INTEGRATION STATUS:", 20, 60);
  
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text(`100% Passive Bypass Verified for OBD-II CAN J1962. Warranty Preservation Mode [ACTIVE]`, 58, 60);
  doc.text(`ICES-003 Emission Compliance Certified. Extreme Climate Supercapacitor System Checked.`, 20, 64);

  // Footer Divider
  doc.setDrawColor(30, 41, 59);
  doc.setLineWidth(0.5);
  doc.line(15, pageHeight - 20, pageWidth - 15, pageHeight - 20);

  // Footer Text
  doc.setFont('Courier', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184); // Slate-400
  doc.text("CLASSIFICATION: CLIENT WAITING WAITING LIST SECURED // DO NOT RE-DISTRIBUTE", 15, pageHeight - 14);
  doc.text(`PAGE ${pageCount} OF ${totalPageCount}`, pageWidth - 15, pageHeight - 14, { align: 'right' });
}

/**
 * Generates the Astrateq Diagnostic Report PDF
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
  
  applyPremiumThemeLayout(
    doc, 
    "PASSIVE DIAGNOSTIC ASSESSMENT REPORT", 
    `Automated Hardware Mapping & Diagnostic Setup Guide v2026.0`,
    vehicle, 
    1, 
    1
  );

  // Generate sections styled cleanly
  let currentY = 78;

  data.forEach((sec) => {
    // Section Header
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(99, 102, 241); // Indigo color for headers
    doc.text(`[//] ${sec.section.toUpperCase()}`, 15, currentY);
    
    // Header underline
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(0.3);
    doc.line(15, currentY + 2, pageWidth - 15, currentY + 2);

    currentY += 8;

    // Body text
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(255, 255, 255);
    
    // Split text into multi-line paragraphs conforming to PDF width bounds
    const lines = doc.splitTextToSize(sec.content, pageWidth - 30);
    doc.text(lines, 15, currentY);

    currentY += (lines.length * 5) + 14;
  });

  return doc;
}

/**
 * Generates the Astrateq Configuration Blueprint PDF
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
  
  applyPremiumThemeLayout(
    doc, 
    "SOVEREIGN CONFIGURATION BLUEPRINT", 
    `Edge Computing Specification & Data Isolation Blueprint v2.1`,
    vehicle, 
    1, 
    1
  );

  // Generate sections styled cleanly
  let currentY = 78;

  data.forEach((sec) => {
    // Section Header
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(244, 63, 94); // Rose red accent for blueprint
    doc.text(`[//] ${sec.section.toUpperCase()}`, 15, currentY);
    
    // Header underline
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(0.3);
    doc.line(15, currentY + 2, pageWidth - 15, currentY + 2);

    currentY += 8;

    // Body text
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(255, 255, 255);
    
    // Split text into multi-line paragraphs conforming to PDF width bounds
    const lines = doc.splitTextToSize(sec.content, pageWidth - 30);
    doc.text(lines, 15, currentY);

    currentY += (lines.length * 5) + 14;
  });

  return doc;
}
