import { gebi } from "./../utils.js";

function randChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function libre() {
  let invidious = ["https://invidious.tiekoetter.com/feed/trending"];  
  let nitter = ["https://nitter.net", "https://nitter.weiler.rocks", "https://nitter.sethforprivacy.com", "https://nttr.stream", "https://nitter.cutelab.space", "https://nitter.nl", "https://nitter.mint.lgbt", "https://nitter.bus-hit.me", "https://fuckthesacklers.network", "https://nitter.esmailelbob.xyz", "https://tw.artemislena.eu", "https://nitter.winscloud.net", "https://nitter.tiekoetter.com", "https://nitter.spaceint.fr", "https://twtr.bch.bar", "https://nitter.privacy.com.de", "https://nitter.poast.org", "https://nitter.bird.froth.zone", "https://nitter.dcs0.hu", "https://twitter.dr460nf1r3.org", "https://nitter.garudalinux.org", "https://twitter.beparanoid.de", "https://n.ramle.be", "https://nitter.cz", "https://nitter.privacydev.net", "https://nitter.evil.site", "https://tweet.lambda.dance", "https://nitter.kylrth.com", "https://nitter.foss.wtf", "https://nitter.priv.pw", "https://nitter.tokhmi.xyz", "https://nitter.catalyst.sx", "https://unofficialbird.com", "https://nitter.projectsegfau.lt", "https://singapore.unofficialbird.com", "https://twt.funami.tech", "https://nitter.fprivacy.com", "https://canada.unofficialbird.com", "https://india.unofficialbird.com", "https://nederland.unofficialbird.com", "https://uk.unofficialbird.com", "https://n.l5.ca", "https://nitter.slipfox.xyz", "https://nitter.soopy.moe", "https://nitter.qwik.space", "https://read.whatever.social", "https://nitter.rawbit.ninja", "https://nt.vern.cc", "https://ntr.odyssey346.dev", "https://nitter.ir", "https://nitter.privacytools.io", "https://nitter.sneed.network", "https://n.sneed.network", "https://nitter.manasiwibi.com", "https://nitter.smnz.de", "https://nitter.twei.space", "https://nitter.inpt.fr", "https://nitter.d420.de", "https://nitter.caioalonso.com", "https://nitter.at", "https://nitter.drivet.xyz", "https://nitter.pw", "https://nitter.nicfab.eu", "https://bird.habedieeh.re"];
  let libreddit = ["https://libreddit.spike.codes", "https://libreddit.kavin.rocks", "https://reddit.invak.id", "https://lr.riverside.rocks", "https://libreddit.strongthany.cc", "https://libreddit.privacy.com.de", "https://libreddit.domain.glass", "https://r.nf", "https://reddit.stuehieyr.com", "https://lr.mint.lgbt", "https://libreddit.drivet.xyz", "https://libreddit.de", "https://libreddit.pussthecat.org", "https://libreddit.northboot.xyz", "https://leddit.xyz", "https://libreddit.hu", "https://libreddit.totaldarkness.net", "https://libreddit.esmailelbob.xyz", "https://lr.vern.cc", "https://libreddit.nl", "https://reddi.tk", "https://r.walkx.org", "https://libreddit.kylrth.com", "https://libreddit.tiekoetter.com", "https://reddit.rtrace.io", "https://libreddit.privacydev.net", "https://r.ahwx.org", "https://bob.fr.to", "https://libreddit.dcs0.hu", "https://reddit.dr460nf1r3.org", "https://rd.jae.su", "https://libreddit.foss.wtf", "https://libreddit.encrypted-data.xyz", "https://libreddit.eu.org", "https://l.opnxng.com", "https://libreddit.cachyos.org", "https://rd.funami.tech", "https://libreddit.projectsegfau.lt", "https://www.futureddit.gq", "https://lr.slipfox.xyz", "https://libreddit.oxymagnesium.com", "https://reddit.utsav2.dev", "https://libreddit.freedit.eu", "https://libreddit.mha.fi"];
  let simplyTranslate = ["https://simplytranslate.org", "https://st.tokhmi.xyz", "https://translate.josias.dev", "https://translate.namazso.eu", "https://translate.riverside.rocks", "https://simplytranslate.manerakai.com", "https://translate.bus-hit.me", "https://simplytranslate.pussthecat.org", "https://translate.northboot.xyz", "https://translate.tiekoetter.com", "https://simplytranslate.esmailelbob.xyz", "https://tl.vern.cc", "https://translate.slipfox.xyz", "https://st.privacydev.net", "https://translate.beparanoid.de", "https://translate.priv.pw", "https://st.odyssey346.dev"];
	let searxng = [ "https://searx.tiekoetter.com"]

  gebi("yt").setAttribute("href", randChoice(invidious));
  gebi("ni").setAttribute("href", randChoice(nitter));
  gebi("re").setAttribute("href", randChoice(libreddit));
  gebi("st").setAttribute("href", randChoice(simplyTranslate));
}

export function submitSearch() {
  
  var searchString = $('#q').val()
  var arraySearch = searchString.split(" ")
  var sites = {
    "github": "https://github.com",
    "youtube": $('#yt').attr('href'), 
    "gmail": "https://gmail.com",
    "tuta": "https://tuta.io",
    "outlook": "https://outlook.com",
    "tradutor": $('#st').attr('href')
  }

  //Open site
  if (typeof sites[arraySearch[0]] !== 'undefined') {    
    if(sites[arraySearch[0]] !== undefined){
      window.location.href = sites[arraySearch[0]]
    } 
    return;
  }

	const regexUrl = /((https?:\/\/)?(www\.)?([a-z0-9-]+\.[a-z]{2,})(\/[^\s]*)?|([a-z0-9-]+\.[a-z]{2,}))/gi;
	if( arraySearch[0].match(regexUrl))
	{
		const regexHttps = /^https:\/\//;

		if(!regexHttps.test(arraySearch[0])){
			arraySearch[0] = 'https://www.' + arraySearch[0];
		}
		
		window.location.href = arraySearch[0]
		return;
	}
 
  let stringSearch = '';
  let seeker_method;
	let seekers = {
	  'google': "https://www.google.com/search?q=",
		'duck': "https://duckduckgo.com/?q=",
	  'librex': "https://librey.devol.it/search.php?q=",
	  'searxng': "https://search.rhscz.eu/search?q="
	}

  //Verify seeker entry
  if (typeof seekers[arraySearch[0]] !== 'undefined') {
    seeker_method = seekers[arraySearch[0]]
    arraySearch.shift();
  }

  //Serialize searchString
  for (var i = 0; i < arraySearch.length; i++) {
    stringSearch = stringSearch.concat('+', arraySearch[i].toLowerCase())
  }

  //Open seeker request
  if (typeof seeker_method !== 'undefined') {
    window.location.href = seeker_method + stringSearch
    return;
  }

  window.location.href = seekers['searxng'] + stringSearch;
}

export function autocomplete(query){
	complete(query);
}
