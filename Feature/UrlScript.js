UrlScript = {
  createUrlScript: ({commandName, browser, url, rcLocation}) => {
    return {
      standAlone: `alias ${command}='open -a "${browser}" "${url}"'`,
      inScript: `open -a "${browser}" "${url}"`,
      rc: `echo alias ${command}='open -a "${browser}" "${url}"' >> ${rcLocation}`,
    }
  }
}