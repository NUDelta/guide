export default function (BrowserPolicy) {
  BrowserPolicy.content.allowEval(); // TODO: remove this for prod
  BrowserPolicy.content.allowOriginForAll("*.googleapis.com");
  BrowserPolicy.content.allowOriginForAll("*.gstatic.com");
  BrowserPolicy.content.allowOriginForAll("*.bootstrapcdn.com");
  BrowserPolicy.content.allowFontDataUrl();
}
