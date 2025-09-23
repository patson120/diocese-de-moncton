'use client'


import { HeroSectionSecond } from '@/components/sections/hero-second'
import { Button } from '@/components/ui/shared/button'
import { useRouter } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Page() {

    const t = useTranslations("cimetiere")
    const router = useRouter()
    
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
                <div className='h-screen overflow-y-scroll h-scroll [&::-webkit-scrollbar]:w-0 flex gap-7 md:gap-6 lg:gap-12 md:py-4 lg:py-8 relative'>
                    <div className='w-2/3 flex flex-col gap-3'>
                        <h3 className='text-left text-xl font-bold'>1- Les premières structures diocésaines (1604-1817)</h3>
                        <p className='leading-8'>
                            C'est dès la fondation de l'Acadie, avec l'arrivée des premiers colons acadiens en 1604, que débute, l'implantation du christianisme dans cette petite partie de l'Amérique du nord. En fait, l'histoire nous apprend qu'un prêtre catholique et un pasteur protestant accompagnent la première expédition des Sieurs DeMonts et Champlain.
                           Au début, les Maritimes relevaient de l'épiscopat français en ce qui concerne les affaires religieuses mais en 1658 Rome créa un vicariat apostolique dont le siège était à Québec et dont sa juridiction s'étend sur tout l'ensemble des possessions françaises en Amérique du Nord. C'est Mgr François de Montmorency-Laval qui en le titulaire.
                           Par le développement rapide de la Nouvelle-France, le vicariat apostolique devient diocèse de Québec dès 1674. Ainsi donc, les Maritimes dont faisait partie l'Acadie, devaient relever du diocèse de Québec et ce jusqu'en 1817. C'était à partir du diocèse de Québec que la nomination des missionnaires pour les Maritimes se faisait ainsi que toutes les questions se rapportant aux affaires religieuses. En 1685, Mgr de Saint-Vallier, vicaire général et évêque désigné pour succéder à Mgr de Laval, effectue la première visite épiscopale dans les Maritimes.
                           Après la cession des Maritimes à l'Angleterre en 1763, arrivent des colons d'origine britannique, en très grande partie des Irlandais et des Écossais. L'Église catholique dans les Maritimes prend alors un visage multiculturel.
                        </p>
                        <h3 className='text-left text-xl font-bold'>2- Le vicariat apostolique de Halifax et l'évêché suffragant de Charlottetown (1817-1819)</h3>
                        <p className='leading-8'>
                           En 1817, Rome décida de créer le vicariat apostolique de Halifax avec à sa tête un missionnaire d'origine irlandaise, Mgr Edmund Burke. Deux ans plus tard, en 1819, le Vatican créa l'évêché suffragant de Charlottetown, dont le territoire s'étendait aussi bien au Nouveau-Brunswick qu'à l'Ile-du-Prince-Édouard. C'est le père Angus McEachern, d'origine écossaise qui en devint le titulaire. Or, étant donné qu'il s'agissait d'un évêque «suffragant» cela signifiait que son titulaire relevait d'un autre diocèse et dans ce cas-ci, celui du diocèse de Québec, pour certaines questions administratives et religieuses.
                        </p>
                        <h3 className='text-left text-xl font-bold'>3- Les diocèses de St-Jean et de Chatham (1842-1860)</h3>
                        <p className='leading-8'>
                           En 1829, nouveau tournant alors que le diocèse de Charlottetown cessait d'être suffragant de Québec et devenait un diocèse autonome et de plein droit. Par la suite, en 1842, le Nouveau-Brunswick était quant à lui, soustrait de la juridiction du diocèse de Charlottetown. Le Saint-siège de Rome décida de créer le diocèse du Nouveau-Brunswick dont le siège épiscopale fut Fredericton alors choisi par le père William Dollard, d'origine irlandaise, qui en devint le premier titulaire. Par contre, c'est en 1853, que le siège épiscopale changea d'adresse pour être transférer à Saint-Jean, sous la désignation d'évêché de Saint-Jean.
                           Au cours des années 1830 et 1840, des prêtres francophones oeuvrant dans les Maritimes avaient fait valoir l'idée qu'il serait bon que l'un des leurs soit nommé à l'un des sièges épiscopaux de la région. On raconte qu'en 1842, treize prêtres du Nouveau-Brunswick s'étaient réunis à Chatham pour suggérer le nom du plus digne d'entre eux pour être l'évêque du diocèse du Nouveau-Brunswick. Deux noms sont ressortie à égalité de ce vote: le père Antoine Gagnon et le père William Dollard. Le président de la séance trancha par son vote en faveur de Mgr Dollard.
                           En 1860, Rome créait un deuxième évêché pour le Nouveau-Brunswick, celui de Chatham, dont son territoire s'étendait à une bonne partie de l'est et tout le nord de la province. C'est Mgr James Rogers, lui aussi d'origine irlandaise, qui en devint le premier titulaire.
                        </p>
                        <h3 className='text-left text-xl font-bold'>4- Les Acadiens demandent un évêque (1880-1912)</h3>
                        <p className='leading-8'>
                           C'est à partir des années 1880-1890 qu'une volonté en faveur de la nomination d'un évêque qui soit d'origine acadienne et même de la création d'un diocèse dont la majorité serait composée de catholiques francophones se fait sentir auprès des diverses instances ecclésiastiques. D'ailleurs, plusieurs représentations ont été fait dans les Maritimes, à Ottawa et même auprès du Vatican.
                           Il faut se mettre dans le contexte que depuis les années 1860, les Acadiens avaient entrepris de se doter d'institutions à caractère «nationales». Que l'on pense aux journaux, collèges, institution de représentation (la Société Nationale des Acadiens fondée en 1881) et même à des symboles comme une  Fête nationale: le 15 août, un drapeau, un hymne national (Ave Marie Stella), une devise: «L'union fait la force». C'est dans cette toile de fond que la question épiscopale était chaudement débattue parmi les Acadiens.
                           C'est pour répondre en grande partie à cette demande légitime des Acadiens que le Pape Pie X nomme, en 1912, le père Édouard LeBlanc au siège épiscopale de Saint-Jean. Par le fait même, Mgr LeBlanc devint donc le premier évêque d'origine acadienne des Maritimes. Ajoutons à cela, qu'en 1920, Rome nomina un autre prêtre d'origine acadienne, Mgr Patrice-Alexandre Chiasson, comme évêque de Chatham. Le diocèse de Chatham renfermait une majorité de fidèles d'origine française dans son territoire ce qui aida grandement la cause de cette nomination.
                        </p>
                        <h3 className='text-left text-xl font-bold'>5- L'archevêché de Moncton (1936)</h3>
                        <p className='leading-8'>
                             Par ces nominations, il en fallait pas plus pour les évêques Mgr LeBlanc (Saint-Jean) et Mgr Chiasson (Chatham) font des recommandations auprès des hautes instances religieuses en faveur de la création  d'un diocèse à Moncton. Leur argumentation se basant principalement sur l'accroissement constant de la population catholique du diocèse de Saint-Jean par rapport à celui des protestants.
                           De plus, les évêques soutiennent que la création d'un archevêché à Moncton accroîtrait le prestige et l'influence des catholiques dans les milieux gouvernementaux et favoriserait également un meilleur système scolaire alors que l'on sait que le rôle de l'Église en matière d'éducation est des plus importants. Chose intéressante, les deux évêques acadiens ne faisaient aucunement allusion à la question linguistique comme telle.
                           Le 18 février 1935, Mgr Édouard LeBlanc décédait à Saint-Jean alors qu'en janvier 1936, Mgr O'Donnell, de Halifax, décédait à son tour. Les circonstances se prêtaient fort bien à un remaniement dans l'organisation diocésain de l'Église par Rome.
                          C'est ainsi que le 18 mars 1936, le Vatican annonçait la création de l'archevêché de Moncton et du même souffle, la nomination de Mgr Patrice Bray, prêtre eudiste d'origine irlandaise, comme évêque de Saint-Jean.
                           Le dimanche 30 août 1936, Mgr P.A. Bray venait à Moncton pour y faire la lecture du décret pontifical qui créait la nouvelle province ecclésiastique du Nouveau-Brunswick ainsi que le nouvel archevêché de Moncton. Le premier décembre de la même année, Rome informait Mgr Arthur Melanson, d'origine acadienne, qui serait le premier archevêque de Moncton.
                           La cérémonie d'intronisation du nouvel archevêque eut lieu à Moncton le 22 février 1937 au sous-sol de l'église de l'Assomption en présence de quinze archevêques et évêques, de plus de deux cents prêtres et d'une immense foule.
                           En 1986, anniversaire de son jubilé d'or, l'archevêché de Moncton comprenait 50 paroisses catholiques sous la gouverne de Mgr Donat Chiasson alors troisième archevêque de Moncton.
                        </p>
                        <h3 className='text-left text-xl font-bold'>6.- Les décrets de fondation de l'archidiocèse</h3>
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
                        <h3 className='text-left text-xl font-bold'>7.- Les armoiries du nouvel archidiocèse: </h3>
                        <p className='leading-8'>
                            Source: "Les blasons" de Robert Pichette (2019)
                            Les armoiries de l'archidiocèse sont la création (en 1937) du Frère Gérard Brassard.  La description héraldique officielle — dit le blasonnement — des armoiries de l'archidiocèse qui suit, est celui donné par le Frère Brassard lui-même: 
                            Taillé d'azur aux initiales M.A. gothiques d'or, accompagnées en chef d'une étoile a six rais d'argent et d'un croissant de lune du même en pointe; et d'argent à un vaisseau antique de sable mâté d'un double croisillon et de deux autres petits du même, pavillon de gueules, la voilure d'argent chargée de deux clés de gueules en sautoir, sept rames d'or sortant du vaisseau et plongeant dans une mer agitée d'azur mouvant de la pointe, senestré en chef d'une colombe au naturel, nimbée d'or et rayonnante, descendant en barre. Devise : Ut videntes Jesum.
                            L’écu est posé sur la croix archiépiscopale a doubles croisillons. Brassard y ajouta une crosse épiscopale à gauche (dextre) et une mitre à droite (senestre). Sous l’écu, on trouve « deux branches de palmiers » sans que leur symbolisme ne soit expliqué, si toutefois il y en avait un. Le tout est surmonté du chapeau archiépiscopal vert a dix houppes vertes de chaque côté de l’écu. Depuis le Concile Vatican II, la règlementation héraldique de l'Église a été simplifiée et modifiée de façon radicale de sorte que mitre et crosse ne sont plus permises.
                            NOTE:  Une adaptation moderne des armoiries a été produite en octobre 2024 par Mgr Guy Desrochers, archevêque de Moncton, conformément aux nouvelles normes héraldiques.
                        </p>
                    </div>
                    <div className='w-1/3 sticky top-0 leading-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure repudiandae, dolor repellat, laboriosam animi qui delectus neque quod commodi eos, assumenda odio mollitia porro itaque. Sunt, quas at atque ipsum obcaecati velit ducimus doloremque consequuntur. Error facilis id soluta modi labore non mollitia voluptas magni. Voluptates facilis fugiat placeat odio ab. Fugiat aperiam quam nulla quod ab veniam natus incidunt, deserunt ipsam, sint aut placeat quo non doloremque consequatur cupiditate eum dolore sit? Voluptas quae tempore corrupti similique quasi, vero odit?
                    </div>
                    
                </div>
            </section> 

            <div className='mt-10 lg:mt-20'></div>
        </main>
    )
}
