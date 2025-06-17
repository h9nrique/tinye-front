export function ensureValidUrl(link: string) {
  // Regex para verificar se começa com protocolo seguido de :
  const protocolRegex = /^[a-zA-Z]+:\/\//;

  if (protocolRegex.test(link)) {
    return link;
  } else {
    return "https://" + link;
  }
}
