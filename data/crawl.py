import urllib2
import time

opener = urllib2.build_opener()
opener.addheaders.append(('Cookie', '__utma=26043429.1127220618.1382837670.1382837670.1382837670.1; __utmb=26043429.2.10.1382837670; __utmc=26043429; __utmz=26043429.1382837670.1.1.utmcsr=hackerrank.com|utmccn=(referral)|utmcmd=referral|utmcct=/ieeextreme; _hp2_ses.2468471743=*; _hp2_id.2468471743=8292095729237277.1228496386.2437386023; _hackerrank_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFRkkiJWU1MDU5N2I0Mzg1NzA0NDRlOWVmZGJiODJlODQxYThiBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMXRNZDZoam5RenFFQkFwb3BDNzlDbTdPZFQ4VS85cXpMM0NsMUxuamo1Z3M9BjsARkkiG3dhcmRlbi51c2VyLmhhY2tlci5rZXkGOwBUWwdbBmkChAZJIiIkMmEkMTAkeENSNVRWM3pwY0QyVG5JY05DRDE1LgY7AFQ%3D--9cb569fed2386223ff8f4891ec4781a805289501; hackerrank_mixpanel_token=3465dc24-f3bc-463a-887d-d7785908c44a; mp_bcb75af88bccc92724ac5fd79271e1ff_mixpanel=%7B%22distinct_id%22%3A%20%223465dc24-f3bc-463a-887d-d7785908c44a%22%2C%22mp_name_tag%22%3A%20%22RageQuit1%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.ca%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.ca%22%7D; __utma=26043429.1127220618.1382837670.1382837670.1382837670.1; __utmb=26043429.3.10.1382837670; __utmc=26043429; __utmz=26043429.1382837670.1.1.utmcsr=hackerrank.com|utmccn=(referral)|utmcmd=referral|utmcct=/ieeextreme; _chartbeat2=xvb2xpnnl874ywsu.1382837670676.1382838139225.1; _chartbeat_uuniq=1'))

opener.addheaders.append(("Referer", "https://ieee.hackerrank.com/contests/ieeextreme7/leaderboard/1"))
opener.addheaders.append(("X-CSRF-Token", "tMd6hjnQzqEBApopC79Cm7OdT8U/9qzL3Cl1Lnjj5gs="))
opener.addheaders.append(("X-Requested-With", "XMLHttpRequest"))

for i in range(0, 185):
	with open("data/" + str(i) + ".json", "wb") as file:
		response = opener.open("https://ieee.hackerrank.com/rest/contests/ieeextreme7/leaderboard?offset=" + str(i * 10) + "&limit=10&_=1382838578109")
		file.write(response.read())
		file.close()
		
		time.sleep(0.5)