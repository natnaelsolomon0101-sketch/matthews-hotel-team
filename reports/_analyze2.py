import re
from collections import Counter

def extract(fn, prefix):
    with open(fn) as f: h = f.read()
    print(f'\n=== {fn} ===')
    print('Title:', re.findall(r'<title>([^<]+)</title>', h)[:1])
    print('Author meta:', re.findall(r'<meta[^>]+name="author"[^>]+content="([^"]+)"', h)[:3])
    print('Author JSON:', re.findall(r'"author"[^}]*"name"\s*:\s*"([^"]+)"', h)[:5])
    hrefs = re.findall(rf'href="({prefix}[^"#?]+)"', h)
    pcount = Counter()
    for u in set(hrefs):
        parts = u.strip('/').split('/')
        # second meaningful segment
        if len(parts) >= 3:
            pcount[parts[2]] += 1
        elif len(parts) >= 2:
            pcount[parts[1]] += 1
    print(f'Top sub-paths under {prefix}:')
    for k,v in pcount.most_common(15): print(f'  {k}: {v}')
    print('Headers:')
    for hh in re.findall(r'<h[123][^>]*>(.*?)</h[123]>', h, flags=re.S)[:12]:
        t = re.sub(r'<[^>]+>', ' ', hh).strip()
        t = re.sub(r'\s+', ' ', t)
        if t: print('  ', t[:160])

extract('/tmp/agent-a/jll_hotels.html', '/en-us/')
extract('/tmp/agent-a/cw_industry_idx.html', '/en/united-states/')
extract('/tmp/agent-a/hvs_article.html', '/')
extract('/tmp/agent-a/berk_specialty_pg.html', '/')
extract('/tmp/agent-a/berk_location.html', '/')
extract('/tmp/agent-a/eastdil_home.html', '/')
extract('/tmp/agent-a/hwe_tx.html', '/')
extract('/tmp/agent-a/mm_market_austin.html', '/')
extract('/tmp/agent-a/mm_property.html', '/')
