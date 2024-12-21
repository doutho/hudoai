import type { Language } from "./types.ts";

export const geminiPrompts: Record<Language, string> = {
  en: `Please respond in the following format, answers separated by semicolons (;):
Is the person's skin in the image oily, combination, dry, or normal?;
Is the skin tone pale white, white, olive, moderately brown, dark brown, black?;
What is the person's approximate age?;
Does the person have acne? No, mild, moderate, severe.;
Based on this skin analysis, which of the following products is best as a moisturizer? Answer only with the product name exactly as it appears: CeraVe Moisturizing Lotion, La Roche-Posay Effaclar Mat;
Based on your skin analysis, provide a detailed yet concise explanation of why this moisturizer is specifically suitable for your skin type and condition. Include how its key ingredients will benefit your specific skin concerns and clear usage instructions (when and how to apply). Make it personal by using "your skin" and "you" in the description;
Based on this skin analysis, which of the following products is best as a cleanser? Answer only with the product name exactly as it appears: CeraVe Hydrating Facial Cleanser, Cetaphil Gentle Skin Cleanser;
Based on your skin analysis, provide a detailed yet concise explanation of why this cleanser is specifically suitable for your skin type and condition. Include how its key ingredients will benefit your specific skin concerns and clear usage instructions (when and how to apply). Make it personal by using "your skin" and "you" in the description;
Based on this skin analysis, which of the following products is best as an exfoliant? Answer only with the product name exactly as it appears: Paula's Choice 2% BHA;
Based on your skin analysis, provide a detailed yet concise explanation of why this exfoliant is specifically suitable for your skin type and condition. Include how its key ingredients will benefit your specific skin concerns and clear usage instructions (when and how to apply). Make it personal by using "your skin" and "you" in the description;
Based on this skin analysis, which of the following products is best as a sunscreen? Answer only with the product name exactly as it appears: La Roche-Posay Anthelios, EVY Technology Sunscreen;
Based on your skin analysis, provide a detailed yet concise explanation of why this sunscreen is specifically suitable for your skin type and condition. Include how its key ingredients will benefit your specific skin concerns and clear usage instructions (when and how to apply). Make it personal by using "your skin" and "you" in the description;
Based on this skin analysis, which of the following products is best as a retinol? Answer only with the product name exactly as it appears: The Ordinary Retinol 1%;
Based on your skin analysis, provide a detailed yet concise explanation of why this retinol is specifically suitable for your skin type and condition. Include how its key ingredients will benefit your specific skin concerns and clear usage instructions (when and how to apply). Make it personal by using "your skin" and "you" in the description`,

  sv: `Svara i följande format, svar separerade med semikolon (;):
Är personens hud i bilden oljig, kombinerad, torr eller normal?;
Är hudtonen blek vit, vit, olivfärgad, måttligt brun, mörkbrun, svart?;
Vad är personens ungefärliga ålder?;
Har personen akne? Nej, mild, måttlig, svår.;
Baserat på denna hudanalys, vilken av följande produkter är bäst som fuktgivare? Svara endast med produktnamnet exakt som det visas: CeraVe Moisturizing Lotion, La Roche-Posay Effaclar Mat;
Baserat på din hudanalys, ge en detaljerad men koncis förklaring till varför denna fuktgivare är särskilt lämplig för din hudtyp och tillstånd. Inkludera hur dess huvudingredienser kommer att gynna dina specifika hudproblem och tydliga användningsinstruktioner (när och hur den ska appliceras). Gör det personligt genom att använda "din hud" och "du" i beskrivningen;
Baserat på denna hudanalys, vilken av följande produkter är bäst som rengöring? Svara endast med produktnamnet exakt som det visas: CeraVe Hydrating Facial Cleanser, Cetaphil Gentle Skin Cleanser;
Baserat på din hudanalys, ge en detaljerad men koncis förklaring till varför denna rengöring är särskilt lämplig för din hudtyp och tillstånd. Inkludera hur dess huvudingredienser kommer att gynna dina specifika hudproblem och tydliga användningsinstruktioner (när och hur den ska appliceras). Gör det personligt genom att använda "din hud" och "du" i beskrivningen;
Baserat på denna hudanalys, vilken av följande produkter är bäst som exfoliant? Svara endast med produktnamnet exakt som det visas: Paula's Choice 2% BHA;
Baserat på din hudanalys, ge en detaljerad men koncis förklaring till varför denna exfoliant är särskilt lämplig för din hudtyp och tillstånd. Inkludera hur dess huvudingredienser kommer att gynna dina specifika hudproblem och tydliga användningsinstruktioner (när och hur den ska appliceras). Gör det personligt genom att använda "din hud" och "du" i beskrivningen;
Baserat på denna hudanalys, vilken av följande produkter är bäst som solskydd? Svara endast med produktnamnet exakt som det visas: La Roche-Posay Anthelios, EVY Technology Sunscreen;
Baserat på din hudanalys, ge en detaljerad men koncis förklaring till varför detta solskydd är särskilt lämplig för din hudtyp och tillstånd. Inkludera hur dess huvudingredienser kommer att gynna dina specifika hudproblem och tydliga användningsinstruktioner (när och hur det ska appliceras). Gör det personligt genom att använda "din hud" och "du" i beskrivningen;
Baserat på denna hudanalys, vilken av följande produkter är bäst som retinol? Svara endast med produktnamnet exakt som det visas: The Ordinary Retinol 1%;
Baserat på din hudanalys, ge en detaljerad men koncis förklaring till varför denna retinol är särskilt lämplig för din hudtyp och tillstånd. Inkludera hur dess huvudingredienser kommer att gynna dina specifika hudproblem och tydliga användningsinstruktioner (när och hur den ska appliceras). Gör det personligt genom att använda "din hud" och "du" i beskrivningen`
};