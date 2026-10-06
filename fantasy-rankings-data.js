// Player rankings used by fantasy-trade-calculator.html.
// QB order and values come from the QB Rankings sheet (Value out of 1000).
// RB and WR lists come from Fantasy_Football_ROS_Rankings_Official_Names.xlsx;
// the spreadsheet's TE sheet is still a work in progress, so TE uses the calculator's built-in list.
// Dynasty mirrors rest-of-season until dedicated dynasty rankings are added.
const redraftLists = {
    "QB": "Josh Allen|Brock Purdy|Patrick Mahomes|Joe Burrow|Dak Prescott|Lamar Jackson|Trevor Lawrence|Tyler Shough|Jared Goff|Caleb Williams|Bryce Young|Jalen Hurts|Drake Maye|Jayden Daniels|Sam Darnold|Bo Nix|Matthew Stafford|Kirk Cousins|Jordan Love|C.J. Stroud|Justin Herbert|Jacoby Brissett|Aaron Rodgers|Daniel Jones|Michael Penix Jr.|Kyler Murray|Jameis Winston|Deshaun Watson|Geno Smith|Malik Willis|Cam Ward",
    "RB": "Jahmyr Gibbs|Bijan Robinson|Kenneth Walker III|Jonathan Taylor|Derrick Henry|Christian McCaffrey|Chase Brown|Kyren Williams|Javonte Williams|James Cook|Breece Hall|Chuba Hubbard|Ashton Jeanty|Jeremiyah Love|Bhayshul Tuten|Jaylen Warren|D'Andre Swift|Quinshon Judkins|Cam Skattebo|TreVeyon Monangai|David Montgomery|Jordan Mason|Rhamondre Stevenson|TreVeyon Henderson|Omarion Hampton|Travis Etienne Jr.|Trevor Etienne|Keaton Mitchell|Zach Charbonnet|Tony Pollard",
    "WR": "Jaxon Smith-Njigba|Puka Nacua|CeeDee Lamb|Amon-Ra St. Brown|Ja'Marr Chase|Chris Olave|Nico Collins|Zay Flowers|Tetairoa McMillan|Justin Jefferson|Garrett Wilson|Drake London|Parker Washington|Christian Watson|Davante Adams|Rashee Rice|Tee Higgins|A.J. Brown|Jalen Coker|Michael Wilson|Matthew Golden|George Pickens|DeVonta Smith|Jaylen Waddle|Carnell Tate|D.J. Moore|Tetairoa McMillan|Boston Scott|Deebo Samuel|Malik Nabers|D.K. Metcalf|Stefon Diggs|Luther Burden III|Conner Weigman|Emeka Egbuka|Jameson Williams|Malik Washington|Tre Tucker|Mike Evans",
    "TE": "Brock Bowers|Trey McBride|George Kittle|Sam LaPorta|T.J. Hockenson|Mark Andrews|David Njoku|Dalton Kincaid|Kyle Pitts|Evan Engram|Jake Ferguson|Cole Kmet"
};

// Explicit base values (before league-setting adjustments). Positions without values are scored by rank.
const redraftValues = {
    QB: "817|755|726|709|687|684|653|641|613|600|583|572|555|550|538|527|524|504|492|477|468|456|438|426|403|386|368|363|340|325|304"
};

window.fantasyRankingSnapshot = {
    lists: {
        redraft: redraftLists,
        dynasty: { ...redraftLists }
    },
    values: {
        redraft: redraftValues,
        dynasty: { ...redraftValues }
    },
    sourceNotes: {
        redraft: "Rest-of-season rankings from the Fantasy Football ROS Rankings spreadsheet. QB values use the sheet's 1000-point scale; TE rankings are a work in progress.",
        dynasty: "Dynasty rankings are not available yet, so rest-of-season rankings are shown."
    }
};
