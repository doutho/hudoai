import type { Language } from "./types.ts";

export const geminiPrompts: Record<Language, string> = {
  en: `Please respond in the following format, answers separated by semicolons (;):
Is the person's skin in the image oily, combination, dry, or normal?;
Is the skin tone pale white, white, olive, moderately brown, dark brown, black?;
What is the person's approximate age?;
Does the person have acne? No, mild, moderate, severe.;
Based on this skin analysis, which of the following products is best as a moisturizer? Answer only with the product name exactly as it appears: CeraVe Moisturizing Lotion, La Roche-Posay Effaclar Mat;
For the chosen moisturizer, provide a personalized description explaining why it's perfect for your skin type and condition. Include how its ingredients will benefit your specific skin needs and how you should apply it;
Based on this skin analysis, which of the following products is best as a cleanser? Answer only with the product name exactly as it appears: CeraVe Hydrating Facial Cleanser, Cetaphil Gentle Skin Cleanser;
For the chosen cleanser, provide a personalized description explaining why it's ideal for your skin type. Include how it will help address your specific skin concerns and the best way for you to use it;
Based on this skin analysis, which of the following products is best as an exfoliant? Answer only with the product name exactly as it appears: Paula's Choice 2% BHA;
For the chosen exfoliant, provide a personalized description explaining why it's suitable for your skin type and concerns. Include specific benefits for your skin and how you should incorporate it into your routine;
Based on this skin analysis, which of the following products is best as a sunscreen? Answer only with the product name exactly as it appears: La Roche-Posay Anthelios, EVY Technology Sunscreen;
For the chosen sunscreen, provide a personalized description explaining why it's perfect for your skin tone and type. Include how it will protect your specific skin needs and how you should apply it;
Based on this skin analysis, which of the following products is best as a retinol? Answer only with the product name exactly as it appears: The Ordinary Retinol 1%;
For the chosen retinol, provide a personalized description explaining why it's ideal for your skin's needs. Include how it will benefit your specific skin concerns and how you should use it in your routine`,

  sv: `Svara i följande format, svar separerade med semikolon (;):
Är personens hud i bilden oljig, kombinerad, torr eller normal?;
Är hudtonen blek vit, vit, olivfärgad, måttligt brun, mörkbrun, svart?;
Vad är personens ungefärliga ålder?;
Har personen akne? Nej, mild, måttlig, svår.;
Baserat på denna hudanalys, vilken av följande produkter är bäst som fuktgivare? Svara endast med produktnamnet exakt som det visas: CeraVe Moisturizing Lotion, La Roche-Posay Effaclar Mat;
För den valda fuktgivaren, ge en personlig beskrivning som förklarar varför den är perfekt för din hudtyp och tillstånd. Inkludera hur ingredienserna kommer att gynna dina specifika hudbehov och hur du ska applicera den;
Baserat på denna hudanalys, vilken av följande produkter är bäst som rengöring? Svara endast med produktnamnet exakt som det visas: CeraVe Hydrating Facial Cleanser, Cetaphil Gentle Skin Cleanser;
För den valda rengöringen, ge en personlig beskrivning som förklarar varför den är ideal för din hudtyp. Inkludera hur den kommer att hjälpa till med dina specifika hudproblem och det bästa sättet för dig att använda den;
Baserat på denna hudanalys, vilken av följande produkter är bäst som exfoliant? Svara endast med produktnamnet exakt som det visas: Paula's Choice 2% BHA;
För den valda exfolianten, ge en personlig beskrivning som förklarar varför den passar din hudtyp och dina problem. Inkludera specifika fördelar för din hud och hur du bör införliva den i din rutin;
Baserat på denna hudanalys, vilken av följande produkter är bäst som solskydd? Svara endast med produktnamnet exakt som det visas: La Roche-Posay Anthelios, EVY Technology Sunscreen;
För det valda solskyddet, ge en personlig beskrivning som förklarar varför det är perfekt för din hudton och typ. Inkludera hur det kommer att skydda dina specifika hudbehov och hur du ska applicera det;
Baserat på denna hudanalys, vilken av följande produkter är bäst som retinol? Svara endast med produktnamnet exakt som det visas: The Ordinary Retinol 1%;
För den valda retinolen, ge en personlig beskrivning som förklarar varför den är ideal för dina hudbehov. Inkludera hur den kommer att gynna dina specifika hudproblem och hur du ska använda den i din rutin`
};