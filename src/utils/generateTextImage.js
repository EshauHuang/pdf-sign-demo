import html2canvas from "html2canvas";

export default async function generateTextImage({ text, style }) {
  const wrapEl = document.createElement("div");
  const textEl = document.createElement("span");

  Object.entries(style).forEach(([key, value]) => {
    textEl.style[key] = value;
  });

  wrapEl.style.width = "280px";
  wrapEl.style.height = "72px";
  wrapEl.style.display = "flex";
  wrapEl.style.alignItems = "center";
  wrapEl.style.justifyContent = "center";
  wrapEl.style.border = "1px solid transparent";
  wrapEl.style.padding = "0.4rem 0.8rem";

  textEl.innerText = text;
  wrapEl.appendChild(textEl);
  document.body.appendChild(wrapEl);

  const { width: textWidth, height: textHeight } =
    wrapEl.getBoundingClientRect();

  try {
    // The scale is set to 2 for consistent image generation across devices, compensating for varying devicePixelRatio and ensuring the same image size and quality.
    const canvas = await html2canvas(wrapEl, {
      backgroundColor: null,
      scale: 2,
    });

    const dataUrl = canvas.toDataURL("image/png");

    return { dataUrl, width: textWidth, height: textHeight };
  } catch (error) {
    console.error("Error with html2canvas:", error);
    throw error;
  } finally {
    document.body.removeChild(wrapEl);
  }
}
