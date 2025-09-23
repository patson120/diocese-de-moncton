'use client'

import { cn } from '@/_lib/utils'
import { HeroSectionSecond } from '@/components/sections/hero-second'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Page() {

    const t = useTranslations("cimetiere")

    const [targetSection, setTargetSection] = useState("")

    const scrollToElementById = (elementId: string) => {
        const element = document.getElementById(elementId)
        if (element) {
        setTargetSection(elementId)
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }
    }
    
    
    return (
        <main>
            {/* Hero section */}
            <HeroSectionSecond
                image='/assets/img/clerges.png'
                title={"Histoire de l’archidiocèse"}
                subtitle={""}
            />
            <div className='mt-10 md:mt-20'></div>
            <section className="container max-margin py-0">
                <div className='h-screen overflow-y-scroll h-scroll [&::-webkit-scrollbar]:w-0 flex flex-col-reverse md:flex-row gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8 relative'>
                    <div className='w-full md:w-2/3 flex flex-col gap-3'>
                        <h3 id='paragraph-1' className='text-left text-xl font-bold'>1- Les premières structures diocésaines (1604-1817)</h3>
                        <p className='leading-8'>
                            C'est dès la fondation de l'Acadie, avec l'arrivée des premiers colons acadiens en 1604, que débute, l'implantation du christianisme dans cette petite partie de l'Amérique du nord. En fait, l'histoire nous apprend qu'un prêtre catholique et un pasteur protestant accompagnent la première expédition des Sieurs DeMonts et Champlain.
                           Au début, les Maritimes relevaient de l'épiscopat français en ce qui concerne les affaires religieuses mais en 1658 Rome créa un vicariat apostolique dont le siège était à Québec et dont sa juridiction s'étend sur tout l'ensemble des possessions françaises en Amérique du Nord. C'est Mgr François de Montmorency-Laval qui en le titulaire.
                           Par le développement rapide de la Nouvelle-France, le vicariat apostolique devient diocèse de Québec dès 1674. Ainsi donc, les Maritimes dont faisait partie l'Acadie, devaient relever du diocèse de Québec et ce jusqu'en 1817. C'était à partir du diocèse de Québec que la nomination des missionnaires pour les Maritimes se faisait ainsi que toutes les questions se rapportant aux affaires religieuses. En 1685, Mgr de Saint-Vallier, vicaire général et évêque désigné pour succéder à Mgr de Laval, effectue la première visite épiscopale dans les Maritimes.
                           Après la cession des Maritimes à l'Angleterre en 1763, arrivent des colons d'origine britannique, en très grande partie des Irlandais et des Écossais. L'Église catholique dans les Maritimes prend alors un visage multiculturel.
                        </p>
                        <h3 id='paragraph-2' className='text-left text-xl font-bold'>2- Le vicariat apostolique de Halifax et l'évêché suffragant de Charlottetown (1817-1819)</h3>
                        <p className='leading-8'>
                           En 1817, Rome décida de créer le vicariat apostolique de Halifax avec à sa tête un missionnaire d'origine irlandaise, Mgr Edmund Burke. Deux ans plus tard, en 1819, le Vatican créa l'évêché suffragant de Charlottetown, dont le territoire s'étendait aussi bien au Nouveau-Brunswick qu'à l'Ile-du-Prince-Édouard. C'est le père Angus McEachern, d'origine écossaise qui en devint le titulaire. Or, étant donné qu'il s'agissait d'un évêque «suffragant» cela signifiait que son titulaire relevait d'un autre diocèse et dans ce cas-ci, celui du diocèse de Québec, pour certaines questions administratives et religieuses.
                        </p>
                        <h3 id='paragraph-3' className='text-left text-xl font-bold'>3- Les diocèses de St-Jean et de Chatham (1842-1860)</h3>
                        <p className='leading-8'>
                           En 1829, nouveau tournant alors que le diocèse de Charlottetown cessait d'être suffragant de Québec et devenait un diocèse autonome et de plein droit. Par la suite, en 1842, le Nouveau-Brunswick était quant à lui, soustrait de la juridiction du diocèse de Charlottetown. Le Saint-siège de Rome décida de créer le diocèse du Nouveau-Brunswick dont le siège épiscopale fut Fredericton alors choisi par le père William Dollard, d'origine irlandaise, qui en devint le premier titulaire. Par contre, c'est en 1853, que le siège épiscopale changea d'adresse pour être transférer à Saint-Jean, sous la désignation d'évêché de Saint-Jean.
                           Au cours des années 1830 et 1840, des prêtres francophones oeuvrant dans les Maritimes avaient fait valoir l'idée qu'il serait bon que l'un des leurs soit nommé à l'un des sièges épiscopaux de la région. On raconte qu'en 1842, treize prêtres du Nouveau-Brunswick s'étaient réunis à Chatham pour suggérer le nom du plus digne d'entre eux pour être l'évêque du diocèse du Nouveau-Brunswick. Deux noms sont ressortie à égalité de ce vote: le père Antoine Gagnon et le père William Dollard. Le président de la séance trancha par son vote en faveur de Mgr Dollard.
                           En 1860, Rome créait un deuxième évêché pour le Nouveau-Brunswick, celui de Chatham, dont son territoire s'étendait à une bonne partie de l'est et tout le nord de la province. C'est Mgr James Rogers, lui aussi d'origine irlandaise, qui en devint le premier titulaire.
                        </p>
                        <h3 id='paragraph-4' className='text-left text-xl font-bold'>4- Les Acadiens demandent un évêque (1880-1912)</h3>
                        <p className='leading-8'>
                           C'est à partir des années 1880-1890 qu'une volonté en faveur de la nomination d'un évêque qui soit d'origine acadienne et même de la création d'un diocèse dont la majorité serait composée de catholiques francophones se fait sentir auprès des diverses instances ecclésiastiques. D'ailleurs, plusieurs représentations ont été fait dans les Maritimes, à Ottawa et même auprès du Vatican.
                           Il faut se mettre dans le contexte que depuis les années 1860, les Acadiens avaient entrepris de se doter d'institutions à caractère «nationales». Que l'on pense aux journaux, collèges, institution de représentation (la Société Nationale des Acadiens fondée en 1881) et même à des symboles comme une  Fête nationale: le 15 août, un drapeau, un hymne national (Ave Marie Stella), une devise: «L'union fait la force». C'est dans cette toile de fond que la question épiscopale était chaudement débattue parmi les Acadiens.
                           C'est pour répondre en grande partie à cette demande légitime des Acadiens que le Pape Pie X nomme, en 1912, le père Édouard LeBlanc au siège épiscopale de Saint-Jean. Par le fait même, Mgr LeBlanc devint donc le premier évêque d'origine acadienne des Maritimes. Ajoutons à cela, qu'en 1920, Rome nomina un autre prêtre d'origine acadienne, Mgr Patrice-Alexandre Chiasson, comme évêque de Chatham. Le diocèse de Chatham renfermait une majorité de fidèles d'origine française dans son territoire ce qui aida grandement la cause de cette nomination.
                        </p>
                        <h3 id='paragraph-5' className='text-left text-xl font-bold'>5- L'archevêché de Moncton (1936)</h3>
                        <p className='leading-8'>
                             Par ces nominations, il en fallait pas plus pour les évêques Mgr LeBlanc (Saint-Jean) et Mgr Chiasson (Chatham) font des recommandations auprès des hautes instances religieuses en faveur de la création  d'un diocèse à Moncton. Leur argumentation se basant principalement sur l'accroissement constant de la population catholique du diocèse de Saint-Jean par rapport à celui des protestants.
                           De plus, les évêques soutiennent que la création d'un archevêché à Moncton accroîtrait le prestige et l'influence des catholiques dans les milieux gouvernementaux et favoriserait également un meilleur système scolaire alors que l'on sait que le rôle de l'Église en matière d'éducation est des plus importants. Chose intéressante, les deux évêques acadiens ne faisaient aucunement allusion à la question linguistique comme telle.
                           Le 18 février 1935, Mgr Édouard LeBlanc décédait à Saint-Jean alors qu'en janvier 1936, Mgr O'Donnell, de Halifax, décédait à son tour. Les circonstances se prêtaient fort bien à un remaniement dans l'organisation diocésain de l'Église par Rome.
                          C'est ainsi que le 18 mars 1936, le Vatican annonçait la création de l'archevêché de Moncton et du même souffle, la nomination de Mgr Patrice Bray, prêtre eudiste d'origine irlandaise, comme évêque de Saint-Jean.
                           Le dimanche 30 août 1936, Mgr P.A. Bray venait à Moncton pour y faire la lecture du décret pontifical qui créait la nouvelle province ecclésiastique du Nouveau-Brunswick ainsi que le nouvel archevêché de Moncton. Le premier décembre de la même année, Rome informait Mgr Arthur Melanson, d'origine acadienne, qui serait le premier archevêque de Moncton.
                           La cérémonie d'intronisation du nouvel archevêque eut lieu à Moncton le 22 février 1937 au sous-sol de l'église de l'Assomption en présence de quinze archevêques et évêques, de plus de deux cents prêtres et d'une immense foule.
                           En 1986, anniversaire de son jubilé d'or, l'archevêché de Moncton comprenait 50 paroisses catholiques sous la gouverne de Mgr Donat Chiasson alors troisième archevêque de Moncton.
                        </p>
                        <h3 id='paragraph-6' className='text-left text-xl font-bold'>6.- Les décrets de fondation de l'archidiocèse</h3>
                        <p className='leading-8'>
                            6.1 Décret établissant le nouveau diocèse
                               C'est par un décret provenant de Rome le 22 février 1936, de la Sacrée Congrégation consistoriale que fut établi le nouvel archidiocèse de Moncton. Ce décret a été proclamé en l'église l'Assomption de Moncton le dimanche soir 30 août 1936 par Mgr. P.A. Bray, évêque de Saint-Jean au Nouveau-Brunswick qui avait été nommé délégué officiel à cette occasion par Mgr. Cassulo, archevêque titulaire de Léontopolis en Augustanie et Délégué Apostolique au Canada.
                               Par ce décret, on détachait donc une portion de territoire des diocèses de Chatham et de Saint-Jean au Nouveau-Brunswick, pour être décerné au nouvel archidiocèse. Ainsi, les comtés civils de Kent pour le diocèse de Chatham et les comtés civils d'Albert et de Westmorland pour le diocèse de Saint-Jean ont été détachés en faveur de la création de l'archidiocèse de Moncton.
                              6.2 Décret établissant la nouvelle province écclésiastique
                               Au même moment un autre décret, toujours provenant de Rome, fut également proclamé au cours de la cérémonie mais cette fois pour la création d'une nouvelle province écclésiatique. La lecture du décret lors de la cérémonie officielle dans la Cathédrale l'Assomption a été fait par Mgr Albert Leménager.
                               Étant donné que la province écclésiastique de Halifax comprenait trois provinces civiles et qu'on lui disait trop étendue, on jugeai opportun de réorganiser la hiérarchie ecclésiastique de cette région.
                               Ainsi, on soustrait les diocèses de Chatham et de Saint-Jean de la province écclésiastique d'Halifax pour la remettre à cette nouvelle province écclésiastique nommé Moncton qui est maintenant constitué en Métropole l'Église archiépiscopale de Moncton.
                               C'est en proclamant ces deux décrets de grandes importances que l'on vit apparaître ce nouvel archidiocèse, celui de Moncton.
                        </p>
                        <h3 id='paragraph-7' className='text-left text-xl font-bold'>7.- Les armoiries du nouvel archidiocèse: </h3>
                        <p className='leading-8'>
                            Source: "Les blasons" de Robert Pichette (2019)
                            Les armoiries de l'archidiocèse sont la création (en 1937) du Frère Gérard Brassard.  La description héraldique officielle — dit le blasonnement — des armoiries de l'archidiocèse qui suit, est celui donné par le Frère Brassard lui-même: 
                            Taillé d'azur aux initiales M.A. gothiques d'or, accompagnées en chef d'une étoile a six rais d'argent et d'un croissant de lune du même en pointe; et d'argent à un vaisseau antique de sable mâté d'un double croisillon et de deux autres petits du même, pavillon de gueules, la voilure d'argent chargée de deux clés de gueules en sautoir, sept rames d'or sortant du vaisseau et plongeant dans une mer agitée d'azur mouvant de la pointe, senestré en chef d'une colombe au naturel, nimbée d'or et rayonnante, descendant en barre. Devise : Ut videntes Jesum.
                            L’écu est posé sur la croix archiépiscopale a doubles croisillons. Brassard y ajouta une crosse épiscopale à gauche (dextre) et une mitre à droite (senestre). Sous l’écu, on trouve « deux branches de palmiers » sans que leur symbolisme ne soit expliqué, si toutefois il y en avait un. Le tout est surmonté du chapeau archiépiscopal vert a dix houppes vertes de chaque côté de l’écu. Depuis le Concile Vatican II, la règlementation héraldique de l'Église a été simplifiée et modifiée de façon radicale de sorte que mitre et crosse ne sont plus permises.
                            NOTE:  Une adaptation moderne des armoiries a été produite en octobre 2024 par Mgr Guy Desrochers, archevêque de Moncton, conformément aux nouvelles normes héraldiques.
                        </p>
                    </div>
                    <div className='w-full md:w-1/3 md:sticky md:top-0 leading-8'>
                        <h1 className='text-3xl font-bold'>Sommaire</h1>
                        <div className='mt-8 flex flex-col gap-4'>
                            <h3 onClick={() => scrollToElementById("paragraph-1")}  className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-1' && "font-bold underline" )}>
                                1- Les premières structures diocésaines (1604-1817)
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-2")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-2' && "font-bold underline" )}>
                                2- Le vicariat apostolique de Halifax et l'évêché suffragant de Charlottetown (1817-1819)
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-3")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-3' && "font-bold underline" )}>
                                3- Les diocèses de St-Jean et de Chatham (1842-1860)
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-4")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-4' && "font-bold underline" )}>
                                4- Les Acadiens demandent un évêque (1880-1912)
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-5")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-5' && "font-bold underline" )}>
                                5- L'archevêché de Moncton (1936)
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-6")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-6' && "font-bold underline" )}>
                                6.- Les décrets de fondation de l'archidiocèse
                            </h3>
                            <h3 onClick={() => scrollToElementById("paragraph-7")} className={cn("pb-4 border-b border-b-gray-200 cursor-pointer", 
                                targetSection === 'paragraph-7' && "font-bold underline" )}>
                                7.- Les armoiries du nouvel archidiocèse
                            </h3>
                        </div>
                    </div>
                    
                </div>

                <div className='mt-20'>
                    <p className='font-medium leading-8'>Chaque détail a sa signification », écrivait le Frère Brassard. Voici donc l'explication simplifiée du symbolisme des armoiries de l’archidiocèse de Moncton :</p>
                    <ul className='flex flex-col space-y-2 mt-4 pl-5 leading-8'>
                        <li className='list-disc'>L’étoile est la Stella Maris, l'étoile de la mer, symbole de l’Acadie ;</li>
                        <li className='list-disc'>Le monogramme MA symbolise la Vierge Marie;</li>
                        <li className='list-disc'>Le croissant est le piédestal de la Vierge selon le texte de saint Jean à Patmos : «Un grand signe apparut dans le ciel : une femme vêtue du soleil, la lune sous les pieds, et sur la tête une couronne de douze étoiles. (Apocalypse 12, 1) ;</li>
                        <li className='list-disc'>Le « vaisseau antique », c'est-à-dire la nef, ou galère, est empruntée aux armoiries de la province du Nouveau-Brunswick dont il est le symbole principal' ;</li>
                        <li className='list-disc'>Le faitage du mat principal est une croix a doubles croisillons pour symboliser le siège métropolitain du Nouveau-Brunswick, alors que les deux mats à doubles 
                            croisillons plus petits se terminent par une croix pour symboliser les deux diocèses suffragants à l’époque, Saint 
                            John créé entre 1852 et 1854, auparavant diocèse du Nouveau-Brunswick (1842), et le diocèse de Chatham érigé en 1860, 
                            transféré à Bathurst en 1938 ;
                        </li>
                        <li className='list-disc'>La voile blanche gonflée par le vent et chargée des clés sym­bolise Rome et le «pouvoir souverain confié aux successeurs de saint Pierre» ;</li>
                        <li className='list-disc'>Les sept rames d'or symbolisent les sept sacrements «canaux de la grâce, par lesquels l'âme du chrétien vogue sans danger sur les flots dangereux du monde»;</li>
                        <li className='list-disc'>La colombe nimbée avec sept rayons « rappelle que l'Esprit saint veille sur 1'Eglise, l'inspire par ses dons et la dirige »;</li>
                        <li className='list-disc'>La devise Ut videntes jesum peut se rendre en français par " Comme si l'on voyait Jésus ". Mgr Donat Chiasson (1930­-2003), troisième archevêque de Moncton, en donnait l'explication suivante à l'été de 1986 : « Elle peut vouloir dire : «Marchons ensemble dans la foi — comme si l'on voyait Jésus.» 
                            Elle peut signifier également : «Vivez comme de vrais témoins, car en vous regardant — c'est comme si l'on voyait Jésus» ;</li>
                    </ul>
                    <p className='font-medium leading-8'>On notera que le symbolisme des trois mats est devenu caduc depuis la création d'un quatrième diocèse, celui d'Edmundston, érigé le 16 décembre 1944.</p>
                </div>
            </section> 

            <div className='mt-10 lg:mt-20'></div>
        </main>
    )
}
