"use client";
import "./globals.css";
import "./App.css";
import Nav from "./comp/nav";
import { DarkModeProvider, useDarkMode } from "./comp/darkMode-context";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/app/Redux/store";

function BodyWrapper({ children }: { children: React.ReactNode }) {
  const { darkMode } = useDarkMode();
  //úseEffëct: useEffect används i detta fall varje gång man trycker på "darkmode" knappen.
  //useEffecten kan man ge olika scenarion för att ske, som t.ex knapptryck eller när sidan "mounta"
  //mounting = När sidan startar upp.
  //if satsen tar bort eller lägger till ett klassnamn eller tar bort en klass från allt som ligger inför body.
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return <>{children}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <DarkModeProvider>
            <BodyWrapper>
              <Nav />
              {children}
            </BodyWrapper>
          </DarkModeProvider>
        </body>
      </html>
    </Provider>
  );
}
