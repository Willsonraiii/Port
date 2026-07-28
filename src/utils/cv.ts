import { jsPDF } from "jspdf";
import { EXPERIENCE, SERVICES, CREATIVE, TRAINING, CERTS, STATS } from "@/data";

const CRIMSON: [number, number, number] = [225, 29, 47];
const INK: [number, number, number] = [28, 28, 28];
const MIST: [number, number, number] = [110, 107, 100];

const M = 52; // page margin (pt)
const W = 595.28; // A4 width

export function downloadCV() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  let y = 0;

  const ensure = (needed: number) => {
    if (y + needed > 800) {
      doc.addPage();
      y = M;
    }
  };

  const sectionTitle = (t: string) => {
    ensure(48);
    y += 14;
    doc.setFillColor(...CRIMSON);
    doc.rect(M, y, 22, 2.5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...INK);
    doc.text(t.toUpperCase(), M + 30, y + 5);
    doc.setDrawColor(220, 218, 212);
    doc.setLineWidth(0.6);
    doc.line(M, y + 14, W - M, y + 14);
    y += 28;
  };

  /* ---------- header ---------- */
  doc.setFillColor(...INK);
  doc.rect(0, 0, W, 128, "F");
  doc.setFillColor(...CRIMSON);
  doc.rect(0, 128, W, 4, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.setTextColor(255, 255, 255);
  doc.text("WILLSON RAI", M, 58);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(225, 29, 47);
  doc.text("Head Barista & Creative Freelancer", M, 80);

  doc.setFontSize(9.5);
  doc.setTextColor(200, 198, 192);
  doc.text("Lalitpur, Nepal  ·  resume@willsonrai.com.np  ·  7 years in specialty coffee", M, 102);

  y = 160;

  /* ---------- profile ---------- */
  sectionTitle("Profile");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(70, 68, 64);
  const profile =
    "Passionate Head Barista and creative freelancer from Lalitpur, Nepal with over seven years in the coffee and hospitality industry — from pulling the first espresso shot to leading teams, training new baristas, and creating visual identities for cafés and restaurants. Alongside the bar: menu design, social media content and brand identities. Coffee and creativity flow through everything I do.";
  const lines = doc.splitTextToSize(profile, W - M * 2);
  doc.text(lines, M, y);
  y += lines.length * 14 + 4;

  /* ---------- highlights ---------- */
  sectionTitle("Highlights");
  doc.setFontSize(10);
  STATS.forEach(([num, label], i) => {
    const col = i % 4;
    const x = M + col * ((W - M * 2) / 4);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...CRIMSON);
    doc.text(num, x, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MIST);
    const l = doc.splitTextToSize(label, (W - M * 2) / 4 - 10);
    doc.text(l, x, y + 13);
    doc.setFontSize(10);
  });
  y += 36;

  /* ---------- experience ---------- */
  sectionTitle("Work Experience");
  EXPERIENCE.forEach((job) => {
    ensure(60 + job.points.length * 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...INK);
    doc.text(job.role, M, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...CRIMSON);
    doc.text(job.period, W - M, y, { align: "right" });
    y += 13;
    doc.setTextColor(...MIST);
    doc.setFontSize(9);
    doc.text(job.place, M, y);
    y += 14;
    doc.setFontSize(9);
    doc.setTextColor(70, 68, 64);
    job.points.forEach((p) => {
      const wrapped = doc.splitTextToSize(p, W - M * 2 - 12);
      ensure(wrapped.length * 12);
      doc.setFillColor(...CRIMSON);
      doc.circle(M + 3, y - 3, 1.6, "F");
      doc.text(wrapped, M + 12, y);
      y += wrapped.length * 12 + 3;
    });
    doc.setFontSize(9);
    doc.setTextColor(...MIST);
    job.skills.forEach(([name, val]) => {
      doc.text(`${name}: ${val}%`, M + 12, y);
      y += 12;
    });
    y += 10;
  });

  /* ---------- skills ---------- */
  sectionTitle("Barista Craft");
  doc.setFontSize(9.5);
  SERVICES.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = M + col * ((W - M * 2) / 2);
    const yy = y + row * 30;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...INK);
    doc.text(s.title, x, yy);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...MIST);
    const l = doc.splitTextToSize(s.body, (W - M * 2) / 2 - 14);
    doc.text(l, x, yy + 11);
    doc.setFontSize(9.5);
  });
  y += Math.ceil(SERVICES.length / 2) * 30 + 6;

  /* ---------- creative ---------- */
  sectionTitle("Creative Freelance");
  doc.setFontSize(9.5);
  CREATIVE.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = M + col * ((W - M * 2) / 2);
    const yy = y + row * 30;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...INK);
    doc.text(c.title, x, yy);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...MIST);
    const l = doc.splitTextToSize(c.body, (W - M * 2) / 2 - 14);
    doc.text(l, x, yy + 11);
    doc.setFontSize(9.5);
  });
  y += Math.ceil(CREATIVE.length / 2) * 30 + 6;

  /* ---------- education ---------- */
  sectionTitle("Training & Certifications");
  doc.setFontSize(9.5);
  [...TRAINING, ...CERTS].forEach((it) => {
    ensure(26);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...INK);
    doc.text(it.title, M, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...MIST);
    const l = doc.splitTextToSize(it.meta, W - M * 2 - 12);
    doc.text(l, M + 12, y);
    doc.setFillColor(...CRIMSON);
    doc.circle(M + 3, y - 3, 1.6, "F");
    y += 12 + l.length * 10 + 6;
    doc.setFontSize(9.5);
  });

  /* ---------- footer ---------- */
  ensure(40);
  y += 10;
  doc.setDrawColor(...CRIMSON);
  doc.setLineWidth(1);
  doc.line(M, y, W - M, y);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...MIST);
  doc.text(
    "Let's brew together — available for café collaborations, menu consulting and barista training.",
    M,
    y + 16
  );

  doc.save("Willson-Rai-CV.pdf");
}
