/**
 * Runs before the page paints so dark-mode users never see a white flash.
 * Reads the saved choice from localStorage, falling back to the OS setting.
 */
const script = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
