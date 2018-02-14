/* GET home page */
var statslist = function(req, res){
    res.render('duofpp',{
        stats:
        [
            {season:'Matches Played', value:'95'},
            {season:'Top 10', value:'39 (41.05%)'},
            {season:'Wins', value:'16 (16.84%)'},
            {season:'Kills', value:'174'},
            {season:'Kill/Death ratio', value:'2.2'},
            {season:'Longest kill', value:'442m'},
            {season:'Headshots', value:'45 (25.86%)'}
        ]});
};
module.exports = {
    statslist
};