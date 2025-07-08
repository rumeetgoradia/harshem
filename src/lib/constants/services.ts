export type ServiceCategory = {
  title: string;
  services: readonly string[];
};

export const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    title: "General Health",
    services: [
      "Long-term treatment of chronic illnesses",
      "Sports physicals",
      "Annual preventive and wellness visit",
      "Contraception",
      "Pre-operative medical clearance",
      "Problem-based treatment of acute illnesses (sick visit)",
      "School and college physicals",
      "Diagnostic and preventing screening",
      "Substance abuse counseling",
      "LGBTQ+ health",
      "Immunizations and vaccinations",
      "Employment physicals",
      "Gynecological screening",
      "Weight loss",
      "Telehealth",
    ],
  },
  {
    title: "Diagnostic Screening",
    services: [
      "Malaria prophylaxis",
      "Cholesterol screening",
      "Obesity screening",
      "Prostate cancer screening",
      "STD screening",
      "Breast cancer screening",
      "Substance abuse screening",
      "Blood pressure screening",
      "Thyroid disorder screening",
      "Kidney disease screening",
      "Hepatitis B and C screening",
      "Ovarian cancer screening",
      "Mental health screening",
      "Diabetes mellitus screening",
      "Blood disorder screening",
      "Lung cancer screening",
      "HIV screening",
      "Uterine cancer screening",
      "Osteoporosis screening",
    ],
  },
  {
    title: "Preventive Screening",
    services: [
      "Breast cancer screening",
      "Prostate cancer screening",
      "Cervical cancer screening",
      "Ovarian cancer screening",
      "Colon cancer screening",
      "STD screening",
    ],
  },
  {
    title: "Office Tests and Procedures",
    services: ["ECG/EKG", "Tuberculosis testing", "Laboratory services", "Pap smear", "Metabolic testing", "STD testing"],
  },
  {
    title: "Therapeutic Injections",
    services: ["B12 injection", "Depo-medrol injection"],
  },
  {
    title: "Vaccinations",
    services: ["Hepatitis B", "TDAP", "Menactra", "Influenza", "MMR", "TD", "Zostavax"],
  },
] as const;