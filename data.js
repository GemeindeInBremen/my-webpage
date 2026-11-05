/* data.js – gemeinsame Daten / shared data for year.html and table.html
   Kosten und Anmeldeschluss eintragen / enter costs and deadlines:
   COSTS["2026-05-22"]={reg:"...",dl:"...",trn:"...",acc:"..."};
   Wert: Text oder ["Deutsch","English"] / Value: text or ["Deutsch","English"]
   Zwei Termine am selben Starttag: zweiter Schluessel mit "b", z. B. "2026-06-06b".
   Same start day twice: the second key ends with "b". */
var COSTS={};

var MD=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
ME=["January","February","March","April","May","June","July","August","September","October","November","December"],
SD=["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],
SE=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
WD=["So","Mo","Di","Mi","Do","Fr","Sa"],
WE=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

var A={d:["DACH","DACH"],i:["International","International"],e:["Europa","Europe"],ey:["Europa-YP","Europe-YP"],au:["Augsburg","Augsburg"],le:["Leipzig","Leipzig"],be:["Bern","Bern"],ha:["Hamburg","Hamburg"],hb:["Bremen","Bremen"],n:["",""]};
var P={ge:["Gut Elim","Gut Elim"],on:["Online","Online"],le:["Leipzig","Leipzig"],ana:["Anaheim, Kalifornien","Anaheim, California"],dh:["DeHoof, NL","DeHoof, NL"],lon:["London, UK","London, UK"],ha:["Hamburg","Hamburg"],dal:["Dallas, Texas","Dallas, Texas"],po:["Polen","Poland"],ams:["Amsterdam, NL","Amsterdam, NL"],ba:["Baarlo, NL","Baarlo, NL"],mu:["München / online","Munich / online"],den:["Denver, Colorado","Denver, Colorado"],tp:["Taipeh, Taiwan","Taipei, Taiwan"],du:["Düsseldorf","Düsseldorf"],bel:["Bellevue, Washington","Bellevue, Washington"],bk:["Bangkok, Thailand","Bangkok, Thailand"],be:["Bern","Bern"],n:["",""]};
var U={bro:["https://dachbrothers.de/","dachbrothers.de"],hw:["https://lebensstrom.de/hwme/","lebensstrom.de/hwme"],lsm:["https://lsmwebcast.com","lsmwebcast.com"],uni:["https://unistudents.eu/","unistudents.eu"],ama:["https://www.amanatrust.org.uk/page/events-2026","amanatrust.org.uk"],yp:["https://ypconference.eu/","ypconference.eu"],ts:["https://truthschool.eu/","truthschool.eu"]};

var BD="Brüdertraining zur Ältestenschaft",BE="Brothers training on the Eldership";
/* [Start, Ende, Kategorie, Bereich, Ort, Name DE, Name EN, Links] */
var R=[
["2026-01-03","2026-01-06","loc","au","n","MEHR","MEHR",[]],
["2026-01-20","2026-02-04","dach","d","n","FTTA-Evangeliumsreisen","FTTA Gospel Trips",[]],
["2026-02-07","2026-02-07","dach","d","n",BD,BE,["bro"]],
["2026-02-13","2026-02-15","int","i","n","Internationale chinesischsprachige Konferenz","International Chinese-Speaking Conference",["lsm"]],
["2026-02-23","2026-02-23","web","n","n","Neues HWME: 2025 Thanksgiving-Konferenz","New HWME: 2025 Thanksgiving Conference",["hw"]],
["2026-02-28","2026-02-28","dach","d","on","Brüdergemeinschaft","Brothers fellowship",[]],
["2026-03-06","2026-03-08","dach","d","ge","Schwesterngemeinschaft","Sisters' fellowship",[]],
["2026-03-14","2026-03-14","dach","d","n",BD,BE,["bro"]],
["2026-03-19","2026-03-22","loc","le","le","Leipziger Buchmesse","Leipzig Book Fair",[]],
["2026-03-20","2026-03-22","int","i","ana","Frühjahrs-ITERO","Spring ITERO",["lsm"]],
["2026-03-27","2026-03-29","eur","e","dh","Uni-Konferenz im Frühjahr","Spring University Conference",["uni"]],
["2026-04-01","2026-04-03","eur","e","lon","Europäisches Brüdertraining","European Brothers' Training",["ama"]],
["2026-04-04","2026-04-05","eur","e","lon","Internationale Vermengungskonferenz im Frühjahr","Spring International Blending Conference",["ama"]],
["2026-04-06","2026-04-06","web","n","n","Neues HWME: 2025 Dezember-Training, B1","New HWME: 2025 December Training, B1",["hw"]],
["2026-04-10","2026-04-12","dach","d","ge","YP-Konferenz","YP conference",[]],
["2026-04-25","2026-04-25","loc","ha","ha","Bibelseminar in Hamburg","Bible Seminar in Hamburg",[]],
["2026-04-30","2026-05-03","dach","d","ge","Retreat der Dienenden","Serving ones retreat",[]],
["2026-05-09","2026-05-09","dach","d","n",BD,BE,["bro"]],
["2026-05-18","2026-05-18","web","n","n","Neues HWME: 2025 Dezember-Training, B2","New HWME: 2025 December Training, B2",["hw"]],
["2026-05-22","2026-05-25","int","i","dal","Internationale Memorial-Day-Vermengungskonferenz","International Memorial Day Blending Conference",["lsm"]],
["2026-05-23","2026-05-25","dach","d","ge","Pfingstkonferenz 2026","Pentecost Conference 2026",[]],
["2026-06-06","2026-06-06","dach","d","n",BD,BE,["bro"]],
["2026-06-06","2026-06-06","loc","be","be","Bibelseminar in Bern","Bible Seminar in Bern",[]],
["2026-06-29","2026-06-29","web","n","n","Neues HWME: 2026 Internationale chinesischsprachige Konferenz","New HWME: 2026 International Chinese Speaking Conference",["hw"]],
["2026-06-29","2026-07-04","int","i","ana","Halbjährliches Training im Sommer","Summer Semiannual Training",["lsm"]],
["2026-07-26","2026-08-01","eur","ey","po","EYPC (Polen-Camp)","EYPC (Poland Camp)",["yp"]],
["2026-08-03","2026-08-16","web","n","n","Neues HWME: GOW","New HWME: GOW",["hw"]],
["2026-08-08","2026-08-08","dach","d","n",BD,BE,["bro"]],
["2026-08-17","2026-08-17","web","n","n","Neues HWME: 2026 Memorial-Day-Konferenz","New HWME: 2026 Memorial Day Conference",["hw"]],
["2026-09-12","2026-09-12","dach","d","n","DACH Brüdergemeinschaft","DACH Brothers' Fellowship",["bro"]],
["2026-09-24","2026-09-26","int","i","ams","ITERO","ITERO",[]],
["2026-09-28","2026-09-28","web","n","n","Neues HWME: 2026 Sommertraining, B1","New HWME: 2026 Summer Training, B1",["hw"]],
["2026-10-02","2026-10-04","dach","d","n","Farsisprachige Konferenz","Farsi speaking conference",[]],
["2026-10-10","2026-10-10","dach","d","n",BD,BE,["bro"]],
["2026-10-18","2026-10-18","loc","hb","n","Gründungsversammlung der Gemeinde in Bremen","Founding meeting of the church in Bremen",[["index.html","Videoaufnahmen","Video recordings"],["https://forms.gle/SvDeKcTHw53gdDuJA","Anmeldeformular","Registration form"]]],
["2026-10-23","2026-10-25","eur","e","ba","Internationale Vermengungskonferenz im Herbst","Autumn International Blending Conference",[]],
["2026-11-06","2026-11-08","dach","d","mu","Mini-Konferenz – Die nächste Generation heranziehen","Mini-conference-raising up the next generation",[]],
["2026-11-09","2026-11-09","web","n","n","Neues HWME: 2026 Sommertraining, B2","New HWME: 2026 Summer Training, B2",["hw"]],
["2026-11-14","2026-11-14","dach","d","n",BD,BE,["bro"]],
["2026-11-15","2026-11-15","loc","ha","ha","Vermengung in Norddeutschland","Northern Germany Blending",[]],
["2026-11-26","2026-11-29","int","i","den","Internationale Thanksgiving-Konferenz","Internal Thanks-giving Conference",[]],
["2026-12-04","2026-12-06","dach","d","ge","DACH Uni-Konferenz","DACH Uni-Conference",[]],
["2026-12-12","2026-12-12","dach","d","n",BD,BE,["bro"]],
["2026-12-21","2026-12-21","web","n","n","Neues HWME: 2026 ITERO","New HWME: 2026 ITERO",["hw"]],
["2026-12-21","2026-12-26","int","i","ana","Halbjährliches Training im Dezember","December Semiannual Training",[]],
["2026-12-26","2026-12-31","eur","ey","dh","Winterschule der Wahrheit","Winter School of Truth",["ts",["https://us.list-manage.com/bKcEomGvBRV?e=eb7a7bb8be&c2id=2e238930b6fb68bd6fed17ca624b902a","Winterschule der Wahrheit","Winter school of truth"]]],
["2027-02-04","2027-02-06","dach","d","ge","DACH Brüder-Retreat","DACH Brothers' retreat",["bro"]],
["2027-02-20","2027-02-21","int","i","tp","Internationale chinesischsprachige Konferenz","International Chinese-Speaking Conference",[["https://docs.google.com/forms/d/e/1FAIpQLSfVEJMoNlh2hn2gyXMdefc33zDD6-ZpmbprtTAJFCsLd1LwfQ/viewform","ICSC 2027 Anmeldung 😊","ICSC 2027 Registration 😊"]]],
["2027-03-05","2027-03-07","dach","d","ge","Schwesterngemeinschaft","Sisters Fellowship",[]],
["2027-03-18","2027-03-21","oth","n","le","Leipziger Buchmesse","Leipzig Book Fair",[]],
["2027-03-19","2027-03-21","eur","e","n","Europäische Uni-Konferenz im Frühjahr","Spring European University Conference",[]],
["2027-03-29","2027-03-29","oth","n","n","Ostermontag","Easter Monday",[]],
["2027-04-09","2027-04-11","dach","d","ge","YP-Konferenz","YP Conference",[]],
["2027-04-09","2027-04-11","int","i","ana","Frühjahrs-ITERO","Spring ITERO",[]],
["2027-04-29","2027-05-02","oth","n","ge","Retreat der Dienenden","Serving Ones Retreat",[]],
["2027-05-05","2027-05-09","oth","n","du","Ev. Kirchentag","German Protestant Church Congress (Ev. Kirchentag)",[]],
["2027-05-16","2027-05-16","dach","d","n","Pfingstsonntag","Pentecost Sunday",[]],
["2027-05-28","2027-05-31","int","i","bel","Internationale Memorial-Day-Vermengungskonferenz","International Memorial Day Blending Conference",["lsm"]],
["2027-07-05","2027-07-10","int","i","ana","Halbjährliches Training im Juli","July Semiannual Training",["lsm"]],
["2027-08-01","2027-08-07","eur","ey","po","EYPC (Polen-Camp)","EYPC (Poland Camp)",["yp"]],
["2027-09-30","2027-10-02","int","i","bk","ITERO","ITERO",[]]
];

function b(d,e){return '<span class="d">'+d+'</span><span class="e">'+e+'</span>'}
function pp(s){var p=s.split('-');return [+p[0],+p[1]-1,+p[2]]}
function z2(n){return ('0'+n).slice(-2)}
function iso(c){return c.getFullYear()+'-'+z2(c.getMonth()+1)+'-'+z2(c.getDate())}
var TD=iso(new Date());
function fd(s,t,ny){var x=pp(s),y=pp(t),de,en;
if(s===t){de=x[2]+'. '+SD[x[1]];en=SE[x[1]]+' '+x[2]}
else if(x[1]===y[1]){de=x[2]+'.-'+y[2]+'. '+SD[x[1]];en=SE[x[1]]+' '+x[2]+'-'+y[2]}
else{de=x[2]+'. '+SD[x[1]]+' - '+y[2]+'. '+SD[y[1]];en=SE[x[1]]+' '+x[2]+' - '+SE[y[1]]+' '+y[2]}
return ny?b(de,en):b(de+' '+x[0],en+', '+x[0])}
function val(v,s){if(!v)return s?'—':b('noch nicht eingetragen','not yet entered');return typeof v==='string'?v:b(v[0],v[1])}
function lk(x,c){var u=typeof x==='string'?U[x]:x,t=typeof x==='string'?u[1]:b(x[1],x[2]);return '<a class="'+c+'" href="'+u[0]+'" target="_blank" rel="noopener">'+t+'</a>'}

var E=[],MAP={},seen={};
R.forEach(function(r,i){var id=r[0];while(seen[id])id+='b';seen[id]=1;
E.push({id:id,s:r[0],t:r[1],k:r[2],a:A[r[3]],p:P[r[4]],n:[r[5],r[6]],l:r[7]});
var x=pp(r[0]),y=pp(r[1]),c=new Date(x[0],x[1],x[2]),z=new Date(y[0],y[1],y[2]);
for(;c<=z;c.setDate(c.getDate()+1)){var k=iso(c);(MAP[k]=MAP[k]||[]).push(i)}});