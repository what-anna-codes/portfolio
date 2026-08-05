export interface IMoment {
  id: string;
  title: string;
  lead: string;
  column: number;
  image?: string;
  icon?: string;
  projectId?: string;
}

export const journey_global = {
  title: "journey",
  moments: [
    {
      id: "moment_0009",
      column: 2,
      icon: "journey.png",
    },
    {
      id: "moment_0008",
      column: 2,
      image: "set.png",
      projectId: "project-001",
    },
    {
      id: "moment_0007",
      column: 0,
      image: "responder.png",
      projectId: "project-002",
    },
    {
      id: "moment_0006",
      column: 0,
      image: "inspection_reports.png",
      projectId: "project-007",
    },
    {
      id: "moment_0005",
      column: 1,
      icon: "discovering.png",
    },
    {
      id: "moment_0004",
      column: 2,
      icon: "promotion.png",
    },
    {
      id: "moment_0003",
      column: 2,
      image: "blog.png",
      projectId: "project-003",
    },

    {
      id: "moment_0002",
      column: 2,
      image: "user_panel.png",
      projectId: "project-004",
    },
    {
      id: "moment_0001",
      column: 2,
      icon: "first_job.png",
    },
  ],
};

export const journey_pl = {
  title: "droga",
  moments: [
    {
      ...journey_global.moments[0],
      date: "czerwiec 2026",
      title: "własne portfolio",
      lead: "Podsumowanie dotychczasowej pracy i krótkie wprowadzenie do głównych projektów.",

    },
    {
      ...journey_global.moments[1],
      date: "czerwiec 2026",
      title: "łamigłówka online",
      lead: "Najtrudniejszą częścią tego projektu nie było programowanie, lecz... zakończenie pracy. Historia o tym, dlaczego umiejętność odpuszczania kolejnych funkcjonalności bywa równie cenna jak ich tworzenie.",
    },
    {
      ...journey_global.moments[2],
      date: "marzec 2026",
      title: "frontend w aplikacji AI",
      lead: "Czy AI rzeczywiście pomaga programować lepiej, czy tylko szybciej? Kilka miesięcy pracy wystarczyło, by całkowicie zmienić moje podejście do wykorzystania modeli językowych w codziennej pracy developera.",
    },
    {
      ...journey_global.moments[3],
      date: "luty 2026",
      title: "automatyzacja i PowerBI",
      lead: "Pierwszy projekt z Power BI okazał się początkiem znacznie większej przygody niż tylko tworzenie dashboardów. To historia o wejściu w świat analizy danych, pracy z klientami i cyfrowej transformacji przedsiębiorstw.",
    },
    {
      ...journey_global.moments[4],
      date: "listopad 2025",
      title: "w stronę analizy danych",
      lead: "Jak połączyć kilka niespójnych raportów, nie zmuszając nikogo do zmiany sposobu pracy? Ten projekt pokazuje, że dobre rozwiązanie techniczne często polega na ułatwianiu życia użytkownikom, a nie narzucaniu im nowych procesów.",
    },
    {
      ...journey_global.moments[5],
      title: "już nie juniorka",
      date: "styczeń 2025",
      lead: "Co naprawdę odróżnia mid developera od juniora? Nie liczba lat doświadczenia, lecz sposób myślenia o kodzie, zmianach i problemach, które dopiero mogą się pojawić.",
    },
    {
      ...journey_global.moments[6],
      date: "2025",
      title: "mniejszy projekt, większa rola",
      lead: "Pierwszy projekt realizowany od początku do końca zmienia perspektywę. Nagle liczy się nie tylko kod, ale również decyzje projektowe, komunikacja z użytkownikami i odpowiedzialność za cały produkt.",
    },
    {
      ...journey_global.moments[7],
      title: "pierwszy duży release",
      date: "2024",
      lead: "Uruchomiliśmy nową platformę sprzedażową. Dopiero po wdrożeniu zrozumiałam skalę projektu — w dwa miesiące odwiedziło go ponad pół miliona użytkowników. To doświadczenie na długo zmieniło sposób, w jaki oceniam wartość technicznych decyzji.",
    },
    {
      ...journey_global.moments[8],
      date: "lipiec 2023",
      lead: "Na początku wydawało mi się, że frontend to przede wszystkim estetyka i precyzyjne odwzorowanie projektu. Szybko przekonałam się, że prawdziwym wyzwaniem jest przewidywanie tego, jak użytkownik spróbuje interfejs... zepsuć.",
      title: "dołączenie do zespołu RC",
    }
  ],
};

export const journey_en = {
  title: "journey",
  moments: [
    {
      ...journey_global.moments[0],
      date: "June 2026",
      title: "Portfolio: Storytelling Through UI",
      lead: "Should a portfolio showcase projects—or the person behind them? What started as a simple UI decision became an exploration of how interface design itself can tell a story.",
    },
    {
      ...journey_global.moments[1],
      date: "June 2026",
      title: "SET: Revisited",
      lead: "The hardest part of this project wasn't writing the code—it was knowing when to stop. A story about why postponing features can be just as important as building them.",
    },
    {
      ...journey_global.moments[2],
      date: "March 2026",
      title: "AI-Powered Email Responder",
      lead: "Does AI actually make us better developers, or just faster ones? A few months of working with AI completely changed the way I think about using language models in software development.",
    },
    {
      ...journey_global.moments[3],
      date: "February 2026",
      title: "Deep Dive into Data",
      lead: "My first Power BI project turned out to be the beginning of something much bigger than building dashboards. It's the story of discovering data analytics, working closely with clients, and helping companies navigate digital transformation.",
    },
    {
      ...journey_global.moments[4],
      date: "November 2025",
      title: "Discovering PowerBI",
      lead: "How do you unify years of inconsistent reports without forcing anyone to change the way they work? This project shows that the best technical solutions often improve existing workflows instead of replacing them.",
    },
    {
      ...journey_global.moments[5],
      date: "January 2025",
      title: "Not A Junior Anymore",
      lead: "What really separates a mid-level developer from a junior? As I discovered, it's less about experience and more about learning to anticipate change before it happens.",
    },
     {
      ...journey_global.moments[6],
      date: "2023",
      title: "Smaller Project, Bigger Role",
      lead: `
      A side project of the company - a food & dining blog - became a chance to take up a new role as the project's point person from the side of IT. Here started my curiosity for the big picture behind every app - meetings to hold, decisions to make, and responsibility for the final product.`,
    },
    {
      ...journey_global.moments[7],
      date: "2024",
      title: "First Major Launch",
      lead: "We launched a new sales platform. Two months after, I realized it already attracted over half a million users. That experience fundamentally changed how I evaluate technical decisions.",
    },
    {
      ...journey_global.moments[8],
      date: "July 2023",
      title: "The First Job",
      lead: "At first, I thought frontend development was mostly about making interfaces look right. It didn't take long to realize that the real challenge is designing for everything users might do to break them.",
    },
  ],
};
