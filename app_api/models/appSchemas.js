const mongoose = require ('mongoose');

const duofppSchema = new mongoose.Schema ({Season:String, value:String});
const squadfppSchema = new mongoose.Schema ({Season:String, value:String});

mongoose.model ('duofpp', duofppSchema, 'statslist');
mongoose.model ('squadfpp', squadfppSchema, 'statslist');
