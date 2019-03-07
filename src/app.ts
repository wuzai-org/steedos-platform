var util = require("./util");

import { Dictionary, JsonMap, getString } from '@salesforce/ts-types';

export const Apps: Dictionary<JsonMap> = {}
export const AppManager = {
    
    loadFile: (filePath: String)=>{
        let json:JsonMap = util.loadFile(filePath);
        return AppManager.loadJSON(json);
    },

    loadJSON(json: JsonMap) {
        if (AppManager.validate(json)){
            let _id = getString(json, "_id") || getString(json, "name") ;
            if (_id)
                Apps[_id] = json
        }
    },
    
    validate(json: JsonMap): boolean {
        let name = getString(json, "name");
        if (name)
            return true
        else
            return false
    },

    remove(name: String) {
        if (Apps.name)
            delete Apps.name
    },

    loadStandardApps() {
    }

}