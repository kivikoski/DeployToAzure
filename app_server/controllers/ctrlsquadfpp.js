/* GET home page */
var statslist = function(req, res){
    res.render('squadfpp',{
        stats:
            [
                {season:'Matches Played', value:'122'},
                {season:'Top 10', value:'78 (63.93%)'},
                {season:'Wins', value:'32 (26.23%)'},
                {season:'Kills', value:'277'},
                {season:'Kill/Death ratio', value:'2.95'},
                {season:'Longest kill', value:'385m'},
                {season:'Headshots', value:'67 (24.19%)'}
        ]});
};
module.exports = {
    statslist
};