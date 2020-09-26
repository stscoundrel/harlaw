const TAB = '\t'
const SKIPS = ['#']
const MEANINGS = ['[/m]', '[m1]', '[m2]', '[m3]', '[m4]', '[m5]', '[m6]', '[m7]', '[m8]', '[m9]', '[m10]']
const COLORS = ['[c aliceblue]', '[c antiquewhite]', '[c aqua]', '[c aquamarine]', '[c azure]', '[c beige]', '[c bisque]', '[c blanchedalmond]', '[c blue]', '[c blueviolet]', '[c brown]', '[c burlywood]', '[c cadetblue]', '[c chartreuse]', '[c chocolate]', '[c coral]', '[c cornflowerblue]', '[c cornsilk]', '[c crimson]', '[c cyan]', '[c darkblue]', '[c darkcyan]', '[c darkgoldenrod]', '[c darkgray]', '[c darkgreen]', '[c darkkhaki]', '[c darkmagenta]', '[c darkolivegreen]', '[c darkorange]', '[c darkorchid]', '[c darkred]', '[c darksalmon]', '[c darkseagreen]', '[c darkslateblue]', '[c darkslategray]', '[c darkturquoise]', '[c darkviolet]', '[c deeppink]', '[c deepskyblue]', '[c dimgray]', '[c dodgerblue]', '[c firebrick]', '[c floralwhite]', '[c forestgreen]', '[c fuchsia]', '[c gainsboro]', '[c ghostwhite]', '[c gold]', '[c goldenrod]', '[c gray]', '[c green]', '[c greenyellow]', '[c honeydew]', '[c hotpink]', '[c indianred]', '[c indigo]', '[c ivory]', '[c khaki]', '[c lavender]', '[c lavenderblush]', '[c lawngreen]', '[c lemonchiffon]', '[c lightblue]', '[c lightcoral]', '[c lightcyan]', '[c lightgoldenrodyellow]', '[c lightgreen]', '[c lightgrey]', '[c lightpink]', '[c lightsalmon]', '[c lightseagreen]', '[c lightskyblue]', '[c lightslategray]', '[c lightsteelblue]', '[c lightyellow]', '[c lime]', '[c limegreen]', '[c linen]', '[c magenta]', '[c maroon]', '[c mediumaquamarine]', '[c mediumblue]', '[c mediumorchid]', '[c mediumpurple]', '[c mediumseagreen]', '[c mediumslateblue]', '[c mediumspringgreen]', '[c mediumturquoise]', '[c mediumvioletred]', '[c midnightblue]', '[c mintcream]', '[c mistyrose]', '[c moccasin]', '[c navajowhite]', '[c navy]', '[c oldlace]', '[c olive]', '[c olivedrab]', '[c orange]', '[c orangered]', '[c orchid]', '[c palegoldenrod]', '[c palegreen]', '[c paleturquoise]', '[c palevioletred]', '[c papayawhip]', '[c peachpuff]', '[c peru]', '[c pink]', '[c plum]', '[c powderblue]', '[c purple]', '[c red]', '[c rosybrown]', '[c royalblue]', '[c saddlebrown]', '[c salmon]', '[c sandybrown]', '[c seagreen]', '[c seashell]', '[c sienna]', '[c silver]', '[c skyblue]', '[c slateblue]', '[c slategray]', '[c snow]', '[c springgreen]', '[c steelblue]', '[c tan]', '[c teal]', '[c thistle]', '[c tomato]', '[c turquoise]', '[c violet]', '[c wheat]', '[c white]', '[c whitesmoke]', '[c yellow]', '[c yellowgreen]', '[/c]']
const COMMON = ['[u]', '[/u]', '[trn]', '[/trn]', '[!trs]', '[/!trs]', '[com]', '[/com]', '[s]', '[/s]', '[lang]', '[/lang]', '[ex]', '[/ex]']
const REPLACEABLES = ['[b]', '[/b]', '[i]', '[/i]', '[p]', '[/p]', '[ref]', '[/ref]', '[sub]', '[/sub]', '[sup]', '[/sup]']

module.exports = {
  TAB,
  SKIPS,
  MEANINGS,
  COLORS,
  COMMON,
  REPLACEABLES,
}
