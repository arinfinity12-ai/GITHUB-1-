/**
 * Site content for Vanguard Engineering Group.
 * All user-facing copy lives here in Italian.
 * Code/keys in English, values in Italian.
 */

export const content = {
  brand: {
    name: "Vanguard Engineering Group",
    short: "Vanguard",
    tagline: "Non vendiamo AI. Vendiamo decisioni migliori.",
    city: "Padova, Italia",
    email: "letizia@vanguard-engineering.it",
  },

  nav: {
    links: [
      { label: "Manifesto", href: "/manifesto" },
      { label: "Per Chi", href: "/#verticali" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Chi Siamo", href: "/chi-siamo" },
    ],
    cta: { label: "Diagnostic Call", href: "/diagnostic-call" },
  },

  hero: {
    headline:
      "La tua azienda non ha un problema di marketing. Ha un problema di sistema operativo.",
    subheadline:
      "Vanguard Engineering Group™ è l'infrastruttura di intelligenza artificiale che trasforma PMI italiane da operative-reattive a guidate dai dati. In 90 giorni. Senza sostituire una persona.",
    primaryCta: { label: "Prenota una Diagnostic Call", href: "/diagnostic-call" },
    secondaryCta: { label: "Leggi il Manifesto", href: "/manifesto" },
    micro: "60 minuti · Gratuita · Una sola volta per azienda",
    kpis: [
      { value: "+37%", label: "Margine" },
      { value: "€18K", label: "Risparmio/mese" },
      { value: "14 giorni", label: "Lead time" },
      { value: "2,4x", label: "Velocità decisioni" },
      { value: "−78%", label: "Ore-uomo" },
      { value: "€40K", label: "Opportunità annue" },
      { value: "8 sett.", label: "Build" },
      { value: "+34%", label: "Margine/modello" },
      { value: "ROI 18m", label: "Payback" },
    ],
  },

  problem: {
    heading: "Riconosci uno di questi sintomi?",
    sub: "Tre segnali che il tuo business è diventato troppo grande per il modo in cui lo gestisci.",
    cards: [
      {
        title: "Decisioni a sensazione",
        body: "Hai 8, 15, 40 persone. Ma quando devi decidere se assumere, dove investire, quale linea spingere — ti basi sull'esperienza, non sui dati. Non perché sei improvvisato. Perché i dati che hai sono frammentati su 12 strumenti diversi e nessuno li legge insieme.",
      },
      {
        title: "Il collo di bottiglia sei tu",
        body: "Sei l'unico che sa davvero come funziona tutto. Se vai in ferie per 10 giorni, qualcosa si rompe. Se ti ammali, si ferma metà operatività. Non è un problema di persone — le tue persone sono brave. È che il sistema vive nella tua testa. E quello che vive nella tua testa non si può scalare.",
      },
      {
        title: "Lavori per i tuoi tool",
        body: "CRM, gestionale, calendario, fogli Excel, WhatsApp, email, Notion, Trello, Drive... Hai pagato licenze per 9.000€/anno e usi il 12% delle funzionalità. La verità è che non hai bisogno di un altro tool. Hai bisogno di un sistema che li faccia parlare tra loro — e ti dica solo le cose che contano.",
      },
    ],
    closing:
      "Se hai annuito almeno una volta, il problema non è la tua bravura. È l'architettura.",
  },

  mechanism: {
    heading: "Vanguard Engineering Group™",
    subHeading: "Il sistema operativo per imprenditori che vogliono scalare.",
    sub: "Tre layer. Una sola architettura. Un unico obiettivo: ridarti il controllo.",
    layers: [
      {
        number: "01",
        icon: "Search",
        title: "Diagnostic Engine",
        body: "Mappiamo dove perdi tempo, dove perdi soldi, dove perdi decisioni. Non un audit Excel. Un'analisi chirurgica del tuo flusso operativo reale: ti consegniamo un documento dove vedi — in numeri — quanto ti costa ogni inefficienza ogni mese.",
        output:
          "Vanguard Diagnostic Report — 14-22 pagine, numeri concreti, priorità di intervento.",
      },
      {
        number: "02",
        icon: "Settings",
        title: "Intelligence Infrastructure",
        body: "Costruiamo il sistema AI sopra i tuoi processi, non sotto. Non ti diciamo di cambiare come lavori. Studiamo come lavori e costruiamo l'AI intorno: estrazione dati, automazione decisioni ripetitive, generazione documenti, classificazione, predizione. Non un chatbot. Non un tool. Un'infrastruttura cucita su misura.",
        output:
          "Sistema attivo e integrato. Tu continui a lavorare come prima. Solo che metà del lavoro non lo fai più tu.",
      },
      {
        number: "03",
        icon: "BarChart3",
        title: "Decision Dashboard",
        body: "Ti consegniamo il controllo operativo, vivo, in tempo reale. Una dashboard che ti dice ogni mattina dove stanno le opportunità, dove stai perdendo, quali 3 decisioni prendere oggi. Tutto in una schermata. Tutto in italiano. Tutto dal tuo telefono.",
        output:
          "Vanguard Control Tower — il tuo posto di comando, dove vedi l'azienda invece di nuotarci dentro.",
      },
    ],
    closing:
      "Diagnosi → Infrastruttura → Decisione. In questo ordine. Senza scorciatoie. Perché senza diagnosi, l'AI è un costume. Senza infrastruttura, è uno script. Senza dashboard, è invisibile. Vanguard è le tre cose insieme.",
  },

  howItWorks: {
    heading: "Come lavoriamo. Esattamente.",
    sub: "Quattro fasi. 90 giorni. Zero promesse vaghe.",
    phases: [
      {
        number: "01",
        title: "Diagnostic Call",
        time: "Giorno 0",
        badge: "60 minuti · Gratis · Una volta",
        body: "Una chiamata diagnostica con Riccardo. Niente pitch, niente slide promozionali. Mappiamo i tuoi 3 colli di bottiglia operativi, identifichiamo dove perdi tempo/soldi/decisioni, quantifichiamo in € il costo dell'inazione. Ti porti via una scheda diagnostica con 3 problemi e numeri stimati — anche se non lavoreremo insieme.",
        note: "Se dopo 60 minuti non vediamo almeno €40K di opportunità annuale, ti offriamo noi il caffè la prossima volta che passi a Padova.",
      },
      {
        number: "02",
        title: "Vanguard Diagnostic Report",
        time: "Settimana 1-2",
        badge: "14-22 pagine · Su misura",
        body: "Per due settimane scaviamo: processi, persone, strumenti, numeri. Output: mappa completa dei tuoi flussi operativi, inefficienze quantificate in ore/€/anno, architettura AI proposta layer per layer, roadmap implementativa con milestone settimanali, stima ROI a 6-12-24 mesi.",
        note: "Il report ti rimane comunque. Anche se decidessi di implementare con un altro fornitore. È tuo.",
      },
      {
        number: "03",
        title: "Infrastructure Build",
        time: "Settimana 3-10",
        badge: "8 settimane · In parallelo",
        body: "Mentre la tua azienda continua a funzionare normalmente, costruiamo il sistema Vanguard sopra i tuoi processi esistenti. Integrazione con i tuoi tool attuali (CRM, gestionale, comunicazioni), costruzione automazioni e workflow AI su misura, setup della Decision Dashboard, test e fine-tuning con il tuo team, training operativo per chi userà il sistema.",
        note: "Riunione operativa ogni giovedì alle 9:00. 30 minuti. Stato avanzamento + decisioni. Mai di più.",
      },
      {
        number: "04",
        title: "Control Handover",
        time: "Settimana 11-12",
        badge: "Sistema attivo",
        body: "Il sistema è in produzione. La dashboard è attiva. Il tuo team è formato. Ti consegniamo: Vanguard Control Tower attiva sul tuo dominio, documentazione operativa completa, 3 mesi di supporto incluso (chat + call mensile), accesso al nostro reparto di monitoring continuo.",
        note: "Da qui due strade: gestione autonoma (DIY) oppure Vanguard Operating Partnership — supporto continuativo mensile per ottimizzazione e scaling.",
      },
    ],
    closing:
      "90 giorni. Quattro fasi. Una promessa: alla fine, hai un sistema che lavora per te — non l'opposto.",
  },

  caseStudy: {
    heading: "Il caso che ci ha cambiato direzione.",
    sub: "Un'azienda calzaturiera del Veneto, una sfida tecnica considerata impossibile, e l'esperto che ha detto sì.",
    context: [
      { label: "Settore", value: "Calzature di alta gamma — fatturato 3,8M€" },
      { label: "Sede", value: "Veneto" },
      { label: "Reparto target", value: "Modelleria, grading, marker making" },
      { label: "Tempo medio per nuovo modello", value: "9-14 giorni di lavoro tecnico" },
    ],
    problemTitle: "Il Problema",
    problemBody:
      "Ogni nuova collezione richiedeva 60-80 ore di lavoro CAD specialistico per modellare, gradare e ottimizzare il piazzamento dei pezzi sulla pelle.",
    consequences: [
      "Lead time troppo lunghi per i buyer internazionali",
      "Margine eroso da ore-uomo specialistiche introvabili sul mercato",
      "Dipendenza totale da 1 modellista senior — se si fermava lui, si fermava la produzione",
    ],
    quote: {
      text: "Sapevamo che l'AI poteva aiutarci. Ma chiunque interpellassimo voleva venderci ChatGPT o un sistema gestionale. Nessuno parlava la lingua del CAD calzaturiero.",
      author: "Titolare azienda calzaturiera, Veneto",
    },
    solutionTitle: "La Soluzione: Vanguard CAD Margin Engine",
    solutionBody:
      "Per questo specifico problema abbiamo costruito un sistema verticale dedicato — in partnership con Cristian Salmaso, esperto CAD calzaturiero con 15+ anni di esperienza Comelz.",
    architecture: [
      {
        label: "Layer Diagnostic",
        text: "mappatura completa flusso modelleria",
      },
      {
        label: "Layer Intelligence",
        text: "sistema AI proprietario per grading automatico + marker making ottimizzato",
      },
      {
        label: "Layer Dashboard",
        text: "controllo tempi, margini per modello, predizione consumi pelle",
      },
    ],
    kpiTitle: "RISULTATI TARGET (6 mesi)",
    kpiTable: [
      { kpi: "Tempo modello completo", before: "9-14 giorni", after: "2-3 giorni" },
      { kpi: "Riduzione ore-uomo CAD", before: "—", after: "−78%" },
      { kpi: "Margine per modello", before: "base 100", after: "+34%" },
      { kpi: "Dipendenza modellista senior", before: "totale", after: "distribuita" },
    ],
    kpiNote:
      "Caso reale, in implementazione attiva. Numeri operativi disponibili sotto NDA per prospect qualificati.",
    closing:
      "Perché questo caso è importante: perché dimostra che Vanguard non vende AI generica. Vanguard costruisce sistemi verticali, cuciti sul settore specifico, in partnership con esperti operativi che parlano la lingua del tuo settore.",
    cta: {
      label: "Per aziende calzaturiere 2M€+ → Scopri Vanguard CAD Margin Engine",
      href: "/per-calzaturieri",
    },
  },

  verticals: {
    heading: "Vanguard non vende a tutti. Non con lo stesso sistema.",
    sub: "Per ogni settore in cui operiamo, un'architettura cucita su misura.",
    items: [
      {
        id: "cad",
        featured: true,
        emoji: "👞",
        name: "VANGUARD CAD",
        forWhom: "Per Calzaturieri",
        body: "Modelleria, grading, marker making. Tempi di sviluppo collezione ridotti dell'80%.",
        target: "Aziende calzaturiere da 2M€+ con reparto CAD interno",
        ticket: "Da €25.000",
        partner: "Partner tecnico: Cristian Salmaso (Starseed International)",
        cta: { label: "Scopri Vanguard CAD →", href: "/per-calzaturieri" },
      },
      {
        id: "clinic",
        featured: false,
        emoji: "🦷",
        name: "CLINIC GROWTH SYSTEM",
        forWhom: "Per Cliniche",
        body: "Recall pazienti, conferme appuntamenti, gestione recensioni. Senza una persona in più.",
        target: "Studi dentistici, cliniche estetiche e mediche",
        ticket: "Da €4.500 + €450/mese",
        partner: "Brand operativo: Luca Mancini",
        cta: { label: "Scopri Clinic Growth →", href: "#" },
      },
      {
        id: "realestate",
        featured: false,
        emoji: "🏠",
        name: "REAL ESTATE ENGINE",
        forWhom: "Per Agenzie Immobiliari",
        body: "Da agenzie reattive ad agenzie guidate dai dati. Lead, qualifica, mandato, chiusura. In un unico sistema.",
        target: "Agenzie luxury, broker manager, network",
        ticket: "Da €7.000 + €700-1.200/mese",
        partner: "Brand operativo: Marco Conti",
        cta: { label: "Scopri Real Estate Engine →", href: "#" },
      },
      {
        id: "whitelabel",
        featured: false,
        emoji: "🎯",
        name: "VANGUARD WHITE LABEL",
        forWhom: "Per Agenzie Marketing",
        body: "L'infrastruttura AI che la tua agenzia rivende ai propri clienti, brandizzata col tuo nome.",
        target: "Agenzie marketing 4+ collaboratori",
        ticket: "Da €12.000 setup + licenza mensile",
        partner: "Modello: Partner ufficiale Vanguard",
        cta: { label: "Diventa Partner →", href: "#" },
      },
      {
        id: "foundation",
        featured: false,
        emoji: "🏢",
        name: "VANGUARD FOUNDATION",
        forWhom: "Per PMI Generaliste",
        body: "Quando il tuo settore non è uno dei nostri verticali, ma il problema è lo stesso: il sistema operativo.",
        target: "PMI Veneto 2-15M€ in cerca di sistema",
        ticket: "Da €8.000 + retainer mensile",
        partner: "Approccio: Su misura, con diagnosi preliminare",
        cta: { label: "Prenota Diagnostic Call →", href: "/diagnostic-call" },
      },
    ],
  },

  aboutDuo: {
    heading: "Due persone. Due ruoli. Una squadra.",
    sub: "Vanguard non è uno studio. È una collaborazione operativa.",
    photoCaption: "Foto duo Riccardo + Letizia",
    architect: {
      name: "RICCARDO PIOMBINO",
      role: "Vanguard Architect",
      badgeClass: "bg-signal text-white",
      body: "Tecnico. Architetto di sistemi. Quello che entra nei tuoi processi e li riprogetta. 15+ implementazioni AI in PMI italiane. Background in architetture cloud, automazione enterprise, intelligenza artificiale applicata al business operativo. Non vende. Diagnostica. Se Riccardo arriva in un'azienda, è perché ha già letto il problema. Se entra in una call, è perché ha già letto i numeri.",
      quote: "Non vendo AI. Vendo decisioni migliori.",
    },
    bridge: {
      name: "LETIZIA",
      role: "Vanguard Bridge",
      badgeClass: "bg-gold text-white",
      body: "Strategia commerciale. Relazioni. Ponte umano tra imprenditori e tecnologia. 20+ anni di network nell'imprenditoria Veneta. Specialista nel costruire il primo \"sì\" — quel momento in cui l'imprenditore capisce che parla con qualcuno che lo capisce davvero. Non chiude. Apre porte. Se Letizia ti chiama, è perché ha visto qualcosa nella tua azienda che vale 60 minuti di Riccardo.",
    },
    why: {
      heading: "Perché due persone, non una?",
      body: "Perché vendere infrastruttura AI a un'azienda da 2-10M€ non è un lavoro da freelance. È un lavoro che richiede: diagnosi tecnica profonda (Riccardo) e relazione umana continua (Letizia). Provare a fare entrambe le cose con una persona sola è il motivo per cui il 90% dei progetti AI falliscono nelle PMI italiane. Vanguard è progettata per non sbagliare quella parte.",
    },
  },

  faq: {
    heading: "Domande che ci fanno spesso. E le risposte oneste.",
    items: [
      {
        q: "Quanto costa Vanguard?",
        a: "Dipende dal verticale e dalla complessità del tuo sistema. I nostri progetti partono da €4.500 (Clinic Growth System base) e arrivano a €50.000+ per implementazioni complesse multi-reparto. Non lavoriamo sotto soglia perché un sistema AI fatto male costa più di non averlo affatto. E noi non vogliamo regalarti quel problema. La Diagnostic Call è sempre gratuita. Lì capiamo insieme se ha senso parlarne.",
      },
      {
        q: "In quanto tempo vedo risultati?",
        a: "Dipende cosa intendi per risultato. Settimana 2: vedi i numeri del tuo sistema operativo attuale (Diagnostic Report). Spesso è già un punto di svolta. Settimana 10: sistema attivo, prime automazioni in produzione. Mese 3-6: ROI quantificabile e dashboard operativa. Mese 12+: trasformazione strutturale del business. Non promettiamo '+200% lead in 30 giorni'. Promettiamo un'infrastruttura che dura anni.",
      },
      {
        q: "Sostituite le persone con l'AI?",
        a: "No. E se qualcuno ti vende questa promessa, sta mentendo o non capisce cosa sta vendendo. Vanguard non sostituisce persone. Vanguard toglie alle persone il lavoro ripetitivo, in modo che facciano il lavoro per cui le hai assunte. Le aziende che funzionano bene non hanno meno persone con l'AI. Hanno le stesse persone che lavorano meglio.",
      },
      {
        q: "Cosa succede se cambio idea durante il progetto?",
        a: "Hai due punti di uscita: Dopo la Diagnostic Call (Fase 1): zero impegno, zero costo. Dopo il Diagnostic Report (Fase 2): il report è tuo, gli avanzamenti tecnici sono documentati. Esci pagando solo Fase 1+2. Non firmiamo contratti di 36 mesi. Non vincoliamo clienti. Se sei felice, resti. Se non lo sei, non vogliamo trattenerti.",
      },
      {
        q: "Già lavoro con un'agenzia di marketing. Vanguard la sostituisce?",
        a: "No. Vanguard opera in un layer diverso. L'agenzia di marketing gestisce comunicazione e acquisizione. Vanguard costruisce il sistema operativo che fa funzionare l'azienda mentre l'agenzia porta clienti. Lavoriamo bene insieme alle agenzie marketing, non al loro posto. Anzi: alcune agenzie sono nostre clienti dirette (vedi Vanguard White Label).",
      },
      {
        q: "Devo già usare AI per lavorare con voi?",
        a: "No. La maggior parte dei nostri clienti, prima di Vanguard, usava email, Excel, WhatsApp e un gestionale anni '90. Quello che serve non è la tua esperienza tecnica. Serve la tua volontà di mettere ordine in quello che fai. Della parte tecnica ci occupiamo noi. Tu metti la chiarezza sul business. Noi mettiamo l'architettura sull'AI.",
      },
      {
        q: "Lavorate solo in Veneto?",
        a: "No. Operiamo in tutta Italia. La sede operativa è a Padova — quindi se sei nel Triveneto è probabile che ci vediamo di persona almeno 2-3 volte durante il progetto. Per il resto d'Italia, lavoriamo in remoto con call settimanali. I clienti calzaturieri e real estate luxury, in particolare, preferiscono il rapporto di persona. Lo capiamo. Ci spostiamo.",
      },
    ],
  },

  finalCta: {
    heading: "Vanguard non lavora con tutti.",
    sub: "Non per snobismo. Per matematica.",
    body1:
      "Costruire un'infrastruttura AI personalizzata richiede 12-16 settimane di lavoro intenso, da entrambe le parti. Se non c'è allineamento, è denaro buttato — il tuo e il nostro.",
    body2:
      "Per questo la Diagnostic Call non è una 'call commerciale'. È una verifica reciproca.",
    columns: {
      left: "Tu valuti se possiamo davvero aiutarti.",
      right: "Noi valutiamo se sei nelle condizioni giuste per essere aiutato.",
    },
    checklistHeading: "Cosa serve per prenotarla",
    checklist: [
      "Sei imprenditore, CEO o decisore operativo",
      "La tua azienda fattura più di 2M€/anno (o sei un libero professionista con ticket alto)",
      "Hai 60 minuti reali in agenda, non distratto",
      "Vieni con i tuoi numeri reali, non con quelli \"indicativi\"",
    ],
    checklistClosing:
      "Se questi 4 punti sono veri, prenota. Se anche uno non lo è, aspetta a contattarci.",
    cta: { label: "PRENOTA LA DIAGNOSTIC CALL", href: "/diagnostic-call" },
    micro: "60 minuti · Gratuita · Una sola volta per azienda",
    footerAlt:
      "Se hai dubbi sull'allineamento, scrivi a Letizia prima di prenotare. Risponde personalmente entro 24 ore.",
    email: "letizia@vanguard-engineering.it",
  },

  diagnosticCall: {
    heading: "Prenota la tua Diagnostic Call",
    sub: "60 minuti con Riccardo. Gratuita. Una sola volta per azienda.",
    formIntro:
      "Compila i campi qui sotto. Letizia ti risponde entro 24 ore con due o tre slot disponibili.",
    fields: {
      name: "Nome completo",
      email: "Email",
      phone: "Telefono",
      company: "Azienda",
      revenue: "Fatturato annuale",
      source: "Come ci hai conosciuto?",
      problem: "Qual è il problema principale che vorresti risolvere?",
    },
    options: {
      revenue: ["< 1M€", "1-2M€", "2-5M€", "5-10M€", "10M€+"],
      source: [
        "LinkedIn",
        "Referral Letizia",
        "Google Search",
        "Caso studio/articolo",
        "Altro",
      ],
    },
    submit: "Invia richiesta",
    submitting: "Invio in corso…",
    errors: {
      name: "Inserisci il tuo nome completo",
      email: "Inserisci un'email valida",
      phone: "Inserisci un numero di telefono valido",
      company: "Inserisci il nome dell'azienda",
      revenue: "Seleziona una fascia di fatturato",
      source: "Seleziona un'opzione",
      problemMin: "Descrivi il problema con almeno 20 caratteri",
      problemMax: "Massimo 500 caratteri",
      generic: "Si è verificato un errore. Riprova tra qualche istante.",
    },
  },

  thankYou: {
    heading: "Grazie.",
    sub: "Letizia ti contatterà entro 24 ore.",
    body: "Nel frattempo, se hai informazioni utili da aggiungere (numeri, screenshot, dettagli) puoi rispondere alla mail di conferma che ti arriva tra qualche minuto.",
    cta: { label: "Torna alla home", href: "/" },
  },

  footer: {
    tagline: "Non vendiamo AI. Vendiamo decisioni migliori.",
    columns: {
      links: {
        heading: "Vanguard",
        items: [
          { label: "Manifesto", href: "/manifesto" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Chi Siamo", href: "/chi-siamo" },
          { label: "Diagnostic Call", href: "/diagnostic-call" },
        ],
      },
      contact: {
        heading: "Contatti",
        email: "letizia@vanguard-engineering.it",
        city: "Padova, Italia",
      },
    },
    legal: "© 2026 Vanguard Engineering Group",
    privacy: { label: "Privacy", href: "/privacy" },
  },

  stubs: {
    manifesto: {
      heading: "Il Manifesto",
      body: "Stiamo finendo di scriverlo. Coming soon.",
    },
    chiSiamo: {
      heading: "Chi Siamo",
      body: "Pagina in costruzione. Coming soon.",
    },
    caseStudies: {
      heading: "Case Studies",
      body: "Stiamo selezionando i casi pubblicabili. Coming soon.",
    },
  },
} as const;

export type SiteContent = typeof content;
