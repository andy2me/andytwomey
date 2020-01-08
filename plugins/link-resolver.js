export default function(doc) {
  if (doc.isBroken) {
    return "/not-found";
  }

  if (doc.type === "blog_home") {
    return "/blog";
  }

  if (doc.type === "post") {
    return "/post/" + doc.uid;
  }

  return "/not-found";
}
