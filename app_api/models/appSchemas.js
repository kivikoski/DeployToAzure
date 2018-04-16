const mongoose = require ('mongoose');

const duofppSchema = new mongoose.Schema ({season:String, value:String});
const squadfppSchema = new mongoose.Schema ({season:String, value:String});

mongoose.model ('duofpp', duofppSchema, 'duofpp');
mongoose.model ('squadfpp', squadfppSchema, 'squadfpp');
