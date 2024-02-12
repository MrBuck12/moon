"use strict";

function search(input, template) {
  try {

    return new URL(input).toString();
  } catch (err) {

  }

  try {

    const url = new URL(`http://${input}`);
    // only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
  }


  return template.replace("%s", encodeURIComponent(input));
}
