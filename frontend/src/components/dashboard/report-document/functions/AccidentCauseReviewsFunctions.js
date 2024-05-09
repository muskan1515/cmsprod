function removeHtmlTags(html) {
    return html?.replace(/<(\/?[^>]+)>/g, function (match, p1) {
      return p1?.startsWith("/") ? "</b>" : "<b>";
    });
  }

  module.exports={
    removeHtmlTags
  }