/**
 * Simak International - Medical Equipment & Device Catalog Data
 * Sourced from Genesis Website Product Suite with Star Tech Bangladesh-style Attributes
 */
const PRODUCTS_DATA = [
  // ==========================================
  // RADIOLOGY & MEDICAL IMAGING (7 PRODUCTS)
  // ==========================================
  {
    id: 1,
    name: "Canon Aquilion Precision Ultra-High Resolution CT Scanner",
    model: "Aquilion Precision",
    brand: "Canon Medical Systems",
    brandSlug: "canon",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "CT Scanners",
    image: "images/products/canon-aquilion-precision.png",
    price: 32500000,
    priceFormatted: "৳ 3,25,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 5.0,
    reviewsCount: 14,
    keyFeatures: [
      "World's first Ultra-High Resolution CT (0.25 mm detector elements)",
      "High-definition 1792 channels with Deep Learning AiCE reconstruction",
      "Sub-millimeter anatomical detail for micro-vascular & lung parenchyma",
      "Up to 82% radiation dose reduction with adaptive iterative processing"
    ],
    overview: "The Canon Aquilion Precision provides unprecedented anatomical visualization with resolution down to 150 microns. Built for tertiary hospitals and academic medical institutions seeking diagnostic confidence in cardiovascular, neuro, and oncology imaging.",
    specifications: {
      "Manufacturer": "Canon Medical Systems Corporation (Japan)",
      "Detector Type": "UHR PUREViSION 0.25 mm x 160 rows",
      "Spatial Resolution": "0.15 mm (150 µm) in-plane",
      "Rotation Speed": "0.35 s / rotation",
      "Gantry Bore": "78 cm ergonomic aperture",
      "Reconstruction": "AiCE Deep Learning Reconstruction Algorithm",
      "Generator Power": "100 kW high-frequency generator",
      "Table Load Capacity": "300 kg (660 lbs)",
      "Certifications": "CE Marked, US FDA Approved, ISO 13485"
    }
  },
  {
    id: 2,
    name: "Canon Vantage Galan 3T High-Field MRI System",
    model: "Vantage Galan 3T",
    brand: "Canon Medical Systems",
    brandSlug: "canon",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "MRI Systems",
    image: "images/products/canon-vantage-galan-3t.png",
    price: 45000000,
    priceFormatted: "৳ 4,50,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.9,
    reviewsCount: 11,
    keyFeatures: [
      "3.0 Tesla Superconducting Magnet with Ultra-High Homogeneity",
      "Pianissimo Zen acoustic noise reduction technology (down to 2 dB)",
      "71 cm patient-friendly wide bore with ambient lighting",
      "Deep Learning Spectral AiCE MRI denoising for faster scanning"
    ],
    overview: "The Vantage Galan 3T delivers exceptional image clarity while prioritizing patient comfort. Canon's acoustic noise reduction technology creates a whisper-quiet examination environment without compromising scan speed or diagnostic precision.",
    specifications: {
      "Manufacturer": "Canon Medical Systems Corporation (Japan)",
      "Field Strength": "3.0 Tesla High-Homogeneity Superconducting Magnet",
      "Bore Diameter": "71 cm Ultra-Wide Bore",
      "Gradient Strength": "45 mT/m with 200 T/m/s slew rate",
      "Noise Reduction": "Pianissimo & Pianissimo Zen (99% acoustic reduction)",
      "RF Channels": "Independent 32 to 128 digital receiver channels",
      "Coil Technology": "Purified Saturn Technology digital RF coils",
      "Patient Weight Limit": "250 kg capacity",
      "Warranty & Service": "Comprehensive local support by Simak Engineers"
    }
  },
  {
    id: 3,
    name: "Canon Vantage 1.5T Superconducting MRI System",
    model: "Vantage 1.5T",
    brand: "Canon Medical Systems",
    brandSlug: "canon",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "MRI Systems",
    image: "images/products/vantage-15t-mri.png",
    price: 28000000,
    priceFormatted: "৳ 2,80,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 19,
    keyFeatures: [
      "1.5 Tesla Proven Superconducting Magnet with zero helium boil-off",
      "Pianissimo acoustic noise shielding for quiet patient experience",
      "Advanced non-contrast MRA techniques for renal-impaired patients",
      "Low power consumption ECO mode reducing operating overhead by 30%"
    ],
    overview: "The Vantage 1.5T is an industry workhorse for hospital and diagnostic center workloads. It provides comprehensive neuro, spine, body, orthopedic, and cardiovascular scanning with streamlined technician workflows.",
    specifications: {
      "Manufacturer": "Canon Medical Systems Corporation (Japan)",
      "Field Strength": "1.5 Tesla Superconducting Magnet",
      "Helium Boil-off": "Zero Boil-off cryostat technology",
      "Bore Design": "Short bore (149 cm length) with flared ends",
      "Gradient Performance": "34 mT/m amplitude, 160 T/m/s slew rate",
      "Imaging Sequences": "FSE, EPI, DWI, DTI, MRCP, Non-contrast MRA",
      "Workstation": "Vitrea Advanced 3D post-processing workstation"
    }
  },
  {
    id: 4,
    name: "Fujifilm Scenaria 64-Slice Whole Body CT Scanner",
    model: "Scenaria 64",
    brand: "Canon / Fujifilm",
    brandSlug: "canon",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "CT Scanners",
    image: "images/products/scenaria-64-ct.png",
    price: 18500000,
    priceFormatted: "৳ 1,85,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.7,
    reviewsCount: 8,
    keyFeatures: [
      "64-Slice Diagnostic CT with 0.35 second sub-second rotation",
      "Intelli IP Advanced iterative dose reduction up to 75%",
      "75 cm wide gantry aperture with touch-screen controls",
      "Comprehensive cardiac scanning with motion-free coronary imaging"
    ],
    overview: "The Scenaria 64 brings high-throughput cardiac, chest, and trauma CT imaging within reach. Designed with an emphasis on low radiation dose protocols and operator simplicity.",
    specifications: {
      "Manufacturer": "Fujifilm Healthcare / Hitachi Medical Systems",
      "Slice Configuration": "64 simultaneous acquisition slices per rotation",
      "Rotation Speed": "0.35 sec (full 360°)",
      "X-Ray Tube": "7.5 MHU liquid metal bearing tube",
      "Dose Reduction": "Intelli IP Advanced iterative processing",
      "Bore Size": "75 cm wide patient aperture",
      "Clinical Applications": "Cardiology, Angiography, Neuro, Oncology, Trauma"
    }
  },
  {
    id: 5,
    name: "Neusoft NeuViz 128-Slice Multi-Slice CT Scanner",
    model: "NeuViz 128",
    brand: "Neusoft Medical",
    brandSlug: "neusoft",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "CT Scanners",
    image: "images/products/neuviz-128-ct.png",
    price: 22000000,
    priceFormatted: "৳ 2,20,00,000",
    priceDisplay: "Price on Request",
    availability: "available-on-order",
    availabilityText: "Available on Order",
    rating: 4.6,
    reviewsCount: 6,
    keyFeatures: [
      "128-Slice high-definition diagnostic imaging capability",
      "Quad-sampling focal spot for double spatial data sampling",
      "ClearView iterative reconstruction for sub-mSv low-dose exams",
      "Ultra-fast whole-body trauma scanning within seconds"
    ],
    overview: "The NeuViz 128 offers premium multi-slice imaging efficiency. Equipped with high-frequency generator systems and sophisticated 3D cardiac analysis tools for high-volume diagnostic centers.",
    specifications: {
      "Manufacturer": "Neusoft Medical Systems",
      "Slice Count": "128 slices per rotation",
      "Detector Rows": "64 physical detector rows with 3D collimation",
      "Generator": "80 kW High Frequency Power Unit",
      "Software": "Cardiac CTA, Brain Perfusion, Lung Nodule Analysis",
      "Delivery & Installation": "Turnkey site planning & installation included"
    }
  },
  {
    id: 6,
    name: "EcoRay HF-525 Plus High Frequency X-Ray System",
    model: "HF-525 Plus",
    brand: "EcoRay",
    brandSlug: "ecoray",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "X-Ray Systems",
    image: "images/products/ecoray-hf525-plus.png",
    price: 3800000,
    priceFormatted: "৳ 38,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 22,
    keyFeatures: [
      "500mA, 50kW High Frequency Microprocessor Generator",
      "Dual focus rotating anode X-ray tube with thermal protection",
      "Floating 4-way heavy duty tabletop with electromagnetic locks",
      "Digital Radiography (DR) flat-panel detector retrofittable"
    ],
    overview: "Manufactured in South Korea, the EcoRay HF-525 Plus is a staple general radiography system for clinics and hospitals across Bangladesh. Robust mechanical engineering ensures dependable all-day patient throughput.",
    specifications: {
      "Manufacturer": "EcoRay Co., Ltd. (South Korea)",
      "Generator Output": "50 kW High-Frequency Multipulse",
      "Maximum mA": "500 mA (40-150 kV range)",
      "Table Type": "4-way free float table with electromagnetic brakes",
      "Bucky Stand": "Vertical counterbalanced wall bucky stand",
      "Focal Spots": "0.6 mm / 1.2 mm dual focus",
      "Input Power": "3-Phase 380V/415V AC, 50/60 Hz"
    }
  },
  {
    id: 7,
    name: "GEMSS Spinel 3G Mobile Surgical C-Arm System",
    model: "Spinel 3G",
    brand: "GEMSS Medical",
    brandSlug: "gemss",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "Surgical C-Arm",
    image: "images/products/gemss-spinel-3g-c-arm.png",
    price: 4800000,
    priceFormatted: "৳ 48,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.7,
    reviewsCount: 15,
    keyFeatures: [
      "9-inch High Resolution Triple-Mode Image Intensifier",
      "3.5 kW high-frequency monoblock generator for sharp fluoroscopy",
      "Dual 19-inch medical grade monitors on motorized mobile workstation",
      "Digital Subtraction Angiography (DSA) and vascular roadmap"
    ],
    overview: "The GEMSS Spinel 3G provides high-definition intraoperative fluoroscopy for orthopedic surgery, trauma, urology, and interventional pain management. Smooth orbital motion and low-dose pulse fluoroscopy protect both surgeon and patient.",
    specifications: {
      "Manufacturer": "GEMSS Medical Systems Co., Ltd. (South Korea)",
      "Image Intensifier": "9\" (23 cm) Triple Field (9\" / 6\" / 4.5\")",
      "Generator Power": "3.5 kW high-frequency inverter",
      "Fluoroscopy Modes": "Continuous, Pulsed, Snapshot, Boost Fluro",
      "C-Arm Movement": "Orbital rotation 135°, Panning ±12.5°, Height 450 mm",
      "Monitors": "Dual 19\" High-Luminance Medical Monitors",
      "DICOM": "Full DICOM 3.0 (Storage, Print, Worklist)"
    }
  },

  // ==========================================
  // ULTRASOUND & DIAGNOSTIC SYSTEMS (5 PRODUCTS)
  // ==========================================
  {
    id: 8,
    name: "Mindray Resona R9 Premium Diagnostic Ultrasound System",
    model: "Resona R9",
    brand: "Mindray",
    brandSlug: "mindray",
    category: "ultrasound",
    categoryName: "Ultrasound & Diagnostic Systems",
    subCategory: "Diagnostic Ultrasound",
    image: "images/products/resona-r9.png",
    price: 8500000,
    priceFormatted: "৳ 85,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 5.0,
    reviewsCount: 27,
    keyFeatures: [
      "ZST+ (Zone Sonography Technology) channel-data acquisition",
      "Sound Touch Elastography (STE) for ultra-precise tissue stiffness",
      "Smart Planes CNS automatic fetal brain 3D acquisition",
      "23.8\" Full HD frameless bezel display with 15.6\" touch console"
    ],
    overview: "Mindray's flagship Resona R9 combines Zone Sonography software beamforming with artificial intelligence measurement packages. Ideal for tertiary obstetrics, cardiology, hepatology, and vascular imaging.",
    specifications: {
      "Manufacturer": "Mindray Bio-Medical Electronics (Global)",
      "Architecture": "ZST+ Platform (Zone Sonography Technology)",
      "Main Display": "23.8-inch High-Definition LED Monitor on floating arm",
      "Touch Screen": "15.6-inch multi-gesture capacitive touch screen",
      "Transducer Ports": "5 active transducer sockets",
      "Advanced Tools": "Smart FLC, Sound Touch Elastography, iVocal voice control",
      "Transducers Supported": "Convex, Linear, Phased Array, Single-Crystal Volume 4D"
    }
  },
  {
    id: 9,
    name: "Mindray Consona N8 Diagnostic Ultrasound System",
    model: "Consona N8",
    brand: "Mindray",
    brandSlug: "mindray",
    category: "ultrasound",
    categoryName: "Ultrasound & Diagnostic Systems",
    subCategory: "Diagnostic Ultrasound",
    image: "images/products/consona-n8.png",
    price: 5200000,
    priceFormatted: "৳ 52,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 18,
    keyFeatures: [
      "ZST+ platform trickle-down technology for exceptional frame rate",
      "Single-crystal transducers for deep penetration in difficult patients",
      "iNeedle+ advanced biopsy needle visualization enhancement",
      "Smart OB and Smart Face automated obstetric biometry"
    ],
    overview: "The Consona N8 offers an intuitive shared-service scanning experience with intelligent diagnostic automation. Designed for general imaging, women's health, and cardiovascular clinics.",
    specifications: {
      "Manufacturer": "Mindray Bio-Medical Electronics",
      "Monitor": "21.5\" Bezel-less LED Monitor with wide viewing angle",
      "Touch Display": "13.3\" ultra-responsive touch command panel",
      "Battery": "Built-in battery supporting up to 2 hours scanning",
      "Connectivity": "DICOM 3.0, Wi-Fi, MedSight mobile transfer app",
      "Key Features": "iClear, iBeam, PSH, iTouch one-key optimization"
    }
  },
  {
    id: 10,
    name: "Mindray Consona N5 Shared-Service Ultrasound System",
    model: "Consona N5",
    brand: "Mindray",
    brandSlug: "mindray",
    category: "ultrasound",
    categoryName: "Ultrasound & Diagnostic Systems",
    subCategory: "Diagnostic Ultrasound",
    image: "images/products/consona-n5.png",
    price: 3600000,
    priceFormatted: "৳ 36,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.7,
    reviewsCount: 16,
    keyFeatures: [
      "Cost-effective ZST+ powered multi-specialty cart ultrasound",
      "Comprehensive cardiology and vascular Doppler packages",
      "Compact footprint with easy-glide multidirectional wheels",
      "Fast boot-up from standby in under 15 seconds"
    ],
    overview: "The Consona N5 delivers robust clinical diagnostic capabilities with an economical investment. It serves general ultrasound, OB/GYN, abdominal, musculo-skeletal, and superficial small parts.",
    specifications: {
      "Manufacturer": "Mindray Bio-Medical Electronics",
      "Monitor": "21.5\" Full HD Medical Display",
      "Touch Screen": "10.4\" Touch Screen Controls",
      "Transducer Ports": "4 pin-free universal active ports",
      "Imaging Modes": "B, M, Color Doppler, Power Doppler, Pulsed Wave, CW",
      "Storage": "1TB solid state drive for rapid patient data retrieval"
    }
  },
  {
    id: 11,
    name: "Mindray Hepatus 6 Liver Fibrosis Assessment System",
    model: "Hepatus 6",
    brand: "Mindray",
    brandSlug: "mindray",
    category: "ultrasound",
    categoryName: "Ultrasound & Diagnostic Systems",
    subCategory: "Elastography & Liver Assessment",
    image: "images/products/hepatus-6.png",
    price: 6200000,
    priceFormatted: "৳ 62,00,000",
    priceDisplay: "Price on Request",
    availability: "available-on-order",
    availabilityText: "Available on Order",
    rating: 4.9,
    reviewsCount: 9,
    keyFeatures: [
      "Non-invasive quantitative liver stiffness measurement (LSM)",
      "Controlled Attenuation Parameter (CAP) for liver steatosis staging",
      "Ultrasound visual guidance ensures precise liver parenchyma targeting",
      "Complete painless evaluation completed in under 2 minutes"
    ],
    overview: "The Hepatus 6 is a specialized transient elastography device that replaces invasive liver biopsy for viral hepatitis, fatty liver disease (NAFLD/NASH), and cirrhosis monitoring.",
    specifications: {
      "Manufacturer": "Mindray Bio-Medical Electronics",
      "Method": "Transient Elastography + Real-Time Ultrasound Imaging",
      "Parameters": "Liver Stiffness (kPa) & Ultrasound Attenuation (dB/m)",
      "Probes": "Universal probe with depth auto-adaptation for all body types",
      "Exam Time": "Typically less than 120 seconds",
      "Reporting": "Integrated automatic liver health grading report"
    }
  },
  {
    id: 12,
    name: "Mindray DP-30 Digital Portable B/W Ultrasound",
    model: "DP-30",
    brand: "Mindray",
    brandSlug: "mindray",
    category: "ultrasound",
    categoryName: "Ultrasound & Diagnostic Systems",
    subCategory: "Portable Ultrasound",
    image: "images/products/dp-30.png",
    price: 850000,
    priceFormatted: "৳ 8,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.6,
    reviewsCount: 31,
    keyFeatures: [
      "Lightweight ergonomic laptop-style ultrasound (only 5.5 kg)",
      "12.1-inch tilting high-contrast anti-glare LED monitor",
      "Dual transducer connector sockets built directly into unit",
      "Quick-save key and USB flash drive direct backup"
    ],
    overview: "A trusted workhorse for emergency rooms, outpatient wards, rural healthcare camps, and bedside evaluations. Combines clear B/W imaging with exceptional portability and rugged reliability.",
    specifications: {
      "Manufacturer": "Mindray Bio-Medical Electronics",
      "Display": "12.1\" LED monitor with 30° tilt adjustment",
      "Weight": "5.5 kg (without battery)",
      "Transducer Connectors": "2 standard transducer ports",
      "Battery": "Rechargeable lithium battery (1.5 hours scanning)",
      "Available Probes": "Convex, Linear, Micro-convex, Transvaginal",
      "Digital Processing": "Tissue Harmonic Imaging (THI), TSI, iClear"
    }
  },

  // ==========================================
  // SURGICAL & ENDOSCOPY SOLUTIONS (3 PRODUCTS)
  // ==========================================
  {
    id: 13,
    name: "Olympus EVIS Video Endoscopy System",
    model: "EVIS Series",
    brand: "Olympus",
    brandSlug: "olympus",
    category: "endoscopy",
    categoryName: "Surgical & Endoscopy Solutions",
    subCategory: "Video Endoscopy",
    image: "images/products/olympus-evis.png",
    price: 14500000,
    priceFormatted: "৳ 1,45,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 5.0,
    reviewsCount: 23,
    keyFeatures: [
      "Narrow Band Imaging (NBI) optical chromoendoscopy enhancement",
      "Full HDTV 1080p high-resolution imaging sensor",
      "Dual Focus optical switch for close-range mucosal micro-inspection",
      "One-touch waterproof connector eliminating water damage risk"
    ],
    overview: "The world-standard Olympus EVIS video endoscopy tower includes the video processor, xenon light source, gastroscope, and colonoscope. Proven clinical superiority in early GI cancer detection.",
    specifications: {
      "Manufacturer": "Olympus Corporation (Japan)",
      "System Components": "CV Video Processor + CLV 300W Xenon Light Source",
      "Observation Modes": "White Light Imaging (WLI) & Narrow Band Imaging (NBI)",
      "Video Output": "HD-SDI, DVI-D, VBS, RGB",
      "Scopes Supported": "Upper GI Gastroscope & Lower GI Colonoscope",
      "Water Jet Function": "Integrated auxiliary water jet for mucosal washing",
      "Trolley": "Heavy-duty Olympus mobile equipment trolley with monitor arm"
    }
  },
  {
    id: 14,
    name: "Olympus EBUS Endobronchial Ultrasound System",
    model: "EBUS System",
    brand: "Olympus",
    brandSlug: "olympus",
    category: "endoscopy",
    categoryName: "Surgical & Endoscopy Solutions",
    subCategory: "Pulmonary Endoscopy",
    image: "images/products/olympus-ebus-system.png",
    price: 19500000,
    priceFormatted: "৳ 1,95,00,000",
    priceDisplay: "Price on Request",
    availability: "available-on-order",
    availabilityText: "Available on Order",
    rating: 4.9,
    reviewsCount: 7,
    keyFeatures: [
      "Real-time EBUS-guided Transbronchial Needle Aspiration (EBUS-TBNA)",
      "Dedicated curvilinear ultrasonic bronchoscope with balloon contact",
      "Power and Color Doppler for differentiating lymph nodes from vessels",
      "Crucial for accurate, minimally invasive lung cancer staging"
    ],
    overview: "The Olympus EBUS System revolutionizes interventional pulmonology by enabling safe, real-time ultrasound-guided lymph node biopsies in mediastinal and hilar regions without surgical thoracotomy.",
    specifications: {
      "Manufacturer": "Olympus Corporation (Japan)",
      "Ultrasound Center": "EU-ME2 Premier Plus Universal Endoscopic Ultrasound Center",
      "Ultrasound Frequency": "5 MHz, 7.5 MHz, 10 MHz, 12 MHz selectable",
      "Imaging Modes": "B-Mode, Color Flow, Power Doppler, Elastography",
      "Bronchoscope": "BF-UC190F Curvilinear Ultrasonic Bronchoscope",
      "Biopsy Needle": "Compatible with ViziShot 21G / 22G EBUS-TBNA needles"
    }
  },
  {
    id: 15,
    name: "Olympus ESG-150 Electrosurgical Generator (Diathermy)",
    model: "ESG-150",
    brand: "Olympus",
    brandSlug: "olympus",
    category: "endoscopy",
    categoryName: "Surgical & Endoscopy Solutions",
    subCategory: "Electrosurgery",
    image: "images/products/olympus-diathermy-esg-150.png",
    price: 2400000,
    priceFormatted: "৳ 24,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 14,
    keyFeatures: [
      "Specialized GI endoscopic cutting and coagulation modes",
      "Fast Spark Monitor ensures controlled tissue incision with minimal damage",
      "High Power Cut for polypectomy, papillotomy, and ESD procedures",
      "Smart touch user interface with stored procedural memory presets"
    ],
    overview: "Engineered specifically for therapeutic endoscopy and general surgery, the ESG-150 provides intuitive electrosurgical energy management with built-in safety monitoring for patient neutral electrodes.",
    specifications: {
      "Manufacturer": "Olympus Surgical Technologies (Germany/Japan)",
      "Maximum Monopolar Cut": "150 Watts into 500 Ohms",
      "Coagulation Modes": "Soft Coag, Forced Coag, Bipolar Coag",
      "Specialized Endocut": "Pulse Cut Fast and Pulse Cut Slow modes",
      "Neutral Electrode Monitor": "Contact Quality Monitor (CQM) with continuous impedance check",
      "Foot Switch": "Dual pedal waterproof foot control switch"
    }
  },

  // ==========================================
  // CRITICAL CARE & PATIENT MONITORING (5 PRODUCTS)
  // ==========================================
  {
    id: 16,
    name: "Mindray BeneVision N17 High-Acuity Patient Monitor",
    model: "BeneVision N17",
    brand: "Mindray",
    brandSlug: "mindray",
    category: "critical-care",
    categoryName: "Critical Care & Patient Monitoring",
    subCategory: "Patient Monitors",
    image: "images/products/benevision-n17.png",
    price: 1650000,
    priceFormatted: "৳ 16,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.9,
    reviewsCount: 20,
    keyFeatures: [
      "17-inch multi-touch widescreen display with auto-brightness sensor",
      "Multi-parameter plug-in module slots for ICU/CCU and OR setups",
      "Advanced hemodynamic, BIS, rSO2, CCO, and multi-gas analysis",
      "Seamless BeneVision central monitoring station networking"
    ],
    overview: "The BeneVision N17 sets a benchmark for intensive care patient monitoring. Its intuitive smartphone-like touch interface allows clinicians to customize views and access clinical decision support tools at the bedside.",
    specifications: {
      "Manufacturer": "Mindray Bio-Medical Electronics",
      "Display Size": "17\" Capacitive Touch Screen (1920x1080 resolution)",
      "Standard Parameters": "3/5/12-lead ECG, SpO2, NIBP, Dual Temp, Respiration",
      "Optional Modules": "IBP (up to 8 channels), C.O., EtCO2, ScvO2, EEG, NMT",
      "Data Storage": "Up to 120 hours trend review, 1000 NIBP measurements",
      "Alarms": "360-degree alarm light with customizable multi-tier thresholds"
    }
  },
  {
    id: 17,
    name: "Mindray SV300 Turbine-Driven Critical Care Ventilator",
    model: "SV300",
    brand: "Mindray",
    brandSlug: "mindray",
    category: "critical-care",
    categoryName: "Critical Care & Patient Monitoring",
    subCategory: "Mechanical Ventilators",
    image: "images/products/sv300.png",
    price: 2850000,
    priceFormatted: "৳ 28,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.9,
    reviewsCount: 34,
    keyFeatures: [
      "Internal high-performance turbine drive (operates without central air)",
      "Comprehensive invasive and non-invasive ventilation (NIV)",
      "High Flow Oxygen Therapy (HFNC) built-in as standard",
      "Suitable for pediatric to adult patients in ICU, ER, and transport"
    ],
    overview: "A cutting-edge ventilator designed for critical care environments. The SV300's self-contained turbine makes it completely independent of central gas compressor supplies, offering uninterrupted patient support during intra-hospital transport.",
    specifications: {
      "Manufacturer": "Mindray Bio-Medical Electronics",
      "Patient Range": "Adult & Pediatric (Tidal Volume: 20 mL to 2000 mL)",
      "Drive Mechanism": "Internal turbine with ultra-quiet operational sound (<45 dBA)",
      "Ventilation Modes": "V-A/C, P-A/C, V-SIMV, P-SIMV, CPAP/PSV, PRVC, APRV, DuoLevel",
      "Display": "12.1-inch color touchscreen display with tilt adjustment",
      "Battery Backup": "Integrated Li-ion battery providing up to 4 hours operation",
      "Gas Supply": "O2 connector (2.8 to 6.0 bar); ambient air via micro-turbine"
    }
  },
  {
    id: 18,
    name: "Unimed VSA-60 Vital Signs Spot-Check Monitor",
    model: "VSA-60",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "critical-care",
    categoryName: "Critical Care & Patient Monitoring",
    subCategory: "Vital Signs Monitors",
    image: "images/products/unimed-vsa-60.png",
    price: 280000,
    priceFormatted: "৳ 2,80,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.6,
    reviewsCount: 15,
    keyFeatures: [
      "Fast 20-second NIBP measurement with overpressure protection",
      "High accuracy Digital SpO2 with perfusion index calculation",
      "Optional infrared tympanic rapid temperature measurement",
      "Compact 7-inch TFT screen with clear color-coded numeric display"
    ],
    overview: "Designed for general wards, triage stations, and post-operative recovery units where rapid spot-checking of patient vital signs is essential.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Screen": "7.0-inch color TFT display",
      "Monitored Parameters": "NIBP, SpO2, Pulse Rate (Optional Temp)",
      "Memory": "Stores 12,000 groups of NIBP measurements",
      "Weight": "Under 2.5 kg with built-in carry handle",
      "Mounting": "Tabletop, mobile rolling stand, or wall mount bracket"
    }
  },
  {
    id: 19,
    name: "Unimed U8 Multi-Parameter Bedside Patient Monitor",
    model: "U8",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "critical-care",
    categoryName: "Critical Care & Patient Monitoring",
    subCategory: "Patient Monitors",
    image: "images/products/unimed-u8.png",
    price: 360000,
    priceFormatted: "৳ 3,60,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.7,
    reviewsCount: 22,
    keyFeatures: [
      "8.4-inch high-resolution color TFT screen with 7-waveform display",
      "Standard parameters: 5-lead ECG, NIBP, SpO2, Respiration, 2-Temp",
      "Arrhythmia detection and ST segment elevation analysis",
      "Defibrillation and electrosurgical cautery interference protection"
    ],
    overview: "A versatile bedside monitor suited for general hospital wards, day surgery centers, and intermediate step-down units. Provides clear graphical waveforms and reliable acoustic alarm tracking.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Display": "8.4\" LED Backlight Color LCD",
      "ECG Leads": "I, II, III, aVR, aVL, aVF, V with pacemaker detection",
      "Trends": "72-hour tabular and graphic trends storage",
      "Battery": "High-capacity lithium battery (3 hours continuous monitoring)",
      "Output": "VGA video output for external auxiliary display"
    }
  },
  {
    id: 20,
    name: "Unimed U8 Pro Touchscreen Patient Monitor",
    model: "U8 Pro",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "critical-care",
    categoryName: "Critical Care & Patient Monitoring",
    subCategory: "Patient Monitors",
    image: "images/products/unimed-u8-pro.png",
    price: 450000,
    priceFormatted: "৳ 4,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 17,
    keyFeatures: [
      "Upgraded 8.4-inch full touchscreen with quick navigation dial",
      "Dual invasive blood pressure (IBP) channel support built-in",
      "Integrated 50 mm thermal strip chart recorder",
      "Central monitoring station connectivity via wired LAN or Wi-Fi"
    ],
    overview: "The Pro variant of the U8 adds a responsive touch screen interface, integrated thermal printing, and optional dual-channel invasive arterial pressure monitoring for high-dependency care.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Display": "8.4\" Color Touch Screen (800x600)",
      "Printer": "Built-in 2-channel 50mm thermal strip recorder",
      "Extended Parameters": "Optional Dual IBP, Microstream EtCO2",
      "Data Network": "RJ45 Ethernet, Wi-Fi module, HL7 protocol support",
      "Alarm System": "Triple level audio/visual alert with event review"
    }
  },

  // ==========================================
  // IN-VITRO DIAGNOSTICS & LABORATORY (16 PRODUCTS)
  // ==========================================
  {
    id: 21,
    name: "Boditech AFIAS-10 Automated Immunoassay Analyzer",
    model: "AFIAS-10",
    brand: "Boditech Med",
    brandSlug: "boditech",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Immunoassay Analyzers",
    image: "images/products/boditech-afias-10.png",
    price: 2100000,
    priceFormatted: "৳ 21,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.9,
    reviewsCount: 31,
    keyFeatures: [
      "10 parallel testing channels with fully automated walkaway workflow",
      "Fluorescence Immunoassay (FIA) technology for laboratory precision",
      "Over 60 available parameters: Cardiac, Hormones, Infection, Cancer",
      "All-in-one sealed cartridge containing reagents, diluent, and tip"
    ],
    overview: "The Boditech AFIAS-10 from South Korea is an automated benchtop immunoassay platform. It automatically dispenses samples, incubates, measures fluorescence, and prints results without manual pipetting.",
    specifications: {
      "Manufacturer": "Boditech Med Inc. (South Korea)",
      "Test Channels": "10 distinct test bays operating independently",
      "Throughput": "Up to 50 tests / hour",
      "Sample Volume": "10 to 50 µL (Whole blood, serum, or plasma)",
      "Sample Types": "Capillary fingertip blood or venous sample",
      "Display": "10.4-inch color touch screen LCD",
      "Assay Menu": "Troponin I, NT-proBNP, D-Dimer, HbA1c, CRP, PCT, Thyroid panel"
    }
  },
  {
    id: 22,
    name: "Boditech AFIAS-6 Automated POCT Immunoassay Analyzer",
    model: "AFIAS-6",
    brand: "Boditech Med",
    brandSlug: "boditech",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Immunoassay Analyzers",
    image: "images/products/boditech-afias-6.png",
    price: 1500000,
    priceFormatted: "৳ 15,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 26,
    keyFeatures: [
      "6 parallel automated test channels for medium-volume POCT labs",
      "Automated tip-based sample loading from standard collection tubes",
      "Results in 10-15 minutes with high correlation to clinical chemiluminescence",
      "Zero daily maintenance with disposable all-in-one test cartridges"
    ],
    overview: "Ideal for emergency departments, cardiology wards, and decentralized diagnostic centers requiring immediate STAT biomarker test results.",
    specifications: {
      "Manufacturer": "Boditech Med Inc. (South Korea)",
      "Channels": "6 automated testing bays",
      "Throughput": "Up to 36 tests per hour",
      "Display": "7-inch color touch screen with embedded thermal printer",
      "Data Interface": "USB, LIS/HIS interface via RS-232, barcode scanner",
      "Certification": "CE-IVD, KFDA, US FDA 510(k) Cleared"
    }
  },
  {
    id: 23,
    name: "Alcor iSED Pro Automated High-Throughput ESR Analyzer",
    model: "iSED Pro",
    brand: "Alcor Scientific",
    brandSlug: "alcor",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Hematology & ESR",
    image: "images/products/alcor-ised-pro.png",
    price: 2600000,
    priceFormatted: "৳ 26,00,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 5.0,
    reviewsCount: 12,
    keyFeatures: [
      "Rapid 20-second test result per sample directly from primary EDTA tube",
      "Rheological measurement of rouleaux formation via photometric cell",
      "High throughput of up to 180 samples per hour",
      "Closed-tube cap piercing eliminating biohazard aerosol exposure"
    ],
    overview: "Manufactured in the USA, the iSED Pro eliminates traditional Westergren 60-minute sedimentation waiting times. It pulls only 100 microliters from routine CBC purple-top tubes without requiring separate blood draws.",
    specifications: {
      "Manufacturer": "Alcor Scientific Inc. (USA)",
      "Measurement Time": "20 seconds per sample",
      "Throughput": "Up to 180 samples/hour",
      "Sample Volume": "100 µL directly from standard EDTA tube",
      "Capacity": "20-sample continuous loading carousel",
      "Barcoding": "Internal barcode reader for automatic tube identification",
      "Method": "Photometric rheology measuring early red blood cell aggregation"
    }
  },
  {
    id: 24,
    name: "Alcor Mini-iSED Compact Benchtop ESR Analyzer",
    model: "Mini-iSED",
    brand: "Alcor Scientific",
    brandSlug: "alcor",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Hematology & ESR",
    image: "images/products/alcor-miniised.png",
    price: 1350000,
    priceFormatted: "৳ 13,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.9,
    reviewsCount: 18,
    keyFeatures: [
      "Compact single-position analyzer with the same 20-second speed",
      "Direct micro-sampling (100 µL) from standard EDTA collection tube",
      "Completely maintenance-free operation with zero liquid wash waste",
      "Excellent correlation with the ICSH Westergren Reference Method"
    ],
    overview: "The Mini-iSED brings Alcor's rapid ESR technology to small-to-midsize diagnostic laboratories and pediatric clinics where sample volume conservation is paramount.",
    specifications: {
      "Manufacturer": "Alcor Scientific Inc. (USA)",
      "Test Duration": "20 seconds",
      "Footprint": "Extremely compact benchtop space (under 30 cm width)",
      "Sample Volume": "100 µL whole blood",
      "Waste Generation": "Zero liquid chemical waste generated",
      "Connectivity": "Direct LIS bidirectional interface"
    }
  },
  {
    id: 25,
    name: "Eurospital MAGO 4 Automated ELISA & IFA Processor",
    model: "MAGO 4",
    brand: "Eurospital",
    brandSlug: "eurospital",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Immunology & ELISA",
    image: "images/products/mago-4.png",
    price: 4200000,
    priceFormatted: "৳ 42,00,000",
    priceDisplay: "Price on Request",
    availability: "available-on-order",
    availabilityText: "Available on Order",
    rating: 4.8,
    reviewsCount: 8,
    keyFeatures: [
      "Simultaneous walkaway processing of ELISA microplates and IFA slides",
      "4 independent microplate incubators with precision temperature control",
      "Precision liquid handling robotic arm with disposable tip technology",
      "Built-in 8-channel spectrophotometer for multi-wavelength reads"
    ],
    overview: "From Italy, the MAGO 4 is an open-architecture automated workstation capable of managing the complete workflow of microplate ELISA and Immunofluorescence (IFA) slide staining on a single instrument.",
    specifications: {
      "Manufacturer": "Eurospital S.p.A. (Italy)",
      "Sample Capacity": "Up to 104 primary sample tubes (12-16 mm diameter)",
      "Plate Capacity": "4 microplates + 16 IFA slides simultaneously",
      "Pipetting System": "Single probe with disposable tips (avoids carryover)",
      "Optical System": "8-channel reader (405, 450, 492, 620 nm filters)",
      "Washing System": "8-channel wash head with customizable aspiration heights"
    }
  },
  {
    id: 26,
    name: "Unimed UH-580 5-Part Differential Auto Hematology Analyzer",
    model: "UH-580",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Hematology & ESR",
    image: "images/products/unimed-uh580.png",
    price: 1850000,
    priceFormatted: "৳ 18,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.9,
    reviewsCount: 29,
    keyFeatures: [
      "Semiconductor laser scatter + cytochemical dye flow cytometry",
      "29 reporting parameters + 4 scattergrams + 2 histograms",
      "Fast 60 samples/hour throughput with only 15 µL micro-sample",
      "10.4-inch high-definition touch display with intuitive UI"
    ],
    overview: "The flagship 5-part hematology analyzer from Unimed provides clinical hematology laboratories with precise WBC differentiation, abnormal cell flagging, and low reagent consumption per test.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Methodology": "Flow Cytometry, Tri-angle Semiconductor Laser Scatter",
      "Throughput": "60 samples per hour",
      "Parameters": "29 parameters including ALY#, LIC%, Neu#, Lym#, Mon#, Eos#, Bas#",
      "Sample Modes": "Whole blood (15 µL), Capillary prediluted mode (20 µL)",
      "Storage": "50,000 complete patient records with scattergrams",
      "Calibration": "Manual and automatic calibration with dedicated calibrators"
    }
  },
  {
    id: 27,
    name: "Unimed UH-560 Automated 3-Part Hematology Analyzer",
    model: "UH-560",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Hematology & ESR",
    image: "images/products/unimed-uh560.png",
    price: 950000,
    priceFormatted: "৳ 9,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.7,
    reviewsCount: 24,
    keyFeatures: [
      "Dual chamber electrical impedance method for RBC/WBC counting",
      "21 parameters including WBC, RBC, HGB, PLT with 3 histograms",
      "60 samples per hour continuous testing with automatic clog burning",
      "Low running cost with only 2 routine reagents (diluent and lyse)"
    ],
    overview: "The UH-560 is a reliable, economical automated 3-part differential cell counter designed for clinic laboratories, primary health centers, and emergency department labs.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Parameters": "21 reportable parameters + 3 histograms (WBC, RBC, PLT)",
      "Aperture Diameter": "WBC 100 µm / RBC/PLT 80 µm ruby apertures",
      "Sample Volume": "9.8 µL whole blood",
      "Screen": "8.4\" color LCD touch screen",
      "Reagents": "Only Diluent, Lyse, and periodic Probe Cleanser"
    }
  },
  {
    id: 28,
    name: "Unimed AH-600 Automated Cell Counter & Hematology Analyzer",
    model: "AH-600",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Hematology & ESR",
    image: "images/products/unimed-ah600.png",
    price: 820000,
    priceFormatted: "৳ 8,20,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.6,
    reviewsCount: 19,
    keyFeatures: [
      "Microprocessor-controlled volumetric impedance measurement",
      "Compact benchtop chassis with built-in thermal printer",
      "High precision cyanmethemoglobin-free hemoglobin determination",
      "Automatic liquid level detection and reagent expiration tracking"
    ],
    overview: "Built to deliver dependable complete blood counts with minimal technician intervention. Features automated back-flush and high-voltage burn pulses to prevent aperture blockage.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Speed": "60 tests per hour",
      "Sample Modes": "Venous whole blood and fingerstick capillary mode",
      "Data Storage": "30,000 sample results including graphic histograms",
      "Dimensions": "360 mm x 420 mm x 450 mm (approx 19 kg)"
    }
  },
  {
    id: 29,
    name: "Unimed CEE-5 Electrolyte & Clinical Chemistry Analyzer",
    model: "CEE-5",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Electrolyte Analyzers",
    image: "images/products/unimed-cee-5.png",
    price: 480000,
    priceFormatted: "৳ 4,80,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.7,
    reviewsCount: 21,
    keyFeatures: [
      "Ion Selective Electrode (ISE) measuring Na+, K+, Cl-, Ca++, and pH",
      "Fast 60-second measurement cycle with automatic 2-point calibration",
      "All-in-one reagent pack system eliminates separate liquid waste lines",
      "Long-life maintenance-free electrodes with over 12 months lifespan"
    ],
    overview: "The CEE-5 provides accurate serum, plasma, urine, and whole blood electrolyte profiles. Essential for monitoring electrolyte disturbances in ICU, dialysis, and routine biochemistry.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Test Parameters": "Na+, K+, Cl-, iCa++, nCa, TCa, pH",
      "Cycle Time": "60 seconds per test",
      "Sample Volume": "65 to 150 µL",
      "Calibration": "Fully automatic 1-point and 2-point calibration",
      "Reagent System": "Integrated reagent cartridge with enclosed waste reservoir"
    }
  },
  {
    id: 30,
    name: "Unimed UBG-60 Critical Care Blood Gas & Electrolyte Analyzer",
    model: "UBG-60",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Blood Gas Analyzers",
    image: "images/products/unimed-ubg-60.png",
    price: 1150000,
    priceFormatted: "৳ 11,50,000",
    priceDisplay: "Price on Request",
    availability: "available-on-order",
    availabilityText: "Available on Order",
    rating: 4.8,
    reviewsCount: 11,
    keyFeatures: [
      "Comprehensive ABG: pH, pCO2, pO2, Na+, K+, Cl-, Ca++, Glu, Lac, Hct",
      "Cartridge-based micro-fluidic sensor card system",
      "No gas cylinders required - ambient air calibration",
      "Results in under 90 seconds for critical emergency decision making"
    ],
    overview: "A maintenance-free point-of-care blood gas analyzer designed for intensive care units, respiratory departments, and operating theaters requiring immediate acid-base assessment.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Measured Parameters": "pH, pCO2, pO2, Na+, K+, Cl-, Ca++, Glu, Lac, Hct",
      "Calculated Parameters": "HCO3-, TCO2, BE, sO2%, AaDO2, AG, etc. (over 20 parameters)",
      "Sample Volume": "80 to 120 µL heparinized whole blood",
      "Testing Time": "60-90 seconds",
      "Cartridge Shelf Life": "Refrigerated / room temperature stable multi-test pack"
    }
  },
  {
    id: 31,
    name: "Unimed FA-60 Automated Blood Coagulation Analyzer",
    model: "FA-60",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Coagulation Analyzers",
    image: "images/products/unimed-fa-60.png",
    price: 680000,
    priceFormatted: "৳ 6,80,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.6,
    reviewsCount: 14,
    keyFeatures: [
      "Magnetic bead & optical dual clot detection technology",
      "Performs PT, APTT, Fibrinogen, Thrombin Time (TT), and D-Dimer",
      "Unaffected by icteric, lipemic, or hemolyzed plasma samples",
      "Built-in 37°C incubation blocks for reagents and reaction cuvettes"
    ],
    overview: "The FA-60 provides automated testing of routine and specialized hemostasis parameters for surgery pre-screening and anticoagulant monitoring (warfarin/heparin).",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Channels": "4 independent optical/magnetic detection channels",
      "Incubation Positions": "16 sample incubation positions + 4 reagent positions at 37°C",
      "Throughput": "Up to 60 tests/hour for PT",
      "Tests Supported": "PT (INR), APTT, FIB, TT, D-Dimer, Coagulation factors",
      "Memory": "1,000 test results with reaction curves"
    }
  },
  {
    id: 32,
    name: "Unimed URI-300 High-Speed Automated Urine Analyzer",
    model: "URI-300",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Urinalysis Equipment",
    image: "images/products/unimed-uri-300.png",
    price: 420000,
    priceFormatted: "৳ 4,20,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 23,
    keyFeatures: [
      "Continuous feeding mode delivering up to 500 tests per hour",
      "Reflectance photometer reading 10, 11, 12, or 14 parameter strips",
      "Automatic strip alignment, feeding, and waste container drop",
      "Built-in thermal printer and RS232 port for central LIS connectivity"
    ],
    overview: "A high-capacity urine test strip reader built for busy clinical biochemistry and pathology laboratories. Handles large daily batches with consistent optical wavelength calibration.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Throughput": "500 tests/hour (continuous mode), 60 tests/hour (single mode)",
      "Test Items": "LEU, NIT, URO, PRO, pH, BLD, SG, KET, BIL, GLU, VC, MA, CRE, CA",
      "Wavelengths": "525 nm, 610 nm, 660 nm Cold Light Source",
      "Memory": "2,000 patient records storage",
      "Waste Collector": "Internal used-strip discard bin holding 50+ strips"
    }
  },
  {
    id: 33,
    name: "Unimed U-300 Semi-Automated Urine Chemistry Analyzer",
    model: "U-300",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Urinalysis Equipment",
    image: "images/products/unimed-u300.png",
    price: 260000,
    priceFormatted: "৳ 2,60,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.6,
    reviewsCount: 17,
    keyFeatures: [
      "120 tests per hour throughput with single strip insertion",
      "Dual wavelength measurement eliminates interference from colored urine",
      "Large LCD display with intuitive Bangla/English operation support",
      "Standard RS-232 interface for automated barcode scanner and PC link"
    ],
    overview: "Reliable medium-throughput urinalysis analyzer for clinic labs and hospitals. Reads Leukocytes, Nitrite, Urobilinogen, Protein, pH, Blood, Specific Gravity, Ketones, Bilirubin, and Glucose.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Test Rate": "60 to 120 tests/hour",
      "Strip Compatibility": "10, 11, 12 Parameter Unimed / Universal strips",
      "Display": "Wide LCD screen with backlit contrast control",
      "Dimensions": "350 mm x 320 mm x 150 mm (weight 4.0 kg)"
    }
  },
  {
    id: 34,
    name: "Unimed U-200 Compact Urine Chemistry Reader",
    model: "U-200",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Urinalysis Equipment",
    image: "images/products/unimed-u200.png",
    price: 180000,
    priceFormatted: "৳ 1,80,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.5,
    reviewsCount: 15,
    keyFeatures: [
      "Benchtop space-saving urine analyzer for small diagnostic centers",
      "60 tests per hour standard mode with acoustic prompt",
      "Auto-calibration against ambient temperature and humidity shifts",
      "Integrated micro-thermal printer for instant patient printouts"
    ],
    overview: "The U-200 offers dependable urinalysis with negligible bench footprint. Perfect for outpatient departments, small diagnostic laboratories, and health clinics.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Speed": "60 tests per hour",
      "Parameters": "10/11 parameters (Urobilinogen, Bilirubin, Ketone, Blood, Protein, etc.)",
      "Printer": "Built-in 57 mm thermal printer",
      "Power": "100-240V AC universal adapter"
    }
  },
  {
    id: 35,
    name: "Unimed U-180 Portable Handheld Urinalysis Reader",
    model: "U-180",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Urinalysis Equipment",
    image: "images/products/unimed-u180.png",
    price: 95000,
    priceFormatted: "৳ 95,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.5,
    reviewsCount: 12,
    keyFeatures: [
      "Ultra-portable battery-operated urine strip reader",
      "Weighs only 600g - perfect for mobile field camps and rural outreach",
      "Internal memory stores 1,000 patient test results",
      "USB connection to laptop or optional mini Bluetooth printer"
    ],
    overview: "An economical, handheld point-of-care urine reader designed for bedside use in patient rooms, rural community health camps, and emergency triage.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Weight": "600 grams",
      "Battery": "4x AA batteries or DC 5V USB power",
      "Strips": "10/11 parameter diagnostic dipsticks",
      "Memory": "1,000 tests with date, time, and patient ID"
    }
  },
  {
    id: 36,
    name: "Unimed Labas-M Laboratory Clinical Chemistry Spectrophotometer",
    model: "Labas-M",
    brand: "Unimed",
    brandSlug: "unimed",
    category: "laboratory",
    categoryName: "In-Vitro Diagnostics & Laboratory",
    subCategory: "Clinical Chemistry",
    image: "images/products/unimed-labas-m.png",
    price: 550000,
    priceFormatted: "৳ 5,50,000",
    priceDisplay: "Price on Request",
    availability: "in-stock",
    availabilityText: "In Stock",
    rating: 4.8,
    reviewsCount: 25,
    keyFeatures: [
      "Semi-automated clinical chemistry analyzer with Peltier flow cell",
      "Wavelength range: 340 nm to 670 nm (7 interference filters standard)",
      "Real-time dynamic reaction curve display on large color LCD",
      "Open system reagent compatibility with over 200 programmable test items"
    ],
    overview: "The Labas-M is a reliable semi-auto biochemistry analyzer. Measures liver function, renal panel, lipid profile, cardiac enzymes, glucose, and proteins with precision quartz flow cell technology.",
    specifications: {
      "Manufacturer": "Unimed Medical Systems",
      "Optical System": "340, 405, 492, 510, 546, 578, 630 nm filters (±2 nm accuracy)",
      "Flow Cell": "32 µL quartz flow-through cell with 37°C Peltier control",
      "Assay Types": "End-point, Fixed-time, Kinetic, Factor, Multi-standard calibration",
      "Reagents": "Open reagent system - compatible with all international & local brands",
      "Screen": "7-inch color LCD display with internal thermal printer"
    }
  },
  {
    id: 37,
    name: "Esaote Magnifico Open 0.4T Dedicated MSK & Spine MRI System",
    model: "Magnifico Open 0.4T",
    brand: "Esaote",
    brandSlug: "esaote",
    category: "radiology",
    categoryName: "Radiology & Medical Imaging",
    subCategory: "MRI Systems",
    image: "images/products/esaote-magnifico-open-04t.png",
    price: 38000000,
    priceFormatted: "৳ 3,80,00,000",
    priceDisplay: "Price on Request",
    availability: "available-on-order",
    availabilityText: "Available on Order",
    rating: 4.9,
    reviewsCount: 11,
    keyFeatures: [
      "Open C-shaped permanent magnet design eliminating patient claustrophobia",
      "0.4 Tesla field strength optimized for musculoskeletal and spine diagnostics",
      "True-Motion real-time kinematic joint imaging under continuous movement",
      "Eco-friendly zero cryogen design with minimal power consumption"
    ],
    overview: "The Esaote Magnifico Open delivers high-resolution musculoskeletal and whole-spine MR imaging with unmatched patient comfort. Its open architecture prevents claustrophobic refusal and enables specialized weight-bearing examinations.",
    specifications: {
      "Manufacturer": "Esaote S.p.A. (Genoa, Italy)",
      "Magnet Type": "Permanent open C-shaped magnet - zero helium refilling required",
      "Field Strength": "0.4 Tesla nominal field",
      "Patient Clearance": "Wide open aperture with unobstructed 360-degree patient visibility",
      "Gradient System": "High-performance gradients with Speed-Up parallel imaging",
      "RF Coils": "Dedicated multi-channel anatomically contoured coils for knee, shoulder, spine, wrist, and ankle",
      "Power Requirements": "Standard electrical connection, low operational expenditure"
    }
  }
];

// Brands Metadata
const BRANDS_DATA = [
  { id: "mindray", name: "Mindray", count: 6, logo: "images/partners/mindray.png" },
  { id: "canon", name: "Canon Medical Systems", count: 4, logo: "images/partners/canon.png" },
  { id: "olympus", name: "Olympus", count: 3, logo: "images/partners/erba-mannheim.png" },
  { id: "unimed", name: "Unimed", count: 14, logo: "images/partners/unimed.png" },
  { id: "boditech", name: "Boditech Med", count: 2, logo: "images/partners/boditech.png" },
  { id: "alcor", name: "Alcor Scientific", count: 2, logo: "images/partners/alcor-scientific.png" },
  { id: "esaote", name: "Esaote", count: 1, logo: "images/partners/esaote.png" },
  { id: "ecoray", name: "EcoRay", count: 1, logo: "images/partners/ecoray.png" },
  { id: "gemss", name: "GEMSS Medical", count: 1, logo: "images/partners/gemss.png" },
  { id: "eurospital", name: "Eurospital", count: 1, logo: "images/partners/eurospital.png" },
  { id: "neusoft", name: "Neusoft Medical", count: 1, logo: "images/partners/and-many-more.png" }
];

// Categories Metadata
const CATEGORIES_DATA = [
  { id: "all", name: "All Categories", count: 37, icon: "fas fa-th-large" },
  { id: "radiology", name: "Radiology & Medical Imaging", count: 8, icon: "fas fa-x-ray" },
  { id: "ultrasound", name: "Ultrasound & Diagnostic Systems", count: 5, icon: "fas fa-wave-square" },
  { id: "endoscopy", name: "Surgical & Endoscopy Solutions", count: 3, icon: "fas fa-procedures" },
  { id: "critical-care", name: "Critical Care & Patient Monitoring", count: 5, icon: "fas fa-heartbeat" },
  { id: "laboratory", name: "In-Vitro Diagnostics & Laboratory", count: 16, icon: "fas fa-vial" }
];
