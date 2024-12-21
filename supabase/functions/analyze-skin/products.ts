export const productDatabase = {
  moisturizers: [
    {
      asin: "4gjuUhU",
      name: "CeraVe Fuktgivande Lotion",
      description: "En lätt och snabbabsorberande fuktighetskräm för normal till torr hud. Innehåller ceramider och hyaluronsyra för optimal fuktbalans.",
      link: "https://amzn.to/4gjuUhU",
      image: "/lovable-uploads/9ba89514-66be-4fc0-ac2e-405dea2b5282.png",
      price: "",
      conditions: ["torr", "normal"]
    },
    {
      asin: "49GC11g",
      name: "La Roche-Posay Effaclar Mat",
      description: "Mattifierande fuktighetskräm speciellt utvecklad för fet och kombinerad hud. Hjälper till att kontrollera överskott av talg.",
      link: "https://amzn.to/49GC11g",
      image: "/lovable-uploads/9ba89514-66be-4fc0-ac2e-405dea2b5282.png",
      price: "",
      conditions: ["oljig", "kombinerad"]
    }
  ],
  cleansers: [
    {
      asin: "3ZFWcYG",
      name: "CeraVe Hydrerande Ansiktsrengöring",
      description: "Mild och skonsam rengöring som bevarar hudens naturliga skyddsbarriär. Perfekt för alla hudtyper.",
      link: "https://amzn.to/3ZFWcYG",
      image: "/lovable-uploads/97cbe5bb-0cdb-49c4-a50f-3e8762130c8d.png",
      price: "",
      conditions: ["torr", "normal", "känslig"]
    },
    {
      asin: "3P0SL9W",
      name: "Cetaphil Gentle Skin Cleanser",
      description: "Extra mild rengöring som passar även den känsligaste huden. Parfymfri och dermatologiskt testad.",
      link: "https://amzn.to/3P0SL9W",
      image: "/lovable-uploads/97cbe5bb-0cdb-49c4-a50f-3e8762130c8d.png",
      price: "",
      conditions: ["känslig", "torr"]
    }
  ],
  exfoliants: [
    {
      asin: "3Dv7cjX",
      name: "Paula's Choice 2% BHA",
      description: "Mild kemisk exfoliering med salicylsyra som rensar porerna på djupet. Passar alla hudtyper.",
      link: "https://amzn.to/3Dv7cjX",
      image: "/lovable-uploads/41aa444c-d9aa-4669-ac19-6d305f790ada.png",
      price: "",
      conditions: ["alla", "oljig", "kombinerad", "normal"]
    }
  ],
  sunscreens: [
    {
      asin: "4iEWyaE",
      name: "La Roche-Posay Anthelios",
      description: "Högeffektivt solskydd med SPF50+ som passar alla hudtyper. Lätt formula som inte känns klibbig.",
      link: "https://amzn.to/4iEWyaE",
      image: "/lovable-uploads/fcf9f462-dc9f-4e50-aa53-997e40706d1e.png",
      price: "",
      conditions: ["alla"]
    },
    {
      asin: "3VJiIyI",
      name: "EVY Technology Solskydd",
      description: "Innovativt svenskt solskydd som tränger in i hudens övre lager för långvarigt skydd.",
      link: "https://amzn.to/3VJiIyI",
      image: "/lovable-uploads/fcf9f462-dc9f-4e50-aa53-997e40706d1e.png",
      price: "",
      conditions: ["oljig", "kombinerad"]
    }
  ],
  retinols: [
    {
      asin: "3P3dDxo",
      name: "The Ordinary Retinol 1%",
      description: "Effektiv retinolbehandling för erfarna användare. Hjälper till att förbättra hudens struktur och ton.",
      link: "https://amzn.to/3P3dDxo",
      image: "/lovable-uploads/cb85aea1-30fa-4d32-be1a-359a57838f75.png",
      price: "",
      conditions: ["alla", "åldrande"]
    }
  ]
};

// Helper function to find the best product match based on skin condition
export const findBestProductMatch = (products: any[], condition: string): any => {
  // Convert condition to lowercase and split into keywords
  const conditionKeywords = condition.toLowerCase().split(/[,\s]+/);
  
  // Score each product based on how many condition matches it has
  const scoredProducts = products.map(product => {
    const score = product.conditions.reduce((acc: number, productCondition: string) => {
      if (conditionKeywords.some(keyword => 
          productCondition.toLowerCase().includes(keyword) || 
          keyword.includes(productCondition.toLowerCase()))) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return { ...product, score };
  });

  // Sort by score and return the best match
  // If no matches found, return the first product with "all" condition or the first product
  const bestMatch = scoredProducts.sort((a, b) => b.score - a.score)[0];
  if (bestMatch.score === 0) {
    return products.find(p => p.conditions.includes("alla")) || products[0];
  }
  return bestMatch;
};