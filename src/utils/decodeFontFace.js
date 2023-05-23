const flags = {
  ttf: "x-font-ttf",
  otf: "x-font-otf",
};

export default async function decodeFontFace(filename) {
  const filePath = `/font/${filename}`;

  const response = await fetch(filePath);

  if (!response.ok) return;

  const buffer = await response.arrayBuffer();
  const fontData = arrayBufferToBase64(buffer);

  const [_, extname] = filename.split(".");
  const flag = flags[extname];
  const base64Flag = `data:application/${flag};charset=utf-8;base64,`;

  return fontData;
}

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;

  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}
