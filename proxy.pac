function FindProxyForURL (url, host) {
    if ( dnsDomainIs(host, "fusion.softvision.ro") )   { return "PROXY proxy.softvision.ro:8000"; }
    if ( shExpMatch(host, "*.em2.oraclecloud.com") )   { return "PROXY proxy.softvision.ro:8000"; }
    return "DIRECT";
}
