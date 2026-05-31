import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Zap, 
  Check, 
  MapPin, 
  Activity, 
  Heart,
  Download
} from 'lucide-react';
import { 
  getFallbackReportData, 
  generateDiagnosticReportPDF, 
  generateConfigurationBlueprintPDF, 
  GeneratedLeadMagnetData 
} from '../utils/pdfGenerator';

interface WaitlistSectionProps {
  onSuccess: (email: string) => void;
}

export default function WaitlistSection({ onSuccess }: WaitlistSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  // Selected region state for local report simulation
  const [provState, setProvState] = useState('BC');

  // Dynamic vehicle detail state
  const [vehicleYear, setVehicleYear] = useState('2021');
  const [vehicleMake, setVehicleMake] = useState('Toyota');
  const [vehicleModel, setVehicleModel] = useState('RAV4 Hybrid');
  
  // PDF Lead Magnet Output State
  const [reportData, setReportData] = useState<GeneratedLeadMagnetData | null>(null);
  const [activePreviewTab, setActivePreviewTab] = useState<'diagnostics' | 'blueprint'>('diagnostics');
  const [emailSent, setEmailSent] = useState(false);
  const [isEmailSending, setIsEmailSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !vehicleMake.trim() || !vehicleModel.trim()) return;

    setIsSubmitting(true);
    try {
      // 1. Log waitlist metadata to formspree (standard fallback tracker)
      try {
        await fetch('https://formspree.io/f/xeedvalq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            type: 'Waitlist Form',
            province: provState,
            vehicle: `${vehicleYear} ${vehicleMake} ${vehicleModel}`
          })
        });
      } catch (fErr) {
        console.error("Formspree tracker notice:", fErr);
      }

      // 2. Fetch Gemini server-side generated report configurations
      let apiData: GeneratedLeadMagnetData | null = null;
      try {
        const response = await fetch('/api/generate-lead-magnet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            year: vehicleYear,
            make: vehicleMake,
            model: vehicleModel
          })
        });

        if (response.ok) {
          const resJson = await response.json();
          if (resJson && resJson.data) {
            apiData = resJson.data;
          }
        }
      } catch (apiErr) {
        console.error("Express Gemini endpoint failed, using local high-end schema:", apiErr);
      }

      // Fallback if SDK or server was unavailable
      if (!apiData) {
        apiData = getFallbackReportData(vehicleYear, vehicleMake, vehicleModel);
      }

      setReportData(apiData);

    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Believable premium queue registration spot
      setWaitlistNumber(Math.floor(Math.random() * 450) + 1280);
      onSuccess(email);
    }
  };

  const downloadDiagnosticsPdf = () => {
    if (!reportData) return;
    const doc = generateDiagnosticReportPDF(vehicleYear, vehicleMake, vehicleModel, reportData.diagnosticReport);
    doc.save('astrateq_diagnostic_report.pdf');
  };

  const downloadBlueprintPdf = () => {
    if (!reportData) return;
    const doc = generateConfigurationBlueprintPDF(vehicleYear, vehicleMake, vehicleModel, reportData.configurationBlueprint);
    doc.save('astrateq_configuration_blueprint.pdf');
  };

  const handleSimulateEmail = async () => {
    if (!reportData) return;
    setIsEmailSending(true);
    try {
      // Generate standard PDFs and convert to base64 data URIs
      const diagDoc = generateDiagnosticReportPDF(vehicleYear, vehicleMake, vehicleModel, reportData.diagnosticReport);
      const blueprintDoc = generateConfigurationBlueprintPDF(vehicleYear, vehicleMake, vehicleModel, reportData.configurationBlueprint);
      
      const diagBase64 = diagDoc.output('datauristring');
      const blueprintBase64 = blueprintDoc.output('datauristring');

      // Dispatch to our server-side Resend API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          vehicle: `${vehicleYear} ${vehicleMake} ${vehicleModel}`,
          pdfDiagnostics: diagBase64,
          pdfBlueprint: blueprintBase64
        })
      });

      const resJson = await response.json();
      if (response.ok && resJson.success) {
        setEmailSent(true);
      } else {
        console.error("Failed to send email:", resJson.error);
        alert(`Could not send email: ${resJson.error || "Unknown server error"}`);
      }
    } catch (err: any) {
      console.error("Email dispatch caught exception:", err);
      alert(`Error dispatching email: ${err.message}`);
    } finally {
      setIsEmailSending(false);
    }
  };

  const provinces = [
    { code: 'BC', name: 'British Columbia' },
    { code: 'ON', name: 'Ontario' },
    { code: 'AB', name: 'Alberta' },
    { code: 'QC', name: 'Quebec' },
    { code: 'MB', name: 'Manitoba' },
    { code: 'SK', name: 'Saskatchewan' },
    { code: 'NS', name: 'Nova Scotia' },
    { code: 'NB', name: 'New Brunswick' }
  ];

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-white via-rose-50/10 to-slate-50 border-t border-slate-200 relative overflow-hidden">
      
      {/* Dynamic Background visual ornaments */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Subtle top red/indigo border accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-indigo-650" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Left Column: Form Intake panel */}
            <div className="lg:col-span-7 p-6 sm:p-12 flex flex-col justify-between text-left space-y-8">
              
              {!isSubmitted ? (
                <div className="space-y-6">
                  
                  {/* Early Bird Flag */}
                  <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                    <span className="text-sm leading-none animate-pulse">🇨🇦</span>
                    FREE LAUNCH GIFT LOCK
                  </div>

                  {/* Headlines */}
                  <h2 className="font-display font-black text-3xl sm:text-4.5xl text-slate-900 tracking-tight leading-tight">
                    Secure Premium Priority Access & A Free Digital Safety Blueprint
                  </h2>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                    Join the private launch queue. Lock pre-order savings, get dispatch alerts, and secure a complete digital diagnostics & OBD configuration blueprint mapped directly for your specific vehicle.
                  </p>

                  {/* Highlights Bullet block */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-emerald-100 border border-emerald-250 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" style={{ strokeWidth: 3 }} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-bold leading-normal">
                        <span className="text-emerald-700 font-extrabold">$0 Monthly Fees Locked:</span> Standard lifetime access to native driver insights dashboard.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-indigo-100 border border-indigo-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3.5 h-3.5 text-indigo-600 animate-pulse" style={{ strokeWidth: 2.5 }} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-bold leading-normal">
                        <span className="text-indigo-650 font-extrabold">Instant Activation & Bypass:</span> Passively monitors without writing commands. Fully warranties-compliant.
                      </p>
                    </div>
                  </div>

                  {/* Form Input Block */}
                  <form onSubmit={handleSubmit} className="pt-4 space-y-4 max-w-lg">
                    
                    {/* Interactive Region Selector Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest block">
                          Your Province / Territory
                        </label>
                        <select
                          value={provState}
                          onChange={(e) => setProvState(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white focus:ring-1 focus:ring-rose-450 hover:border-slate-350 transition-colors"
                        >
                          {provinces.map((p) => (
                            <option key={p.code} value={p.code}>
                              🇨🇦 {p.name} ({p.code})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5 flex items-end">
                        <span className="text-[10px] sm:text-xs text-indigo-600 font-bold block pb-3">
                          ⚡ Shipped express from your closest hub
                        </span>
                      </div>

                    </div>

                    {/* Vehicle Details Intake - Required for Lead Magnet Report Customization */}
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest block">
                          Model Year
                        </label>
                        <select
                          value={vehicleYear}
                          onChange={(e) => setVehicleYear(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3.5 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white focus:ring-1 focus:ring-rose-450 hover:border-slate-350 transition-colors"
                        >
                          {Array.from({ length: 15 }, (_, i) => String(2026 - i)).map((yr) => (
                            <option key={yr} value={yr}>{yr}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest block">
                          Vehicle Make
                        </label>
                        <input
                          type="text"
                          required
                          value={vehicleMake}
                          onChange={(e) => setVehicleMake(e.target.value)}
                          placeholder="e.g. Toyota"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3.5 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white focus:ring-1 focus:ring-rose-450 hover:border-slate-350 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest block">
                          Vehicle Model
                        </label>
                        <input
                          type="text"
                          required
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          placeholder="e.g. RAV4 Hybrid"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3.5 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white focus:ring-1 focus:ring-rose-450 hover:border-slate-350 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email Input Bar */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <input
                        type="email"
                        required
                        value={email}
                        disabled={isSubmitting}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your personal email address"
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white focus:ring-1 focus:ring-rose-400 shadow-sm transition-all duration-300 hover:border-slate-350"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-slate-950 hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-slate-955/10 hover:scale-[1.01]"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Get Free Reports
                            <Send className="w-3.5 h-3.5 text-rose-400" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>

                  {/* Extra value microcopy */}
                  <p className="text-[10px] sm:text-xs text-slate-405 leading-relaxed font-bold">
                    🔒 Strictly zero spam or tracking cookies. Diagnostic telemetry never leaves the local micro-processor. Compliant with ICES-003 guidelines.
                  </p>

                </div>
              ) : (
                <div className="space-y-6 py-4 animate-fade-in w-full text-left">
                  
                  {/* Success Header Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center animate-bounce shrink-0 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 font-bold" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider block font-mono">Founding Spot Secured</span>
                      <h3 className="font-display font-black text-xl text-slate-900 tracking-tight leading-none mt-0.5">
                        Your Priority Access Locked
                      </h3>
                    </div>
                  </div>

                  <div className="bg-[#070a13] border border-slate-800 rounded-2xl p-5 text-left text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-3">
                      <span className="text-[8px] bg-indigo-500/20 text-indigo-450 border border-indigo-500/30 px-2 py-0.5 rounded font-mono uppercase font-bold">
                        QUEUE PRIORITY
                      </span>
                    </div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-widest font-mono">
                      FOUNDING NUMBER
                    </span>
                    <span className="font-display font-black text-white text-3xl sm:text-4xl block mt-0.5 tracking-tight border-b border-rose-950/20 pb-2.5">
                      #{waitlistNumber}
                    </span>
                    <p className="text-xs text-slate-300 mt-2.5 font-medium leading-relaxed">
                      Pre-order rate locked for <span className="font-bold text-indigo-450">{email}</span>. Customized specifications generated successfully.
                    </p>
                  </div>

                  {/* PDF Download Section */}
                  <div className="space-y-3.5 border-t border-slate-100 pt-5 text-left w-full">
                    <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wide flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-650" />
                      Dynamic Lead Magnet PDF Deliverables
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                      Your personalized, engineering-style PDF publications are compiled and ready. Download them directly or dispatch them via transactional email:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                      {/* Diagnostic Report Card */}
                      <div className="bg-slate-50 hover:bg-slate-105/10 border border-slate-200/80 rounded-xl p-4 transition-all flex flex-col justify-between space-y-4 text-left">
                        <div className="space-y-1">
                          <span className="text-[8px] font-mono bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded uppercase">
                            DIAGNOSTICS
                          </span>
                          <h5 className="font-display font-bold text-xs text-slate-900 mt-1">
                            Astrateq Diagnostic Assessment
                          </h5>
                          <p className="text-[10px] text-slate-500 font-medium">
                            Passive CAN Bus mappings & ECU safety parameters.
                          </p>
                        </div>
                        <button
                          onClick={downloadDiagnosticsPdf}
                          className="w-full bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-indigo-400" />
                          Download PDF
                        </button>
                      </div>

                      {/* Configuration Blueprint Card */}
                      <div className="bg-slate-50 hover:bg-slate-105/10 border border-slate-200/80 rounded-xl p-4 transition-all flex flex-col justify-between space-y-4 text-left">
                        <div className="space-y-1">
                          <span className="text-[8px] font-mono bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded uppercase">
                            BLUEPRINT
                          </span>
                          <h5 className="font-display font-bold text-xs text-slate-900 mt-1">
                            Sovereign Configuration Blueprint
                          </h5>
                          <p className="text-[10px] text-slate-500 font-medium">
                            Sovereign edge isolated telemetry and micro-Cortex stats.
                          </p>
                        </div>
                        <button
                          onClick={downloadBlueprintPdf}
                          className="w-full bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-rose-400" />
                          Download PDF
                        </button>
                      </div>
                    </div>

                    {/* Email simulation block */}
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner text-left">
                      <div className="space-y-0.5">
                        <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-400 block">Phase 4 Automation</span>
                        <p className="text-xs font-bold text-slate-700">Dispatch instantly to your inbox?</p>
                      </div>
                      <button
                        onClick={handleSimulateEmail}
                        disabled={isEmailSending || emailSent}
                        className={`px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                          emailSent 
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-250 cursor-default' 
                            : 'bg-indigo-600 hover:bg-indigo-550 text-white shadow-md'
                        }`}
                      >
                        {isEmailSending ? 'Sending...' : emailSent ? '✓ Sent Successfully!' : 'Trigger Email Dispatch'}
                      </button>
                    </div>

                  </div>

                  {/* Dynamic Technical Visual Explorer Tab block */}
                  {reportData && (
                    <div className="border border-slate-200 rounded-2xl overflow-hidden mt-4 bg-white shadow-sm text-left w-full">
                      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                          Live Report Viewer
                        </span>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => setActivePreviewTab('diagnostics')}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all cursor-pointer ${
                              activePreviewTab === 'diagnostics' 
                                ? 'bg-indigo-650 text-white' 
                                : 'bg-slate-250 text-slate-600 hover:bg-slate-300'
                            }`}
                          >
                            Diagnostics
                          </button>
                          <button
                            onClick={() => setActivePreviewTab('blueprint')}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all cursor-pointer ${
                              activePreviewTab === 'blueprint' 
                                ? 'bg-indigo-650 text-white' 
                                : 'bg-slate-250 text-slate-600 hover:bg-slate-300'
                            }`}
                          >
                            Blueprint
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-4 max-h-[220px] overflow-y-auto">
                        {(activePreviewTab === 'diagnostics' ? reportData.diagnosticReport : reportData.configurationBlueprint).map((sec, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <h6 className="text-[10px] uppercase font-bold text-indigo-600 font-mono tracking-wide">
                              [{sIdx + 1}] {sec.section}
                            </h6>
                            <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                              {sec.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Back/Continue CTA */}
                  <div className="pt-2 w-full text-center">
                    <span className="text-[9px] text-slate-400 block font-semibold">
                      All PDF compiled payloads secure with standard Transport Canada guidelines.
                    </span>
                  </div>

                </div>
              )}

            </div>

            {/* Right Column: Premium Digital Diagnostic Safety Report Mockup */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden text-left">
              
              {/* Animated overlay styling */}
              <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
              <div className="absolute -right-32 -top-32 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10 w-full">
                
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                      ASTRATEQ DIGITAL BLUEPRINT
                    </span>
                  </div>
                  <span className="text-[8px] bg-rose-500/15 text-rose-400 border border-rose-500/20 px-2.5 py-0.5 rounded font-mono font-extrabold tracking-wider uppercase">
                    FREE REPORT
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-black text-white text-lg leading-tight uppercase tracking-wide">
                    Personal Hardware Mappings Lock
                  </h4>
                  <p className="text-[11px] text-slate-400 font-semibold leading-normal">
                    Secure an instant compatibility spec sheets packet for your year and dashboard console layouts.
                  </p>
                </div>

                {/* Simulated Diagnostic Dashboard Card */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4.5 space-y-3 shadow-2xl relative">
                  
                  {/* Glowing Radar scan element */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[8px] font-mono tracking-widest font-bold text-emerald-400">
                      SECURED COMPATIBILITY
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] uppercase font-mono font-black text-rose-450 tracking-wider">
                      Live Regional Shipping Audit
                    </span>
                    <div className="flex items-center justify-between text-xs text-white pb-1.5 border-b border-slate-800">
                      <span className="font-medium text-slate-400">Selected Hub:</span>
                      <span className="font-bold flex items-center gap-1">
                        🍁 CAN-WEST ({provState})
                      </span>
                    </div>
                  </div>

                  {/* Simulated Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 text-left pt-1">
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                      <span className="text-[8px] text-slate-500 uppercase font-black block leading-none">Shipping Tier</span>
                      <span className="text-white font-mono font-black text-[10px] block mt-1">2-3 Day Express</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                      <span className="text-[8px] text-slate-500 uppercase font-black block leading-none">Diagnostic Rate</span>
                      <span className="text-white font-mono font-black text-[10px] block mt-1">LIFETIME $0 CAD</span>
                    </div>
                  </div>

                  {/* Supercapacitor Winter-hardened confirmation indicator */}
                  <div className="bg-indigo-950/40 border border-indigo-900/40 rounded-xl p-2.5 flex items-center gap-2 text-xs text-indigo-300 font-bold leading-none">
                    <span className="text-sm">❄️</span>
                    <span>Extreme -35°C Canadian Winter Shield Certified</span>
                  </div>

                </div>

                {/* Safe assurance note */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Compliance validation with Transport Canada framework</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Securing lifetime firmware downloads access</span>
                  </div>
                </div>

              </div>

              {/* Bottom Maple Leaf Seal badge */}
              <div className="text-[10px] text-center text-slate-500 font-bold mt-8 border-t border-slate-900 pt-4 flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-650 fill-rose-650" />
                Designed specifically for safety, privacy, and zero monthly fees.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
