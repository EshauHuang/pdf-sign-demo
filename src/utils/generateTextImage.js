import html2canvas from "html2canvas";

export default async function generateTextImage({ text, style }) {
  const textEl = document.createElement("span");

  Object.entries(style).forEach(([key, value]) => {
    textEl.style[key] = value;
  });

  textEl.innerText = text;
  document.body.appendChild(textEl);

  return new Promise((resolve, reject) => {
    html2canvas(textEl)
      .then((canvas) => {
        const width = canvas.width;
        const height = canvas.height;
        const dataUrl = canvas.toDataURL("image/png");

        resolve({ dataUrl, width, height });
      })
      .catch((error) => {
        console.error("Error with html2canvas:", error);
        reject(error);
      })
      .finally(() => {
        document.body.removeChild(textEl);
      });
  });
}
