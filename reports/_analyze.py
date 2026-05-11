import re, os, json, sys
files = [
    '/tmp/agent-a/cbre_alt.html',
    '/tmp/agent-a/jll_research.html',
    '/tmp/agent-a/nmrk_alt.html',
    '/tmp/agent-a/hunter_alt.html',
    '/tmp/agent-a/hvs_article.html',
    '/tmp/agent-a/cw_industry_idx.html',
    '/tmp/agent-a/berk_specialty_pg.html',
    '/tmp/agent-a/berk_location.html',
]
for fn in files:
    if not os.path.exists(fn):
        print(fn, 'MISSING'); continue
    with open(fn, encoding='utf-8', errors='ignore') as f:
        h = f.read()
    text = re.sub(r'<script[^>]*>.*?</script>', '', h, flags=re.S)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.S)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    wc = len(text.split())
    jsonld = re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', h, flags=re.S | re.I)
    types = set()
    for j in jsonld:
        for t in re.findall(r'"@type"\s*:\s*"([^"]+)"', j):
            types.add(t)
        for arr in re.findall(r'"@type"\s*:\s*\[([^\]]+)\]', j):
            for t in re.findall(r'"([^"]+)"', arr):
                types.add(t)
    links = re.findall(r'href=["\']([^"\']+)["\']', h)
    domain_match = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']https?://([^/"\']+)', h)
    domain = domain_match.group(1) if domain_match else ''
    internal = sum(1 for L in links if L.startswith('/') or (domain and domain in L))
    has_byline = bool(re.search(r'(by [A-Z][a-z]+\s[A-Z][a-z]+|"author"\s*:\s*\{)', h))
    print(f'{os.path.basename(fn)}\n  words: {wc}\n  jsonld_types: {sorted(types)}\n  internal_links: {internal}\n  byline: {has_byline}\n')
