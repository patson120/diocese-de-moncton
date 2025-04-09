// Simule une réponse API avec du contenu HTML
export async function fetchHTMLContent() {
    // Simule un délai réseau
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      data: {
        html: `
          <div class="prose">
            <h2>Bienvenue sur le portail du diocèse</h2>
            <p>
              Notre mission est de <strong>servir</strong> et d'<em>accompagner</em> 
              la communauté catholique.
            </p>
            <ul>
              <li>Services pastoraux</li>
              <li>Accompagnement spirituel</li>
              <li>Formation continue</li>
            </ul>
          </div>
        `
      }
    };
  }